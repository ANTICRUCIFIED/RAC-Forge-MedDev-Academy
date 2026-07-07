/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { STORY_PHASES } from './data/caseStudyData';
import { REGULATORY_TEMPLATES } from './data/templatesData';
import BiocompatibilityEvaluator from './components/BiocompatibilityEvaluator';
import RiskManagementBoard from './components/RiskManagementBoard';
import DesignControlsTracer from './components/DesignControlsTracer';
import DesignTransferAndPMS from './components/DesignTransferAndPMS';
import IndianMDRClassifier, { TERM_MAP } from './components/IndianMDRClassifier';
import ForgeFlowStentStory from './components/ForgeFlowStentStory';
import { RegulatoryTermsPopup, REGULATORY_TERMS } from './components/RegulatoryTermsPopup';
import { 
  Activity, 
  Sparkles, 
  BookOpen, 
  ShieldAlert, 
  Wrench, 
  FileText, 
  Download, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  RotateCcw, 
  Building, 
  Users, 
  ExternalLink 
} from 'lucide-react';

export default function App() {
  // Global Text Selection Term Lookup
  const [globalHelpTerm, setGlobalHelpTerm] = useState<string | null>(null);
  const [dynamicTermData, setDynamicTermData] = useState<any | null>(null);
  const [isLoadingTerm, setIsLoadingTerm] = useState(false);

  useEffect(() => {
    const handleMouseUp = async () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      const text = selection.toString().trim().toLowerCase();
      if (!text || text.length < 4 || text.split(/\s+/).length > 3) return; // avoid triggering on very short words or long phrases

      let foundTermId: string | null = null;

      // 1. Exact match with TERM_MAP keys
      for (const [key, termId] of Object.entries(TERM_MAP)) {
        if (text === key.toLowerCase()) {
           foundTermId = termId;
           break;
        }
      }

      // 2. Partial match with TERM_MAP keys
      if (!foundTermId) {
        for (const [key, termId] of Object.entries(TERM_MAP)) {
          if (key.toLowerCase().includes(text)) {
             foundTermId = termId;
             break;
          }
        }
      }

      // 3. Partial match with REGULATORY_TERMS definitions or names
      if (!foundTermId) {
        for (const [key, termObj] of Object.entries(REGULATORY_TERMS)) {
           if (termObj.name.toLowerCase().includes(text)) {
             foundTermId = key;
             break;
           }
        }
      }

      if (foundTermId) {
        setGlobalHelpTerm(foundTermId);
        setDynamicTermData(null);
      } else {
        // Fetch dynamically from our API
        try {
          setIsLoadingTerm(true);
          const res = await fetch("/api/define", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ term: text })
          });
          if (res.ok) {
            const data = await res.json();
            setDynamicTermData(data);
            setGlobalHelpTerm(null); // Clear static term
          } else {
            setDynamicTermData({
              id: "error",
              name: text,
              category: "Error",
              definition: "Sorry, we could not generate a definition for this term right now due to high demand. Please try again later.",
              examples: []
            });
            setGlobalHelpTerm(null);
          }
        } catch (error) {
          console.error("Failed to define term:", error);
          setDynamicTermData({
            id: "error",
            name: text,
            category: "Error",
            definition: "An error occurred while connecting to the definition service. Please try again later.",
            examples: []
          });
          setGlobalHelpTerm(null);
        } finally {
          setIsLoadingTerm(false);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  // Master Tab State: 1 to 7
  // 1: Indian MDR Classifier, 2: Stent Story Study, 3: Biocompatibility, 4: Design Controls, 5: Risk FMEA, 6: Design Transfer & PMS, 7: Templates
  const [activeTab, setActiveTab] = useState<number>(1);
  const [pmsActiveSubTab, setPmsActiveSubTab] = useState<'transfer' | 'pms'>('transfer');
  
  // Phase 1 - Interactive Classification Simulator States
  const [simContact, setSimContact] = useState<string>('circulatory');
  const [simDuration, setSimDuration] = useState<string>('permanent');
  const [simHasDrug, setSimHasDrug] = useState<boolean>(true);
  const [simHasBiological, setSimHasBiological] = useState<boolean>(false);

  // Active click index for lifecycle timeline overview
  const [activeTimelineStage, setActiveTimelineStage] = useState<number>(0);

  // Dynamic Medical Device Risk Classification Engine (Self-Explanatory Classifier)
  const getSimClassification = () => {
    let ghtfClass = 'Class B (Low-Moderate Risk)';
    let mdrClass = 'Class IIa';
    let fdaClass = 'Class II [510(k) Premarket Notification]';
    let standardRef = 'EU MDR Annex VIII Rule 1 / FDA 21 CFR Part 860 General Controls';
    let description = 'General medical device controls and normal conformity pathways apply. Perfect for lower-risk non-invasive equipment.';
    let conformityRoute = 'Draft technical document, self-declare compliance (Class I) or Notified Body simplified audit (Class IIa).';

    if (simHasDrug) {
      ghtfClass = 'Class D (Highest Risk)';
      mdrClass = 'Class III';
      fdaClass = 'Class III [PMA (Premarket Approval)]';
      standardRef = 'EU MDR Annex VIII Rule 12 & Rule 14 (Drug-Device Combination Product)';
      description = 'Devices incorporating an integral substance which, if used separately, can be considered an active pharmaceutical ingredient with ancillary effect, fall into the absolute highest risk tier.';
      conformityRoute = 'Full quality system audit (ISO 13485), mandatory human clinical investigation (clinical trials), extensive pre-market audit, and Annual PSUR reports.';
    } else if (simHasBiological) {
      ghtfClass = 'Class D (Highest Risk)';
      mdrClass = 'Class III';
      fdaClass = 'Class III [PMA (Premarket Approval)]';
      standardRef = 'EU MDR Annex VIII Rule 18 (Tissues or Cells of Animal Origin)';
      description = 'Any medical device incorporating non-viable tissues of animal origin, or animal derivatives, triggers Class III/D oversight due to zoonotic pathogen and immunogenic risks.';
      conformityRoute = 'Mandatory biological tissue validation safety protocols, animal-sourcing tracking system (Annex XIV), Notified Body audit, and extensive bioburden controls.';
    } else if (simContact === 'circulatory' && simDuration === 'permanent') {
      ghtfClass = 'Class D (Highest Risk)';
      mdrClass = 'Class III';
      fdaClass = 'Class III [PMA (Premarket Approval)]';
      standardRef = 'EU MDR Annex VIII Rule 8 (Permanent Vascular Implant)';
      description = 'Any surgical implantable device in direct, permanent contact with the heart, central circulatory system, or central nervous system is classified as Class III / Class D.';
      conformityRoute = 'Full DHF audit, comprehensive ISO 10993 testing, porcine vascular modeling, CE design dossier certification, and 15-day immediate vigilance reporting constraints.';
    } else if (simContact === 'circulatory' && simDuration === 'prolonged') {
      ghtfClass = 'Class C (Moderate-High)';
      mdrClass = 'Class IIb';
      fdaClass = 'Class II [510(k) with special controls]';
      standardRef = 'EU MDR Annex VIII Rule 8 (Short-Term Invasive Blood Contact)';
      description = 'Surgically invasive devices intended for short-term use in direct contact with the central circulatory system.';
      conformityRoute = 'Product-specific clinical evaluation plan, Notified Body design dossier audit, and proactive PMCF tracking.';
    } else if (simContact === 'internal' && simDuration === 'permanent') {
      ghtfClass = 'Class C (Moderate-High)';
      mdrClass = 'Class IIb';
      fdaClass = 'Class II [510(k) Premarket Notification]';
      standardRef = 'EU MDR Annex VIII Rule 8 (Implantable Bone/Tissue Contact)';
      description = 'Implantable devices not placed in direct contact with the heart, circulatory, or central nervous system.';
      conformityRoute = 'Premarket 510(k) submission showing substantial equivalence, ISO 10993 mechanical test data, and passive complaint logs.';
    } else if (simContact === 'skin' && simDuration === 'transient') {
      ghtfClass = 'Class A (Low Risk)';
      mdrClass = 'Class I';
      fdaClass = 'Class I [General Controls Only / Exempt]';
      standardRef = 'EU MDR Annex VIII Rule 1 (Non-Invasive Surface Contact)';
      description = 'Devices with simple skin contact or fluid transfer boundaries with no active electrical components.';
      conformityRoute = 'Manufacturer self-declaration, registration with national registries (EUDAMED/FDA GUDID), and basic quality control logs.';
    }

    return { ghtfClass, mdrClass, fdaClass, standardRef, description, conformityRoute };
  };

  // Tasks completion milestones tracker
  const [completedMilestones, setCompletedMilestones] = useState<Record<string, boolean>>({
    concept: false,
    biocompatibility: false,
    design_files: false,
    risk: false,
    design_transfer: false,
    pms: false
  });

  const handleCompleteMilestone = (key: string) => {
    setCompletedMilestones(prev => ({ ...prev, [key]: true }));
  };

  const handleResetProgress = () => {
    setCompletedMilestones({
      concept: false,
      biocompatibility: false,
      design_files: false,
      risk: false,
      design_transfer: false,
      pms: false
    });
    setSimContact('circulatory');
    setSimDuration('permanent');
    setSimHasDrug(true);
    setSimHasBiological(false);
    setActiveTimelineStage(0);
    setActiveTab(1);
  };

  // Calculate overall academy completion percentage
  const completedCount = Object.values(completedMilestones).filter(Boolean).length;
  const totalMilestones = Object.keys(completedMilestones).length;
  const overallPercentage = Math.round((completedCount / totalMilestones) * 100);

  // Custom high-quality daily training narrative builder for supervisor console
  const getActivePhaseInfo = () => {
    if (activeTab === 1) {
      return STORY_PHASES[0]; // The Spark: Concept & Classification
    } else if (activeTab === 2) {
      return {
        number: 2,
        title: 'Module 2: Stent Concept-to-Product Story',
        subtitle: 'The Clinical Odyssey of a Class D Combination Product',
        narration: [
          'Every medical device starts as an idea in a clinic. For ForgeFlow, that idea was: "How can we safely scaffold a stenosed coronary artery without inducing fatal clotting, thrombosis, or late-stage vessel scarring (restenosis)?"',
          'In this module, you will step through the physical development of our stent, tracing its journey from physical Cobalt-Chromium scaffolding specifications, to chemical biodegradable PLGA polymers, and the slow elution of Sirolimus.',
          'Additionally, you will engage with our product-specific CDSCO risk classifier to mathematically justify why this combination implant must adhere to Class D (Class III) safety boundaries.',
          'Complete each slide and response within this case study to unlock downstream mechanical and biological verification boards.'
        ],
        learningObjectives: [
          'Deconstruct a drug-device combination implant into its active constituent parts.',
          'Correlate clinical pathology of plaque restenosis with material properties.',
          'Mathematically justify Class D rating under Indian MDR 2017 criteria.'
        ],
        internAssignment: 'Step through the physical and chemical story boards. Complete the product classifier to finalize Phase 2 design transfer bounds.'
      };
    } else if (activeTab === 3) {
      return STORY_PHASES[1]; // The Vessel: Biocompatibility Evaluation (ISO 10993)
    } else if (activeTab === 4) {
      return STORY_PHASES[2]; // The Forge: Design Controls & DHF (ISO 13485)
    } else if (activeTab === 5) {
      return STORY_PHASES[3]; // The Shield: Risk Analysis & FMEA (ISO 14971)
    } else if (activeTab === 6) {
      return {
        number: 6,
        title: 'Module 6: Transfer & Post-Market Surveillance',
        subtitle: 'Process Validation (IQ/OQ/PQ) and Global Clinical Vigilance',
        narration: [
          'Designing a safe stent in a research laboratory is only half the battle. To scale up, we must transfer our specifications (DHF) into the cleanroom production plant (DMR) under rigorous Process Validation (IQ/OQ/PQ) parameters.',
          'Once transferred, the device enters the global healthcare market, where our Active and Passive Post-Market Surveillance (PMS) loops act as our continuous patient safety net.',
          'Here, you will complete equipment qualification runs for crimping and spraying, and investigate real-world clinical complaint scenarios to preserve our CDSCO manufacturing license.'
        ],
        learningObjectives: [
          'Differentiate between IQ, OQ, and PQ process validation protocols.',
          'Formulate risk mitigations for cleanroom ultrasonic spraying lines.',
          'Analyze post-market adverse events and initiate corrective actions (CAPA/FSCA).'
        ],
        internAssignment: 'Perform process runs in the Transfer tab, then switch to the PMS sub-tab to resolve clinical customer complaint files.'
      };
    } else {
      return STORY_PHASES[0];
    }
  };

  const activePhaseInfo = getActivePhaseInfo();

  const handleDownloadTemplate = (templateId: string) => {
    const template = REGULATORY_TEMPLATES.find(t => t.id === templateId);
    if (!template) return;

    const blob = new Blob([template.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = template.fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" id="app-container">
      {/* Dynamic Navigation Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 shrink-0 shadow-md" id="master-header">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
              <Building size={24} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-blue-500/20 text-blue-400 font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border border-blue-500/30">
                  Intern Training Portal
                </span>
                <span className="text-[10px] bg-red-500/20 text-red-400 font-bold uppercase px-2 py-0.5 rounded-full border border-red-500/30">
                  Case Study: Class D DES
                </span>
              </div>
              <h1 className="text-lg font-bold text-slate-100 mt-0.5 tracking-tight">
                RAC Forge Private Limited • MedDev Academy
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 block">Lead Consultant Supervisor</span>
              <span className="text-xs font-semibold text-slate-200">Sankhyayan & Senior QA Directors</span>
            </div>
            <button
              onClick={handleResetProgress}
              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2 px-3.5 rounded-xl border border-slate-700/60 transition-all flex items-center gap-1.5"
            >
              <RotateCcw size={13} /> Reset Training Log
            </button>
          </div>
        </div>
      </header>

      {/* Main Educational Dashboard Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:py-6 grid grid-cols-1 lg:grid-cols-12 gap-6" id="dashboard-layout">
        {/* Left Side: Active Classroom Workspace - 8 Cols */}
        <div className="lg:col-span-8 flex flex-col gap-6" id="classroom-workspace">
          {/* Phase progression Tab Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 overflow-x-auto flex gap-1 scrollbar-none" id="lifecycle-tabs">
            {[
              { num: 1, name: 'M1: Indian MDR 2017' },
              { num: 2, name: 'M2: Stent Story Case' },
              { num: 3, name: 'M3: Biocompatibility' },
              { num: 4, name: 'M4: Design Control Trace' },
              { num: 5, name: 'M5: Hazard Risk Board' },
              { num: 6, name: 'M6: Transfer & PMS' },
            ].map((mod) => (
              <button
                key={mod.num}
                onClick={() => setActiveTab(mod.num)}
                className={`py-2 px-3 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all flex-shrink-0 ${
                  activeTab === mod.num
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  activeTab === mod.num ? 'bg-white text-blue-600' : 'bg-slate-200 text-slate-600'
                }`}>
                  {mod.num}
                </span>
                <span className="truncate max-w-[130px]">
                  {mod.name}
                </span>
              </button>
            ))}

            {/* Extra tab: Templates Library */}
            <button
              onClick={() => setActiveTab(7)}
              className={`py-2 px-4 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all flex-shrink-0 ${
                activeTab === 7
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText size={14} />
              <span>DMR Templates</span>
            </button>
          </div>

          {/* Active Tab Workspace Panel */}
          <div className="flex-1" id="tab-content-panel">
            {activeTab === 1 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-slate-700 space-y-8" id="phase-concept">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                      <Sparkles size={20} />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold text-slate-800 truncate">Module 1: Indian MDR 2017 Classifier Tool</h2>
                      <p className="text-xs text-slate-500 truncate">Master CDSCO drug and device risk pathways using the official rules-based classifier.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleCompleteMilestone('concept');
                    }}
                    className={`text-xs py-2 px-4 rounded-xl font-semibold transition-all ${
                      completedMilestones.concept
                        ? 'bg-green-50 text-green-700 border border-green-200 cursor-default'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-100'
                    }`}
                  >
                    {completedMilestones.concept ? '✓ Module 1 Completed' : 'Mark Module 1 as Done'}
                  </button>
                </div>

                {/* Interactive MDR Classifier widget */}
                <IndianMDRClassifier onClassificationCompleted={() => handleCompleteMilestone('concept')} />
              </div>
            )}

            {activeTab === 2 && (
              <ForgeFlowStentStory onStoryCompleted={() => handleCompleteMilestone('biocompatibility')} />
            )}

            {activeTab === 3 && (
              <BiocompatibilityEvaluator onTaskCompleted={handleCompleteMilestone} />
            )}

            {activeTab === 4 && (
              <DesignControlsTracer onTaskCompleted={handleCompleteMilestone} />
            )}

            {activeTab === 5 && (
              <RiskManagementBoard onTaskCompleted={handleCompleteMilestone} />
            )}

            {activeTab === 6 && (
              <div className="space-y-4">
                {/* Local sub-tabs selector */}
                <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex gap-2">
                  <button
                    onClick={() => setPmsActiveSubTab('transfer')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                      pmsActiveSubTab === 'transfer'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    🏭 1. Design Transfer (IQ/OQ/PQ)
                  </button>
                  <button
                    onClick={() => setPmsActiveSubTab('pms')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl transition-all ${
                      pmsActiveSubTab === 'pms'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    🛡️ 2. Post-Market Surveillance (PMS)
                  </button>
                </div>
                <DesignTransferAndPMS activeSubTab={pmsActiveSubTab} onTaskCompleted={handleCompleteMilestone} />
              </div>
            )}

            {activeTab === 7 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6" id="templates-library">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">DMR & RAC Consult Templates Library</h2>
                    <p className="text-xs text-slate-500">Download compliant Markdown and CSV templates formatted specifically for Class D devices.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {REGULATORY_TEMPLATES.map((tpl) => (
                    <div key={tpl.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 hover:border-slate-300 transition-colors text-xs flex flex-col justify-between">
                      <div className="space-y-1.5 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 font-bold font-mono text-[9px] rounded uppercase">{tpl.fileType}</span>
                          <span className="text-[10px] text-slate-400 font-mono">{tpl.fileName}</span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm leading-snug">{tpl.name}</h4>
                        <p className="text-slate-500 text-[11px] leading-relaxed">{tpl.description}</p>
                      </div>
                      <button
                        onClick={() => handleDownloadTemplate(tpl.id)}
                        className="w-full text-xs bg-slate-800 hover:bg-slate-900 text-white rounded-xl py-2 font-semibold flex justify-center items-center gap-1.5 transition-colors mt-auto"
                      >
                        <Download size={14} /> Download {tpl.fileType === 'csv' ? 'Spreadsheet (CSV)' : 'Doc Template (MD)'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Academy Supervisor Coach & Progress - 4 Cols */}
        <div className="lg:col-span-4 space-y-6 flex flex-col" id="academy-sidebar">
          {/* Progress Ring / Dashboard Widget */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center" id="academy-progress">
            <div className="flex items-center gap-1.5 mb-4 text-left">
              <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                <Users size={16} />
              </span>
              <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">RAC Forge Academy Score</h3>
            </div>

            <div className="relative inline-flex items-center justify-center mb-3">
              <svg className="w-24 h-24 transform -rotate-90">
                {/* Background Ring */}
                <circle
                  cx="48"
                  cy="48"
                  r="38"
                  strokeWidth="8"
                  stroke="#f1f5f9"
                  fill="transparent"
                />
                {/* Foreground Progress */}
                <circle
                  cx="48"
                  cy="48"
                  r="38"
                  strokeWidth="8"
                  stroke="#2563eb"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 38}
                  strokeDashoffset={2 * Math.PI * 38 * (1 - overallPercentage / 100)}
                  className="transition-all duration-500"
                />
              </svg>
              <span className="absolute text-xl font-black text-slate-800 font-mono">
                {overallPercentage}%
              </span>
            </div>

            <span className="text-xs font-bold text-slate-700 block mb-1">
              Class D Onboarding Training Project
            </span>
            <p className="text-[10px] text-slate-400 mb-4">
              Complete each active step's requirements to prove standard compliance.
            </p>

            {/* Checklist of steps */}
            <div className="space-y-2 text-left border-t border-slate-100 pt-4">
              {Object.entries(completedMilestones).map(([key, isDone]) => {
                let label = '';
                if (key === 'concept') label = 'M1. Indian MDR 2017 Classifier';
                else if (key === 'biocompatibility') label = 'M2. Stent Story Completed';
                else if (key === 'design_files') label = 'M3. Biocompatibility Mapped';
                else if (key === 'risk') label = 'M4. Design Controls Trace';
                else if (key === 'design_transfer') label = 'M5. FMEA Hazards Mitigated';
                else if (key === 'pms') label = 'M6. Transfer & PMS Released';

                return (
                  <div key={key} className="flex items-center justify-between text-xs">
                    <span className={isDone ? 'text-slate-400 line-through' : 'text-slate-600 font-medium'}>
                      {label}
                    </span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] font-bold ${
                      isDone ? 'bg-green-100 border-green-300 text-green-700' : 'bg-slate-50 border-slate-200 text-transparent'
                    }`}>
                      ✓
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Supervisor's Guided Narration / The Story Thread */}
          <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl shadow-md flex-1 flex flex-col justify-between" id="narrator-console">
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase">
                  Supervisor Story Console
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] text-blue-400 font-bold block uppercase">{activePhaseInfo.subtitle}</span>
                <h4 className="font-extrabold text-sm leading-tight text-white">{activePhaseInfo.title}</h4>
              </div>

              {/* Dynamic scrollable text segment */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1 text-[11px] leading-relaxed text-slate-300 scrollbar-thin">
                {activePhaseInfo.narration.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Objectives Footer */}
            <div className="mt-5 pt-4 border-t border-slate-800 space-y-3 bg-slate-900">
              <div>
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wide block mb-1">Learning Outcomes</span>
                <ul className="text-[10px] text-slate-400 space-y-1 pl-2 list-disc">
                  {activePhaseInfo.learningObjectives.map((obj, oIdx) => (
                    <li key={oIdx}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/50 text-[10px]">
                <strong className="text-white font-semibold">Active Assignment:</strong>{' '}
                <span className="text-slate-300">{activePhaseInfo.internAssignment}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-3 text-center text-slate-400 text-[10px] shrink-0 relative">
        © 2026 RAC Forge Private Limited. Developed for internal regulatory training, design control education, and biocompatibility safety audits.
      </footer>

      {/* Loading Indicator for AI Definitions */}
      {isLoadingTerm && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700 animate-pulse z-50">
          <Activity size={18} className="text-indigo-400 animate-spin" />
          <span className="text-sm font-medium">Analyzing term...</span>
        </div>
      )}

      {(globalHelpTerm || dynamicTermData) && (
        <RegulatoryTermsPopup
          termId={globalHelpTerm || undefined}
          termData={dynamicTermData}
          onClose={() => {
            setGlobalHelpTerm(null);
            setDynamicTermData(null);
          }}
        />
      )}
    </div>
  );
}
