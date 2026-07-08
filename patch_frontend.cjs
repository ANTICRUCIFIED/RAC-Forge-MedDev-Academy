const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldFetchCode = `      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textContent })
      });
      
      if (!response.ok) {
        throw new Error("Failed to get summary");
      }`;

const newFetchCode = `      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textContent })
      });
      
      if (!response.ok) {
        const errText = await response.text();
        console.error("API Error Response:", errText);
        throw new Error("Failed to get summary: " + errText);
      }`;

content = content.replace(oldFetchCode, newFetchCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx for better error logging");
