import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter23() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xvi): Medical Devices Incorporating Animal or Human Materials</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying biological implants, collagen, porcine valves, and skin-contact animal-derivative components under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand how animal-derived or human-derived biological tissues are controlled.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class D) and <strong>Subpart (b)</strong> (Class A).</li>
          <li>Explain why biological materials contacting open wounds or bloodstream require Class D, while intact-skin contact drops to Class A.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        23.1 Biological Sourcing Risks
      </h3>
      <p>
        Tissues or cells harvested from animals (porcine, bovine, ovine) or humans carry unique safety concerns: transmission of viral diseases, zoonotic infections (like Mad Cow disease/TSE), and severe host immune reactions. Because of this, these materials undergo extreme regulatory scrutiny.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (a) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            Subject to subpart (b), if it is manufactured utilizing animal tissues or derivatives or human cells, tissues, or derivatives, rendered non-viable.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Any biological material that gets implanted, contacts injured skin, or gets absorbed into internal organs carries a high likelihood of pathogenic transmission if sterilization or processing fails.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Porcine (pig) heart valves / bovine heart valves</li>
            <li>Collagen matrices / collagen sheets derived from animal skin</li>
            <li>Catgut surgical sutures (processed from sheep/cattle intestines)</li>
            <li>Bone repair matrices sourced from bovine bones</li>
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
            If the device in subpart (a) is intended to come into contact with intact skin only.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            When a biological component (like sheepskin leather or animal gelatin pads) only touches completely healthy, unbroken skin, pathogens cannot penetrate into the circulatory system, making the biological transmission hazard near-zero.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Leather supporting straps on orthopedic braces</li>
            <li>Gelatin adhesive backing on external electrode pads (intact skin only)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 23.3 Rule (xvi) Decision Flow</h3>
      <InteractiveFlowchart minHeight="300px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Animal or Human Materials" />
          <Arrow />
          <DecisionNode text="Is it intended to come into contact with intact skin only?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="A"
                subpart="Subpart (b)"
                title="Class A - Intact Skin contact"
                examples={["Leather straps", "Electrode gelatin pads"]}
              />
            }
            rightChild={
              <OutcomeCard
                clazz="D"
                subpart="Subpart (a)"
                title="Class D - Invasive Biological Device"
                examples={["Catgut sutures", "Porcine heart valves"]}
              />
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 23.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">What classification class is assigned to a surgical suture made of catgut under Indian rules?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - typical short-term suture</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class D (Subpart a - contains animal tissue derivatives contacting wound beds)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class D: Animal or human non-viable cellular/tissue products used inside the body (sutures, valves, bone matrix).</li>
          <li><strong>Subpart (b)</strong> = Class A: Animal/human derived materials touching healthy unbroken skin only.</li>
        </ul>
      </div>

    </div>
  );
}
