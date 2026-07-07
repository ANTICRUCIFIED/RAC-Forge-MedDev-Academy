/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RegulatoryTemplate {
  id: string;
  name: string;
  fileType: 'md' | 'csv';
  fileName: string;
  description: string;
  content: string;
}

export const REGULATORY_TEMPLATES: RegulatoryTemplate[] = [
  {
    id: 'bep_template',
    name: 'ISO 10993-1 Biocompatibility Evaluation Plan (BEP) Template',
    fileType: 'md',
    fileName: 'ISO_10993_Biocompatibility_Evaluation_Plan.md',
    description: 'A comprehensive, professional template outlining the biological safety assessment strategy, material characterization protocols, and test selection rationale for Class D cardiovascular implants.',
    content: `# BIOCOMPATIBILITY EVALUATION PLAN (BEP)
**Document Ref:** RAC-BEP-2026-DES  
**Device Name:** ForgeFlow Drug-Eluting Coronary Stent  
**Regulatory Class:** Class D / Class III (High Risk)  
**Manufacturer:** RAC Forge Private Limited / Client Corp  

---

## 1. PURPOSE & SCOPE
This Biocompatibility Evaluation Plan (BEP) establishes the strategy to evaluate the biological safety of the ForgeFlow Drug-Eluting Coronary Stent in accordance with ISO 10993-1:2018, FDA Biocompatibility Guidance (2020), and EU Medical Device Regulation (MDR) 2017/745.

## 2. DEVICE DESCRIPTION & INTENDED USE
The ForgeFlow DES is a combination drug-device product designed to dilate stenotic coronary arteries and prevent restenosis.
- **Physical Contact Category:** Implant Device  
- **Contacting Tissue:** Circulating Blood / Vascular Tissue  
- **Contact Duration:** Long-term / Permanent (> 30 days)  

## 3. MATERIAL CHARACTERIZATION (ISO 10993-18)
The device is composed of three distinct material systems:
1. **Structural Base:** L605 Cobalt-Chromium Alloy (strut thickness 80 μm).
2. **Polymer Matrix:** Resomer RG 502 H PLGA Biodegradable Copolymer.
3. **Active Substance:** Micronized Sirolimus (Rapamycin) API (1.0 μg/mm²).

Chemical characterization shall be executed prior to biological testing, following **ISO 10993-18**. A complete Extractables and Leachables (E&L) study will evaluate:
- Inorganic metals corrosion/release.
- Organic polymer degradation breakdown products (Lactic/Glycolic acid).
- Volatile, semi-volatile, and non-volatile organic solvents (residual THF/acetone).

## 4. BIOLOGICAL ENDPOINTS FOR EVALUATION
Based on the categorization (Implant, Blood, Long-term), the following biological endpoints must be addressed through existing literature or GLP-compliant in vitro/in vivo testing:
- **Cytotoxicity (ISO 10993-5):** Cell viability on extracts.
- **Sensitization (ISO 10993-10):** Guinea Pig Maximization Test or LLNA.
- **Irritation/Intracutaneous (ISO 10993-23):** Assessment of localized inflammatory response.
- **Material-Mediated Pyrogenicity (ISO 10993-11):** Rabbit pyrogen test.
- **Acute Systemic Toxicity (ISO 10993-11):** Vital organ stress assay.
- **Subacute/Subchronic Toxicity (ISO 10993-11):** Repeated-dose rodent study.
- **Genotoxicity (ISO 10993-3):** Ames, Chromosomal Aberration, and Mouse Lymphoma.
- **Implantation (ISO 10993-6):** Local tissue response in rabbit/pig vascular system.
- **Hemocompatibility (ISO 10993-4):** Thromboresistance, hemolysis, platelet activation, and coagulation profiling.
- **Chronic Toxicity (ISO 10993-11):** Long-term systemic tissue bio-accumulation.
- **Carcinogenicity (ISO 10993-3):** Evaluation of tumor-forming potential.
- **Reproductive/Developmental (ISO 10993-3):** Direct effect on reproductive systems.
- **Degradation (ISO 10993-9):** Kinetics and toxicity profiles of degrading polymer.

## 5. TEST METHODS & LABORATORY REQUIREMENTS
All physical testing shall be executed in a laboratory certified to ISO/IEC 17025 and operating under Good Laboratory Practice (GLP) regulations (21 CFR Part 58). Extraction parameters will mimic physiological conditions (37°C in polar and non-polar solvents).

## 6. SIGN-OFF & APPROVALS
**Lead Regulatory Consultant:** _________________________  Date: _________  
**Director of Quality Assurance:** ______________________  Date: _________`
  },
  {
    id: 'fmea_template',
    name: 'ISO 14971 Risk Assessment (FMEA) Template',
    fileType: 'csv',
    fileName: 'ISO_14971_FMEA_Template.csv',
    description: 'An editable, spreadsheet-compatible CSV template formatted specifically for medical device Failure Mode and Effects Analysis (FMEA), with pre-structured columns for risk indices, severity, and mitigations.',
    content: `Hazard ID,Hazard Name,Product Category,Failure Mode,Potential Clinical Harm,Pre-Occurrence (1-5),Pre-Severity (1-5),Pre-RPN,Risk Control Mitigations,Post-Occurrence (1-5),Post-Severity (1-5),Post-RPN,Residual Risk Status
HAZ-001,Stent Thrombosis,Biological,Strut-induced blood activation,Acute coronary clot / Death,4,5,20,Apply passive PC biomimetic polymer coating; Administer 12-month dual-antiplatelet regimen,1,5,5,Acceptable
HAZ-002,Stent Fatigue Fracture,Mechanical,Stress-induced metal fracture,Arterial tear / Emergency CABG,3,5,15,Transition core to high-tensile Cobalt-Chromium; Electropolish strut edges; Conduct 400M-cycle bench test,1,5,5,Acceptable
HAZ-003,Drug Overdose Toxicity,Chemical,Inconsistent coating release,Vascular cell death / Inflammation,3,4,12,Control ester-capping on PLGA degradation; Automated spray laser scanner; Extractables analysis,1,4,4,Acceptable
HAZ-004,Coating Delamination,Manufacturing,Polymer peeling on expansion,Micro-particle blood embolization,3,3,9,Apply covalent silane primer coating; Control drying room humidity; Tortuous bench deployment,1,3,3,Acceptable
HAZ-005,Sterility Loss,Sterility,Failure in packaging/EtO cycle,Patient heart infection / Sepsis,3,5,15,Validate EtO sterilization to SAL 10-6; Implement Tyvek double-pouch barrier; Bioburden testing,1,5,5,Acceptable`
  },
  {
    id: 'dhf_trace_template',
    name: 'Design History File (DHF) Traceability Matrix Template',
    fileType: 'md',
    fileName: 'DHF_Traceability_Matrix.md',
    description: 'The primary regulatory tracking sheet to establish traceability. Maps User Needs through Design Inputs and Outputs to Verification & Validation protocols.',
    content: `# DESIGN HISTORY FILE (DHF) TRACEABILITY MATRIX
**Project Name:** ForgeFlow DES (Class D)  
**Standard Compliance:** ISO 13485:2016, 21 CFR 820.30(g)  
**Traceability Level:** High-Performance Multi-Tier Trace  

---

| User Need (UN) | Design Input (DI) | Design Output (DO) | Design Verification (DVE) | Design Validation (DVA) |
| :--- | :--- | :--- | :--- | :--- |
| **UN-001:** Restore blood flow. Must keep coronary lumen expanded post-deployment. | **DI-001:** Radial crush resistance must be ≥1.2 atm outward pressure to resist arterial recoil. | **DO-001:** sinudoisal strut mesh with 80 μm thickness using L605 Cobalt-Chromium alloy (Drawing: ST-004-B). | **DVE-001:** Radial compression crush force test protocol (Ref: VAL-MECH-029) on 30 sterile units. | **DVA-001:** Porcine animal vascular safety model at 28 days to verify angiographic patency. |
| **UN-002:** Prevent restenosis (arterial re-narrowing) triggered by local healing tissue. | **DI-002:** Deliver local anti-proliferative Sirolimus drug continuously over minimum of 30 days. | **DO-002:** Coated matrix: PLGA Resomer + Sirolimus micronized drug layer (Specification: COAT-SPEC-09). | **DVE-002:** In-vitro drug elution HPLC assay (Ref: LAB-CHEM-082) measuring cumulative release daily. | **DVA-002:** Pivotal clinical trial (STENT-ACTIVE) measuring late lumen loss in human patients at 1 year. |
| **UN-003:** Deliver device safely through tortuous vessels without vascular tear. | **DI-003:** Catheter shaft profile must be < 1.10 mm to pass calcified coronary bifurcations. | **DO-003:** Tri-fold nylon balloon catheter system with hydrophilic sleeve coating (Assembly: CATH-5F-A). | **DVE-003:** Simulated-use tracking force pull/push test on tortuous silicon model. | **DVA-003:** Human simulated use in simulated surgical theater with clinical cardiologists. |

---

### INSTRUCTIONS FOR RAC FORGE INTERNS:
1. Every **User Need** MUST be written in user-centric language (e.g., "The surgeon must be able to...", "The patient requires...").
2. Every **Design Input** must be a quantifiable, testable engineering specification (e.g., "No greater than...", "Must withstand...").
3. Every **Design Output** must reference a physical artifact (e.g., Drawing file ID, material specification, formula ID).
4. Every **Verification** proves that the outputs meet the input specifications (Bench testing, FEA model).
5. Every **Validation** proves that the final physical device meets the clinical user needs (Clinical trial, human factor simulation, animal study).`
  },
  {
    id: 'design_transfer_template',
    name: 'Design Transfer & Master Validation Plan (MVP) Template',
    fileType: 'md',
    fileName: 'Design_Transfer_and_MVP_Template.md',
    description: 'An industrial blueprint for moving a medical device from research to mass cleanroom production. Outlines Master Validation Plan standards (IQ/OQ/PQ) and cleanroom control.',
    content: `# MASTER VALIDATION PLAN (MVP) & DESIGN TRANSFER PROTOCOL
**Document ID:** RAC-MVP-2026-DES  
**Subject:** ForgeFlow DES Transfer to Manufacturing Line B  
**Target Class:** Class D / ISO 7 Cleanroom Production  

---

## 1. PURPOSE
This Master Validation Plan defines the process validation, equipment qualification, and design transfer activities required to move the ForgeFlow Drug-Eluting Coronary Stent from R&D design freeze to commercial high-volume manufacturing.

## 2. REQUISITE FILE TRANSFERS (DHF to DMR)
The Design History File (DHF) must be compiled and signed off. The following documents must be transferred into the Device Master Record (DMR):
- Product Specifications (strut dimensions, drug dose).
- Manufacturing SOPs (laser cutting, drug spray, catheter crimping, packaging).
- Inspection and testing SOPs (HPLC release, bubble-point leak test).
- Bill of Materials (BOM) detailing L605, Resomer PLGA, and Sirolimus grades.

## 3. PROCESS VALIDATION STRATEGY (IQ / OQ / PQ)
Every critical process that cannot be verified by 100% inspection must be validated.

### 3.1 Installation Qualification (IQ)
*Objective: Prove equipment is received, installed, and wired correctly.*
- **Critical Equipment:** Automated Laser Cutter (LAS-01), Spray Coater (SPRAY-04), Balloon Crimper (CRIMP-02), EtO Sterilizer (STER-09).
- **Deliverables:** Calibration logs, utilities certificates (N2, Argon, pure air), software version lock.

### 3.2 Operational Qualification (OQ)
*Objective: Identify operational ranges, extremes, and challenge limits.*
- **Critical Processes:** 
  - **Laser Cut Speed vs. Laser Power:** Define power limits to prevent heat-affected zone slag.
  - **Drug Spray Pressure vs. Drug Density:** Establish limits that keep coating thickness within 4-6 μm.
- **Deliverables:** Statistically significant (e.g., $C_{pk} \ge 1.33$) capability runs on experimental upper and lower process limits.

### 3.3 Performance Qualification (PQ)
*Objective: Demonstrate consistency under routine production conditions over multiple shifts.*
- **Framework:** 3 consecutive manufacturing lots produced by routine operators over 3 separate shifts.
- **Deliverables:** Sterile barrier validation (ISO 11607), Bioburden counts, endotoxin tests, and Stent Retention force testing.

## 4. STERILIZATION VALIDATION (ISO 11135)
As a Class D vascular implant, sterilization is a critical process.
- **Sterilant:** Ethylene Oxide (EtO) gas.
- **Target SAL:** $10^{-6}$ (Sterility Assurance Level).
- **Method:** Overkill approach with biological indicators (*Bacillus atrophaeus* spores).
- **Degasification:** Heat-chamber aeration to reduce residual EtO and Ethylene Chlorohydrin (ECH) below toxic limits per ISO 10993-7.`
  }
];
