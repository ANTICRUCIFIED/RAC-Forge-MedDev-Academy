import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

function getModels(): string[] {
  return [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-3.1-flash-lite",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash-lite",
    "gemini-1.5-flash",
    "gemini-2.5-pro",
    "gemini-1.5-pro",
    "gemini-3.5-flash",
    "gemini-3.1-pro-preview",
    "gemini-3.1-flash-lite-preview"
  ];
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
      
      for (const model of textModels) {
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
            const status = error?.status || (error?.response?.status);
            const isRateLimit = 
              status === 429 || 
              error?.message?.includes("429") || 
              error?.message?.includes("Quota") || 
              error?.message?.includes("quota") || 
              error?.message?.includes("RESOURCE_EXHAUSTED") ||
              error?.status === "RESOURCE_EXHAUSTED" ||
              error?.code === 429;

            if (isRateLimit) {
              retries = 0; // Don't retry on rate limits!
            } else if (status === 503) {
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
      res.status(500).json({ error: "Failed to generate definition" });
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

      
      let response;
      let lastError;
      
      for (const model of textModels) {
        let retries = 2;
        let success = false;
        while (retries > 0 && !success) {
          try {
            response = await ai.models.generateContent({
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
            const status = error?.status || (error?.response?.status);
            const isRateLimit = 
              status === 429 || 
              error?.message?.includes("429") || 
              error?.message?.includes("Quota") || 
              error?.message?.includes("quota") || 
              error?.message?.includes("RESOURCE_EXHAUSTED") ||
              error?.status === "RESOURCE_EXHAUSTED" ||
              error?.code === 429;

            if (isRateLimit) {
              retries = 0; // Don't retry on rate limits!
            } else if (status === 503) {
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
      res.json({ summary: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ 
        error: "Failed to generate summary",
        details: error?.message || String(error)
      });
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
        "gemini-2.5-flash-preview-tts",
        "gemini-3.1-flash-tts-preview",
        "gemini-2.5-pro-preview-tts"
      ];

      let response;
      let lastError;

      for (const model of ttsModels) {
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
            const status = error?.status || (error?.response?.status);
            const isRateLimit = 
              status === 429 || 
              error?.message?.includes("429") || 
              error?.message?.includes("Quota") || 
              error?.message?.includes("quota") || 
              error?.message?.includes("RESOURCE_EXHAUSTED") ||
              error?.status === "RESOURCE_EXHAUSTED" ||
              error?.code === 429;

            if (isRateLimit) {
              retries = 0;
            } else if (status === 503) {
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
      res.status(500).json({ 
        error: "Failed to generate TTS",
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
