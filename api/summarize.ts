export const maxDuration = 60;
import { GoogleGenAI } from "@google/genai";

function getModels(): string[] {
  return [
    "gemini-3.1-flash-lite",
    "gemini-2.5-flash",
    "gemini-3.5-flash",
    "gemini-2.5-flash-lite",
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

  let text = "";
  try {
    const body = await req.json();
    text = body.text || "";
    
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
    let responseStream = null;
    let lastError = null;
    let breakOuter = false;
    
    for (const model of textModels) {
      if (breakOuter) break;
      let retries = 1;
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

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              controller.enqueue(encoder.encode(chunk.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(stream, { 
      status: 200, 
      headers: { 
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      } 
    });
  } catch (error: any) {
    console.error("Gemini API Error in summarize:", error);
    
    const textStr = String(text || "").trim();
    const cleanText = textStr.replace(/\s+/g, " ");
    const sentences = cleanText.split(/(?<=[.!?])\s+/).filter(s => s.length > 10);
    const excerpt = sentences.slice(0, 4).join(" ");
    
    const fallbackLecture = `Namaste! Aaj hum is topic ko thoda short and simple way mein offline/backup mode mein discuss karenge. ` +
      `Is chapter ke core highlights par dhayan dein toh: "${excerpt || "Welcome to our structured learning session."}" ` +
      `Ye rules and classifications medical device sector mein safety standards compliance maintain karne ke liye basic and necessary foundation provide karte hain. ` +
      `In guidelines ko carefully follow karna device validation ke liye bohot critical hai. Safe learning!`;

    return new Response(fallbackLecture, {
      status: 200,
      headers: { 
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform'
      }
    });
  }
}
