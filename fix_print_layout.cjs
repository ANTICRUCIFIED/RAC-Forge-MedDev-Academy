const fs = require('fs');

let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');

const replacementStr = `              .overflow-x-auto, .overflow-hidden, .overflow-y-auto { 
                overflow: visible !important; 
              }
              .grid { display: block !important; }
              .grid > div { margin-bottom: 1rem; page-break-inside: avoid; break-inside: avoid; }
              .flex { flex-wrap: wrap !important; }
              svg { 
                max-width: 100% !important; 
                height: auto !important;
                max-height: 170mm !important; 
              }`;

content = content.replace(
  /\.overflow-x-auto,\s*\.overflow-hidden,\s*\.overflow-y-auto\s*\{\s*overflow:\s*visible\s*!important;\s*\}\s*svg\s*\{\s*max-width:\s*100%\s*!important;\s*height:\s*auto\s*!important;\s*max-height:\s*170mm\s*!important;\s*\}/,
  replacementStr
);

fs.writeFileSync('src/components/NotesDownloadModal.tsx', content);
console.log("Updated print layout CSS in NotesDownloadModal.tsx");
