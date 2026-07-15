import { useState } from 'react';
import InteractiveFlowchart from './InteractiveFlowchart';
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard } from './FlowchartElements';
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
    text: 'Does the device fall into any of these special categories?',
    options: [
      { text: 'Rule (xv): Incorporates an integrated medicinal product or drug', result: { rule: 'Rule (xv) Subpart (a) or (b)', clazz: 'D', reasoning: 'it incorporates a medicinal substance or blood derivative with an ancillary action under Rule (xv)' } },
      { text: 'Rule (xvi): Sourced from or incorporates cells, tissues, or derivatives of animal or human origin', nextId: 'q_cells' },
      { text: 'Rule (xviii): Used specifically for contraception or prevention of STDs', nextId: 'q_contraception' },
      { text: 'Rule (xvii): Intended specifically to clean, disinfect, or sterilize other medical devices', nextId: 'q_disinfect' },
      { text: 'None of the above', nextId: 'q_active' }
    ]
  },
  q_cells: {
    id: 'q_cells',
    text: 'What is the nature of contact for this biological animal/human derivative device?',
    options: [
      { text: 'Subpart (b): Intended to come into contact with intact skin only (e.g. leather brace straps)', result: { rule: 'Rule (xvi) Subpart (b)', clazz: 'A', reasoning: 'it utilizes biological tissues contacting intact skin only under Rule (xvi) Subpart (b)' } },
      { text: 'Subpart (a): General contact (e.g. catgut sutures, heart valves, collagen meshes)', result: { rule: 'Rule (xvi) Subpart (a)', clazz: 'D', reasoning: 'it utilizes non-viable animal or human tissues with interior contact under Rule (xvi) Subpart (a)' } }
    ]
  },
  q_contraception: {
    id: 'q_contraception',
    text: 'Is the contraceptive or STD prevention device implantable or intended for long-term use (>30 days)?',
    options: [
      { text: 'Subpart (b): Yes, implantable or long-term (e.g. Copper-T IUD, hormone implants)', result: { rule: 'Rule (xviii) Subpart (b)', clazz: 'D', reasoning: 'it is an implantable or long-term contraceptive device under Rule (xviii) Subpart (b)' } },
      { text: 'Subpart (a): No, transient or short-term (e.g. latex condoms, diaphragms)', result: { rule: 'Rule (xviii) Subpart (a)', clazz: 'C', reasoning: 'it is a transient/short-term contraceptive or STD prevention device under Rule (xviii) Subpart (a)' } }
    ]
  },
  q_disinfect: {
    id: 'q_disinfect',
    text: 'What is the specific sterilization or disinfection purpose?',
    options: [
      { text: 'Subpart (a): Sterilization of other medical devices, end-point disinfection, or contact lenses care', result: { rule: 'Rule (xvii) Subpart (a)', clazz: 'C', reasoning: 'it is intended for sterilization, end-point disinfection, or contact lens care under Rule (xvii) Subpart (a)' } },
      { text: 'Subpart (b): Disinfection of other medical devices before they are sterilized or undergo end-point disinfection', result: { rule: 'Rule (xvii) Subpart (b)', clazz: 'B', reasoning: 'it is intended for preparatory pre-sterilization disinfection under Rule (xvii) Subpart (b)' } }
    ]
  },
  q_active: {
    id: 'q_active',
    text: 'Is the medical device an Active Device (powered by electrical or mechanical energy other than gravity/human muscle)?',
    options: [
      { text: 'Yes, it is Active', nextId: 'q_active_type' },
      { text: 'No, it is Non-Active', nextId: 'q_invasive' }
    ]
  },
  q_active_type: {
    id: 'q_active_type',
    text: 'What is the primary diagnostic or therapeutic function of this active device?',
    options: [
      { text: 'Rule (xii): Active Therapeutic (exchanging or administering energy)', nextId: 'q_rule12' },
      { text: 'Rule (xiii): Active Diagnostic or Administrative', nextId: 'q_rule13' },
      { text: 'Rule (xiv): General Active Device (e.g. motorized beds, surgical lights)', result: { rule: 'Rule (xiv)', clazz: 'A', reasoning: 'it is an active support device not covered under Rules (xii) or (xiii), thus falling into Rule (xiv)' } }
    ]
  },
  q_rule12: {
    id: 'q_rule12',
    text: 'Does the active therapeutic device exchange or administer energy in a potentially hazardous way?',
    options: [
      { text: 'Subpart (b): Yes, exchange or administration of energy is potentially hazardous (e.g. surgical lasers, ventilators, defibrillators)', result: { rule: 'Rule (xii) Subpart (b)', clazz: 'C', reasoning: 'the energy exchange or administration is potentially hazardous under Rule (xii) Subpart (b)' } },
      { text: 'Subpart (c): Yes, it controls, monitors, or directly influences a Class C active therapeutic device', result: { rule: 'Rule (xii) Subpart (c)', clazz: 'C', reasoning: 'it controls or monitors a Class C active therapeutic device under Rule (xii) Subpart (c)' } },
      { text: 'Subpart (a): No, standard therapeutic energy exchange (e.g. TENS, heating pad, muscle stimulator)', result: { rule: 'Rule (xii) Subpart (a)', clazz: 'B', reasoning: 'it is an active therapeutic device for standard energy exchange under Rule (xii) Subpart (a)' } }
    ]
  },
  q_rule13: {
    id: 'q_rule13',
    text: 'What is the sub-function of this active diagnostic or administrative device?',
    options: [
      { text: 'Subpart (a)(1): Supplies energy to be absorbed by the body (other than visible/infrared)', result: { rule: 'Rule (xiii) Subpart (a)(1)', clazz: 'B', reasoning: 'it supplies energy to be absorbed by the human body under Rule (xiii) Subpart (a)(1)' } },
      { text: 'Subpart (b): Supplies energy solely to illuminate the body in visible or near-infrared spectrum', result: { rule: 'Rule (xiii) Subpart (b)', clazz: 'A', reasoning: 'it is intended solely for visible/near-infrared body illumination under Rule (xiii) Subpart (b)' } },
      { text: 'Subpart (a)(2): Captures images of the in vivo distribution of radiopharmaceuticals', result: { rule: 'Rule (xiii) Subpart (a)(2)', clazz: 'B', reasoning: 'it captures images of in vivo radiopharmaceuticals under Rule (xiii) Subpart (a)(2)' } },
      { text: 'Subpart (a)(3): Direct diagnosis or monitoring of vital physiological processes', nextId: 'q_vital_monitoring' },
      { text: 'Subpart (d): Emission of ionizing radiation in diagnostic or interventional radiology', result: { rule: 'Rule (xiii) Subpart (d)', clazz: 'C', reasoning: 'it is intended for ionizing radiation diagnostic radiology under Rule (xiii) Subpart (d)' } },
      { text: 'Subpart (e): Controls or monitors an ionizing radiation diagnostic device', result: { rule: 'Rule (xiii) Subpart (e)', clazz: 'C', reasoning: 'it controls or monitors an ionizing radiation diagnostic device under Rule (xiii) Subpart (e)' } },
      { text: 'Subpart (f) & (g): Active device for administration or removal of substances', nextId: 'q_admin_substances' }
    ]
  },
  q_vital_monitoring: {
    id: 'q_vital_monitoring',
    text: 'Is direct diagnosis/monitoring done in immediate-danger clinical situations, or where vital parameters are alarming?',
    options: [
      { text: 'Yes, immediate danger (Subpart c) (e.g. ICU multi-parameter alarm monitors, apnea monitors)', result: { rule: 'Rule (xiii) Subpart (c)', clazz: 'C', reasoning: 'it monitors vital parameters where variations could result in immediate danger under Rule (xiii) Subpart (c)' } },
      { text: 'No, standard monitoring (Subpart a)(3) (e.g. electronic stethoscopes, digital thermometers)', result: { rule: 'Rule (xiii) Subpart (a)(3)', clazz: 'B', reasoning: 'it is for standard monitoring of vital physiological processes under Rule (xiii) Subpart (a)(3)' } }
    ]
  },
  q_admin_substances: {
    id: 'q_admin_substances',
    text: 'Is the administration or removal of substances potentially hazardous considering its route and nature?',
    options: [
      { text: 'Subpart (g): Yes, potentially hazardous (e.g. active chemotherapy infusion pumps, epidural pump systems)', result: { rule: 'Rule (xiii) Subpart (g)', clazz: 'C', reasoning: 'it administers or removes substances in a potentially hazardous manner under Rule (xiii) Subpart (g)' } },
      { text: 'Subpart (f): No, standard pump/removal (e.g. standard enteral feeding pumps)', result: { rule: 'Rule (xiii) Subpart (f)', clazz: 'B', reasoning: 'it administers or removes substances in a non-hazardous manner under Rule (xiii) Subpart (f)' } }
    ]
  },
  q_invasive: {
    id: 'q_invasive',
    text: 'Does the non-active device enter the patient\'s body?',
    options: [
      { text: 'No (Non-Invasive)', nextId: 'q_non_invasive' },
      { text: 'Yes (Invasive)', nextId: 'q_how_invasive' }
    ]
  },
  q_non_invasive: {
    id: 'q_non_invasive',
    text: 'What is the primary interaction of this non-invasive device?',
    options: [
      { text: 'Rule (i): Comes into contact with injured skin', nextId: 'q_rule1' },
      { text: 'Rule (ii): Channels or stores blood, body liquids, tissues, cells, liquids or gases', nextId: 'q_rule2' },
      { text: 'Rule (iii): Modifies biological or chemical composition of blood, body liquids, or liquids for infusion', nextId: 'q_rule3' },
      { text: 'Rule (iv): Only contacts intact skin or does not contact a person', result: { rule: 'Rule (iv)', clazz: 'A', reasoning: 'it contacts intact skin only or has no human contact (catch-all non-invasive Rule (iv))' } }
    ]
  },
  q_rule1: {
    id: 'q_rule1',
    text: 'Under Rule (i) (Injured Skin), what is the severity and purpose of contact?',
    options: [
      { text: 'Subpart (a): Mechanical barrier, compression, or absorption of exudates for shallow wounds not breaching dermis', result: { rule: 'Rule (i) Subpart (a)', clazz: 'A', reasoning: 'it is for shallow wounds and acts as a mechanical barrier or absorption under Rule (i) Subpart (a)' } },
      { text: 'Subpart (b): Used principally with wounds breaching the dermis, or managing the wound microenvironment', result: { rule: 'Rule (i) Subpart (b)', clazz: 'B', reasoning: 'it is for wounds breaching the dermis or managing the microenvironment under Rule (i) Subpart (b)' } },
      { text: 'Subpart (c): Used principally with wounds breaching the dermis which cannot heal by primary intention', result: { rule: 'Rule (i) Subpart (c)', clazz: 'C', reasoning: 'it is for dermis-breaching wounds that heal by secondary intention under Rule (i) Subpart (c)' } }
    ]
  },
  q_rule2: {
    id: 'q_rule2',
    text: 'Under Rule (ii) (Channeling or Storing), what are the details of connection and storage?',
    options: [
      { text: 'Subpart (c): Blood bag that does not incorporate a medicinal product', result: { rule: 'Rule (ii) Subpart (c)', clazz: 'C', reasoning: 'it is a standard blood bag without drug incorporation under Rule (ii) Subpart (c)' } },
      { text: 'Subpart (b): Connected to active device in Class B/C/D, OR channels blood, OR stores/channels body liquids/organs/tissues', result: { rule: 'Rule (ii) Subpart (b)', clazz: 'B', reasoning: 'it handles blood/organs or connects to higher class active devices under Rule (ii) Subpart (b)' } },
      { text: 'Subpart (a): Other storing or channeling of liquids/gases for eventual infusion/introduction', result: { rule: 'Rule (ii) Subpart (a)', clazz: 'A', reasoning: 'it is for standard channeling or storing of liquids/gases under Rule (ii) Subpart (a)' } }
    ]
  },
  q_rule3: {
    id: 'q_rule3',
    text: 'Under Rule (iii) (Modifying Compositions), what method is used for modification?',
    options: [
      { text: 'Subpart (b): Modification is carried out by filtration, centrifuging, or exchange of gas or heat', result: { rule: 'Rule (iii) Subpart (b)', clazz: 'B', reasoning: 'modification is carried out by physical filtration, spinning, or heat exchange under Rule (iii) Subpart (b)' } },
      { text: 'Subpart (a): Other chemical or biological modification of blood, body liquids, or liquids for infusion', result: { rule: 'Rule (iii) Subpart (a)', clazz: 'C', reasoning: 'it modifies biological or chemical composition of fluids under Rule (iii) Subpart (a)' } }
    ]
  },
  q_how_invasive: {
    id: 'q_how_invasive',
    text: 'How does it enter the body?',
    options: [
      { text: 'Through a body orifice (natural opening)', nextId: 'q_orifice_duration' },
      { text: 'Through surgical penetration (Surgically invasive)', nextId: 'q_surgical_duration' }
    ]
  },
  q_orifice_duration: {
    id: 'q_orifice_duration',
    text: 'What is the duration of use for this body-orifice invasive device?',
    options: [
      { text: 'Transient (less than 60 minutes) - Rule (v)', nextId: 'q_rule5' },
      { text: 'Short-term (between 60 minutes and 30 days) - Rule (vi)', nextId: 'q_rule6' },
      { text: 'Long-term (more than 30 days) - Rule (vii)', nextId: 'q_rule7' }
    ]
  },
  q_rule5: {
    id: 'q_rule5',
    text: 'Under Rule (v) (Transient Orifice Use), what are the details?',
    options: [
      { text: 'Connected to an active medical device in Class B, C or D (Rule viii)', result: { rule: 'Rule (viii)', clazz: 'B', reasoning: 'it is an orifice device connected to an active Class B/C/D device under Rule (viii)' } },
      { text: 'Subpart (b): Intended for use on external eyeball surface or liable to be absorbed by mucous membrane', result: { rule: 'Rule (v) Subpart (b)', clazz: 'B', reasoning: 'it is for eyeball contact or mucosal absorption under Rule (v) Subpart (b)' } },
      { text: 'Subpart (a): General transient use (not connected, or connected to Class A only)', result: { rule: 'Rule (v) Subpart (a)', clazz: 'A', reasoning: 'it is for general transient orifice use under Rule (v) Subpart (a)' } }
    ]
  },
  q_rule6: {
    id: 'q_rule6',
    text: 'Under Rule (vi) (Short-Term Orifice Use), what are the details?',
    options: [
      { text: 'Connected to an active medical device in Class B, C or D (Rule viii)', result: { rule: 'Rule (viii)', clazz: 'B', reasoning: 'it is connected to a Class B/C/D active device under Rule (viii)' } },
      { text: 'Subpart (b): Used in oral cavity as far as pharynx, ear canal up to eardrum, or nasal cavity, AND not absorbed', result: { rule: 'Rule (vi) Subpart (b)', clazz: 'A', reasoning: 'it is used in shallow outer cavities and not absorbed under Rule (vi) Subpart (b)' } },
      { text: 'Subpart (a): General short-term use (e.g. urinary catheters, tracheal tubes)', result: { rule: 'Rule (vi) Subpart (a)', clazz: 'B', reasoning: 'it is for general short-term orifice use under Rule (vi) Subpart (a)' } }
    ]
  },
  q_rule7: {
    id: 'q_rule7',
    text: 'Under Rule (vii) (Long-Term Orifice Use), what are the details?',
    options: [
      { text: 'Connected to an active medical device in Class B, C or D (Rule viii)', result: { rule: 'Rule (viii)', clazz: 'B', reasoning: 'it is connected to an active Class B/C/D device under Rule (viii)' } },
      { text: 'Subpart (b): Used in oral cavity as far as pharynx, ear canal up to eardrum, or nasal cavity, AND not absorbed', result: { rule: 'Rule (vii) Subpart (b)', clazz: 'B', reasoning: 'it is used long-term in shallow outer cavities and not absorbed under Rule (vii) Subpart (b)' } },
      { text: 'Subpart (a): General long-term use (e.g. long-term enteral feeding G-tubes, airway stents)', result: { rule: 'Rule (vii) Subpart (a)', clazz: 'C', reasoning: 'it is for general long-term orifice use under Rule (vii) Subpart (a)' } }
    ]
  },
  q_surgical_duration: {
    id: 'q_surgical_duration',
    text: 'What is the duration of use for this surgically invasive device?',
    options: [
      { text: 'Transient (less than 60 minutes) - Rule (ix)', nextId: 'q_rule9' },
      { text: 'Short-term (between 60 minutes and 30 days) - Rule (x)', nextId: 'q_rule10' },
      { text: 'Long-term (more than 30 days) or Implantable - Rule (xi)', nextId: 'q_rule11' }
    ]
  },
  q_rule9: {
    id: 'q_rule9',
    text: 'Under Rule (ix) (Transient Surgically Invasive), what are the details?',
    options: [
      { text: 'Subpart (b): Reusable surgical instrument (e.g. metal forceps, reusable scissors)', result: { rule: 'Rule (ix) Subpart (b)', clazz: 'A', reasoning: 'it is a reusable manual surgical instrument under Rule (ix) Subpart (b)' } },
      { text: 'Subpart (g): Contacts central nervous system (CNS) or central circulatory system (defect diagnosis/monitoring/correction)', result: { rule: 'Rule (ix) Subpart (g)', clazz: 'D', reasoning: 'it contacts the CNS or central circulatory system under Rule (ix) Subpart (g)' } },
      { text: 'Subpart (d): Energy as ionizing radiation', result: { rule: 'Rule (ix) Subpart (d)', clazz: 'C', reasoning: 'it supplies energy as ionizing radiation under Rule (ix) Subpart (d)' } },
      { text: 'Subpart (e): Biological effect or wholly/mainly absorbed by the body', result: { rule: 'Rule (ix) Subpart (e)', clazz: 'C', reasoning: 'it is absorbed or has biological effects under Rule (ix) Subpart (e)' } },
      { text: 'Subpart (f): Administration of medicine via hazardous delivery', result: { rule: 'Rule (ix) Subpart (f)', clazz: 'C', reasoning: 'it administers medicine in a potentially hazardous way under Rule (ix) Subpart (f)' } },
      { text: 'Subpart (c): Intended to connect to active device (same class as active)', result: { rule: 'Rule (ix) Subpart (c)', clazz: 'Matches Active Device Class', reasoning: 'it connects to an active device and matches its class under Rule (ix) Subpart (c)' } },
      { text: 'Subpart (a): General transient surgically invasive use (e.g. disposable scalpels, surgical needles)', result: { rule: 'Rule (ix) Subpart (a)', clazz: 'B', reasoning: 'it is a transient surgically invasive device under Rule (ix) Subpart (a)' } }
    ]
  },
  q_rule10: {
    id: 'q_rule10',
    text: 'Under Rule (x) (Short-Term Surgically Invasive), what are the details?',
    options: [
      { text: 'Subpart (e): Direct contact with CNS, circulatory, biological effect, or wholly/mainly absorbed', result: { rule: 'Rule (x) Subpart (e)', clazz: 'D', reasoning: 'it contacts CNS/circulatory, is absorbed, or has biological effect under Rule (x) Subpart (e)' } },
      { text: 'Subpart (b): Undergoes chemical change in body (except teeth) (e.g. tissue adhesive glue)', result: { rule: 'Rule (x) Subpart (b)', clazz: 'C', reasoning: 'it undergoes chemical change in soft tissues under Rule (x) Subpart (b)' } },
      { text: 'Subpart (c): Undergoes chemical change in body AND is placed into teeth (dental fillings/cement)', result: { rule: 'Rule (x) Subpart (c)', clazz: 'B', reasoning: 'it undergoes chemical change inside teeth under Rule (x) Subpart (c)' } },
      { text: 'Subpart (d): Administers medicine or supplies ionizing radiation', result: { rule: 'Rule (x) Subpart (d)', clazz: 'C', reasoning: 'it administers medicine or supplies ionizing radiation under Rule (x) Subpart (d)' } },
      { text: 'Subpart (a): General short-term surgically invasive use (e.g. temporary wound drains, temporary skin staples)', result: { rule: 'Rule (x) Subpart (a)', clazz: 'B', reasoning: 'it is a short-term surgically invasive device under Rule (x) Subpart (a)' } }
    ]
  },
  q_rule11: {
    id: 'q_rule11',
    text: 'Under Rule (xi) (Implantable and Long-Term Surgically Invasive), what are the details?',
    options: [
      { text: 'Subpart (c): Contacts heart/CNS, life supporting, active implant, wholly/mainly absorbed, administers medicine, or is a breast implant', result: { rule: 'Rule (xi) Subpart (c)', clazz: 'D', reasoning: 'it is a high-risk long term implant (CNS, circulatory, life support, active, absorbed, or breast implant) under Rule (xi) Subpart (c)' } },
      { text: 'Subpart (d): Undergoes chemical change in the body (except placed in teeth)', result: { rule: 'Rule (xi) Subpart (d)', clazz: 'D', reasoning: 'it undergoes chemical change in soft tissues under Rule (xi) Subpart (d)' } },
      { text: 'Subpart (b): Placed into any tooth (e.g. dental implants, permanent fillings)', result: { rule: 'Rule (xi) Subpart (b)', clazz: 'B', reasoning: 'it is a long-term implant placed into a tooth under Rule (xi) Subpart (b)' } },
      { text: 'Subpart (a): General long-term implantable use (e.g. orthopedic bone plates, artificial knee/hip joints)', result: { rule: 'Rule (xi) Subpart (a)', clazz: 'C', reasoning: 'it is a general long-term implantable or surgically invasive device under Rule (xi) Subpart (a)' } }
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
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      <div className="bg-[#0f172a] text-white p-8 my-8 rounded-xl shadow-md text-center not-prose">
        <h2 className="text-3xl font-bold m-0 text-blue-400">Chapter 23.5</h2>
        <p className="text-xl mt-2 text-slate-300 font-medium">Master Flowchart & Classification Wizard</p>
      </div>

      <p className="lead text-lg text-slate-600">
        You have now learned all 18 classification rules of the Indian Medical Devices Rules (MDR) 2017. Below, you will find the complete master flowchart followed by an interactive Classification Wizard.
      </p>

      <h3 className="text-2xl font-bold mt-10 mb-6 text-slate-800 border-b pb-2">Master Classification Flowchart</h3>
      <p>This flowchart summarizes the entire Medical Device Classification system under the Indian MDR 2017. <strong>Hover over the flowchart and use your mouse wheel to zoom in and out.</strong> You can also drag to pan around.</p>
      
      <InteractiveFlowchart minHeight="650px">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 min-w-[1000px] text-xs">
          {/* Column 1: Non-Invasive Devices (Rules i-iv) */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="border-b border-slate-200 pb-2 mb-1">
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide">1. Non-Invasive</h4>
              <span className="text-[10px] text-slate-500 font-medium font-mono">Rules (i) - (iv)</span>
            </div>
            
            {/* Rule i */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (i): Injured Skin</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-emerald-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class A</strong>
                  Shallow wounds / Mechanical barrier
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Breached dermis / Microenvironment
                </div>
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Secondary intention healing
                </div>
              </div>
            </div>

            {/* Rule ii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (ii): Channel / Store</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-emerald-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class A</strong>
                  Standard gravity lines / syringe barrels
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Active connection / routes blood
                </div>
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Anticoagulant blood bags
                </div>
              </div>
            </div>

            {/* Rule iii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (iii): Modification</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Filtration, centrifuge, heat exchange
                </div>
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Biological / chemical alteration
                </div>
              </div>
            </div>

            {/* Rule iv */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (iv): Other Non-Invasive</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-emerald-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class A</strong>
                  Intact skin contact / no contact
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Invasive Devices (Rules v-xi) */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="border-b border-slate-200 pb-2 mb-1">
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide">2. Invasive</h4>
              <span className="text-[10px] text-slate-500 font-medium font-mono">Rules (v) - (xi)</span>
            </div>

            {/* Orifices v-viii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Natural Orifices (Rules v-viii)</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                  <span className="font-bold text-slate-800 text-[10px] block">Rule (v) Transient (&lt;60m)</span>
                  <span className="text-[10px] text-slate-500">Class A (General) | Class B (Ocular/Mucous)</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                  <span className="font-bold text-slate-800 text-[10px] block">Rule (vi) Short-Term (60m-30d)</span>
                  <span className="text-[10px] text-slate-500">Class A (Oral/Nasal/Ear) | Class B (Other)</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                  <span className="font-bold text-slate-800 text-[10px] block">Rule (vii) Long-Term (&gt;30d)</span>
                  <span className="text-[10px] text-slate-500">Class B (Oral/Nasal/Ear) | Class C (Other)</span>
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Rule (viii): Connection to active unit
                </div>
              </div>
            </div>

            {/* Surgical ix-xi */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Surgically Invasive (Rules ix-xi)</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                  <span className="font-bold text-slate-800 text-[10px] block">Rule (ix) Transient</span>
                  <span className="text-[10px] text-slate-500">Class A (Reusable) | Class B (Default) | Class C (Radiation/Absorbed) | Class D (CNS/Heart)</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                  <span className="font-bold text-slate-800 text-[10px] block">Rule (x) Short-Term</span>
                  <span className="text-[10px] text-slate-500">Class B (Default/Teeth) | Class C (Chemical/Radiation) | Class D (CNS/Heart/Absorbed)</span>
                </div>
                <div className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                  <span className="font-bold text-slate-800 text-[10px] block">Rule (xi) Implantable / Long-Term</span>
                  <span className="text-[10px] text-slate-500">Class B (Teeth) | Class C (Standard Ortho) | Class D (CNS/Circulatory/Life Support)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Active Devices (Rules xii-xiv) */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="border-b border-slate-200 pb-2 mb-1">
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide">3. Active Devices</h4>
              <span className="text-[10px] text-slate-500 font-medium font-mono">Rules (xii) - (xiv)</span>
            </div>

            {/* Rule xii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xii): Therapeutic</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Standard energy exchange (TENS, heating pad)
                </div>
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Hazardous delivery / console controls (lasers, ventilator)
                </div>
              </div>
            </div>

            {/* Rule xiii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xiii): Diagnostic / Admin</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-emerald-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class A</strong>
                  Body illumination with visible/NIR light only
                </div>
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Standard diagnostic (ECG, Ultrasound, MRI) / admin pumps
                </div>
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Vitals alarm / ionizing radiation / hazardous pumps (CT, chemo pump)
                </div>
              </div>
            </div>

            {/* Rule xiv */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xiv): Other Active</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-emerald-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class A</strong>
                  Standard support active hardware (motorized beds, lights)
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Special Categories (Rules xv-xviii) */}
          <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="border-b border-slate-200 pb-2 mb-1">
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide">4. Special Rules</h4>
              <span className="text-[10px] text-slate-500 font-medium font-mono">Rules (xv) - (xviii)</span>
            </div>

            {/* Rule xv */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xv): Medicinal Products</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Exempted antiseptic agents on topical dress
                </div>
                <div className="bg-rose-50 border border-rose-200 text-rose-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-rose-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class D</strong>
                  Drug-eluting stents / heparin catheters
                </div>
              </div>
            </div>

            {/* Rule xvi */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xvi): Cells & Tissues</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-emerald-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class A</strong>
                  Non-viable tissue with intact skin contact only
                </div>
                <div className="bg-rose-50 border border-rose-200 text-rose-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-rose-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class D</strong>
                  Porcine valves, biological suture, collagen mesh
                </div>
              </div>
            </div>

            {/* Rule xvii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xvii): Disinfection</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-amber-50 border border-amber-200 text-amber-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-amber-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class B</strong>
                  Pre-sterilization washing washers
                </div>
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Autoclaves, lens solution, end-point disinfectants
                </div>
              </div>
            </div>

            {/* Rule xviii */}
            <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
              <span className="font-bold text-sky-700 block mb-1">Rule (xviii): Contraception</span>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="bg-orange-50 border border-orange-200 text-orange-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-orange-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class C</strong>
                  Barrier systems (Male/female condoms, diaphragms)
                </div>
                <div className="bg-rose-50 border border-rose-200 text-rose-950 p-1.5 rounded text-[11px]">
                  <strong className="font-black bg-rose-200/50 px-1 py-0.2 rounded text-[9px] mr-1">Class D</strong>
                  Implantable IUDs, subcutaneous contraceptive inserts
                </div>
              </div>
            </div>
          </div>
        </div>
      </InteractiveFlowchart>

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
                  className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all group flex items-center justify-between animate-in slide-in-from-bottom-2 duration-200"
                >
                  <span className="font-medium text-slate-700 group-hover:text-blue-900 leading-snug">{opt.text}</span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all shrink-0 ml-4" />
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
                The device under consideration is <span className="font-bold bg-emerald-200 px-2 py-1 rounded">Class {result.clazz}</span> as per <span className="font-bold underline decoration-emerald-400 underline-offset-2">{result.rule}</span> of Indian MDR 2017 because {result.reasoning}.
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
