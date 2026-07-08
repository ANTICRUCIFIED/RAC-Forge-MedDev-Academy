import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, PackageOpen, Activity, AlertTriangle, HelpCircle, GitBranch, Lightbulb, Check, X } from 'lucide-react';

export default function Chapter20() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 20</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 13 – Medical Devices Incorporating a Medicinal Substance</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Is It a Medical Device or a Medicine?"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 13 covers.</li>
          <li>Understand the difference between a medicine and a medical device.</li>
          <li>Learn what an incorporated medicinal substance means.</li>
          <li>Understand combination products.</li>
          <li>Learn why these devices require special regulatory attention.</li>
          <li>Understand common real-world examples.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HelpCircle className="w-6 h-6 text-indigo-500" /> 20.1 One of the Most Confusing Questions</h3>
      <p>Imagine you are holding two products.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg text-center">
          <p className="font-bold text-slate-800 m-0 mb-2">Product A</p>
          <p className="text-sm text-slate-600 m-0">A bottle of antibiotic tablets.</p>
          <p className="text-sm font-semibold text-blue-600 mt-2">Clearly, this is a medicine.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg text-center">
          <p className="font-bold text-slate-800 m-0 mb-2">Product B</p>
          <p className="text-sm text-slate-600 m-0">A heart stent coated with a medicine.</p>
          <p className="text-sm font-semibold text-blue-600 mt-2">Is this a medicine? Or is it a medical device?</p>
        </div>
      </div>
      <p>The answer is: It is primarily a medical device, but it contains or incorporates a medicinal substance.</p>
      <p className="font-bold text-slate-800">This is exactly the type of product covered by Rule 13.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.2 What Is a Medicinal Substance?</h3>
      <p>In simple language, a medicinal substance is something intended to: prevent disease, treat disease, relieve symptoms, modify body functions.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include:</p></div>
      <ul className="mb-4">
        <li>Antibiotics</li>
        <li>Pain medicines</li>
        <li>Insulin</li>
        <li>Steroids</li>
        <li>Chemotherapy medicines</li>
        <li>Hormones</li>
      </ul>
      <p>Normally, these are regulated as medicines.</p>
      <p className="font-medium text-slate-800">But sometimes, a medicine becomes part of a medical device.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><PackageOpen className="w-6 h-6 text-amber-500" /> 20.3 What Does "Incorporating" Mean?</h3>
      <p>The word incorporating simply means: <strong>The medicinal substance is built into the medical device.</strong> The medicine is not supplied separately. It forms part of the device itself.</p>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6">
        <h4 className="font-bold text-amber-900 mt-0 mb-2">Everyday Example</h4>
        <p className="text-sm text-amber-800 m-0 mb-2">Imagine buying a sponge that already contains soap.</p>
        <p className="text-sm text-amber-800 m-0 mb-2">The sponge cleans, but the soap also contributes to cleaning.</p>
        <p className="text-sm text-amber-800 m-0 font-medium">Together, they form one product. Medical devices sometimes work the same way.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.4 Why Is Rule 13 Needed?</h3>
      <p>Imagine a coronary artery stent. Its first job is mechanical. It opens a blocked artery.</p>
      <p>But after implantation, it slowly releases a medicine. The medicine helps reduce the chance of the artery narrowing again.</p>
      <p>Now, the regulator must evaluate:</p>
      <ul className="mb-4">
        <li>the metal stent,</li>
        <li>the coating,</li>
        <li>the medicine,</li>
        <li>how the medicine is released,</li>
        <li>whether the medicine remains stable,</li>
        <li>whether the combination remains safe.</li>
      </ul>
      <p className="font-bold text-slate-800">This is much more complex than evaluating an ordinary implant.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.5 Which Part Is More Important?</h3>
      <p>This is the key question. A product may contain both: a medical device, a medicinal substance.</p>
      <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg my-6 text-center">
        <p className="font-bold text-blue-900 m-0 mb-2">Rule 13 generally applies where the primary intended purpose is achieved by the medical device, while the medicinal substance has a supporting or ancillary role.</p>
        <p className="text-sm text-blue-800 m-0">If the principal intended action is achieved by the medicine itself, the product is generally regulated as a medicinal product rather than as a medical device.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.6 Real-Life Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Drug-Eluting Coronary Stent</p>
          <p className="text-sm text-slate-600 m-0">The stent opens the artery, supports the blood vessel, slowly releases medicine. This is one of the best examples of Rule 13.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Antimicrobial Bone Cement</p>
          <p className="text-sm text-slate-600 m-0">The cement fixes an orthopaedic implant. It also contains an antibiotic. The medicine helps reduce infection risk. The primary purpose, however, is fixation.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Antimicrobial Wound Dressing</p>
          <p className="text-sm text-slate-600 m-0">Some advanced wound dressings contain an antimicrobial medicinal substance. The dressing protects the wound, while the medicinal component provides an additional therapeutic effect. The exact regulatory pathway depends on the product's intended purpose and the role of the medicinal substance.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-rose-500" /> 20.7 Why Are Combination Devices More Difficult?</h3>
      <p>Imagine building a car. Now imagine building a car that also flies. Engineers must now understand both: automobiles, aircraft.</p>
      <p>Combination medical products present a similar challenge. Experts may need knowledge of: medical devices, medicines, materials science, pharmacology, toxicology, biocompatibility.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.8 What Questions Does the Regulator Ask?</h3>
      <p>For Rule 13 products, the regulator asks questions such as:</p>
      <ul className="mb-4">
        <li>What is the device's primary intended purpose?</li>
        <li>What medicinal substance is incorporated?</li>
        <li>Why is it included?</li>
        <li>Is the medicine released?</li>
        <li>How much is released?</li>
        <li>How long is it released?</li>
        <li>Could the medicine affect patient safety?</li>
        <li>Does the combination remain stable throughout its shelf life?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-amber-500" /> 20.9 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "If a product contains a medicine, it is always a medicine."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Some products remain medical devices because the device provides the principal intended action.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Every coated device belongs to Rule 13."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. A coating is not automatically a medicinal substance. The nature and intended purpose of the coating must be assessed.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "The medicine and the device are evaluated separately."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The regulator evaluates the combination product as a whole, while also considering the safety and performance of each component.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "The medicinal substance is always the main part."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. In Rule 13 products, the medicinal substance generally has an ancillary (supporting) role.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 20.10 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Product"]
  N2["↓"]
  N1 --> N2
  N3["Is it a medical device?"]
  N2 --> N3
  N3 -->|NO| N4["Regulated as a medicine/other"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Does it incorporate a medicinal substance?"]
  N5 --> N6
  N6 -->|NO| N7["Apply standard rules"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Does the device provide the principal intended action?"]
  N8 --> N9
  N9 -->|NO| N10["Regulated as a medicine/other"]
  N11["↓"]
  N9 -->|YES| N11
  N12["Consider Rule 13 (Class D)"]
  N11 --> N12
  N13["↓"]
  N12 --> N13
  N14["Evaluate: Device safety, Medicinal substance, Release characteristics, Interaction between both"]
  N13 --> N14
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 20.11 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a cake.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">The cake is the main product. The icing makes it better, but it is not the cake itself.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Rule 13 follows the same idea. The medical device is the main product. The medicinal substance supports its function.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">20.12 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Product</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 13 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Drug-eluting coronary stent</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Device provides support; medicine has an ancillary role</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Antibiotic-coated bone cement</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Device fixes the implant; antibiotic supports infection prevention</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Simple hip implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">No incorporated medicinal substance</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Bottle of antibiotic tablets</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Medicinal product, not a medical device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Standard wound dressing (without medicinal substance)</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Does not incorporate a medicinal substance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 13 applies to medical devices that incorporate a medicinal substance.</li>
          <li>The medical device must provide the principal intended action.</li>
          <li>The medicinal substance has an ancillary or supporting role.</li>
          <li>These products require careful evaluation because both the device and the medicinal substance contribute to safety and performance.</li>
        </ul>
        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600 mt-4">
           <p className="font-bold text-blue-400 mt-0 mb-2">Always ask:</p>
           <ul className="text-sm text-slate-300 space-y-1 mb-0">
             <li>Is this primarily a medical device?</li>
             <li>Does it incorporate a medicinal substance?</li>
             <li>What role does that medicinal substance play?</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
