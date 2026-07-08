import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.list();
  const models = [];
  for await (const m of response) {
    if (m.name.includes("gemini") && !m.name.includes("tts") && !m.name.includes("image") && !m.name.includes("audio") && !m.name.includes("omni") && !m.name.includes("embedding") && !m.name.includes("live")) {
      // Extract model name without "models/" prefix
      models.push(m.name.replace("models/", ""));
    }
  }
  
  // Sort by version number
  models.sort((a, b) => {
    const aMatch = a.match(/gemini-(\d+\.\d+|\d+)/);
    const bMatch = b.match(/gemini-(\d+\.\d+|\d+)/);
    const aVer = aMatch ? parseFloat(aMatch[1]) : 0;
    const bVer = bMatch ? parseFloat(bMatch[1]) : 0;
    if (aVer !== bVer) {
      return bVer - aVer; // Descending
    }
    // Prioritize pro over flash, and non-lite over lite
    const aRank = (a.includes("pro") ? 2 : (a.includes("flash") && !a.includes("lite") ? 1 : 0));
    const bRank = (b.includes("pro") ? 2 : (b.includes("flash") && !b.includes("lite") ? 1 : 0));
    return bRank - aRank;
  });
  
  console.log(models);
}
main().catch(console.error);
