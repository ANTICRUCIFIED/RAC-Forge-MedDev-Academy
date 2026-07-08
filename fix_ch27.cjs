const fs = require('fs');
let content = fs.readFileSync('src/components/Chapter27.tsx', 'utf8');

content = content.replace('N3 -->|YES| N4["Rule 14 (Class C/D)"]',
  `N3 -->|YES| N4{"Rule 14"}
  N4 -->|Implant/Long-term| N4D["Class D"]
  N4 -->|Other| N4C["Class C"]`);

content = content.replace('N6 -->|YES| N7["Rule 15 (Class B/C)"]',
  `N6 -->|YES| N7{"Rule 15"}
  N7 -->|Invasive MDs| N7C["Class C"]
  N7 -->|Other| N7B["Class B"]`);

fs.writeFileSync('src/components/Chapter27.tsx', content);
console.log("Updated Chapter 27");
