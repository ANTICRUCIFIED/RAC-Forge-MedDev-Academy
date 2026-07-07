import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  RefreshCw, 
  FileText, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Sparkles, 
  AlertCircle, 
  Info, 
  ShieldAlert, 
  Activity,
  Table,
  Layers,
  Clock,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Heart,
  Search,
  Filter,
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { RegulatoryTermsPopup, REGULATORY_TERMS } from './RegulatoryTermsPopup';

interface TermLinkProps {
  termId: string;
  children: React.ReactNode;
  onSelect: (termId: string) => void;
}

const TermLink: React.FC<TermLinkProps> = ({ termId, children, onSelect }) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(termId)}
      className="inline-flex items-center gap-0.5 px-1 py-0.5 bg-indigo-50/80 hover:bg-indigo-100 text-indigo-700 hover:text-indigo-900 border-b-2 border-dashed border-indigo-400 font-semibold rounded cursor-pointer transition-all leading-normal text-[11px] select-none mx-0.5"
      title={`Learn what "${String(children)}" means`}
    >
      {children}
      <span className="text-[8px] opacity-80">❓</span>
    </button>
  );
};

const PARSE_REGEX = /(natural body orifices|surgically invasive|Invasive devices|active devices|active device|active therapeutic devices|active diagnostic devices|implantable|Implantable|transient use|short-term use|long-term use|Hydrocolloid or alginate dressings|stents|stent|ancillary substance|catheters|catheter|Hemodialysis|central circulatory system|central nervous system|animal or human non-viable tissue\/cell derivatives|animal tissues, cells, or human derivatives|DEHP)/g;

export const TERM_MAP: Record<string, string> = {
  'natural body orifices': 'orifices',
  'surgically invasive': 'surgically_invasive',
  'Invasive devices': 'invasive',
  'active devices': 'active',
  'active device': 'active',
  'active therapeutic devices': 'active',
  'active diagnostic devices': 'active',
  'implantable': 'implantable',
  'Implantable': 'implantable',
  'transient use': 'transient',
  'short-term use': 'short_term',
  'long-term use': 'long_term',
  'Hydrocolloid or alginate dressings': 'hydrocolloid_alginate',
  'stents': 'stent',
  'stent': 'stent',
  'ancillary substance': 'ancillary_substance',
  'catheters': 'catheter',
  'catheter': 'catheter',
  'Hemodialysis': 'hemodialysis',
  'central circulatory system': 'central_circulatory',
  'central nervous system': 'central_nervous',
  'animal or human non-viable tissue/cell derivatives': 'bioburden',
  'animal tissues, cells, or human derivatives': 'bioburden',
  'DEHP': 'dehp'
};

