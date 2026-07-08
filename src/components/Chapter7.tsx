import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Check, X, HelpCircle, AlertCircle, GitBranch, Lightbulb, Droplet, Database } from 'lucide-react';

export default function Chapter7() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 2 – Non-Invasive Medical Devices Intended for Channeling or Storing</h2>
        <p className="text-sm font-medium text-blue-800 mb-2">Blood, Body Liquids, Cells, Tissues, Liquids or Gases</p>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Never Enters the Body…But What It Carries Eventually Does."
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand the purpose of Rule 2.</li>
          <li>Learn why some non-invasive devices present a higher level of risk than Rule 1 devices.</li>
          <li>Understand the meaning of channeling and storing.</li>
          <li>Understand why the substance being carried is important.</li>
          <li>Learn how Rule 2 differs from Rule 1.</li>
          <li>Identify medical devices covered by Rule 2.</li>
          <li>Understand common misconceptions.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.1 Introduction</h3>
      <p>When most beginners hear the words <em>"Non-Invasive Medical Device"</em> they immediately think <em>"Low Risk."</em> That assumption is understandable—but it is not always correct.</p>
      <p>Rule 2 is the first rule that teaches us something very important.</p>
      <p className="font-semibold text-blue-800 bg-blue-50 py-2 px-4 rounded border border-blue-200">A device may never enter the patient's body, yet it may still have a significant effect on patient safety. This is because the device may carry, store, or transfer something that will eventually enter the patient's body.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.2 A Simple Story</h3>
      <p>Imagine you are admitted to a hospital. The doctor prescribes intravenous (IV) antibiotics. You notice a plastic tube connected between the IV bottle and your vein.</p>
      <p>Now ask yourself: <strong>Does this tube enter your body?</strong></p>
      <p>Only the catheter tip enters the vein. The long plastic tubing remains outside your body. So, is the tubing unimportant?</p>
      <p><strong>Absolutely not.</strong></p>
      <p>Imagine the tube has:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>a leak,</li>
        <li>bacterial contamination,</li>
        <li>chemical contamination,</li>
        <li>incorrect connection,</li>
        <li>poor material quality.</li>
      </ul>
      <p className="font-medium">Even though the tube itself stays outside the body, everything flowing through it eventually reaches your bloodstream. That is why regulators pay special attention to devices covered by Rule 2.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-indigo-500" /> 7.3 What Does "Channeling" Mean?</h3>
      <p>The word channeling sounds technical. In simple language, it means:</p>
      <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 text-indigo-900 italic font-medium p-4 rounded-r-lg my-4">
        Providing a pathway through which something can safely move from one place to another.
      </blockquote>
      
      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Everyday Example: Water Pipe</h5>
          <p className="text-sm text-slate-600 mb-2">Think about a water pipe in your home. The pipe does not drink the water. The pipe simply carries the water.</p>
          <ul className="text-sm m-0 pl-4 space-y-1">
             <li>If the pipe is clean, the water remains clean.</li>
             <li>If the pipe is dirty, the water becomes contaminated.</li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Medical Examples</h5>
          <p className="text-sm text-slate-600 mb-2">A medical device may channel:</p>
          <ul className="grid grid-cols-2 gap-1 text-sm m-0 pl-4 mb-3">
             <li>Blood</li>
             <li>Saline</li>
             <li>Medicines</li>
             <li>Nutritional fluids</li>
             <li>Oxygen</li>
             <li>Medical gases</li>
             <li>Dialysis fluid</li>
             <li>Body fluids</li>
          </ul>
        </div>
      </div>
      <p className="font-semibold text-slate-800">The device itself may remain outside the body, but the material it carries eventually reaches the patient.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Database className="w-6 h-6 text-emerald-500" /> 7.4 What Does "Storing" Mean?</h3>
      <p>Some devices do not carry fluids. Instead, they keep them safely until they are needed. This is called <strong>storing.</strong></p>

      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Everyday Example: Water Bottle</h5>
          <p className="text-sm text-slate-600 mb-2">Imagine storing drinking water in a clean bottle.</p>
          <ul className="text-sm m-0 pl-4 space-y-1">
             <li>If the bottle is clean, the water remains safe.</li>
             <li>If the bottle is contaminated, the water also becomes contaminated.</li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Medical Examples</h5>
          <ul className="text-sm m-0 pl-4 mb-3 space-y-1">
             <li>Blood storage bags</li>
             <li>Plasma storage containers</li>
             <li>Medical reservoirs</li>
             <li>Fluid collection reservoirs intended for later administration</li>
             <li>Storage containers used in transfusion systems</li>
          </ul>
        </div>
      </div>
      <p className="font-semibold text-slate-800">The container itself may never enter the patient. However, what it contains eventually may.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.5 Why Does Rule 2 Exist?</h3>
      <p>Imagine two devices.</p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device A: Wheelchair</h5>
          <p className="text-sm font-medium mb-1">Purpose:</p>
          <p className="text-sm text-slate-600 mb-3">Transport patient.</p>
          <p className="text-sm font-medium mb-1">Failure consequence:</p>
          <p className="text-sm text-slate-600 mb-0">Failure may cause a fall.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device B: Blood administration set</h5>
          <p className="text-sm font-medium mb-1">Purpose:</p>
          <p className="text-sm text-slate-600 mb-3">Carry blood from a blood bag to the patient's vein.</p>
          <p className="text-sm font-medium mb-1">Failure consequence:</p>
          <p className="text-sm text-slate-600 mb-0">Failure may result in contamination, air entering the line, interruption of transfusion, or delivery problems.</p>
        </div>
      </div>
      <p>Although neither device enters the body, the second device has a much closer relationship with the patient's internal environment. That is why Rule 2 exists.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.6 Think About a Drinking Straw</h3>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6 text-sm text-amber-900">
        <p className="m-0 mb-2">Imagine drinking juice through a straw. The straw remains outside your body. The juice passes through the straw.</p>
        <p className="m-0 mb-2">Now imagine the straw contains dirt, bacteria, chemicals, or pieces of plastic. Would you still drink from it? Probably not.</p>
        <p className="m-0 font-bold">The straw has become unsafe, even though it never entered your body. Medical tubing works exactly the same way.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Droplet className="w-6 h-6 text-red-500" /> 7.7 Why Is Blood So Special?</h3>
      <p>Blood is one of the most important tissues in the human body. It carries Oxygen, Nutrients, Hormones, Immune cells, and Waste products.</p>
      <p>If blood becomes contaminated, the consequences can be severe. Therefore, any medical device intended to channel or store blood requires careful regulatory consideration.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.8 Body Liquids Are Also Important</h3>
      <p>Rule 2 is not limited to blood. It also applies to many devices intended to channel or store other body liquids or medical liquids.</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
         <li>Saline</li>
         <li>Nutritional fluids</li>
         <li>Intravenous medicines</li>
         <li>Irrigation solutions</li>
         <li>Dialysis fluids</li>
         <li>Certain therapeutic liquids</li>
      </ul>
      <p className="font-semibold text-blue-800">The important point is not the exact liquid. The important point is the device is intended to safely transport or store something that will eventually be introduced into the patient's body.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HelpCircle className="w-6 h-6 text-slate-500" /> 7.9 Does Every Tube Belong to Rule 2?</h3>
      <p><strong>No.</strong> This is another common misunderstanding. Many tubes exist.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Garden hose, Vacuum cleaner hose, Air conditioner pipe. These are obviously not medical devices.</p></div>
      <p>Even among medical devices, classification depends on:</p>
      <ul className="mb-4">
        <li>intended use,</li>
        <li>what the tube carries,</li>
        <li>how it is used,</li>
        <li>whether it connects to another medical device,</li>
        <li>whether the material eventually reaches the patient.</li>
      </ul>
      <p className="font-bold text-slate-800 bg-slate-50 py-2 px-4 rounded border border-slate-200">Always remember: the intended medical purpose determines whether Rule 2 applies.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.10 Real-Life Hospital Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: IV Administration Set</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Carry medicine from an IV bottle to the patient. The tubing stays outside. The medicine reaches the bloodstream.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 2 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Blood Administration Set</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Carry blood safely. If contaminated, serious harm may occur.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 2 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Blood Storage Bag</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Store donated blood safely until transfusion. The bag remains outside the patient. The blood later enters another patient.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 2 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: Medical Reservoir</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Temporarily store sterile fluid before administration. Again, the reservoir remains outside, but the contents later reach the patient.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 2 concept.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.11 Special Cases</h3>
      <p>Now let's discuss devices that confuse many beginners.</p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Syringe</h5>
          <p className="text-sm mb-2 text-slate-600">Many people immediately ask "Is a syringe Rule 2?" The answer is <strong>Not always.</strong></p>
          <p className="text-sm mb-2 text-slate-600">Why? A syringe has several components: Barrel, Plunger, Needle (if attached). The intended use, configuration, and applicable classification rules must all be considered.</p>
          <p className="text-sm font-medium text-slate-800 m-0">This is why classification is based on the complete device and intended purpose, not merely on the product name.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Infusion Pump</h5>
          <p className="text-sm mb-2 text-slate-600">The pump uses electricity. The tubing channels medicine. The pump controls flow.</p>
          <p className="text-sm mb-2 text-slate-600">Different components may be evaluated under different considerations depending on the intended use and the applicable classification rules.</p>
          <p className="text-sm font-medium text-slate-800 m-0">This illustrates why combination systems require careful regulatory analysis.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 7.12 Common Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "If the device stays outside the body, it is automatically low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. It depends on its function.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "The tubing doesn't matter because only the catheter enters the body."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. Everything passing through the tubing eventually reaches the patient.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Only blood is important."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. Many different medical liquids, gases, and body fluids require safe transport and storage.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Rule 2 is only about plastic tubes."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. Rule 2 also includes storage devices intended for the eventual administration or introduction of substances into the body.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 7.13 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Does it enter the body?"]
  N2 --> N3
  N3 -->|YES| N4["See Invasive Rules"]
  N5["↓"]
  N3 -->|NO| N5
  N6["Is it intended to channel or store blood, body liquids, cells, tissues, medical liquids, or gases for eventual administration or introduction into the body?"]
  N5 --> N6
  N6 -->|YES| N7{"Rule 2: Is it connected to an active medical device in Class B or higher, or intended for storing blood/tissues?"}
  N7 -->|YES| N7A["Rule 2 (Class B)"]
  N7 -->|NO| N7B["Rule 2 (Class A)"]
  N6 -->|NO| N8["Consider Rule 1 (Class A), Rule 3 , Rule 4 , or later rules as appropriate."]
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 7.14 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a railway track. Passengers travel on the train, not on the track. But if the railway track is damaged, the passengers are still in danger. Medical tubing works in the same way. The tubing itself never enters the patient. But what travels through it eventually does.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">"The device stays outside. The substance reaches inside."</p>
        <p className="text-xs text-amber-700 m-0 mt-2">That single sentence explains the logic behind Rule 2.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">7.15 Mini Practice Exercise</h3>
      <p>Which of the following generally represent the Rule 2 concept?</p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 2 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">IV administration set</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Channels medicine to the patient</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood administration set</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Channels blood for transfusion</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood storage bag</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Stores blood before transfusion</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Fluid reservoir</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Stores sterile fluid before administration</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Wheelchair</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">External support only</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Walking stick</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">External mobility aid</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Burn dressing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Contacts injured skin (consider Rule 4)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Dialysis filter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">Modifies blood (Rule 3 concept)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should understand:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 2 applies to certain non-invasive devices that <strong>channel or store</strong> substances intended to be administered or introduced into the body.</li>
          <li>These devices may never enter the patient, yet they play a critical role in patient safety.</li>
          <li>Their risk comes from <strong>what they carry or store</strong>, not from physical contact with the body.</li>
          <li>Always ask:
             <ul className="mt-2 mb-0 space-y-1">
                <li>What is the intended use?</li>
                <li>What substance does the device carry or store?</li>
                <li>Will that substance eventually enter the patient?</li>
             </ul>
          </li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 8, we will study <strong>Rule 3</strong>, one of the most misunderstood rules in medical device classification.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">You will learn why devices such as Dialysis filters, Blood warmers, Blood oxygenators, Plasma separators, and Leukocyte removal filters can remain completely outside the body, yet still be classified differently because they <strong>modify</strong> blood or other substances before those substances return to—or are administered to—the patient.</p>
           <p className="text-sm text-slate-300 m-0">This chapter will introduce an important regulatory concept: a device does not have to enter the body to have a profound effect on the body's internal environment.</p>
        </div>
      </div>

    </div>
  );
}
