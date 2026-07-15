import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter8() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (iii): Non-Invasive Medical Devices for Modifying Compositions of Substances</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying filtration, heat exchangers, centrifuges, and biochemical blood treatment devices under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Explain how modifying fluids outside the body (extracorporeal) introduces high clinical risks.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class C) and <strong>Subpart (b)</strong> (Class B).</li>
          <li>Explain why physical changes like filtering, centrifuging, and warming/cooling carry lower risks than biochemical modifications.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        8.1 Introduction to Rule (iii)
      </h3>
      <p>
        Sometimes, liquids (especially blood) must be extracted from the body, modified to clean or treat them, and then re-infused. Because this liquid directly returns to the circulatory system, any contamination, air emboli, or composition error can cause immediate life-threatening events.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (a) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            Subject to subpart (b), intended for modifying the biological or chemical composition of blood, other body liquids, or other liquids intended for infusion into the body.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Complex chemical or biochemical changes. These active column elements or dialyzers remove waste, toxins, or blood components at a molecular level.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Hemodialyzers (filters containing active dialysis membranes)</li>
            <li>Extracorporeal blood purification columns / absorption columns</li>
            <li>Toxin-binding molecular filtration units</li>
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
            If the intended modification is carried out by filtration, centrifuging, or any exchange of gas or heat.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Physical separation or conditioning. This involves simple mechanics like spinning (centrifuging), warming/cooling, or catching large clots (filtration). Since no complex molecular or chemical changes take place, the risk is slightly lower.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Blood warming or cooling heat exchangers</li>
            <li>Microemboli blood filters (for trapping clots)</li>
            <li>Blood centrifuges (for physical cell separation)</li>
            <li>Thermal conditioning adapters for fluids</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 8.3 Rule (iii) Decision Flow</h3>
      <InteractiveFlowchart minHeight="300px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Fluid Composition Modification" />
          <Arrow />
          <DecisionNode text="Is the modification purely physical (filtration, centrifuging, gas/heat exchange)?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="B"
                subpart="Subpart (b)"
                title="Class B - Physical Modification"
                examples={["Donor blood warmers", "Microemboli clot filters", "Blood centrifuges"]}
              />
            }
            rightChild={
              <OutcomeCard
                clazz="C"
                subpart="Subpart (a)"
                title="Class C - Chemical/Biochemical Modification"
                examples={["Hemodialyzers", "Selective toxin absorption cartridges"]}
              />
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 8.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">Which class is correct for a thermal heat-exchanger adapter used to warm donor blood before active transfusion?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class B (Subpart b - physical heat exchange)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class C (Subpart a - biochemical modification)</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class C: Biological or chemical modification (molecular/biochemical change).</li>
          <li><strong>Subpart (b)</strong> = Class B: Physical modifications (filtering, spinning, heating, cooling).</li>
        </ul>
      </div>

    </div>
  );
}
