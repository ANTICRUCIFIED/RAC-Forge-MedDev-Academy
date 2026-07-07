/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ContactType, BiologicalEndpoint, BiocompatibilityMatrixRow, StentMaterial } from '../types';

export const CONTACT_TYPES: ContactType[] = [
  // Surface Devices
  { id: 'skin', name: 'Intact Skin', category: 'surface', description: 'Contact with unbroken skin surfaces (e.g., electrodes, external splints, compression bandages).' },
  { id: 'mucosa', name: 'Mucosal Membrane', category: 'surface', description: 'Contact with intact mucosal membranes (e.g., urinary catheters, endotracheal tubes, contact lenses).' },
  { id: 'breached', name: 'Breached/Compromised Surface', category: 'surface', description: 'Contact with breached or otherwise compromised external body surfaces (e.g., wound dressings, burn sheets).' },

  // External Communicating Devices
  { id: 'blood_path', name: 'Blood Path, Indirect', category: 'external_communicating', description: 'Devices that contact the blood path at one point and serve as a conduit into the vascular system (e.g., blood administration sets, extension sets, transfer devices).' },
  { id: 'tissue_bone', name: 'Tissue / Bone / Dentin', category: 'external_communicating', description: 'Devices that contact tissue, bone, or dentin systems (e.g., arthroscopes, dental filling materials, bone cements, laparoscopes).' },
  { id: 'circulating_blood', name: 'Circulating Blood', category: 'external_communicating', description: 'Devices that contact circulating blood (e.g., cardiopulmonary bypass circuits, hemodialyzers, intravascular catheters).' },

  // Implant Devices
  { id: 'implant_tissue', name: 'Tissue / Bone Implant', category: 'implant', description: 'Devices implanted in direct contact with tissue or bone (e.g., orthopedic pins, prosthetic joints, pacemakers, breast implants).' },
  { id: 'implant_blood', name: 'Blood / Vascular Implant', category: 'implant', description: 'Devices implanted in direct contact with the vascular system or circulating blood (e.g., pacemaker electrodes, artificial heart valves, vascular grafts, coronary stents).' }
];

