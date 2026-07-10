import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter17() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (x): Surgically Invasive Medical Devices for Short-Term Use</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Continuous use for 60 minutes up to 30 days inside the body via surgical access under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "short-term surgically invasive" and understand typical use cases.</li>
          <li>Distinguish the 5 key subparts of Rule (x): <strong>Subparts (a) to (e)</strong>.</li>
          <li>Explain why dental cement is Class B while normal surgical adhesives are Class C.</li>
          <li>Identify why short-term bioabsorbable implants or CNS-contacting items are Class D.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        17.1 Introduction to Rule (x)
      </h3>
      <p>
        When surgically invasive devices stay in the body for days or weeks (short-term, up to 30 days), the threat of tissue degradation, localized reaction, and infection multiplies. This rule details how biochemical changes, dental cavities, and high-risk physiological contact adjust risk levels.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (a) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            Subject to subparts (b), (d), and (e), the general rule for short-term surgically invasive devices.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Temporary skin staples / wound clips</li>
            <li>Surgical closed-wound suction drains</li>
            <li>Temporary bone screws (removed within 30 days)</li>
          </ul>
        </div>

        {/* Subpart (b) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (b) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            Subject to subpart (c), if it is intended to undergo a chemical change in the body.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Active polymerization or chemical setting inside soft tissues can cause tissue heating (exothermic reactions) or release chemical monomers, posing higher risks.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Surgical tissue adhesives & sealants</li>
            <li>Internal bone-bonding cement</li>
          </ul>
        </div>

        {/* Subpart (c) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (c) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            If the chemical-changing device in subpart (b) is intended to be placed into any tooth.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Tooth structure (enamel/dentin) is highly inert and dense. Placing chemical cement in teeth carries much lower risk than placing it in vascular soft tissues or internal organs.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Chemical-curing dental fillings & cements</li>
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
            If it is intended for the administration of any medicinal product or the supply of energy in the form of ionizing radiation.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Short-term epidural delivery catheters</li>
            <li>Transient radioactive wire implants (brachytherapy wire)</li>
          </ul>
        </div>

        {/* Subpart (e) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (e) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            If it is intended to have a biological effect, to be wholly or mainly absorbed by the human body, to be used specifically in direct contact with the CNS, or for the diagnosis, monitoring, or correction of a defect of the heart or central circulatory system through direct contact.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Temporary cardiac pacing electrodes</li>
            <li>Bioabsorbable vascular stents (short term degradation)</li>
            <li>Externalized neurological shunts (ventriculostomy)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 17.3 Rule (x) Decision Flow</h3>
      <InteractiveFlowchart minHeight="500px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Short-Term Surgically Invasive (60m-30d)" />
          <Arrow />
          <DecisionNode text="Is it bio-absorbed, CNS/Heart contact, or has bio-effect?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="D"
                subpart="Subpart (e)"
                title="Class D - Absorbed/CNS/Heart Contact"
                examples={["Temporary pacing wires", "Vascular bioabsorbable stents"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="Is it for medicine delivery or radiation?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="C"
                      subpart="Subpart (d)"
                      title="Class C - High Drug Delivery Risk"
                      examples={["Epidural catheters", "Infusion lines"]}
                    />
                  }
                  rightChild={
                    <div className="flex flex-col items-center w-full">
                      <DecisionNode text="Does it undergo chemical change in the body?" />
                      <TwoWaySplit
                        leftLabel="YES"
                        rightLabel="NO"
                        leftChild={
                          <div className="flex flex-col items-center w-full">
                            <DecisionNode text="Is it placed into a tooth?" />
                            <TwoWaySplit
                              leftLabel="YES"
                              rightLabel="NO"
                              leftChild={
                                <OutcomeCard
                                  clazz="B"
                                  subpart="Subpart (c)"
                                  title="Class B - Tooth Cavity Fill"
                                  examples={["Dental filling cement"]}
                                />
                              }
                              rightChild={
                                <OutcomeCard
                                  clazz="C"
                                  subpart="Subpart (b)"
                                  title="Class C - Chemical Change"
                                  examples={["Surgical skin glue / tissue adhesive"]}
                                />
                              }
                            />
                          </div>
                        }
                        rightChild={
                          <OutcomeCard
                            clazz="B"
                            subpart="Subpart (a)"
                            title="Class B - Low Risk Short-Term Surgically Invasive"
                            examples={["Skin staples", "Wound drainage tubes"]}
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

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 17.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">A liquid surgical adhesive is used to glue a liver incision during a resection. It undergoes chemical curing. What is its class?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - standard short-term device</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class C (Subpart b - chemical changing soft-tissue sealant)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class B: General passive hardware (wound drains, skin staples).</li>
          <li><strong>Subpart (b)</strong> = Class C: Chemically curing soft tissue adhesives.</li>
          <li><strong>Subpart (c)</strong> = Class B: Chemically curing dental filling mixtures.</li>
          <li><strong>Subpart (d)</strong> = Class C: Medicine or radiation supply conduits.</li>
          <li><strong>Subpart (e)</strong> = Class D: Absorbed, biological-effect, CNS, or cardiac contact.</li>
        </ul>
      </div>

    </div>
  );
}
