const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const newEndpoint = `
  app.post("/api/summarize", async (req, res) => {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = \`Summarize the following chapter content in Hinglish (a mix of Hindi and English). Keep it conversational, like a teacher explaining to a student. Use English only for complex technical or regulatory terms, and Hindi for the conversational connecting parts. The summary should be concise (around 3-4 sentences) so it can be easily spoken out loud. Content: "\${text.substring(0, 5000)}"\`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          temperature: 0.7,
        }
      });
      
      res.json({ summary: response.text });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to generate summary" });
    }
  });
`;

content = content.replace('// Vite middleware for development', newEndpoint + '\n  // Vite middleware for development');
fs.writeFileSync('server.ts', content);
console.log("Patched server.ts");
