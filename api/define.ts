export const runtime = 'edge';
export const maxDuration = 60;
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

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }

  let term = "";
  try {
    const body = await req.json();
    term = body.term || "";
    const { context } = body;
    
    if (!term) {
      return new Response(JSON.stringify({ error: 'Term is required' }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ 
        error: 'API key is not configured. Please add GEMINI_API_KEY or GOOGLE_API_KEY in your Vercel Environment Variables.' 
      }), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `You are a medical device regulatory and scientific glossary assistant. Define the following term precisely in the context of medical devices, cardiology, or regulatory affairs.
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
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.replace(/^```json\n/, "").replace(/\n```$/, "");
    }
    
    const data = JSON.parse(jsonText);
    
    return new Response(JSON.stringify({
      id: term.toLowerCase().replace(/\s+/g, "_"),
      name: data.name || term,
      category: data.category || "General",
      definition: data.definition || "Definition not available.",
      examples: data.examples || []
    }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error: any) {
    console.error("Gemini API Error in define:", error);
    
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

    const termStr = String(term || "Term").trim();
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

    return new Response(JSON.stringify({
      id: termStr.toLowerCase().replace(/\s+/g, "_"),
      name: matched.name,
      category: matched.category,
      definition: matched.definition,
      examples: matched.examples,
      offline_mode: true
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
