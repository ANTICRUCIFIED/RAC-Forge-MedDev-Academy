import React, { useState } from 'react';
import { 
  ScrollText, 
  Settings, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  Award, 
  Heart, 
  AlertTriangle, 
  Info,
  Layers,
  Activity,
  Zap,
  Radio,
  FileSpreadsheet,
  CheckCircle,
  XCircle,
  FileCheck,
  TrendingUp,
  ShieldAlert,
  BookOpen
} from 'lucide-react';

export default function Chapter32() {
  const [selectedDevice, setSelectedDevice] = useState<string>('chemical');
  const [selectedClause, setSelectedClause] = useState<number>(1);
  const [sandboxRisk, setSandboxRisk] = useState<string>('Class IIa');
  const [sandboxSterile, setSandboxRiskSterile] = useState<boolean>(false);
  const [sandboxEnergy, setSandboxRiskEnergy] = useState<boolean>(false);
  const [sandboxRadiation, setSandboxRiskRadiation] = useState<boolean>(false);
  const [userResponse, setUserResponse] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // Data for the detailed broad category comparison
  const DEVICES_DATA: Record<string, any> = {
    chemical: {
      name: "Category A: Topical & Chemical Semi-Solids (Surface-Contacting)",
      type: "Topical / Chemical / Semi-Solid Preparations & Surface-Contacting Systems",
      riskClass: "Class IIa or IIb depending on mucosal contact duration",
      contact: "Surface / Mucous Membrane / Skin (Short-term to intermediate contact)",
      sterile: "Typically Non-Sterile (Assembled in cleanrooms with low bioburden)",
      keyStandards: "ISO 10993-1 (Biocompatibility master), ISO 10993-18 (Chemical characterization), ISO 10993-17 (Tox risk assessment), ISO 13485 (QMS)",
      summary: "Includes gels, varnishes, cements, and topical barrier formulations. Since they are non-electrical, non-active, and non-radiating, checklist clauses on software (IEC 62304) and electrical safety (IEC 60601-1) are marked N/A. However, chemical characterization, toxicological assessment, sensitization, and mucosal biocompatibility are heavily audited."
    },
    metallic: {
      name: "Category B: Metallic Passive Implants (SS / Ti Implants)",
      type: "Metallic Structural Implants & Passive Implantable Devices",
      riskClass: "Class IIa, IIb, or Class III (High Risk Long-Term Implants)",
      contact: "Invasive / Bone, Tissue, or Mucous Membrane (Long-term / permanent contact)",
      sterile: "Sterile (Terminally sterilized) or Non-Sterile (Sterilized by clinician before use)",
      keyStandards: "ISO 10993-5/10/23/6 (Biocompatibility/Implantation matrix), ASTM F138 / F136 (Metallic alloys), ISO 13485 (QMS), ISO 11607-1/2 (Sterile packaging)",
      summary: "Includes stainless steel (SS) bands, titanium (Ti) screws, orthopedic plates, or passive implantable structural grids. High focus on mechanical resistance to fatigue/forces, corrosion resistance in biological fluids, zero metal ion/nickel leaching, osteointegration/local tissue tolerance, and packaging barrier stability."
    },
    active: {
      name: "Category C: Active Electrical & Imaging (AC/Battery Devices)",
      type: "Active Electrical & Diagnostic Imaging Medical Devices",
      riskClass: "Class IIb or Class III (Medium-High to High Risk)",
      contact: "Surface / Skin Contact (Transient or continuous patient handling)",
      sterile: "Typically Non-Sterile (Reusable enclosure, easily sanitized/disinfected)",
      keyStandards: "IEC 60601-1 (Electrical safety), IEC 60601-1-2 (EMC), IEC 60601-2-65 (Radiation source safety), IEC 62304 (Software lifecycle), ISO 14971 (Risk management)",
      summary: "Includes hand-held sensors, electronic monitors, laser emitters, diagnostic imaging systems, and computerized software. Almost every electrical, software, and mechanical safety clause is active. Requires absolute proof of dielectric isolation, RF immunity, software unit testing, and radiation leakage shields."
    }
  };

  // Detailed clause comparison mapping using the generic categories
  const CLAUSES_MAPPING: Record<number, any> = {
    1: {
      title: "Clause 1: Design Safety & Benefit-Risk Balance",
      desc: "Devices must be designed so that when used under intended conditions, they do not compromise the safety of patients or users, and any risks are acceptable when weighed against clinical benefits.",
      chemical: {
        status: "Applicable",
        evidence: "Risk Analysis Summary (RA-Chem-01), Cytotoxicity Test Report (BIO-Cyto-02), Clinical Evaluation Report (CER-Chem-04).",
        rationale: "Formulated with medical-grade, non-sensitizing chemical agents that cure rapidly upon contact with moisture/saliva. Single-dose delivery prevents cross-contamination and user dosing errors. The benefit of rapid desensitization/membrane protection outweighs the transient discomfort of taste or application, with residual risk minimized to acceptable levels."
      },
      metallic: {
        status: "Applicable",
        evidence: "Mechanical Fatigue Test Report (MECH-Fat-03), Material Composition Certificate (MAT-Alloy-01), Risk Evaluation (RA-Metal-02).",
        rationale: "Engineered from medical-grade alloys (e.g., 316L Stainless Steel or Grade 5 Titanium) with smooth, rounded margins to prevent physical slicing of local tissue under constant physiologic loading. High mechanical strength prevents fractures, and electrochemical passivation ensures stability, making structural risks negligible compared to structural therapeutic benefits."
      },
      active: {
        status: "Applicable",
        evidence: "IEC 60601-1 Third-Party Certification (EE-Safe-01), Clinical Literature Review (CER-Active-02).",
        rationale: "Designed to minimize patient exposure to hazardous energy or ionizing beams (utilizing ALARA principles, collimators, and micro-timed interlocks). Built-in electrical dielectric isolation prevent shocks. The clinical benefit of immediate diagnostic imaging or precise therapy outweighs controlled electromagnetic or radiation exposure risks."
      }
    },
    2: {
      title: "Clause 2: Risk Reduction & Control Hierarchy",
      desc: "Manufacturers must reduce risks as far as possible by following this order: (i) Inherent safety by design; (ii) Protective safety measures; (iii) Information for safety and warnings.",
      chemical: {
        status: "Applicable",
        evidence: "Chemical Risk Ledger (RA-Chem-01), Instructions for Use (IFU-Chem-RevB).",
        rationale: "(i) Inherently safe single-dose packaging prevents overdosage. (ii) Fast-drying/curing chemistry prevents accidental swallowing or wash-away. (iii) Labels and IFUs prominently warn against usage in patients with documented allergies to constituent resins or compounds."
      },
      metallic: {
        status: "Applicable",
        evidence: "Implant Risk Log (RA-Metal-02), Technical Manual (IFU-Metal-RevA).",
        rationale: "(i) High-precision computer numerical control (CNC) machining eliminates sharp metal burrs. (ii) Graduated sizing schemes ensure snug, anatomical friction fits, preventing micro-motion and dislodgement. (iii) IFU specifies exact installation force limits and adhesive parameters."
      },
      active: {
        status: "Applicable",
        evidence: "IEC 60601-1 safety report, Software hazard audit (SW-Haz-04).",
        rationale: "(i) Recessed active buttons prevent accidental power trigger. (ii) Independent electronic backup interlock timers automatically cut power to the emitter if the primary microcontroller software fails. (iii) Outer casing features standard warning labels for radiation/voltage."
      }
    },
    7: {
      title: "Clause 7: Chemical, Physical & Biological Properties",
      desc: "Particular attention must be paid to the toxicity and flammability of materials used, and the compatibility between materials and biological tissues, taking account of the duration and frequency of contact.",
      chemical: {
        status: "Applicable",
        evidence: "ISO 10993-18 Chemical Characterization (REP-ChemChar-01), ISO 10993-17 Tox Report (REP-Tox-02), SDS Sheet (SDS-Chem-05).",
        rationale: "Chemical extracts have been analyzed using Gas Chromatography-Mass Spectrometry (GC-MS). Toxicity thresholds are certified safe. If volatile/flammable organic vehicles (such as ethanol) are used, risks are controlled via ultra-low single-dose volumes (<0.5mL), airtight primary packaging, and strict temperature-controlled storage warnings."
      },
      metallic: {
        status: "Applicable",
        evidence: "ISO 10993-5 Cytotoxicity (REP-Cyto-05), ASTM G31 Corrosion Test (REP-Corr-01), ICP-MS Leaching Study (REP-Leach-02).",
        rationale: "Constructed of surgical-grade alloys which are biologically inert. ICP-MS analysis confirms nickel and chromium leach rates in simulated physiological fluid are well below daily toxic limits. Biocompatibility validated for long-term implantation with zero systemic toxicity or local necrosis."
      },
      active: {
        status: "Applicable",
        evidence: "ISO 10993-1 Biological Evaluation for Enclosures (REP-EnclBio-01).",
        rationale: "The outer hand-held enclosure is molded from medical-grade polymers (e.g., PC+ABS). Since patient and operator contact is purely transient (surface skin), biocompatibility is verified for cytotoxicity and skin irritation, with zero toxic leachables present."
      }
    },
    8: {
      title: "Clause 8: Infection & Microbial Contamination",
      desc: "Devices must be designed to eliminate or reduce as far as possible the risk of infection. Reusable devices must have validated instructions for cleaning and disinfection, while sterile devices must be manufactured in controlled clean rooms.",
      chemical: {
        status: "Applicable",
        evidence: "Cleanroom Environmental Monitoring Logs (ISO 14644 Class 8), Bioburden Assay (ISO 11737-1).",
        rationale: "Delivered in a non-sterile but highly clean state, which is standard for topical topical gels. Single-use unit-dose packaging with a disposable brush completely eliminates patient-to-patient cross-contamination. Bioburden is strictly monitored during manufacturing to ensure counts remain below 100 CFU/unit."
      },
      metallic: {
        status: "Applicable",
        evidence: "Autoclave Cycle Validation Report (REP-Ster-05) OR Gamma Sterilization Report (ISO 11137).",
        rationale: "If delivered sterile, terminal gamma or ethylene oxide sterilization is validated to achieve a Sterility Assurance Level (SAL) of 10^-6, with packaging conforming to ISO 11607-1/2. If delivered non-sterile, the IFU includes validated autoclave reprocessing parameters (134°C for 4 minutes under vacuum) to be executed by the clinician prior to implantation."
      },
      active: {
        status: "Applicable",
        evidence: "Enclosure Sanitization Protocol (UM-Active-Section 8).",
        rationale: "As a reusable non-sterile electrical system, the external chassis is sealed (IP22 rating) and designed with smooth, non-porous surfaces. This allows clinical staff to perform intermediate chemical disinfection (using standard quaternary ammonium or isopropyl alcohol wipes) between patient exposures without fluid ingress."
      }
    },
    11: {
      title: "Clause 11: Protection Against Radiation",
      desc: "Devices must be designed to minimize the radiation exposure of patients, users, and other persons to levels compatible with the intended purpose, without restricting appropriate levels for diagnosis or therapy.",
      chemical: {
        status: "Not Applicable",
        evidence: "----",
        rationale: "The device is a chemical dental preparation. It does not utilize, emit, or direct any form of electromagnetic, ionizing, or non-ionizing radiation."
      },
      metallic: {
        status: "Not Applicable",
        evidence: "----",
        rationale: "The device is a passive mechanical metallic implant. It does not generate, emit, or incorporate any radioactive substances or radiation-emitting elements."
      },
      active: {
        status: "Applicable",
        evidence: "IEC 60601-2-65 Test Report (RAD-EM-01), Collimation and Filtration Log (ENG-Filter-02).",
        rationale: "Active radiation-emitting source. Emits a highly collimated, filtered beam (focal spot size and filtration certified under IEC 60601-2-65). High-quality integrated lead shielding limits leakage radiation to fractions of regulatory limits. Equipped with a standard 'dead-man' activation trigger."
      }
    },
    12: {
      title: "Clause 12: Devices Connected to or Equipped with an Energy Source",
      desc: "For devices incorporating software or microprocessors, the software must be validated. Active devices must be equipped with battery/external power fail alarms, visual state indicators, and protection against accidental energy release.",
      chemical: {
        status: "Not Applicable",
        evidence: "----",
        rationale: "Passive chemical preparation with no electrical components, circuit boards, batteries, or software systems."
      },
      metallic: {
        status: "Not Applicable",
        evidence: "----",
        rationale: "Passive mechanical structure cemented directly onto the tooth with zero electronic, motorized, or power-consuming circuits."
      },
      active: {
        status: "Applicable",
        evidence: "IEC 62304 Software Lifecycle File (SW-Life-01), Battery Circuit Calibration Schematics, Power Interlock Test Logs.",
        rationale: "Equipped with an internal rechargeable lithium battery. Visual battery level bar indicates real-time power levels to prevent a mid-exposure shut-down (which would ruin the image and force a repeat patient dose). Embedded microprocessor firmware is certified to IEC 62304 standard controls."
      }
    }
  };

  const activeData = CLAUSES_MAPPING[selectedClause];

  // Logic to generate custom regulatory sandbox advice
  const generateSandboxRationable = () => {
    let rationale = `We have assessed this ${sandboxRisk} device which is `;
    rationale += sandboxSterile ? "delivered STERILE" : "delivered NON-STERILE";
    rationale += sandboxEnergy ? ", incorporates an ACTIVE energy source" : ", is a PASSIVE device";
    rationale += sandboxRadiation ? ", and EMITS ionizing/non-ionizing radiation.\n\n" : ".\n\n";

    rationale += "Recommended Essential Requirements Strategy:\n";
    rationale += `1. General Safety (Clauses 1 & 2): ACTIVE. Implement ISO 14971 risk files. Must show safety under single-fault conditions.\n`;
    
    if (sandboxSterile) {
      rationale += `2. Sterile & Microbial (Clause 8): ACTIVE. Must compile ISO 11607-1/2 packaging validation reports and cleanroom bioburden logs. ISO 13485 sterile controls must be active.\n`;
    } else {
      rationale += `2. Sterile & Microbial (Clause 8): NON-STERILE. Must define in-clinic cleaning and sterilization protocols (ISO 17664-1) or establish single-use cross-contamination defenses.\n`;
    }

    if (sandboxEnergy) {
      rationale += `3. Active Energy (Clause 12): ACTIVE. Must reference IEC 60601-1 for electrical safety. If software is present, validate to IEC 62304 software life-cycle processes. Add power-loss alarms.\n`;
      rationale += `4. EMC (Clause 9): ACTIVE. Must undergo IEC 60601-1-2 testing to verify electromagnetic immunity and emissions in clinical zones.\n`;
    } else {
      rationale += `3. Active Energy (Clause 12): NOT APPLICABLE. No electrical circuits or power requirements exist.\n`;
    }

    if (sandboxRadiation) {
      rationale += `4. Radiation Protection (Clause 11): ACTIVE. Must implement radiation shielding, beam filtration, beam-limiting collimation, and clinical safety briefings in operating IFUs.\n`;
    } else {
      rationale += `4. Radiation Protection (Clause 11): NOT APPLICABLE. The device does not emit radiation.\n`;
    }

    rationale += `5. Labeling (Clause 13): ACTIVE. Standard labels and user guides must implement ISO 15223-1 symbols (MD, REF, LOT, Rx Only).`;

    return rationale;
  };

  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter banner */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-950 p-6 my-8 rounded-2xl shadow-md text-white not-prose">
        <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest block mb-1">Dossier Preparation Series</span>
        <h1 className="text-3xl font-extrabold text-white mt-0 mb-2">CHAPTER 32</h1>
        <h2 className="text-xl font-medium text-indigo-100 mt-0 mb-4">Preparing the Essential Requirements Checklist (ERC)</h2>
        <p className="m-0 font-medium text-indigo-200 italic">
          "The Master Architectural Map Mapping Abstract Regulatory Clauses directly to Engineering Evidence"
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          Learning Objectives
        </h3>
        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1.5 pl-5 list-disc text-sm">
          <li>Understand the core layout, mandatory columns, and regulatory expectations of an Essential Requirements Checklist (ERC) / GSPR.</li>
          <li>Write defensively robust, technically sound, and legally secure compliance comments for both applicable and non-applicable clauses.</li>
          <li>Accurately map physical evidence (test logs, risk matrices, material certifications) directly to biological and chemical requirements.</li>
          <li>Formulate a comprehensive ERC compliance matrix for any medical device class based on design complexity and Contact pathway.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3">
        <ScrollText className="w-7 h-7 text-indigo-600" />
        32.1 Anatomy of the Essential Requirements Checklist (ERC)
      </h3>
      <p>
        The <strong>Essential Requirements Checklist (ERC)</strong> (sometimes called the Essential Principles Checklist under IMDRF or General Safety and Performance Requirements (GSPR) under EU MDR) is the absolute heart of a medical device technical file. It acts as a master map or index that connects regulatory safety laws directly to engineering evidence.
      </p>
      <p>
        A standard, regulator-approved ERC contains exactly five mandatory columns:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-6 text-xs">
        <div className="bg-slate-100 p-3 rounded-lg border border-slate-200">
          <span className="font-bold text-slate-800 block mb-1 font-mono uppercase text-[10px] tracking-wider text-slate-400">Column 1</span>
          <strong className="block mb-1 text-slate-900">Clause & Description</strong>
          The exact legislative clause number and verbatim text from the medical device regulations.
        </div>
        <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
          <span className="font-bold text-indigo-800 block mb-1 font-mono uppercase text-[10px] tracking-wider text-indigo-400">Column 2</span>
          <strong className="block mb-1 text-indigo-950">Applicability</strong>
          Marked as <strong>A</strong> (Applicable) or <strong>N/A</strong> (Not Applicable) based on the device's design.
        </div>
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <span className="font-bold text-blue-800 block mb-1 font-mono uppercase text-[10px] tracking-wider text-blue-400">Column 3</span>
          <strong className="block mb-1 text-blue-950">Applied Standards</strong>
          Specific list of consensus standards (e.g., ISO 10993, IEC 60601-1) used to meet the clause.
        </div>
        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
          <span className="font-bold text-emerald-800 block mb-1 font-mono uppercase text-[10px] tracking-wider text-emerald-400">Column 4</span>
          <strong className="block mb-1 text-emerald-950">Document Reference</strong>
          The exact engineering evidence document in your technical file (e.g., "Report Bio-02", "Risk File Annex 09").
        </div>
        <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
          <span className="font-bold text-amber-800 block mb-1 font-mono uppercase text-[10px] tracking-wider text-amber-400">Column 5</span>
          <strong className="block mb-1 text-amber-950">Comments / Rationale</strong>
          A cohesive, narrative paragraph explaining precisely <strong>how</strong> the design features satisfy the clause.
        </div>
      </div>

      {/* WORKFLOW ELABORATION */}
      <div className="bg-indigo-900 text-white rounded-xl p-6 my-8 border border-indigo-950 not-prose">
        <h4 className="text-white text-base font-bold mt-0 mb-3 flex items-center gap-2">
          <Settings className="w-5 h-5 text-indigo-300 animate-spin-slow" />
          The Technical Writing Process: Step-by-Step ERC Compilation
        </h4>
        <ol className="text-xs space-y-2 text-indigo-100 pl-4 list-decimal mt-0 mb-0">
          <li><strong>Extract Verbatim Regulatory Text:</strong> Never paraphrase the regulatory codes in Column 1. Use the absolute legislative source text.</li>
          <li><strong>Conduct Design Freeze Review:</strong> Freeze the design, bill of materials, and contact path definitions. Decide if each clause applies based on physical and electrical characteristics.</li>
          <li><strong>Collate Standard Citations:</strong> Align your testing files with the latest harmonized consensus standards. Avoid referencing obsolete versions.</li>
          <li><strong>Map Exact Test Logs:</strong> In Column 4, don't just refer to a folder. List specific document numbers, revisions, and section headings.</li>
          <li><strong>Write Defensible Rationales:</strong> Treat Column 5 as an engineering-legal argument. Explain the precise mechanical, chemical, or electric mitigations implemented.</li>
        </ol>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3">
        <Layers className="w-7 h-7 text-indigo-600" />
        32.2 Comparative Case Analysis: Three Broad Product Categories
      </h3>
      <p>
        To truly master preparing an ERC, let us analyze three vastly different, broad medical device categories:
      </p>

      {/* Selector Tabs for the Categories */}
      <div className="flex flex-col md:flex-row border-b border-slate-200 gap-2 mb-6">
        {Object.keys(DEVICES_DATA).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedDevice(key)}
            className={`px-4 py-3 text-xs font-extrabold border-b-2 transition-all duration-150 text-left md:text-center ${
              selectedDevice === key 
                ? "border-indigo-600 text-indigo-600 bg-indigo-50/50" 
                : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            {DEVICES_DATA[key].name}
          </button>
        ))}
      </div>

      {/* Selected Device Details Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h4 className="text-base font-bold text-slate-900 mt-0 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-600" />
          Compliance Blueprint: {DEVICES_DATA[selectedDevice].name}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Product Category Scope</span>
            <p className="font-semibold text-slate-700 m-0">{DEVICES_DATA[selectedDevice].type}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Regulatory Classification Spectrum</span>
            <p className="font-semibold text-indigo-700 m-0">{DEVICES_DATA[selectedDevice].riskClass}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Biological Contact Pathway</span>
            <p className="font-semibold text-slate-700 m-0">{DEVICES_DATA[selectedDevice].contact}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sterilization State Requirements</span>
            <p className="font-semibold text-slate-700 m-0">{DEVICES_DATA[selectedDevice].sterile}</p>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-4 mb-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Key Horizontal & Vertical Standards</span>
          <p className="font-mono text-[11px] text-slate-700 bg-white p-2 rounded border border-slate-100 m-0">{DEVICES_DATA[selectedDevice].keyStandards}</p>
        </div>
        <div className="border-t border-slate-200 pt-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1 font-sans">Strategic Compliance Approach</span>
          <p className="text-xs text-slate-600 leading-relaxed m-0 italic">"{DEVICES_DATA[selectedDevice].summary}"</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3">
        <ScrollText className="w-7 h-7 text-indigo-600" />
        32.3 Clause-by-Clause Compliance Mapping
      </h3>
      <p>
        Let's select a crucial regulatory clause below to see exactly how these three broad product categories address it in Column 5 of their technical checklists:
      </p>

      {/* Clause Selector Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 7, 8, 11, 12].map((num) => (
          <button
            key={num}
            onClick={() => setSelectedClause(num)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all duration-150 ${
              selectedClause === num
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Clause {num}
          </button>
        ))}
      </div>

      {/* Active Clause Comparison Grid */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8">
        <h4 className="text-base font-extrabold text-indigo-900 mt-0 mb-2">{activeData.title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed mb-6 bg-slate-50 p-3 rounded border border-slate-100 italic">
          "{activeData.desc}"
        </p>

        <div className="space-y-6 divide-y divide-slate-100">
          
          {/* Device A: Chemical */}
          <div className="pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wide">Category A: Topical & Chemical Semi-Solids</span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                activeData.chemical.status === "Applicable" ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"
              }`}>{activeData.chemical.status}</span>
            </div>
            {activeData.chemical.status === "Applicable" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-2 pl-4 border-l-2 border-slate-200">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px]">Evidence Document Reference</span>
                  <p className="font-mono text-slate-700 m-0 text-[10px] bg-slate-50 p-1 rounded inline-block">{activeData.chemical.evidence}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px]">Compliance Comment / Rationale</span>
                  <p className="text-slate-600 m-0 leading-relaxed">{activeData.chemical.rationale}</p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic pl-4 m-0">Non-applicable rationale: {activeData.chemical.rationale}</p>
            )}
          </div>

          {/* Device B: Metallic */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wide">Category B: Metallic Passive Implants</span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                activeData.metallic.status === "Applicable" ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"
              }`}>{activeData.metallic.status}</span>
            </div>
            {activeData.metallic.status === "Applicable" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-2 pl-4 border-l-2 border-slate-200">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px]">Evidence Document Reference</span>
                  <p className="font-mono text-slate-700 m-0 text-[10px] bg-slate-50 p-1 rounded inline-block">{activeData.metallic.evidence}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px]">Compliance Comment / Rationale</span>
                  <p className="text-slate-600 m-0 leading-relaxed">{activeData.metallic.rationale}</p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic pl-4 m-0">Non-applicable rationale: {activeData.metallic.rationale}</p>
            )}
          </div>

          {/* Device C: Active */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wide">Category C: Active Electrical & Imaging Systems</span>
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                activeData.active.status === "Applicable" ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-500"
              }`}>{activeData.active.status}</span>
            </div>
            {activeData.active.status === "Applicable" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-2 pl-4 border-l-2 border-slate-200">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px]">Evidence Document Reference</span>
                  <p className="font-mono text-slate-700 m-0 text-[10px] bg-slate-50 p-1 rounded inline-block">{activeData.active.evidence}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="font-bold text-slate-400 uppercase tracking-wider block text-[9px]">Compliance Comment / Rationale</span>
                  <p className="text-slate-600 m-0 leading-relaxed">{activeData.active.rationale}</p>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic pl-4 m-0">Non-applicable rationale: {activeData.active.rationale}</p>
            )}
          </div>

        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3">
        <Settings className="w-7 h-7 text-indigo-600" />
        32.4 Interactive Tool: ER Strategy Sandbox
      </h3>
      <p>
        To ensure you can prepare the essential requirement checklist for <strong>any risk class or any kind of document</strong>, use this dynamic compliance sandbox tool. Toggle the design characteristics below to instantly generate a custom regulatory strategy and compliance rationale:
      </p>

      {/* Compliance Sandbox UI */}
      <div className="bg-slate-900 text-white rounded-xl p-6 mb-8 border border-slate-800 shadow-md not-prose">
        <h4 className="text-sm font-bold text-slate-100 mt-0 mb-4 flex items-center gap-2 font-mono">
          <FileSpreadsheet className="w-5 h-5 text-indigo-400" />
          Interactive ERC Strategy Generator
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Toggle 1: Risk Class */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Device Risk Class</label>
            <select 
              value={sandboxRisk} 
              onChange={(e) => setSandboxRisk(e.target.value)}
              className="bg-slate-800 text-white text-xs rounded border border-slate-700 p-2.5 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 font-bold"
            >
              <option value="Class I">Class I (Low Risk)</option>
              <option value="Class IIa">Class IIa (Medium-Low)</option>
              <option value="Class IIb">Class IIb (Medium-High)</option>
              <option value="Class III">Class III (High Risk / Implant)</option>
            </select>
          </div>

          {/* Toggle 2: Sterile */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Delivery State</label>
            <div className="flex gap-2 text-xs">
              <button 
                onClick={() => setSandboxRiskSterile(true)}
                className={`flex-1 p-2 rounded border transition-colors ${
                  sandboxSterile ? "bg-indigo-600 border-indigo-500 font-bold text-white text-[11px]" : "bg-slate-800 border-slate-700 text-slate-400 text-[11px]"
                }`}
              >
                Sterile
              </button>
              <button 
                onClick={() => setSandboxRiskSterile(false)}
                className={`flex-1 p-2 rounded border transition-colors ${
                  !sandboxSterile ? "bg-indigo-600 border-indigo-500 font-bold text-white text-[11px]" : "bg-slate-800 border-slate-700 text-slate-400 text-[11px]"
                }`}
              >
                Non-Sterile
              </button>
            </div>
          </div>

          {/* Toggle 3: Active */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Power Source</label>
            <div className="flex gap-2 text-xs">
              <button 
                onClick={() => setSandboxRiskEnergy(true)}
                className={`flex-1 p-2 rounded border transition-colors ${
                  sandboxEnergy ? "bg-indigo-600 border-indigo-500 font-bold text-white text-[11px]" : "bg-slate-800 border-slate-700 text-slate-400 text-[11px]"
                }`}
              >
                Active (Power)
              </button>
              <button 
                onClick={() => setSandboxRiskEnergy(false)}
                className={`flex-1 p-2 rounded border transition-colors ${
                  !sandboxEnergy ? "bg-indigo-600 border-indigo-500 font-bold text-white text-[11px]" : "bg-slate-800 border-slate-700 text-slate-400 text-[11px]"
                }`}
              >
                Passive
              </button>
            </div>
          </div>

          {/* Toggle 4: Radiation */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Radiation Emission</label>
            <div className="flex gap-2 text-xs">
              <button 
                onClick={() => setSandboxRiskRadiation(true)}
                className={`flex-1 p-2 rounded border transition-colors ${
                  sandboxRadiation ? "bg-indigo-600 border-indigo-500 font-bold text-white text-[11px]" : "bg-slate-800 border-slate-700 text-slate-400 text-[11px]"
                }`}
              >
                Emits
              </button>
              <button 
                onClick={() => setSandboxRiskRadiation(false)}
                className={`flex-1 p-2 rounded border transition-colors ${
                  !sandboxRadiation ? "bg-indigo-600 border-indigo-500 font-bold text-white text-[11px]" : "bg-slate-800 border-slate-700 text-slate-400 text-[11px]"
                }`}
              >
                No Radiation
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Sandbox Output Terminal */}
        <div className="bg-slate-950 rounded-lg p-4 font-mono text-[11px] text-indigo-300 border border-slate-800 h-64 overflow-y-auto whitespace-pre-line leading-relaxed shadow-inner">
          {generateSandboxRationable()}
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3">
        <HelpCircle className="w-7 h-7 text-indigo-600" />
        32.5 Practice Workshop: Draft Your First Rationale
      </h3>
      <p>
        Imagine you are presenting your technical dossier on a new <strong>Disposable Sterile Scalpel (Class IIa)</strong> to a Notified Body auditor. The auditor challenges you: 
        <br />
        <span className="font-semibold text-slate-700 italic">"Draft a comprehensive Column 5 rationale for Clause 8 (Infection & Microbial Contamination) detailing your packaging and manufacturing controls."</span>
      </p>

      {/* Practice Interactive Console */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-6">
        <p className="text-xs font-bold text-slate-800 mb-2">Type your compliance rationale here:</p>
        <textarea
          value={userResponse}
          onChange={(e) => setUserResponse(e.target.value)}
          placeholder="Tip: Mention sterilization validation standards (ISO 11135 or ISO 11137), cleanroom assembly (ISO 14644), sterile barrier standards (ISO 11607-1/2), and single-use labeling."
          className="w-full h-32 p-3 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 font-sans mb-4"
        />

        <div className="flex gap-2">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded transition-colors"
          >
            {showAnswer ? "Hide Regulatory Reference Answer" : "Reveal Professional Reference Answer"}
          </button>
          <button
            onClick={() => {
              setUserResponse('');
              setShowAnswer(false);
            }}
            className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs px-4 py-2 rounded transition-colors"
          >
            Reset
          </button>
        </div>

        {showAnswer && (
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r mt-6 text-xs">
            <h5 className="font-bold text-indigo-900 mt-0 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Regulator-Approved Reference Rationale
            </h5>
            <p className="text-slate-700 leading-relaxed mb-3">
              "The disposable scalpel is delivered in a sterile state. The device is assembled and packaged in a Class 8 (Class 100,000) cleanroom environment strictly monitored according to <strong>EN ISO 14644-1</strong> standards to maintain low pre-sterilization bioburden levels. The scalpel is terminally sterilized using Ethylene Oxide (EO) gas, fully validated and controlled in accordance with <strong>EN ISO 11135</strong>. The sterile barrier packaging is constructed from medical-grade Tyvek pouch material conforming to <strong>EN ISO 11607-1 & 2</strong>, ensuring absolute sterile barrier maintenance throughout storage, shipping, and clinical transit stresses. The device is labeled for single-use only with the ISO 15223-1 'Do Not Reuse' symbol, completely mitigating cross-contamination risks."
            </p>
            <div className="bg-white p-3 rounded border border-indigo-100 text-[11px] text-indigo-800">
              <strong>Why this works:</strong> It explicitly names the vertical standards for cleanroom assembly, EO gas validation, sterile packaging barrier material, and labeling symbols, leaving no room for auditor doubt.
            </div>
          </div>
        )}
      </div>

      {/* Chapter Summary box */}
      <div className="bg-indigo-950 text-white rounded-xl p-6 mt-8 shadow-md not-prose">
        <h4 className="text-base font-bold mt-0 mb-3 flex items-center gap-2">
          <Award className="w-6 h-6 text-indigo-300" />
          Preparing ERCs: Master Regulatory Commandments
        </h4>
        <ul className="text-indigo-100 text-xs leading-relaxed mb-4 list-disc pl-5 space-y-2">
          <li><strong>Never Leave blank fields</strong>: Even if a clause is marked 'N/A', Column 5 must explicitly state why (e.g., "The device contains no active software, therefore this section is not applicable.").</li>
          <li><strong>Standards must be specific</strong>: Never just write "Meets standards". State the exact standard code and version (e.g., "ISO 10993-5:2009").</li>
          <li><strong>Keep references updated</strong>: Column 4 references must match exactly with document titles in your design history file.</li>
        </ul>
        <div className="border-t border-indigo-800 pt-4 text-xs font-mono text-indigo-200">
          Congratulations! You have completed the training on Essential Requirements and Standards. You are now fully equipped to compile technical files for any class of medical device globally.
        </div>
      </div>

    </div>
  );
}
