import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { term, context } = req.body;
    if (!term) {
      return res.status(400).json({ error: "Term is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "GEMINI_API_KEY environment variable is missing on Vercel." });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const prompt = `You are a medical device regulatory and scientific glossary assistant. 
Define the following term precisely in the context of medical devices, cardiology, or regulatory affairs.
Provide a JSON response with the following keys:
- "name": The term properly capitalized.
- "category": A 1-2 word category.
- "definition": A 2-3 sentence definition.
- "examples": An array of 1 to 3 string examples.

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
        break; // Success
      } catch (error: any) {
        retries--;
        if (retries === 0 || error?.status !== 503) {
          throw error;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    let jsonText = response?.text || "{}";
    if (jsonText.startsWith("\`\`\`json")) {
      jsonText = jsonText.replace(/^\`\`\`json\n/, "").replace(/\n\`\`\`$/, "");
    }
    const data = JSON.parse(jsonText);
    
    res.status(200).json({
      id: term.toLowerCase().replace(/\s+/g, "_"),
      name: data.name || term,
      category: data.category || "General",
      definition: data.definition || "Definition not available.",
      examples: data.examples || []
    });

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate definition. " + (error.message || "") });
  }
}
