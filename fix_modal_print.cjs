const fs = require('fs');

let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');

const replacementStr = `              .overflow-x-auto, .overflow-hidden, .overflow-y-auto { 
                overflow: visible !important; 
              }
              svg { 
                max-width: 100% !important; 
                height: auto !important;
                max-height: 170mm !important; 
              }`;

content = content.replace(
  /\.overflow-x-auto\s*\{\s*overflow:\s*visible\s*!important;\s*\}\s*svg\s*\{\s*max-width:\s*100%\s*!important;\s*height:\s*auto\s*!important;\s*\}/,
  replacementStr
);

fs.writeFileSync('src/components/NotesDownloadModal.tsx', content);
console.log("Updated print CSS in NotesDownloadModal.tsx");
