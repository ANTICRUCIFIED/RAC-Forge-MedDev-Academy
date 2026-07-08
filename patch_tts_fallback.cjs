const fs = require('fs');
let content = fs.readFileSync('api/tts.ts', 'utf8');

const ttsFallbackLogic = `
    const ttsModels = [
      "gemini-3.1-flash-tts-preview"
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
          console.warn(\`Model \${model} failed: \${error.message || String(error)}\`);
          break;
        }
      }
      if (success) break;
    }
    
    if (!response) {
      throw lastError || new Error("TTS generation failed");
    }
`;

const regex = /const response = await ai\.models\.generateContent\(\{[\s\S]*?\}\);/;
if (regex.test(content)) {
  content = content.replace(regex, ttsFallbackLogic);
  fs.writeFileSync('api/tts.ts', content);
  console.log("Patched api/tts.ts with fallback/retries");
}
