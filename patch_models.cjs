const fs = require('fs');

const files = ['api/summarize.ts', 'api/define.ts', 'server.ts'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/"gemini-2\.5-flash"/g, '"gemini-2.0-flash"');
    fs.writeFileSync(file, content);
    console.log(`Patched ${file}`);
  }
}
