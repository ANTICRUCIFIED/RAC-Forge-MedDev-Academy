const fs = require('fs');
let content = fs.readFileSync('src/components/NotesDownloadModal.tsx', 'utf8');

// Replace the handlePrint logic with react-to-print
const importStatement = "import { useReactToPrint } from 'react-to-print';\nimport { useState, useRef } from 'react';";
content = content.replace("import { useState, useRef } from 'react';", importStatement);

const reactToPrintHook = `
  const handlePrint = useReactToPrint({
    contentRef: pdfExportRef,
    documentTitle: 'Medical_Devices_Regulatory_Notes',
    pageStyle: \`
      @page { size: A4 landscape; margin: 15mm; }
      @media print {
        body { 
          -webkit-print-color-adjust: exact; 
          print-color-adjust: exact; 
          background-color: white !important;
          color: black !important;
        }
        .print-page-break { page-break-after: always; break-after: page; }
        * { 
          overflow: visible !important; 
          max-height: none !important;
          height: auto !important;
          position: static !important;
        }
        .grid { display: block !important; }
        .grid > div { margin-bottom: 1rem; page-break-inside: avoid; break-inside: avoid; }
        table, tr, pre, blockquote { page-break-inside: avoid; break-inside: avoid; }
        h1, h2, h3, h4, h5, h6 { page-break-after: avoid; break-after: avoid; }
        svg { max-width: 100% !important; height: auto !important; max-height: 170mm !important; }
        button, .print-hidden, .absolute { display: none !important; }
      }
    \`
  });
`;

// Replace the old handlePrint function
content = content.replace(/const handlePrint = \(\) => \{[\s\S]*?printWindow\.document\.close\(\);\n  \};/, reactToPrintHook);

// Remove the inline style tag from pdfExportRef
content = content.replace(/<style type="text\/css" media="print">[\s\S]*?<\/style>/, '');

fs.writeFileSync('src/components/NotesDownloadModal.tsx', content);
console.log("Patched NotesDownloadModal.tsx to use react-to-print");
