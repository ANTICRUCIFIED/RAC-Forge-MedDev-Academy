const fs = require('fs');

let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');

const regex = /\/\/ Copy styles from the current document[\s\S]*?printWindow\.document\.close\(\);/m;

const replacementStr = `// Copy styles from the current document
    const styleTags = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(el => el.outerHTML)
      .join('\\n');

    printWindow.document.write(\`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Medical Devices Regulatory Notes</title>
          \${styleTags}
          <style>
            @media print {
              @page { size: A4; margin: 15mm; }
              body { 
                background-color: white !important; 
                -webkit-print-color-adjust: exact; 
                print-color-adjust: exact;
                color: black !important;
              }
              .print-page-break { page-break-after: always; break-after: page; }
              table, pre, blockquote, .mermaid-wrapper { 
                page-break-inside: avoid; 
                break-inside: avoid; 
              }
              h1, h2, h3, h4, h5, h6 { 
                page-break-after: avoid; 
                break-after: avoid; 
              }
              .overflow-x-auto { 
                overflow: visible !important; 
              }
              svg { 
                max-width: 100% !important; 
                height: auto !important; 
              }
              .react-transform-wrapper, .react-transform-component, .react-transform-component > div {
                transform: none !important;
                width: 100% !important;
                height: auto !important;
                min-height: auto !important;
                display: block !important;
                overflow: visible !important;
              }
              .mermaid-wrapper {
                overflow: visible !important;
                height: auto !important;
                min-height: auto !important;
                border: none !important;
                box-shadow: none !important;
                background: transparent !important;
              }
              button, .absolute { display: none !important; }
              .prose { 
                max-width: 100% !important; 
              }
              img {
                max-width: 100% !important;
                height: auto !important;
              }
            }
          </style>
        </head>
        <body class="bg-white">
          <div class="prose prose-slate max-w-none p-8 mx-auto bg-white text-slate-900">
            \${pdfExportRef.current?.innerHTML}
          </div>
          <script>
            window.onload = () => { 
               setTimeout(() => { 
                 window.print(); 
               }, 1000);
            };
          </script>
        </body>
      </html>
    \`);
    printWindow.document.close();`;

if (content.match(regex)) {
  fs.writeFileSync('src/components/NotesDownloadModal.tsx', content.replace(regex, replacementStr));
  console.log("Replaced successfully");
} else {
  console.log("Could not find regex");
}
