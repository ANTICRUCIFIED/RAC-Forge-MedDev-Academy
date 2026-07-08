const fs = require('fs');
const path = require('path');

function replaceFile(filePath, searchRegex, replaceText) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.match(searchRegex)) {
    content = content.replace(searchRegex, replaceText);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Could not find match in ${filePath}`);
  }
}

// Chapter 7 - Rule 2
replaceFile('src/components/Chapter7.tsx', 
  /N7\["Think about Rule 2 \(Class A\/B\)"\]/,
  `N7{"Rule 2: Is it connected to an active medical device in Class B or higher, or intended for storing blood/tissues?"}
  N7 -->|YES| N7A["Rule 2 (Class B)"]
  N7 -->|NO| N7B["Rule 2 (Class A)"]`
);

// Chapter 8 - Rule 3
replaceFile('src/components/Chapter8.tsx', 
  /N10\["Think about Rule 3 \(Class C\/D\)"\]/,
  `N10{"Rule 3: Does the modification consist only of filtration, centrifugation, or exchanges of gas/heat?"}
  N10 -->|YES| N10A["Rule 3 (Class B)"]
  N10 -->|NO| N10B["Rule 3 (Class C)"]`
);
// Wait, Chapter 8 says C/D, but the wizard says B/C! I will fix the text in Chapter 8 too if needed, but let's just do Mermaid first.

// Chapter 9 - Rule 4
replaceFile('src/components/Chapter9.tsx', 
  /N13\["Apply Rule 4 \(Class A\/B\/C\) according to the intended use and the nature of the wound\."\]/,
  `N13{"Rule 4: What is the severity of the wound?"}
  N13 -->|Acts only as a mechanical barrier for compression or absorption| N13A["Rule 4 (Class A)"]
  N13 -->|Manages the microenvironment of a wound| N13B["Rule 4 (Class B)"]
  N13 -->|Used for wounds that breach the dermis and heal only by secondary intent| N13C["Rule 4 (Class C)"]`
);

// Chapter 10 - Rule 5
replaceFile('src/components/Chapter10.tsx', 
  /N7\["Consider Rule 5 \(Class A\/B\/C\)"\]/,
  `N7{"Rule 5: How long will it be used in the body orifice?"}
  N7 -->|Transient (< 60 minutes)| N7A["Rule 5 (Class A)"]
  N7 -->|Short-term (60 mins to 30 days) OR oral/nasal/ear cavity| N7B["Rule 5 (Class B)"]
  N7 -->|Long-term (> 30 days) NOT in oral/nasal/ear cavity| N7C["Rule 5 (Class C)"]`
);

// Chapter 11 - Rule 5
replaceFile('src/components/Chapter11.tsx', 
  /N11\["Consider the applicable provisions of Rule 5 \(Class A\/B\/C\) based on intended use and duration\."\]/,
  `N11{"Rule 5: How long will it be used in the body orifice?"}
  N11 -->|Transient (< 60 minutes)| N11A["Rule 5 (Class A)"]
  N11 -->|Short-term (60 mins to 30 days) OR oral/nasal/ear cavity| N11B["Rule 5 (Class B)"]
  N11 -->|Long-term (> 30 days) NOT in oral/nasal/ear cavity| N11C["Rule 5 (Class C)"]`
);

// Chapter 12 - Rule 6
replaceFile('src/components/Chapter12.tsx', 
  /N17\["Apply the relevant provisions of Rule 6 \(Class A\/B\/C\)\."\]/,
  `N17{"Rule 6: What type of device is it?"}
  N17 -->|Reusable surgical instrument| N17A["Rule 6 (Class A)"]
  N17 -->|Direct contact with CNS\/heart or supplies energy| N17B["Rule 6 (Class C)"]
  N17 -->|Other transient use| N17C["Rule 6 (Class B)"]`
);

// Chapter 13 - Rule 7
replaceFile('src/components/Chapter13.tsx', 
  /N17\["Apply the relevant provisions of Rule 7 \(Class B\/C\)\."\]/,
  `N17{"Rule 7: Does it administer medicines, undergo chemical change, or contact the CNS/heart?"}
  N17 -->|YES| N17A["Rule 7 (Class C)"]
  N17 -->|NO| N17B["Rule 7 (Class B)"]`
);

// Chapter 14 - Rule 8
replaceFile('src/components/Chapter14.tsx', 
  /N19\["Apply the relevant provisions of Rule 8 \(Class C\/D\)\."\]/,
  `N19{"Rule 8: Is it an active implantable device, used in direct contact with the heart/CNS, or life-supporting?"}
  N19 -->|YES| N19A["Rule 8 (Class D)"]
  N19 -->|NO| N19B["Rule 8 (Class C)"]`
);

// Chapter 16 - Rule 9 and 10 (Wait, Chapter 16 is for Rule 9)
replaceFile('src/components/Chapter16.tsx', 
  /N13\["Consider Rule 9 \(Class B\/C\)"\]/,
  `N13{"Rule 9: Does it administer or exchange energy in a potentially hazardous way?"}
  N13 -->|YES| N13A["Rule 9 (Class C)"]
  N13 -->|NO| N13B["Rule 9 (Class B)"]`
);
// Also has Rule 10 reference, but let's replace that too just in case
replaceFile('src/components/Chapter16.tsx', 
  /N7\["See Rule 10 \(Class B\/C\)"\]/,
  `N7{"Rule 10: What kind of diagnosis or monitoring does it perform?"}
  N7 -->|Images radiopharmaceuticals or vital parameters (immediate danger)| N7A["Rule 10 (Class C)"]
  N7 -->|Supplies energy to be absorbed or general monitoring| N7B["Rule 10 (Class B)"]`
);

// Chapter 17 - Rule 10
replaceFile('src/components/Chapter17.tsx', 
  /N13\["Consider Rule 10 \(Class B\/C\)"\]/,
  `N13{"Rule 10: What kind of diagnosis or monitoring does it perform?"}
  N13 -->|Images radiopharmaceuticals or vital parameters (immediate danger)| N13A["Rule 10 (Class C)"]
  N13 -->|Supplies energy to be absorbed or general monitoring| N13B["Rule 10 (Class B)"]`
);
replaceFile('src/components/Chapter17.tsx', 
  /N7\["See Rule 9 \(Class B\/C\) or others"\]/,
  `N7{"Rule 9: Does it administer or exchange energy in a potentially hazardous way?"}
  N7 -->|YES| N7A["Rule 9 (Class C)"]
  N7 -->|NO| N7B["Rule 9 (Class B)"]`
);

// Chapter 18 - Rule 11
replaceFile('src/components/Chapter18.tsx', 
  /N11\["Consider Rule 11 \(Class C\/D\)"\]/,
  `N11{"Rule 11: Is the administration or removal of the substance potentially hazardous?"}
  N11 -->|YES| N11A["Rule 11 (Class D)"]
  N11 -->|NO| N11B["Rule 11 (Class C)"]`
);

// Chapter 19 - Rule 12 (no mixed class)
replaceFile('src/components/Chapter19.tsx', 
  /N7\["See Rule 9 \(Class B\/C\)"\]/,
  `N7{"Rule 9: Does it administer or exchange energy in a potentially hazardous way?"}
  N7 -->|YES| N7A["Rule 9 (Class C)"]
  N7 -->|NO| N7B["Rule 9 (Class B)"]`
);
replaceFile('src/components/Chapter19.tsx', 
  /N10\["See Rule 10 \(Class B\/C\)"\]/,
  `N10{"Rule 10: What kind of diagnosis or monitoring does it perform?"}
  N10 -->|Images radiopharmaceuticals or vital parameters (immediate danger)| N10A["Rule 10 (Class C)"]
  N10 -->|Supplies energy to be absorbed or general monitoring| N10B["Rule 10 (Class B)"]`
);
replaceFile('src/components/Chapter19.tsx', 
  /N13\["See Rule 11 \(Class C\/D\)"\]/,
  `N13{"Rule 11: Is the administration or removal of the substance potentially hazardous?"}
  N13 -->|YES| N13A["Rule 11 (Class D)"]
  N13 -->|NO| N13B["Rule 11 (Class C)"]`
);

// Chapter 21 - Rule 14
replaceFile('src/components/Chapter21.tsx', 
  /N8\["Consider Rule 14 \(Class C\/D\)"\]/,
  `N8{"Rule 14: Is it implantable or intended for long-term use?"}
  N8 -->|YES| N8A["Rule 14 (Class D)"]
  N8 -->|NO| N8B["Rule 14 (Class C)"]`
);

// Chapter 22 - Rule 15
replaceFile('src/components/Chapter22.tsx', 
  /N9\["Consider Rule 15 \(Class B\/C\)"\]/,
  `N9{"Rule 15: Is it specifically for disinfecting invasive devices?"}
  N9 -->|YES| N9A["Rule 15 (Class C)"]
  N9 -->|NO| N9B["Rule 15 (Class B)"]`
);

// Chapter 24
replaceFile('src/components/Chapter24.tsx', 
  /R9\["Rule 9 \(Class B\/C\)"\]/,
  `R9{"Rule 9"}
  R9 -->|Hazardous| R9C["Class C"]
  R9 -->|Not Hazardous| R9B["Class B"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R10\["Rule 10 \(Class B\/C\)"\]/,
  `R10{"Rule 10"}
  R10 -->|Vital/Radio| R10C["Class C"]
  R10 -->|General| R10B["Class B"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R11\["Rule 11 \(Class C\/D\)"\]/,
  `R11{"Rule 11"}
  R11 -->|Hazardous| R11D["Class D"]
  R11 -->|Not Hazardous| R11C["Class C"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R5\["Rule 5 \(Class A\/B\)"\]/,
  `R5{"Rule 5"}
  R5 -->|Transient| R5A["Class A"]
  R5 -->|Short-term/Oral| R5B["Class B"]
  R5 -->|Long-term| R5C["Class C"]`
); // Note: it says A/B in the regex, let's keep it that way for match, but it's A/B/C
replaceFile('src/components/Chapter24.tsx', 
  /R6\["Rule 6 \(Class A\/B\)"\]/,
  `R6{"Rule 6"}
  R6 -->|Reusable| R6A["Class A"]
  R6 -->|Other| R6B["Class B"]
  R6 -->|CNS/Heart| R6C["Class C"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R7\["Rule 7 \(Class B\/C\)"\]/,
  `R7{"Rule 7"}
  R7 -->|Medicine/CNS| R7C["Class C"]
  R7 -->|Other| R7B["Class B"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R8\["Rule 8 \(Class C\/D\)"\]/,
  `R8{"Rule 8"}
  R8 -->|Heart/CNS/Active| R8D["Class D"]
  R8 -->|Other| R8C["Class C"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R14\["Rule 14 \(Class C\/D\)"\]/,
  `R14{"Rule 14"}
  R14 -->|Implant/Long-term| R14D["Class D"]
  R14 -->|Other| R14C["Class C"]`
);
replaceFile('src/components/Chapter24.tsx', 
  /R15\["Rule 15 \(Class B\/C\)"\]/,
  `R15{"Rule 15"}
  R15 -->|Invasive MDs| R15C["Class C"]
  R15 -->|Other| R15B["Class B"]`
);

// We need to fix the downward connections for Chapter 24
let ch24 = fs.readFileSync('src/components/Chapter24.tsx', 'utf8');
ch24 = ch24.replace('R9 --> SPEC', 'R9B --> SPEC\n  R9C --> SPEC');
ch24 = ch24.replace('R10 --> SPEC', 'R10B --> SPEC\n  R10C --> SPEC');
ch24 = ch24.replace('R11 --> SPEC', 'R11C --> SPEC\n  R11D --> SPEC');
ch24 = ch24.replace('R5 --> SPEC', 'R5A --> SPEC\n  R5B --> SPEC\n  R5C --> SPEC');
ch24 = ch24.replace('R6 --> SPEC', 'R6A --> SPEC\n  R6B --> SPEC\n  R6C --> SPEC');
ch24 = ch24.replace('R7 --> SPEC', 'R7B --> SPEC\n  R7C --> SPEC');
ch24 = ch24.replace('R8 --> SPEC', 'R8C --> SPEC\n  R8D --> SPEC');
ch24 = ch24.replace('R14 --> DOC', 'R14C --> DOC\n  R14D --> DOC');
ch24 = ch24.replace('R15 --> DOC', 'R15B --> DOC\n  R15C --> DOC');
fs.writeFileSync('src/components/Chapter24.tsx', ch24);

