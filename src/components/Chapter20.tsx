import InteractiveFlowchart from "./InteractiveFlowchart";
import { StartNode, DecisionNode, Arrow, Branch, OutcomeCard, TwoWaySplit } from "./FlowchartElements";
import { HelpCircle, Check, X, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter20() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule (xiii): Active Diagnostic Medical Devices</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "Classifying diagnostic imaging, scanners, patient monitors, and chemical delivery pumps under Indian MDR 2017"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand how diagnostic accuracy and vital monitoring link to risk classes.</li>
          <li>Distinguish the 7 extensive subparts of Rule (xiii): <strong>Subparts (a) to (g)</strong>.</li>
          <li>Explain why standard examination lights are Class A, oximeters or MRI systems are Class B, and intensive-care alarm monitors or chemo-pumps are Class C.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        20.1 Active Diagnostic Framework
      </h3>
      <p>
        Diagnostic active devices supply or capture energy to visualize, monitor, or measure physiological statuses. If a diagnostic readout is wrong (or if a vital alarm fails during intensive care), a patient could die of unnoticed cardiac arrest or hypoxia. This is why risk is tightly controlled.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.2 Detailed Explanation of Subparts</h3>
      
      <div className="space-y-6">
        {/* Subpart (a) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (a) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <div className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            Subject to subparts (b) and (c), if it is intended:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>To supply energy which will be absorbed by the human body;</li>
              <li>To capture any image of the in vivo distribution of radiopharmaceuticals; or</li>
              <li>For the direct diagnosis or monitoring of vital physiological processes.</li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Diagnostic ultrasound imaging systems (absorbed sound energy)</li>
            <li>Magnetic Resonance Imaging (MRI) scanners</li>
            <li>Standard clinical ECG recording machines</li>
            <li>Gamma camera systems (imaging radioisotopes)</li>
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
            If the device in sub-clause (1) of subpart (a) is intended to be used solely to illuminate a patient's body with light in the visible or near-infrared spectrum.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Key Concept:</p>
          <p className="text-sm text-slate-700 m-0">
            Visible or near-infrared illumination has no deep mutagenic or destructive physical capacity.
          </p>
          <p className="text-sm font-semibold text-emerald-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Medical examination headlights & spot lamps</li>
            <li>Pulse oximeter sensor probes (uses red/infra-red LEDs)</li>
            <li>Dental curing spotlights</li>
          </ul>
        </div>

        {/* Subpart (c) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (c) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <div className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If intended specifically for:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>The monitoring of vital physiological parameters where variations could result in immediate danger to the patient (e.g., cardiac performance, respiration, or CNS activity); or</li>
              <li>Diagnosing in a clinical situation where the patient is in immediate danger.</li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Intensive care patient monitors (real-time alarming ECG, SpO2, arterial BP)</li>
            <li>Apnea monitoring systems</li>
            <li>Neonatal vital signs monitoring stations</li>
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
            If intended for the emission of ionizing radiation and to be used in diagnostic or interventional radiology.
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Diagnostic X-ray equipment</li>
            <li>Computed Tomography (CT) scanners</li>
            <li>Fluoroscopy systems</li>
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
            If intended for the control, monitoring, or directly influencing the performance of any active diagnostic medical device in subpart (d).
          </p>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Control desks / panels for X-ray or CT systems</li>
          </ul>
        </div>

        {/* Subpart (f) */}
        <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-amber-950 font-bold text-lg m-0">Subpart (f) &rarr; Class B (Low-Moderate Risk)</h4>
            <span className="bg-amber-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class B</span>
          </div>
          <p className="text-sm font-semibold text-amber-900 mt-1 mb-2">Criteria:</p>
          <p className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-amber-100">
            Subject to subpart (g), if intended for the administration or removal of any medicinal product, body liquid, or other substance to or from the human body.
          </p>
          <p className="text-sm font-semibold text-amber-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Standard enteral nutrition pumps</li>
            <li>Static intravenous gravity-drip monitors</li>
          </ul>
        </div>

        {/* Subpart (g) */}
        <div className="border border-red-200 rounded-xl p-6 bg-red-50/50">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-red-950 font-bold text-lg m-0">Subpart (g) &rarr; Class C (Moderate-High Risk)</h4>
            <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full">Class C</span>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-1 mb-2">Criteria:</p>
          <div className="text-sm text-slate-700 m-0 bg-white p-3 rounded border border-red-100">
            If the administration/removal in subpart (f) is done in a potentially hazardous manner, taking into account:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>The nature of the medicinal product, body liquid, or substance;</li>
              <li>The part of the body concerned; and</li>
              <li>The mode and route of administration or removal.</li>
            </ul>
          </div>
          <p className="text-sm font-semibold text-red-900 mt-3 mb-1">Examples:</p>
          <ul className="text-sm text-slate-700 grid sm:grid-cols-2 gap-1 m-0">
            <li>Active chemotherapy infusion pumps</li>
            <li>Epidural pain-relief delivery pump systems</li>
            <li>Insulin infusion pumps (active patient administration)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 20.3 Rule (xiii) Decision Flow</h3>
      <InteractiveFlowchart minHeight="500px">
        <div className="flex flex-col items-center w-full">
          <StartNode text="Active Diagnostic / Admin" />
          <Arrow />
          <DecisionNode text="Is it for ionizing radiation radiology OR controlling it?" />
          
          <TwoWaySplit
            leftLabel="YES"
            rightLabel="NO"
            leftChild={
              <OutcomeCard
                clazz="C"
                subpart="Subparts (d, e)"
                title="Class C - Ionizing Scan / Control"
                examples={["CT scanners", "X-Ray control desks"]}
              />
            }
            rightChild={
              <div className="flex flex-col items-center w-full">
                <DecisionNode text="Does it monitor vitals with immediate danger alarms?" />
                <TwoWaySplit
                  leftLabel="YES"
                  rightLabel="NO"
                  leftChild={
                    <OutcomeCard
                      clazz="C"
                      subpart="Subpart (c)"
                      title="Class C - Immediate Danger Alarm Monitor"
                      examples={["ICU patient vitals monitors with alarms"]}
                    />
                  }
                  rightChild={
                    <div className="flex flex-col items-center w-full">
                      <DecisionNode text="Is it solely for visible/infrared light body illumination?" />
                      <TwoWaySplit
                        leftLabel="YES"
                        rightLabel="NO"
                        leftChild={
                          <OutcomeCard
                            clazz="A"
                            subpart="Subpart (b)"
                            title="Class A - Illumination/Oximetry"
                            examples={["Clinical exam lights", "Pulse oximeter probes"]}
                          />
                        }
                        rightChild={
                          <div className="flex flex-col items-center w-full">
                            <DecisionNode text="Is it an active pump for administering drugs or fluids?" />
                            <TwoWaySplit
                              leftLabel="YES"
                              rightLabel="NO"
                              leftChild={
                                <OutcomeCard
                                  clazz="C"
                                  subpart="Subpart (g)"
                                  title="Class C - Chemotherapy / Epidural Pump"
                                  examples={["Chemo active pumps", "Epidural pump systems"]}
                                />
                              }
                              rightChild={
                                <OutcomeCard
                                  clazz="B"
                                  subpart="Subpart (a)"
                                  title="Class B - Standard Diagnostic / Imaging"
                                  examples={["Clinical ultrasounds", "MRI scanners", "ECG machines"]}
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

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 20.4 Practice Quiz</h3>
      <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
        <p className="font-semibold text-slate-800 m-0 mb-3">A clinic purchases a pulse oximeter probe containing red and near-infrared LEDs to read oxygen saturation. What is its class under Rule (xiii)?</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white border border-emerald-500 bg-emerald-50 rounded-lg flex justify-between items-center text-sm font-medium text-emerald-950">
            <span>Class A (Subpart b - visible/near-infrared illumination probe)</span>
            <Check className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex justify-between items-center text-sm">
            <span>Class B - standard diagnostic equipment</span>
            <X className="w-5 h-5 text-red-500" />
          </div>
        </div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <ul className="text-slate-200 space-y-2 mb-6 m-0 pl-4 list-disc">
          <li><strong>Subpart (a)</strong> = Class B: Basic diagnostic machines (Ultrasound, MRI, standard ECG).</li>
          <li><strong>Subpart (b)</strong> = Class A: Illumination lights & near-infrared probes.</li>
          <li><strong>Subpart (c)</strong> = Class C: Real-time life-threatening parameter alarms (ICU monitors).</li>
          <li><strong>Subpart (d, e)</strong> = Class C: Radiology emission systems & control panels (CT, X-Ray).</li>
          <li><strong>Subpart (f)</strong> = Class B: Standard nutrition delivery pumps.</li>
          <li><strong>Subpart (g)</strong> = Class C: Dangerous drug infusion pumps (Chemo, Epidurals, Insulin).</li>
        </ul>
      </div>

    </div>
  );
}
