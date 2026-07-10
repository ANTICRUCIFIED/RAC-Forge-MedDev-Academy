import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb, AlertCircle } from 'lucide-react';

export default function Chapter7() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (ii): Non-Invasive Medical Devices for Channeling or Storing Substances</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying tubes, bags, syringes, and containers used to hold or guide liquids and gases under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand how storing and channeling liquids or gases can carry safety risks.</li>
          <li>Distinguish the three key subparts of Rule (ii): <strong>Subpart (a)</strong>, <strong>Subpart (b)</strong>, and <strong>Subpart (c)</strong>.</li>
          <li>Identify why connection to active devices or handling blood elevates a device to Class B.</li>
          <li>Explain why a standard blood bag is assigned to Class C under Subpart (c).</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        7.1 Introduction to Rule (ii)
      </h3>
      <p>
        Any device that acts as a conduit or container for fluids or gases destined to enter the human body (or retrieved from the body) must be regulated. Standard gravity-fed or collection items have low risks. However, if the device is connected to active pumps, handles blood, or stores organs, the risks increase.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-emerald-950 font-bold text-lg m-0">Subpart (a) &rarr; Class A (Low Risk)</h4>
            <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
          </div>
          <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
            Subject to subparts (b) and (c), intended for channeling or storing body liquids or tissues, or liquids or gases for eventual infusion, administration, or introduction into a human body.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Standard, static containers or simple gravity-fed pipelines. They do not involve pressurized forces, high risk biological interfaces, or active mechanical components.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Standard gravity-fed administration tubing (no pump)</li>
            <li>Urine collection bags & containers</li>
            <li>Syringe barrels without needles</li>
            <li>Saliva collection cups</li>
          </ul>
        </div>

        {/* Subpart (b) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (b) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <div className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            If the device is:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Intended to be connected to an active medical device in Class B, C, or D (where safety/performance of either device is mutually influenced); or</li>
              <li>Intended for channeling blood; or</li>
              <li>Intended for storing or channeling other body liquids; or</li>
              <li>Intended for storing organs, parts of organs, or body tissues.</li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Risk rises when connected to powered machines (like automated drug pumps) where pressure build-up or failure of tubing could result in overdoses or tube ruptures. Storing organs or dealing with blood also raises biological risks.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Tubing sets for active infusion pumps</li>
            <li>Blood administration/transfusion sets</li>
            <li>Organ or tissue storage containers</li>
            <li>Syringes used with automated syringe pumps</li>
          </ul>
        </div>

        {/* Subpart (c) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (c) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If it is a blood bag that does not incorporate a medicinal product. <em>(Note: If it does incorporate a medicinal product, it escalates to Rule xv).</em>
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Blood bags act as critical storage systems for life-saving biological fluids. Preserving blood integrity and avoiding contamination is highly critical, hence they are classified as Class C.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Sterile blood collection bags containing anticoagulant</li>
            <li>Blood component storage bags</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 7.3 Rule (ii) Decision Flow</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Channel or Store Fluids" />
          <Arrow />
          <DecisionNode text="Is it a blood bag?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="C"
                subpart="Subpart (c)"
                title="Class C - Blood Preservation Container"
                examples={["Sterile blood bags", "Plasma components bags"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center">
                <DecisionNode text="Does it channel/store blood, store organs, or connect to Class B/C/D Active Device?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="B"
                      subpart="Subpart (b)"
                      title="Class B - High Risk Routing"
                      examples={["Infusion pump tubing", "Organ preservation cold boxes"]}
                    />
                  }
                  rightChild={
                    <OutcomeCard
                      clazz="A"
                      subpart="Subpart (a)"
                      title="Class A - Low Risk Storage/Channelling"
                      examples={["Static urine bags", "Standard gravity IV tubing lines"]}
                    />
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 7.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">What classification rule and subpart apply to disposable tubing used to connect an active chemotherapy infusion pump (Class C) to a patient?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Rule (ii) Subpart (a) - Class A</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Rule (ii) Subpart (b) - Class B (Connected to Class C Active Device)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Rule (ii) Subpart (c) - Class C</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class A: Static storage or standard gravity-fed channels.</li>
          <li><strong>Subpart (b)</strong> = Class B: Pressure-driven channels (active connection), blood path, organ storage.</li>
          <li><strong>Subpart (c)</strong> = Class C: Blood bags (without drugs).</li>
        </ul>
      </div>

    </div>
  );
}
