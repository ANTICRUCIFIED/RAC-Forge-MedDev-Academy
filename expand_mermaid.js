const fs = require('fs');
const rules = {
  2: {
    question: "Is it connected to an active medical device in Class B or higher, or intended for storing blood/tissues?",
    options: [
      { cond: "Yes", cls: "Class B" },
      { cond: "No", cls: "Class A" }
    ]
  },
  3: {
    question: "Does the modification consist only of filtration, centrifugation, or exchanges of gas/heat?",
    options: [
      { cond: "Yes", cls: "Class B" },
      { cond: "No (Chemical/Biological)", cls: "Class C" }
    ]
  },
  4: {
    question: "What is the severity of the wound?",
    options: [
      { cond: "Breaches dermis, secondary intent healing", cls: "Class C" },
      { cond: "Manages microenvironment", cls: "Class B" },
      { cond: "Mechanical barrier/compression only", cls: "Class A" }
    ]
  },
  5: {
    question: "How long is it used?",
    options: [
      { cond: "Transient (<60 mins)", cls: "Class A" },
      { cond: "Short-term or in oral/nasal/ear cavity", cls: "Class B" },
      { cond: "Long-term", cls: "Class C" }
    ]
  },
  6: {
    question: "What type of transient surgically invasive device?",
    options: [
      { cond: "Direct contact with heart/CNS or supplies energy", cls: "Class C" },
      { cond: "Reusable surgical instrument", cls: "Class A" },
      { cond: "Other transient use", cls: "Class B" }
    ]
  },
  7: {
    question: "Does it administer medicines, undergo chemical change, or contact the CNS/heart?",
    options: [
      { cond: "Yes", cls: "Class C" },
      { cond: "No", cls: "Class B" }
    ]
  },
  8: {
    question: "Is it active implantable, contacts heart/CNS, or life-supporting?",
    options: [
      { cond: "Yes", cls: "Class D" },
      { cond: "No", cls: "Class C" }
    ]
  },
  9: {
    question: "Does it administer or exchange energy in a potentially hazardous way?",
    options: [
      { cond: "Yes", cls: "Class C" },
      { cond: "No", cls: "Class B" }
    ]
  },
  10: {
    question: "What kind of diagnosis or monitoring?",
    options: [
      { cond: "Images radiopharmaceuticals or vital parameters (immediate danger)", cls: "Class C" },
      { cond: "Supplies energy to be absorbed or general monitoring", cls: "Class B" }
    ]
  },
  11: {
    question: "Is it potentially hazardous taking into account the substances and delivery mode?",
    options: [
      { cond: "Yes", cls: "Class D" },
      { cond: "No", cls: "Class C" }
    ]
  },
  14: {
    question: "Is it implantable or intended for long-term use?",
    options: [
      { cond: "Yes", cls: "Class D" },
      { cond: "No", cls: "Class C" }
    ]
  },
  15: {
    question: "Is it specifically for disinfecting invasive devices?",
    options: [
      { cond: "Yes", cls: "Class C" },
      { cond: "No", cls: "Class B" }
    ]
  }
};
console.log(JSON.stringify(rules));
