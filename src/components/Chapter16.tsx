import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Zap, Activity, ShieldAlert, AlertCircle, GitBranch, Lightbulb, Check, X, ThermometerSun, RadioReceiver } from 'lucide-react';

export default function Chapter16() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 9 – Active Therapeutic Medical Devices Intended to Administer or Exchange Energy</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "When Energy Becomes the Treatment"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 9 covers.</li>
          <li>Understand what "Active Therapeutic Device" means.</li>
          <li>Learn what is meant by administering energy.</li>
          <li>Learn what is meant by exchanging energy.</li>
          <li>Understand why different forms of energy present different risks.</li>
          <li>Learn why some devices become Class B while others become Class C or Class D.</li>
          <li>Understand important exceptions.</li>
          <li>Learn combination active therapeutic devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.1 First, What Is Therapy?</h3>
      <p>Before understanding Rule 9, we must understand one word. <strong>Therapy.</strong></p>
      <p>Therapy simply means: <em>A treatment intended to improve, cure, relieve, or manage a medical condition.</em></p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Giving oxygen, Delivering medicine, Destroying a tumour, Supporting breathing, Stopping bleeding, Restoring heart rhythm.</p></div>
      <p className="font-semibold text-slate-800">Whenever a device actively treats a patient, it performs therapy.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-emerald-500" /> 16.2 What Is an Active Therapeutic Device?</h3>
      <p>An <strong>Active Therapeutic Device</strong> is an active medical device that uses an external source of energy to provide treatment.</p>
      <p>Unlike diagnostic devices, its purpose is not simply to observe the patient. Its purpose is to <strong>change the patient's condition</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Ventilator, Defibrillator, Infusion Pump, Dialysis Machine, Therapeutic Laser, Electrosurgical Generator, Physiotherapy Equipment.</p></div>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.3 Imagine a Hospital Room</h3>
      <p>Now imagine entering an Intensive Care Unit.</p>
      <p>One patient is connected to an ECG monitor. The monitor watches the patient's heart. It does not treat the patient.</p>
      <p>Now look at the next bed. A ventilator is helping another patient breathe. The ventilator is not merely observing. It is actively supporting life.</p>
      <p>This is the difference.</p>
      <ul className="mb-4">
        <li><strong>Monitoring</strong> → Observation</li>
        <li><strong>Therapy</strong> → Treatment</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.4 What Does "Administer Energy" Mean?</h3>
      <p>The word <strong>Administer</strong> means: <em>To deliver something to the patient.</em></p>
      <p>Sometimes, that "something" is energy. Examples include: Electrical energy, Laser energy, Ultrasound energy, Radiofrequency energy, Heat, Cold, Mechanical pressure.</p>
      <p className="font-medium text-slate-800">The medical device deliberately transfers this energy to the patient to achieve a therapeutic effect.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ThermometerSun className="w-6 h-6 text-amber-500" /> 16.5 What Does "Exchange Energy" Mean?</h3>
      <p>Sometimes, the device does not simply give energy. Instead, energy moves between the device and the patient.</p>
      <p>Imagine placing an ice pack on an injured ankle. Heat leaves your body and moves into the ice.</p>
      <p>Now imagine a medical device that carefully controls this exchange. The device may: warm blood, cool tissue, transfer ultrasound, deliver radiofrequency, exchange heat.</p>
      <p className="font-semibold text-slate-800">This is called energy exchange.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-rose-500" /> 16.6 Why Is Energy Potentially Dangerous?</h3>
      <p>Let's compare two objects.</p>
      <p>Object A: A spoon. It cannot burn you.</p>
      <p>Object B: A hot iron. It also touches your skin. But because it carries heat, it can burn you.</p>
      <p>The difference is <strong>energy</strong>.</p>
      <p className="font-bold text-rose-700">Medical devices behave similarly. Energy can heal, but excessive or uncontrolled energy can also injure.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.7 Different Types of Therapeutic Energy</h3>
      <p>Medical devices may use many forms of energy.</p>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Electrical Energy</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Defibrillator</li>
             <li>Electrosurgical Unit</li>
             <li>Nerve Stimulator</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Heat Energy</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Blood Warmer</li>
             <li>Therapeutic Heating Device</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Cold Energy</h5>
           <ul className="text-sm m-0 space-y-1"><li>Cryotherapy Device</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Laser Energy</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Ophthalmic Laser</li>
             <li>Dermatology Laser</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Ultrasound Energy</h5>
           <ul className="text-sm m-0 space-y-1"><li>Therapeutic Ultrasound Machine</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Radiofrequency Energy</h5>
           <ul className="text-sm m-0 space-y-1"><li>RF Ablation System</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Mechanical Energy</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Compression Therapy Pump</li>
             <li>Sequential Compression Device</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Pressure Energy</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Ventilator</li>
             <li>CPAP Machine</li>
           </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.8 The Same Energy Can Be Safe or Dangerous</h3>
      <p>Imagine sunlight. Morning sunlight feels pleasant. Standing under the hot afternoon sun for hours may cause burns. The energy is the same. The amount and duration are different.</p>
      <p>Medical devices work similarly. Small amounts of energy may be therapeutic. Too much energy may damage tissue.</p>
      <p className="font-semibold text-blue-800">This is why regulators focus on how the energy is intended to be used.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.9 Ventilator – A Perfect Example</h3>
      <p>A ventilator uses pressure to move air into the lungs. Without treatment, the patient may not survive.</p>
      <p>However, if the ventilator delivers too much pressure, too little pressure, too much oxygen, or too little oxygen, serious injury may occur.</p>
      <p className="font-medium text-slate-800">Therefore, ventilators receive close regulatory attention.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Zap className="w-6 h-6 text-yellow-500" /> 16.10 Defibrillator</h3>
      <p>A defibrillator intentionally delivers a very large electrical shock.</p>
      <p>Normally, electric shock sounds dangerous. Yet, during cardiac arrest, this electrical energy may save a patient's life.</p>
      <p className="font-medium text-slate-800">Again, the same energy can heal or harm, depending on how, when, and why it is delivered.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.11 Dialysis Machine</h3>
      <p>A dialysis machine does not simply filter blood. It also controls: pressure, fluid movement, temperature, treatment duration.</p>
      <p>Several forms of controlled energy work together. Failure of any one system may seriously affect the patient.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><RadioReceiver className="w-6 h-6 text-emerald-500" /> 16.12 Electrosurgical Unit</h3>
      <p>During surgery, an electrosurgical generator uses high-frequency electrical energy to: cut tissue, stop bleeding, coagulate blood vessels.</p>
      <p>Imagine trying to cut butter. A cold knife works. A hot knife cuts more easily. Electrosurgery uses controlled electrical energy to achieve similar surgical effects.</p>
      <p className="font-bold text-rose-700">If the energy is incorrect, healthy tissue may be damaged.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.13 Laser Therapy</h3>
      <p>Laser systems produce extremely concentrated light. Examples include eye surgery, skin treatment, tumour treatment.</p>
      <p>A laser can remove diseased tissue very precisely. However, incorrect use may permanently damage healthy tissue.</p>
      <p className="font-medium text-slate-800">This is why therapeutic lasers are carefully regulated.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.14 Combination Therapeutic Devices</h3>
      <p>Modern devices rarely perform only one function.</p>
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6 text-sm text-slate-700">
        <p className="m-0 mb-2"><strong>Imagine a ventilator.</strong> It contains: turbine, sensors, oxygen mixer, humidifier, battery, alarms, pressure monitoring, software, display.</p>
        <p className="m-0 mb-2">To the patient, it appears to be one machine. To the regulator, it is a combination of software, electronics, mechanical systems, pneumatic systems, alarms, sensors.</p>
        <p className="m-0 font-bold">The device is assessed as a complete system because patient safety depends on all these components working together.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.15 Important Exceptions</h3>
      <p>Rule 9 recognizes that not every therapeutic device presents the same level of risk.</p>
      <p>Regulators pay particular attention to devices that:</p>
      <ul className="mb-4">
        <li>deliver potentially hazardous levels of energy,</li>
        <li>support or sustain life,</li>
        <li>treat vital organs,</li>
        <li>could cause serious injury if they malfunction.</li>
      </ul>
      <p className="font-medium text-slate-800">These situations generally require greater evidence of safety and performance than devices delivering low-risk forms of therapy.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 16.16 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Every electrical medical device belongs to Rule 9."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Many electrical devices diagnose rather than treat. Those are considered under later rules.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "A bigger machine means higher risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The intended therapeutic function is much more important than size.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Heat is always safe."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Controlled heat may treat disease. Excessive heat may destroy healthy tissue.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "More energy means better treatment."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Medical treatment depends on the correct amount of energy—not simply more energy.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 16.17 Decision Tree</h3>
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
  N6["Does it diagnose?"]
  N5 --> N6
  N6 -->|YES| N7{"Rule 10: What kind of diagnosis or monitoring does it perform?"}
  N7 -->|Images radiopharmaceuticals or vital parameters - immediate danger| N7A["Rule 10 (Class C)"]
  N7 -->|Supplies energy to be absorbed or general monitoring| N7B["Rule 10 (Class B)"]
  N8["↓"]
  N6 -->|NO| N8
  N9["Does it actively treat the patient?"]
  N8 --> N9
  N10["↓"]
  N9 -->|NO| N10
  N9 -->|YES| N10
  N11["Does it administer or exchange energy?"]
  N10 --> N11
  N12["↓"]
  N11 -->|NO| N12
  N11 -->|YES| N12
  N13{"Rule 9: Does it administer or exchange energy in a potentially hazardous way?"}
  N13 -->|YES| N13A["Rule 9 (Class C)"]
  N13 -->|NO| N13B["Rule 9 (Class B)"]
  N12 --> N13
  N14["↓"]
  N13 --> N14
  N15["Evaluate: Type of energy, Amount of energy, Duration, Target tissue, Consequences of failure"]
  N14 --> N15
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 16.18 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine electricity in your home. A small LED bulb uses electricity safely. An industrial welding machine also uses electricity.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Both use the same energy. The difference is how that energy is used.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Rule 9 follows the same principle. "Energy itself is not dangerous. Uncontrolled therapeutic energy is."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">16.19 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 9 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ventilator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Delivers pressure energy to support breathing</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Defibrillator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Delivers electrical energy for therapy</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Electrosurgical Unit</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Delivers electrical energy to cut/coagulate tissue</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Therapeutic Laser</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Delivers laser energy for treatment</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Cryotherapy Unit</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Delivers controlled cold therapy</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Generally Yes</td>
              <td className="border border-slate-200 px-4 py-2">Actively administers therapy by controlling the delivery of fluids or medicines</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG Machine</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Diagnoses; does not treat</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ultrasound Imaging System</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Used for diagnosis rather than therapy</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ICU Patient Monitor</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Monitors; does not provide therapy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 9 applies to <strong>active therapeutic medical devices</strong>.</li>
          <li>These devices use external energy to treat the patient, rather than simply observing or monitoring.</li>
          <li>The form of energy may be electrical, thermal, laser, ultrasound, radiofrequency, mechanical, pressure, or another controlled source.</li>
          <li>The risk depends not only on the energy source, but also on: the amount of energy, where it is delivered, the duration of exposure, the consequences if the device fails.</li>
          <li>Modern therapeutic devices often combine hardware, software, sensors, alarms, and control systems into one integrated medical device, and the system is evaluated as a whole.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 17, we will study <strong>Rule 10</strong>, which covers active medical devices intended for diagnosis and monitoring.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">You'll learn why devices such as: ECG machines, EEG systems, MRI scanners, CT scanners, Ultrasound systems, X-ray equipment, Patient monitors, are regulated differently from therapeutic devices, even though many use the same forms of energy.</p>
           <p className="text-sm font-bold text-blue-900 m-0">The key distinction is simple: <strong>Rule 9 treats the patient. Rule 10 helps the doctor understand the patient.</strong></p>
        </div>
      </div>

    </div>
  );
}
