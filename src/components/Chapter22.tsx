import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Activity, AlertTriangle, GitBranch, Lightbulb, Check, X, ShieldAlert, Zap } from 'lucide-react';

export default function Chapter22() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 22</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 15 – Medical Devices Intended Specifically for Disinfecting, Cleaning, Rinsing or Sterilizing Medical Devices</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Before a Medical Device Can Save a Life, It Must First Be Safe to Use"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 15 covers.</li>
          <li>Learn the difference between cleaning, disinfection, and sterilization.</li>
          <li>Understand why reusable medical devices require reprocessing.</li>
          <li>Learn how sterilizers and washer-disinfectors work.</li>
          <li>Understand why these devices require special regulatory attention.</li>
          <li>Learn common examples.</li>
          <li>Understand combination reprocessing systems.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-indigo-500" /> 22.1 Imagine Two Surgical Operations</h3>
      <p>A surgeon performs an operation. After the surgery, the surgical instruments are covered with: blood, body fluids, tissue residue, microorganisms.</p>
      <p>Now imagine the same instruments are immediately used on another patient without cleaning. What could happen?</p>
      <p className="font-bold text-red-600">The second patient could develop a serious infection.</p>
      <p>The problem is not the surgery itself. The problem is that the instruments were not properly reprocessed.</p>
      <p className="font-medium text-slate-800">This is why Rule 15 exists.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.2 What Is Reprocessing?</h3>
      <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg my-6 text-center">
        <p className="font-bold text-blue-900 m-0 mb-2">Reprocessing means</p>
        <p className="text-lg text-blue-800 m-0 font-medium">Preparing a reusable medical device so that it can be safely used again on another patient.</p>
      </div>
      <p>Reprocessing is not a single step. It consists of several stages, each having its own purpose.</p>

      <div className="space-y-6 my-8">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mt-0 mb-2">22.3 Step 1 – Cleaning</h3>
          <p className="text-sm text-slate-600 m-0 mb-2">Cleaning is the first step. Its purpose is to remove blood, dirt, tissue, proteins, other visible contamination.</p>
          <p className="text-sm text-slate-600 m-0 mb-2">Imagine washing a muddy bicycle. Before repairing it, you first wash away the mud. Medical devices must also be cleaned before further processing.</p>
          <p className="text-sm font-semibold text-blue-600 m-0">Cleaning alone does not make the device sterile.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mt-0 mb-2">22.4 Step 2 – Disinfection</h3>
          <p className="text-sm text-slate-600 m-0 mb-2">After cleaning, many harmful microorganisms are reduced or destroyed. This process is called disinfection.</p>
          <p className="text-sm text-slate-600 m-0 mb-2">Think about cleaning your kitchen table. You first wipe away food. Then you use a disinfectant. The surface becomes much safer, but it is not necessarily sterile.</p>
          <p className="text-sm font-semibold text-blue-600 m-0">Disinfection reduces microorganisms to a level that is considered safe for the intended purpose, but it does not necessarily destroy all microbial forms, especially bacterial spores.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mt-0 mb-2">22.5 Step 3 – Sterilization</h3>
          <p className="text-sm text-slate-600 m-0 mb-2">Sterilization is the highest level of reprocessing.</p>
          <p className="text-sm text-slate-600 m-0 mb-2">Its goal is: To destroy or remove all forms of viable microorganisms, including bacterial spores, using a validated sterilization process.</p>
          <p className="text-sm text-slate-600 m-0 mb-2">Imagine burning a field full of weeds. Cleaning removes some weeds. Disinfection kills many weeds.</p>
          <p className="text-sm font-semibold text-blue-600 m-0">Sterilization removes the problem as completely as possible using an appropriate validated process.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500" /> 22.6 Everyday Analogy</h3>
      <p>Imagine washing dishes. First, you remove leftover food. That is like cleaning. Next, you wash with detergent. That improves cleanliness. Finally, imagine placing the dishes into a machine that completely sanitizes them using a validated process. That resembles sterilization.</p>
      <p className="font-medium text-slate-800">The steps build upon one another.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.7 Why Is Cleaning So Important?</h3>
      <p>Many people think "The sterilizer will kill everything anyway."</p>
      <p>Not always. Imagine trying to wash dirty clothes without removing thick mud first. The washing machine cannot clean properly.</p>
      <p>Similarly, blood and tissue left on an instrument may prevent effective sterilization. Cleaning is therefore essential before sterilization.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.8 Medical Devices Covered by Rule 15</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include:</p></div>
      <ul className="mb-4 grid grid-cols-1 md:grid-cols-2">
        <li>Steam sterilizers (autoclaves)</li>
        <li>Washer-disinfectors</li>
        <li>Endoscope reprocessors</li>
        <li>Instrument cleaning systems</li>
        <li>Ultrasonic cleaners intended for medical device reprocessing</li>
        <li>Medical device rinsing systems</li>
      </ul>
      <p className="font-bold text-slate-800">The common feature is that their intended medical purpose is to prepare another medical device for safe reuse.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.9 to 22.11 Specific Examples</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Steam Sterilizer (Autoclave)</p>
          <p className="text-sm text-slate-600 m-0">An autoclave is one of the most common sterilization devices in hospitals. It uses steam, pressure, controlled temperature, controlled time, to achieve sterilization. Imagine cooking food in a pressure cooker. Both use pressure and steam, but an autoclave is carefully validated to achieve reliable sterilization of medical devices.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Washer-Disinfector</p>
          <p className="text-sm text-slate-600 m-0">A washer-disinfector performs several steps automatically. It may: wash, rinse, disinfect, dry. This reduces the possibility of human error. However, the machine itself must also be shown to perform these functions reliably.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Endoscope Reprocessor</p>
          <p className="text-sm text-slate-600 m-0">Flexible endoscopes are complex instruments. They contain long narrow channels, valves, optical systems. Simply rinsing them with water is not enough. Automated endoscope reprocessors are designed to clean and disinfect these instruments according to validated procedures.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.12 Combination Reprocessing Systems</h3>
      <p>Modern reprocessing systems combine many technologies. A sterilization system may include pumps, heaters, water purification, chemical dosing, sensors, software, cycle recording, alarms, printers, network connectivity.</p>
      <p className="font-bold text-slate-800">Although the user sees one machine, the regulator evaluates the complete system because every component contributes to patient safety.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.13 Why Validation Matters</h3>
      <p>Imagine baking a cake. You use the same recipe every time because you want the same result. Sterilization works in a similar way.</p>
      <p>Hospitals and manufacturers must show that a sterilization process is validated—meaning it consistently produces the required result when performed correctly.</p>
      <p className="font-medium text-slate-800">Validation provides confidence that the process is repeatable and reliable.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.14 Important Regulatory Considerations</h3>
      <p>For Rule 15 devices, regulators consider questions such as:</p>
      <ul className="mb-4">
        <li>Does the device consistently perform its intended cleaning or sterilization function?</li>
        <li>Is the process validated?</li>
        <li>Can the cycle be monitored?</li>
        <li>Are failures detected and reported?</li>
        <li>Are users provided with clear instructions?</li>
        <li>Does the device help prevent cross-contamination?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-amber-500" /> 22.15 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Cleaning and sterilization are the same."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Cleaning removes contamination. Sterilization is a separate validated process intended to eliminate viable microorganisms.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "If an instrument looks clean, it must be sterile."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Microorganisms are often invisible. A visually clean instrument is not necessarily sterile.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Any washing machine can clean surgical instruments."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Medical device reprocessing equipment is specially designed and validated for that purpose.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Sterilization only depends on high temperature."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Successful sterilization depends on the validated combination of factors such as time, temperature, pressure, or the sterilization method being used.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 22.16 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Is its intended purpose to clean, disinfect, rinse, or sterilize another medical device?"]
  N2 --> N3
  N3 -->|NO| N4["Apply standard rules"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Is it intended specifically for medical device reprocessing?"]
  N5 --> N6
  N6 -->|NO| N7["General purpose equipment, not a medical device under Rule 15 "]
  N8["↓"]
  N6 -->|YES| N8
  N9{"Rule 15: Is it specifically for disinfecting invasive devices?"}
  N9 -->|YES| N9A["Rule 15 (Class C)"]
  N9 -->|NO| N9B["Rule 15 (Class B)"]
  N8 --> N9
  N10["↓"]
  N9 --> N10
  N11["Evaluate: Intended purpose, Validation, Cleaning performance, Disinfection/sterilization performance, Reliability, User safety"]
  N10 --> N11
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 22.17 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a chef. Before preparing food, the chef washes the knife. Now imagine a surgeon. Before performing surgery, the instrument must be cleaned, disinfected where appropriate, and sterilized when required.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">The surgeon's instruments require a much higher level of assurance because patient safety depends on them.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "A reusable medical device is only as safe as the process used to prepare it for the next patient."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">22.18 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 15 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Steam Sterilizer (Autoclave)</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Sterilizes reusable medical devices</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Washer-Disinfector</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Cleans and disinfects reusable medical devices</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Automated Endoscope Reprocessor</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Reprocesses flexible endoscopes</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Medical Ultrasonic Cleaner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes*</td>
              <td className="border border-slate-200 px-4 py-2">If specifically intended for medical device cleaning</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Household Dishwasher</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Not intended for medical device reprocessing</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical Forceps</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">It is the device being reprocessed, not the reprocessing equipment</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG Machine</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Diagnostic device</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-slate-500 mt-2">*Its classification depends on the manufacturer's intended medical purpose.</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 15 applies to medical devices specifically intended for cleaning, disinfecting, rinsing, or sterilizing other medical devices.</li>
          <li>Cleaning, disinfection, and sterilization are different processes, each serving a different purpose.</li>
          <li>Proper reprocessing helps prevent cross-contamination and healthcare-associated infections.</li>
          <li>Reprocessing equipment must consistently perform its intended function and operate using validated processes.</li>
        </ul>
        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600 mt-4">
           <p className="font-bold text-blue-400 mt-0 mb-2">Always ask:</p>
           <ul className="text-sm text-slate-300 space-y-1 mb-0">
             <li>Is the device intended to prepare another medical device for safe reuse?</li>
             <li>Is it specifically intended for medical device reprocessing?</li>
             <li>Has its cleaning, disinfection, or sterilization process been validated?</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