export const BIOLOGICAL_ENDPOINTS: BiologicalEndpoint[] = [
  {
    key: 'cytotoxicity',
    name: 'Cytotoxicity',
    description: 'Evaluates the potential of a device to release substances that cause cell death, inhibit cell growth, or cause morphological changes in vitro.',
    clinicalSignificance: 'Ensures that materials do not leach acutely toxic compounds that kill surrounding human cells. Crucial for any direct contact.',
    standardReference: 'ISO 10993-5: Tests for in vitro cytotoxicity'
  },
  {
    key: 'sensitization',
    name: 'Sensitization',
    description: 'Assesses whether chemical substances in the device cause an allergic reaction or hypersensitivity over repeated or prolonged exposure.',
    clinicalSignificance: 'Prevents delayed-type hypersensitivity (allergic contact dermatitis) which can trigger painful local immune reactions and tissue rejection.',
    standardReference: 'ISO 10993-10: Tests for irritation and skin sensitization'
  },
  {
    key: 'irritation',
    name: 'Irritation / Intracutaneous Reactivity',
    description: 'Determines if leachable chemicals cause localized inflammation or irritation to mucosal, skin, or compromised tissues.',
    clinicalSignificance: 'Detects the presence of local irritants, verifying that device contact does not cause redness, swelling, or pain in surrounding tissues.',
    standardReference: 'ISO 10993-23: Tests for irritation'
  },
  {
    key: 'pyrogenicity',
    name: 'Material-Mediated Pyrogenicity',
    description: 'Evaluates whether chemical leachables from the device trigger a systemic febrile (fever) response independent of endotoxins.',
    clinicalSignificance: 'Protects patients from severe inflammatory fever reactions triggered by materials (like certain metals or polymers) when entering the bloodstream.',
    standardReference: 'ISO 10993-11: Tests for systemic toxicity'
  },
  {
    key: 'acute_systemic',
    name: 'Acute Systemic Toxicity',
    description: 'Tests for adverse systemic effects occurring within 24 hours of exposure to device extracts, indicating vital organ stress or failure.',
    clinicalSignificance: 'Determines whether rapidly dissolving additives or residual processing solvents could poison vital organs like the liver, kidneys, or brain.',
    standardReference: 'ISO 10993-11: Tests for systemic toxicity'
  },
  {
    key: 'subacute_subchronic',
    name: 'Subacute / Subchronic Toxicity',
    description: 'Evaluates systemic toxic effects occurring after repeated or continuous exposure for a period ranging from 24 hours up to 10% of the animal lifespan.',
    clinicalSignificance: 'Critical for devices used beyond 24 hours to monitor gradual bioaccumulation of toxic leachables in tissue or blood.',
    standardReference: 'ISO 10993-11: Tests for systemic toxicity'
  },
  {
    key: 'genotoxicity',
    name: 'Genotoxicity',
    description: 'Uses a battery of in vitro and in vivo tests to detect whether leachables cause gene mutations, chromosomal damage, or DNA damage.',
    clinicalSignificance: 'Ensures materials do not cause mutations that can lead to cancer. Mandatory for any prolonged or long-term contacting device.',
    standardReference: 'ISO 10993-3: Tests for genotoxicity, carcinogenicity and reproductive toxicity'
  },
  {
    key: 'implantation',
    name: 'Implantation Effects',
    description: 'Assesses the local pathological response of living tissue to a physical specimen of the material at the surgical site over time.',
    clinicalSignificance: 'Measures tissue integration, fibrosis capsule formation, and physical compatibility directly at the implant site (e.g. muscular or bone tissues).',
    standardReference: 'ISO 10993-6: Tests for local effects after implantation'
  },
  {
    key: 'hemocompatibility',
    name: 'Hemocompatibility',
    description: 'Evaluates the effects of blood-contacting devices on blood components (erythrocytes, platelets, coagulation proteins) and clotting mechanisms.',
    clinicalSignificance: 'Crucial to prevent catastrophic thrombosis (clots), hemolysis (red blood cell rupture), or activation of the complement immune system.',
    standardReference: 'ISO 10993-4: Selection of tests for interactions with blood'
  },
  {
    key: 'chronic_toxicity',
    name: 'Chronic Toxicity',
    description: 'Evaluates systemic toxic effects after repeated or continuous exposure over a major portion of the lifespan of test animals (usually >10%).',
    clinicalSignificance: 'Needed for permanent implants to ensure that lifetime corrosion, wear debris, or chemical release does not cause chronic organ degradation.',
    standardReference: 'ISO 10993-11: Tests for systemic toxicity'
  },
  {
    key: 'carcinogenicity',
    name: 'Carcinogenicity',
    description: 'Assesses the potential of materials or leachables to induce tumor formation over a lifetime of exposure.',
    clinicalSignificance: 'Specifically required if there is any indication of genotoxic potential or if the material slowly dissolves and accumulates in organs.',
    standardReference: 'ISO 10993-3: Tests for genotoxicity, carcinogenicity and reproductive toxicity'
  },
  {
    key: 'reproductive',
    name: 'Reproductive / Developmental Toxicity',
    description: 'Evaluates the potential of device leachables to cause birth defects, impact fertility, or damage embryonic development.',
    clinicalSignificance: 'Ensures that permanently implanted or long-term circulating devices do not release endocrine disruptors or teratogens.',
    standardReference: 'ISO 10993-3: Tests for genotoxicity, carcinogenicity and reproductive toxicity'
  },
  {
    key: 'degradation',
    name: 'Degradation Testing',
    description: 'Characterizes the rate of material breakdown, identifies degradation products, and evaluates their potential toxicity.',
    clinicalSignificance: 'Mandatory for biodegradable polymers or bioresorbable metals to prove that breakdown products are safely metabolized without tissue injury.',
    standardReference: 'ISO 10993-9: Framework for identification and quantification of potential degradation products'
  }
];

// Complete ISO 10993-1:2018 biocompatibility requirements matrix mapping.
export const BIOCOMPATIBILITY_MATRIX: BiocompatibilityMatrixRow[] = [
  // 1. Intact Skin (Surface)
  { category: 'surface', typeId: 'skin', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation'] },
  { category: 'surface', typeId: 'skin', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation'] },
  { category: 'surface', typeId: 'skin', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'subacute_subchronic'] },

  // 2. Mucosal Membrane (Surface)
  { category: 'surface', typeId: 'mucosa', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation'] },
  { category: 'surface', typeId: 'mucosa', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'subacute_subchronic', 'genotoxicity'] },
  { category: 'surface', typeId: 'mucosa', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'subacute_subchronic', 'genotoxicity', 'chronic_toxicity', 'implantation'] },

  // 3. Breached/Compromised (Surface)
  { category: 'surface', typeId: 'breached', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity'] },
  { category: 'surface', typeId: 'breached', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation'] },
  { category: 'surface', typeId: 'breached', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'chronic_toxicity'] },

  // 4. Blood Path, Indirect (External Communicating)
  { category: 'external_communicating', typeId: 'blood_path', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'hemocompatibility'] },
  { category: 'external_communicating', typeId: 'blood_path', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'hemocompatibility'] },
  { category: 'external_communicating', typeId: 'blood_path', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'hemocompatibility', 'chronic_toxicity', 'carcinogenicity'] },

  // 5. Tissue/Bone/Dentin (External Communicating)
  { category: 'external_communicating', typeId: 'tissue_bone', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation'] },
  { category: 'external_communicating', typeId: 'tissue_bone', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation'] },
  { category: 'external_communicating', typeId: 'tissue_bone', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'chronic_toxicity', 'carcinogenicity'] },

  // 6. Circulating Blood (External Communicating)
  { category: 'external_communicating', typeId: 'circulating_blood', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'hemocompatibility'] },
  { category: 'external_communicating', typeId: 'circulating_blood', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'hemocompatibility'] },
  { category: 'external_communicating', typeId: 'circulating_blood', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'hemocompatibility', 'chronic_toxicity', 'carcinogenicity'] },

  // 7. Tissue/Bone Implant (Implant)
  { category: 'implant', typeId: 'implant_tissue', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'implantation'] },
  { category: 'implant', typeId: 'implant_tissue', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation'] },
  { category: 'implant', typeId: 'implant_tissue', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'chronic_toxicity', 'carcinogenicity', 'reproductive'] },

  // 8. Blood/Vascular Implant (Implant) -- THIS IS OUR STENT! Class D
  { category: 'implant', typeId: 'implant_blood', duration: 'limited', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'implantation', 'hemocompatibility'] },
  { category: 'implant', typeId: 'implant_blood', duration: 'prolonged', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'hemocompatibility'] },
  { category: 'implant', typeId: 'implant_blood', duration: 'long_term', requiredEndpoints: ['cytotoxicity', 'sensitization', 'irritation', 'pyrogenicity', 'acute_systemic', 'subacute_subchronic', 'genotoxicity', 'implantation', 'hemocompatibility', 'chronic_toxicity', 'carcinogenicity', 'reproductive', 'degradation'] }
];

