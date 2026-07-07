/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FMEARow, TraceabilityNode, ValidationStep, PMSScenario } from '../types';

export interface StoryPhase {
  number: number;
  title: string;
  subtitle: string;
  narration: string[];
  learningObjectives: string[];
  internAssignment: string;
}

export const STORY_PHASES: StoryPhase[] = [
  {
    number: 1,
    title: 'The Spark: Concept & Classification',
    subtitle: 'From a Clinical Crisis to a Class D Project',
    narration: [
      'Welcome to RAC Forge Private Limited. Today, your journey as a Regulatory and Design Control specialist begins.',
      'Our client has approached us with a concept: "ForgeFlow DES" – a Drug-Eluting Coronary Stent designed to treat stenotic coronary arteries. In simple terms, patients have clogged heart arteries, causing chest pain and heart attacks. This mesh tube is inserted to push open the artery, while slowly releasing a drug to prevent the artery from scarring shut again.',
      'Before writing a single specification, we must determine the Regulatory Classification. Under Global Harmonization Task Force (GHTF) and EU MDR rules, medical devices are classified by risk from Class A (lowest, e.g., band-aids) to Class D / Class III (highest risk, e.g., implantable pacemakers, coronary stents, heart valves).',
      'Because "ForgeFlow DES" is a permanent implant, in direct contact with the coronary bloodstream, and incorporates an active pharmaceutical ingredient (Sirolimus), it is a CLASS D (High Risk) device. This means we are subject to the absolute highest tier of clinical trials, quality system audits, biocompatibility evaluations, and rigorous post-market reporting. Almost no exemption applies.'
    ],
    learningObjectives: [
      'Understand the 4 regulatory classes of medical devices (A, B, C, D) based on invasiveness and contact duration.',
      'Define the concept of "Intended Use" and "Indications for Use" for high-risk devices.',
      'Recognize why drug-device combination products trigger Class D requirements.'
    ],
    internAssignment: 'Review the intended use and classification criteria. Select our case study product parameters to initiate the design control chain.'
  },
  {
    number: 2,
    title: 'The Vessel: Biocompatibility Evaluation (ISO 10993)',
    subtitle: 'Choosing Materials and Biological Safety Profiles',
    narration: [
      'Our stent sits directly in the patient’s coronary artery, washed by blood, forever. If the material releases toxic substances, triggers an allergic reaction, or causes blood clotting, the patient could die instantly from a heart attack.',
      'Under ISO 10993-1:2018 (the global standard for biological evaluation of medical devices), we do not just jump into animal testing. We start with a Biocompatibility Evaluation Plan (BEP), characterizing our materials, determining tissue contact categories, and outlining necessary testing.',
      'ForgeFlow DES is classified as an IMPLANT device contacting CIRCULATING BLOOD with a LONG-TERM DURATION (>30 days). Looking at the ISO 10993-1 matrix, this triggers almost all 13 biological endpoints, including Cytotoxicity, Sensitization, Intracutaneous Reactivity, Hemocompatibility, Genotoxicity, Implantation effects, and Chronic Toxicity.',
      'Let’s inspect our materials: a Cobalt-Chromium alloy (structural mesh), a biodegradable PLGA polymer, and Sirolimus (the drug). Every single ingredient, including residual solvents from manufacturing, must undergo chemical characterization (ISO 10993-18) and biological safety assessment.'
    ],
    learningObjectives: [
      'Apply ISO 10993-1 to categorize devices by contact type and duration.',
      'Identify the 13 biological evaluation endpoints required for permanent cardiovascular implants.',
      'Understand the role of Chemical Characterization (Extractables & Leachables) under ISO 10993-18 in reducing animal testing.'
    ],
    internAssignment: 'Use the Biocompatibility Assessment Tool to build the test plan for the ForgeFlow DES, map the required biological tests, and analyze material risk profiles.'
  },
  {
    number: 3,
    title: 'The Forge: Design Controls & DHF (ISO 13485)',
    subtitle: 'Building the Design History File (DHF) Traceability Matrix',
    narration: [
      'Regulatory authorities do not just inspect the final product; they inspect the entire history of how it was designed. This is called the Design History File (DHF), regulated under FDA 21 CFR 820.30 and ISO 13485.',
      'The golden thread of design controls is Traceability. It is a strict rule: every User Need must link to a Design Input, which must link to a Design Output, which must be verified by a Design Verification test, and validated by a Design Validation protocol.',
      'Let’s break it down: A physician says, "The stent must not collapse under arterial pressure" (User Need). We translate this to an engineering requirement: "The radial collapse pressure must be greater than 1.5 atm" (Design Input). Our engineering drawing specifies a "strut thickness of 80 microns and cobalt-chromium L605" (Design Output). We prove this mathematically and physically on a bench tester (Design Verification). Finally, we implant it in human clinical trials to prove it works in real patients (Design Validation).',
      'If you have a gap in this chain – for example, an input with no verification test, or a user need with no validation – you cannot get regulatory approval. A missing link represents a potential unmanaged failure in the patient’s heart.'
    ],
    learningObjectives: [
      'Differentiate between Design Verification (did we make the device right? - bench testing) and Design Validation (did we make the right device? - clinical/animal testing).',
      'Map the structure of a Design History File (DHF) and understand its compliance importance.',
      'Analyze and construct a comprehensive Traceability Matrix.'
    ],
    internAssignment: 'Audit our initial Design Traceability Matrix. Identify trace errors or missing verification protocols, and construct a valid trace link for a drug delivery requirement.'
  },
  {
    number: 4,
    title: 'The Shield: Risk Analysis & FMEA (ISO 14971)',
    subtitle: 'Assessing Hazards, Mitigations, and Residual Risks',
    narration: [
      'In Class D medical devices, risk management is not an afterthought; it drives the entire design. We follow ISO 14971, the global standard for medical device risk management.',
      'We perform a Failure Mode and Effects Analysis (FMEA). We identify what could go wrong (Hazards), rate the probability of it occurring (Occurrence, 1-5), and rate how bad the injury would be (Severity, 1-5). High-severity items for stents include "Stent Thrombosis" (the stent causes a massive clot, blocking the artery – Severity 5, Catastrophic) and "Stent Fracture" (the metal snaps under the heart’s constant beating – Severity 5).',
      'If the raw risk score is too high, we must apply Risk Controls. The order of control is strictly defined: 1. Design inherently safe (e.g., thicker struts, electropolished edges), 2. Protective measures (e.g., inline manufacturing sensors), and 3. Information for safety (e.g., instructions for use warning against using in small vessels).',
      'After applying controls, we recalculate the Occurrence and Severity to determine the Residual Risk. The ultimate goal: all residual risks must be reduced to an Acceptable level (usually in the green zone), and we must prove the overall benefit of the device outweighs any remaining risk.'
    ],
    learningObjectives: [
      'Apply ISO 14971 risk management principles to high-risk medical devices.',
      'Calculate Risk Priority Numbers (RPN) and construct a 5x5 Medical Device Risk Heat Matrix.',
      'Implement the regulatory hierarchy of risk control (Design -> Manufacture -> Information).'
    ],
    internAssignment: 'Evaluate the pre-mitigation risk levels on our Risk Board. Select engineering and manufacturing controls to mitigate stent hazards, and verify the resulting 5x5 residual risk heatmap.'
  },
  {
    number: 5,
    title: 'The Gateway: Design Transfer & Production',
    subtitle: 'From Lab Bench to Cleanroom Manufacturing (IQ/OQ/PQ)',
    narration: [
      'Having a perfect prototype in the lab is only half the battle. Now, we must transfer the design to manufacturing. This is Design Transfer, where the DHF converts into the Device Master Record (DMR) – the absolute cookbook for making the device.',
      'In medical device manufacturing, we cannot just rely on inspecting the final stent. Why? Because you cannot test the drug coating weight, the sterility, or the radial fatigue on a stent and then sell it. These tests are destructive. Therefore, we must validate the processes.',
      'We use a 3-tier validation framework: Installation Qualification (IQ - is the machine installed correctly?), Operational Qualification (OQ - does it run correctly at all speed/temperature limits?), and Performance Qualification (PQ - does it consistently produce safe, sterile products over multiple shifts?).',
      'For Class D products, sterilization validation (typically using Ethylene Oxide gas) is critical. We must prove a Sterility Assurance Level (SAL) of 10^-6, meaning there is less than a one-in-a-million chance of a micro-organism surviving on the stent.'
    ],
    learningObjectives: [
      'Explain the purpose of Design Transfer and the transition from DHF to DMR/DHR.',
      'Differentiate between Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ) in process validation.',
      'Understand sterilization validation standards (ISO 11135 for EtO) and the concept of Sterility Assurance Level (SAL).'
    ],
    internAssignment: 'Review the Design Transfer checklist and process validation protocols (IQ/OQ/PQ). Complete validation runs on the Stent Crimping and Drug Spraying equipment to authorize production.'
  },
  {
    number: 6,
    title: 'The Horizon: Post-Market Surveillance (PMS)',
    subtitle: 'Real-World Performance and Clinical Vigilance',
    narration: [
      'The journey does not end when the stent is sold. In fact, for a Class D device, the regulatory workload remains intense forever. Once the device is in the real world, we initiate Post-Market Surveillance (PMS).',
      'No clinical trial, no matter how large, can detect a rare 1-in-10,000 side effect. PMS acts as an early warning system. It consists of Active PMS (proactively tracking clinical registries, literature reviews, and Post-Market Clinical Follow-up (PMCF) studies) and Passive PMS (monitoring customer complaints and adverse event reports).',
      'If we detect an increase in a hazard (e.g., if stent fracture occurs more often than predicted in our risk file), we must update our risk assessment, launch a Corrective and Preventive Action (CAPA), and potentially issue a Field Safety Corrective Action (FSCA / Recall).',
      'For Class D devices, we are required to produce a Periodic Safety Update Report (PSUR) annually, summarizing all safety findings for the Notified Body and health ministries.'
    ],
    learningObjectives: [
      'Understand the regulatory mandate of Post-Market Surveillance (PMS) and its components under EU MDR / FDA guidelines.',
      'Learn how to manage, investigate, and report customer complaints and adverse events (Vigilance).',
      'Differentiate between Active and Passive surveillance, and define Post-Market Clinical Follow-up (PMCF).'
    ],
    internAssignment: 'Act as the Lead Vigilance Officer. Investigate post-market safety complaint scenarios, analyze trends, select the appropriate CAPA/FSCA corrective actions, and submit safety files.'
  }
];

