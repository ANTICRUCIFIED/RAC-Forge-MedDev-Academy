const fs = require('fs');

const fallbackLogicString = (configProps) => `
      const textModels = [
        "gemini-3.1-flash",
        "gemini-3.1-pro-preview",
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-1.5-flash"
      ];
      
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
${configProps}
              }
            });
            success = true;
            break;
          } catch (error) {
            lastError = error;
            const status = error?.status || (error?.response?.status);
            if (status === 503 || status === 429) {
              retries--;
              if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                continue;
              }
            }
            console.warn(\`Model \${model} failed: \${error.message || String(error)}\`);
            break;
          }
        }
        if (success) {
          console.log(\`Successfully used model: \${model}\`);
          break;
        }
      }
      
      if (!response) {
        throw lastError || new Error("All fallback models failed.");
      }
`;

let content = fs.readFileSync('server.ts', 'utf8');

// Patch define
const defineConfig = `                responseMimeType: "application/json",
                temperature: 0.3,`;
const defineRegex = /let response;[\s\S]*?(?=let jsonText)/;
content = content.replace(defineRegex, fallbackLogicString(defineConfig) + '      ');

// Patch summarize (second occurrence)
// First we isolate the summarize route string
const summarizeStart = 'app.post("/api/summarize"';
const ttsStart = 'app.post("/api/tts"';
const summarizePart = content.substring(content.indexOf(summarizeStart), content.indexOf(ttsStart));
const summarizeConfig = `                temperature: 0.7,`;
const summarizeRegex = /let response;[\s\S]*?(?=res\.json\(\{ summary: response\.text)/;
const patchedSummarizePart = summarizePart.replace(summarizeRegex, fallbackLogicString(summarizeConfig) + '      ');
content = content.replace(summarizePart, patchedSummarizePart);

fs.writeFileSync('server.ts', content);
console.log("Patched server.ts");
