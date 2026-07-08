const fs = require('fs');
let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');

content = content.replace(
  'content: () => pdfExportRef.current,',
  'contentRef: pdfExportRef,'
);

fs.writeFileSync('src/components/NotesDownloadModal.tsx', content);
console.log("Patched NotesDownloadModal.tsx with contentRef");
