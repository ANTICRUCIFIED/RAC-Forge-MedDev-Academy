import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter23_1() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xvii): Medical Devices for Sterilization or Disinfection</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying sterilizers, contact lens solutions, and disinfecting washers under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand the safety importance of cleaning and disinfecting medical equipment.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class C) and <strong>Subpart (b)</strong> (Class B).</li>
          <li>Explain why contact lens solutions are assigned to Class C.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        23.1.1 Sterilization vs. Pre-sterilization
      </h3>
      <p>
        Unclean medical devices are the leading cause of hospital-acquired infections (HAIs). Disinfecting and sterilizing products are themselves classified as medical devices. The risk category depends on whether the device performs the final "end-point" sterilization, or just a preparatory "pre-sterilization" wash.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.1.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (a) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If intended specifically for:
            <br />- Sterilization of other medical devices;
            <br />- End-point disinfection of other medical devices; or
            <br />- Contact lenses care (disinfecting, cleaning, rinsing, or hydrating).
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            End-point products are the final line of defense before a device touches a patient. Similarly, contact lenses are worn directly on the cornea, where micro-bacterial contamination leads to corneal ulcers or blindness.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Contact lens multi-purpose solutions</li>
            <li>Steam autoclaves & ethylene oxide sterilizers</li>
            <li>End-point chemical sterilizing solutions (Glutaraldehyde)</li>
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
            If intended for the disinfection of any other medical device before the latter is sterilized or undergoes end-point disinfection.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Pre-sterilization products only remove macroscopic soil or reduce bio-burden. Since a final sterilization step always follows, the clinical risk is slightly lower.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Enzymatic pre-cleaners / detergents for surgical tools</li>
            <li>Ultrasonic washer disinfectors (pre-cleaners)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 23.1.3 Rule (xvii) Decision Flow</h3>
      <InteractiveFlowchart minHeight="300px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Pathogen Elimination" />
          <Arrow />
          <DecisionNode text="Intended for terminal sterilization, end-point device disinfection, or lens care?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="C"
                subpart="Subpart (a)"
                title="Critical Antimicrobial Lifecycle Step"
                examples={["Hospital autoclaves", "Contact lens solutions", "End-point endoscope disinfectors"]}
              />
            }
            rightChild={
              <OutcomeCard
                clazz="B"
                subpart="Subpart (b)"
                title="Preliminary Process Washing Disinfection"
                examples={["Washer-disinfectors used in processing utility rooms prior to terminal sterilization"]}
              />
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 23.1.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">An enzymatic spray detergent is used to wipe down and clean surgical clamps immediately after use, prior to putting them in an autoclave. What class is this cleaner?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class B (Subpart b - pre-sterilization disinfection)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class C - end-point sterilization</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class C: Final sterilizers, glutaraldehyde disinfectants, and contact lens cleaners.</li>
          <li><strong>Subpart (b)</strong> = Class B: Pre-cleaning enzymes and ultrasonic preparatory bath washers.</li>
        </ul>
      </div>

    </div>
  );
}
