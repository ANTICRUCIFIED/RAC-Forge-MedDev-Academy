const fs = require('fs');

const files = ['server.ts', 'api/summarize.ts', 'api/define.ts'];
for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/catch \(error\)/g, 'catch (error: any)');
    fs.writeFileSync(file, content);
    console.log(`Patched ${file}`);
  }
}