export const INITIAL_TRACEABILITY_NODES: TraceabilityNode[] = [
  // Core Stent Expansion Needs
  {
    id: 'UN-001',
    label: 'UN-001: Mechanical Expansion',
    type: 'user_need',
    description: 'The stent must reliably dilate narrowed coronary arteries to restore coronary blood flow (myocardial perfusion).',
    status: 'draft'
  },
  {
    id: 'DI-001',
    label: 'DI-001: Radial Strength Specs',
    type: 'design_input',
    description: 'Stent must possess sufficient radial strength to resist arterial recoil, with a chronic outward force exceeding 1.2 atm.',
    parentId: 'UN-001',
    status: 'draft'
  },
  {
    id: 'DO-001',
    label: 'DO-001: Strut Mesh Design',
    type: 'design_output',
    description: 'Strut geometry set to an open-cell, sinusoidal pattern with a strut thickness of 80 μm made of L605 Cobalt-Chromium.',
    parentId: 'DI-001',
    status: 'draft'
  },
  {
    id: 'DVE-001',
    label: 'DVE-001: Radial Compression Test',
    type: 'verification',
    description: 'Bench-top mechanical crush test to verify chronic outward force and radial strength on 30 sterilized samples.',
    parentId: 'DO-001',
    status: 'draft'
  },
  {
    id: 'DVA-001',
    label: 'DVA-001: Pig Coronary Study',
    type: 'validation',
    description: 'In vivo porcine coronary artery safety study (28-day implant) measuring vascular patency and stent positioning via angiogram.',
    parentId: 'DVE-001',
    status: 'draft'
  },

  // Drug-Eluting Delivery Needs
  {
    id: 'UN-002',
    label: 'UN-002: Restenosis Prevention',
    type: 'user_need',
    description: 'The stent must inhibit local scar tissue growth (neointimal hyperplasia) to keep the artery from re-clogging over time.',
    status: 'draft'
  },
  {
    id: 'DI-002',
    label: 'DI-002: Drug Elution Kinetics',
    type: 'design_input',
    description: 'Drug-polymer coating must release Sirolimus gradually over 30 days, delivering a total dose of 1.0 μg/mm² of stent area.',
    parentId: 'UN-002',
    status: 'draft'
  },
  {
    id: 'DO-002',
    label: 'DO-002: PLGA & Sirolimus Coating',
    type: 'design_output',
    description: 'Coating comprised of a 50:50 ratio of Sirolimus drug to Resomer RG 502 H PLGA polymer, with an average coating thickness of 5 μm.',
    parentId: 'DI-002',
    status: 'draft'
  },
  {
    id: 'DVE-002',
    label: 'DVE-002: In Vitro Drug Release Assay',
    type: 'verification',
    description: 'High-Performance Liquid Chromatography (HPLC) assay to verify drug content and daily release rate in simulated serum over 30 days.',
    parentId: 'DO-002',
    status: 'draft'
  },
  {
    id: 'DVA-002',
    label: 'DVA-002: Clinical Trial (Pivotal Study)',
    type: 'validation',
    description: 'Multicenter randomized clinical trial of 500 patients measuring Target Lesion Revascularization (TLR) rate and late lumen loss at 9 months.',
    parentId: 'DVE-002',
    status: 'draft'
  }
];

