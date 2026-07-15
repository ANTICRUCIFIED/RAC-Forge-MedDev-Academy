import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter9() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (iv): Other Non-Invasive Medical Devices</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "The ultimate default group for non-invasive medical devices under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Identify why Rule (iv) serves as the "catch-all" or default category for non-invasive devices.</li>
          <li>Define intact skin and describe why it represents the lowest regulatory risk.</li>
          <li>Accurately classify everyday medical support equipment into Class A under Rule (iv).</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        9.1 Introduction to Rule (iv)
      </h3>
      <p>
        If a non-invasive medical device does not contact injured skin (Rule i), does not store/channel substances (Rule ii), and does not modify substances (Rule iii), it defaults to Rule (iv). This rule is the safest category because these devices either never touch the patient, or only touch completely intact, healthy skin.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.2 Criteria and Class</h3>
      
      <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50 my-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-emerald-950 font-bold text-lg m-0">No Subparts &rarr; Class A (Low Risk)</h4>
          <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
        </div>
        <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
        <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
          Applies to all non-invasive devices not covered under Rules (i), (ii), or (iii) that either do not come into contact with a person, or come into contact with intact skin only.
        </p>
        <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
        <p className="text-sm text-slate-700 m-0">
          Because the unbroken skin is a powerful natural barrier, devices touching only healthy skin or having zero human contact present near-zero biological risk. This is the starting point for classifying basic clinical hardware.
        </p>
        <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
        <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
          <li>Stethoscopes (standard acoustic)</li>
          <li>Blood pressure cuffs</li>
          <li>External ECG electrodes</li>
          <li>Wheelchairs (manual or simple mechanical)</li>
          <li>Hospital beds, traction equipment, and mattresses</li>
          <li>Patient exam couches & dentist chairs</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 9.3 Decision Logic</h3>
      <InteractiveFlowchart minHeight="450px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Non-Invasive Device Check" />
          <Arrow />
          <DecisionNode text="Does it contact injured skin?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="Matches Active"
                subpart="Rule (i)"
                title="Rule (i) applies"
                examples={["Dressings", "Wound care products"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="Does it channel or store substances?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="Matches Active"
                      subpart="Rule (ii)"
                      title="Rule (ii) applies"
                      examples={["Tubes", "Reservoirs"]}
                    />
                  }
                  rightChild={
                    <div className="flex flex-col items-center w-full">
                      <DecisionNode text="Does it modify fluid composition?" />
                      <TwoWaySplit
                        leftLabel="YES"
                        rightLabel="NO"
                        leftChild={
                          <OutcomeCard
                            clazz="Matches Active"
                            subpart="Rule (iii)"
                            title="Rule (iii) applies"
                            examples={["Filters", "Conditioning adapters"]}
                          />
                        }
                        rightChild={
                          <OutcomeCard
                            clazz="A"
                            subpart="Rule (iv)"
                            title="Class A - Default Non-Invasive"
                            examples={["Stethoscopes", "ECG electrodes", "Manual wheelchairs", "Hospital beds"]}
                          />
                        }
                      />
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 9.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">Which class is appropriate for a standard blood pressure cuff?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class A - Rule (iv) Other Non-Invasive</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - invasive connection</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li>Rule (iv) contains no subparts and is always <strong>Class A</strong>.</li>
          <li>It serves as the default rule for non-invasive medical hardware.</li>
          <li>Devices governed by Rule (iv) include stethoscopes, hospital beds, and wheelchairs.</li>
        </ul>
      </div>

    </div>
  );
}
