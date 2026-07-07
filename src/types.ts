/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ContactCategory = 'surface' | 'external_communicating' | 'implant';

export type ContactDuration = 'limited' | 'prolonged' | 'long_term';

export interface ContactType {
  id: string;
  name: string;
  category: ContactCategory;
  description: string;
}

export interface BiologicalEndpoint {
  key: string;
  name: string;
  description: string;
  clinicalSignificance: string;
  standardReference: string;
}

export interface BiocompatibilityMatrixRow {
  category: ContactCategory;
  typeId: string;
  duration: ContactDuration;
  requiredEndpoints: string[]; // keys of BiologicalEndpoint
}

export interface StentMaterial {
  name: string;
  type: 'Metal Alloy' | 'Biodegradable Polymer' | 'Permanent Polymer' | 'Active Drug' | 'Excipient';
  grade: string;
  purpose: string;
  casNumber?: string;
  riskFactors: string[];
  recommendedTesting: string[];
}

export interface TraceabilityNode {
  id: string;
  label: string;
  type: 'user_need' | 'design_input' | 'design_output' | 'verification' | 'validation';
  description: string;
  parentId?: string; // Links back to parent node for tree tracing
  status: 'draft' | 'verified' | 'validated' | 'error';
  rationale?: string;
}

export interface FMEARow {
  id: string;
  hazard: string;
  category: 'Mechanical' | 'Chemical/Toxicological' | 'Biological/Sterility' | 'Clinical/Use' | 'Manufacturing';
  description: string;
  potentialHarm: string;
  // Pre-mitigation
  preOccurrence: number; // 1 to 5
  preSeverity: number; // 1 to 5
  // Mitigation controls
  mitigationControls: string[];
  selectedMitigations: string[]; // User toggles these
  // Post-mitigation
  postOccurrence: number;
  postSeverity: number;
}

export interface ValidationStep {
  id: string;
  stage: 'IQ' | 'OQ' | 'PQ';
  processName: string;
  description: string;
  acceptanceCriteria: string;
  protocolTemplate: string;
  isCompleted: boolean;
  notes: string;
}

export interface PMSScenario {
  id: string;
  title: string;
  source: 'Customer Complaint' | 'Literature Review' | 'Clinical Study (PMCF)' | 'Regulatory Alert';
  description: string;
  reportedEvent: string;
  frequencyTrend: 'stable' | 'increasing' | 'spike';
  severityLevel: 'minor' | 'serious' | 'catastrophic';
  correctiveActionOptions: {
    id: string;
    label: string;
    effectiveness: 'high' | 'medium' | 'low';
    cost: 'high' | 'medium' | 'low';
    regulatoryImpact: string;
    rationale: string;
  }[];
}