export const STENT_MATERIALS: StentMaterial[] = [
  {
    name: 'Cobalt-Chromium Alloy (L605)',
    type: 'Metal Alloy',
    grade: 'Medical Grade ASTM F90',
    purpose: 'Structural stent platform. Provides radio-opacity, ultra-thin struts, and high radial strength.',
    riskFactors: ['Trace nickel release leading to localized metallic allergies', 'Heavy metal corrosion in long-term vascular implants', 'Strut thickness impacts mechanical fatigue limits.'],
    recommendedTesting: ['In Vitro Cytotoxicity (ISO 10993-5)', 'Hemocompatibility - Thromboresistance (ISO 10993-4)', 'Long-term Implantation in vascular model (ISO 10993-6)', 'Chemical characterization of extractables & leachables (ISO 10993-18)']
  },
  {
    name: 'Poly(D,L-lactide-co-glycolide) (PLGA)',
    type: 'Biodegradable Polymer',
    grade: 'Resomer RG 502 H',
    purpose: 'Drug carrier matrix. Degrades into lactic and glycolic acid, releasing the drug at a controlled rate.',
    riskFactors: ['Acidic degradation local microenvironment changes', 'Residual monomer content (lactide/glycolide) causing toxicity', 'Particulate generation during polymer erosion.'],
    recommendedTesting: ['In Vitro Degradation kinetics (ISO 10993-9 / ISO 13781)', 'Sensitization testing (ISO 10993-10)', 'Genotoxicity battery (Ames + Mouse Lymphoma) (ISO 10993-3)', 'Subchronic systemic toxicity in vivo (ISO 10993-11)']
  },
  {
    name: 'Sirolimus (Rapamycin)',
    type: 'Active Drug',
    grade: 'USP Micronized',
    purpose: 'Active pharmaceutical ingredient (API). Inhibits vascular smooth muscle cell proliferation to prevent neointimal hyperplasia (restenosis).',
    riskFactors: ['Over-dosage causing local tissue necrosis or impaired endothelialization', 'Systemic drug exposure & immunosuppressive effects', 'Reproductive toxicity or teratogenicity risk.'],
    recommendedTesting: ['Reproductive & Developmental Toxicity (ISO 10993-3)', 'Pharmacokinetic & ADME study in pig coronary models', 'Local tissue tolerance at implant site (ISO 10993-6)', 'In Vitro blood compatibility of drug-eluting coating (ISO 10993-4)']
  },
  {
    name: 'Phosphorylcholine (PC) Polymer',
    type: 'Permanent Polymer',
    grade: 'Bio-Mimetic Grade',
    purpose: 'Biomimetic passive coating. Mimics red blood cell outer membrane to prevent platelet adhesion and thrombosis.',
    riskFactors: ['Polymer peeling/delamination under mechanical stress', 'Sterilization-induced chemical crosslinking or deterioration', 'Residual solvents from the coating spraying process.'],
    recommendedTesting: ['Complement Activation in blood (ISO 10993-4)', 'Leachable solvent assessment (gas chromatography) (ISO 10993-18)', 'Skin Sensitization (GPMT or LLNA) (ISO 10993-10)']
  },
  {
    name: '316L Stainless Steel',
    type: 'Metal Alloy',
    grade: 'Medical Grade ASTM F138',
    purpose: 'Alternative structural stent platform or delivery system crimp band. High corrosion resistance.',
    riskFactors: ['High nickel content (10-14%) causing metal allergy', 'Thicker struts required compared to Cobalt-Chromium, increasing restenosis rates', 'Lower radio-opacity.'],
    recommendedTesting: ['Cytotoxicity (ISO 10993-5)', 'In vivo implantation (ISO 10993-6)', 'Irritation & Intracutaneous reactivity (ISO 10993-23)']
  }
];
