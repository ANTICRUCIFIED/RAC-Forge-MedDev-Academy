const fs = require('fs');
let content = fs.readFileSync('api/summarize.ts', 'utf8');

content = content.replace(
  'res.status(500).json({ error: "Failed to generate summary" });',
  'res.status(500).json({ error: "Failed to generate summary", details: error.message || String(error) });'
);

fs.writeFileSync('api/summarize.ts', content);
console.log("Patched api/summarize.ts");
