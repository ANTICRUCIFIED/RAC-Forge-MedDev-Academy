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
          <li>Identify why Rule (xiv) acts as the baseline catch-all for other active devices.</li>
          <li>Distinguish between Subpart (a) (Class A general active devices) and Subpart (b) (Class D active implantable devices and accessories).</li>
          <li>Accurately classify motorized clinical accessories (like hospital beds or dental chairs) into Class A, and active implantables (like pacemakers) into Class D.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        21.1 Introduction to Rule (xiv)
      </h3>
      <p>
        Rule (xiv) covers active medical devices that are not covered under therapeutic (Rule xii) or diagnostic (Rule xiii) rules. However, rather than being a single low-risk group, it is split into two critical subparts based on whether the device is implanted:
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.2 Criteria and Class</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50 my-6">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-emerald-950 font-bold text-lg m-0">Subpart (a) &rarr; Class A (Low Risk)</h4>
            <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
          </div>
          <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
            Applies to all other active medical devices not covered under previous active rules.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            These products consume power to operate motors, blowers, or basic lights but do not administer biological shock, ionizing particles, chemicals, or direct therapeutic treatment to internal patient structures.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Electric hospital beds (motorized controls)</li>
            <li>Surgical room overhead lights (non-imaging)</li>
            <li>Powered examination tables & chairs</li>
            <li>Active battery chargers for medical hardware</li>
          </ul>
        </div>

        {/* Subpart (b) */}
        <div className="border border-purple-200 rounded-xl p-6 bg-purple-50/50 my-6">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-purple-950 font-bold text-lg m-0">Subpart (b) &rarr; Class D (High Risk)</h4>
            <span className="bg-purple-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class D</span>
          </div>
          <p className="text-sm font-semibold text-purple-900 mt-1 mb-2">Criteria (Indian MDR 2017 specific clause):</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-purple-100">
            All active implantable medical devices and their accessories.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Active implantable medical devices contain energy sources (batteries, software, transmitters) and remain in the body long-term. Failure carries high risks of mortality or severe systemic injury.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Implantable Cardiac Pacemaker</li>
            <li>Implantable Cardioverter-Defibrillator (ICD)</li>
            <li>Cochlear Implant system</li>
            <li>Implantable Active Drug Delivery Pump</li>
            <li>Implantable Neurostimulators & accessories (leads, programmers)</li>
          </ul>
        </div>
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
                    <div className="flex flex-col items-center w-full">
                      <DecisionNode text="Is it an Active Implantable device or accessory? (Rule xiv)" />
                      <TwoWaySplit
                        leftLabel="YES"
                        rightLabel="NO"
                        leftChild={
                          <OutcomeCard
                            clazz="D"
                            subpart="Rule (xiv) Subpart (b)"
                            title="Class D - Active Implantable"
                            examples={["Cardiac pacemakers", "Cochlear implants"]}
                          />
                        }
                        rightChild={
                          <OutcomeCard
                            clazz="A"
                            subpart="Rule (xiv) Subpart (a)"
                            title="Class A - Default Active"
                            examples={["Motorized hospital beds", "Overhead surgical lights"]}
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

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 21.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">A manufacturer designs an implantable cardiac pacemaker along with its external diagnostic programming console. What are their classifications under Rule (xiv) of Indian MDR 2017?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class D (Subpart b) for both the active implantable pacemaker and its accessories</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class A (general active device) for the pacemaker</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc text-sm">
          <li>Rule (xiv) serves as a baseline catch-all for active devices not covered elsewhere.</li>
          <li><strong>Subpart (a)</strong> = Class A: Covers standard powered medical equipment such as motorized hospital beds, surgical lights, and treatment chairs.</li>
          <li><strong>Subpart (b)</strong> = Class D: Covers all active implantable medical devices and their accessories (e.g., cardiac pacemakers, cochlear implants, implantable defibrillators).</li>
        </ul>
      </div>

    </div>
  );
}
