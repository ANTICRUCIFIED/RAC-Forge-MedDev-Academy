import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter14() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (viii): Invasive (Body Orifice) Devices for Connection to Active Devices</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying invasive connectors, masks, or cannulas designed to bridge orifices to powered clinical systems under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand why the duration of use is completely bypassed under Rule (viii).</li>
          <li>Explain why connecting an orifice-invasive device to a powered machine poses a consistent risk.</li>
          <li>Accurately classify oxygen masks or suction adapters into Class B.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        14.1 Introduction to Rule (viii)
      </h3>
      <p>
        Usually, how long a device stays in the body determines its class. But Rule (viii) is an exception. If an orifice-invasive device connects directly to an active system (like a ventilator or high-vacuum suction pump), any malfunction of the machine immediately affects the patient through that device. For this reason, these are always grouped together.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.2 Criteria and Class</h3>
      
      <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50 my-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-amber-950 font-bold text-lg m-0">No Subparts &rarr; Class B (Low-Moderate Risk)</h4>
          <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
        </div>
        <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
        <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
          Assigned regardless of the duration of its use, if it is intended to be connected to an active medical device which is in Class B, C, or D.
        </p>
        <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
        <p className="text-sm text-slate-700 m-0">
          Even if an oxygen mask is used for only 5 minutes (which normally would be transient, Class A), if that mask connects to a powered clinical ventilator (Class C Active Device), any high pressure or system failure could immediately burst the patient's lungs. Therefore, the connection to active systems mandates a baseline of Class B.
        </p>
        <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
        <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
          <li>Oxygen masks connected to active hospital ventilators</li>
          <li>Suction cannulas or tubes connected to active suction systems</li>
          <li>Invasive enteral feeding tubes hooked up to enteral pumps</li>
          <li>Nasal cannulas connected to active oxygen concentrators</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 14.3 Decision Logic</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Orifice-Invasive Device" />
          <Arrow />
          <DecisionNode text="Is it intended to connect to an Active Device in Class B, C, or D?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="B"
                subpart="Rule (viii)"
                title="Class B - Active Connected Orifice"
                examples={["Ventilator oxygen masks", "Active enteral feeding tube connectors"]}
              />
            }
            rightChild={
              <div className="bg-slate-50 border border-slate-300 p-4 rounded-xl text-left max-w-[200px] text-xs shadow-sm">
                <span className="font-bold block mb-1 text-slate-900">Standard Duration Rules</span>
                Classify via:
                <ul className="list-disc pl-4 mt-1 text-[10px] text-slate-600">
                  <li>Rule (v) - Transient</li>
                  <li>Rule (vi) - Short-term</li>
                  <li>Rule (vii) - Long-term</li>
                </ul>
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 14.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">An oxygen mask is used to administer supplemental oxygen for 45 minutes (transient use) from a wall-mounted active respiratory ventilator. What is its class?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class A - transient passive use</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class B (Rule viii - connected to an active ventilator system)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li>Rule (viii) has no subparts and always assigns devices to <strong>Class B</strong>.</li>
          <li>It overrides duration of use rules if the device connects to a Class B, C, or D active system.</li>
          <li>Standard examples are oxygen masks, ventilator tubes, and active suction tips.</li>
        </ul>
      </div>

    </div>
  );
}
