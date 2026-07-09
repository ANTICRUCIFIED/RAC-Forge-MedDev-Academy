import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

function getModels(): string[] {
  return [
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-3.5-flash",
    "gemini-3.1-flash-lite",
    "gemini-flash-latest",
    "gemini-3.1-pro-preview",
    "gemini-2.5-pro"
  ];
}

function isRateLimited(error: any): boolean {
  const errStr = String(error?.message || error).toLowerCase();
  const status = String(error?.status || error?.response?.status || "").toLowerCase();
  const code = error?.code || error?.response?.status || error?.status;
  
  return (
    code === 429 ||
    status === "429" ||
    status.includes("429") ||
    status.includes("resource_exhausted") ||
    status.includes("too many requests") ||
    errStr.includes("429") ||
    errStr.includes("quota") ||
    errStr.includes("resource_exhausted") ||
    errStr.includes("limit exceeded") ||
    errStr.includes("rate limit")
  );
}

function isServiceUnavailable(error: any): boolean {
  const errStr = String(error?.message || error).toLowerCase();
  const status = String(error?.status || error?.response?.status || "").toLowerCase();
  const code = error?.code || error?.response?.status || error?.status;

  return (
    code === 503 ||
    status === "503" ||
    status.includes("503") ||
    status.includes("unavailable") ||
    status.includes("service unavailable") ||
    errStr.includes("503") ||
    errStr.includes("unavailable") ||
    errStr.includes("overloaded") ||
    errStr.includes("high demand") ||
    errStr.includes("try again later")
  );
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/define", async (req, res) => {
    try {
      const { term, context } = req.body;
      if (!term) {
        return res.status(400).json({ error: "Term is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API key is not configured. Please add GEMINI_API_KEY or GOOGLE_API_KEY." });
      }
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a medical device regulatory and scientific glossary assistant. 
Define the following term precisely in the context of medical devices, cardiology, or regulatory affairs.
Provide a JSON response with the following keys:
- "name": The term properly capitalized.
- "category": A 1-2 word category (e.g., "Pathology", "Biomaterial", "Anatomy", "Device", "Regulatory").
- "definition": A 2-3 sentence definition.
- "examples": An array of 1 to 3 string examples related to it.

Term to define: "${term}"
${context ? `Context: "${context}"` : ''}

Respond ONLY in valid JSON. Do not include markdown code block formatting (like \`\`\`json) or any other text.`;

      const textModels = getModels();

      
      let response;
      let lastError;
      let breakOuter = false;
      
      for (const model of textModels) {
        if (breakOuter) break;
        let retries = 2;
        let success = false;
        while (retries > 0 && !success) {
          try {
            response = await ai.models.generateContent({
              model: model,
              contents: prompt,
              config: {
                responseMimeType: "application/json",
                temperature: 0.3,
              }
            });
            success = true;
            break;
          } catch (error: any) {
            lastError = error;
            if (isRateLimited(error)) {
              retries = 0; // Don't retry on rate limits!
            } else if (isServiceUnavailable(error)) {
              retries--;
              if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                continue;
              }
            } else {
              retries = 0; // Other errors (e.g., NOT_FOUND or INVALID_ARGUMENT), don't retry
            }
            console.warn(`Model ${model} failed: ${error.message || String(error)}`);
            break;
          }
        }
        if (success) {
          console.log(`Successfully used model: ${model}`);
          break;
        }
      }
      
      if (!response) {
        throw lastError || new Error("All fallback models failed.");
      }
      let jsonText = response?.text || "{}";
      // Sometimes it might still contain markdown blocks despite instructions
      if (jsonText.startsWith("```json")) {
        jsonText = jsonText.replace(/^```json\n/, "").replace(/\n```$/, "");
      }
      const data = JSON.parse(jsonText);
      
      res.json({
        id: term.toLowerCase().replace(/\s+/g, "_"),
        name: data.name || term,
        category: data.category || "General",
        definition: data.definition || "Definition not available.",
        examples: data.examples || []
      });

    } catch (error: any) {
      console.error("Gemini API Error:", error);
      
      const fallbackGlossary: Record<string, {name: string, category: string, definition: string, examples: string[]}> = {
        "classification": {
          name: "Classification",
          category: "Regulatory",
          definition: "The systematic categorization of medical devices into risk classes (e.g., Class I, IIa, IIb, III) to determine appropriate regulatory controls and conformity assessments.",
          examples: ["Classifying scalpels as Class I.", "Classifying heart valves as Class III."]
        },
        "invasive": {
          name: "Invasive Device",
          category: "Device Type",
          definition: "A medical device which, in whole or in part, penetrates inside the body, either through a body orifice or through the surface of the body.",
          examples: ["Endoscopes passing through body orifices.", "Surgical needles penetrating skin tissue."]
        },
        "active": {
          name: "Active Device",
          category: "Device Type",
          definition: "Any medical device whose operation depends on a source of electrical energy or any source of power other than that generated by the human body or gravity.",
          examples: ["Battery-operated cardiac pacemakers.", "Ultrasonic diagnostic imaging transducers."]
        },
        "non-invasive": {
          name: "Non-Invasive Device",
          category: "Device Type",
          definition: "Devices that do not penetrate any part of the body, remaining completely external to the skin surface.",
          examples: ["Wound dressings applied to intact skin.", "Electrocardiograph recording electrodes."]
        },
        "intended purpose": {
          name: "Intended Purpose",
          category: "Regulatory",
          definition: "The exact therapeutic, diagnostic, or surgical use for which the device is intended according to the manufacturer's official labeling, user guides, or promotional materials.",
          examples: ["A syringe indicated for single-use subcutaneous injections.", "Software designed for diagnostic imaging review."]
        }
      };

      const termStr = String(req.body.term || "Term").trim();
      const lower = termStr.toLowerCase();
      let matched = Object.entries(fallbackGlossary).find(([k]) => lower.includes(k))?.[1];
      if (!matched) {
        matched = {
          name: termStr.charAt(0).toUpperCase() + termStr.slice(1),
          category: "Glossary",
          definition: `A critical regulatory and technical term defined in medical device classification guidelines. This term directly influences safety assessments and compliance profiles.`,
          examples: [`Evaluating standard criteria for ${termStr}.`, `Analyzing compliance files for ${termStr}.`]
        };
      }

      res.status(200).json({
        id: termStr.toLowerCase().replace(/\s+/g, "_"),
        name: matched.name,
        category: matched.category,
        definition: matched.definition,
        examples: matched.examples,
        offline_mode: true
      });
    }
  });

  
  app.post("/api/summarize", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }
      const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API key is not configured. Please add GEMINI_API_KEY or GOOGLE_API_KEY." });
      }
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Act as an expert lecturer or trainer. Deliver a short, engaging lecture (about 4-6 sentences) based on the following chapter notes. Do NOT just read the text. Instead, explain the core concepts naturally in Hinglish (a conversational mix of Hindi and English). Use English for complex technical or regulatory terms, and Hindi for the conversational and explanatory parts. Speak directly to the learner as if you are training them in a classroom. Keep it concise so it can be easily spoken out loud. Content: "${text.substring(0, 5000)}"`;
      
      const textModels = getModels();

      let responseStream = null;
      let lastError;
      let breakOuter = false;
      
      for (const model of textModels) {
        if (breakOuter) break;
        let retries = 2;
        let success = false;
        while (retries > 0 && !success) {
          try {
            responseStream = await ai.models.generateContentStream({
              model: model,
              contents: prompt,
              config: {
                temperature: 0.7,
              }
            });
            success = true;
            break;
          } catch (error: any) {
            lastError = error;
            if (isRateLimited(error)) {
              retries = 0; // Don't retry on rate limits!
            } else if (isServiceUnavailable(error)) {
              retries--;
              if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                continue;
              }
            } else {
              retries = 0; // Other errors (e.g., NOT_FOUND or INVALID_ARGUMENT), don't retry
            }
            console.warn(`Model ${model} failed: ${error.message || String(error)}`);
            break;
          }
        }
        if (success) {
          console.log(`Successfully opened stream using model: ${model}`);
          break;
        }
      }
      
      if (!responseStream) {
        throw lastError || new Error("All fallback models failed.");
      }

      // Set headers for chunked transfer streaming
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");

      for await (const chunk of responseStream) {
        if (chunk.text) {
          res.write(chunk.text);
        }
      }
      res.end();

    } catch (error: any) {
      console.error("Gemini API Error in summarize:", error);
      
      if (!res.headersSent) {
        // Fallback to local streaming summary to prevent failing client responses or 429 exceptions
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.setHeader("Cache-Control", "no-cache, no-transform");
        res.setHeader("Connection", "keep-alive");
        
        const textStr = String(req.body.text || "").trim();
        const cleanText = textStr.replace(/\s+/g, " ");
        // Get first few sentences or a reasonable portion
        const sentences = cleanText.split(/(?<=[.!?])\s+/).filter(s => s.length > 10);
        const excerpt = sentences.slice(0, 4).join(" ");
        
        const fallbackLecture = `Namaste! Aaj hum is topic ko thoda short and simple way mein offline/backup mode mein discuss karenge. ` +
          `Is chapter ke core highlights par dhayan dein toh: "${excerpt || "Welcome to our structured learning session."}" ` +
          `Ye rules and classifications medical device sector mein safety standards compliance maintain karne ke liye basic and necessary foundation provide karte hain. ` +
          `In guidelines ko carefully follow karna device validation ke liye bohot critical hai. Safe learning!`;
          
        // Write the lecture out in chunks to simulate a live stream!
        const words = fallbackLecture.split(" ");
        for (let i = 0; i < words.length; i++) {
          res.write(words[i] + " ");
          // small artificial delay to simulate streaming chunk-by-chunk
          await new Promise(resolve => setTimeout(resolve, 20));
        }
        res.end();
      } else {
        res.end();
      }
    }
  });

  app.post("/api/tts", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "API key is not configured. Please add GEMINI_API_KEY or GOOGLE_API_KEY." });
      }
      const ai = new GoogleGenAI({ apiKey });
      const ttsModels = [
        "gemini-3.1-flash-tts-preview",
        "gemini-2.5-flash-preview-tts",
        "gemini-2.5-pro-preview-tts"
      ];

      let response;
      let lastError;
      let breakOuter = false;

      for (const model of ttsModels) {
        if (breakOuter) break;
        let retries = 2;
        let success = false;
        while (retries > 0 && !success) {
          try {
            response = await ai.models.generateContent({
              model: model,
              contents: text,
              config: {
                responseModalities: ["AUDIO"],
                speechConfig: {
                  voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: "Zephyr" }
                  }
                }
              }
            });
            success = true;
            break;
          } catch (error: any) {
            lastError = error;
            if (isRateLimited(error)) {
              retries = 0;
            } else if (isServiceUnavailable(error)) {
              retries--;
              if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                continue;
              }
            } else {
              retries = 0;
            }
            console.warn(`Model ${model} failed: ${error.message || String(error)}`);
            break;
          }
        }
        if (success) break;
      }

      if (!response) {
        throw lastError || new Error("TTS generation failed");
      }

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64Audio) {
        return res.status(500).json({ error: "Failed to generate audio" });
      }

      res.json({ audio: base64Audio });
    } catch (error: any) {
      console.error("TTS Error:", error);
      res.status(200).json({ 
        audio: null,
        offline_mode: true,
        details: error?.message || String(error)
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
