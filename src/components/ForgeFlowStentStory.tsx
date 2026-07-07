import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ChevronRight, ChevronLeft, Award, Sparkles, BookOpen, Activity, PlayCircle } from 'lucide-react';
import IndianMDRClassifier from './IndianMDRClassifier';

interface ForgeFlowStentStoryProps {
  onStoryCompleted: () => void;
}

export default function ForgeFlowStentStory({ onStoryCompleted }: ForgeFlowStentStoryProps) {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [analysisDone, setAnalysisDone] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  // Story slides definitions
  const slides = [
    {
      title: 'Phase 1: The Clinical Need & The Chemical Concept',
      subtitle: 'Coronary Stenosis and The Birth of ForgeFlow DES',
      icon: <Sparkles className="text-amber-500" size={24} />,
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            In modern cardiology, **Atherosclerosis** (plaque build-up in coronary arteries) remains a leading cause of heart attacks. When an artery is severely narrowed (stenosed), blood flow to the cardiac muscle drops, causing chest pain (angina) or tissue death (myocardial infarction).
          </p>
          
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-slate-100 flex flex-col md:flex-row gap-4 items-center">
            <div className="space-y-2 md:w-3/5">
              <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono font-bold uppercase">
                The Product Properties
              </span>
              <h4 className="font-bold text-white text-sm">ForgeFlow Drug-Eluting Coronary Stent (DES)</h4>
              <ul className="space-y-1 text-[11px] list-disc pl-4 text-slate-300">
                <li><strong>Base Scaffold:</strong> L605 Cobalt-Chromium alloy mesh (rigid physical strut).</li>
                <li><strong>Active Coating:</strong> Biodegradable Poly(lactic-co-glycolic acid) [PLGA] polymer layer.</li>
                <li><strong>Therapeutic Drug:</strong> **Sirolimus** (an immunosuppressive active pharmaceutical ingredient designed to stop local cell division and prevent tissue scarring/restenosis).</li>
              </ul>
            </div>

            {/* Interactive SVG: Coronary Plaque vs Stent */}
            <div className="md:w-2/5 w-full bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-center">
              <span className="text-[9px] text-slate-400 font-mono block mb-1.5">Vascular Cross-Section</span>
              <svg viewBox="0 0 200 120" className="w-full h-24 mx-auto">
                {/* Blood vessel walls */}
                <path d="M 10 30 Q 100 20, 190 30" fill="none" stroke="#dc2626" strokeWidth="4" />
                <path d="M 10 90 Q 100 100, 190 90" fill="none" stroke="#dc2626" strokeWidth="4" />
                
                {/* Plaque build-up */}
                <path d="M 60 30 Q 100 55, 140 30" fill="#eab308" opacity="0.8" />
                <path d="M 60 90 Q 100 65, 140 90" fill="#eab308" opacity="0.8" />
                
                {/* Red blood cells */}
                <circle cx="30" cy="50" r="3" fill="#ef4444" />
                <circle cx="45" cy="65" r="3.5" fill="#ef4444" />
                <circle cx="165" cy="55" r="3" fill="#ef4444" />

                {/* Stent mesh expansion arrow */}
                <g transform="translate(70, 48)">
                  <rect x="0" y="0" width="60" height="24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 1" />
                  <line x1="0" y1="0" x2="60" y2="24" stroke="#cbd5e1" strokeWidth="1" />
                  <line x1="0" y1="24" x2="60" y2="0" stroke="#cbd5e1" strokeWidth="1" />
                </g>
                
                <text x="100" y="112" fill="#94a3b8" fontSize="8" textAnchor="middle">Expanded Stent pushing Plaque</text>
              </svg>
            </div>
          </div>

          <p>
            **The Challenge:** A simple metallic mesh (bare-metal stent) cures the physical occlusion but causes localized tissue irritation. The artery heals by multiplying cells rapidly, causing scarring that reclogs the channel in 6 months. To prevent this, our stent must be a drug-device combination that slowly elutes **Sirolimus** over 90 days.
          </p>
        </div>
      )
    },
    {
      title: 'Phase 2: ForgeFlow DES Risk Classification',
      subtitle: 'The Core Regulatory Analyzer Challenge',
      icon: <Activity className="text-indigo-500" size={24} />,
      content: (
        <div className="space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            Every medical engineer must mathematically justify their risk category. Answer these 3 quick questions about the ForgeFlow DES properties to activate the Indian MDR 2017 Classifier:
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 space-y-3.5">
            {/* Q1 */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-800 block">1. What is the Intended Contact Site of ForgeFlow DES?</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUserAnswers(prev => ({ ...prev, site: 'circulatory' }))}
                  className={`p-2 text-left text-xs rounded-xl border transition-all ${
                    userAnswers.site === 'circulatory'
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  ❤️ Direct Central Circulatory System (Coronary Arteries)
                </button>
                <button
                  type="button"
                  onClick={() => setUserAnswers(prev => ({ ...prev, site: 'other' }))}
                  className={`p-2 text-left text-xs rounded-xl border transition-all ${
                    userAnswers.site === 'other'
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  🦴 Other general internal tissues or bone structure
                </button>
              </div>
            </div>

            {/* Q2 */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-800 block">2. What is the intended Contact Duration of the device inside the heart?</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUserAnswers(prev => ({ ...prev, duration: 'permanent' }))}
                  className={`p-2 text-left text-xs rounded-xl border transition-all ${
                    userAnswers.duration === 'permanent'
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  ♾️ Permanent Implantable (&gt; 30 Days)
                </button>
                <button
                  type="button"
                  onClick={() => setUserAnswers(prev => ({ ...prev, duration: 'transient' }))}
                  className={`p-2 text-left text-xs rounded-xl border transition-all ${
                    userAnswers.duration === 'transient'
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  ⏱️ Transient (&lt; 24 Hours)
                </button>
              </div>
            </div>

            {/* Q3 */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-800 block">3. Does the device incorporate an active drug (Sirolimus)?</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUserAnswers(prev => ({ ...prev, drug: 'yes' }))}
                  className={`p-2 text-left text-xs rounded-xl border transition-all ${
                    userAnswers.drug === 'yes'
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  💊 Yes, releases Sirolimus to prevent restenosis
                </button>
                <button
                  type="button"
                  onClick={() => setUserAnswers(prev => ({ ...prev, drug: 'no' }))}
                  className={`p-2 text-left text-xs rounded-xl border transition-all ${
                    userAnswers.drug === 'no'
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  🚫 No, simple bare-metal physical support mesh
                </button>
              </div>
            </div>
          </div>

          {/* If all answered, load interactive classification widget pre-populated */}
          {userAnswers.site && userAnswers.duration && userAnswers.drug && (
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-800 block">Validated Classification Tool Output:</span>
              <IndianMDRClassifier
                isSecondModuleMode={true}
                onClassificationCompleted={() => setAnalysisDone(true)}
              />
            </div>
          )}
        </div>
      )
    },
    {
      title: 'Phase 3: Design Control Translation (DHF Inputs & Outputs)',
      subtitle: 'From Surgeon Need to Mechanical CAD Specifications',
      icon: <BookOpen className="text-indigo-500" size={24} />,
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            Once our classification is established as **Class D (Rule 13 / Rule 8)**, we trigger full **Design Controls**. We cannot just jump to a metal lathe. Every engineering decision must link to a physician need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="font-extrabold text-indigo-700 block text-[10px]">1. CLINICAL USER NEED (UN)</span>
              <p className="mt-1 leading-relaxed text-[11px] text-slate-700">
                "The catheter system must cross tight vascular lesions easily without damaging delicate coronary walls."
              </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="font-extrabold text-blue-700 block text-[10px]">2. ENGINEERING DESIGN INPUT (DI)</span>
              <p className="mt-1 leading-relaxed text-[11px] text-slate-700">
                "The maximum catheter profile at the crossing tip shall be &lt; 0.040 inches (1.02 mm) to assure lesion bypass capability."
              </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="font-extrabold text-emerald-700 block text-[10px]">3. MECHANICAL DESIGN OUTPUT (DO)</span>
              <p className="mt-1 leading-relaxed text-[11px] text-slate-700">
                "CAD Drawing D-5001 detailing the tapered hydrophilic-coated tip with a core polymer weld thickness of 50 μm."
              </p>
            </div>
          </div>

          <p>
            This sequence forms the spine of our **Design History File (DHF)**. An auditor from CDSCO or an EU Notified Body will select random features of the physical stent and force you to trace it backwards to the original clinical study. If a link is missing, you receive a major non-conformance.
          </p>
        </div>
      )
    },
    {
      title: 'Phase 4: Biocompatibility & Pre-Clinical Validation',
      subtitle: 'Proving Blood Safety and Material Characterization',
      icon: <Activity className="text-rose-500" size={24} />,
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            Before we can test our Class D stent in human clinical trials, we must prove its safety on the bench and in pre-clinical models. We follow **ISO 10993-1** rules.
          </p>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <strong className="text-slate-800 text-[11px] block">The pre-clinical evaluation of ForgeFlow DES involves 3 strict milestones:</strong>
            <ul className="space-y-2 text-[11px]">
              <li className="flex items-start gap-2">
                <span className="p-0.5 bg-blue-100 text-blue-700 font-bold rounded text-[9px] font-mono mt-0.5">STEP 1</span>
                <span><strong>ISO 10993-18 Extractables Chemical Mapping:</strong> We boil the stent in extreme solvents (Hexane, Isopropanol) to leach out any toxic processing chemicals, plasticizers, or catalytic metals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="p-0.5 bg-blue-100 text-blue-700 font-bold rounded text-[9px] font-mono mt-0.5">STEP 2</span>
                <span><strong>ISO 10993-4 Hemocompatibility Assay:</strong> We wash the stent struts in freshly drawn human blood to verify that the Cobalt-Chromium or Sirolimus doesn't rupture red blood cells (hemolysis) or trigger platelets to form clots (thrombogenicity).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="p-0.5 bg-blue-100 text-blue-700 font-bold rounded text-[9px] font-mono mt-0.5">STEP 3</span>
                <span><strong>GCP Human Clinical Trials:</strong> After getting animal approval, we conduct human registry trials measuring **Target Lesion Failure (TLF)** over 12 months in 300 patients to prove true clinical safety.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Phase 5: Commercial Clearance & active PMS loops',
      subtitle: 'Unlocking the CE Mark and CDSCO Manufacturing Licenses',
      icon: <Award className="text-green-500" size={24} />,
      content: (
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            Congratulations! After compiling the Design History File (DHF), validating our cleanroom process under **GHTF guidelines (IQ/OQ/PQ)**, and proving clinical safety, CDSCO issues Form MD-9 (Manufacturing License) and we receive our CE Mark.
          </p>

          <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-2">
            <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-600" />
              ForgeFlow DES is Now Clinically Cleared!
            </h4>
            <p className="text-[11px] text-emerald-900 leading-relaxed">
              We can now distribute the stent globally. However, regulatory requirements never sleep. Under EU MDR and Indian MDR, we are legally required to launch **Post-Market Clinical Follow-up (PMCF)** registry trials, track customer complaint signals, and submit an annual **PSUR (Periodic Safety Update Report)**.
            </p>
          </div>

          <p>
            By working through this story, you have mastered the complete medical device stage-gate lifecycle - from a cardiac clinician's brief idea to a cleared life-saving Class D commercial product!
          </p>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex(prev => prev + 1);
    } else {
      onStoryCompleted();
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  };

  const activeSlide = slides[slideIndex];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6" id="stent-story-board">
      {/* Slide Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
            {activeSlide.icon}
          </span>
          <div>
            <h3 className="font-extrabold text-slate-800 text-sm">{activeSlide.title}</h3>
            <p className="text-[10px] text-slate-500">{activeSlide.subtitle}</p>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                slideIndex === i ? 'bg-indigo-600 w-4' : 'bg-slate-200'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Slide Content */}
      <div className="min-h-[220px] py-2">
        {activeSlide.content}
      </div>

      {/* Slide Navigation footer */}
      <div className="flex justify-between items-center border-t border-slate-100 pt-4">
        <button
          onClick={handlePrev}
          disabled={slideIndex === 0}
          className={`text-xs py-2 px-4 rounded-xl border font-bold transition-all flex items-center gap-1 ${
            slideIndex === 0
              ? 'border-slate-100 text-slate-300 cursor-not-allowed'
              : 'border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <ChevronLeft size={14} /> Back
        </button>

        {slideIndex === 1 && !analysisDone ? (
          <span className="text-[10px] text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg font-bold">
            ⚠️ Complete the analyzer checklist to proceed!
          </span>
        ) : (
          <button
            onClick={handleNext}
            className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-indigo-100 transition-all flex items-center gap-1"
          >
            {slideIndex === slides.length - 1 ? 'Unlock & Save Progress' : 'Continue'} <ChevronRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
