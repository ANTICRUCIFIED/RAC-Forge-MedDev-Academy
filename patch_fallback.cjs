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

function patchFile(filename, isSummarize) {
  if (!fs.existsSync(filename)) return;
  let content = fs.readFileSync(filename, 'utf8');

  // Find the block starting with "let response;" and ending with "}" before "let jsonText" or "return new Response"
  const summarizeConfig = `              temperature: 0.7,`;
  const defineConfig = `              responseMimeType: "application/json",
              temperature: 0.3,`;
  
  const configToUse = isSummarize ? summarizeConfig : defineConfig;
  const newLogic = fallbackLogicString(configToUse);

  const regex = /let response;[\s\S]*?(?=let jsonText|res\.json|return new Response)/;
  content = content.replace(regex, newLogic + '\n    ');
  
  fs.writeFileSync(filename, content);
  console.log(`Patched ${filename}`);
}

patchFile('api/summarize.ts', true);
patchFile('api/define.ts', false);
