export const runtime = 'edge';
export const maxDuration = 60;
import { GoogleGenAI } from "@google/genai";

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
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const body = await req.json();
    const { text } = body;
    
    if (!text) {
      return new Response(JSON.stringify({ error: 'Text is required' }), { status: 400 });
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
                  prebuiltVoiceConfig: { voiceName: 'Zephyr' }
                }
              }
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
            retries = 0;
          }
          console.warn(`Model ${model} failed: ${error.message || String(error)}`);
          break;
        }
      }
      if (success) break;
    }
    
    if (!response) {
      return new Response(JSON.stringify({ 
        audio: null,
        offline_mode: true,
        details: 'TTS generation skipped or rate limited'
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    if (!base64Audio) {
      return new Response(JSON.stringify({ 
        audio: null, 
        offline_mode: true,
        details: 'No inline data generated'
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ audio: base64Audio }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error("TTS API Error:", error);
    return new Response(JSON.stringify({ 
      audio: null,
      offline_mode: true,
      details: error.message || String(error)
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
