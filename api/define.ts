export const maxDuration = 60;
import { GoogleGenAI } from "@google/genai";

async function getModels(ai: any): Promise<string[]> {
  try {
    const modelsList = await ai.models.list();
    const textModels: string[] = [];
    for await (const m of modelsList) {
      const name = m.name.replace("models/", "");
      if (
        name.includes("gemini") &&
        !name.includes("tts") &&
        !name.includes("image") &&
        !name.includes("audio") &&
        !name.includes("omni") &&
        !name.includes("embedding") &&
        !name.includes("live") &&
        !name.includes("robotics") &&
        !name.includes("computer-use")
      ) {
        textModels.push(name);
      }
    }
    
    textModels.sort((a, b) => {
      const aMatch = a.match(/gemini-(\d+\.\d+|\d+)/);
      const bMatch = b.match(/gemini-(\d+\.\d+|\d+)/);
      const aVer = aMatch ? parseFloat(aMatch[1]) : 0;
      const bVer = bMatch ? parseFloat(bMatch[1]) : 0;
      if (aVer !== bVer) return bVer - aVer;
      
      const aRank = a.includes("pro") ? 2 : (a.includes("flash") && !a.includes("lite") ? 1 : 0);
      const bRank = b.includes("pro") ? 2 : (b.includes("flash") && !b.includes("lite") ? 1 : 0);
      return bRank - aRank;
    });

    if (textModels.length > 0) {
      return textModels;
    }
  } catch (err) {
    console.error("Model list fetch failed, using fallbacks:", err);
  }
  
  return [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-1.5-flash",
    "gemini-2.5-pro",
    "gemini-1.5-pro"
  ];
}

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }

  try {
    const body = await req.json();
    const { term, context } = body;
    
    if (!term) {
      return new Response(JSON.stringify({ error: 'Term is required' }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    
    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY is not configured in Vercel Environment Variables' }), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `You are a medical device regulatory and scientific glossary assistant. Define the following term precisely in the context of medical devices, cardiology, or regulatory affairs.
Provide a JSON response with the following keys:
- "name": The term properly capitalized.
- "category": A 1-2 word category (e.g., "Pathology", "Biomaterial", "Anatomy", "Device", "Regulatory").
- "definition": A 2-3 sentence definition.
- "examples": An array of 1 to 3 string examples related to it.

Term to define: "${term}"
${context ? `Context: "${context}"` : ''}

Respond ONLY in valid JSON. Do not include markdown code block formatting (like \`\`\`json) or any other text.`;
    
    
    
    const textModels = await getModels(ai);

    
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
          if (status === 503 || status === 429) {
            retries--;
            if (retries > 0) {
              await new Promise(resolve => setTimeout(resolve, 1000));
              continue;
            }
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
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to generate definition", 
      details: error.message || String(error) 
    }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
