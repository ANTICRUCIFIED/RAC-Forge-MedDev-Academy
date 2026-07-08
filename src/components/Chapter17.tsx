import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Zap, Activity, ShieldAlert, AlertCircle, GitBranch, Lightbulb, Check, X, Search, HeartPulse, Eye, Stethoscope } from 'lucide-react';

export default function Chapter17() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 17</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 10 – Active Medical Devices Intended for Diagnosis and Monitoring</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Doesn't Cure the Patient—It Helps the Doctor Make the Right Decision"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 10 covers.</li>
          <li>Understand the difference between diagnosis and therapy.</li>
          <li>Learn what diagnostic devices actually do.</li>
          <li>Understand patient monitoring.</li>
          <li>Learn why some diagnostic devices are higher risk than others.</li>
          <li>Understand the important exceptions in Rule 10.</li>
          <li>Learn how regulators classify imaging systems and monitoring equipment.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Stethoscope className="w-6 h-6 text-blue-500" /> 17.1 Imagine Visiting a Doctor</h3>
      <p>You have a fever. The doctor asks several questions. Then the doctor measures: Temperature, Blood pressure, Oxygen level, Heart rate.</p>
      <p>Next, the doctor orders: an X-ray, an ECG, blood tests.</p>
      <p>Notice something. None of these tests actually cures you. Instead, they help the doctor understand <strong>what is wrong</strong>.</p>
      <p className="font-semibold text-slate-800">That is exactly what Rule 10 is about.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Search className="w-6 h-6 text-indigo-500" /> 17.2 What Is Diagnosis?</h3>
      <p>Diagnosis simply means: <em>Finding out what disease, injury, or medical condition a patient has.</em></p>
      <p>Think of a detective investigating a mystery. The detective gathers clues. Only after collecting enough evidence does the detective solve the case.</p>
      <p>Doctors do exactly the same thing.</p>
      <p className="font-semibold text-slate-800">Diagnostic devices provide those clues.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.3 Diagnostic Devices Do Not Treat</h3>
      <p>Imagine two rooms in a hospital.</p>
      <ul className="mb-4">
        <li><strong>Room 1:</strong> An ECG machine records the electrical activity of the heart. It tells the doctor what is happening.</li>
        <li><strong>Room 2:</strong> A defibrillator delivers an electrical shock to restore the heart rhythm. It actively treats the patient.</li>
      </ul>
      <p>Both use electricity.</p>
      <p>One diagnoses. One treats.</p>
      <p className="font-bold text-rose-700">This is the key difference between Rule 10 and Rule 9.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Eye className="w-6 h-6 text-emerald-500" /> 17.4 What Is Monitoring?</h3>
      <p>Sometimes, a doctor does not need just one measurement. The doctor wants to know what happens every second, every minute, or every hour.</p>
      <p>This is called <strong>monitoring</strong>.</p>
      <p>Monitoring means: <em>Observing the patient's condition continuously or repeatedly over time.</em></p>
      <div className="bg-slate-100 p-4 rounded-lg my-4">
        <p className="font-bold text-slate-800 m-0 mb-1">Everyday Analogy</p>
        <p className="text-sm m-0">Imagine checking the weather. Looking outside once tells you the weather at that moment. Watching the weather all day tells you how it changes. That is monitoring. Medical devices work in the same way.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HeartPulse className="w-6 h-6 text-rose-500" /> 17.5 Examples of Monitoring Devices</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include:</p></div>
      <ul className="mb-4">
        <li>ICU Patient Monitor</li>
        <li>Pulse Oximeter</li>
        <li>Fetal Monitor</li>
        <li>Holter ECG</li>
        <li>Continuous Glucose Monitor (CGM)</li>
        <li>Bedside Cardiac Monitor</li>
      </ul>
      <p className="font-medium text-slate-800">These devices do not simply provide one reading. They continuously observe the patient's condition.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.6 Different Types of Diagnostic Devices</h3>
      <p>Modern medicine uses many kinds of diagnostic equipment.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mt-0 mb-2">Electrical</h5>
          <ul className="text-sm m-0 space-y-1"><li>ECG</li><li>EEG</li><li>EMG</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mt-0 mb-2">Imaging</h5>
          <ul className="text-sm m-0 space-y-1"><li>X-ray</li><li>CT</li><li>MRI</li><li>Ultrasound</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mt-0 mb-2">Optical</h5>
          <ul className="text-sm m-0 space-y-1"><li>Ophthalmoscope</li><li>Endoscopic imaging systems</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h5 className="font-bold text-slate-800 mt-0 mb-2">Physiological</h5>
          <ul className="text-sm m-0 space-y-1"><li>Blood pressure monitor</li><li>Pulse oximeter</li><li>Spirometer</li></ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 col-span-full md:col-span-2">
          <h5 className="font-bold text-slate-800 mt-0 mb-2">Laboratory</h5>
          <ul className="text-sm m-0 space-y-1"><li>Clinical chemistry analyzers</li><li>Hematology analyzers</li><li>Blood gas analyzers</li></ul>
        </div>
      </div>
      <p>Each type gathers different information, but the common goal is the same: <strong>to help diagnose or monitor a patient.</strong></p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-amber-500"/> 17.7 Why Can Diagnostic Devices Still Be High Risk?</h3>
      <p>Many people think: <em>"If the device only looks, how can it be dangerous?"</em> Let's consider an example.</p>
      <p>Imagine an X-ray machine. If it delivers the wrong amount of radiation, the patient may receive unnecessary exposure.</p>
      <p>Now imagine an MRI scanner. If safety procedures are ignored, metal objects may become dangerous projectiles.</p>
      <p>Now consider a patient monitor. If it fails to detect a dangerously low oxygen level, treatment may be delayed.</p>
      <p className="font-bold text-rose-700">Even though these devices do not provide therapy, their failure may still have serious consequences.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.8 Imaging Systems</h3>
      <p>Imaging devices create pictures of the inside of the body. Examples include:</p>
      <ul className="mb-4">
        <li><strong>X-ray:</strong> Shows bones and some chest conditions.</li>
        <li><strong>CT Scanner:</strong> Produces detailed cross-sectional images.</li>
        <li><strong>MRI:</strong> Uses powerful magnetic fields and radio waves to create detailed images of soft tissues.</li>
        <li><strong>Ultrasound:</strong> Uses sound waves to visualize organs, blood flow, or a developing fetus.</li>
      </ul>
      <p className="font-medium text-slate-800">Although all four create images, they use different technologies and present different risks.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.9 Why Does Radiation Matter?</h3>
      <p>Some diagnostic devices use ionizing radiation, such as X-ray and CT.</p>
      <p>Ionizing radiation can be extremely useful. It helps doctors detect: fractures, pneumonia, cancers, internal injuries.</p>
      <p>However, unnecessary or excessive exposure can also increase risk.</p>
      <p className="font-bold text-indigo-700 bg-indigo-50 p-2 rounded inline-block">Therefore, devices using ionizing radiation receive special regulatory attention.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.10 Patient Monitoring Can Save Lives</h3>
      <p>Imagine a patient in an Intensive Care Unit. The monitor continuously measures: Heart rate, Blood pressure, Oxygen saturation, Respiratory rate.</p>
      <p>If the oxygen level suddenly falls, the monitor sounds an alarm.</p>
      <p>The monitor does not treat the patient. It alerts the healthcare team so that treatment can begin quickly.</p>
      <p className="font-medium text-slate-800">This illustrates why reliable monitoring is so important.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.11 Combination Diagnostic Devices</h3>
      <p>Modern diagnostic systems combine many technologies. Imagine an MRI scanner. It contains: powerful magnets, radiofrequency system, cooling system, patient table, software, image-processing computer, display, safety sensors.</p>
      <p className="font-semibold text-slate-800">Although the patient sees one machine, the regulator evaluates the complete system because every component contributes to safety and performance.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.12 Artificial Intelligence in Diagnosis</h3>
      <p>Modern diagnostic devices increasingly use artificial intelligence. Examples include software that helps detect: lung nodules, diabetic retinopathy, heart rhythm abnormalities, fractures.</p>
      <p>AI does not replace the doctor. Instead, it assists the doctor by analyzing large amounts of information quickly.</p>
      <p className="font-medium text-slate-800">When AI software has an intended medical purpose, it may itself be regulated as a medical device.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.13 Important Exceptions</h3>
      <p>Rule 10 gives special attention to diagnostic devices that:</p>
      <ul className="mb-4">
        <li>use ionizing radiation,</li>
        <li>monitor vital physiological processes,</li>
        <li>provide information used for immediate clinical decisions,</li>
        <li>could lead to serious harm if they produce incorrect information.</li>
      </ul>
      <p className="font-medium text-slate-800">These situations require greater confidence in the device's accuracy and reliability.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 17.14 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Diagnostic devices are always low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Incorrect diagnostic information can delay or prevent life-saving treatment.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Patient monitors provide treatment."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. They observe and alert. They do not directly treat.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "MRI uses X-rays."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. MRI uses magnetic fields and radiofrequency energy. It does not use ionizing radiation.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "All imaging systems work the same way."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Each technology uses different physical principles and has different safety considerations.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 17.15 Decision Tree</h3>
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
  N6["Is the primary purpose diagnosis or monitoring?"]
  N5 --> N6
  N6 -->|NO| N7{"Rule 9: Does it administer or exchange energy in a potentially hazardous way?"}
  N7 -->|YES| N7A["Rule 9 (Class C)"]
  N7 -->|NO| N7B["Rule 9 (Class B)"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Does it use ionizing radiation?"]
  N8 --> N9
  N10["Does it monitor vital physiological parameters?"]
  N9 --> N10
  N11["Could incorrect information lead to immediate danger?"]
  N10 --> N11
  N12["↓"]
  N11 --> N12
  N13{"Rule 10: What kind of diagnosis or monitoring does it perform?"}
  N13 -->|Images radiopharmaceuticals or vital parameters (immediate danger)| N13A["Rule 10 (Class C)"]
  N13 -->|Supplies energy to be absorbed or general monitoring| N13B["Rule 10 (Class B)"]
  N12 --> N13
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 17.16 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a car dashboard. The speedometer tells you how fast the car is moving. The fuel gauge tells you how much fuel remains. Neither one drives the car.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">They simply provide information so the driver can make good decisions. Diagnostic and monitoring devices work in the same way.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "Rule 10 provides information. Rule 9 provides treatment."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">17.17 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 10 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG Machine</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Records electrical activity of the heart</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">MRI Scanner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Produces diagnostic images</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">CT Scanner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Uses X-rays to create cross-sectional images</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ultrasound Scanner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Uses sound waves for diagnostic imaging</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ICU Patient Monitor</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Continuously monitors vital signs</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Pulse Oximeter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Monitors oxygen saturation</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Defibrillator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Treats the patient (Rule 9 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ventilator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Supports breathing (Rule 9 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Delivers therapy (Rule 9 concept)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 10 applies to active medical devices intended for diagnosis or monitoring.</li>
          <li>Their primary purpose is to provide information, not to treat the patient.</li>
          <li>Diagnostic devices help healthcare professionals understand a patient's condition, while monitoring devices observe the patient's condition over time.</li>
          <li>Devices using ionizing radiation, monitoring vital physiological processes, or providing information that could influence urgent clinical decisions require particularly careful regulatory evaluation.</li>
          <li>Always ask: Does the device use external energy? Is its main purpose diagnosis or monitoring? Could incorrect information lead to inappropriate or delayed treatment?</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 18, we will study <strong>Rule 11</strong>, which covers active medical devices intended to administer or remove medicinal products, body liquids, or other substances.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">This chapter includes devices such as: Infusion pumps, Syringe pumps, Enteral feeding pumps, Peritoneal dialysis cyclers, Irrigation pumps, Suction pumps.</p>
           <p className="text-sm font-bold text-blue-900 m-0">We will explain why moving a medicine or body fluid may seem simple, but controlling how much, how fast, and to whom it is delivered can have a profound effect on patient safety.</p>
        </div>
      </div>

    </div>
  );
}
