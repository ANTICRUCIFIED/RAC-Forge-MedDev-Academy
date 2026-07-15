import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter22() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xv): Medical Devices Incorporating Medicinal Products</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying combination products containing drugs, antibiotics, or blood derivatives under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "combination device" and "ancillary action" under Indian MDR 2017.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class D) and <strong>Subpart (b)</strong> (Class D).</li>
          <li>Explain why incorporating any pharmaceutical or human blood derivative immediately triggers the highest risk classification.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        22.1 Introduction to Rule (xv)
      </h3>
      <p>
        When a medical device incorporates a substance that would be classified as a drug or medicine if used alone, it is a <strong>combination product</strong>. If the drug's purpose is to help the device do its job (such as a local antiseptic, an antibiotic on bone cement, or an anti-clogging drug on a stent), the action is called <strong>ancillary</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (a) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            Subject to subpart (b), if it incorporates as an integral part a substance which, if used separately, may be considered to be a medicinal product and which is liable to act upon the human body with action ancillary to that of the device.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Even if a device (like a bandage) is Class A, adding a drug layer (like silver antiseptic or painkiller) introduces pharmacokinetics, drug interactions, and potential systemic drug toxicity risks. This forces the device into Class D.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Drug-eluting coronary stents (releasing paclitaxel or sirolimus)</li>
            <li>Silver-impregnated sterile wound dressings (antibacterial)</li>
            <li>Orthopedic bone cements containing antibiotics</li>
            <li>Heparin-coated intravascular catheters (anti-clotting drug)</li>
          </ul>
        </div>

        {/* Subpart (b) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (b) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            If it incorporates as an integral part a human blood derivative.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Human blood derivatives (like albumin or thrombin) pose biological transmission risks, high immunological reactions, and variable manufacturing safety risks.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Surgical tissue adhesives containing human thrombin or fibrinogen</li>
            <li>Bags or dressings coated with human albumin fractions</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 22.3 Rule (xv) Decision Flow</h3>
      <InteractiveFlowchart minHeight="350px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Device + Drug Substance" />
          <Arrow />
          <DecisionNode text="Is it a human blood derivative (albumin, thrombin)?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="D"
                subpart="Subpart (b)"
                title="Class D - Human Blood Derivative"
                examples={["Fibrin glue with human thrombin"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="Is it a medicinal product / drug with ancillary action?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="D"
                      subpart="Subpart (a)"
                      title="Class D - Drug Device Combination"
                      examples={["Drug-eluting stents", "Silver-coated dressings"]}
                    />
                  }
                  rightChild={
                    <div className="bg-slate-50 border border-slate-300 text-slate-800 p-4 rounded-xl text-xs font-bold shadow-sm max-w-[200px] text-center">
                      Classify using ordinary rules (Rules i - xiv)
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 22.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">A standard mesh hernia patch is modified to contain a thin slow-release coating of a local anesthetic drug. What class is this patch?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class C - typical implant rules</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class D (Subpart a - device incorporating an ancillary medicinal substance)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li>Any medical device containing integrated drugs, antibiotics, or blood derivatives belongs to <strong>Class D</strong>.</li>
          <li><strong>Subpart (a)</strong> matches medicinal components (silver, antibiotics, anticoagulants).</li>
          <li><strong>Subpart (b)</strong> matches human blood derivative coatings (thrombin, albumin).</li>
        </ul>
      </div>

    </div>
  );
}
