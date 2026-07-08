import Mermaid from "./Mermaid";
import { Zap, Activity, ShieldAlert, AlertCircle, GitBranch, Lightbulb, Check, X, Droplets, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';

export default function Chapter18() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 18</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 11 – Active Medical Devices Intended to Administer or Remove Medicinal Products, Body Liquids, or Other Substances</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Doesn't Decide the Medicine—It Decides How It Reaches the Patient"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 11 covers.</li>
          <li>Understand why drug delivery is considered a high-risk activity.</li>
          <li>Learn the difference between administering and removing substances.</li>
          <li>Understand why infusion pumps require precise control.</li>
          <li>Learn about smart drug-delivery systems.</li>
          <li>Understand the important exceptions.</li>
          <li>Learn how regulators classify administration devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.1 Imagine a Hospital Ward</h3>
      <p>A patient is admitted to the Intensive Care Unit. The doctor prescribes: Antibiotics, Pain medicine, Intravenous fluids, Nutrition.</p>
      <p>The medicines are correct. The doctor writes the correct dose.</p>
      <p>Now imagine the infusion pump delivers <strong>ten times</strong> the intended dose. Would the medicine suddenly become dangerous?</p>
      <p className="font-bold text-rose-700">Yes. Not because the medicine changed, but because the device delivered it incorrectly. This is exactly why Rule 11 exists.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ArrowDownToLine className="w-6 h-6 text-emerald-500" /> 18.2 What Does "Administer" Mean?</h3>
      <p>In simple language, administer means: <em>To deliver a substance to the patient in a controlled manner.</em></p>
      <p>The substance may be: Medicine, Saline, Blood, Nutritional fluid, Contrast media, Chemotherapy drugs, Insulin.</p>
      <p className="font-semibold text-slate-800">The device controls how much, how fast, how long, the substance is delivered.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ArrowUpFromLine className="w-6 h-6 text-amber-500" /> 18.3 What Does "Remove" Mean?</h3>
      <p>Some active devices work in the opposite direction. Instead of delivering, they remove substances from the body.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Suction pumps, Drainage systems, Fluid aspiration pumps, Certain dialysis systems.</p></div>
      <p className="font-medium text-slate-800">Removing too much, or too little, may also harm the patient.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.4 Everyday Analogy</h3>
      <p>Imagine watering a plant. If you pour one glass, the plant grows well. If you pour ten buckets, the plant may die.</p>
      <p>The water itself is not dangerous. The amount is the problem.</p>
      <p className="font-semibold text-slate-800">Medical devices work exactly the same way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-rose-500" /> 18.5 Why Delivery Control Is Important</h3>
      <p>Imagine three situations.</p>
      <ul className="mb-4 space-y-2">
        <li><strong>Situation 1:</strong> Medicine is delivered too slowly. The patient may not receive effective treatment.</li>
        <li><strong>Situation 2:</strong> Medicine is delivered too quickly. The patient may suffer serious side effects.</li>
        <li><strong>Situation 3:</strong> The wrong medicine is delivered. The patient may receive completely inappropriate treatment.</li>
      </ul>
      <p>Therefore, the device must accurately control:</p>
      <ul className="mb-4">
        <li>Flow rate</li>
        <li>Volume</li>
        <li>Timing</li>
        <li>Pressure</li>
        <li>Delivery alarms</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Droplets className="w-6 h-6 text-blue-500" /> 18.6 Infusion Pump</h3>
      <p>The infusion pump is probably the best example of Rule 11. It appears simple. It holds a syringe or IV set.</p>
      <p>However, internally it contains: motors, sensors, software, alarms, batteries, pressure monitoring, air-in-line detection, occlusion detection.</p>
      <p className="font-bold text-indigo-700 bg-indigo-50 p-2 rounded inline-block">Every one of these systems protects the patient.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.7 Syringe Pump</h3>
      <p>Imagine giving a newborn baby a very powerful medicine. The dose might be less than one millilitre per hour.</p>
      <p>A human hand cannot maintain that accuracy for hours. A syringe pump can.</p>
      <p className="font-medium text-slate-800">The smaller the patient, the more important precision becomes.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.8 Enteral Feeding Pump</h3>
      <p>Some patients cannot swallow food. Instead, liquid nutrition is delivered through a feeding tube.</p>
      <p>The pump controls: feeding rate, total volume, feeding schedule.</p>
      <p>Delivering nutrition too quickly may cause discomfort or other complications. Too slowly may fail to meet nutritional needs.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.9 Insulin Pump</h3>
      <p>Imagine a patient with diabetes. The pump continuously delivers insulin throughout the day.</p>
      <p>If it delivers too much insulin, blood sugar may fall dangerously low. If it delivers too little, blood sugar may rise excessively.</p>
      <p>A small programming error could have serious consequences.</p>
      <p className="font-semibold text-slate-800">This is why insulin pumps require rigorous regulatory assessment.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.10 Chemotherapy Pumps</h3>
      <p>Cancer medicines are extremely powerful. The correct medicine, given at the wrong rate, can still harm the patient.</p>
      <p className="font-medium text-slate-800">Chemotherapy pumps therefore require extremely accurate delivery.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.11 Suction Pumps</h3>
      <p>Not every Rule 11 device delivers something. Some remove substances. Examples include: Surgical suction pumps, Airway suction systems, Drainage pumps.</p>
      <p>Imagine removing blood during surgery. Too much suction may damage tissue. Too little suction may obscure the surgeon's view.</p>
      <p className="font-semibold text-slate-800">Again, control is everything.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Zap className="w-6 h-6 text-yellow-500" /> 18.12 Smart Infusion Pumps</h3>
      <p>Modern infusion pumps are much more intelligent. Many now include: drug libraries, dose limits, barcode scanning, wireless communication, electronic medical record integration, safety warnings.</p>
      <p>Imagine entering 100 mL/hour instead of 10 mL/hour. The pump may warn the user before treatment begins.</p>
      <p className="font-bold text-slate-800">Software has become an important safety feature.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.13 Combination Devices</h3>
      <p>Modern administration devices combine many technologies.</p>
      <p>An insulin pump may include: battery, pump mechanism, touchscreen, wireless communication, software, glucose sensor integration, alarms, mobile application.</p>
      <p className="font-medium text-slate-800">Although the patient sees one device, the regulator evaluates mechanical safety, electrical safety, software, cybersecurity, usability, alarm performance, as one complete medical system.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.14 Important Exceptions</h3>
      <p>Rule 11 pays particular attention to devices that administer or remove substances in a potentially hazardous manner.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include situations where:</p></div>
      <ul className="mb-4">
        <li>incorrect flow rate may cause serious harm,</li>
        <li>overdose or underdose may occur,</li>
        <li>interruption of therapy could endanger the patient,</li>
        <li>high-risk medicines are delivered,</li>
        <li>the device controls life-sustaining therapy.</li>
      </ul>
      <p className="font-medium text-slate-800">These situations generally require greater regulatory scrutiny than devices used for lower-risk administration.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 18.15 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "The medicine determines the risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The device also contributes to risk through the way it delivers the medicine.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "An infusion pump only pushes liquid."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. It continuously measures, controls, and monitors delivery.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "All pumps belong to the same class."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The intended use, the type of substance, the delivery method, and the consequences of failure all influence classification.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Software is optional."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. In many modern administration devices, software is central to safe operation.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 18.16 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Uses external energy?"]
  N2 --> N3
  N3 -->|NO| N4["See Rules 1-8"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Does it administer or remove: medicinal products, body liquids, blood, nutritional fluids, or other therapeutic substances?"]
  N5 --> N6
  N6 -->|NO| N7["See Rules 9, 10, or 12"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Could incorrect delivery or removal cause patient harm?"]
  N8 --> N9
  N10["↓"]
  N9 --> N10
  N11{"Rule 11: Is the administration or removal of the substance potentially hazardous?"}
  N11 -->|YES| N11A["Rule 11 (Class D)"]
  N11 -->|NO| N11B["Rule 11 (Class C)"]
  N10 --> N11
  N12["↓"]
  N11 --> N12
  N13["Evaluate: Flow rate, Dose accuracy, Timing, Pressure, Alarm systems, Software"]
  N12 --> N13
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 18.17 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a train. The passengers represent the medicine. The train driver represents the pump. Even if every passenger has the correct ticket, a careless driver can still cause an accident.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Likewise, even if the doctor prescribes the correct medicine, an unsafe administration device can still harm the patient.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "The medicine is prescribed by the doctor. The device controls how safely it reaches the patient."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">18.18 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 11 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Controls delivery of fluids and medicines</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Syringe Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Precisely administers small volumes of medicine</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Insulin Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Continuously administers insulin</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Enteral Feeding Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Delivers nutritional fluids</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Chemotherapy Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Controls delivery of cancer medicines</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical Suction Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Removes blood and body fluids</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG Machine</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Diagnoses only (Rule 10 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ventilator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Delivers therapeutic respiratory support (Rule 9 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Manual Syringe</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Not an active medical device</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 11 applies to active medical devices intended to administer or remove medicinal products, body liquids, blood, nutritional fluids, or other substances.</li>
          <li>The primary risk is not the medicine itself, but whether the device delivers or removes it accurately and safely.</li>
          <li>Modern administration devices rely heavily on motors, sensors, software, alarms, and control systems.</li>
          <li>The regulator evaluates: delivery accuracy, flow control, alarm performance, software reliability, and the clinical consequences if the device fails.</li>
          <li>Always ask: Is the device actively delivering or removing a substance? Could an error in delivery or removal harm the patient? How does the device ensure safe and accurate control?</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 19, we will study <strong>Rule 12</strong>, which covers all other active medical devices that are not specifically covered by Rules 9, 10, or 11.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">This chapter is often called the "catch-all rule" because it includes many devices that do not fit neatly into the earlier active-device categories. We will explain why this rule exists, how regulators decide when to use it, and explore examples such as examination lights, powered hospital beds, powered wheelchairs, sterilization equipment (where applicable), and other active medical devices whose intended purpose does not fall under the previous active-device rules.</p>
        </div>
      </div>

    </div>
  );
}
