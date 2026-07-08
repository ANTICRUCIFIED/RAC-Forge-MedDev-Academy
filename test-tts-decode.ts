import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-tts-preview",
    contents: "Hello",
    config: { 
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } }
    }
  });
  const data = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if(data) {
    const buf = Buffer.from(data, 'base64');
    console.log("Header:", buf.subarray(0, 16).toString('hex'));
    console.log("String header:", buf.subarray(0, 16).toString());
  }
}
main().catch(console.error);
