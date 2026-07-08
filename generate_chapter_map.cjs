const fs = require('fs');
let imports = '';
let mapEntries = '';
for(let i=1; i<=30; i++) {
  imports += `import Chapter${i} from './components/Chapter${i}';\n`;
  mapEntries += `  ${i}: Chapter${i},\n`;
}
const fileContent = `import React from 'react';\n${imports}\nexport const ChapterComponents: Record<number, React.FC> = {\n${mapEntries}};\n`;
fs.writeFileSync('src/chapterComponents.ts', fileContent);
console.log('Chapter map generated.');
