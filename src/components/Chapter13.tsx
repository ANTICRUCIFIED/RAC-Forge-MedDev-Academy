import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter13() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (vii): Invasive (Body Orifice) Medical Devices for Long-Term Use</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Continuous use for more than 30 days inside a natural body opening under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "long term use" under Indian MDR 2017.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class C) and <strong>Subpart (b)</strong> (Class B) under Rule (vii).</li>
          <li>Explain why long-term contact with mucosal surfaces elevates risks to Class C.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        13.1 What Is Long-Term Use?
      </h3>
      <p>
        **Long-Term Use** refers to continuous use for more than 30 days. Devices in this category remain inside a patient's natural openings for months, demanding high bio-compatibility and chemical stability.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (a) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            Subject to subpart (b), if it is intended for long term use, and not intended to be connected to an active medical device (or connected to Class A only).
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Sustained mucosal contact for over a month poses severe risks of mucosal erosion, systemic chemical leaching, localized cell damage, or chronic blockages.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Long-term urethral stents</li>
            <li>Long-term enteral feeding tubes (e.g., G-tubes)</li>
            <li>Long-term esophageal stents</li>
            <li>Long-term tracheostomy tubes</li>
          </ul>
        </div>

        {/* Subpart (b) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (b) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            If the device is intended for use in an oral cavity as far as the pharynx, in an ear canal up to the eardrum, or in a nasal cavity; AND is not liable to be absorbed by the mucous membrane.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            While these devices stay in place long-term (like braces), the oral, ear, or nasal cavities are far less vulnerable to life-threatening complications. Hence, they are limited to Class B.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Permanent orthodontic wires & brackets</li>
            <li>Long-term dental prostheses / bridges</li>
            <li>Maxillary splints (long-term)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 13.3 Rule (vii) Decision Flow</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Long-Term Orifice Contact (&gt;30d)" />
          <Arrow />
          <DecisionNode text="Is it used in oral cavity to pharynx, ear to eardrum, or nasal cavity, AND not absorbed?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="B"
                subpart="Subpart (b)"
                title="Class B - Low-Risk Long-Term"
                examples={["Permanent braces / brackets", "Prosthetic dental bridges"]}
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
                      clazz="C"
                      subpart="Subpart (a)"
                      title="Class C - High-Risk Long-Term Orifice"
                      examples={["Long-term urethral stents", "Long-term gastrostomy tubes"]}
                    />
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 13.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">A patient receives permanent orthodontic braces which are expected to stay in the mouth for 2 years. What class are these devices?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class B (Subpart b - oral use, long term, not absorbed)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class C - general long-term orifice device</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Long-Term Use</strong> = More than 30 days continuous contact.</li>
          <li><strong>Subpart (a)</strong> = Class C: Standard long-term orifice devices (G-tubes, airway stents).</li>
          <li><strong>Subpart (b)</strong> = Class B: Mouth, ear canal, or nasal cavity long-term installations.</li>
        </ul>
      </div>

    </div>
  );
}
