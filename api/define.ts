export const config = {
  runtime: 'edge',
};

import { GoogleGenAI } from "@google/genai";

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
    
    let response;
    let retries = 3;
    while (retries > 0) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            temperature: 0.3,
          }
        });
        break;
      } catch (error: any) {
        retries--;
        if (retries === 0 || error?.status !== 503) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
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
