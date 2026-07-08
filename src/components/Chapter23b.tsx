import React, { useState } from 'react';
import Mermaid from './Mermaid';
import { ArrowRight, RotateCcw, ShieldCheck } from 'lucide-react';

type Question = {
  id: string;
  text: string;
  options: Option[];
};

type Option = {
  text: string;
  nextId?: string;
  result?: {
    rule: string;
    clazz: string;
    reasoning: string;
  };
};

const wizardData: Record<string, Question> = {
  start: {
    id: 'start',
    text: 'Does the device fall into any of the following special categories?',
    options: [
      { text: 'Incorporates a medicinal product', result: { rule: '13', clazz: 'D', reasoning: 'it incorporates a medicinal substance which has an ancillary action' } },
      { text: 'Used for contraception or STD prevention', nextId: 'q_contraception' },
      { text: 'Intended to disinfect, clean, or sterilize other medical devices', nextId: 'q_disinfect' },
      { text: 'Intended specifically for recording diagnostic X-ray images', result: { rule: '16', clazz: 'B', reasoning: 'it is intended for recording X-ray images' } },
      { text: 'None of the above', nextId: 'q_active' }
    ]
  },
  q_contraception: {
    id: 'q_contraception',
    text: 'Is the contraceptive device implantable or intended for long-term use (>30 days)?',
    options: [
      { text: 'Yes', result: { rule: '14', clazz: 'D', reasoning: 'it is an implantable or long-term contraceptive device' } },
      { text: 'No (Transient or short-term)', result: { rule: '14', clazz: 'C', reasoning: 'it is a transient or short-term contraceptive device' } }
    ]
  },
  q_disinfect: {
    id: 'q_disinfect',
    text: 'Is it intended specifically to disinfect invasive devices (as the end point of processing)?',
    options: [
      { text: 'Yes', result: { rule: '15', clazz: 'C', reasoning: 'it is intended to disinfect invasive medical devices' } },
      { text: 'No (General cleaning or non-invasive devices)', result: { rule: '15', clazz: 'B', reasoning: 'it is intended for general disinfection or cleaning of medical devices' } }
    ]
  },
  q_active: {
    id: 'q_active',
    text: 'Is the medical device an Active Device (depends on a source of energy other than that generated directly by the human body or gravity)?',
    options: [
      { text: 'Yes, it is Active', nextId: 'q_active_type' },
      { text: 'No, it is Non-Active', nextId: 'q_invasive' }
    ]
  },
  q_active_type: {
    id: 'q_active_type',
    text: 'What is the primary function of this active device?',
    options: [
      { text: 'Therapeutic (administering or exchanging energy)', nextId: 'q_rule9' },
      { text: 'Diagnostic or Monitoring', nextId: 'q_rule10' },
      { text: 'Administering or removing medicines/substances', nextId: 'q_rule11' },
      { text: 'None of these (e.g., examination lights, software for non-diagnostic purposes)', result: { rule: '12', clazz: 'A', reasoning: 'it is an active device not covered by Rules 9, 10, or 11' } }
    ]
  },
  q_rule9: {
    id: 'q_rule9',
    text: 'Does it administer or exchange energy in a potentially hazardous way?',
    options: [
      { text: 'Yes (e.g., Defibrillators, X-ray therapy, Lasers)', result: { rule: '9', clazz: 'C', reasoning: 'it is an active therapeutic device administering energy in a potentially hazardous way' } },
      { text: 'No (e.g., TENS machine, heating pads)', result: { rule: '9', clazz: 'B', reasoning: 'it is an active therapeutic device that is not potentially hazardous' } }
    ]
  },
  q_rule10: {
    id: 'q_rule10',
    text: 'What kind of diagnosis or monitoring does it perform?',
    options: [
      { text: 'Supplies energy to be absorbed by the body (except visible spectrum illumination)', result: { rule: '10', clazz: 'B', reasoning: 'it is an active diagnostic device supplying energy to the body' } },
      { text: 'Images in vivo distribution of radiopharmaceuticals', result: { rule: '10', clazz: 'C', reasoning: 'it images in vivo radiopharmaceuticals' } },
      { text: 'Direct diagnosis/monitoring of vital physiological processes, where variations could cause immediate danger', result: { rule: '10', clazz: 'C', reasoning: 'it monitors vital physiological parameters where variations pose immediate danger' } },
      { text: 'General diagnosis/monitoring (e.g., standard ultrasound, digital thermometers)', result: { rule: '10', clazz: 'B', reasoning: 'it is an active diagnostic device not used for critical vital signs' } }
    ]
  },
  q_rule11: {
    id: 'q_rule11',
    text: 'Is the administration or removal of the substance potentially hazardous?',
    options: [
      { text: 'Yes (e.g., infusion pumps, dialysis machines)', result: { rule: '11', clazz: 'D', reasoning: 'it actively administers or removes substances in a potentially hazardous way' } },
      { text: 'No (e.g., standard suction pumps)', result: { rule: '11', clazz: 'C', reasoning: 'it actively administers or removes substances' } }
    ]
  },
  q_invasive: {
    id: 'q_invasive',
    text: 'Does the device enter the patient\'s body?',
    options: [
      { text: 'No (Non-Invasive)', nextId: 'q_non_invasive' },
      { text: 'Yes (Invasive)', nextId: 'q_how_invasive' }
    ]
  },
  q_non_invasive: {
    id: 'q_non_invasive',
    text: 'What is the primary interaction of this non-invasive device?',
    options: [
      { text: 'Channels or stores blood, body fluids, tissues, liquids, or gases', nextId: 'q_rule2' },
      { text: 'Modifies biological or chemical composition of blood, body fluids, or liquids', nextId: 'q_rule3' },
      { text: 'Comes into contact with injured skin', nextId: 'q_rule4' },
      { text: 'Only contacts intact skin or provides external support', result: { rule: '1', clazz: 'A', reasoning: 'it is a non-invasive device that only comes into contact with intact skin' } }
    ]
  },
  q_rule2: {
    id: 'q_rule2',
    text: 'Is it connected to an active medical device in Class B or higher, or intended for storing blood/tissues?',
    options: [
      { text: 'Yes (e.g., blood bags, tubing connected to pumps)', result: { rule: '2', clazz: 'B', reasoning: 'it is non-invasive but channels/stores fluids and connects to an active device or stores blood' } },
      { text: 'No (e.g., urine collection bags, gravity IV sets)', result: { rule: '2', clazz: 'A', reasoning: 'it channels/stores fluids but is not connected to a higher-class active device' } }
    ]
  },
  q_rule3: {
    id: 'q_rule3',
    text: 'Does the modification consist only of filtration, centrifugation, or exchanges of gas/heat?',
    options: [
      { text: 'Yes', result: { rule: '3', clazz: 'B', reasoning: 'it modifies fluids but only through filtration or heat exchange' } },
      { text: 'No (More complex chemical modifications)', result: { rule: '3', clazz: 'C', reasoning: 'it modifies the biological or chemical composition of fluids' } }
    ]
  },
  q_rule4: {
    id: 'q_rule4',
    text: 'What is the severity of the wound it contacts?',
    options: [
      { text: 'Acts only as a mechanical barrier for compression or absorption', result: { rule: '4', clazz: 'A', reasoning: 'it contacts injured skin but only acts as a mechanical barrier' } },
      { text: 'Manages the microenvironment of a wound', result: { rule: '4', clazz: 'B', reasoning: 'it is intended to manage the microenvironment of a wound' } },
      { text: 'Used for wounds that breach the dermis and heal only by secondary intent', result: { rule: '4', clazz: 'C', reasoning: 'it is used for severe wounds that breach the dermis' } }
    ]
  },
  q_how_invasive: {
    id: 'q_how_invasive',
    text: 'How does it enter the body?',
    options: [
      { text: 'Through a body orifice (natural opening)', nextId: 'q_rule5' },
      { text: 'Through surgical penetration (Surgically invasive)', nextId: 'q_surgical_duration' }
    ]
  },
  q_rule5: {
    id: 'q_rule5',
    text: 'How long will it be used in the body orifice?',
    options: [
      { text: 'Transient (less than 60 minutes)', result: { rule: '5', clazz: 'A', reasoning: 'it is an invasive device used transiently in a body orifice' } },
      { text: 'Short-term (between 60 minutes and 30 days) OR used in oral/nasal/ear cavity', result: { rule: '5', clazz: 'B', reasoning: 'it is an invasive device used short-term in a body orifice' } },
      { text: 'Long-term (more than 30 days) NOT in oral/nasal/ear cavity', result: { rule: '5', clazz: 'C', reasoning: 'it is an invasive device used long-term in a body orifice' } }
    ]
  },
  q_surgical_duration: {
    id: 'q_surgical_duration',
    text: 'What is the duration of use for this surgically invasive device?',
    options: [
      { text: 'Transient (less than 60 minutes)', nextId: 'q_rule6' },
      { text: 'Short-term (between 60 minutes and 30 days)', nextId: 'q_rule7' },
      { text: 'Long-term (more than 30 days) or Implantable', nextId: 'q_rule8' }
    ]
  },
  q_rule6: {
    id: 'q_rule6',
    text: 'Is it a reusable surgical instrument?',
    options: [
      { text: 'Yes (e.g., scalpels, forceps)', result: { rule: '6', clazz: 'A', reasoning: 'it is a transient, surgically invasive, reusable surgical instrument' } },
      { text: 'No, and it does not supply energy/medicines or connect to CNS', result: { rule: '6', clazz: 'B', reasoning: 'it is a transient surgically invasive device' } },
      { text: 'No, AND it is used specifically in direct contact with CNS/heart or supplies energy', result: { rule: '6', clazz: 'C', reasoning: 'it is transiently surgically invasive but intended for use on the central circulatory system or central nervous system' } }
    ]
  },
  q_rule7: {
    id: 'q_rule7',
    text: 'Does it administer medicines, undergo chemical change, or contact the CNS/heart?',
    options: [
      { text: 'Yes', result: { rule: '7', clazz: 'C', reasoning: 'it is a short-term surgically invasive device that undergoes chemical change, administers medicines, or contacts critical systems' } },
      { text: 'No (e.g., standard surgical drains, short-term catheters)', result: { rule: '7', clazz: 'B', reasoning: 'it is a short-term surgically invasive device' } }
    ]
  },
  q_rule8: {
    id: 'q_rule8',
    text: 'Is it an active implantable device, used in direct contact with the heart/CNS, or life-supporting?',
    options: [
      { text: 'Yes (e.g., pacemakers, neurostimulators, heart valves)', result: { rule: '8', clazz: 'D', reasoning: 'it is an implantable device in direct contact with the heart, central circulatory system, or central nervous system' } },
      { text: 'No (e.g., orthopedic implants, dental implants)', result: { rule: '8', clazz: 'C', reasoning: 'it is an implantable or long-term surgically invasive device' } }
    ]
  }
};

