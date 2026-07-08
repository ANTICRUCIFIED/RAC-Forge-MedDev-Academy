export const runtime = 'edge';
export const maxDuration = 60;
import { GoogleGenAI } from "@google/genai";

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
                  prebuiltVoiceConfig: { voiceName: 'Zephyr' }
                }
              }
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
      if (success) break;
    }
    
    if (!response) {
      throw lastError || new Error("TTS generation failed");
    }

    
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    if (!base64Audio) {
      return new Response(JSON.stringify({ error: 'Failed to generate audio' }), { status: 500 });
    }

    return new Response(JSON.stringify({ audio: base64Audio }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error("TTS API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
