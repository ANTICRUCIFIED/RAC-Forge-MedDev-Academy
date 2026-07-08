const fs = require('fs');

const fetchLogic = `
let cachedTextModels = null;
let modelsFetchTime = 0;

async function getModels(ai) {
  if (cachedTextModels && Date.now() - modelsFetchTime < 3600000) {
    return cachedTextModels;
  }
  let textModels = [];
  try {
    const modelsList = await ai.models.list();
    for await (const m of modelsList) {
      if (m.name.includes("gemini") && !m.name.includes("tts") && !m.name.includes("image") && !m.name.includes("audio") && !m.name.includes("omni") && !m.name.includes("embedding") && !m.name.includes("live") && !m.name.includes("robotics") && !m.name.includes("computer-use")) {
        textModels.push(m.name.replace("models/", ""));
      }
    }
    textModels.sort((a, b) => {
      const aMatch = a.match(/gemini-(\\d+\\.\\d+|\\d+)/);
      const bMatch = b.match(/gemini-(\\d+\\.\\d+|\\d+)/);
      const aVer = aMatch ? parseFloat(aMatch[1]) : 0;
      const bVer = bMatch ? parseFloat(bMatch[1]) : 0;
      if (aVer !== bVer) return bVer - aVer;
      const aRank = (a.includes("pro") ? 2 : (a.includes("flash") && !a.includes("lite") ? 1 : 0));
      const bRank = (b.includes("pro") ? 2 : (b.includes("flash") && !b.includes("lite") ? 1 : 0));
      return bRank - aRank;
    });
    cachedTextModels = textModels.length > 0 ? textModels : ["gemini-2.5-flash", "gemini-2.0-flash"];
    modelsFetchTime = Date.now();
  } catch (err) {
    console.error("Model list fetch failed", err);
    cachedTextModels = ["gemini-3.5-flash", "gemini-3.1-pro-preview", "gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash"];
  }
  return cachedTextModels;
}
`;

const useLogic = `const textModels = await getModels(ai);`;

const replaceStr = `let textModels = [];
    try {
      const modelsList = await ai.models.list();
      for await (const m of modelsList) {
        if (m.name.includes("gemini") && !m.name.includes("tts") && !m.name.includes("image") && !m.name.includes("audio") && !m.name.includes("omni") && !m.name.includes("embedding") && !m.name.includes("live") && !m.name.includes("robotics") && !m.name.includes("computer-use")) {
          textModels.push(m.name.replace("models/", ""));
        }
      }
      textModels.sort((a, b) => {
        const aMatch = a.match(/gemini-(\\d+\\.\\d+|\\d+)/);
        const bMatch = b.match(/gemini-(\\d+\\.\\d+|\\d+)/);
        const aVer = aMatch ? parseFloat(aMatch[1]) : 0;
        const bVer = bMatch ? parseFloat(bMatch[1]) : 0;
        if (aVer !== bVer) return bVer - aVer;
        const aRank = (a.includes("pro") ? 2 : (a.includes("flash") && !a.includes("lite") ? 1 : 0));
        const bRank = (b.includes("pro") ? 2 : (b.includes("flash") && !b.includes("lite") ? 1 : 0));
        return bRank - aRank;
      });
    } catch (err) {
      console.error("Model list fetch failed", err);
      textModels = ["gemini-3.5-flash", "gemini-3.1-pro-preview", "gemini-2.5-flash", "gemini-2.0-flash"];
    }`;
    
const replaceStr2 = replaceStr.replace(/ {4}/g, '      ');

for (let file of ['api/summarize.ts', 'api/define.ts', 'server.ts']) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add getModels to top
    if (!content.includes('cachedTextModels')) {
      const importPos = content.indexOf('import { GoogleGenAI }');
      const endOfImport = content.indexOf('\n', importPos) + 1;
      content = content.slice(0, endOfImport) + fetchLogic + content.slice(endOfImport);
    }
    
    // Replace inline fetch with getModels()
    // Try both indentations
    let original = content;
    content = content.replace(replaceStr, useLogic);
    content = content.replace(replaceStr2, useLogic);
    
    fs.writeFileSync(file, content);
    console.log("Patched " + file);
  }
}
