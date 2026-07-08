const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Remove the individual imports
const importRegex = /import Chapter\d+ from '\.\/components\/Chapter\d+';\n/g;
content = content.replace(importRegex, '');

// Add the ChapterComponents import
content = content.replace(/import WordMeaningPopup/, "import { ChapterComponents } from './chapterComponents';\nimport WordMeaningPopup");

// Replace the massive ternary
const ternaryRegex = /\{activeChapter === 1 \? <Chapter1 \/> :[\s\S]*?<Chapter30 \/>\n\s*}/;
content = content.replace(ternaryRegex, `{(() => {\n                  const ActiveChapter = ChapterComponents[activeChapter];\n                  return ActiveChapter ? <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h3:text-xl prose-a:text-blue-600 prose-img:rounded-xl"><ActiveChapter /></div> : <p>Chapter not found.</p>;\n                })()}`);

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx updated.');
