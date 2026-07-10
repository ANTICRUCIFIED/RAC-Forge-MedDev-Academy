import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter23_2() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xviii): Medical Devices for Contraceptive Use or Prevention of STDs</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying condoms, diaphragms, intrauterine devices, and contraceptive implants under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand how duration and implantation guide contraception risks.</li>
          <li>Distinguish between <strong>Subpart (a)</strong> (Class C) and <strong>Subpart (b)</strong> (Class D).</li>
          <li>Explain why a condom is Class C while a copper-T IUD is Class D.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        23.2.1 Contraceptive Classifications
      </h3>
      <p>
        Contraceptives prevent unintended pregnancies and guard against Sexually Transmitted Diseases (STDs/HIV). Because these products must have perfect reliability to protect public health and prevent biological pathogen spreads, they have high baseline risk classifications.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">23.2.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (a) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            Subject to subpart (b), if intended for contraception or the prevention of transmission of sexually transmitted diseases.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Short-term, non-implantable mechanical barriers used to block sperm or sexually transmitted pathogens.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Male & female latex condoms</li>
            <li>Contraceptive diaphragms</li>
            <li>Cervical caps</li>
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
            If it is implantable or intended for long-term use (more than 30 days).
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Contraceptives that are surgically placed inside the uterine cavity or soft tissues long-term. Failure of these devices can lead to ectopic pregnancies or severe pelvic infections, elevating their hazard class to Class D.
          </p>
          <p className="text-sm font-semibold text-purple-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Intrauterine Devices (IUDs) like the Copper-T</li>
            <li>Hormone-releasing subcutaneous contraceptive implants</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 23.2.3 Rule (xviii) Decision Flow</h3>
      <InteractiveFlowchart minHeight="300px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Reproductive Barrier Systems" />
          <Arrow />
          <DecisionNode text="Is it configured as an implantable or long-term internal invasive device?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="D"
                subpart="Subpart (b)"
                title="Chronic Soft Tissue Contraceptive Exposure"
                examples={["Intrauterine devices (IUDs)", "Implantable contraceptive subdermal implants"]}
              />
            }
            rightChild={
              <OutcomeCard
                clazz="C"
                subpart="Subpart (a)"
                title="Acute Protective Mechanical Membranes"
                examples={["Male condoms", "Female diaphragms"]}
              />
            }
          />
        </div>
      </InteractiveFlowchart>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 23.2.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">An intrauterine copper-T contraceptive device (IUD) is placed in a patient for up to 5 years. What class is this device?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class D (Subpart b - long-term contraceptive implant)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class C - general contraception barrier</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class C: Non-implantable barrier products (condoms, diaphragms).</li>
          <li><strong>Subpart (b)</strong> = Class D: Long-term internal contraceptive systems (IUDs, subcutaneous implants).</li>
        </ul>
      </div>

    </div>
  );
}
