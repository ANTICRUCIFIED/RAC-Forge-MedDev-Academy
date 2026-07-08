const fs = require('fs');

const mappings = [
  {
    file: 'src/components/Chapter7.tsx',
    search: 'N7["Think about Rule 2 (Class A/B)"]',
    replace: 'N7{"Rule 2: Is it connected to an active medical device in Class B/C/D, or intended for storing blood/tissues?"}\n  N7 -->|YES| N7A["Class B"]\n  N7 -->|NO| N7B["Class A"]'
  },
  {
    file: 'src/components/Chapter8.tsx',
    search: 'N10["Think about Rule 3 (Class C/D)"]',
    replace: 'N10{"Rule 3: Does the modification consist only of filtration, centrifugation, or exchanges of gas/heat?"}\n  N10 -->|YES| N10A["Class B"]\n  N10 -->|NO| N10B["Class C"]' // wait, rule 3 is Class B or C? In the text it says Rule 3 (Class C/D), but wizard says B/C?
  }
];

// Let me check rule 3 first.
