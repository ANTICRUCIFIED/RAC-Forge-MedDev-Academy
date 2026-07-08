const fs = require('fs');
const path = require('path');

const images = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1582719478250-c8940cebc8cb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80"
];

for (let i = 1; i <= 30; i++) {
  const filePath = path.join(__dirname, 'src/components', `Chapter${i}.tsx`);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // If already has an img, skip to avoid duplicates
  if (content.includes('<img') && i < 28) continue; // chapters 28,29,30 already have one, but we added it earlier.
  
  // Find the first </h3> or a good paragraph to insert after
  const h3Regex = /(<h3[^>]*>.*?<\/h3>)/;
  const match = content.match(h3Regex);
  
  if (match) {
    const imageUrl = images[i % images.length];
    const imageBlock = `\n      <div className="my-6 rounded-xl overflow-hidden shadow-md">\n        <img src="${imageUrl}" alt="Medical concept illustration" className="w-full h-64 object-cover" />\n      </div>\n`;
    
    content = content.replace(h3Regex, `$1${imageBlock}`);
    fs.writeFileSync(filePath, content);
  }
}
console.log('Done adding images.');