const ParsedText = ({ text, onSelect }: { text: string; onSelect: (id: string) => void }) => {
  if (!text) return null;
  const parts = text.split(PARSE_REGEX);
  return (
    <>
      {parts.map((part, i) => {
        const termId = TERM_MAP[part];
        if (termId) {
          return <TermLink key={i} termId={termId} onSelect={onSelect}>{part}</TermLink>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

// Complete CDSCO MDR 2017 16-Rule statutory dataset
const CDSCO_RULES_DATA = [
  {
    id: 1,
    ruleNum: 'Rule 1',
    category: 'non_invasive',
    title: 'General Non-Invasive Surface Contacts',
    clause: 'All non-invasive devices are assigned to Class A, unless they are covered by another rule. This includes devices that do not touch the patient or touch only intact skin.',
    classLetter: 'Class A',
    tier: 'Low Risk',
    color: 'blue',
    examples: ['Stethoscopes', 'Diagnostic ECG electrodes', 'Surgical examination lights', 'Hospital patient beds', 'Manual wheelchairs'],
    clinicalRisks: ['Local minor skin irritation', 'Mechanical failure of patient support', 'Cross-contamination of surface dust']
  },
  {
    id: 2,
    ruleNum: 'Rule 2',
    category: 'non_invasive',
    title: 'Storage or Channeling of Fluids and Gases',
    clause: 'Non-invasive devices intended for channeling or storing liquids, gases, or body tissues/liquids for infusion, administration, or introduction into the body are classified as Class B.',
    classLetter: 'Class B',
    tier: 'Low-Moderate Risk',
    color: 'blue',
    examples: ['Blood bags without anticoagulant solution', 'Tubing sets for infusion pumps', 'Disposable syringes without needles', 'Oxygen therapy tubes'],
    clinicalRisks: ['Leaching of chemical plasticizers (e.g., DEHP)', 'Fluid pathway contamination', 'Air embolism in patient line']
  },
  {
    id: 3,
    ruleNum: 'Rule 3',
    category: 'non_invasive',
    title: 'Biological or Chemical Composition Modification',
    clause: 'Non-invasive devices intended for modifying the biological or chemical composition of blood, other body liquids, or other liquids intended for infusion are Class C. (Exception: if the treatment consists of filtration or centrifugation, they are Class B).',
    classLetter: 'Class C',
    tier: 'Moderate-High Risk',
    color: 'blue',
    examples: ['Hemodialysis membranes', 'Blood oxygenators', 'Leukocyte depletion filters (Class B)', 'Apheresis separation columns'],
    clinicalRisks: ['Severe hemolysis (rupturing of red blood cells)', 'Systemic blood clotting or embolism', 'Failure of gas exchange causing hypoxia']
  },
  {
    id: 4,
    ruleNum: 'Rule 4',
    category: 'non_invasive',
    title: 'Devices in Contact with Injured Skin or Mucous Membranes',
    clause: 'Non-invasive devices that contact injured skin or breached dermis are: Class A if used as a simple wound cover/compression. Class B if used to manage the micro-environment of a wound (e.g., absorbing exudates). Class C if intended to heal breached skin by primary intention.',
    classLetter: 'Class A / B / C',
    tier: 'Low to Moderate-High Risk',
    color: 'blue',
    examples: ['Standard adhesive bandages (Class A)', 'Hydrocolloid or alginate dressings (Class B)', 'Advanced collagen active dressings (Class C)'],
    clinicalRisks: ['Infection of deep tissues', 'Delayed wound healing or maceration', 'Allergic reaction to wound contact polymers']
  },
  {
    id: 5,
    ruleNum: 'Rule 5',
    category: 'invasive',
    title: 'Invasive Devices Entering Natural Orifices',
    clause: 'Invasive devices (not surgically invasive) entering natural body orifices (ear, nose, mouth, rectum): Class A for transient use (< 60 mins). Class B for short-term use (> 60 mins up to 30 days) or transient use in oral/nasal cavities. Class C for long-term use (> 30 days) or if connected to an active device.',
    classLetter: 'Class A / B / C',
    tier: 'Low to Moderate-High Risk',
    color: 'amber',
    examples: ['Spatulas or tongue depressors (Class A)', 'Urinary Foley catheters (Class B)', 'Endotracheal tubes (Class B)', 'Daily wear contact lenses (Class C)'],
    clinicalRisks: ['Mucosal tear or perforation', 'Urinary tract infection (UTI)', 'Corneal ulcers leading to vision loss']
  },
  {
    id: 6,
    ruleNum: 'Rule 6',
    category: 'invasive',
    title: 'Surgically Invasive Devices (Transient Use < 60 mins)',
    clause: 'Surgically invasive devices intended for transient use are Class B. (Exception: Class C if intended specifically to diagnose, monitor, control, or correct a defect of the heart or central circulatory system/nervous system through direct contact).',
    classLetter: 'Class B / C',
    tier: 'Low-Moderate to Moderate-High Risk',
    color: 'amber',
    examples: ['Reusable surgical scalpels (Class B)', 'Vascular guidewires (Class C)', 'Angioplastic balloon catheters (Class C)', 'Surgical suture needles (Class B)'],
    clinicalRisks: ['Accidental vessel perforation', 'Major internal hemorrhaging', 'Vessel dissection or thrombosis']
  },
  {
    id: 7,
    ruleNum: 'Rule 7',
    category: 'invasive',
    title: 'Surgically Invasive Devices (Short-Term 60 mins to 30 days)',
    clause: 'Surgically invasive devices for short-term use are Class B. Class C if intended to deliver medicines or radiation, or undergo chemical change in the body. Class D if in direct contact with the heart, central circulatory system, or central nervous system.',
    classLetter: 'Class B / C / D',
    tier: 'Low-Moderate to High Risk',
    color: 'amber',
    examples: ['Thoracic chest drainage tubes (Class B)', 'Temporary skin sutures (Class B)', 'Internal staples undergoing biodegradation (Class C)', 'Temporary cardiac pacing leads (Class D)'],
    clinicalRisks: ['Systemic bacterial infection', 'Cardiac arrhythmias from lead contact', 'Failure of bioabsorption causing toxic residue']
  },
  {
    id: 8,
    ruleNum: 'Rule 8',
    category: 'invasive',
    title: 'Implantable and Long-Term Surgically Invasive Devices',
    clause: 'Implantable and surgically invasive devices for long-term use (> 30 days) are Class C. Class D if in direct contact with the heart, central circulatory system (e.g., coronary stents), or central nervous system.',
    classLetter: 'Class C / D',
    tier: 'Moderate-High to High Risk',
    color: 'amber',
    examples: ['Titanium orthopedic plates (Class C)', 'Prosthetic hip & knee joints (Class C)', 'Drug-eluting coronary stents (Class D)', 'Mechanical heart valves (Class D)', 'Implantable cardiac pacemakers (Class D)'],
    clinicalRisks: ['Stent restenosis or thrombosis', 'Implant rejection or mechanical loosening', 'Chronic osteomyelitis / bone infection']
  },
  {
    id: 9,
    ruleNum: 'Rule 9',
    category: 'active',
    title: 'Active Therapeutic Devices (Energy Administering)',
    clause: 'Active therapeutic devices intended to administer or exchange energy are Class B. Class C if energy administration or exchange presents potential hazards (e.g., High-frequency electrosurgical generators, external defibrillators).',
    classLetter: 'Class B / C',
    tier: 'Low-Moderate to Moderate-High Risk',
    color: 'rose',
    examples: ['TENS muscle stimulators (Class B)', 'Surgical operating lamps (Class B)', 'External cardiac defibrillators (Class C)', 'High-frequency surgical lasers (Class C)'],
    clinicalRisks: ['Accidental tissue burning', 'Ventricular fibrillation (improper electric pulse)', 'Laser optical injury to staff or patient']
  },
  {
    id: 10,
    ruleNum: 'Rule 10',
    category: 'active',
    title: 'Active Diagnostic Devices (Imaging and Telemetry)',
    clause: 'Active devices intended for diagnostic monitoring or imaging: Class B for standard physiological telemetry. Class C if monitoring vital physiological parameters where variations could result in immediate danger to the patient (e.g., cardiac output monitors).',
    classLetter: 'Class B / C',
    tier: 'Low-Moderate to Moderate-High Risk',
    color: 'rose',
    examples: ['Electronic blood pressure cuffs (Class B)', 'Standard clinical thermometers (Class B)', 'ICU multi-parameter patient monitors (Class C)', 'Fetal heart rate monitors (Class C)'],
    clinicalRisks: ['Inaccurate diagnostic reads delaying therapy', 'Electric shock leakage from sensors', 'Misleading alarm fatigue in intensive care']
  },
  {
    id: 11,
    ruleNum: 'Rule 11',
    category: 'active',
    title: 'Active Devices to Administer/Remove Fluids or Drugs',
    clause: 'Active devices designed to administer or withdraw medicines, body liquids, or other substances are Class B. Class C if the administration presents significant risk of dosing errors (e.g., syringe infusion pumps, anesthesia delivery systems).',
    classLetter: 'Class B / C',
    tier: 'Low-Moderate to Moderate-High Risk',
    color: 'rose',
    examples: ['Enteral feeding pumps (Class B)', 'Volumetric syringe infusion pumps (Class C)', 'Anesthesia gas vaporizers (Class C)', 'Insulin delivery pumps (Class C)'],
    clinicalRisks: ['Severe medication overdose', 'Anesthetic gas leakage or hypercapnia', 'Air infusion into blood lines']
  },
  {
    id: 12,
    ruleNum: 'Rule 12',
    category: 'active',
    title: 'General Active Devices (All Other Cases)',
    clause: 'All other active devices not covered by other rules (Rules 9, 10, or 11) are assigned to Class B.',
    classLetter: 'Class B',
    tier: 'Low-Moderate Risk',
    color: 'rose',
    examples: ['Active dental handpieces', 'Patient warming blankets', 'Electric surgical microscopes', 'Suction pumps'],
    clinicalRisks: ['Mechanical malfunction during surgery', 'Superficial skin burns from warming lines', 'Bacterial aerosol spray from drill handpieces']
  },
  {
    id: 13,
    ruleNum: 'Rule 13',
    category: 'special',
    title: 'Combination Devices (Ancillary Medicinal Drug)',
    clause: 'Devices incorporating an ancillary substance which, if used separately, would be considered a medicine (drug), and which acts in support of the device, are Class D.',
    classLetter: 'Class D',
    tier: 'Highest Risk',
    color: 'emerald',
    examples: ['Drug-eluting coronary stents (Sirolimus/Paclitaxel)', 'Bone grafts containing Bone Morphogenetic Proteins (BMPs)', 'Heparin-coated intravascular catheters'],
    clinicalRisks: ['Allergic reaction to the drug molecule', 'Atypical drug-release rate causing local toxicity', 'Chronic inflammatory foreign body reaction']
  },
  {
    id: 14,
    ruleNum: 'Rule 14',
    category: 'special',
    title: 'Animal or Human Tissue/Cell Sourced Devices',
    clause: 'Devices manufactured utilizing non-viable animal tissues, cells, or human derivatives are Class D (Except if the device contacts only intact skin, which is Class A).',
    classLetter: 'Class A / D',
    tier: 'Low to Highest Risk',
    color: 'emerald',
    examples: ['Bovine collagen dermal matrices (Class D)', 'Porcine bioprosthetic heart valves (Class D)', 'Catgut biological sutures (Class D)', 'Leather wheelchair cushions (Class A)'],
    clinicalRisks: ['Transmission of animal pathogens (e.g., BSE/Prions)', 'Severe acute immunological rejection', 'Rapid structural biodegradation and rupture']
  },
  {
    id: 15,
    ruleNum: 'Rule 15',
    category: 'special',
    title: 'Contraceptives & STD Prevention Devices',
    clause: 'Devices intended for contraception or prevention of sexually transmitted diseases are: Class C for barriers (e.g., condoms, diaphragms). Class D for long-term implantable devices (e.g., intrauterine devices - IUDs).',
    classLetter: 'Class C / D',
    tier: 'Moderate-High to Highest Risk',
    color: 'emerald',
    examples: ['Male latex condoms (Class C)', 'Copper-T intrauterine devices (Class D)', 'Hormonal subcutaneous contraceptive rods (Class D)'],
    clinicalRisks: ['Unintended pregnancy due to device failure', 'Uterine wall perforation (by IUD)', 'Systemic hormone toxicity']
  },
  {
    id: 16,
    ruleNum: 'Rule 16',
    category: 'special',
    title: 'Disinfectants and Sterilization Indicators',
    clause: 'Devices intended specifically for disinfecting medical devices, contact lens care, or autoclave sterilization indicators: Class B for general device cleaners. Class C for disinfectants of invasive devices, contact lens solutions, and sterilization indicators.',
    classLetter: 'Class B / C',
    tier: 'Low-Moderate to Moderate-High Risk',
    color: 'emerald',
    examples: ['Autoclave steam chemical indicators (Class C)', 'Contact lens multipurpose washing solutions (Class C)', 'Surface disinfectant wipes for patient beds (Class B)', 'Liquid chemical sterilizers for endoscopes (Class C)'],
    clinicalRisks: ['Sub-optimal sterilization causing cross-infection', 'Severe chemical keratitis from contact lens residue', 'Corrosive wear of surgical instruments']
  }
];

interface IndianMDRClassifierProps {
  onClassificationCompleted?: (payload: { classLetter: string; ruleNum: string; details: string }) => void;
  isSecondModuleMode?: boolean; 
}

export default function IndianMDRClassifier({ onClassificationCompleted, isSecondModuleMode = false }: IndianMDRClassifierProps) {
  // Navigation mode inside Module 1: 
  // 'academy' (the deep foundational course) vs 'classifier' (live interactive simulator)
  const [subMode, setSubMode] = useState<'academy' | 'classifier'>(isSecondModuleMode ? 'classifier' : 'academy');

  // Academy sub-lessons: 
  // 1: Medical Device Foundations & Definition
  // 2: The 4 Pillars of Device Categories
  // 3: The 3 Clinical Pillars (Table)
  // 4: Risk Classification Framework (The 4 Rules)
  // 5: Compliance Scenario Quiz
  const [lessonTab, setLessonTab] = useState<number>(1);

  // Drug vs Device interactive selection state
  const [compareChoice, setCompareChoice] = useState<'drug' | 'device'>('device');

  // Knowledge Check quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Classification parameters state
  const [deviceCategory, setDeviceCategory] = useState<'non_invasive' | 'invasive' | 'active' | 'special'>(
    isSecondModuleMode ? 'invasive' : 'non_invasive'
  );

  // Sub-selections within Non-Invasive (Rule 1-4)
  const [niSub, setNiSub] = useState<string>('r1_general');
  
  // Sub-selections within Invasive (Rule 5-8)
  const [invType, setInvType] = useState<string>(isSecondModuleMode ? 'surgically_long' : 'orifice');
  const [invContact, setInvContact] = useState<string>(isSecondModuleMode ? 'circulatory' : 'other_tissue');
  const [invDuration, setInvDuration] = useState<string>(isSecondModuleMode ? 'long_term' : 'transient');

  // Sub-selections within Active (Rule 9-12)
  const [actType, setActType] = useState<string>('other');
  
  // Special variables (Rule 13-16)
  const [hasDrug, setHasDrug] = useState<boolean>(isSecondModuleMode ? true : false);
  const [hasTissue, setHasTissue] = useState<boolean>(false);
  const [isContraceptive, setIsContraceptive] = useState<boolean>(false);

  // Help Modal State
  const [activeHelpTerm, setActiveHelpTerm] = useState<string | null>(null);

  // Stage-Gate Lifecycle Explorer active timeline stage (0-6)
  const [activeTimelineStage, setActiveTimelineStage] = useState<number>(0);

  // Lesson 4 Complete Rule Directory States
  const [ruleSearch, setRuleSearch] = useState('');
  const [ruleCategory, setRuleCategory] = useState<'all' | 'non_invasive' | 'invasive' | 'active' | 'special'>('all');
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  // Quiz definitions (General non-stent examples)
  const quizQuestions = [
    {
      id: 'q1',
      device: 'Sterile cotton gauze applied to high-exudate wound bed as a physical barrier',
      options: [
        { key: 'A', text: 'Class A (Low Risk)' },
        { key: 'B', text: 'Class B (Low-Moderate)' },
        { key: 'C', text: 'Class C (Moderate-High)' },
        { key: 'D', text: 'Class D (High Risk)' }
      ],
      correct: 'B',
      explanation: 'Since the cotton gauze is used on a breached skin wound to manage fluid exudates, it goes beyond general surface contact and falls under Rule 4 (Class B).'
    },
    {
      id: 'q2',
      device: 'Pneumatic mechanical ventilator delivering controlled oxygen gas under pressure to patient lungs',
      options: [
        { key: 'A', text: 'Class A (Low Risk)' },
        { key: 'B', text: 'Class B (Low-Moderate)' },
        { key: 'C', text: 'Class C (Moderate-High)' },
        { key: 'D', text: 'Class D (High Risk)' }
      ],
      correct: 'C',
      explanation: 'An active device designed to exchange vital respiratory energy and gases under positive pressure, presenting moderate-high system risk (Rule 9 / Rule 11).'
    },
    {
      id: 'q3',
      device: 'Surgical bone graft pre-coated with an antibiotic compound to prevent local microbial osteomyelitis',
      options: [
        { key: 'A', text: 'Class A (Low Risk)' },
        { key: 'B', text: 'Class B (Low-Moderate)' },
        { key: 'C', text: 'Class C (Moderate-High)' },
        { key: 'D', text: 'Class D (High Risk)' }
      ],
      correct: 'D',
      explanation: 'An implantable device incorporating an ancillary medicinal substance (the antibiotic compound) automatically triggers the highest regulatory risk category (Class D, Rule 13).'
    }
  ];

  const handleQuizSubmit = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correct) {
        score += 1;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  // Calculate dynamic Indian MDR 2017 Class
  const calculateMDRClass = () => {
    let classLetter = 'A';
    let ruleNum = 'Rule 1';
    let details = 'Low Risk medical device.';
    let rationale = 'General non-invasive device not interacting with body systems or fluids.';

    // If Special Rules apply (they override other classifications if Class D)
    if (hasDrug) {
      return {
        classLetter: 'D',
        ruleNum: 'Rule 13 (Medicinal Component)',
        details: 'Class D (High Risk) Combination Device.',
        rationale: 'Devices incorporating an ancillary medicinal substance / active pharmaceutical ingredient (e.g., drug coating or heparin layer) are classified in the highest tier (Class D).'
      };
    }
    if (hasTissue) {
      return {
        classLetter: 'D',
        ruleNum: 'Rule 14 (Animal/Human Tissues)',
        details: 'Class D (High Risk) Biological Sourced Device.',
        rationale: 'Devices utilizing non-viable animal or human tissues or cells, or their derivatives, trigger Class D status due to transmission risk and immunological risks.'
      };
    }

    if (deviceCategory === 'non_invasive') {
      if (niSub === 'r1_general') {
        classLetter = 'A';
        ruleNum = 'Rule 1';
        details = 'Class A (Low Risk)';
        rationale = 'General non-invasive device that does not channel or store liquids, or touch broken skin.';
      } else if (niSub === 'r2_channeling') {
        classLetter = 'B';
        ruleNum = 'Rule 2';
        details = 'Class B (Low-Moderate Risk)';
        rationale = 'Channels or stores liquids/gases for administration or blood/body fluid preservation.';
      } else if (niSub === 'r3_filtration') {
        classLetter = 'C';
        ruleNum = 'Rule 3';
        details = 'Class C (Moderate-High Risk)';
        rationale = 'Modifies the chemical or biological composition of blood, body liquids, or other fluids for infusion.';
      } else if (niSub === 'r4_skin_barrier') {
        classLetter = 'B';
        ruleNum = 'Rule 4';
        details = 'Class B (Low-Moderate Risk)';
        rationale = 'Device contacts breached skin, acting as a physical barrier or absorbing exudates (e.g. advanced dressings).';
      }
    } else if (deviceCategory === 'invasive') {
      if (invType === 'orifice') {
        // Rule 5: Body orifice
        if (invDuration === 'transient') {
          classLetter = 'A';
          ruleNum = 'Rule 5 (a)';
          details = 'Class A (Low Risk)';
          rationale = 'Invasive device through natural body orifices intended for transient use (< 60 mins).';
        } else if (invDuration === 'short_term') {
          classLetter = 'B';
          ruleNum = 'Rule 5 (b)';
          details = 'Class B (Low-Moderate Risk)';
          rationale = 'Invasive device through natural body orifices intended for short-term use (up to 30 days).';
        } else {
          classLetter = 'C';
          ruleNum = 'Rule 5 (c)';
          details = 'Class C (Moderate-High Risk)';
          rationale = 'Invasive device through natural body orifices intended for long-term / permanent use (> 30 days).';
        }
      } else {
        // Surgically invasive (Rule 6, 7, 8)
        if (invDuration === 'transient') {
          // Rule 6
          if (invContact === 'circulatory' || invContact === 'nervous') {
            classLetter = 'C';
            ruleNum = 'Rule 6 (b)';
            details = 'Class C (Moderate-High Risk)';
            rationale = 'Surgically invasive transient device in direct contact with the central circulatory or nervous system.';
          } else {
            classLetter = 'B';
            ruleNum = 'Rule 6 (a)';
            details = 'Class B (Low-Moderate Risk)';
            rationale = 'Surgically invasive transient device (< 60 mins) under standard clinical applications.';
          }
        } else if (invDuration === 'short_term') {
          // Rule 7
          if (invContact === 'circulatory' || invContact === 'nervous') {
            classLetter = 'D';
            ruleNum = 'Rule 7 (c)';
            details = 'Class D (High Risk)';
            rationale = 'Surgically invasive short-term device (< 30 days) in direct contact with the central circulatory or nervous system.';
          } else {
            classLetter = 'B';
            ruleNum = 'Rule 7 (a)';
            details = 'Class B (Low-Moderate Risk)';
            rationale = 'Surgically invasive short-term device intended for general administration or drainage.';
          }
        } else {
          // Rule 8: Long-term implantable
          if (invContact === 'circulatory' || invContact === 'nervous') {
            classLetter = 'D';
            ruleNum = 'Rule 8 (d)';
            details = 'Class D (High Risk)';
            rationale = 'Surgically invasive long-term implantable device in direct, permanent contact with the heart, central circulatory, or nervous system.';
          } else {
            classLetter = 'C';
            ruleNum = 'Rule 8 (a)';
            details = 'Class C (Moderate-High Risk)';
            rationale = 'Surgically invasive long-term implantable device for bones, joint, or other internal organs.';
          }
        }
      }
    } else if (deviceCategory === 'active') {
      if (actType === 'therapeutic') {
        classLetter = 'B';
        ruleNum = 'Rule 9';
        details = 'Class B (Low-Moderate)';
        rationale = 'Active therapeutic device intended to administer or exchange energy.';
      } else if (actType === 'diagnostic') {
        classLetter = 'B';
        ruleNum = 'Rule 10';
        details = 'Class B (Low-Moderate)';
        rationale = 'Active diagnostic device used to capture images or physiological telemetry.';
      } else if (actType === 'administer') {
        classLetter = 'C';
        ruleNum = 'Rule 11';
        details = 'Class C (Moderate-High)';
        rationale = 'Active device intended to administer or withdraw medicines, fluids, or compounds under pressure.';
      } else {
        classLetter = 'B';
        ruleNum = 'Rule 12';
        details = 'Class B (Low-Moderate)';
        rationale = 'Active device not falling into primary diagnostic or therapeutic categories.';
      }
    } else if (deviceCategory === 'special') {
      if (isContraceptive) {
        classLetter = 'C';
        ruleNum = 'Rule 16';
        details = 'Class C (Moderate-High)';
        rationale = 'Contraceptive or disinfectant device under specialized Indian MDR 2017 rules.';
      }
    }

    return { classLetter, ruleNum, details, rationale };
  };

  const currentResult = calculateMDRClass();

  const triggerReset = () => {
    setDeviceCategory('non_invasive');
    setNiSub('r1_general');
    setInvType('orifice');
    setInvContact('other_tissue');
    setInvDuration('transient');
    setActType('other');
    setHasDrug(false);
    setHasTissue(false);
    setIsContraceptive(false);
  };

  const handleCommitClass = () => {
    if (onClassificationCompleted) {
      onClassificationCompleted({
        classLetter: currentResult.classLetter,
        ruleNum: currentResult.ruleNum,
        details: `${currentResult.details}: ${currentResult.rationale}`
      });
    }
  };

  const syncTermId = (() => {
    if (hasDrug) return 'ancillary_substance';
    if (hasTissue) return 'bioburden';
    
    if (deviceCategory === 'non_invasive') {
      if (niSub === 'r1_general') return 'invasive';
      if (niSub === 'r2_channeling') return 'dehp';
      if (niSub === 'r3_filtration') return 'hemodialysis';
      if (niSub === 'r4_skin_barrier') return 'hydrocolloid_alginate';
    }
    
    if (deviceCategory === 'invasive') {
      if (invType === 'orifice') return 'orifices';
      if (invType === 'surgically_long') {
        if (invContact === 'circulatory') return 'central_circulatory';
        if (invContact === 'nervous') return 'central_nervous';
        return 'surgically_invasive';
      }
    }
    
    if (deviceCategory === 'active') {
      return 'active';
    }
    
    if (deviceCategory === 'special') {
      if (hasDrug) return 'ancillary_substance';
      if (hasTissue) return 'bioburden';
      if (isContraceptive) return 'implantable';
    }
    
    return null;
  })();

  const syncTerm = syncTermId ? REGULATORY_TERMS[syncTermId] : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden" id="indian-mdr-tool">
      
      {/* Academy & Simulator Toggle Bar */}
      <div className="bg-slate-900 px-6 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-slate-800 gap-4">
        <div className="min-w-0 flex-1">
          <span className="text-[10px] bg-indigo-500/20 text-indigo-400 font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-indigo-500/30">
            Indian MDR 2017 Regulatory Protocol
          </span>
          <h2 className="text-base font-extrabold text-white mt-1 leading-tight">
            {isSecondModuleMode ? 'ForgeFlow DES Regulatory Classifier' : 'Module 1: De-constructing the Medical Device & Risk Classification'}
          </h2>
        </div>

        {/* Outer Mode Selector */}
        {!isSecondModuleMode && (
          <div className="bg-slate-950 p-1 rounded-xl flex flex-wrap sm:flex-nowrap border border-slate-800/80 w-full lg:w-auto shrink-0 gap-1">
            <button
              onClick={() => setSubMode('academy')}
              className={`flex-1 lg:flex-none text-xs font-bold py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 min-w-max ${
                subMode === 'academy' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen size={13} /> 🎓 1. Beginner Academy
            </button>
            <button
              onClick={() => setSubMode('classifier')}
              className={`flex-1 lg:flex-none text-xs font-bold py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 min-w-max ${
                subMode === 'classifier' 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <RefreshCw size={13} /> 🔬 2. CDSCO Classifier
            </button>
          </div>
        )}
      </div>

      {/* RENDER MODE A: BEGINNER ACADEMY */}
      {subMode === 'academy' && !isSecondModuleMode && (
        <div className="p-6 space-y-6">
          
          {/* Academy navigation tab selector */}
          <div className="flex border-b border-slate-100 pb-3 gap-2 overflow-x-auto scrollbar-none">
            {[
              { id: 1, title: 'Lesson 1: Foundations of Devices', subtitle: 'What is a Medical Device & Core Distinction' },
              { id: 2, title: 'Lesson 2: The 4 Device Categories', subtitle: 'Non-Invasive, Invasive, Active, Special' },
              { id: 3, title: 'Lesson 3: The 3 Clinical Pillars', subtitle: 'Intended Use, Indications, Contraindications' },
              { id: 4, title: 'Lesson 4: Risk Framework & Matrix', subtitle: 'The 4 Rules of Risk & CDSCO Pathways' },
              { id: 5, title: 'Lesson 5: Compliance Scenario Quiz', subtitle: 'Interactive Concept Checkpoint' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setLessonTab(tab.id)}
                className={`py-2 px-3 text-left rounded-xl transition-all flex-shrink-0 min-w-[180px] border ${
                  lessonTab === tab.id
                    ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950 font-bold'
                    : 'bg-white border-transparent text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="text-[10px] font-bold text-indigo-600 uppercase">Part {tab.id}</div>
                <div className="text-xs font-extrabold mt-0.5">{tab.title}</div>
              </button>
            ))}
          </div>

          {/* PART 1: DEFINITIONS & CORE DISTINCTIONS (BEFORE EVERYTHING) */}
          {lessonTab === 1 && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Detailed Definition Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-7 flex flex-col justify-between bg-indigo-50/50 border border-indigo-100 p-6 rounded-2xl space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="p-1.5 bg-indigo-600 text-white rounded-lg">
                          <BookOpen size={18} />
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900">
                          1.1 The Definition of a Medical Device (Fundamental Concept)
                        </h3>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        To any newcomer to the biomedical engineering or regulatory compliance field, understanding what legally constitutes a <strong>Medical Device</strong> is the absolute bedrock of compliance. Under the Indian Medical Device Rules (MDR) 2017, regulated by the Central Drugs Standard Control Organisation (CDSCO), the classification, design verification, quality management systems (QMS), and pre-market clinical pathways depend entirely on this fundamental definition.
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed font-semibold mt-2">
                        Official Legal Definition (CDSCO MDR 2017 & Section 3(b)(iv) of Drugs & Cosmetics Act):
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed bg-white/70 p-3 rounded-lg border border-indigo-100/30">
                        Any instrument, apparatus, appliance, implant, material or other article, whether used alone or in combination, including software or an accessory, intended by its manufacturer to be used specifically for human beings or animals for one or more specific clinical purposes:
                        <span className="block mt-1.5 ml-2 pl-2 border-l-2 border-indigo-500">• Diagnosis, prevention, monitoring, treatment, mitigation, or alleviation of any disease or disorder.</span>
                        <span className="block mt-1 ml-2 pl-2 border-l-2 border-indigo-500">• Diagnosis, monitoring, treatment, alleviation of, or assistance for, an injury or disability.</span>
                        <span className="block mt-1 ml-2 pl-2 border-l-2 border-indigo-500">• Investigation, replacement, modification, or support of the anatomy or of a physiological process.</span>
                        <span className="block mt-1 ml-2 pl-2 border-l-2 border-indigo-500">• Supporting or sustaining life, or controlling conception (including intrauterine devices and condoms).</span>
                        <span className="block mt-1 ml-2 pl-2 border-l-2 border-indigo-500">• Disinfection of medical devices, contact lens cleaning, or sterilization validation markers.</span>
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10.5px] text-slate-600 pt-2">
                      <div className="bg-white/80 p-2 rounded-lg border border-indigo-100/40">
                        <strong>🎯 Diagnosis & Monitoring</strong>
                        <p className="text-[10px] mt-0.5 text-slate-500">Detecting disease pathological states, displaying real-time electrocardiograms, or measuring blood sugar levels to track systemic vitals.</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-indigo-100/40">
                        <strong>🩺 Prevention & Treatment</strong>
                        <p className="text-[10px] mt-0.5 text-slate-500">Halting severe clinical sepsis via sterile surgical wound covers or mechanically reducing skeletal bone fractures using titanium nails.</p>
                      </div>
                      <div className="bg-white/80 p-2 rounded-lg border border-indigo-100/40">
                        <strong>⚙️ Anatomical Support</strong>
                        <p className="text-[10px] mt-0.5 text-slate-500">Scaffolding arterial occlusions physically to prevent circulatory collapse or structurally replacing degenerated hip socket joints.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* HIGH-FIDELITY SCHEMATIC BLUEPRINT (REPLACING UNRELIABLE IMAGES) */}
                  <div className="lg:col-span-5 flex">
                    <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm w-full h-full min-h-[220px] bg-slate-950 p-4 flex flex-col justify-between">
                      <div className="absolute inset-0 bg-slate-950 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                      <svg viewBox="0 0 300 160" className="w-full h-36 relative z-10">
                        {/* Operating Table and Patient shape */}
                        <rect x="50" y="90" width="200" height="8" fill="#334155" rx="2" />
                        <rect x="90" y="98" width="120" height="42" fill="#1e293b" stroke="#334155" strokeWidth="1" rx="4" />
                        <path d="M 60 85 C 80 85, 90 70, 110 75 C 130 80, 170 80, 200 85" stroke="#475569" strokeWidth="4" fill="none" strokeLinecap="round" />
                        
                        {/* IV Drip stand with Infusion Pump */}
                        <line x1="75" y1="20" x2="75" y2="90" stroke="#64748b" strokeWidth="2" />
                        <circle cx="75" cy="20" r="1.5" fill="#64748b" />
                        {/* Infusion Bag */}
                        <path d="M 70 30 Q 75 25, 80 30 L 80 45 Q 75 50, 70 45 Z" fill="#38bdf8" opacity="0.6" stroke="#0ea5e9" strokeWidth="1" />
                        <line x1="75" y1="45" x2="75" y2="70" stroke="#0ea5e9" strokeWidth="1" />
                        {/* Pump box */}
                        <rect x="68" y="52" width="14" height="18" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1" rx="2" />
                        <rect x="71" y="55" width="8" height="6" fill="#818cf8" rx="0.5" />
                        
                        {/* Physiological Monitor Console */}
                        <rect x="200" y="25" width="60" height="45" fill="#020617" stroke="#1e293b" strokeWidth="1.5" rx="4" />
                        {/* Monitor Stand */}
                        <line x1="230" y1="70" x2="230" y2="90" stroke="#475569" strokeWidth="2" />
                        {/* Monitor Grid and Vital Waveform */}
                        <path d="M 205 45 L 215 45 L 220 35 L 225 55 L 230 45 L 255 45" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="220" cy="35" r="1.5" fill="#22c55e" />
                        {/* Vitals Text */}
                        <text x="245" y="38" fill="#22c55e" fontSize="7" fontWeight="bold" className="font-mono">82 HR</text>
                        <text x="245" y="60" fill="#f43f5e" fontSize="7" fontWeight="bold" className="font-mono">98% O₂</text>
                        
                        {/* Connection line from Patient to Monitor */}
                        <path d="M 120 78 C 140 78, 170 78, 205 52" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                        
                        {/* Annotations */}
                        <text x="150" y="15" fill="#818cf8" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono uppercase tracking-wider">Fig 1.1: Clinical Hardware Ecosystem</text>
                        <line x1="75" y1="61" x2="110" y2="61" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="75" cy="61" r="1.5" fill="#4f46e5" />
                        <text x="115" y="64" fill="#a5b4fc" fontSize="6.5" className="font-mono">IV Infusion Pump (Active/Hardware)</text>
                        
                        <line x1="200" y1="45" x2="160" y2="45" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="200" cy="45" r="1.5" fill="#22c55e" />
                        <text x="155" y="48" fill="#a7f3d0" fontSize="6.5" textAnchor="end" className="font-mono">Vital Signs Monitor (Active)</text>
                      </svg>
                      <div className="border-t border-slate-800 pt-2 mt-2">
                        <span className="text-[9px] font-mono text-indigo-400 font-extrabold uppercase tracking-widest block">INTEGRATED CLINICAL ENVIRONMENT</span>
                        <p className="text-slate-300 text-[10px] leading-relaxed mt-0.5 font-medium">
                          <strong>Vitals telemetry monitors, syringe infusions, and surface drapes</strong> are linked systematically, requiring strict physical interfaces to maintain high surgical patient safety.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold text-slate-800">The Core Distinction: Device vs. Drug</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The single most crucial legal boundary is the **Primary Mode of Action (PMOA)**. How does the product achieve its therapeutic goal?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50/20 p-4 rounded-xl border border-indigo-100">
                      <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded uppercase">Medical Device Mechanism</span>
                      <strong className="block text-xs font-bold text-slate-800 mt-2">Physical, Structural, or Mechanical Action</strong>
                      <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                        Achieves its primary purpose via structural means. For example, a bone screw binds segments mechanically, a <TermLink termId="catheter" onSelect={setActiveHelpTerm}>catheter</TermLink> channels fluids physically, and a <TermLink termId="stent" onSelect={setActiveHelpTerm}>stent</TermLink> holds open an occluded artery structurally. It does not chemically react with tissues to achieve its main effect.
                      </p>
                    </div>
                    <div className="bg-rose-50/20 p-4 rounded-xl border border-rose-100">
                      <span className="text-[10px] bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded uppercase">Drug / Biologic Mechanism</span>
                      <strong className="block text-xs font-bold text-slate-800 mt-2">Chemical, Metabolic, or Immunological Action</strong>
                      <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                        Achieves its main therapeutic purpose via pharmacological pathways inside cell structures. The drug binds to cell receptors, alters chemical metabolic pathways, or modulates the immune system via biochemical reactions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Device Landscape Categorization */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-sm font-extrabold text-slate-800">The Broad Medical Device Landscape</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Medical devices are split into standard architectural families depending on their physical complexity and duration of contact:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <strong className="text-xs text-slate-800 block">🖥️ Hardware & Active Equipment</strong>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        Reusable, electro-mechanical machines connected to electrical lines or batteries (e.g. Infusion Pumps, Ventilators, MRI Scanners).
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <strong className="text-xs text-slate-800 block">🩹 Consumables & Disposables</strong>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        Single-use sterile items thrown away after one clinical use to prevent cross-contamination (e.g. Cotton gauze, syringes, surgical gloves).
                      </p>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <strong className="text-xs text-slate-800 block">💾 Software as a Medical Device (SaMD)</strong>
                      <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
                        Independent medical software operating on general computers without being part of physical hardware (e.g. AI-powered chest X-ray classifiers).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Demo */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900 text-white p-5 rounded-2xl mt-4">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">
                      Interactive Mechanism Simulator
                    </span>
                    <p className="text-[11px] text-slate-300">
                      Select a product below to visualize why it qualifies as a mechanical device or chemical drug:
                    </p>
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => setCompareChoice('device')}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          compareChoice === 'device'
                            ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700/50'
                        }`}
                      >
                        <strong className="text-xs block font-bold">🔩 Orthopedic Plate (Device - Mechanical)</strong>
                        <span className="text-[10px] block mt-0.5 opacity-80">Physically binds cracked bone together using metal structural plates and screws to let the skeleton heal.</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCompareChoice('drug')}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          compareChoice === 'drug'
                            ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700/50'
                        }`}
                      >
                        <strong className="text-xs block font-bold">💊 Pain Reliever Tablet (Drug - Chemical)</strong>
                        <span className="text-[10px] block mt-0.5 opacity-80">Dissolves in stomach, enters blood, and chemically blocks pain receptors in the brain.</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-3">
                        <span className="text-[10px] text-slate-400 font-mono">Conceptual Mechanism Visualizer</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono uppercase font-bold">
                          {compareChoice === 'device' ? 'Mechanical Action' : 'Pharmacological Action'}
                        </span>
                      </div>

                      {compareChoice === 'device' ? (
                        <div className="space-y-3">
                          <svg viewBox="0 0 320 120" className="w-full h-24 mx-auto bg-slate-900 rounded-xl border border-slate-800">
                            {/* Cracked Bone Representation */}
                            <path d="M 40 40 L 140 40 Q 150 20, 160 40 L 280 40" stroke="#e2e8f0" strokeWidth="12" fill="none" strokeLinecap="round" />
                            {/* Fracture crack line */}
                            <path d="M 148 30 L 152 50" stroke="#0f172a" strokeWidth="3" />
                            
                            {/* Orthopedic Metal Plate */}
                            <rect x="100" y="28" width="100" height="8" fill="#94a3b8" rx="2" stroke="#cbd5e1" strokeWidth="1" />
                            {/* Screws entering bone */}
                            <line x1="115" y1="28" x2="115" y2="46" stroke="#f43f5e" strokeWidth="2" />
                            <line x1="145" y1="28" x2="145" y2="46" stroke="#f43f5e" strokeWidth="2" />
                            <line x1="175" y1="28" x2="175" y2="46" stroke="#f43f5e" strokeWidth="2" />
                            <text x="150" y="16" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">METAL PLATE FIXATION</text>
                            
                            <text x="160" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">Physical screws lock bone segments under rigid support</text>
                          </svg>
                          <p className="text-[11px] text-slate-300 leading-normal">
                            An <strong>orthopedic metal plate</strong> stabilizes bones purely through mechanical rigidity. No chemical signals trigger bone fusion directly — the bone is simply held steady so biology can mend it.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <svg viewBox="0 0 320 120" className="w-full h-24 mx-auto bg-slate-900 rounded-xl border border-slate-800">
                            {/* Receptor */}
                            <rect x="180" y="30" width="80" height="60" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="8" />
                            <text x="220" y="62" fill="#94a3b8" fontSize="8" textAnchor="middle">Cell Receptor</text>
                            <path d="M 180 50 Q 195 60, 180 70" fill="none" stroke="#e11d48" strokeWidth="2" />

                            {/* Chemical drug key shape */}
                            <g transform="translate(60, 45)">
                              <circle cx="15" cy="15" r="12" fill="#e11d48" opacity="0.8" />
                              <rect x="15" y="10" width="40" height="10" fill="#e11d48" />
                              <text x="32" y="17" fill="#ffffff" fontSize="7" fontWeight="bold" className="font-mono">DRUG KEY</text>
                            </g>

                            {/* Connection arrow */}
                            <path d="M 125 60 L 155 60" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3 3" />
                            <text x="160" y="110" fill="#94a3b8" fontSize="8" textAnchor="middle">Soluble chemical molecules trigger intercellular pathways</text>
                          </svg>
                          <p className="text-[11px] text-slate-300 leading-normal">
                            A <strong>chemical medicine molecule</strong> binds to microscopic nerve cells, inhibiting cellular receptors from sending electrical signals. It operates through chemical keys and lock structures.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* Progress to Lesson 2 */}
              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setLessonTab(2)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-indigo-100"
                >
                  Proceed to Lesson 2: The 4 Device Categories <ChevronRight size={14} />
                </button>
              </div>

            </div>
          )}

          {/* PART 2: THE 4 DEVICE CATEGORIES DEFINED IN DETAIL WITH VISUALS (BEFORE CLASSIFICATION) */}
          {lessonTab === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="max-w-3xl">
                <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
                  <span className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
                    <Layers size={16} />
                  </span>
                  Lesson 2: The 4 Core Medical Device Categories
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  To establish safety rules, regulatory bodies segment all products into one of four core architecture classes. Let's study how they differ mechanically and physically.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Category 1: Non-Invasive */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-300 transition-all space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-blue-600 font-bold uppercase tracking-wider">Category 1 (Rules 1-4)</span>
                      <h4 className="text-sm font-bold text-slate-800 mt-0.5">Non-Invasive Devices (External & Channeling)</h4>
                    </div>
                    
                    {/* High-Fidelity Custom SVG for Non-Invasive */}
                    <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-2">
                      <span className="text-[9px] font-mono text-blue-400 font-bold uppercase tracking-widest block">Fig 2.1: Surface Diagnostic & Dressing Anatomy</span>
                      <svg viewBox="0 0 300 130" className="w-full h-28">
                        {/* Intact Skin Surface Layers */}
                        <rect x="10" y="90" width="280" height="8" fill="#1e293b" rx="2" />
                        <rect x="10" y="100" width="280" height="20" fill="#0f172a" rx="2" />
                        <line x1="10" y1="90" x2="290" y2="90" stroke="#334155" strokeWidth="1.5" />
                        <text x="150" y="112" fill="#64748b" fontSize="7" textAnchor="middle" className="font-mono">INTACT DERMIS BARRIER (NO TISSUE PENETRATION)</text>
                        
                        {/* Multi-layer dressing block */}
                        <g transform="translate(40, 45)">
                          {/* Hydrocolloid pad */}
                          <rect x="20" y="25" width="80" height="15" fill="#3b82f6" opacity="0.8" rx="2" />
                          <rect x="30" y="28" width="60" height="9" fill="#93c5fd" rx="1" />
                          {/* Connection line for external lead */}
                          <line x1="60" y1="25" x2="60" y2="5" stroke="#3b82f6" strokeWidth="1.5" />
                          <circle cx="60" cy="5" r="2.5" fill="#1d4ed8" />
                          <text x="60" y="34" fill="#1e3a8a" fontSize="6.5" textAnchor="middle" fontWeight="bold" className="font-mono">SURFACE GEL</text>
                        </g>

                        {/* Passive Fluid Channeling Block */}
                        <g transform="translate(170, 20)">
                          {/* Tube */}
                          <rect x="20" y="20" width="10" height="50" fill="#38bdf8" opacity="0.3" stroke="#0ea5e9" strokeWidth="1" />
                          <line x1="25" y1="20" x2="25" y2="70" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 2" />
                          {/* Flow Arrow */}
                          <path d="M 25 35 L 25 55 M 21 50 L 25 56 L 29 50" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <text x="36" y="45" fill="#38bdf8" fontSize="7" fontWeight="bold" className="font-mono">FLUID PORT</text>
                        </g>

                        {/* Annotation pointers */}
                        <line x1="100" y1="55" x2="135" y2="35" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="2 1" />
                        <circle cx="100" cy="55" r="1.5" fill="#3b82f6" />
                        <text x="140" y="35" fill="#93c5fd" fontSize="6" className="font-mono">1. Skin Contact Electrode</text>

                        <line x1="190" y1="45" x2="160" y2="70" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="2 1" />
                        <circle cx="190" cy="45" r="1.5" fill="#0ea5e9" />
                        <text x="155" y="73" fill="#7dd3fc" fontSize="6" textAnchor="end" className="font-mono">2. Fluid Channeling Tube</text>
                      </svg>
                    </div>

                    <p className="text-[11.5px] text-slate-600 leading-relaxed space-y-2">
                      <span>
                        Non-invasive devices are products that remain completely outside the patient's biological boundaries, never penetrating surgically or entering <TermLink termId="orifices" onSelect={setActiveHelpTerm}>natural orifices</TermLink>. Under CDSCO Rules 1-4, the vast majority of these devices (e.g. beds, stethoscopes) are assigned to Class A, presenting the lowest potential clinical risk.
                      </span>
                      <span className="block mt-1.5">
                        However, critical exceptions exist. If a non-invasive device is used for <strong>channeling or storing</strong> body fluids (such as blood bags or infusion lines), it escalates to Class B due to chemical leaching (plasticizers like DEHP) or microbial contamination. Furthermore, if a device <strong>modifies the biological or chemical composition</strong> of blood or fluids (such as a <TermLink termId="hemodialysis" onSelect={setActiveHelpTerm}>hemodialysis filter</TermLink> or oxygenator membrane), it is classified as Class C (or Class B if limited to basic filtration or centrifugation). Simple wound coverings are Class A, but advanced <TermLink termId="hydrocolloid_alginate" onSelect={setActiveHelpTerm}>wound dressings</TermLink> managing the wound micro-environment or promoting primary healing are Class B or C.
                      </span>
                    </p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px] text-slate-600">
                    <strong>CDSCO Examples:</strong> Elastic compression bandages (Class A), patient beds (Class A), blood bags without anticoagulants (Class B), infusion pump tubing sets (Class B), hemodialysis filters (Class C).
                  </div>
                </div>

                {/* Category 2: Invasive */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-300 transition-all space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-amber-600 font-bold uppercase tracking-wider">Category 2 (Rules 5-8)</span>
                      <h4 className="text-sm font-bold text-slate-800 mt-0.5">Invasive Devices (Orifices & Surgical Breaches)</h4>
                    </div>

                    {/* High-Fidelity Custom SVG for Invasive */}
                    <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-2">
                      <span className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-widest block">Fig 2.2: Tissue Penetrating & Guidewire Assembly</span>
                      <svg viewBox="0 0 300 130" className="w-full h-28">
                        {/* Anatomical tissue boundaries */}
                        <path d="M 10 75 Q 80 85, 150 75 T 290 75" stroke="#eab308" strokeWidth="2.5" fill="none" opacity="0.8" />
                        <path d="M 10 76 Q 80 86, 150 76 T 290 76" stroke="#b45309" strokeWidth="1" fill="none" opacity="0.3" />
                        <text x="150" y="112" fill="#92400e" fontSize="7" textAnchor="middle" className="font-mono">PENETRATED TISSUE & SKIN DERMIS SURFACE</text>

                        {/* Surgical tool - Guidewire / Catheter entering deep tissue */}
                        <g transform="translate(20, 20)">
                          {/* Needle handle/outer sleeve */}
                          <rect x="20" y="25" width="80" height="10" fill="#475569" stroke="#64748b" strokeWidth="1" rx="1" />
                          <path d="M 100 28 L 190 28 Q 200 48, 220 50" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                          {/* Inner catheter core */}
                          <path d="M 100 30 L 190 30 Q 200 50, 220 52" stroke="#e11d48" strokeWidth="1" fill="none" strokeLinecap="round" />
                          {/* Flash chamber */}
                          <rect x="30" y="27" width="15" height="6" fill="#f43f5e" opacity="0.7" rx="0.5" />
                          <text x="100" y="15" fill="#f59e0b" fontSize="8" fontWeight="bold" className="font-mono">SURGICAL CATHETER</text>
                        </g>

                        {/* Annotations */}
                        <line x1="170" y1="50" x2="130" y2="25" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="2 1" />
                        <circle cx="170" cy="50" r="1.5" fill="#f59e0b" />
                        <text x="125" y="25" fill="#fcd34d" fontSize="6.5" textAnchor="end" className="font-mono">Invasive Sleeve (Orifice/Surgical)</text>

                        <line x1="210" y1="70" x2="230" y2="45" stroke="#e11d48" strokeWidth="0.5" strokeDasharray="2 1" />
                        <circle cx="210" cy="70" r="1.5" fill="#e11d48" />
                        <text x="235" y="45" fill="#fca5a5" fontSize="6.5" className="font-mono">Active Tip (Vessel Contact)</text>
                      </svg>
                    </div>
                    
                    <p className="text-[11.5px] text-slate-600 leading-relaxed space-y-2">
                      <span>
                        Invasive medical devices are designed to penetrate inside the patient's body, either through <TermLink termId="orifices" onSelect={setActiveHelpTerm}>natural anatomical orifices</TermLink> (e.g., ear, nose, mouth, esophagus, urethra) or surgically via incision through the dermal layer. Under CDSCO Rules 5-8, risk scales rapidly based on two main variables: <strong>duration of tissue contact</strong> and the <strong>fragility of the target tissue</strong>.
                      </span>
                      <span className="block mt-1.5">
                        Orifice-entering devices are Class A for <TermLink termId="transient" onSelect={setActiveHelpTerm}>transient use</TermLink> (&lt;60 minutes) but become Class B or C as contact extends to days or months (such as a <TermLink termId="catheter" onSelect={setActiveHelpTerm}>urinary catheter</TermLink>). For <TermLink termId="surgically_invasive" onSelect={setActiveHelpTerm}>surgically invasive</TermLink> devices, transient contact is Class B (such as a scalpel). However, if the device directly monitors, diagnoses, or corrects defects of the <TermLink termId="central_nervous" onSelect={setActiveHelpTerm}>central nervous system (CNS)</TermLink> or the <TermLink termId="central_circulatory" onSelect={setActiveHelpTerm}>central circulatory system (CCS)</TermLink> (e.g. coronary arteries), even for transient surgical contact, it is immediately elevated to Class C or Class D. Permanent surgically <TermLink termId="implantable" onSelect={setActiveHelpTerm}>implantable devices</TermLink> are classified as Class C (e.g., orthopedic bone plates or joint prosthetics) but escalate to Class D if they contact the heart, brain, or major circulatory pathways (e.g., pacemakers and <TermLink termId="stent" onSelect={setActiveHelpTerm}>vascular stents</TermLink>).
                      </span>
                    </p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px] text-slate-600">
                    <strong>CDSCO Examples:</strong> Reusable scalpels (Class B), urinary Foley catheters (Class B), gastrointestinal endoscopes (Class B), titanium orthopedic plates (Class C), implantable pacemakers (Class D).
                  </div>
                </div>

                {/* Category 3: Active (Powered) */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-300 transition-all space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500"></div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-rose-600 font-bold uppercase tracking-wider">Category 3 (Rules 9-12)</span>
                      <h4 className="text-sm font-bold text-slate-800 mt-0.5">Active Devices (Electro-Mechanical & Energy Exchange)</h4>
                    </div>

                    {/* High-Fidelity Custom SVG for Active */}
                    <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-2">
                      <span className="text-[9px] font-mono text-rose-400 font-bold uppercase tracking-widest block">Fig 2.3: Active Electrosurgical & Telemetry Interface</span>
                      <svg viewBox="0 0 300 130" className="w-full h-28">
                        {/* Hardware box outline */}
                        <rect x="20" y="20" width="110" height="85" fill="#020617" stroke="#334155" strokeWidth="2" rx="6" />
                        <rect x="28" y="28" width="94" height="42" fill="#090d16" stroke="#1e293b" strokeWidth="1" rx="4" />
                        
                        {/* Battery, Voltage indicators */}
                        <circle cx="38" cy="85" r="4" fill="#3b82f6" />
                        <line x1="46" y1="85" x2="80" y2="85" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                        <line x1="46" y1="85" x2="68" y2="85" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                        <text x="38" y="96" fill="#64748b" fontSize="6" textAnchor="middle" className="font-mono">SYS OK</text>
                        
                        {/* High frequency energy pulse display */}
                        <path d="M 32 48 L 50 48 L 55 35 L 60 60 L 65 48 L 85 48 L 90 32 L 95 64 L 100 48 L 118 48" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <text x="75" y="80" fill="#f43f5e" fontSize="7" fontWeight="bold" className="font-mono" textAnchor="middle">VOLTAGE GENERATOR</text>

                        {/* Energy delivery cable and handpiece */}
                        <g transform="translate(160, 30)">
                          <path d="M -30 20 Q 20 10, 40 40" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
                          {/* Surgical Handpiece */}
                          <rect x="40" y="35" width="45" height="10" fill="#475569" stroke="#94a3b8" strokeWidth="1" rx="1" transform="rotate(15 40 35)" />
                          {/* Active spark arc */}
                          <path d="M 82 48 L 92 52 L 87 54 L 98 56" fill="none" stroke="#eab308" strokeWidth="1.5" />
                          <circle cx="98" cy="56" r="1.5" fill="#eab308" />
                        </g>

                        {/* Annotations */}
                        <line x1="90" y1="35" x2="140" y2="15" stroke="#f43f5e" strokeWidth="0.5" strokeDasharray="2 1" />
                        <circle cx="90" cy="35" r="1.5" fill="#f43f5e" />
                        <text x="145" y="15" fill="#fda4af" fontSize="6.5" className="font-mono">Active Power Console</text>

                        <line x1="245" y1="52" x2="220" y2="85" stroke="#eab308" strokeWidth="0.5" strokeDasharray="2 1" />
                        <circle cx="245" cy="52" r="1.5" fill="#eab308" />
                        <text x="215" y="88" fill="#fde047" fontSize="6.5" textAnchor="end" className="font-mono">Therapeutic Thermal Spark</text>
                      </svg>
                    </div>

                    <p className="text-[11.5px] text-slate-600 leading-relaxed space-y-2">
                      <span>
                        <TermLink termId="active" onSelect={setActiveHelpTerm}>Active devices</TermLink> are powered instruments whose primary operation relies on an external source of energy (e.g. electrical mains, internal chemical batteries, or pneumatic gas lines) rather than gravity or manual human physical force. Under CDSCO Rules 9-12, active devices present significant regulatory risks because they actively inject or exchange energy, currents, or radiological rays with human tissues.
                      </span>
                      <span className="block mt-1.5">
                        Active devices designed for therapeutic energy exchange are Class B (such as basic muscle stimulators or operating lights) but elevate to Class C if the energy administration involves significant clinical hazards (e.g. electrosurgical generators, external cardiac defibrillators, or surgical laser generators). For diagnostic active devices (Rule 10), standard monitoring machines are Class B, but active monitors measuring critical physiological parameters where variance could pose <strong>immediate danger or cardiac/cerebral collapse</strong> (e.g., intensive care cardiac output or blood gas parameters) are Class C. Similarly, fluid or drug delivery pumps are Class B, but syringe infusion pumps and anesthesia gas vaporizers are Class C due to the high severity of potential dosage administration errors. All other active devices defaults to Class B.
                      </span>
                    </p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px] text-slate-600">
                    <strong>CDSCO Examples:</strong> TENS muscle stimulators (Class B), volumetric infusion pumps (Class C), electrosurgical generators (Class C), fetal monitor telemetry (Class C), ICU multi-parameter screens (Class C).
                  </div>
                </div>

                {/* Category 4: Special & Combination Devices */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-300 transition-all space-y-4 shadow-sm relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Category 4 (Rules 13-16)</span>
                      <h4 className="text-sm font-bold text-slate-800 mt-0.5">Special & Combination Devices (Biocompatible & Biochemical)</h4>
                    </div>

                    {/* High-Fidelity Custom SVG for Special */}
                    <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-2">
                      <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest block">Fig 2.4: Nanoporous Drug-Eluting Strut Blueprint</span>
                      <svg viewBox="0 0 300 130" className="w-full h-28">
                        {/* Titanium core stent strut */}
                        <rect x="20" y="70" width="260" height="24" fill="#334155" stroke="#475569" strokeWidth="1.5" rx="2" />
                        <text x="150" y="84" fill="#cbd5e1" fontSize="7" fontWeight="bold" textAnchor="middle" className="font-mono">STRUCTURAL METALLIC IMPLANT CORE (STENT STRUT)</text>
                        
                        {/* Drug-loaded polymer coating */}
                        <rect x="20" y="52" width="260" height="18" fill="#10b981" opacity="0.35" rx="1" />
                        <line x1="20" y1="52" x2="280" y2="52" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
                        <text x="150" y="64" fill="#34d399" fontSize="6.5" fontWeight="bold" textAnchor="middle" className="font-mono">DRUG-ELUTING BIOCAMPATIBLE POLYMER MATRIX</text>

                        {/* Eluting Drug molecules */}
                        <g fill="#10b981">
                          <circle cx="50" cy="38" r="3.5" />
                          <circle cx="90" cy="34" r="3.5" />
                          <circle cx="130" cy="37" r="3.5" />
                          <circle cx="170" cy="35" r="3.5" />
                          <circle cx="210" cy="39" r="3.5" />
                          <circle cx="250" cy="34" r="3.5" />
                        </g>
                        {/* Molecule movement arrows */}
                        <path d="M 50 52 L 50 44 M 90 52 L 90 40 M 130 52 L 130 43 M 170 52 L 170 41 M 210 52 L 210 45" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
                        <text x="150" y="20" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono uppercase tracking-wider">Fig 2.4: Sirolimus Ancillary Drug Elution</text>

                        {/* Annotations */}
                        <line x1="250" y1="34" x2="270" y2="15" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 1" />
                        <text x="275" y="15" fill="#a7f3d0" fontSize="6.5" className="font-mono">Ancillary Drug Molecules</text>
                      </svg>
                    </div>

                    <p className="text-[11.5px] text-slate-600 leading-relaxed space-y-2">
                      <span>
                        Special and Combination Devices are complex products that merge standard physical device architectures with secondary clinical elements like biological cells, chemical drug components, barriers, or sterilizers. Because their primary mechanism of action is mechanical, they are legally classified as medical devices rather than medicines, but they fall under intensive CDSCO Rules 13-16 due to potential biochemical cross-reactions.
                      </span>
                      <span className="block mt-1.5">
                        Combination products incorporating an <TermLink termId="ancillary_substance" onSelect={setActiveHelpTerm}>ancillary medicinal substance</TermLink> (which acts secondary to the device's physical function, such as Sirolimus coating on a cardiac <TermLink termId="stent" onSelect={setActiveHelpTerm}>stent</TermLink> or heparin coating on a dialysis <TermLink termId="catheter" onSelect={setActiveHelpTerm}>catheter</TermLink>) are classified as Class D. Devices manufactured utilizing <TermLink termId="bioburden" onSelect={setActiveHelpTerm}>animal or human non-viable tissue/cell derivatives</TermLink> (such as porcine heart valves, catgut biological sutures, or bovine collagen wound matrices) are also Class D due to animal-source <TermLink termId="bioburden" onSelect={setActiveHelpTerm}>pathogen transfer</TermLink> and immunogenic rejection risks. Contraceptives or sexually transmitted disease prevention devices are Class C for standard barriers (such as condoms or diaphragms) but escalate to Class D if they are long-term <TermLink termId="implantable" onSelect={setActiveHelpTerm}>implantable devices</TermLink> (such as copper intrauterine loops). Disinfectants and sterilization validation chemical markers are Class B for general cleaning, but Class C if specifically intended for disinfecting invasive instruments or contact lens care.
                      </span>
                    </p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px] text-slate-600">
                    <strong>CDSCO Examples:</strong> Drug-eluting coronary stents (Class D), porcine heart tissue valves (Class D), latex condoms (Class C), copper intrauterine contraceptive devices (Class D), autoclave steam indicators (Class C).
                  </div>
                </div>

              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setLessonTab(1)}
                  className="border border-slate-200 text-slate-600 text-xs font-bold py-2 px-5 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Back to Lesson 1
                </button>
                <button
                  type="button"
                  onClick={() => setLessonTab(3)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-5 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-indigo-100"
                >
                  Proceed to Lesson 3: The 3 Clinical Pillars <ChevronRight size={14} />
                </button>
              </div>

            </div>
          )}

          {/* PART 3: THE THREE CLINICAL PILLARS & THE COMPLIANT EXAMPLES TABLE (EXCLUDING STENT CORONARY) */}
          {lessonTab === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
                    <span className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
                      <Table size={16} />
                    </span>
                    Lesson 3: The Three Clinical Pillars
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    Before any medical device is engineered or manufactured, regulatory engineers and clinicians collaborate to draft three distinct legal boundaries called <strong>The Three Clinical Pillars</strong>. These definitions dictate the product's design inputs, clinical trial protocols, risk evaluation matrices, and labeling constraints under CDSCO MDR 2017. Clinical evaluation teams must compile real-world evidence (RWE) or clinical investigation data to legally prove and validate each of these distinct pillars before commercial authorization is permitted.
                  </p>
                </div>
                <div className="lg:col-span-4 flex">
                  <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-sm w-full h-full min-h-[140px] bg-slate-950 p-3 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-slate-950 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:10px_16px]"></div>
                    <svg viewBox="0 0 150 100" className="w-full h-20 relative z-10">
                      {/* 3 Intersecting Circles */}
                      {/* Circle 1: Intended Use (Blue) */}
                      <circle cx="55" cy="45" r="22" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.8" />
                      {/* Circle 2: Indications (Amber) */}
                      <circle cx="95" cy="45" r="22" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8" />
                      {/* Circle 3: Contraindications (Rose) */}
                      <circle cx="75" cy="65" r="22" fill="none" stroke="#f43f5e" strokeWidth="1.5" opacity="0.8" />
                      
                      {/* Labels */}
                      <text x="55" y="48" fill="#93c5fd" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-mono">USE</text>
                      <text x="95" y="48" fill="#fcd34d" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-mono">INDIC</text>
                      <text x="75" y="68" fill="#fca5a5" fontSize="5" fontWeight="bold" textAnchor="middle" className="font-mono">CONTRA</text>
                      
                      {/* Central intersection highlight */}
                      <circle cx="75" cy="51" r="2" fill="#10b981" />
                      <line x1="75" y1="51" x2="75" y2="15" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1.5 1" />
                      <text x="75" y="10" fill="#34d399" fontSize="6.5" fontWeight="extrabold" textAnchor="middle" className="font-mono uppercase tracking-widest">Fig 3.1: Cohesive Fit</text>
                    </svg>
                    <div className="border-t border-slate-900 pt-1">
                      <span className="text-[8px] font-mono text-emerald-400 font-extrabold block">CLINICAL BALANCE MODEL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Definitions panel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-blue-50/40 p-4 rounded-xl border border-blue-100 space-y-1.5">
                  <strong className="text-blue-900 block font-bold text-xs">1. Intended Use</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    What the medical device **physically, mechanically, or structurally does**. This is the objective physical mechanism of action.
                  </p>
                </div>
                <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-100 space-y-1.5">
                  <strong className="text-amber-900 block font-bold text-xs">2. Indications for Use</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    The specific **target disease condition, patient population**, or biological environment the device is intended to treat or manage.
                  </p>
                </div>
                <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-100 space-y-1.5">
                  <strong className="text-rose-900 block font-bold text-xs">3. Contraindications</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Specific clinical conditions or patient groups **under which the device must never be used** due to severe risk of patient injury or death.
                  </p>
                </div>
              </div>

              {/* Official Examples Table (Excluding Coronary Stent in Mod 1, as requested) */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pillars Comparison Matrix</h4>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3 border-r border-slate-800">Medical Device</th>
                        <th className="p-3 border-r border-slate-800">Intended Use (Mechanism)</th>
                        <th className="p-3 border-r border-slate-800">Indications for Use</th>
                        <th className="p-3">Contraindications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 font-bold border-r border-slate-100 bg-slate-50/30">🏥 Infusion Pump</td>
                        <td className="p-3 border-r border-slate-100 leading-normal text-[11px]">Mechanically infuses fluids, medications, or nutrients into a patient's circulatory system.</td>
                        <td className="p-3 border-r border-slate-100 leading-normal text-[11px]">Intravenous administration of critical medications (e.g. chemotherapy drugs, insulin) at controlled flow rates.</td>
                        <td className="p-3 leading-normal text-[11px]">Not to be used for fluids requiring high-viscosity manual pushes, or by untrained patients in a home environment.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 font-bold border-r border-slate-100 bg-slate-50/30">🌡️ Digital Thermometer</td>
                        <td className="p-3 border-r border-slate-100 leading-normal text-[11px]">Measures and displays body temperature via electronic heat sensors.</td>
                        <td className="p-3 border-r border-slate-100 leading-normal text-[11px]">Routine monitoring of axillary, oral, or rectal temperature in pediatric and adult patients.</td>
                        <td className="p-3 leading-normal text-[11px]">Do not use orally on unconscious patients or individuals prone to seizures.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs text-amber-900 flex items-start gap-2.5 mt-4">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block font-bold">⚠️ Regulatory Training Notice:</strong>
                    <p className="mt-0.5 leading-relaxed text-[11px]">
                      The <strong>Drug-Eluting Coronary Stent</strong> (a Class D Drug-Device Combination Product) is excluded from this general introductory table. Because of its permanent vascular contact and chemical drug elution (Sirolimus), its primary clinical pillars involve intensive pre-market animal and human clinical trials, which you will model and simulate in detail throughout subsequent Modules 2 to 6.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setLessonTab(2)}
                  className="border border-slate-200 text-slate-600 text-xs font-bold py-2 px-5 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Back to Lesson 2
                </button>
                <button
                  type="button"
                  onClick={() => setLessonTab(4)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-5 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-indigo-100"
                >
                  Proceed to Lesson 4: Risk Framework <ChevronRight size={14} />
                </button>
              </div>

            </div>
          )}

          {/* PART 4: THE RISK CLASSIFICATION PROCESS (CDSCO RULES, CLASSES, DURATION METRICS) */}
          {lessonTab === 4 && (
            <div className="space-y-8 animate-fade-in">
              
              {/* Introduction with Heatmap Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
                      <span className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
                        <ShieldCheck size={16} />
                      </span>
                      Lesson 4: CDSCO Statutory Classification Framework (MDR 2017)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      Under the Medical Device Rules (MDR) 2017, the Central Drugs Standard Control Organisation (CDSCO) regulates products via a structured, rule-based statutory framework. Device risk is not defined abstractly; rather, it is mathematically proportional to <strong>biological <TermLink termId="invasive" onSelect={setActiveHelpTerm}>invasiveness depth</TermLink></strong>, <strong><TermLink termId="active" onSelect={setActiveHelpTerm}>active energy exchange</TermLink></strong>, and <strong>duration of clinical contact</strong>.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      The framework comprises <strong>16 precise classification rules</strong> divided into four categories: Rules 1-4 (Non-Invasive), Rules 5-8 (<TermLink termId="invasive" onSelect={setActiveHelpTerm}>Invasive</TermLink>), Rules 9-12 (<TermLink termId="active" onSelect={setActiveHelpTerm}>Active</TermLink>), and Rules 13-16 (Special & <TermLink termId="ancillary_substance" onSelect={setActiveHelpTerm}>Combination</TermLink>). Applying these rules accurately assigns any medical device to one of four regulatory tiers: <strong>Class A (Low Risk)</strong>, <strong>Class B (Low-Moderate Risk)</strong>, <strong>Class C (Moderate-High Risk)</strong>, or <strong>Class D (High Risk)</strong>.
                    </p>
                  </div>
                  <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl">
                    <strong className="text-xs text-slate-800 font-bold block">⚖️ Rule 16 Statutory Rule Reference Guide:</strong>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">
                      Scroll down to search, filter, and audit the entire 16-Rule legal database. Understand the exact regulatory clauses, clinical risks, and product designations that govern CDSCO compliance.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-5 flex">
                  <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-sm w-full h-full min-h-[220px] bg-slate-950 p-4 flex flex-col justify-between">
                    <div className="absolute inset-0 bg-slate-950 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <svg viewBox="0 0 300 160" className="w-full h-36 relative z-10">
                      {/* Grid background */}
                      <rect x="50" y="20" width="230" height="110" fill="#020617" stroke="#1e293b" strokeWidth="1" />
                      
                      {/* Grid divisions */}
                      <line x1="126" y1="20" x2="126" y2="130" stroke="#1e293b" strokeWidth="1" />
                      <line x1="203" y1="20" x2="203" y2="130" stroke="#1e293b" strokeWidth="1" />
                      <line x1="50" y1="47" x2="280" y2="47" stroke="#1e293b" strokeWidth="1" />
                      <line x1="50" y1="75" x2="280" y2="75" stroke="#1e293b" strokeWidth="1" />
                      <line x1="50" y1="102" x2="280" y2="102" stroke="#1e293b" strokeWidth="1" />
                      
                      {/* Heatmap Blocks (Representing Classes) */}
                      {/* Row 1: Non-Invasive */}
                      <rect x="51" y="21" width="74" height="25" fill="#1e3a8a" opacity="0.3" />
                      <rect x="127" y="21" width="75" height="25" fill="#1e3a8a" opacity="0.5" />
                      <rect x="204" y="21" width="75" height="25" fill="#1e3a8a" opacity="0.7" />
                      <text x="88" y="36" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS A</text>
                      <text x="164" y="36" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS A/B</text>
                      <text x="241" y="36" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS B/C</text>

                      {/* Row 2: Orifice */}
                      <rect x="51" y="48" width="74" height="26" fill="#d97706" opacity="0.3" />
                      <rect x="127" y="48" width="75" height="26" fill="#d97706" opacity="0.5" />
                      <rect x="204" y="48" width="75" height="26" fill="#d97706" opacity="0.7" />
                      <text x="88" y="64" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS A</text>
                      <text x="164" y="64" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS B</text>
                      <text x="241" y="64" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS C</text>

                      {/* Row 3: Surgically Invasive */}
                      <rect x="51" y="76" width="74" height="25" fill="#dc2626" opacity="0.3" />
                      <rect x="127" y="76" width="75" height="25" fill="#dc2626" opacity="0.5" />
                      <rect x="204" y="76" width="75" height="25" fill="#dc2626" opacity="0.7" />
                      <text x="88" y="91" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS B</text>
                      <text x="164" y="91" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS B/C</text>
                      <text x="241" y="91" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS C/D</text>

                      {/* Row 4: Central Circulatory / CNS */}
                      <rect x="51" y="103" width="74" height="26" fill="#7f1d1d" opacity="0.4" />
                      <rect x="127" y="103" width="75" height="26" fill="#7f1d1d" opacity="0.6" />
                      <rect x="204" y="103" width="75" height="26" fill="#7f1d1d" opacity="0.9" />
                      <text x="88" y="119" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS C</text>
                      <text x="164" y="119" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono">CLASS D</text>
                      <text x="241" y="119" fill="#ef4444" fontSize="8" fontWeight="extrabold" textAnchor="middle" className="font-mono">CLASS D</text>

                      {/* Y-Axis labels */}
                      <text x="44" y="36" fill="#94a3b8" fontSize="6.5" textAnchor="end" className="font-mono">Surface</text>
                      <text x="44" y="64" fill="#94a3b8" fontSize="6.5" textAnchor="end" className="font-mono">Orifice</text>
                      <text x="44" y="91" fill="#94a3b8" fontSize="6.5" textAnchor="end" className="font-mono">Surgical</text>
                      <text x="44" y="119" fill="#94a3b8" fontSize="6.5" textAnchor="end" className="font-mono">Central</text>

                      {/* X-Axis labels */}
                      <text x="88" y="145" fill="#94a3b8" fontSize="7" textAnchor="middle" className="font-mono">Transient (&lt;24h)</text>
                      <text x="164" y="145" fill="#94a3b8" fontSize="7" textAnchor="middle" className="font-mono">Short-Term (1d-30d)</text>
                      <text x="241" y="145" fill="#94a3b8" fontSize="7" textAnchor="middle" className="font-mono">Chronic (&gt;30d)</text>
                      <text x="164" y="10" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle" className="font-mono uppercase tracking-wider">CDSCO RISK MAP MATRIX</text>
                    </svg>
                    <div className="border-t border-slate-800 pt-2 mt-2">
                      <span className="text-[9px] font-mono text-indigo-400 font-extrabold uppercase tracking-widest block">Fig 4.1: Risk Escalation Vectors</span>
                      <p className="text-slate-300 text-[10px] leading-relaxed mt-0.5 font-medium">
                        Increasing contact time coupled with deep internal surgical contact scales Class A (Low Risk) directly to Class D (Highest Systemic Risk).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The 4 Core Structural Columns of Risk */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">The 4 Diagnostic Vectors of Risk</h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-1">
                    <span className="font-mono text-indigo-600 font-extrabold text-[10px]">VECTOR 1</span>
                    <strong className="text-slate-800 block font-bold">Invasiveness Depth</strong>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Does it penetrate natural cavities or surgically breach deep skin dermis?</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-1">
                    <span className="font-mono text-indigo-600 font-extrabold text-[10px]">VECTOR 2</span>
                    <strong className="text-slate-800 block font-bold">Anatomical System</strong>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Does it contact the central nervous tissue or the central circulatory heart pathways?</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-1">
                    <span className="font-mono text-indigo-600 font-extrabold text-[10px]">VECTOR 3</span>
                    <strong className="text-slate-800 block font-bold">Active Energy Transfer</strong>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Does it rely on electrical lines, batteries, or electromagnetic energy conversion?</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-1">
                    <span className="font-mono text-indigo-600 font-extrabold text-[10px]">VECTOR 4</span>
                    <strong className="text-slate-800 block font-bold">Contact Duration</strong>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Is the therapeutic contact window transient (&lt;24h), short-term, or chronic (&gt;30d)?</p>
                  </div>
                </div>
              </div>

              {/* Contact Duration Metrics block */}
              <div className="bg-indigo-50/30 p-5 rounded-2xl border border-indigo-100 space-y-3">
                <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Contact Duration Metrics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white p-3 rounded-lg border border-slate-200/50">
                    <span className="text-[9px] bg-blue-100 text-blue-700 font-mono font-bold px-1.5 py-0.5 rounded uppercase">Transient</span>
                    <strong className="block text-slate-800 mt-1.5 font-bold">Continuous use &lt; 24 Hours</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Presents minimal systemic toxicity window (e.g. skin needles, temporary drapes).</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200/50">
                    <span className="text-[9px] bg-amber-100 text-amber-700 font-mono font-bold px-1.5 py-0.5 rounded uppercase">Short-Term</span>
                    <strong className="block text-slate-800 mt-1.5 font-bold">24 Hours to 30 Days</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Requires sensitization, localized irritation, and acute toxicity checks (e.g. urinary catheters).</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-slate-200/50">
                    <span className="text-[9px] bg-emerald-100 text-emerald-700 font-mono font-bold px-1.5 py-0.5 rounded uppercase">Long-Term / Implantable</span>
                    <strong className="block text-slate-800 mt-1.5 font-bold">Greater than 30 Days</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Requires extensive carcinogenicity, genotoxicity, and chronic clinical evaluation studies.</p>
                  </div>
                </div>
              </div>

              {/* Interactive CDSCO Statutory 16-Rule Directory */}
              <div className="border border-indigo-100 bg-white rounded-2xl p-5 space-y-4 shadow-sm">
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">Official CDSCO Statutory Directory</span>
                  <h4 className="text-base font-extrabold text-slate-800">The Complete CDSCO 16-Rule Reference Guide</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Explore and search the complete roster of statutory rules specified under the CDSCO Medical Device Rules (MDR) 2017. Type any device name or rule keyword to instantly query the framework.
                  </p>
                </div>

                {/* Filter and Search Bar Container */}
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                      <Search size={14} />
                    </span>
                    <input 
                      type="text"
                      placeholder="Search rules by title, clause keyword, or device name (e.g. stencil, condom, syringe)..."
                      value={ruleSearch}
                      onChange={(e) => setRuleSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:outline-none transition-all"
                    />
                    {ruleSearch && (
                      <button 
                        onClick={() => setRuleSearch('')} 
                        className="absolute inset-y-0 right-3 flex items-center text-[10px] text-slate-400 hover:text-indigo-600 font-semibold"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Category select tabs */}
                  <div className="flex gap-1 overflow-x-auto pb-1 md:pb-0 select-none">
                    {(['all', 'non_invasive', 'invasive', 'active', 'special'] as const).map(cat => {
                      const counts = CDSCO_RULES_DATA.filter(r => cat === 'all' || r.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setRuleCategory(cat);
                            setExpandedRule(null);
                          }}
                          className={`px-3 py-1.5 text-[10.5px] font-bold rounded-lg transition-all flex items-center gap-1 flex-shrink-0 ${
                            ruleCategory === cat
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'bg-slate-50 text-slate-500 border border-slate-200/50 hover:bg-slate-100'
                          }`}
                        >
                          <span className="capitalize">{cat.replace('_', ' ')}</span>
                          <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                            ruleCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                          }`}>{counts}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Filtered Rules Output */}
                {(() => {
                  const filteredRules = CDSCO_RULES_DATA.filter(rule => {
                    const matchesSearch = rule.title.toLowerCase().includes(ruleSearch.toLowerCase()) || 
                                          rule.clause.toLowerCase().includes(ruleSearch.toLowerCase()) || 
                                          rule.examples.some(ex => ex.toLowerCase().includes(ruleSearch.toLowerCase())) ||
                                          rule.ruleNum.toLowerCase().includes(ruleSearch.toLowerCase());
                    const matchesCategory = ruleCategory === 'all' || rule.category === ruleCategory;
                    return matchesSearch && matchesCategory;
                  });

                  if (filteredRules.length === 0) {
                    return (
                      <div className="p-8 text-center bg-slate-50 border border-dashed border-slate-200 rounded-xl space-y-2">
                        <AlertCircle size={24} className="text-slate-400 mx-auto" />
                        <h5 className="text-xs font-bold text-slate-700">No matching statutory rules found</h5>
                        <p className="text-[10px] text-slate-500 max-w-md mx-auto">
                          We couldn't find any rules matching "{ruleSearch}". Try checking your spelling or adjusting your category filter pills.
                        </p>
                      </div>
                    );
                  }

                  return (
                    <div className="space-y-2">
                      {filteredRules.map(rule => {
                        const isExpanded = expandedRule === rule.id;
                        const classColors: Record<string, string> = {
                          'Class A': 'bg-emerald-50 text-emerald-800 border-emerald-200',
                          'Class B': 'bg-blue-50 text-blue-800 border-blue-200',
                          'Class C': 'bg-amber-50 text-amber-800 border-amber-200',
                          'Class D': 'bg-rose-50 text-rose-800 border-rose-200',
                          'Class A / B / C': 'bg-indigo-50 text-indigo-800 border-indigo-200',
                          'Class B / C': 'bg-amber-50 text-amber-800 border-amber-200',
                          'Class B / C / D': 'bg-rose-50 text-rose-800 border-rose-200',
                          'Class C / D': 'bg-rose-50 text-rose-800 border-rose-200',
                          'Class A / D': 'bg-rose-50 text-rose-800 border-rose-200'
                        };

                        return (
                          <div 
                            key={rule.id}
                            className={`border rounded-xl transition-all overflow-hidden ${
                              isExpanded 
                                ? 'border-indigo-400 bg-indigo-50/10 shadow-sm' 
                                : 'border-slate-100 hover:border-slate-300 bg-white'
                            }`}
                          >
                            {/* Accordion Header */}
                            <button
                              type="button"
                              onClick={() => setExpandedRule(isExpanded ? null : rule.id)}
                              className="w-full text-left p-3.5 flex justify-between items-center gap-3 hover:bg-slate-50/50 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                                  rule.category === 'non_invasive' ? 'bg-blue-100 text-blue-800' :
                                  rule.category === 'invasive' ? 'bg-amber-100 text-amber-800' :
                                  rule.category === 'active' ? 'bg-rose-100 text-rose-800' :
                                  'bg-emerald-100 text-emerald-800'
                                }`}>
                                  {rule.ruleNum}
                                </span>
                                <strong className="text-xs font-extrabold text-slate-800 truncate block">
                                  {rule.title}
                                </strong>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className={`text-[10px] font-extrabold px-2 py-0.5 border rounded-full ${
                                  classColors[rule.classLetter] || 'bg-slate-100 text-slate-800 border-slate-200'
                                }`}>
                                  {rule.classLetter}
                                </span>
                                {isExpanded ? <ChevronUp size={14} className="text-slate-400" /> : <ChevronDown size={14} className="text-slate-400" />}
                              </div>
                            </button>

                            {/* Accordion Body */}
                            {isExpanded && (
                              <div className="p-4 border-t border-indigo-100/50 bg-indigo-50/5 space-y-3 text-xs leading-relaxed animate-fade-in">
                                <div>
                                  <span className="text-[10px] font-bold text-indigo-900 block uppercase tracking-wide">CDSCO Statutory Directive:</span>
                                  <p className="text-slate-700 mt-1 font-medium leading-relaxed bg-white p-3 rounded-lg border border-indigo-100/30 shadow-inner">
                                    <ParsedText text={rule.clause} onSelect={setActiveHelpTerm} />
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                                  {/* Examples column */}
                                  <div className="space-y-1.5">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Representative Examples:</span>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 space-y-1">
                                      {rule.examples.map((item, i) => (
                                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                          <CheckCircle2 size={11} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                                          <span><ParsedText text={item} onSelect={setActiveHelpTerm} /></span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Risks Column */}
                                  <div className="space-y-1.5">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Key Biomedical & Clinical Risks:</span>
                                    <div className="bg-white p-3 rounded-lg border border-slate-100 space-y-1">
                                      {rule.clinicalRisks.map((item, i) => (
                                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                                          <ShieldAlert size={11} className="text-rose-500 mt-0.5 flex-shrink-0" />
                                          <span>{item}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>

              {/* Indian CDSCO vs Global Risk Class Matrix */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">The Risk Class Alignment Matrix (CDSCO vs. Global)</h4>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3 border-r border-slate-800">Indian CDSCO MDR 2017</th>
                        <th className="p-3 border-r border-slate-800">US FDA equivalent</th>
                        <th className="p-3 border-r border-slate-800">EU MDR Class</th>
                        <th className="p-3">Compliance Pathway Requirements</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-3 font-bold border-r border-slate-100 bg-emerald-50/20 text-emerald-800">Class A (Low Risk)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class I (General Controls / Exempt)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class I (Self-Declared compliance)</td>
                        <td className="p-3 text-[11px] leading-normal">Online portal registration (Sugam) for automatic manufacture/import clearance. Self-declaration.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border-r border-slate-100 bg-blue-50/20 text-blue-800">Class B (Low-Moderate)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class II (510k substantial equivalence)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class IIa (Notified Body audit)</td>
                        <td className="p-3 text-[11px] leading-normal">On-site audit of cleanroom facilities by State-empowered Notified Bodies. Form MD-5 Domestic License.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border-r border-slate-100 bg-amber-50/20 text-amber-800">Class C (Moderate-High)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class II (510k Premarket clearance)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class IIb (NB technical file audit)</td>
                        <td className="p-3 text-[11px] leading-normal">Full Central CDSCO auditing team cleanroom checks. Review of functional bench testing. Form MD-9.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold border-r border-slate-100 bg-red-50/20 text-red-800">Class D (Highest Risk)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class III (PMA Premarket Approval)</td>
                        <td className="p-3 border-r border-slate-100 text-[11px]">Class III (NB Complete design check)</td>
                        <td className="p-3 text-[11px] leading-normal">Direct technical panel review by CDSCO expert committees (SEC). Mandatory human clinical trial registry.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setLessonTab(3)}
                  className="border border-slate-200 text-slate-600 text-xs font-bold py-2 px-5 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Back to Lesson 3
                </button>
                <button
                  type="button"
                  onClick={() => setLessonTab(5)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-5 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-indigo-100"
                >
                  Proceed to Lesson 5 Quiz <ChevronRight size={14} />
                </button>
              </div>

            </div>
          )}

          {/* PART 5: THE KNOWLEDGE CHECK QUIZ */}
          {lessonTab === 5 && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="border-b border-slate-200 pb-2 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                      <Award size={14} className="text-indigo-600" />
                      🎓 Compliance Academy Lesson 5: Checkpoint
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Test your regulatory intuition with these simple case studies.</p>
                  </div>
                  {quizSubmitted && (
                    <button
                      type="button"
                      onClick={handleResetQuiz}
                      className="text-[10px] text-indigo-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <RefreshCw size={10} /> Reset Quiz
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {quizQuestions.map((q, idx) => (
                    <div key={q.id} className="bg-white p-3.5 rounded-xl border border-slate-200/60 space-y-2">
                      <span className="text-[10px] bg-slate-100 text-slate-600 font-mono font-bold px-1.5 py-0.5 rounded">
                        Case Study #{idx + 1}
                      </span>
                      <p className="text-[11px] font-bold text-slate-800">{q.device}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {q.options.map((opt) => {
                          const isSelected = quizAnswers[q.id] === opt.key;
                          const showCorrect = quizSubmitted && opt.key === q.correct;
                          const showIncorrect = quizSubmitted && isSelected && opt.key !== q.correct;

                          return (
                            <button
                              key={opt.key}
                              type="button"
                              disabled={quizSubmitted}
                              onClick={() => setQuizAnswers(prev => ({ ...prev, [q.id]: opt.key }))}
                              className={`p-2.5 text-left text-[10.5px] rounded-lg border transition-all ${
                                showCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                  : showIncorrect
                                  ? 'bg-rose-50 border-rose-300 text-rose-900 line-through'
                                  : isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-sm'
                                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              {opt.text}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <p className="text-[10px] bg-slate-50 p-2 rounded-lg border border-slate-100 text-slate-500 leading-normal">
                          <span className="font-bold text-slate-700">Rationale: </span>
                          {q.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {!quizSubmitted ? (
                  <button
                    type="button"
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                    className={`w-full text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 ${
                      Object.keys(quizAnswers).length < quizQuestions.length
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                    }`}
                  >
                    Submit Quiz & Grade Answers
                  </button>
                ) : (
                  <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-indigo-900 font-bold block uppercase">Quiz Complete!</span>
                      <strong className="text-xs text-indigo-950 font-extrabold">Your Score: {quizScore} / {quizQuestions.length} Correct</strong>
                    </div>
                    <button
                      onClick={() => {
                        setSubMode('classifier');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-sm flex items-center gap-1"
                    >
                      Enter CDSCO Classifier <ArrowRight size={12} />
                    </button>
                  </div>
                )}
              </div>

              {/* Back to Lesson 4 */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setLessonTab(4)}
                  className="border border-slate-200 text-slate-600 text-xs font-bold py-2 px-5 rounded-xl hover:bg-slate-50 transition-all"
                >
                  Back to Lesson 4
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubMode('classifier');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 px-5 rounded-xl transition-all flex items-center gap-1 shadow-md shadow-indigo-100"
                >
                  Open Live Classifier <ArrowRight size={14} />
                </button>
              </div>

            </div>
          )}

        </div>
      )}

      {/* CDSCO LIVE RULES-BASED CLASSIFIER SIMULATOR */}
      {(subMode === 'classifier' || isSecondModuleMode) && (
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Interactive Selection Panel */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1 */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">
                  Step 1: Select Applicable Device Type
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'non_invasive', label: 'Non-Invasive', desc: 'Rules 1-4' },
                    { id: 'invasive', label: 'Invasive', desc: 'Rules 5-8' },
                    { id: 'active', label: 'Active', desc: 'Rules 9-12' },
                    { id: 'special', label: 'Special Cat.', desc: 'Rules 13-16' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      disabled={isSecondModuleMode}
                      onClick={() => {
                        setDeviceCategory(cat.id as any);
                        if (cat.id === 'special') {
                          setIsContraceptive(true);
                        } else {
                          setIsContraceptive(false);
                        }
                      }}
                      className={`p-3 text-center rounded-xl border transition-all flex flex-col justify-center items-center ${
                        deviceCategory === cat.id
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm font-bold'
                          : isSecondModuleMode
                          ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="text-xs">{cat.label}</span>
                      <span className={`text-[9px] mt-0.5 opacity-80 ${deviceCategory === cat.id ? 'text-white' : 'text-slate-400'}`}>
                        {cat.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Conditional Attributes Forms based on selected category */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4">
                <span className="text-[10px] font-bold text-slate-400 block tracking-wider uppercase">
                  Step 2: Define Device Attributes
                </span>

                {/* TAB: Non-Invasive */}
                {deviceCategory === 'non_invasive' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 block">Sub-Category Selection:</label>
                      <div className="space-y-2">
                        {[
                          { id: 'r1_general', title: 'Rule 1: General Surface Contact', desc: 'Device touch intact skin or functions as general patient support with no active components.' },
                          { id: 'r2_channeling', title: 'Rule 2: Storage or Channeling', desc: 'Channels/stores blood, tissues, liquids or gases for administrative infusion.' },
                          { id: 'r3_filtration', title: 'Rule 3: composition Modification', desc: 'Filters, centrifuges, or modifies biological/chemical composition of blood or fluids.' },
                          { id: 'r4_skin_barrier', title: 'Rule 4: Breached Skin Cover', desc: 'Directly contacts wounded skin surface, absorbing drainage exudates or managing tissues.' }
                        ].map(item => (
                          <label key={item.id} className="flex items-start gap-3 p-2.5 bg-white rounded-xl border border-slate-200/60 cursor-pointer hover:bg-indigo-50/20 transition-colors">
                            <input
                              type="radio"
                              name="ni_sub"
                              value={item.id}
                              checked={niSub === item.id}
                              onChange={() => setNiSub(item.id)}
                              className="mt-1 text-indigo-600"
                            />
                            <div className="text-xs">
                              <strong className="text-slate-800 font-bold block">{item.title}</strong>
                              <span className="text-slate-500 text-[10px] leading-relaxed block mt-0.5">{item.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB: Invasive */}
                {deviceCategory === 'invasive' && (
                  <div className="space-y-4">
                    {/* Invasive Mechanism Toggle */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          Invasive Entry Method
                        </label>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveHelpTerm('invasive')}
                            className="text-[10px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
                          >
                            <HelpCircle size={11} /> What is Invasive?
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          disabled={isSecondModuleMode}
                          onClick={() => setInvType('orifice')}
                          className={`p-2.5 text-xs rounded-xl border font-semibold ${
                            invType === 'orifice'
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : isSecondModuleMode
                              ? 'bg-slate-100 border-slate-200 text-slate-400'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          Natural Body Orifice
                        </button>
                        <button
                          type="button"
                          disabled={isSecondModuleMode}
                          onClick={() => setInvType('surgically_long')}
                          className={`p-2.5 text-xs rounded-xl border font-semibold ${
                            invType === 'surgically_long'
                              ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                              : isSecondModuleMode
                              ? 'bg-slate-100 border-slate-200 text-slate-400'
                              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          Surgically Invasive
                        </button>
                      </div>
                    </div>

                    {/* Duration select */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200/50">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-slate-700">Cumulative Contact Duration</label>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveHelpTerm('transient')}
                            className="text-[10px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
                          >
                            <HelpCircle size={11} /> Transient
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveHelpTerm('short_term')}
                            className="text-[10px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
                          >
                            <HelpCircle size={11} /> Short-term
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveHelpTerm('long_term')}
                            className="text-[10px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
                          >
                            <HelpCircle size={11} /> Long-term
                          </button>
                        </div>
                      </div>
                      <select
                        disabled={isSecondModuleMode}
                        value={invDuration}
                        onChange={(e) => setInvDuration(e.target.value)}
                        className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-white outline-none font-medium"
                      >
                        <option value="transient">Transient (Continuous use &lt; 60 Minutes)</option>
                        <option value="short_term">Short Term (Continuous use &gt; 60 mins up to 30 Days)</option>
                        <option value="long_term">Long Term / Implantable (Continuous use &gt; 30 Days)</option>
                      </select>
                    </div>

                    {/* Anatomical Contact site */}
                    {invType === 'surgically_long' && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-200/50">
                        <label className="text-xs font-bold text-slate-700 block">Critical Anatomical Contact Site</label>
                        <select
                          disabled={isSecondModuleMode}
                           value={invContact}
                           onChange={(e) => setInvContact(e.target.value)}
                           className="w-full text-xs border border-slate-200 rounded-lg p-2 bg-white outline-none font-medium"
                        >
                           <option value="circulatory">Direct Heart / Central Circulatory System</option>
                           <option value="nervous">Central Nervous System (Brain/Spine)</option>
                           <option value="other_tissue">Other General Internal Tissues / Organs / Bones</option>
                        </select>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB: Active */}
                {deviceCategory === 'active' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-xs font-bold text-slate-700 block">Active Device Functionality:</label>
                        <button
                          type="button"
                          onClick={() => setActiveHelpTerm('active')}
                          className="text-[10px] text-indigo-600 font-bold flex items-center gap-0.5 hover:underline"
                        >
                          <HelpCircle size={11} /> Active Definition
                        </button>
                      </div>
                      <div className="space-y-2">
                        {[
                          { id: 'therapeutic', title: 'Rule 9: Active Therapeutic Energy Exchange', desc: 'Device administers or exchanges electrical, thermal, or radiation energy to the patient.' },
                          { id: 'diagnostic', title: 'Rule 10: Active Diagnostic Imaging & Telemetry', desc: 'Sensing vital signs, capturing images, or transmitting bio-telemetry.' },
                          { id: 'administer', title: 'Rule 11: Active Drug Administration/Removal', desc: 'Pumps, injectors, or vaporizers that deliver/remove active chemical compounds.' },
                          { id: 'other', title: 'Rule 12: Other Active Electrical Systems', desc: 'Active systems not directly matching diagnostic or therapeutic definitions (e.g. general controllers).' }
                        ].map(item => (
                          <label key={item.id} className="flex items-start gap-3 p-2.5 bg-white rounded-xl border border-slate-200/60 cursor-pointer hover:bg-indigo-50/20 transition-colors">
                            <input
                              type="radio"
                              name="act_type"
                              value={item.id}
                              checked={actType === item.id}
                              onChange={() => setActType(item.id)}
                              className="mt-1 text-indigo-600"
                            />
                            <div className="text-xs">
                              <strong className="text-slate-800 font-bold block">{item.title}</strong>
                              <span className="text-slate-500 text-[10px] leading-relaxed block mt-0.5">{item.desc}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB: Special */}
                {deviceCategory === 'special' && (
                  <div className="space-y-4">
                    <span className="text-[10px] text-indigo-900 font-bold block uppercase">Rule 13-16 Override Options</span>
                    
                    <div className="space-y-3">
                      <label className="flex items-start gap-2.5 cursor-pointer p-2 bg-white rounded-xl border border-slate-200/60">
                        <input
                          type="checkbox"
                          checked={hasDrug}
                          onChange={(e) => {
                            setHasDrug(e.target.checked);
                            if (e.target.checked) setHasTissue(false);
                          }}
                          className="mt-1 text-indigo-600"
                        />
                        <div className="text-xs">
                          <strong className="text-slate-800 block font-bold text-[11px]">Rule 13: Incorporates Ancillary Medicinal Drug?</strong>
                          <span className="text-slate-400 text-[10px] block mt-0.5">Incorporates a drug layer (e.g. drug coating on scaffold) to aid physical function.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer p-2 bg-white rounded-xl border border-slate-200/60">
                        <input
                          type="checkbox"
                          checked={hasTissue}
                          onChange={(e) => {
                            setHasTissue(e.target.checked);
                            if (e.target.checked) setHasDrug(false);
                          }}
                          className="mt-1 text-indigo-600"
                        />
                        <div className="text-xs">
                          <strong className="text-slate-800 block font-bold text-[11px]">Rule 14: Animal / Human Tissue cells derivative?</strong>
                          <span className="text-slate-400 text-[10px] block mt-0.5">Manufactured utilizing biological non-viable cellular structures.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer p-2 bg-white rounded-xl border border-slate-200/60">
                        <input
                          type="checkbox"
                          checked={isContraceptive}
                          onChange={(e) => setIsContraceptive(e.target.checked)}
                          className="mt-1 text-indigo-600"
                        />
                        <div className="text-xs">
                          <strong className="text-slate-800 block font-bold text-[11px]">Rule 16: Contraceptive or Disinfectant application?</strong>
                          <span className="text-slate-400 text-[10px] block mt-0.5">Specific safety overrides applying to chemical barriers or microbicidal cleaners.</span>
                        </div>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Action row */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={triggerReset}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-colors flex items-center gap-1"
                >
                  <RefreshCw size={12} /> Reset Values
                </button>
                <button
                  type="button"
                  onClick={handleCommitClass}
                  className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-indigo-100 transition-colors text-center"
                >
                  ✓ Lock Output & Save Milestone
                </button>
              </div>

            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-5 bg-indigo-950 text-white p-5 rounded-2xl border border-indigo-900/60 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-indigo-900 pb-2">
                  <span className="text-[10px] text-indigo-300 font-mono tracking-widest uppercase font-bold">Regulatory Result</span>
                  <Activity size={16} className="text-indigo-400 animate-pulse" />
                </div>

                <div className="text-center p-4 bg-indigo-900/30 rounded-2xl border border-indigo-900/50 space-y-1">
                  <span className="text-[10px] text-indigo-300 uppercase font-bold block tracking-wider">CDSCO RISK CLASS</span>
                  <span className="text-4xl font-black text-white block font-mono">
                    Class {currentResult.classLetter}
                  </span>
                  <span className="text-[10.5px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full inline-block mt-1 font-semibold">
                    {currentResult.details}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-indigo-900/10 p-3 rounded-xl border border-indigo-900/40 text-xs">
                    <span className="text-[10px] text-indigo-300 uppercase font-mono font-bold block">Assigned Rule Code:</span>
                    <strong className="text-white block font-semibold mt-0.5">{currentResult.ruleNum}</strong>
                  </div>

                  <div className="bg-indigo-900/10 p-3 rounded-xl border border-indigo-900/40 text-xs">
                    <span className="text-[10px] text-indigo-300 uppercase font-mono font-bold block">CDSCO Compliance Rationale:</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed mt-1 font-medium">
                      {currentResult.rationale}
                    </p>
                  </div>

                  <div className="bg-indigo-900/10 p-3 rounded-xl border border-indigo-900/40 text-xs">
                    <span className="text-[10px] text-indigo-300 uppercase font-mono font-bold block">CDSCO Audit Gate Requirements:</span>
                    <ul className="text-slate-300 text-[11px] list-disc pl-4 space-y-1 mt-1 font-medium">
                      {currentResult.classLetter === 'A' && (
                        <>
                          <li>Exempt from direct CDSCO file reviews</li>
                          <li>Register on Sugam portal for automatic MD-3 number</li>
                          <li>Basic GMP self-declaration needed</li>
                        </>
                      )}
                      {currentResult.classLetter === 'B' && (
                        <>
                          <li>Audit of production rooms by Notified Body</li>
                          <li>Review by State Licensing Authority (SLA)</li>
                          <li>Requires Form MD-5 Domestic Manufacturing License</li>
                        </>
                      )}
                      {currentResult.classLetter === 'C' && (
                        <>
                          <li>Subject to central CDSCO audit teams</li>
                          <li>Clinical safety trial results review required</li>
                          <li>Requires Central CLA Form MD-9 approval</li>
                        </>
                      )}
                      {currentResult.classLetter === 'D' && (
                        <>
                          <li>Direct panel review by CDSCO expert committees</li>
                          <li>Mandatory animal & human trials unless clinically exempt</li>
                          <li>Central SLA Form MD-9 sign-off for release</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Glossary Sync Engine Integration */}
                {syncTerm && (
                  <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-4.5 space-y-3.5 transition-all animate-fade-in">
                    <div className="flex justify-between items-center border-b border-indigo-900/50 pb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] text-emerald-400 font-extrabold uppercase font-mono tracking-widest">
                          Academy Sync Active
                        </span>
                      </div>
                      <span className="text-[9.5px] text-indigo-400 font-mono font-bold uppercase tracking-wider">
                        {syncTerm.category}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-black text-white uppercase tracking-wide">
                        {syncTerm.name}
                      </h4>
                      <p className="text-slate-300 text-[11px] leading-relaxed font-medium">
                        {syncTerm.definition}
                      </p>
                    </div>

                    {/* Inline micro-schematic diagram */}
                    <div className="rounded-xl overflow-hidden border border-indigo-900/80 bg-slate-950/40 p-1">
                      {syncTerm.renderDiagram()}
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[9.5px] text-indigo-300 font-bold uppercase tracking-wider block">
                        CDSCO Real-World Examples:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {syncTerm.examples.map((ex, idx) => (
                          <span 
                            key={idx} 
                            className="text-[9.5px] px-2 py-0.5 bg-indigo-950/80 border border-indigo-800/40 text-slate-200 rounded font-bold font-mono tracking-tight"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-indigo-900/20 border border-indigo-900/40 rounded-xl text-[10.5px] text-indigo-300 leading-normal flex items-start gap-2">
                <Info size={14} className="mt-0.5 flex-shrink-0 text-indigo-400" />
                <p>
                  Changing attributes on the left panel updates this CDSCO compliance pathway dynamically.
                </p>
              </div>

            </div>

          </div>

          {/* SECTION B: COMPREHENSIVE STAGE-GATE LIFECYCLE EXPLORER (AFTER CLASSIFICATION) */}
          <div className="space-y-4 pt-10 border-t border-slate-100 mt-10">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-[10px] bg-blue-50 text-blue-600 font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-blue-500/10">
                Course Milestone: After Classification
              </span>
              <h3 className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5 mt-2">
                <Layers size={16} className="text-indigo-600" />
                Comprehensive Stage-Gate Product Lifecycle Explorer
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">
                Once a device risk classification is locked, it enters the official stage-gate engineering lifecycle. Below, study the exact simulated lifecycle of our <strong>Coronary Stent Case Study (ForgeFlow DES)</strong> across all seven phases:
              </p>
            </div>

            {/* Horizontal Timeline Steps */}
            <div className="grid grid-cols-2 md:grid-cols-7 gap-1.5">
              {[
                { short: 'Phase 1', name: 'Concept & Class' },
                { short: 'Phase 2', name: 'Design Inputs' },
                { short: 'Phase 3', name: 'Design Outputs' },
                { short: 'Phase 4', name: 'Verification' },
                { short: 'Phase 5', name: 'Transfer' },
                { short: 'Phase 6', name: 'Clearance' },
                { short: 'Phase 7', name: 'PMS active' },
              ].map((step, idx) => {
                const isActive = activeTimelineStage === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTimelineStage(idx)}
                    className={`p-2.5 text-center rounded-xl border text-[11px] transition-all ${
                      isActive
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block font-mono text-[9px] opacity-70">{step.short}</span>
                    <span className="block truncate mt-0.5">{step.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Timeline Stage Workspace detail */}
            {(() => {
              const stagesData = [
                {
                  title: 'Phase 1: Concept, Intended Use, and Classification Gate (ForgeFlow Case Study)',
                  purpose: 'Establish the clinical necessity of physical arterial scaffolding (L605 Cobalt-Chromium) and combine it with a slow chemical drug-elution profile (Sirolimus) to prevent plaque restenosis. Lock risk as CDSCO Class D.',
                  outputs: [
                    'Intended Use: Scaffolding stenosed coronary arteries mechanically.',
                    'Indications: Ischemic heart disease in adults with coronary stenosis.',
                    'Contraindications: Known hypersensitivity to Everolimus/Sirolimus drug coatings.',
                    'Preliminary Hazard Analysis (PHA) for vascular thrombosis.'
                  ],
                  criticalKnowledge: 'The classification establishes the level of clinical testing required. Since it contains an active pharmaceutical ingredient, it triggers Class D / Class III pre-market clinical investigations rather than a standard 510(k) file clearance.'
                },
                {
                  title: 'Phase 2: Design Input Formulation (Translating Surgeon Needs to Specs)',
                  purpose: 'Translate physician user requirements ("Must easily track and steer through calcified vascular lesions") into quantitative, testable engineering specifications.',
                  outputs: [
                    'The stent delivery balloon expansion pressure must sustain 16.0 atmospheres.',
                    'The catheter profile at the crossing tip shall be < 1.02 mm for narrow bypass.',
                    'The drug coating layer thickness must be uniformly 4.0 μm ± 0.5 μm.',
                    'Catheter trackability force through standard tortuous pathways must be < 1.5 Newtons.'
                  ],
                  criticalKnowledge: 'Design inputs must be written clearly with rigid numeric limits. Soft terms like "extremely flexible catheter" are illegal under ISO 13485 audits and will trigger immediate failure during regulatory dossier review.'
                },
                {
                  title: 'Phase 3: Design Output Realization (The Blueprint & Recipe Book)',
                  purpose: 'Document the exact engineering drawings, materials science recipes, and cleanroom standard operating procedures (SOPs) required to replicate the physical combination implant.',
                  outputs: [
                    'L605 Cobalt-Chromium laser cutting parameters CAD drawing.',
                    'Sirolimus-to-polymer solution chemical mixing ratio formula.',
                    'Device Bill of Materials (BOM) including biodegradable PLGA plasticizers.',
                    'Instructions for Use (IFU) warning clinicians about stent expansion speeds.'
                  ],
                  criticalKnowledge: 'All design outputs must map directly back to design inputs. Outputs form the foundation of the Device Master Record (DMR) - which represents the legal "recipe book" for production cleanrooms.'
                },
                {
                  title: 'Phase 4: Design Verification & Validation Testing (Exhaustive Testing Gate)',
                  purpose: 'Prove mechanically and biologically that we designed the device right (Verification) and built the right device to cure coronary blockages (Validation).',
                  outputs: [
                    'Mechanical fatigue reports showing struts withstand 400M radial cycles.',
                    'ISO 10993-4 Hemocompatibility assays proving no red blood cell destruction.',
                    'In-vivo GLP Porcine animal artery studies to track Sirolimus elution rate.',
                    'Human target lesion failure (TLF) clinical registries over 12 months.'
                  ],
                  criticalKnowledge: 'Verification asks "Did we make the device right?" (bench testing vs inputs). Validation asks "Did we make the right device?" (human clinical trials vs the clinical user needs).'
                },
                {
                  title: 'Phase 5: Design Transfer & Cleanroom Process Validation (IQ/OQ/PQ)',
                  purpose: 'Formally transfer laboratory prototypes into large-scale commercial production cleanrooms. Run extensive validation on lines that cannot be 100% verified non-destructively.',
                  outputs: [
                    'Ultrasonic nozzle drug spraying calibration logs.',
                    'Installation Qualification (IQ) of physical laser cutting jigs.',
                    'Operational Qualification (OQ) of catheter crimping machines.',
                    'Performance Qualification (PQ) verifying coating thickness repeatability.'
                  ],
                  criticalKnowledge: 'Process validation is mandated under FDA 21 CFR Part 820.75 for any step that cannot be fully inspected without breaking the stent (e.g. testing sterile packaging integrity, sterilization, coating adhesion).'
                },
                {
                  title: 'Phase 6: Regulatory Dossier Submission & Global Marketing Authorizations',
                  purpose: 'Compile and submit formal regulatory technical documentation to national licensing bodies to obtain marketing clearance.',
                  outputs: [
                    'Indian CDSCO Sugam portal Form MD-14 for foreign registration.',
                    'Form MD-7 Domestic Manufacturing License registration dossier.',
                    'EU MDR Annex II/III technical file for CE mark clearance.',
                    'FDA PMA (Premarket Approval) dossier including clinical registry data.'
                  ],
                  criticalKnowledge: 'For Class D combination products, Notified Bodies and CDSCO Central Inspectors conduct physical cleanroom facility audits, design history reviews, and thorough inspections of clinical trial results.'
                },
                {
                  title: 'Phase 7: Active Post-Market Clinical Surveillance (PMS) Safety Net',
                  purpose: 'Monitor the clinical performance and patient safety of the stent once it is actively being deployed by cardiologists in real-world hospitals.',
                  outputs: [
                    'Periodic Safety Update Report (PSUR) reflecting patient registries.',
                    'Immediate customer complaint triage logs.',
                    'Field Safety Corrective Action (FSCA) protocols for catheter malfunctions.',
                    'Post-Market Clinical Follow-up (PMCF) registries of target lesion failures.'
                  ],
                  criticalKnowledge: 'PMS is a continuous feedback loop. If a cardiologist reports a catheter tip breakage in a clinic, the incident must immediately trigger a risk evaluation under ISO 14971, which might lead to a design change.'
                }
              ];
              const activeStage = stagesData[activeTimelineStage];
              return (
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-4 text-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] bg-slate-900 text-white font-bold py-1 px-2.5 rounded font-mono uppercase tracking-wider">
                      {activeStage.title}
                    </span>
                    <span className="text-[10px] text-indigo-600 font-bold font-mono">
                      Phase {activeTimelineStage + 1} of 7
                    </span>
                  </div>
                  
                  <div>
                    <strong className="text-slate-800 font-bold block mb-1">Simulated Journey Step Purpose:</strong>
                    <p className="text-slate-600 leading-normal text-[11.5px]">{activeStage.purpose}</p>
                  </div>

                  <div>
                    <strong className="text-slate-800 font-bold block mb-1.5">Primary Phase Deliverables (QMS Artifacts):</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeStage.outputs.map((out, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-xl border border-slate-200/50 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-1.5"></span>
                          <span className="text-[11px] text-slate-700 font-medium leading-relaxed">{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3.5 rounded-r-xl mt-2">
                    <strong className="text-indigo-950 font-bold block mb-1">Academy Instructor Insight:</strong>
                    <p className="text-indigo-900 text-[11px] leading-relaxed italic">{activeStage.criticalKnowledge}</p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Regulatory glossary overlay modals */}
      {activeHelpTerm && (
        <RegulatoryTermsPopup
          termId={activeHelpTerm}
          onClose={() => setActiveHelpTerm(null)}
        />
      )}

    </div>
  );
}
