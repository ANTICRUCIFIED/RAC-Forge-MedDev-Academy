const fs = require('fs');

let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');

const replacementStr = `              table { page-break-inside: auto; break-inside: auto; }
              tr, pre, blockquote { 
                page-break-inside: avoid; 
                break-inside: avoid; 
              }`;

content = content.replace(
  /table,\s*pre,\s*blockquote\s*\{\s*page-break-inside:\s*avoid;\s*break-inside:\s*avoid;\s*\}/,
  replacementStr
);

fs.writeFileSync('src/components/NotesDownloadModal.tsx', content);
console.log("Updated print table CSS in NotesDownloadModal.tsx");