export const INITIAL_FMEA_ROWS: FMEARow[] = [
  {
    id: 'HAZ-001',
    hazard: 'Stent Thrombosis (Clotting)',
    category: 'Biological/Sterility',
    description: 'The metal struts of the stent trigger rapid blood platelet adhesion, forming a clot that blocks the artery, causing acute myocardial infarction (heart attack).',
    potentialHarm: 'Acute vessel occlusion, heart attack, cardiogenic shock, patient death.',
    preOccurrence: 4, // Frequent/Likely prior to design mitigations
    preSeverity: 5, // Catastrophic
    mitigationControls: [
      'Apply passive phosphorylcholine biomimetic coating to mask metal alloy from circulating blood platelets.',
      'Deliver active Sirolimus drug to reduce initial local vascular inflammatory cell migration.',
      'Mandate dual antiplatelet therapy (DAPT) in Instructions for Use (IFU) for a minimum of 12 months post-procedure.'
    ],
    selectedMitigations: [],
    postOccurrence: 1, // Reduced to extremely rare
    postSeverity: 5 // Severity remains critical, but risk level drops from unacceptable to acceptable due to occurrence drop
  },
  {
    id: 'HAZ-002',
    hazard: 'Stent Fatigue Fracture',
    category: 'Mechanical',
    description: 'Repeated mechanical stress from the heartbeat (approx. 40 million cycles per year) causes metal fatigue, leading to strut fracture.',
    potentialHarm: 'Arterial vessel wall perforation, local tissue dissection, thrombus trigger, emergency bypass surgery.',
    preOccurrence: 3, // Occasional
    preSeverity: 5, // Catastrophic
    mitigationControls: [
      'Transition structural core from 316L Stainless Steel to L605 Cobalt-Chromium for 50% higher tensile strength and fatigue limit.',
      'Enforce rounding and electropolishing of all stent strut edges during laser-cutting to remove micro-stress-concentrators.',
      'Perform accelerated fatigue bench testing up to 400 million cycles (representing a 10-year lifespan).'
    ],
    selectedMitigations: [],
    postOccurrence: 1,
    postSeverity: 5
  },
  {
    id: 'HAZ-003',
    hazard: 'Drug Toxicity/Overdose',
    category: 'Chemical/Toxicological',
    description: 'Excessive release or local pooling of Sirolimus drug due to rapid polymer coating degradation or incorrect formulation.',
    potentialHarm: 'Vascular endothelial cell death, severe inflammatory tissue response, prolonged arterial healing, aneurysm formation.',
    preOccurrence: 3,
    preSeverity: 4, // Critical
    mitigationControls: [
      'Control molecular weight and ester-capping of the Resomer PLGA polymer to maintain a linear, slow degradation profile.',
      'Implement 100% automated inline optical scanning of spray-coating uniformity during production.',
      'Perform chemical characterization of degradation products to confirm no toxic metabolites (ISO 10993-9).'
    ],
    selectedMitigations: [],
    postOccurrence: 1,
    postSeverity: 4
  },
  {
    id: 'HAZ-004',
    hazard: 'Coating Delamination / Peeling',
    category: 'Manufacturing',
    description: 'Drug-polymer coating peels or shears off during stent expansion and deployment inside the high-pressure calcified artery.',
    potentialHarm: 'Micro-particle embolization down the bloodstream, causing micro-strokes; focal loss of drug delivery causing restenosis.',
    preOccurrence: 3,
    preSeverity: 3, // Moderate
    mitigationControls: [
      'Apply an ultra-thin, covalent primer coating (silane coupling agent) to the metal surface prior to spray coating to optimize adhesion.',
      'Enforce tight temperature and humidity limits during the drying process to prevent polymer thermal cracking.',
      'Simulate high-tortuosity arterial deployment on a silicon model bench-test to verify coating adhesion integrity.'
    ],
    selectedMitigations: [],
    postOccurrence: 1,
    postSeverity: 3
  },
  {
    id: 'HAZ-005',
    hazard: 'Device Non-Sterility',
    category: 'Biological/Sterility',
    description: 'Pathogens survive the sterilization process or enter through damaged packaging, leading to local or systemic patient infection.',
    potentialHarm: 'Purulent endocarditis, sepsis, arterial infection, high mortality.',
    preOccurrence: 3,
    preSeverity: 5, // Catastrophic
    mitigationControls: [
      'Validate Ethylene Oxide (EtO) sterilization cycle (ISO 11135) to guarantee a Sterility Assurance Level (SAL) of 10^-6.',
      'Utilize double-barrier Tyvek medical packaging and conduct ISO 11607 transit and accelerated shelf-life testing.',
      'Enforce strict bioburden monitoring of cleanroom air, water, and staff before sterilization runs.'
    ],
    selectedMitigations: [],
    postOccurrence: 1,
    postSeverity: 5
  }
];

