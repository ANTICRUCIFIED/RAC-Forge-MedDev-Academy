const fs = require('fs');

const modelsFetchStr = `
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
    } catch (err) {
      console.error("Model list fetch failed", err);
      textModels = ["gemini-3.5-flash", "gemini-3.1-pro-preview", "gemini-2.5-flash", "gemini-2.0-flash"];
    }
`;

const files = ['api/summarize.ts', 'api/define.ts'];
const defineRegex = /const textModels = \[\s*"gemini-3\.1-flash",\s*"gemini-3\.1-pro-preview",\s*"gemini-2\.5-flash",\s*"gemini-2\.0-flash",\s*"gemini-1\.5-flash"\s*\];/g;

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(defineRegex, modelsFetchStr);
    fs.writeFileSync(file, content);
    console.log("Patched " + file);
  }
}
