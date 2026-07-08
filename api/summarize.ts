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
    const { text } = body;
    
    if (!text) {
      return new Response(JSON.stringify({ error: 'Text is required' }), { 
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
    const prompt = `Act as an expert lecturer or trainer. Deliver a short, engaging lecture (about 4-6 sentences) based on the following chapter notes. Do NOT just read the text. Instead, explain the core concepts naturally in Hinglish (a conversational mix of Hindi and English). Use English for complex technical or regulatory terms, and Hindi for the conversational and explanatory parts. Speak directly to the learner as if you are training them in a classroom. Keep it concise so it can be easily spoken out loud. Content: "${text.substring(0, 5000)}"`;
    
    
    
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
              temperature: 0.7,
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

    return new Response(JSON.stringify({ summary: response?.text || "" }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ 
      error: "Failed to generate summary", 
      details: error.message || String(error) 
    }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
