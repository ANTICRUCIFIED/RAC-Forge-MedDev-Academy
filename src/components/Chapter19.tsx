import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Zap, Activity, ShieldAlert, AlertCircle, GitBranch, Lightbulb, Check, X, Box, HelpCircle } from 'lucide-react';

export default function Chapter19() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 19</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 12 – All Other Active Medical Devices</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "When an Active Medical Device Doesn't Fit Rules 9, 10, or 11"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand why Rule 12 exists.</li>
          <li>Learn what is meant by a "catch-all" rule.</li>
          <li>Understand how regulators determine whether Rule 12 applies.</li>
          <li>Learn the difference between Rules 9, 10, 11 and 12.</li>
          <li>Understand common examples.</li>
          <li>Learn how to classify unfamiliar active devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Box className="w-6 h-6 text-indigo-500" /> 19.1 Why Was Rule 12 Created?</h3>
      <p>Imagine you have four boxes.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center">
          <p className="font-bold text-slate-800 m-0">Box 1</p>
          <p className="text-sm text-slate-600 m-0">Therapeutic Devices<br/>(Rule 9)</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center">
          <p className="font-bold text-slate-800 m-0">Box 2</p>
          <p className="text-sm text-slate-600 m-0">Diagnostic and Monitoring<br/>(Rule 10)</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center">
          <p className="font-bold text-slate-800 m-0">Box 3</p>
          <p className="text-sm text-slate-600 m-0">Admin / Removal<br/>(Rule 11)</p>
        </div>
        <div className="bg-blue-50 border-2 border-dashed border-blue-300 p-4 rounded text-center flex flex-col justify-center items-center">
          <HelpCircle className="w-6 h-6 text-blue-500 mb-1" />
          <p className="font-bold text-blue-800 m-0 text-sm">Everything Else</p>
        </div>
      </div>
      <p>Now imagine a fourth device. It doesn't fit into any of these boxes. Should it remain unclassified? Obviously not.</p>
      <p className="font-bold text-slate-800">That is why Rule 12 exists. It provides a place for active medical devices that have a medical purpose but do not fall under the earlier active-device rules.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.2 What Is a Catch-All Rule?</h3>
      <p>A catch-all rule is a rule used when none of the earlier rules properly describe the device.</p>
      <p>Think about a library. Books may be arranged as Science, History, Literature. Now imagine a book about architecture. It doesn't belong completely in any of those categories.</p>
      <p>The library creates another section: "General Collection."</p>
      <p className="font-medium text-slate-800">Rule 12 works in the same way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HelpCircle className="w-6 h-6 text-amber-500" /> 19.3 How Does a Regulator Think?</h3>
      <p>Imagine a new device arrives for classification. The regulator asks:</p>
      <ul className="mb-4">
        <li><strong>Question 1:</strong> Does it actively treat the patient? → No</li>
        <li><strong>Question 2:</strong> Does it diagnose or monitor? → No</li>
        <li><strong>Question 3:</strong> Does it administer or remove medicines or body fluids? → No</li>
      </ul>
      <p className="font-semibold text-slate-800">Now, only then, does the regulator begin considering Rule 12.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.4 What Kind of Devices Can Fall Under Rule 12?</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">may include devices whose primary medical purpose does not involve: delivering therapy, diagnosis, monitoring, administering medicines or body fluids.</p></div>
      <p>Depending on their intended medical purpose, examples may include:</p>
      <ul className="mb-4">
        <li>Examination lights with a medical purpose</li>
        <li>Powered examination chairs</li>
        <li>Powered patient positioning systems</li>
        <li>Certain powered rehabilitation equipment</li>
        <li>Medical illumination devices</li>
        <li>Medical furniture with active functions</li>
      </ul>
      <p className="font-bold text-indigo-700 bg-indigo-50 p-2 rounded inline-block">The important point is that classification depends on the intended medical purpose, not simply on the presence of electricity.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.5 What About Powered Hospital Beds?</h3>
      <p>A common question is: <em>"Are electric hospital beds Rule 12 devices?"</em></p>
      <p>The answer is: It depends on the intended medical purpose.</p>
      <p>If the powered functions are intended to position or support the patient as part of medical care, Rule 12 may become relevant. If the device merely provides comfort without a medical purpose, the regulatory analysis may differ.</p>
      <p className="font-medium text-slate-800">Again, the intended purpose is the key.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.6 Powered Wheelchairs</h3>
      <p>Another common example is a powered wheelchair.</p>
      <p>Many people assume <em>"It has a battery, so it must be high risk."</em> Not necessarily. The battery only provides movement.</p>
      <p>The regulator evaluates the intended medical purpose, the risks associated with failure, and the applicable classification rule.</p>
      <p className="font-medium text-slate-800">The presence of electricity alone does not determine the class.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Zap className="w-6 h-6 text-yellow-500" /> 19.7 Examination Lights</h3>
      <p>Imagine a doctor examining a patient's throat. A medical examination light provides proper illumination.</p>
      <p>Does it diagnose? No. Does it treat? No. Does it administer medicine? No. Yet, it still has an intended medical purpose.</p>
      <p className="font-medium text-slate-800">This illustrates why Rule 12 exists.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.8 Combination Devices</h3>
      <p>Modern devices increasingly combine multiple functions. Imagine an examination chair.</p>
      <p>It includes: electric motors, battery backup, height adjustment, patient positioning, control software, safety sensors, emergency stop function.</p>
      <p>It is not merely furniture. It is part of patient care. The regulator therefore evaluates the complete device according to its intended medical purpose.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.9 Software in Rule 12</h3>
      <p>Software may also fall within Rule 12 if it has a medical purpose but is not intended primarily for: therapy, diagnosis, monitoring, or administration of medicines.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">might include software that supports clinical workflow for a medical purpose without directly diagnosing or treating.</p></div>
      <p className="font-medium text-slate-800">However, software classification always depends on its intended use and should be assessed carefully.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.10 Why Intended Purpose Always Comes First</h3>
      <p>Imagine two identical touchscreens.</p>
      <ul className="mb-4">
        <li><strong>Screen A:</strong> Displays hospital visiting hours.</li>
        <li><strong>Screen B:</strong> Controls the movement of an operating table during surgery.</li>
      </ul>
      <p>They look almost identical. Yet, their intended purposes are completely different.</p>
      <p className="font-semibold text-slate-800">The regulator therefore classifies them differently. Appearance does not determine classification. Purpose does.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 19.11 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Every electrical device belongs to Rule 12."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Most active devices are classified under Rules 9, 10, or 11 if those rules apply. Rule 12 is considered only after those possibilities have been assessed.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Rule 12 is for low-risk devices."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Rule 12 is simply a classification rule. The final class depends on the applicable requirements and the device's intended use.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "If the device has software, it automatically belongs to Rule 12."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Software may fall under different rules depending on whether it diagnoses, monitors, treats, or performs another medical function.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Appearance determines classification."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The same-looking device may belong to completely different rules depending on its intended medical purpose.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 19.12 Decision Tree</h3>
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
  N6["Does it provide therapy?"]
  N5 --> N6
  N6 -->|YES| N7{"Rule 9: Does it administer or exchange energy in a potentially hazardous way?"}
  N7 -->|YES| N7A["Rule 9 (Class C)"]
  N7 -->|NO| N7B["Rule 9 (Class B)"]
  N8["↓"]
  N6 -->|NO| N8
  N9["Does it diagnose or monitor?"]
  N8 --> N9
  N9 -->|YES| N10{"Rule 10: What kind of diagnosis or monitoring does it perform?"}
  N10 -->|Images radiopharmaceuticals or vital parameters - immediate danger| N10A["Rule 10 (Class C)"]
  N10 -->|Supplies energy to be absorbed or general monitoring| N10B["Rule 10 (Class B)"]
  N11["↓"]
  N9 -->|NO| N11
  N12["Does it administer or remove medicines, body liquids, or other substances?"]
  N11 --> N12
  N12 -->|YES| N13{"Rule 11: Is the administration or removal of the substance potentially hazardous?"}
  N13 -->|YES| N13A["Rule 11 (Class D)"]
  N13 -->|NO| N13B["Rule 11 (Class C)"]
  N14["↓"]
  N12 -->|NO| N14
  N15["Consider Rule 12 (Class A)"]
  N14 --> N15
  N16["↓"]
  N15 --> N16
  N17["Evaluate: Intended medical purpose, Function, Clinical use, Consequences of failure"]
  N16 --> N17
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 19.13 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine sorting letters at a post office. Most letters fit easily into: Local, National, International.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Now imagine one special package that doesn't fit any standard category. Instead of leaving it unsorted, the post office creates a special handling section. Rule 12 serves the same purpose.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "Rule 12 is not the first rule you check. It is the rule you reach after excluding the earlier active-device rules."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">19.14 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 12 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Powered examination chair</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Possibly</td>
              <td className="border border-slate-200 px-4 py-2">Active medical purpose not primarily therapy, diagnosis, or administration</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Medical examination light</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Possibly</td>
              <td className="border border-slate-200 px-4 py-2">Supports clinical examination</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Powered patient positioning system</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Possibly</td>
              <td className="border border-slate-200 px-4 py-2">Assists medical procedures</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Powered operating table controls</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Possibly</td>
              <td className="border border-slate-200 px-4 py-2">Medical positioning function</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Ventilator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Active therapeutic device (Rule 9)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">MRI Scanner</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Active diagnostic device (Rule 10)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion Pump</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Administers medicinal products (Rule 11)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-emerald-900 mt-0 mb-4">🎉 End of Part IV – Active Medical Devices</h3>
        <p className="text-emerald-800 text-sm mb-4">With Rule 12 complete, we have now covered:</p>
        <ul className="text-emerald-700 space-y-2 mb-6 font-semibold">
          <li>✅ Rules 1–4: Non-Invasive Medical Devices</li>
          <li>✅ Rules 5–8: Invasive and Implantable Medical Devices</li>
          <li>✅ Rules 9–12: Active Medical Devices</li>
        </ul>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 12 is the residual rule for active medical devices not covered by Rules 9, 10, or 11.</li>
          <li>It is not defined by a specific technology but by exclusion.</li>
          <li>Regulators first determine whether the device is: therapeutic, diagnostic/monitoring, or intended to administer/remove substances.</li>
          <li>Only if those categories do not apply do they consider Rule 12.</li>
          <li>As always, the intended medical purpose remains the most important factor in classification.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Part – Special Rules (Rules 13–16)</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">The final section of the First Schedule introduces special classification rules that apply to particular categories of devices rather than to their route of entry or energy source.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">These include devices such as: Medical devices incorporating medicinal substances, Contraceptive devices, Disinfecting and sterilizing medical devices, Devices used for recording diagnostic images.</p>
           <p className="text-sm font-bold text-blue-900 m-0">Unlike the earlier rules, these are special-case rules. They often override the general logic because the nature of the device or its intended purpose creates unique regulatory concerns. This final part will complete your understanding of all 16 classification rules under the Medical Devices Rules, 2017.</p>
        </div>
      </div>

    </div>
  );
}
