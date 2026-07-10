import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Shield, Check, X, GitBranch, Lightbulb, AlertCircle } from 'lucide-react';

export default function Chapter6() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (i): Non-Invasive Medical Devices Which Come into Contact with Injured Skin</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying wound care, barriers, and dressings based on injury depth and healing pathways under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand how skin injury depth determines medical device risk under Indian MDR 2017.</li>
          <li>Distinguish the three key subparts of Rule (i): <strong>Subpart (a)</strong>, <strong>Subpart (b)</strong>, and <strong>Subpart (c)</strong>.</li>
          <li>Define dermis breach and explain the difference between primary and secondary intention healing.</li>
          <li>Correctly classify common medical dressings (Class A, Class B, or Class C) and explain the regulatory logic.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        6.1 Introduction to Rule (i)
      </h3>
      <p>
        When a medical device is designed to touch injured skin, its safety level is dictated by how deeply the skin is broken and how the body heals itself. If the protective barrier of healthy skin is breached, the body becomes vulnerable to infection, blood loss, and environmental hazards.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-emerald-200 rounded-xl p-6 bg-emerald-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-emerald-950 font-bold text-lg m-0">Subpart (a) &rarr; Class A (Low Risk)</h4>
            <span className="bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class A</span>
          </div>
          <p className="text-sm font-semibold text-emerald-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-emerald-100">
            Intended to be used as a mechanical barrier, for compression, or for absorption of exudates only, for wounds which have not breached the dermis and can heal by primary intention.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            The wound is superficial. Because the deep dermis layer remains unbroken, blood vessels are intact and the internal system is safe. The device acts only as a protective cover or sponge.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Simple adhesive bandages (e.g. standard Band-Aid)</li>
            <li>Cotton wool / surgical absorbent pads</li>
            <li>Surgical tape (for superficial skin adhesion)</li>
            <li>Absorbent non-medicated gauze for superficial scrapes</li>
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
            Subject to subpart (c), intended to be used principally with wounds which have breached the dermis, or principally intended for the management of the microenvironment of a wound.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            The wound is deeper (dermis is broken, bleeding has occurred), but still heals via a normal clean pathway (primary intention), OR the dressing is smart—regulating moisture, gases (oxygen, CO2), or temperature to speed up natural healing (wound microenvironment).
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Hydrogel dressings (regulating moisture)</li>
            <li>Calcium alginate dressings (managing wet wounds)</li>
            <li>Polymer film dressings for deep cuts</li>
            <li>Moisture-retentive foam dressings</li>
          </ul>
        </div>

        {/* Subpart (c) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (c) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            Intended to be used principally with wounds which have breached the dermis and cannot heal by primary intention.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Wounds that are extremely deep, wide, or necrotic (e.g. bedsores, massive ulcers, third-degree burns) where the skin edges cannot be pulled together. They must heal through a prolonged, dangerous process called <strong>secondary intention</strong> (where tissue slowly grows from the bottom up).
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Dressings for chronic diabetic ulcers</li>
            <li>Dressings for severe third-degree burns</li>
            <li>Negative pressure wound therapy (NPWT) contact dressings</li>
            <li>Decubitus (pressure sores/bedsores) healing dressings</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 6.3 Rule (i) Decision Flow</h3>
      <InteractiveFlowchart minHeight="450px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Injured Skin Contact" />
          <Arrow />
          <DecisionNode text="Is the dermis breached?" />
          
          <TwoWaySplit
            leftLabel="NO"
            rightLabel="YES"
            leftChild={
              <div className="flex flex-col items-center">
                <DecisionNode text="Is it for exudates absorption / mechanical barrier and primary healing only?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="A"
                      subpart="Subpart (a)"
                      title="Class A - Intact Wound Dressing"
                      examples={["Adhesive bandages", "Standard cotton wool"]}
                    />
                  }
                  rightChild={
                    <OutcomeCard
                      clazz="B"
                      subpart="Subpart (b)"
                      title="Class B - Microenvironment Dressing"
                      examples={["Hydrogel dressings", "Alginate pads"]}
                    />
                  }
                />
              </div>
            }
            rightChild={
              <div className="flex flex-col items-center">
                <DecisionNode text="Can it heal by primary intention?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO (Secondary Intention)"
                  leftChild={
                    <OutcomeCard
                      clazz="B"
                      subpart="Subpart (b)"
                      title="Class B - Microenvironment Dressing"
                      examples={["Hydrogel dressings", "Alginate pads"]}
                    />
                  }
                  rightChild={
                    <OutcomeCard
                      clazz="C"
                      subpart="Subpart (c)"
                      title="Class C - Deep Cavity/Burn Dressing"
                      examples={["Chronic diabetic ulcer pads", "NPWT dressings"]}
                    />
                  }
                />
              </div>
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 6.4 Common Misconceptions</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Pitfall: Believing all gauze is Class A.</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Reality:</strong> If the gauze is medicated or intended to pack deep dermal wounds, it shifts to Class B or C.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 6.5 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">Which class is appropriate for a dressing used to cover a severe, non-healing diabetic foot ulcer?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class A - simple protection</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - normal deep cuts</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class C - deep wounds healing by secondary intention (Subpart c)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class A: Wounds without dermis breach (superficial), simple barrier.</li>
          <li><strong>Subpart (b)</strong> = Class B: Dermis-breaching wounds (primary healing) or microenvironment controllers.</li>
          <li><strong>Subpart (c)</strong> = Class C: Dermis-breaching wounds with complex healing (secondary intention).</li>
        </ul>
      </div>

    </div>
  );
}
