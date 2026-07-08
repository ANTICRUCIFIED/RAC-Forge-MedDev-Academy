const fs = require('fs');

const files = ['api/tts.ts', 'api/summarize.ts', 'api/define.ts'];
for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/export const config = \{\s*runtime: 'edge',\s*\};\s*/g, 'export const maxDuration = 60;\n');
    fs.writeFileSync(file, content);
    console.log(`Patched ${file}`);
  }
}
