const fs = require('fs');
const files = ['api/summarize.ts', 'api/define.ts', 'api/tts.ts'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const checkCode = `
    if (!process.env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY is not configured in Vercel Environment Variables' }), { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });`;
  
  content = content.replace('const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });', checkCode);
  fs.writeFileSync(file, content);
}
console.log("Patched API key checks");
