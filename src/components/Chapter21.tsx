import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Shield, AlertTriangle, HelpCircle, GitBranch, Lightbulb, Check, X } from 'lucide-react';

export default function Chapter21() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 21</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 14 – Medical Devices Intended for Contraception or Prevention of the Transmission of Sexually Transmitted Diseases (STDs)</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Small Devices, Very Important Responsibility"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 14 covers.</li>
          <li>Learn what contraception means.</li>
          <li>Understand why contraceptive devices receive special regulatory attention.</li>
          <li>Learn the different types of contraceptive devices.</li>
          <li>Understand temporary and long-term contraceptive devices.</li>
          <li>Learn why failure of these devices may have significant consequences.</li>
          <li>Understand combination contraceptive devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.1 What Does "Contraception" Mean?</h3>
      <p>The word contraception simply means <strong>Preventing pregnancy.</strong></p>
      <p>Contraceptive devices help prevent the meeting of the sperm and the egg or otherwise prevent pregnancy through their intended mechanism of action.</p>
      <p>Unlike medicines, many contraceptive products work primarily by:</p>
      <ul className="mb-4">
        <li>acting as a barrier,</li>
        <li>providing physical support,</li>
        <li>or functioning as a medical device.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Shield className="w-6 h-6 text-indigo-500" /> 21.2 Why Does Rule 14 Exist?</h3>
      <p>Imagine two products.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg text-center">
          <p className="font-bold text-slate-800 m-0 mb-2">Product A</p>
          <p className="text-sm text-slate-600 m-0">A surgical glove.</p>
          <p className="text-sm font-semibold text-blue-600 mt-2">Purpose: Protect the healthcare worker.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg text-center">
          <p className="font-bold text-slate-800 m-0 mb-2">Product B</p>
          <p className="text-sm text-slate-600 m-0">A condom.</p>
          <p className="text-sm font-semibold text-blue-600 mt-2">Purpose: Prevent pregnancy and reduce the transmission of certain sexually transmitted infections.</p>
        </div>
      </div>
      <p>Although both products are made from similar materials, their intended purposes are completely different.</p>
      <p className="font-bold text-slate-800">Because the consequences of failure are also different, they cannot be regulated in the same way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.3 What Happens If the Device Fails?</h3>
      <p>Imagine a blood pressure cuff. If it gives an incorrect reading, the doctor can usually repeat the measurement.</p>
      <p>Now imagine a condom with a manufacturing defect. The failure may lead to:</p>
      <ul className="mb-4">
        <li>unintended pregnancy,</li>
        <li>transmission of sexually transmitted infections,</li>
        <li>emotional,</li>
        <li>medical,</li>
        <li>and social consequences.</li>
      </ul>
      <p className="font-medium text-slate-800">This illustrates why contraceptive devices require careful evaluation.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.4 Types of Contraceptive Devices</h3>
      <p>There are several categories.</p>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Barrier Devices</p>
          <p className="text-sm text-slate-600 m-0 mb-2">These physically prevent sperm from reaching the egg.</p>
          <p className="text-sm text-slate-600 m-0"><strong>Examples:</strong> Male condoms, Female condoms, Diaphragms, Cervical caps.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Intrauterine Devices (IUDs)</p>
          <p className="text-sm text-slate-600 m-0">These are placed inside the uterus by a trained healthcare professional. Depending on the design, they may remain in place for several years. Because they remain inside the body, their long-term safety and performance are very important.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Implantable Contraceptive Devices</p>
          <p className="text-sm text-slate-600 m-0">Some contraceptive systems remain inside the body for an extended period. Although they are small, they must continue to perform safely for months or years.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.5 Why Are Long-Term Devices Different?</h3>
      <p>Imagine two umbrellas. One protects you during a single rainstorm. The other must protect you every day for five years.</p>
      <p>Clearly, the second umbrella must be much more durable.</p>
      <p className="font-bold text-slate-800">Contraceptive devices follow the same principle. A device expected to remain effective for years must demonstrate long-term safety and performance.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.6 Prevention of Sexually Transmitted Diseases</h3>
      <p>Some devices have another important purpose. They help reduce the risk of transmission of certain sexually transmitted infections (STIs), such as HIV.</p>
      <p>For example, condoms provide both contraceptive protection, and protection against many sexually transmitted infections when used correctly.</p>
      <p className="font-medium text-slate-800">This dual purpose makes their intended use particularly important.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.7 Why Material Quality Matters</h3>
      <p>Imagine filling a balloon with water. If the balloon has a tiny hole, the water leaks.</p>
      <p>Now imagine a condom with a microscopic defect. The defect may not even be visible. Yet, it could affect performance.</p>
      <p>This is why manufacturers perform extensive testing, including:</p>
      <ul className="mb-4 grid grid-cols-2">
        <li>burst strength</li>
        <li>leakage</li>
        <li>dimensional accuracy</li>
        <li>material quality</li>
        <li>shelf-life testing</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.8 Combination Contraceptive Devices</h3>
      <p>Modern contraceptive devices may combine several technologies.</p>
      <p>Imagine an intrauterine device that includes: a polymer frame, a metal component, a medicinal substance that is released gradually.</p>
      <p>Now the regulator must evaluate: the device, the materials, the release characteristics, long-term safety, interaction with body tissues.</p>
      <p className="font-bold text-slate-800">Combination products require a more comprehensive assessment than simple barrier devices.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.9 Real-Life Examples</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Male / Female Condom</p>
          <p className="text-sm text-slate-600 m-0"><strong>Purpose:</strong> Barrier contraception. Also helps reduce transmission of certain STIs. Rule 14 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Copper Intrauterine Device (Copper IUD)</p>
          <p className="text-sm text-slate-600 m-0"><strong>Purpose:</strong> Long-term contraception. Placed inside the uterus. Rule 14 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Hormone-Releasing Intrauterine System (IUS)</p>
          <p className="text-sm text-slate-600 m-0"><strong>Purpose:</strong> Long-term contraception. Combines a device with controlled release of a medicinal substance. This may involve both Rule 14 and the considerations applicable to devices incorporating medicinal substances.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Diaphragm</p>
          <p className="text-sm text-slate-600 m-0"><strong>Purpose:</strong> Barrier contraception. Rule 14 concept.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.10 Important Regulatory Considerations</h3>
      <p>For contraceptive devices, regulators evaluate questions such as:</p>
      <ul className="mb-4">
        <li>Does the device perform reliably throughout its intended life?</li>
        <li>Is the material biocompatible?</li>
        <li>Does it remain mechanically stable?</li>
        <li>Is it easy for healthcare professionals or users to use correctly?</li>
        <li>What happens if it fails?</li>
        <li>Are the instructions for use clear?</li>
      </ul>
      <p className="font-medium text-slate-800">These questions help ensure that the device performs safely and effectively.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-amber-500" /> 21.11 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Contraceptive devices are simple products."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Many require extensive design verification, biocompatibility testing, performance testing, and clinical evidence.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "A condom is just a piece of rubber."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Its intended medical purpose and the consequences of failure make it a regulated medical device.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "All contraceptive devices work the same way."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Barrier methods, intrauterine devices, and long-term implantable systems work differently and may have different regulatory considerations.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "If a device contains hormones, it automatically becomes a medicine."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Some products remain medical devices while incorporating a medicinal substance, depending on how the principal intended action is achieved.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 21.12 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Is its intended purpose contraception or prevention of transmission of sexually transmitted diseases?"]
  N2 --> N3
  N3 -->|NO| N4["Apply standard rules"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Is it a:"]
  N5 --> N6
  N7["↓"]
  N6 -->|Barrier device?| N7
  N6 -->|Intrauterine device?| N7
  N6 -->|Long-term implant?| N7
  N6 -->|Combination device?| N7
  N8{"Rule 14: Is it implantable or intended for long-term use?"}
  N8 -->|YES| N8A["Rule 14 (Class D)"]
  N8 -->|NO| N8B["Rule 14 (Class C)"]
  N7 --> N8
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 21.13 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a seat belt. You rarely think about it. But when it is needed, it must work perfectly.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Contraceptive devices are similar. They may appear simple, but they carry an important responsibility.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "The smaller the device does not mean the smaller the responsibility."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">21.14 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 14 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Male condom</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Barrier contraception and STI prevention</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Female condom</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Barrier contraception</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Copper IUD</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term contraceptive device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hormone-releasing IUS</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Contraceptive device with medicinal component</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Diaphragm</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Barrier contraceptive device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical glove</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Protects healthcare worker; not intended for contraception</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Urinary catheter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Urinary drainage device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Orthopaedic implant</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 14 applies to medical devices intended for contraception or the prevention of transmission of sexually transmitted diseases.</li>
          <li>Classification is based on the intended purpose, not simply on the material or appearance of the device.</li>
          <li>Long-term contraceptive devices require greater evidence of long-term safety and performance.</li>
          <li>Combination contraceptive devices that incorporate medicinal substances may require consideration of both Rule 14 and the principles discussed in Rule 13.</li>
        </ul>
        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600 mt-4">
           <p className="font-bold text-blue-400 mt-0 mb-2">Always ask:</p>
           <ul className="text-sm text-slate-300 space-y-1 mb-0">
             <li>Is the primary intended purpose contraception or STI prevention?</li>
             <li>Is it a barrier device, an intrauterine device, or another type of contraceptive system?</li>
             <li>Does it also incorporate a medicinal substance or other special feature?</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