export const INITIAL_VALIDATION_STEPS: ValidationStep[] = [
  {
    id: 'VAL-001',
    stage: 'IQ',
    processName: 'Stent Laser Cutting System Installation',
    description: 'Verify that the automated fiber laser cutting system is installed, powered, and connected with proper gas lines (argon shield) per manufacturer technical documents.',
    acceptanceCriteria: 'Laser system calibrated within ±1 μm. Argon gas pressure maintained at 4.2 ± 0.2 bar. Emergency shutoff safety circuits fully functional.',
    protocolTemplate: 'INSTALLATION QUALIFICATION (IQ) RECORD\nEquipment ID: LASER-CUT-01\nFacility: Cleanroom Class 7\n1. Verification of Utilities: Confirm 220V stable power and ultra-high-purity Argon gas supply.\n2. Environmental Check: Ensure ambient temperature is 21°C ± 2°C and humidity < 50%.\n3. Software Version: Confirm firmware v4.12.3 is locked and verified.',
    isCompleted: false,
    notes: ''
  },
  {
    id: 'VAL-002',
    stage: 'OQ',
    processName: 'Drug Spray-Coating Parameters Range Run',
    description: 'Determine the operational limits of the atomizing spray nozzles (nozzle pressure, scan speed, flow rate) to find the window that yields a consistent coating thickness of 5 μm ± 1 μm.',
    acceptanceCriteria: 'Produce 3 experimental batches at high/low parameter limits. All stents must show zero dry-spray defects and coating weight must fall between 150-180 μg.',
    protocolTemplate: 'OPERATIONAL QUALIFICATION (OQ) RECORD\nProcess ID: COAT-SPRAY-04\n1. Extreme Parameter Challenges: Test lower limit (Nozzle flow 2.5 μl/s, Speed 15 mm/s) and upper limit (Nozzle flow 3.5 μl/s, Speed 25 mm/s).\n2. Coating Uniformity: 10 units analyzed per run via electron microscopy.\n3. Defect Analysis: Must contain < 1% webbing or orange-peel micro-defects.',
    isCompleted: false,
    notes: ''
  },
  {
    id: 'VAL-003',
    stage: 'PQ',
    processName: 'Stent Crimping & Delivery Balloon Packaging Consistencies',
    description: 'Verify that the manufacturing line consistently produces safe, defect-free catheter-crimped stents across three consecutive full-scale production shifts.',
    acceptanceCriteria: 'Zero stent slippage off the balloon during simulated vascular delivery tracking. 100% of 90 total samples meet profile specifications of < 1.05 mm diameter.',
    protocolTemplate: 'PERFORMANCE QUALIFICATION (PQ) RECORD\nProcess ID: CRIMP-PKG-02\n1. Multi-shift Run: Produce 30 units on Shift A (morning), 30 units on Shift B (evening), and 30 units on Shift C (night).\n2. Operator Variation: Three certified operators must conduct independent runs.\n3. Catheter Pull-force test: Retention force of stent on balloon must exceed 1.5 N.',
    isCompleted: false,
    notes: ''
  }
];

