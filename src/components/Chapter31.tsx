import React, { useState } from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Scale, 
  Cpu, 
  Activity, 
  Flame, 
  Zap, 
  Radio, 
  FileText, 
  CheckCircle2, 
  HeartPulse, 
  Sparkles, 
  AlertTriangle,
  Clock,
  RefreshCw,
  Search,
  Package,
  Calendar,
  Layers,
  HelpCircle,
  FileCheck,
  CheckCircle,
  XCircle,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export default function Chapter31() {
  const [activeTab, setActiveTab] = useState('qms');
  const [selectedCategory, setSelectedCategory] = useState('chemical');
  const [selectedAuditStandard, setSelectedAuditStandard] = useState('qms_13485');
  const [referencedYear, setReferencedYear] = useState('2016');

  // Must-Have Standards Data
  const standardsData = {
    qms: {
      title: "1. Quality Management System (QMS)",
      desc: "An organization's systemic backbone. A medical-grade QMS ensures that every manufactured unit matches the approved design, changes are controlled, errors are analyzed, and risk is managed at every tier.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      primary: {
        code: "ISO 13485:2016",
        name: "Medical devices — Quality management systems — Requirements for regulatory purposes",
        scope: "Mandates strict organizational controls for product realization, design validation, sterile barrier controls, corrective and preventive actions (CAPA), vendor audits, and complete device traceability from raw materials to end-use."
      },
      related: [
        {
          code: "ISO 9001:2015",
          name: "Quality management systems — Requirements",
          role: "The generic quality foundation. While valuable for general business processes, it lacks medical-specific safeguards like clinical evaluations, bioburden controls, and strict regulatory reporting."
        },
        {
          code: "21 CFR Part 820",
          name: "FDA Quality System Regulation (QSR) / QMSR",
          role: "The United States statutory quality code. In February 2024, the FDA issued a final rule transitioning to the Quality Management System Regulation (QMSR), which directly incorporates ISO 13485:2016 by reference."
        },
        {
          code: "MDSAP Audit Model",
          name: "Medical Device Single Audit Program",
          role: "A unified global audit protocol allowing a single regulatory audit of a manufacturer's QMS to satisfy the requirements of FDA (USA), CDSCO/Health Canada (Canada), TGA (Australia), MHLW (Japan), and ANVISA (Brazil)."
        },
        {
          code: "ISO 14001:2015",
          name: "Environmental management systems",
          role: "Governs clean manufacturing environmental footprints, recycling, and resource conservation, frequently integrated into modern ISO 13485 facility management."
        }
      ]
    },
    risk: {
      title: "2. Risk Analysis & Usability",
      desc: "The core philosophy of modern device safety. Rather than testing products to find failures after production, manufacturers must identify potential failures during design and mitigate them through a structured hierarchy.",
      icon: AlertTriangle,
      color: "text-amber-600 bg-amber-50 border-amber-100",
      primary: {
        code: "ISO 14971:2019",
        name: "Medical devices — Application of risk management to medical devices",
        scope: "Defines the mandatory lifecycle risk management framework. Requires creating a continuous process of hazard identification, risk estimation, implementation of risk controls, assessment of residual risk, and post-market safety feedback loops."
      },
      related: [
        {
          code: "ISO/TR 24971:2020",
          name: "Guidance on the application of ISO 14971",
          role: "The official technical report providing expert tutorials, clinical templates, and detailed clauses on how to determine risk acceptability, evaluate cumulative risks, and manage clinical use hazards."
        },
        {
          code: "IEC 62366-1:2015",
          name: "Application of usability engineering to medical devices",
          role: "Governs user-interface design. Focuses on identifying and mitigating risks caused by user-interface errors (e.g., misreading values, incorrect button sequences, or misinterpreting diagnostic screens)."
        },
        {
          code: "IEC 60812:2018",
          name: "Failure Modes and Effects Analysis (FMEA)",
          role: "Establishes standard guidelines for executing bottom-up mechanical and electronic engineering reliability studies, identifying single-point failure modes within device circuits."
        }
      ]
    },
    biocompatibility: {
      title: "3. Biocompatibility & Material Safety",
      desc: "Patient-contacting materials must be biologically inert and safe. Standardized tests ensure that contact with skin, mucosal tissue, blood, or bone does not cause cellular damage, local irritation, or system-wide toxic reactions.",
      icon: HeartPulse,
      color: "text-red-600 bg-red-50 border-red-100",
      primary: {
        code: "ISO 10993-1:2018",
        name: "Biological evaluation of medical devices — Part 1: Evaluation and testing within a risk management framework",
        scope: "The master biocompatibility framework. Mandates classifying devices by body contact pathway (surface, mucosal, implant) and duration, then establishing a chemical characterization and toxicological testing plan."
      },
      related: [
        {
          code: "ISO 10993-5:2009",
          name: "Tests for In Vitro Cytotoxicity",
          role: "Exposes cultured mammalian cells to device fluid extracts. A reduction in cell viability of more than 30% indicates biological cytotoxicity, signaling potential tissue necrosis risks."
        },
        {
          code: "ISO 10993-10:2021",
          name: "Tests for Skin Sensitization",
          role: "Evaluates the potential of a material to cause delayed contact hypersensitivity (allergic reactions), utilizing validated guinea pig maximization or murine local lymph node assays."
        },
        {
          code: "ISO 10993-23:2021",
          name: "Tests for Irritation",
          role: "Details specific assessments to check for local inflammatory reactions following exposure to mucosal membranes, eyes, or intracutaneous tissue pathways."
        },
        {
          code: "ISO 10993-18:2020",
          name: "Chemical characterization of medical device materials within a risk management process",
          role: "Requires analyzing the chemical fingerprint of the device materials (extractables and leachables) to identify potential toxins before conducting animal tests."
        },
        {
          code: "ISO 10993-17:2023",
          name: "Toxicological risk assessment of medical device constituents",
          role: "Provides the methods to calculate the worst-case human exposure to leached chemicals and establish Tolerable Intake (TI) limits for long-term clinical safety."
        }
      ]
    },
    sterilization: {
      title: "4. Sterilization & Cleanroom Validation",
      desc: "For surgical and invasive devices, keeping bioburden below clinical risk levels is crucial. If delivered sterile, terminal validation is required; if delivered non-sterile, a highly detailed reprocessing recipe must be validated.",
      icon: Flame,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      primary: {
        code: "ISO 11607-1/2:2019",
        name: "Packaging for terminally sterilized medical devices — Materials, sterile barrier systems, and validation",
        scope: "Governs the design and verification of sterile barrier systems (pouches, trays). Part 1 sets material requirements; Part 2 dictates seal validation, ensuring the package remains completely impervious to microorganisms until opened."
      },
      related: [
        {
          code: "ISO 11135:2014",
          name: "Sterilization of health-care products — Ethylene oxide",
          role: "The international standard for validating gas sterilization. Establishes requirements for gas chamber humidity, EO concentration, and strict degassing protocols to eliminate toxic residues."
        },
        {
          code: "ISO 11137-1:2015",
          name: "Sterilization of health-care products — Radiation (Gamma / E-Beam)",
          role: "Governs terminal sterilization using high-energy ionizing radiation. Dictates the dose-mapping studies needed to establish the minimum dose to achieve sterility and maximum dose to prevent material degradation."
        },
        {
          code: "ISO 17665-1:2006",
          name: "Sterilization of health-care products — Moist heat (Steam)",
          role: "Establishes validation protocols for autoclave sterilization cycles. Crucial for reusable dental and surgical instruments reprocessed between clinical procedures."
        },
        {
          code: "ISO 11737-1:2018",
          name: "Estimation of population of microorganisms on products (Bioburden)",
          role: "Details laboratory methods to count the active bacteria on a device before sterilization. Low pre-sterilization bioburden is a prerequisite for achieving the required Sterility Assurance Level (SAL) of 10^-6."
        },
        {
          code: "ISO 17664-1:2021",
          name: "Processing of health care products — Information for reusable devices",
          role: "Mandates that manufacturers of reusable devices provide complete, step-by-step validated reprocessing recipes: from cleaning agents and rinsing volumes to autoclaving temperatures and drying times."
        }
      ]
    },
    stability: {
      title: "5. Stability Study & Shelf Life",
      desc: "A medical device must maintain its safety, mechanical strength, and packaging barrier integrity throughout its stated shelf life, even under harsh transport, humidity, and temperature variations.",
      icon: Clock,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      primary: {
        code: "ASTM F1980-21",
        name: "Standard Guide for Accelerated Aging of Sterile Barrier Systems and Medical Devices",
        scope: "Defines the core mathematical Arrhenius equations used to conduct accelerated aging tests. Enables manufacturers to simulate years of real-time aging in weeks by storing devices in high-temperature environmental chambers (e.g., 55°C)."
      },
      related: [
        {
          code: "ISO 11607-1 Section 8",
          name: "Packaging stability and performance testing",
          role: "Requires verifying that the physical sterile barrier pouch seals do not degrade over the shelf-life period under combined mechanical aging and ambient degradation."
        },
        {
          code: "ASTM F88/F88M-21",
          name: "Standard Test Method for Seal Strength of Flexible Barrier Materials",
          role: "Utilizes tensile testing instruments to pull packaging seals apart, measuring the precise force (Newtons) needed to open the pack. Verifies that the seals are strong enough to withstand shipping but easy for clinicians to peel open."
        },
        {
          code: "ASTM F1929-23",
          name: "Standard Test Method for Detecting Seal Leaks in Porous Medical Packaging by Dye Penetration",
          role: "Requires injecting a highly visible chemical dye indicator into the pouch seals. If the dye leaks through the seal within 20 seconds, it signals a micro-void that could allow biological/microbial ingress."
        },
        {
          code: "ICH Q1A (R2)",
          name: "Stability Testing of New Drug Substances and Products",
          role: "Governs temperature and humidity chambers for drug stability. Crucial for combination medical devices containing chemical substances or active compounds."
        }
      ]
    },
    labeling: {
      title: "6. Labeling & Unique Device Identification (UDI)",
      desc: "Labels represent the front line of hazard mitigation. They must withstand moisture, cleaning chemicals, and mechanical friction, while communicating critical regulatory data without relying on spoken language.",
      icon: Layers,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
      primary: {
        code: "ISO 15223-1:2021",
        name: "Medical devices — Symbols to be used with information to be supplied by the manufacturer — Part 1: General requirements",
        scope: "The global dictionary of medical device safety symbols. Standardizes graphics for 'Single-Use Only', 'Sterile', 'Batch Code', 'Use-By Date', 'Manufacturer', and 'Consult Instructions for Use' to bypass international language barriers."
      },
      related: [
        {
          code: "ISO 20417:2021",
          name: "Medical devices — Information to be supplied by the manufacturer",
          role: "The master umbrella standard for all product literature. It dictates formatting, text sizing, placement, and translation compliance for outer labels, inner labels, and clinical manuals."
        },
        {
          code: "EN 1041:2008+A1:2013",
          name: "Information supplied by the manufacturer of medical devices",
          role: "The legacy European harmonized labeling standard. Still frequently found in legacy regulatory files, though rapidly being superseded by the comprehensive ISO 20417 framework."
        },
        {
          code: "GS1 General Specifications / ISO 15415",
          name: "Unique Device Identification (UDI) Barcoding & Quality",
          role: "Establishes requirements for compiling and printing the 2D DataMatrix or 1D barcode on labels. Mandates a Device Identifier (UDI-DI) and Production Identifier (UDI-PI) to enable immediate supply-chain recall."
        }
      ]
    },
    ifu: {
      title: "7. Instructions for Use (IFU)",
      desc: "The IFU is not a simple user manual; it is a legally binding clinical document. Every claim made in the IFU must be backed by technical laboratory testing, and every listed warning must correspond directly to the risk management file.",
      icon: FileText,
      color: "text-rose-600 bg-rose-50 border-rose-100",
      primary: {
        code: "ISO 20417:2021 (IFU Specifications)",
        name: "Medical devices — Information to be supplied by the manufacturer — Technical IFU Framework",
        scope: "Mandates the required structural layout of the IFU. It forces manufacturers to list: indications, intended patient populations, clinical contraindications, safety warnings, disposal steps, and complete manufacturer traceability data."
      },
      related: [
        {
          code: "IEC 82079-1:2019",
          name: "Preparation of information for use (instructions for use) of products — Part 1: Principles and general requirements",
          role: "An international multi-industry standard that governs technical writing quality, structuring, vocabulary choices, typography legibility, and effective translation principles."
        },
        {
          code: "IEC 62366-1 (Usability of IFUs)",
          name: "Usability Engineering — Validation of Information for Safety",
          role: "Requires validating the IFU through human factors testing. Safety instructions must be clinically tested to prove that the target users (e.g., dental nurses, surgeons, patients) can read and follow them correctly."
        },
        {
          code: "EU Regulation 2021/2226",
          name: "Electronic instructions for use of medical devices (e-IFU)",
          role: "Specifies strict security, backup, and website requirements that must be met if a manufacturer elects to host their IFU online instead of shipping physical paper booklets."
        }
      ]
    }
  };

  // Elaborated Device Categories Data
  const CATEGORIES_MAPPING: Record<string, any> = {
    chemical: {
      title: "Category A: Topical / Chemical / Semi-Solid Preparations & Surface-Contacting Non-Invasive Systems",
      desc: "This category includes gels, varnishes, cements, ointments, barrier creams, and chemical mixtures applied to cutaneous or mucosal membranes (including oral, dental, or dermal contact pathways). Many function as chemical-barrier active structures or transient protective seals.",
      testingTitle: "Mandatory Engineering Verification & Testing Pathways",
      points: [
        { title: "Chemical Fingerprinting & Characterization (ISO 10993-18)", text: "Complete extraction studies to identify organic/inorganic leachables, confirming no toxic impurities (e.g., heavy metals, residual solvents, monomer precursors) exceed systemic thresholds." },
        { title: "Toxicological Risk Assessment (ISO 10993-17)", text: "Using analytical chemistry data to calculate worst-case systemic exposure levels, establishing Tolerable Intake (TI) and Margin of Safety (MoS) metrics for mucosal contact." },
        { title: "Viscosity, Cure-Rate & Mechanical Adhesion Stability", text: "Physical rheological profiling to guarantee the suspension stays uniform throughout shelf-life, cures at body/salivary temperatures within seconds, and adheres under shear stresses." },
        { title: "Chemical Toxicity & Sensitization (ISO 10993-5 / 10 / 23)", text: "Evaluating cellular death profiles via standard MTT/XTT cytotoxicity assays, skin sensitization via GPMT/LLNA assays, and mucosal tissue irritation." }
      ]
    },
    metallic: {
      title: "Category B: Metallic Structural Implants & Passive Implantable Devices (e.g., SS or Ti Implants)",
      desc: "This category includes structural plates, screws, bone pins, dental bands, crown structures, and orthopedic implants constructed of medical-grade metals (e.g., 316L Stainless Steel, Grade 5 Titanium, Cobalt-Chromium). These undergo permanent or long-term mucosal and bone contact.",
      testingTitle: "Mandatory Engineering Verification & Testing Pathways",
      points: [
        { title: "Mechanical Integrity & Fatigue Limits (ASTM F138 / F136)", text: "Dynamic structural stress-testing (undergoing millions of mechanical cycles representing chewing, joint loading, or walking) to construct S-N curves, ensuring zero structural failure under physiologic loads." },
        { title: "Corrosion Resistance & Passivation Studies (ASTM G5 / G61)", text: "Electrochemical testing in simulated physiological fluids (saliva, interstitial fluid) to measure corrosion rates, pitting potential, and breakdown voltage. Verifies that the oxide passivation layer is completely stable." },
        { title: "Metal Ion Leaching Analysis (ICP-MS)", text: "Testing simulated leachates for heavy/toxic elements (especially nickel, chromium, cobalt) over long durations, verifying levels remain orders of magnitude below toxic limits." },
        { title: "Implantation & Local Tissue Tolerance (ISO 10993-6)", text: "Evaluating local biological reactions at the macroscopic and microscopic cellular level after implanting the alloy into muscle or bone tissue, verifying standard fibrous encapsulation without necrosis." }
      ]
    },
    active: {
      title: "Category C: Active Electrical & Diagnostic Imaging Medical Devices",
      desc: "This category includes imaging generators, active diagnostic monitors, surgical lasers, and computerized dental software. They are powered by AC mains or high-density internal lithium battery systems, and often incorporate complex diagnostic algorithms or ionizing radiation elements.",
      testingTitle: "Mandatory Engineering Verification & Testing Pathways",
      points: [
        { title: "Electrical Safety & Basic Performance (IEC 60601-1)", text: "Validating dielectric insulation, creepage/clearance distances, and measuring ground leakage currents (<500µA) and patient leakage currents under single-fault conditions." },
        { title: "Electromagnetic Compatibility & Immunity (IEC 60601-1-2)", text: "Subjecting the device to high-voltage electrostatic discharges (ESD up to 15kV), RF fields, and voltage dips to ensure the diagnostic display doesn't flicker or trip during vital operations." },
        { title: "Radiation Output & Shielding Verification (IEC 60601-2-65)", text: "Confirming focal spot geometry, high-voltage beam filtration (minimum 2.0mm Al equivalent), leakage radiation limits (<0.25 mGy/hr at 1 meter), and collimator beam diameter alignment." },
        { title: "Software Lifecycle & Firmware Verification (IEC 62304)", text: "Mapping the software development life cycle, declaring software risk categories (Class A, B, or C), creating clear tracing matrices from requirements to code unit testing, and verifying backup timing interlocks." }
      ]
    }
  };

  // State of the Art (SOTA) Audit Tool Mock Data
  const sotaAuditData: Record<string, any> = {
    qms_13485: {
      category: "Quality Management System",
      standard: "ISO 13485",
      versions: [
        { year: "1996", status: "Obsolete", threat: "Critical", reason: "Replaced decades ago. Lacks standard structural alignment with modern ISO systems and completely misses modern risk-based product realization controls." },
        { year: "2003", status: "Obsolete", threat: "Critical", reason: "Presumption of conformity withdrew in 2019. Files referencing the 2003 version will trigger immediate regulatory rejection due to the lack of integrated clinical risk control mapping." },
        { year: "2016", status: "Active (State of the Art)", threat: "None", reason: "This is the current active version, incorporating the latest regulatory alignments for EU MDR, FDA QMSR, and CDSCO standards." }
      ]
    },
    risk_14971: {
      category: "Risk Analysis",
      standard: "ISO 14971",
      versions: [
        { year: "2007", status: "Obsolete", threat: "High", reason: "Obsolete since 2019. This legacy version fails to cover modern requirements for cybersecurity, software risks, and active post-market surveillance integration." },
        { year: "2012", status: "Obsolete (EU EN Only)", threat: "High", reason: "The EN version was aligned with older EU Directives (MDD). It has been superseded by the 2019 version which fully aligns with the modern MDR." },
        { year: "2019", status: "Active (State of the Art)", threat: "None", reason: "The current active international consensus version. It establishes modern boundaries for overall risk evaluation and active clinical safety feedback." }
      ]
    },
    bio_10993_10: {
      category: "Biocompatibility (Sensitization/Irritation)",
      standard: "ISO 10993-10",
      versions: [
        { year: "2010", status: "Obsolete", threat: "High", reason: "Superseded in 2021. The old standard combined both skin irritation and sensitization. Referencing it shows a lack of awareness of modern separated evaluation routes." },
        { year: "2021", status: "Active (State of the Art)", threat: "None", reason: "The current active version. Note that skin irritation has been separated and moved into its own dedicated standard (ISO 10993-23:2021). Both must be used together now!" }
      ]
    },
    label_15223: {
      category: "Labeling & Symbols",
      standard: "ISO 15223-1",
      versions: [
        { year: "2012", status: "Obsolete", threat: "Medium", reason: "Superseded in 2016 and again in 2021. Completely lacks essential modern symbols including the 'Medical Device' (MD) flag and 'Unique Device Identifier' (UDI) icons." },
        { year: "2016", status: "Obsolete", threat: "Medium", reason: "Superseded by the 2021 revision. The 2016 version lacks specific symbols required for compliance with the EU MDR (e.g. distributor, importer, single sterile barrier system)." },
        { year: "2021", status: "Active (State of the Art)", threat: "None", reason: "The current definitive consensus standard. Fully accepted by EU MDR, US FDA, and global regulatory frameworks." }
      ]
    }
  };

  const handleAuditCheck = () => {
    const audit = sotaAuditData[selectedAuditStandard];
    if (!audit) return null;
    const matchedVersion = audit.versions.find((v: any) => v.year === referencedYear);
    if (!matchedVersion) {
      return {
        status: "Unknown / Legacy Custom Year",
        threat: "Unknown Risk",
        reason: "You have selected a custom or non-standard revision year. Regulators will require proof of gap-analysis to verify conformity to current State of the Art."
      };
    }
    return matchedVersion;
  };

  const currentAuditResult = handleAuditCheck();

  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 p-8 my-8 rounded-2xl shadow-md text-white not-prose">
        <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest block mb-1">Essential Principles Courseware</span>
        <h1 className="text-3xl font-extrabold text-white mt-0 mb-2">CHAPTER 31</h1>
        <h2 className="text-xl font-medium text-indigo-100 mt-0 mb-4">Analysis of Major Medical Device Standards & Broad Categories</h2>
        <p className="m-0 font-medium text-indigo-200 italic bg-indigo-900/40 p-4 rounded-xl border border-indigo-800 inline-block text-sm">
          "Standards are the technical bridge between abstract safety laws and physical engineering reality. Moving from device-specific designs to broad product categories ensures dynamic compliance."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          Learning Objectives
        </h3>
        <div className="my-6 rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
            alt="Engineer analyzing technical blueprints" 
            className="w-full h-56 object-cover" 
          />
        </div>
        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1.5 pl-5 list-disc">
          <li>Identify the 7 <strong>Must-Have</strong> consensus standards required for any regulatory technical dossier.</li>
          <li>Acknowledge the physical and biological testing differences between <strong>Chemical Semi-Solids, Metallic Passive Implants</strong>, and <strong>Active Electrical Devices</strong>.</li>
          <li>Draft generic compliance strategies based on product contacting pathways, energy consumption, and structural composition.</li>
          <li>Conduct a standard <strong>State of the Art (SOTA)</strong> audit and explain standard transition grace periods.</li>
          <li>Establish a continuous QMS gap-analysis workflow to prevent automatic audit rejections of your technical dossiers.</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3" id="standards-directory">
        <Layers className="w-7 h-7 text-indigo-600" />
        31.1 The Seven Must-Have Standards Directory
      </h3>
      <p>
        During a technical file audit, there are <strong>seven critical dimensions of safety</strong> that regulatory bodies (such as the EU Notified Bodies, US FDA, or India's CDSCO) demand. For each dimension, a primary consensus standard exists, surrounded by an active network of highly specialized related standards.
      </p>

      {/* Interactive Tabs for the 7 Must-Have Categories */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-8">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">SELECT A STANDARD DOMAIN</span>
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(standardsData).map((key) => {
            const Icon = standardsData[key as keyof typeof standardsData].icon;
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm border ${
                  isSelected 
                    ? 'bg-indigo-600 text-white border-indigo-600 scale-105' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {key.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Selected Tab Content */}
        {(() => {
          const selected = standardsData[activeTab as keyof typeof standardsData];
          const IconComponent = selected.icon;
          return (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg border ${selected.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 m-0">{selected.title}</h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider m-0">Consensus Standards Network</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                "{selected.desc}"
              </p>

              {/* Primary Standard Card */}
              <div className="border border-indigo-100 rounded-xl bg-indigo-50/30 p-5 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded">PRIMARY CONSENSUS PATHWAY</span>
                  <span className="text-xs font-bold text-slate-400 uppercase">State of the Art</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mt-0 mb-2">{selected.primary.code}</h4>
                <p className="text-sm font-semibold text-slate-700 mb-2">{selected.primary.name}</p>
                <p className="text-sm text-slate-600 m-0 leading-relaxed"><strong className="text-indigo-950">Technical Scope:</strong> {selected.primary.scope}</p>
              </div>

              {/* Related Standards Section */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-500" />
                  Related & Supporting Standards
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selected.related.map((item, index) => (
                    <div key={index} className="bg-slate-50/50 hover:bg-slate-50 p-4 rounded-xl border border-slate-150 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-xs font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">{item.code}</span>
                      </div>
                      <h5 className="text-xs font-bold text-slate-900 m-0 mb-1 leading-tight">{item.name}</h5>
                      <p className="text-xs text-slate-600 m-0 leading-normal">{item.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* SECTION 31.1.1: ELABORATED GENERIC CATEGORIES DESIGN */}
      <h3 className="text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3" id="generic-categories">
        <Cpu className="w-7 h-7 text-indigo-600" />
        31.2 Analysis of Broad Product Categories
      </h3>
      <p>
        Rather than studying narrow, isolated medical devices, modern regulatory engineers classify designs into **three broad product domains**. Understanding these generic classes allows regulatory professionals to predict audit requirements for entire families of devices:
      </p>

      {/* Interactive Tabs for the Three Broad Product Domains */}
      <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-5 my-8">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-3">SELECT A BROAD MEDICAL DEVICE CATEGORY</span>
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          {Object.keys(CATEGORIES_MAPPING).map((key) => {
            const isSelected = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex-1 text-left p-4 rounded-xl border transition-all shadow-sm ${
                  isSelected 
                    ? 'bg-indigo-900 text-white border-indigo-900 scale-102' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {key === 'chemical' && <Activity className="w-5 h-5 text-indigo-500 shrink-0" />}
                  {key === 'metallic' && <Layers className="w-5 h-5 text-emerald-500 shrink-0" />}
                  {key === 'active' && <Zap className="w-5 h-5 text-amber-500 shrink-0" />}
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {key === 'chemical' && "Category A"}
                    {key === 'metallic' && "Category B"}
                    {key === 'active' && "Category C"}
                  </span>
                </div>
                <h4 className={`text-sm font-extrabold m-0 leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {key === 'chemical' && "Chemical & Topical Semi-Solids"}
                  {key === 'metallic' && "Metallic Structural Passive Implants"}
                  {key === 'active' && "Active Electrical & Imaging Systems"}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        {(() => {
          const cat = CATEGORIES_MAPPING[selectedCategory];
          return (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mt-0 mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                {cat.desc}
              </p>

              <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b pb-2">
                <FileSpreadsheet className="w-4 h-4" />
                {cat.testingTitle}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.points.map((point: any, index: number) => (
                  <div key={index} className="border border-slate-150 p-4 rounded-lg hover:shadow-md transition-all">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded inline-block mb-2">TESTING DOMAIN {index + 1}</span>
                    <h5 className="text-sm font-extrabold text-slate-900 m-0 mb-1">{point.title}</h5>
                    <p className="text-xs text-slate-600 m-0 leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      <h3 className="text-2xl font-bold mt-12 mb-4 pb-2 border-b-2 border-slate-200 text-slate-800 flex items-center gap-3" id="sota-imperative">
        <TrendingUp className="w-7 h-7 text-indigo-600" />
        31.3 The State-of-the-Art (SOTA) & Latest Version Imperative
      </h3>
      <p>
        In medical device regulatory compliance, static knowledge is obsolete knowledge. Regulatory frameworks like <strong>EU MDR 2017/745</strong> and <strong>US FDA guidelines</strong> do not merely request adherence to standards; they mandate that manufacturers apply the <strong>"State of the Art" (SOTA)</strong>.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6">
        <h4 className="text-red-900 font-bold mt-0 mb-2 flex items-center gap-2 text-base">
          <AlertTriangle className="w-5 h-5 text-red-600" />
          The Legal Consequences of Standard Obsolescence
        </h4>
        <p className="text-sm text-red-800 m-0 leading-relaxed mb-2">
          When a standard is updated by ISO or IEC, the older version does not instantly become illegal, but its regulatory utility begins a countdown. <strong>A standard transition grace period</strong> (typically 3 years) is initiated. Once this transition window closes:
        </p>
        <ul className="text-sm text-red-800 space-y-1 pl-5 list-disc mt-0 mb-0">
          <li><strong>Presumption of Conformity is Nullified:</strong> If you submit a technical dossier relying on an expired standard (e.g., using ISO 14971:2007 instead of ISO 14971:2019), the regulator legally assumes your device is <strong>not compliant</strong>.</li>
          <li><strong>Automatic Audit Failures:</strong> Notified Bodies and government inspectors will reject the Technical File, halting active device registration or initiating an immediate commercial market suspension.</li>
          <li><strong>Audit Gap Analysis Obligation:</strong> If your active device is registered under an older standard, you must draft a detailed "Gap Analysis Report" comparing the old and new versions, proving that the updates do not introduce new, unmitigated safety hazards.</li>
        </ul>
      </div>

      {/* Core Rules to Always Use the Latest Versions */}
      <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3">Best-Practice Protocol to Ensure SOTA Compliance</h4>
      <p>
        Every medical device manufacturer's QMS must contain a written procedure to monitor and implement standard revisions. This protocol incorporates three baseline steps:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white font-mono text-xs font-bold px-2 py-0.5 rounded shadow">STEP 1</div>
          <h5 className="font-bold text-slate-800 mt-2 mb-2">Regular Database Audits</h5>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            Quarterly, QMS officers must cross-reference referenced standards against the <strong>US FDA Recognized Consensus Standards Database</strong> and the <strong>EU Official Journal (OJEU)</strong> for updated Harmonized Standard indexes.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white font-mono text-xs font-bold px-2 py-0.5 rounded shadow">STEP 2</div>
          <h5 className="font-bold text-slate-800 mt-2 mb-2">Immediate Gap Analysis</h5>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            The moment a revised standard is published (e.g. ISO 10993-17:2023), engineering teams must catalog every new requirement, testing metric, or document template adjustment.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl relative">
          <div className="absolute -top-3 left-4 bg-indigo-600 text-white font-mono text-xs font-bold px-2 py-0.5 rounded shadow">STEP 3</div>
          <h5 className="font-bold text-slate-800 mt-2 mb-2">Update Technical Dossiers</h5>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            Implement test protocol changes in the production line, re-verify biocompatibility or packaging seals as required, update labels with new symbols, and update the Essential Requirements Checklist.
          </p>
        </div>
      </div>

      {/* Interactive SOTA Standard Version Audit Tool */}
      <div className="bg-indigo-950 text-white rounded-2xl p-6 my-8 shadow-lg border border-indigo-800 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <RefreshCw className="w-6 h-6 text-indigo-300 animate-spin-slow" />
          <div>
            <h3 className="text-lg font-bold text-white m-0">Interactive Standard SOTA Validator</h3>
            <p className="text-xs text-indigo-200 m-0">Audit your current design file citations to prevent automatic regulatory rejections</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-indigo-900/60 p-5 rounded-xl border border-indigo-800/80 mb-6 text-sm">
          {/* Select Standard */}
          <div>
            <label className="block text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">1. Select Referenced Standard</label>
            <select
              value={selectedAuditStandard}
              onChange={(e) => {
                setSelectedAuditStandard(e.target.value);
                // Set default year for the selected standard to prevent bugs
                if (e.target.value === 'qms_13485') setReferencedYear('2016');
                else if (e.target.value === 'risk_14971') setReferencedYear('2019');
                else if (e.target.value === 'bio_10993_10') setReferencedYear('2021');
                else if (e.target.value === 'label_15223') setReferencedYear('2021');
              }}
              className="w-full bg-indigo-950 text-white border border-indigo-700 rounded-lg p-2 font-medium focus:outline-none focus:border-indigo-400"
            >
              <option value="qms_13485">ISO 13485 (Quality Management System)</option>
              <option value="risk_14971">ISO 14971 (Risk Management Process)</option>
              <option value="bio_10993_10">ISO 10993-10 (Sensitization/Irritation)</option>
              <option value="label_15223">ISO 15223-1 (Regulatory Label Symbols)</option>
            </select>
          </div>

          {/* Select Year */}
          <div>
            <label className="block text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">2. Enter Referenced Standard Year</label>
            <select
              value={referencedYear}
              onChange={(e) => setReferencedYear(e.target.value)}
              className="w-full bg-indigo-950 text-white border border-indigo-700 rounded-lg p-2 font-medium focus:outline-none focus:border-indigo-400"
            >
              {selectedAuditStandard === 'qms_13485' && (
                <>
                  <option value="1996">1996 (Legacy ISO 13485)</option>
                  <option value="2003">2003 (Obsolete ISO 13485)</option>
                  <option value="2016">2016 (Current SOTA ISO 13485)</option>
                </>
              )}
              {selectedAuditStandard === 'risk_14971' && (
                <>
                  <option value="2007">2007 (Obsolete ISO 14971)</option>
                  <option value="2012">2012 (EN Standard ISO 14971)</option>
                  <option value="2019">2019 (Current SOTA ISO 14971)</option>
                </>
              )}
              {selectedAuditStandard === 'bio_10993_10' && (
                <>
                  <option value="2010">2010 (Obsolete ISO 10993-10)</option>
                  <option value="2021">2021 (Current SOTA ISO 10993-10)</option>
                </>
              )}
              {selectedAuditStandard === 'label_15223' && (
                <>
                  <option value="2012">2012 (Obsolete ISO 15223-1)</option>
                  <option value="2016">2016 (Expired ISO 15223-1)</option>
                  <option value="2021">2021 (Current SOTA ISO 15223-1)</option>
                </>
              )}
            </select>
          </div>

          {/* Status Badge */}
          <div className="flex flex-col justify-center font-sans">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block mb-1 font-mono">3. Compliance Status</span>
            <div className="flex items-center gap-2 mt-1">
              {currentAuditResult?.status?.includes('Active') ? (
                <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1.5 rounded-lg font-bold text-xs">
                  <CheckCircle className="w-4 h-4 animate-pulse" /> STATE OF THE ART
                </span>
              ) : (
                <span className="flex items-center gap-1.5 bg-red-500/20 text-red-400 border border-red-500/40 px-3 py-1.5 rounded-lg font-bold text-xs animate-pulse">
                  <XCircle className="w-4 h-4" /> OBSOLETE CITATION
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Audit Details */}
        {currentAuditResult && (
          <div className="bg-indigo-950/80 border border-indigo-800 rounded-xl p-5 text-sm">
            <div className="flex items-center justify-between mb-3 border-b border-indigo-800 pb-2">
              <span className="font-bold text-white flex items-center gap-1.5 font-mono text-xs">
                <FileCheck className="w-4 h-4 text-indigo-300" />
                Detailed Audit Log: {sotaAuditData[selectedAuditStandard]?.standard}:{referencedYear}
              </span>
              <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded font-mono ${
                currentAuditResult.threat === 'None' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
              }`}>
                Regulatory Risk: {currentAuditResult.threat}
              </span>
            </div>
            <p className="text-indigo-200 m-0 leading-relaxed text-xs"><strong className="text-white">Audit Finding:</strong> {currentAuditResult.reason}</p>
            {currentAuditResult.threat !== 'None' && (
              <div className="mt-4 bg-red-500/15 border border-red-500/30 p-3 rounded-lg text-xs flex items-start gap-2 font-sans">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-red-200">
                  <strong>Urgent Action Required:</strong> Update the Technical File, change standard callouts on packaging artwork, revise Section 5 of the IFU, and complete a formal gap-analysis mapping document before submitting files to the Notified Body.
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SOTA Timelines and Quick-Reference Table */}
      <h4 className="text-lg font-bold text-slate-800 mt-8 mb-4">Latest Standard Release & Expired-Transition Quick-Reference Table</h4>
      <div className="overflow-x-auto my-6 border border-slate-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-xs">
          <thead className="bg-slate-50 font-bold text-slate-700">
            <tr>
              <th className="px-4 py-3 text-left">Standard Citation</th>
              <th className="px-4 py-3 text-left">Latest SOTA Version</th>
              <th className="px-4 py-3 text-left">Obsolete Prior Version</th>
              <th className="px-4 py-3 text-left">Transition Window Closed Date</th>
              <th className="px-4 py-3 text-left">Regulatory Presumption of Conformity Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900">Quality Management (QMS)</td>
              <td className="px-4 py-3 font-mono text-emerald-600 font-bold">ISO 13485:2016</td>
              <td className="px-4 py-3 font-mono">ISO 13485:2003</td>
              <td className="px-4 py-3 text-red-500 font-bold">March 2019</td>
              <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Expired (Immediate Rejection)</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900">Risk Management</td>
              <td className="px-4 py-3 font-mono text-emerald-600 font-bold">ISO 14971:2019</td>
              <td className="px-4 py-3 font-mono">ISO 14971:2007</td>
              <td className="px-4 py-3 text-red-500 font-bold">May 2022</td>
              <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Expired (Immediate Rejection)</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900">Skin Sensitization</td>
              <td className="px-4 py-3 font-mono text-emerald-600 font-bold">ISO 10993-10:2021</td>
              <td className="px-4 py-3 font-mono">ISO 10993-10:2010</td>
              <td className="px-4 py-3 text-red-500 font-bold">November 2024</td>
              <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Expired (Immediate Rejection)</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900">Skin Irritation</td>
              <td className="px-4 py-3 font-mono text-emerald-600 font-bold">ISO 10993-23:2021</td>
              <td className="px-4 py-3 font-mono">N/A (Previously under Part 10)</td>
              <td className="px-4 py-3 text-red-500 font-bold">November 2024</td>
              <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Expired (Immediate Rejection)</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900">Labeling Symbols</td>
              <td className="px-4 py-3 font-mono text-emerald-600 font-bold">ISO 15223-1:2021</td>
              <td className="px-4 py-3 font-mono">ISO 15223-1:2016</td>
              <td className="px-4 py-3 text-red-500 font-bold">August 2024</td>
              <td className="px-4 py-3"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold">Expired (Immediate Rejection)</span></td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-slate-900">Toxicological Assessment</td>
              <td className="px-4 py-3 font-mono text-emerald-600 font-bold">ISO 10993-17:2023</td>
              <td className="px-4 py-3 font-mono">ISO 10993-17:2002</td>
              <td className="px-4 py-3 text-amber-600 font-bold">December 2026</td>
              <td className="px-4 py-3"><span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold">Grace Period (Closing Soon)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Chapter Summary box */}
      <div className="bg-indigo-900 text-white rounded-xl p-6 mt-8 shadow-md not-prose">
        <h4 className="text-xl font-bold mt-0 mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-indigo-300" />
          Summary of Standards Applicability
        </h4>
        <p className="text-indigo-100 text-sm leading-relaxed mb-4">
          Remember this absolute rule of medical device technical file engineering: <strong>Consensus standards are the dynamic core of safety evidence</strong>. Classifying your device family into one of our three generic categories—Topical/Chemical Semi-Solids, Metallic Passive Implants, or Active Electrical/Imaging systems—enables a unified and robust strategy to compile compliant documentation globally.
        </p>
        <div className="border-t border-indigo-800 pt-4 text-xs font-mono text-indigo-200">
          State-of-the-Art Directive: Never submit a technical file draft to an auditor without double-checking the FDA unrecognized consensus standard registry and verifying your publication revision years!
        </div>
      </div>

    </div>
  );
}
