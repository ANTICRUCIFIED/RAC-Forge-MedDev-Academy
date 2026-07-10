import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter11() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (v): Invasive (Body Orifice) Medical Devices for Transient Use</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Continuous use for less than 60 minutes inside a natural body opening under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "transient use" under Indian MDR 2017.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class A) and <strong>Subpart (b)</strong> (Class B) under Rule (v).</li>
          <li>Understand how eyeball contact or mucous membrane absorption elevates patient risk.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        11.1 What Is Transient Use?
      </h3>
      <p>
        <strong>Transient Use</strong> is defined as continuous use for less than 60 minutes. Devices in this category enter the body through natural orifices (like the mouth, nose, ears, vagina, anus, or urethra) but only remain inside for a very short duration.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">11.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-emerald-950 font-bold text-lg m-0">Subpart (a) &rarr; Class A (Low Risk)</h4>
            <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
          </div>
          <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
            Subject to subpart (b), if it is intended for transient use AND:
            <br />- It is not intended to be connected to an active medical device; or
            <br />- It is intended to be connected to a Class A medical device only.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Because of the extremely short duration (under an hour) and the absence of complex electrical or mechanical power, the likelihood of systemic harm or infection is negligible.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Examination gloves</li>
            <li>Disposable tongue depressors</li>
            <li>Dental examination mirrors</li>
            <li>Temporary ear speculums</li>
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
            If the device is intended for use on the external surface of an eyeball, or is liable to be absorbed by the mucous membrane.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            The eyeball is extremely sensitive and delicate. Similarly, mucous membranes (like those in the mouth or nasal lining) are highly vascularized—meaning chemicals can easily get absorbed into the bloodstream. These factors escalate the risk.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Diagnostic contact lenses</li>
            <li>Drug-absorbable nasal packing (dissolving sheets)</li>
            <li>Mucosal absorbable dressing plugs</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 11.3 Rule (v) Decision Flow</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Transient Orifice Contact (&lt;60m)" />
          <Arrow />
          <DecisionNode text="Is it used on the eyeball OR absorbed by mucous membrane?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="B"
                subpart="Subpart (b)"
                title="Class B - Sensitive Orifice/Absorption"
                examples={["Diagnostic contact lenses", "Drug-absorbable nasal packing sheets"]}
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
                      clazz="A"
                      subpart="Subpart (a)"
                      title="Class A - Standard Transient Orifice"
                      examples={["Oral tongue depressors", "Invasive clinical exam gloves"]}
                    />
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 11.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">Which class is appropriate for diagnostic contact lenses used during an eye exam for 10 minutes?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class A - transient oral use</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class B (Subpart b - eyeball surface use)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Transient Use</strong> = under 60 minutes continuous duration.</li>
          <li><strong>Subpart (a)</strong> = Class A: Standard passive devices (depressors, gloves).</li>
          <li><strong>Subpart (b)</strong> = Class B: Eyeball contact or mucous membrane absorbable materials.</li>
        </ul>
      </div>

    </div>
  );
}