export const PMS_SCENARIOS: PMSScenario[] = [
  {
    id: 'PMS-001',
    title: 'Vascular Safety Signal: Sudden Restenosis Trend',
    source: 'Literature Review',
    description: 'A newly published clinical paper in the "Journal of Interventional Cardiology" reports a cohort of 82 patients implanted with our drug-eluting stent. It highlights an unexpected late-lumen loss and restenosis rate of 9.2% at 18 months, which is significantly higher than our clinical trial rate of 3.4%.',
    reportedEvent: 'Patient vascular re-narrowing requiring secondary catheter balloon procedures (Target Lesion Revascularization).',
    frequencyTrend: 'increasing',
    severityLevel: 'serious',
    correctiveActionOptions: [
      {
        id: 'opt1_1',
        label: 'Acknowledge paper & continue routine passive monitoring',
        effectiveness: 'low',
        cost: 'low',
        regulatoryImpact: 'High risk of regulatory citation. Ignoring clinical literature signals violates EU MDR Article 83 and FDA requirements.',
        rationale: 'Passive observation is insufficient when a published peer-reviewed study demonstrates statistically significant deviations from design input specs.'
      },
      {
        id: 'opt1_2',
        label: 'Launch CAPA to audit drug-loading manufacturing records & analyze polymer coating degradation speed',
        effectiveness: 'high',
        cost: 'medium',
        regulatoryImpact: 'Excellent compliance. Demonstrates proactive post-market risk management and state-of-the-art product safety control.',
        rationale: 'A CAPA will investigate if our real-world polymers are degrading too fast or if drug spray density on specific lots was low, leading to localized drug-free areas.'
      },
      {
        id: 'opt1_3',
        label: 'Issue immediate voluntary field recall of all stenting units globally',
        effectiveness: 'medium',
        cost: 'high',
        regulatoryImpact: 'Overreaction. Recalls cause massive patient distress and cardiological shortages; should only be initiated once a definitive manufacturing/design failure is identified.',
        rationale: 'Without investigating the root cause, a global recall is financially destructive and may not solve the underlying biological issue which might be operator-related (improper deployment).'
      }
    ]
  },
  {
    id: 'PMS-002',
    title: 'Adverse Event: Catheter Balloon Rupture Injury',
    source: 'Customer Complaint',
    description: 'We received an urgent MDR (Medical Device Report) from a university hospital. During a high-pressure calcified lesion expansion, the stent delivery balloon ruptured at 14 atm (which is below the labeled Rated Burst Pressure of 16 atm). The balloon fragments caused a focal coronary dissection, requiring emergency coronary artery bypass graft (CABG) surgery to save the patient.',
    reportedEvent: 'Balloon rupture below Rated Burst Pressure leading to emergent cardiothoracic surgery.',
    frequencyTrend: 'stable',
    severityLevel: 'catastrophic',
    correctiveActionOptions: [
      {
        id: 'opt2_1',
        label: 'Perform physical testing on retain samples of that catheter lot and check extrusion dimensional history',
        effectiveness: 'high',
        cost: 'medium',
        regulatoryImpact: 'Mandatory standard procedure. ISO 13485 requires investigation of any serious injury complaint and tracking retain lot statistics.',
        rationale: 'We must verify if this was an isolated random structural defect (e.g., polymer scratch from stent crimping) or a wider manufacturing defect affecting the entire batch.'
      },
      {
        id: 'opt2_2',
        label: 'Classify as physician deployment error due to calcified vessel and close the complaint file',
        effectiveness: 'low',
        cost: 'low',
        regulatoryImpact: 'Severe violation of regulatory reporting rules. Closing a complaint with permanent injury without deep investigation can result in criminal consent decrees.',
        rationale: 'Even if vessel calcification contributed, a balloon failing below rated burst pressure is a major safety non-conformance that must be investigated thoroughly.'
      },
      {
        id: 'opt2_3',
        label: 'Report to competent authorities within 15 days, issue a field safety notice restricting calcified lesion pressures',
        effectiveness: 'high',
        cost: 'medium',
        regulatoryImpact: 'Fully compliant. Class D vigilance reporting requires notification to FDA/Notified Body within 15 days for death or serious injury.',
        rationale: 'Quick reporting maintains regulatory transparency. Updating the IFU to clarify balloon behavior in calcified areas mitigates risk in the field immediately.'
      }
    ]
  }
];
