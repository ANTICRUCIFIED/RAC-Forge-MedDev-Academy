import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter12() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (vi): Invasive (Body Orifice) Medical Devices for Short-Term Use</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Continuous use for 60 minutes up to 30 days inside a natural body opening under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "short term use" under Indian MDR 2017.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class B) and <strong>Subpart (b)</strong> (Class A) under Rule (vi).</li>
          <li>Understand why shallow cavities like the oral cavity or ear canal carry lower risk than deeper cavities.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        12.1 What Is Short-Term Use?
      </h3>
      <p>
        <strong>Short-Term Use</strong> refers to continuous use for 60 minutes up to 30 days. These devices enter natural orifices and stay there for days or weeks (e.g. while a patient is recovering in a hospital ward).
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (a) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            Subject to subpart (b), if it is intended for short term use AND:
            <br />- It is not intended to be connected to an active medical device; or
            <br />- It is intended to be connected to a Class A medical device only.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Deeper body pathways (like the trachea, esophagus, or urethra) have delicate mucosal linings. Sustained contact for days can trigger localized inflammation, bacterial biofilm formation, or trauma.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Foley urinary catheters</li>
            <li>Tracheal (endotracheal) tubes</li>
            <li>Nasogastric (feeding) tubes</li>
            <li>Rectal tubes or catheters</li>
          </ul>
        </div>

        {/* Subpart (b) */}
        <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-emerald-950 font-bold text-lg m-0">Subpart (b) &rarr; Class A (Low Risk)</h4>
            <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
          </div>
          <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
            If the device is intended for use in an oral cavity as far as the pharynx, in an ear canal up to the eardrum, or in a nasal cavity; AND is not liable to be absorbed by the mucous membrane.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            The mouth (up to the throat), the ear canal (up to the eardrum), and the shallow nose are considered "outer" cavities. They are highly resilient, easy to access, and carry very low systemic risk, provided the device isn't absorbed.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Short-term dental impression materials</li>
            <li>Temporary dental crowns & bridges</li>
            <li>Temporary orthodontic retainers</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 12.3 Rule (vi) Decision Flow</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Short-Term Orifice Contact (60m-30d)" />
          <Arrow />
          <DecisionNode text="Is it used in oral cavity to pharynx, ear to eardrum, or nasal cavity, AND not absorbed?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="A"
                subpart="Subpart (b)"
                title="Class A - Standard Outer Orifice"
                examples={["Dental impression materials", "Temporary dental crowns"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="Is it connected to an active device other than Class A?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <div className="bg-sky-50 border-2 border-sky-400 p-4 rounded-xl text-left max-w-[200px] text-xs shadow-sm">
                      <span className="font-extrabold text-sky-900 block mb-1">Redirect to Rule (viii)</span>
                      Connected to active units (Class B)
                    </div>
                  }
                  rightChild={
                    <OutcomeCard
                      clazz="B"
                      subpart="Subpart (a)"
                      title="Class B - Standard Short-Term Orifice"
                      examples={["Urinary Foley catheters", "Tracheal ventilation tubes"]}
                    />
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 12.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">Which class is appropriate for a urinary Foley catheter left in place for 5 days?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class A - shallow cavity use</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class B (Subpart a - short-term urinary tract access)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Short-Term Use</strong> = 60 minutes to 30 days of continuous contact.</li>
          <li><strong>Subpart (a)</strong> = Class B: General short-term orifice devices (catheters, breathing tubes).</li>
          <li><strong>Subpart (b)</strong> = Class A: Oral, ear canal, or nasal cavity devices that are not absorbed.</li>
        </ul>
      </div>

    </div>
  );
}
