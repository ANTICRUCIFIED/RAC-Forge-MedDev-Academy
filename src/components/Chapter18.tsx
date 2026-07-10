import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter18() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xi): Implantable and Long-Term Surgically Invasive Medical Devices</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Continuous use for more than 30 days or permanent surgical implants under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Define "implantable" and understand long-term risk characteristics.</li>
          <li>Distinguish the 4 distinct subparts of Rule (xi): <strong>Subparts (a) to (d)</strong>.</li>
          <li>Explain why dental implants are Class B while breast implants are Class D.</li>
          <li>Identify the specific clinical parameters that escalate permanent implants to Class D.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        18.1 What Is an Implantable Device?
      </h3>
      <p>
        An <strong>implantable device</strong> is surgically introduced completely or partially into the body, remaining there after the surgical procedure ends for a long-term duration (more than 30 days) or permanently. This requires ultimate biocompatibility to avoid long-term immune rejection, toxicity, or structural breakdown.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (a) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            Subject to subparts (b), (c), and (d), implantable or surgically invasive devices for long-term use.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Standard permanent supportive materials placed in musculoskeletal structures or non-critical soft tissues.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Orthopedic bone plates, screws, and nails</li>
            <li>Artificial knee joint replacements</li>
            <li>Artificial hip joint replacements</li>
            <li>Non-active middle-ear implants</li>
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
            If intended to be placed into any tooth.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Because a tooth is anchor-solid, non-vascularized, and isolated from vital systemic organs, dental implants carry lower risk compared to other structural orthopedic joints.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Dental implants (titanium posts)</li>
            <li>Permanent dental crowns & bridges</li>
            <li>Root canal filling materials (permanent)</li>
          </ul>
        </div>

        {/* Subpart (c) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (c) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <div className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            If the long-term or implantable device is intended:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>To be used in direct contact with the heart, central circulatory system, or CNS;</li>
              <li>To be life-supporting or life-sustaining;</li>
              <li>To be an active medical device;</li>
              <li>To be wholly or mainly absorbed by the human body;</li>
              <li>For the administration of any medicinal product; or</li>
              <li>To be a breast implant.</li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Implantable cardiac pacemakers (Active)</li>
            <li>Coronary artery stents (Heart/Circulatory)</li>
            <li>Implantable drug pumps (Medicinal pump)</li>
            <li>Breast implants</li>
            <li>Bioabsorbable vascular scaffolds (mainly absorbed)</li>
          </ul>
        </div>

        {/* Subpart (d) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (d) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            Subject to subpart (b), if it is intended to undergo chemical change in the body.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Chemically degradation-dependent long-term surgical plugs</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 18.3 Rule (xi) Decision Flow</h3>
      <InteractiveFlowchart minHeight="500px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Long-Term Surgical Implant (&gt;30d)" />
          <Arrow />
          <DecisionNode text="Is it placed into a tooth?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="B"
                subpart="Subpart (b)"
                title="Class B - Dental Implant"
                examples={["Dental implant titanium posts"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="CNS/Heart direct contact, life-supporting, active implant, breast implant, or absorbed?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="D"
                      subpart="Subpart (c)"
                      title="Class D - High-Risk Permanent Implant"
                      examples={["Cardiac pacemakers", "Coronary stents", "Breast implants"]}
                    />
                  }
                  rightChild={
                    <div className="flex flex-col items-center w-full">
                      <DecisionNode text="Does it undergo chemical change in the body?" />
                      <TwoWaySplit
                        leftLabel="YES"
                        rightLabel="NO"
                        leftChild={
                          <OutcomeCard
                            clazz="D"
                            subpart="Subpart (d)"
                            title="Class D - Chemically Cured Implant"
                            examples={["Chemical degradation plugs"]}
                          />
                        }
                        rightChild={
                          <OutcomeCard
                            clazz="C"
                            subpart="Subpart (a)"
                            title="Class C - Standard Orthopedic/Soft-Tissue Implant"
                            examples={["Orthopedic hip/knee implants"]}
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

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 18.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">What classification class is assigned to a permanent silicone breast implant under Indian rules?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class C - general orthopedic implant</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class D (Subpart c - specifically designated breast implants)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class C: General orthopedic implants (plates, pins, joints).</li>
          <li><strong>Subpart (b)</strong> = Class B: Long-term dental hardware anchored in teeth.</li>
          <li><strong>Subpart (c)</strong> = Class D: Pacemakers, heart stents, life-supporting, active, or breast implants.</li>
          <li><strong>Subpart (d)</strong> = Class D: Long-term chemically degrading soft tissue plugs.</li>
        </ul>
      </div>

    </div>
  );
}
