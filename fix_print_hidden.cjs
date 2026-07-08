const fs = require('fs');
let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');
content = content.replace(
  'button { display: none !important; }',
  'button, .print-hidden { display: none !important; }'
);
fs.writeFileSync('src/components/NotesDownloadModal.tsx', content);
