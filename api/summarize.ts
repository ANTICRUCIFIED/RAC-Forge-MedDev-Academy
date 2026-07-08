export const runtime = 'edge';
export const maxDuration = 60;
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
