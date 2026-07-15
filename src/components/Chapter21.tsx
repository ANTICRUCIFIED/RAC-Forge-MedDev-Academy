import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter21() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xiv): Other Active Medical Devices</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "The default classification group for any general powered medical support systems under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Identify why Rule (xiv) acts as the baseline catch-all for active devices.</li>
          <li>Accurately classify motorized clinical accessories (like hospital beds or dental chairs) into Class A.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        21.1 Introduction to Rule (xiv)
      </h3>
      <p>
        If an active device is neither therapeutic (Rule xii) nor diagnostic (Rule xiii), it represents low-risk active hardware. Rule (xiv) captures these mechanical, non-treatment, non-measurement medical support appliances.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.2 Criteria and Class</h3>
      
      <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50 my-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-emerald-950 font-bold text-lg m-0">No Subparts &rarr; Class A (Low Risk)</h4>
          <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
        </div>
        <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
        <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
          Applies to all other active medical devices not covered under previous active rules.
        </p>
        <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
        <p className="text-sm text-slate-700 m-0">
          These products consume power to operate motors or basic lights but do not administer biological shock, ionizing particles, chemicals, or direct therapeutic treatment to internal patient structures.
        </p>
        <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
        <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
          <li>Electric hospital beds (motorized controls)</li>
          <li>Surgical room overhead lights (non-imaging)</li>
          <li>Powered examination tables & chairs</li>
          <li>Active battery chargers for medical hardware</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 21.3 Decision Logic</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Is it an Active Device?" />
          <Arrow />
          <DecisionNode text="Is it intended for therapy / energy exchange? (Rule xii)" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="Matches Active"
                subpart="Rule (xii)"
                title="Rule (xii) Active Therapeutic"
                examples={["Energy exchanges", "Treatment units"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="Is it intended for diagnosis / imaging / vitals monitoring? (Rule xiii)" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="Matches Active"
                      subpart="Rule (xiii)"
                      title="Rule (xiii) Active Diagnostic"
                      examples={["CT, MRI", "Patient monitor screens"]}
                    />
                  }
                  rightChild={
                    <OutcomeCard
                      clazz="A"
                      subpart="Rule (xiv)"
                      title="Class A - Default Active"
                      examples={["Motorized hospital beds", "Overhead surgical lights"]}
                    />
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 21.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">An ICU ward installs motorized adjustable electric beds. What classification applies to these beds under the active rules?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class A - Rule (xiv) Other Active Device</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - therapeutic positioning</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li>Rule (xiv) contains no subparts and is always <strong>Class A</strong>.</li>
          <li>It represents general powered mechanical support systems.</li>
          <li>Devices governed by Rule (xiv) include motorized hospital beds, surgical suite lights, and powered tables.</li>
        </ul>
      </div>

    </div>
  );
}