export default function Chapter23b() {
  const [history, setHistory] = useState<string[]>(['start']);
  const currentQuestionId = history[history.length - 1];
  const [result, setResult] = useState<{ rule: string; clazz: string; reasoning: string } | null>(null);

  const currentQuestion = wizardData[currentQuestionId];

  const handleOptionClick = (option: Option) => {
    if (option.result) {
      setResult(option.result);
    } else if (option.nextId) {
      setHistory([...history, option.nextId]);
    }
  };

  const resetWizard = () => {
    setHistory(['start']);
    setResult(null);
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
      setResult(null);
    }
  };

  return (
    <div className="prose prose-slate max-w-none">
      <div className="bg-slate-800 text-white p-8 my-8 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold m-0 text-blue-900">Chapter 23.5</h2>
        <p className="text-xl mt-2 text-slate-300">Master Flowchart & Classification Wizard</p>
      </div>

      <p className="lead text-lg text-slate-700">
        You have now learned all 16 classification rules. Below, you will find the complete master flowchart for medical device classification, followed by an interactive Classification Wizard.
      </p>

      <h3 className="text-2xl font-bold mt-10 mb-6 text-slate-800 border-b pb-2">Master Classification Flowchart</h3>
      <p>This flowchart summarizes the entire Medical Device Classification system under the Indian MDR 2017. <strong>Hover over the flowchart and use your mouse wheel to zoom in and out.</strong> You can also drag to pan around.</p>
      
      <Mermaid chart={`flowchart TD
  START["Medical Device"] --> ACTIVE{Is it Active?}
  
  ACTIVE -->|Yes| A_PURPOSE{What is its purpose?}
  A_PURPOSE -->|Therapeutic| RULE9{"Rule 9"}
  RULE9 -->|Hazardous| R9C["Class C"]
  RULE9 -->|Not Hazardous| R9B["Class B"]
  A_PURPOSE -->|Diagnostic/Monitoring| RULE10{"Rule 10"}
  RULE10 -->|Vital/Radio| R10C["Class C"]
  RULE10 -->|General| R10B["Class B"]
  A_PURPOSE -->|Administering/Removing Substances| RULE11{"Rule 11"}
  RULE11 -->|Hazardous| R11D["Class D"]
  RULE11 -->|Not Hazardous| R11C["Class C"]
  A_PURPOSE -->|Other Active Device| RULE12["Rule 12 <br/> Class A"]
  
  ACTIVE -->|No| INVASIVE{Does it enter the body?}
  
  INVASIVE -->|No| NON_INVASIVE{What does it do?}
  NON_INVASIVE -->|Contacts intact skin only| RULE1["Rule 1 <br/> Class A"]
  NON_INVASIVE -->|Channels/stores fluids/gases| RULE2{"Rule 2"}
  RULE2 -->|Active B+/Stores Blood| R2B["Class B"]
  RULE2 -->|Other| R2A["Class A"]
  NON_INVASIVE -->|Modifies composition of fluids| RULE3{"Rule 3"}
  RULE3 -->|Filtration/Heat/Centrifuge| R3B["Class B"]
  RULE3 -->|Chem/Bio Change| R3C["Class C"]
  NON_INVASIVE -->|Contacts injured skin| RULE4{"Rule 4"}
  RULE4 -->|Mechanical Barrier| R4A["Class A"]
  RULE4 -->|Microenvironment| R4B["Class B"]
  RULE4 -->|Breaches Dermis/Secondary| R4C["Class C"]
  
  INVASIVE -->|Yes| HOW_INVASIVE{Through body orifice or surgery?}
  
  HOW_INVASIVE -->|Body Orifice| ORIFICE{Duration of use?}
  ORIFICE -->|Duration/Location| RULE5{"Rule 5"}
  RULE5 -->|Transient| R5A["Class A"]
  RULE5 -->|Short-term/Oral| R5B["Class B"]
  RULE5 -->|Long-term| R5C["Class C"]
  
  HOW_INVASIVE -->|Surgical/Implant| SURG_DURATION{Duration of use?}
  SURG_DURATION -->|Transient <60 mins| RULE6{"Rule 6"}
  RULE6 -->|Reusable| R6A["Class A"]
  RULE6 -->|Other| R6B["Class B"]
  RULE6 -->|CNS/Heart| R6C["Class C"]
  SURG_DURATION -->|Short-term 1hr-30days| RULE7{"Rule 7"}
  RULE7 -->|Medicine/CNS| R7C["Class C"]
  RULE7 -->|Other| R7B["Class B"]
  SURG_DURATION -->|Long-term >30 days / Implantable| RULE8{"Rule 8"}
  RULE8 -->|Heart/CNS/Active| R8D["Class D"]
  RULE8 -->|Other| R8C["Class C"]
  
  START -.-> SPECIAL{Special Characteristics?}
  SPECIAL -->|Contains Medicine| RULE13["Rule 13 <br/> Class D"]
  SPECIAL -->|Contraception / STD Prevention| RULE14{"Rule 14"}
  RULE14 -->|Implant/Long-term| R14D["Class D"]
  RULE14 -->|Other| R14C["Class C"]
  SPECIAL -->|Disinfects / Sterilizes MDs| RULE15{"Rule 15"}
  RULE15 -->|Invasive MDs| R15C["Class C"]
  RULE15 -->|Other| R15B["Class B"]
  SPECIAL -->|Records X-Ray Images| RULE16["Rule 16 <br/> Class B"]
  
  style RULE1 fill:#e2e8f0,stroke:#64748b,stroke-width:2px
  style RULE2 fill:#e2e8f0,stroke:#64748b,stroke-width:2px
  style RULE3 fill:#cbd5e1,stroke:#475569,stroke-width:2px
  style RULE4 fill:#e2e8f0,stroke:#64748b,stroke-width:2px
  style RULE5 fill:#e2e8f0,stroke:#64748b,stroke-width:2px
  style RULE6 fill:#e2e8f0,stroke:#64748b,stroke-width:2px
  style RULE7 fill:#cbd5e1,stroke:#475569,stroke-width:2px
  style RULE8 fill:#94a3b8,stroke:#334155,stroke-width:2px
  style RULE9 fill:#cbd5e1,stroke:#475569,stroke-width:2px
  style RULE10 fill:#cbd5e1,stroke:#475569,stroke-width:2px
  style RULE11 fill:#94a3b8,stroke:#334155,stroke-width:2px
  style RULE12 fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px
  style RULE13 fill:#64748b,stroke:#1e293b,stroke-width:2px,color:#fff
  style RULE14 fill:#94a3b8,stroke:#334155,stroke-width:2px
  style RULE15 fill:#cbd5e1,stroke:#475569,stroke-width:2px
  style RULE16 fill:#cbd5e1,stroke:#475569,stroke-width:2px
      `} />

      <h3 className="text-2xl font-bold mt-16 mb-6 text-slate-800 border-b pb-2">Classification Wizard</h3>
      <p>Answer the questions below to automatically determine the class and rule of your medical device.</p>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 my-8 max-w-3xl mx-auto not-prose">
        {!result ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step {history.length}</span>
              {history.length > 1 && (
                <button onClick={goBack} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  <RotateCcw className="w-4 h-4" /> Go Back
                </button>
              )}
            </div>
            
            <h4 className="text-2xl font-semibold text-slate-800 mb-8 leading-tight">
              {currentQuestion?.text}
            </h4>
            
            <div className="space-y-3">
              {currentQuestion?.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all group flex items-center justify-between"
                >
                  <span className="font-medium text-slate-700 group-hover:text-blue-900">{opt.text}</span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-6 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10 text-emerald-600" />
            </div>
            
            <h4 className="text-3xl font-bold text-slate-800 mb-2">Classification Complete</h4>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8 inline-block text-left w-full">
              <p className="text-lg text-emerald-900 leading-relaxed font-medium m-0">
                The Device under consideration is <span className="font-bold bg-emerald-200 px-2 py-1 rounded">Class {result.clazz}</span> as per rule <span className="font-bold underline decoration-emerald-400 underline-offset-2">{result.rule}</span> of Indian MDR 2017 as {result.reasoning}.
              </p>
            </div>
            
            <button 
              onClick={resetWizard}
              className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" /> Start Over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
