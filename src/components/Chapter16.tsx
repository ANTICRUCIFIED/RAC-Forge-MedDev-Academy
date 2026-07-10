import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter16() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (ix): Surgically Invasive Medical Devices for Transient Use</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Continuous use for less than 60 minutes involving surgical cuts or puncture openings under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "surgically invasive" and contrast it with orifice-invasive.</li>
          <li>Distinguish the 7 distinct subparts of Rule (ix): <strong>Subparts (a) to (g)</strong>.</li>
          <li>Explain why reusable surgical instruments drop to Class A while CNS or cardiovascular tools escalate to Class D.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        16.1 What Is a Surgically Invasive Device?
      </h3>
      <p>
        Unlike orifice-invasive devices which enter natural openings, a <strong>surgically invasive device</strong> enters the body through a skin incision or an artificial puncture. This immediately exposes the blood system and internal organs to potential contamination.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (a) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            Subject to subparts (b) to (g), the general rule for transient-use surgically invasive devices.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Disposable scalpels</li>
            <li>Surgical needles</li>
            <li>Disposable surgical gloves</li>
            <li>Sutures for transient closure</li>
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
            Subject to subparts (c) to (g), if it is a reusable surgical instrument.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            These are manual, solid metal items (like scissors) that are cleaned and autoclaved between surgeries. Because they do not stay inside the body and can be repeatedly sterilized, their baseline risk class is low.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Reusable forceps</li>
            <li>Reusable surgical scissors</li>
            <li>Reusable scalpel handles</li>
            <li>Reusable retractors</li>
          </ul>
        </div>

        {/* Subpart (c) */}
        <div className="border border-indigo-200 rounded-xl p-6 bg-indigo-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-indigo-950 font-bold text-lg m-0">Subpart (c) &rarr; Same Class as the Active Device</h4>
            <span className="bg-indigo-600 text-white font-bold text-xs px-3 py-1 rounded-full">Matches Active</span>
          </div>
          <p className="text-sm font-semibold text-indigo-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-indigo-100">
            If it is intended to be connected to an active medical device.
          </p>
          <p className="text-sm font-semibold text-indigo-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Laparoscopic instruments connected to electrosurgical generators</li>
            <li>Laser fiber probes connected to surgical laser units</li>
          </ul>
        </div>

        {/* Subpart (d) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (d) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If it is intended for the supply of energy in the form of ionizing radiation.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Radiobrachytherapy applicators</li>
            <li>Radioactive seed placement probes</li>
          </ul>
        </div>

        {/* Subpart (e) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (e) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If it is intended to have a biological effect or to be wholly or mainly absorbed by the human body.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Hemostatic sponges (absorbable)</li>
            <li>Bioabsorbable surgical staples</li>
          </ul>
        </div>

        {/* Subpart (f) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (f) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If it is intended for the administration of any medicinal product by means of a delivery system, and such administration is done in a manner that is potentially hazardous.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Port-catheter delivery systems for chemotherapy</li>
          </ul>
        </div>

        {/* Subpart (g) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (g) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            If it is intended to be used specifically in direct contact with the central nervous system (CNS) or for the diagnosis, monitoring, or correction of a defect of the heart or central circulatory system through direct contact.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            The brain, spinal cord, and heart represent the body's primary control panels. Any slight error or infection here is highly fatal, which warrants the highest security level: Class D.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Cardiovascular catheters (coronary angiogram catheters)</li>
            <li>Transient cardiac pacing wires</li>
            <li>Neurosurgical probes / brain biopsy needles</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 16.3 Rule (ix) Decision Flow</h3>
      <InteractiveFlowchart minHeight="500px">
        <div className="flex flex-col items-center min-w-max">
          <StartNode text="Transient Surgically Invasive (&lt;60m)" />
          <Arrow />
          <DecisionNode text="Is there direct contact with Heart/Circulation or Central Nervous System?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="D"
                subpart="Subpart (g)"
                title="Class D - Heart/CNS Direct Contact"
                examples={["Angiogram catheters", "Neurosurgical probes"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center min-w-max">
                <DecisionNode text="Is it absorbable, bio-effect, radiation, or a chemotherapeutic port?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="C"
                      subpart="Subparts (d, e, f)"
                      title="Class C - High Chemical Risk"
                      examples={["Absorbable sponges", "Brachytherapy applicators"]}
                    />
                  }
                  rightChild={
                    <div className="flex flex-col items-center min-w-max">
                      <DecisionNode text="Is it connected to an active device?" />
                      <TwoWaySplit
                        leftLabel="YES"
                        rightLabel="NO"
                        leftChild={
                          <OutcomeCard
                            clazz="Matches Active"
                            subpart="Subpart (c)"
                            title="Matches Active Class"
                            examples={["Laparoscopic probes linked to generators"]}
                          />
                        }
                        rightChild={
                          <div className="flex flex-col items-center min-w-max">
                            <DecisionNode text="Is it a reusable surgical instrument?" />
                            <TwoWaySplit
                              leftLabel="YES"
                              rightLabel="NO"
                              leftChild={
                                <OutcomeCard
                                  clazz="A"
                                  subpart="Subpart (b)"
                                  title="Class A - Reusable Instrument"
                                  examples={["Surgical forceps", "Reusable scissors"]}
                                />
                              }
                              rightChild={
                                <OutcomeCard
                                  clazz="B"
                                  subpart="Subpart (a)"
                                  title="Class B - Standard Surgically Invasive"
                                  examples={["Disposable scalpels", "Surgical needles"]}
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
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 16.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">What class is a reusable surgical stainless-steel forceps used during general surgery?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class A (Subpart b - reusable surgical instrument)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - general transient surgically invasive</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class B: General disposable scalpels/needles.</li>
          <li><strong>Subpart (b)</strong> = Class A: Reusable solid surgical instruments.</li>
          <li><strong>Subpart (c)</strong> = Matches Active: Connected surgical probes.</li>
          <li><strong>Subpart (d, e, f)</strong> = Class C: Radiation, absorbed, or drug delivery.</li>
          <li><strong>Subpart (g)</strong> = Class D: Central nervous system or heart contact.</li>
        </ul>
      </div>

    </div>
  );
}
