const fs = require('fs');

let content = fs.readFileSync('src/components/Chapter23b.tsx', 'utf8');

// Rule 9
content = content.replace('A_PURPOSE -->|Therapeutic| RULE9["Rule 9 <br/> Class B/C"]', 
  `A_PURPOSE -->|Therapeutic| RULE9{"Rule 9"}
  RULE9 -->|Hazardous| R9C["Class C"]
  RULE9 -->|Not Hazardous| R9B["Class B"]`);

// Rule 10
content = content.replace('A_PURPOSE -->|Diagnostic/Monitoring| RULE10["Rule 10 <br/> Class B/C"]',
  `A_PURPOSE -->|Diagnostic/Monitoring| RULE10{"Rule 10"}
  RULE10 -->|Vital/Radio| R10C["Class C"]
  RULE10 -->|General| R10B["Class B"]`);

// Rule 11
content = content.replace('A_PURPOSE -->|Administering/Removing Substances| RULE11["Rule 11 <br/> Class C/D"]',
  `A_PURPOSE -->|Administering/Removing Substances| RULE11{"Rule 11"}
  RULE11 -->|Hazardous| R11D["Class D"]
  RULE11 -->|Not Hazardous| R11C["Class C"]`);

// Rule 2
content = content.replace('NON_INVASIVE -->|Channels/stores fluids/gases| RULE2["Rule 2 <br/> Class A/B"]',
  `NON_INVASIVE -->|Channels/stores fluids/gases| RULE2{"Rule 2"}
  RULE2 -->|Active B+/Stores Blood| R2B["Class B"]
  RULE2 -->|Other| R2A["Class A"]`);

// Rule 3
content = content.replace('NON_INVASIVE -->|Modifies composition of fluids| RULE3["Rule 3 <br/> Class C/D"]',
  `NON_INVASIVE -->|Modifies composition of fluids| RULE3{"Rule 3"}
  RULE3 -->|Filtration/Heat/Centrifuge| R3B["Class B"]
  RULE3 -->|Chem/Bio Change| R3C["Class C"]`);

// Rule 4
content = content.replace('NON_INVASIVE -->|Contacts injured skin| RULE4["Rule 4 <br/> Class A/B/C"]',
  `NON_INVASIVE -->|Contacts injured skin| RULE4{"Rule 4"}
  RULE4 -->|Mechanical Barrier| R4A["Class A"]
  RULE4 -->|Microenvironment| R4B["Class B"]
  RULE4 -->|Breaches Dermis/Secondary| R4C["Class C"]`);

// Rule 5
content = content.replace('ORIFICE -->|Transient/Short-term/Long-term| RULE5["Rule 5 <br/> Class A/B/C"]',
  `ORIFICE -->|Duration/Location| RULE5{"Rule 5"}
  RULE5 -->|Transient| R5A["Class A"]
  RULE5 -->|Short-term/Oral| R5B["Class B"]
  RULE5 -->|Long-term| R5C["Class C"]`);

// Rule 6
content = content.replace('SURG_DURATION -->|Transient <60 mins| RULE6["Rule 6 <br/> Class A/B/C"]',
  `SURG_DURATION -->|Transient <60 mins| RULE6{"Rule 6"}
  RULE6 -->|Reusable| R6A["Class A"]
  RULE6 -->|Other| R6B["Class B"]
  RULE6 -->|CNS/Heart| R6C["Class C"]`);

// Rule 7
content = content.replace('SURG_DURATION -->|Short-term 1hr-30days| RULE7["Rule 7 <br/> Class B/C"]',
  `SURG_DURATION -->|Short-term 1hr-30days| RULE7{"Rule 7"}
  RULE7 -->|Medicine/CNS| R7C["Class C"]
  RULE7 -->|Other| R7B["Class B"]`);

// Rule 8
content = content.replace('SURG_DURATION -->|Long-term >30 days / Implantable| RULE8["Rule 8 <br/> Class C/D"]',
  `SURG_DURATION -->|Long-term >30 days / Implantable| RULE8{"Rule 8"}
  RULE8 -->|Heart/CNS/Active| R8D["Class D"]
  RULE8 -->|Other| R8C["Class C"]`);

// Rule 14
content = content.replace('SPECIAL -->|Contraception / STD Prevention| RULE14["Rule 14 <br/> Class C/D"]',
  `SPECIAL -->|Contraception / STD Prevention| RULE14{"Rule 14"}
  RULE14 -->|Implant/Long-term| R14D["Class D"]
  RULE14 -->|Other| R14C["Class C"]`);

// Rule 15
content = content.replace('SPECIAL -->|Disinfects / Sterilizes MDs| RULE15["Rule 15 <br/> Class B/C"]',
  `SPECIAL -->|Disinfects / Sterilizes MDs| RULE15{"Rule 15"}
  RULE15 -->|Invasive MDs| R15C["Class C"]
  RULE15 -->|Other| R15B["Class B"]`);

fs.writeFileSync('src/components/Chapter23b.tsx', content);
console.log("Updated Chapter 23b flowchart");
