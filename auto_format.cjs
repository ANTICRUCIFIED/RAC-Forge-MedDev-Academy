const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Chapter') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip Chapter 1, 2, 30 as they are already heavily styled
  if (['Chapter1.tsx', 'Chapter30.tsx'].includes(file)) continue;

  let changed = false;

  // Highlight Notes
  const noteRegex = /<p>\s*(?:<strong>)?Note:?(?:<\/strong>)?\s*(.*?)(?:<\/p>)/gi;
  if (noteRegex.test(content)) {
    content = content.replace(noteRegex, `<div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-xl text-amber-900 shadow-sm"><strong className="flex items-center gap-2 text-lg">⚠️ Note</strong><p className="mt-2 mb-0 text-amber-800">$1</p></div>`);
    changed = true;
  }

  // Highlight Important / Remember
  const impRegex = /<p>\s*(?:<strong>)?(?:Important|Remember):?(?:<\/strong>)?\s*(.*?)(?:<\/p>)/gi;
  if (impRegex.test(content)) {
    content = content.replace(impRegex, `<div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-xl text-blue-900 shadow-sm"><strong className="flex items-center gap-2 text-lg">💡 Important</strong><p className="mt-2 mb-0 text-blue-800">$1</p></div>`);
    changed = true;
  }

  // Highlight Examples
  const exRegex = /<p>\s*(?:<strong>)?Examples?:?(?:<\/strong>)?\s*(.*?)(?:<\/p>)/gi;
  if (exRegex.test(content)) {
    content = content.replace(exRegex, `<div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">$1</p></div>`);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Formatted ${file}`);
  }
}
console.log('Auto-formatting complete.');
