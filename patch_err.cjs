const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldCode = `      if (!response.ok) throw new Error("Failed to get summary");`;
const newCode = `      if (!response.ok) {
        const errText = await response.text();
        console.error("Summarize API Error:", errText);
        throw new Error("Failed to get summary: " + errText);
      }`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched error throwing");
