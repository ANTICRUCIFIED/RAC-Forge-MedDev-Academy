import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, HelpCircle, Shield, Check, X, GitBranch, Lightbulb, AlertCircle, ShieldCheck } from 'lucide-react';

export default function Chapter6() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 1 – Non-Invasive Medical Devices That Contact Intact Skin</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          "The Safest Group of Medical Devices"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 1 actually covers.</li>
          <li>Understand the meaning of intact skin.</li>
          <li>Learn why intact skin is important in medical device regulation.</li>
          <li>Understand why these devices are generally considered lower risk.</li>
          <li>Learn when Rule 1 does not apply.</li>
          <li>Classify common examples correctly.</li>
          <li>Understand the regulatory thinking behind Rule 1.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <HelpCircle className="w-6 h-6 text-indigo-500" /> 
        6.1 Before We Read Rule 1
      </h3>
      <p>Imagine a doctor asks you to classify a medical device. Before opening the rulebook, ask yourself three questions.</p>
      
      <div className="flex flex-col gap-3 my-6">
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-center justify-between">
           <span className="font-medium">Question 1: Does the device enter the body?</span>
           <span className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded">No</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-center justify-between">
           <span className="font-medium">Question 2: Does the device modify blood?</span>
           <span className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded">No</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex items-center justify-between">
           <span className="font-medium">Question 3: Does the device contact injured skin?</span>
           <span className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded">No</span>
        </div>
      </div>
      <p className="font-semibold text-blue-800">If all three answers are No, you should now think about Rule 1.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.2 What Is Rule 1 Trying to Achieve?</h3>
      <p>Rule 1 exists because many medical devices perform their function without entering the body and without disturbing the body's natural protective barrier.</p>
      <p>These devices usually:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>support,</li>
        <li>protect,</li>
        <li>position,</li>
        <li>or assist the patient.</li>
      </ul>
      <p>They are important. But they generally present less risk than devices that enter the body or interact directly with blood or internal organs.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.3 The Most Important Term in Rule 1</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl my-6 text-center shadow-sm">
        <h4 className="text-emerald-900 font-bold text-lg m-0 mb-2">Intact Skin</h4>
        <p className="text-emerald-800 m-0 text-sm">Everything in Rule 1 revolves around one simple concept. If you understand this, you understand most of Rule 1.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.4 What Is Intact Skin?</h3>
      <p>Imagine your skin. There are no cuts, no burns, no wounds, no infection, no surgical incision.</p>
      <p>Your skin is complete. Your skin is healthy. This is called <strong>Intact Skin.</strong></p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-slate-800 mb-2 mt-0">Everyday Example: House Wall</h4>
        <p className="text-sm text-slate-700 m-0 mb-3">Imagine the wall around your house. When the wall has no cracks, no holes, no damage, it protects your house.</p>
        <p className="text-sm text-slate-700 m-0 mb-3">Now imagine someone breaks a large hole in the wall. Suddenly, dust, water, animals, and thieves can enter.</p>
        <p className="text-sm font-semibold text-slate-800 m-0">Your skin works exactly the same way. Healthy skin is your body's first security guard.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2">
        <Shield className="w-6 h-6 text-emerald-600" />
        6.5 Why Is Skin So Important?
      </h3>
      <p>Many people think skin only covers the body. Actually, skin performs many important functions. It:</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-6">
        <li>keeps bacteria outside,</li>
        <li>prevents infection,</li>
        <li>prevents excessive loss of body fluids,</li>
        <li>protects muscles,</li>
        <li>protects blood vessels,</li>
        <li>protects nerves,</li>
        <li>protects internal organs.</li>
      </ul>
      <p className="font-semibold text-emerald-800 bg-emerald-50 py-2 px-4 rounded border border-emerald-200">
        Healthy skin is one of the body's strongest natural defence systems. That is why regulators treat devices contacting healthy skin differently from devices contacting damaged skin.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.6 Think About a Waterproof Jacket</h3>
      <p>Imagine wearing a waterproof raincoat. As long as the jacket has no holes, rain cannot enter. Now imagine someone cuts the jacket. Rain immediately enters.</p>
      <p>Your skin behaves similarly. Healthy skin protects you. Damaged skin allows bacteria and contaminants easier access.</p>
      <p><strong>That is why wound dressings are considered under a different rule.</strong></p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.7 What Kind of Devices Usually Fall Under Rule 1?</h3>
      <p>These devices generally support the body, protect the body, stabilize the body, assist movement, or position the patient, <strong>without entering the body or interacting with injured skin.</strong></p>
      
      <p className="font-medium mt-4">Examples include:</p>
      <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm my-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 m-0 text-sm">
          <li>Wheelchairs</li>
          <li>Walking frames</li>
          <li>Crutches</li>
          <li>Cervical collars</li>
          <li>External braces</li>
          <li>Hospital beds</li>
          <li>Patient positioning cushions</li>
          <li>Examination couches</li>
          <li>Arm supports</li>
          <li>Leg supports</li>
          <li>Transfer boards</li>
          <li>External splints</li>
          <li>Patient lifting slings</li>
          <li>Positioning wedges</li>
        </ul>
      </div>
      <p className="font-semibold text-blue-800">Notice something. All of them work outside the body.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.8 Why Are These Devices Generally Lower Risk?</h3>
      <p>Let's compare two devices.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device A: Hospital Bed</h5>
          <p className="text-sm font-medium mb-1">Purpose:</p>
          <p className="text-sm text-slate-600 mb-3">To provide comfort. To position the patient.</p>
          <p className="text-sm font-medium mb-1">Failure consequence:</p>
          <p className="text-sm text-slate-600 mb-0">If it develops a minor defect, the patient usually has time to move to another bed.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device B: Artificial Heart Valve</h5>
          <p className="text-sm font-medium mb-1">Purpose:</p>
          <p className="text-sm text-slate-600 mb-3">To replace a diseased heart valve.</p>
          <p className="text-sm font-medium mb-1">Failure consequence:</p>
          <p className="text-sm text-slate-600 mb-0">If it suddenly fails, the consequences may be life-threatening.</p>
        </div>
      </div>
      <p>Clearly, the two devices do not present the same level of risk. Rule 1 is intended for devices that generally do not expose the patient to the same level of internal biological risk.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.9 Does Rule 1 Mean the Device Is "Safe"?</h3>
      <p><strong>No.</strong> This is another common misunderstanding. Every medical device carries some level of risk.</p>
      <p>Even a wheelchair can cause injury if:</p>
      <ul className="mb-4">
        <li>brakes fail,</li>
        <li>wheels detach,</li>
        <li>the frame collapses,</li>
        <li>the patient falls.</li>
      </ul>
      <p>Therefore, Rule 1 does not mean "No risk." It means <strong>relatively lower regulatory risk</strong> compared with many other medical devices.</p>
      <p>Manufacturers must still ensure quality, safety, performance, proper labeling, and appropriate manufacturing controls, as required under the MDR 2017.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.10 A Hospital Story</h3>
      <p>Imagine entering an orthopaedic clinic. The doctor examines a patient with back pain. The patient receives:</p>
      <ul className="mb-4">
        <li>a lumbar support belt,</li>
        <li>a walking stick,</li>
        <li>a cervical collar.</li>
      </ul>
      <p>None of these devices enters the body. None of them breaks the skin. None of them comes into contact with blood. They simply support the patient externally.</p>
      <p className="font-medium text-slate-800">This is exactly the type of situation Rule 1 was designed for.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.11 Examples You See Every Day</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Walking Stick</h5>
             <p className="text-sm m-0 text-slate-600">Helps walking. Touches patient? Yes. Enters body? No.</p>
           </div>
           <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap text-center">Rule 1 type</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Wheelchair</h5>
             <p className="text-sm m-0 text-slate-600">Transportation. Touches patient? Yes. Enters body? No.</p>
           </div>
           <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap text-center">Rule 1 type</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Hospital Mattress</h5>
             <p className="text-sm m-0 text-slate-600">Supports patient. Never enters body.</p>
           </div>
           <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap text-center">Rule 1 type</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: External Knee Brace</h5>
             <p className="text-sm m-0 text-slate-600">Supports injured knee. Never enters body.</p>
           </div>
           <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap text-center">Rule 1 type</div>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
           <div>
             <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 5: Patient Transfer Board</h5>
             <p className="text-sm m-0 text-slate-600">Moves patient safely. Never enters body.</p>
           </div>
           <div className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded text-sm whitespace-nowrap text-center">Rule 1 type</div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.12 Devices That Look Similar but Belong to Other Rules</h3>
      <p>This is where many people become confused.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Wheelchair</h5>
          <p className="text-sm mb-2 text-slate-600">Supports patient.</p>
          <p className="text-sm font-bold text-green-700 m-0">Rule 1 type.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Blood Storage Bag</h5>
          <p className="text-sm mb-2 text-slate-600">Also remains outside the body. But it stores blood that will later be transfused into another patient.</p>
          <p className="text-sm font-bold text-red-700 m-0">Different purpose. Different rule.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">External Dressing</h5>
          <p className="text-sm mb-2 text-slate-600">Looks simple. But if intended for deep wounds or burns, the classification may be determined under the rule for devices contacting injured skin.</p>
          <p className="text-sm font-bold text-red-700 m-0">Different rule.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Dialysis Filter</h5>
          <p className="text-sm mb-2 text-slate-600">Never enters the body. Still, blood continuously passes through it.</p>
          <p className="text-sm font-bold text-red-700 m-0">Different rule.</p>
        </div>
      </div>
      <p className="font-semibold text-blue-800">Notice something important. All these devices remain outside the body. Yet, they are not all treated the same. The function of the device matters just as much as its location.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 6.13 Common Misconceptions</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Misconception 1: "Anything outside the body belongs to Rule 1."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Wrong.</strong> Many external devices belong to Rules 2, 3, or 4 because of what they do.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Misconception 2: "Rule 1 devices never cause harm."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Wrong.</strong> Any medical device can cause harm if poorly designed, manufactured, or used incorrectly.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Misconception 3: "Rule 1 devices do not require regulation."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Wrong.</strong> All regulated medical devices must comply with applicable legal requirements. The extent of regulatory control varies with risk.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Misconception 4: "If it touches the patient, it is invasive."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Wrong.</strong> Touching ≠ Entering.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 6.14 Decision Tree</h3>
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
  N6["Does it modify blood or body fluids?"]
  N5 --> N6
  N6 -->|YES| N7["See Rule 3 "]
  N8["↓"]
  N6 -->|NO| N8
  N9["Does it store or channel blood or body fluids for later administration?"]
  N8 --> N9
  N9 -->|YES| N10["See Rule 2 "]
  N11["↓"]
  N9 -->|NO| N11
  N12["Does it contact injured skin?"]
  N11 --> N12
  N12 -->|YES| N13["See Rule 4 "]
  N14["↓"]
  N12 -->|NO| N14
  N15["Does it simply contact intact skin or provide external support?"]
  N14 --> N15
  N15 -->|NO| N16["Check other specific rules"]
  N17["↓"]
  N15 -->|YES| N17
  N18["Think about Rule 1 (Class A)."]
  N17 --> N18
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 6.15 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine your front door. If the door remains closed, your home stays protected. Healthy skin works exactly the same way. As long as the body's natural barrier remains intact, the overall biological risk is usually lower.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">"Healthy skin protects the body. Devices that stay outside healthy skin are where Rule 1 begins."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">6.16 Practice Exercise</h3>
      <p>Can you identify which of these are generally consistent with Rule 1?</p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 1?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Wheelchair</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">External support only</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Walking frame</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">External mobility aid</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hospital bed</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">External patient support</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Cervical collar</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">External support</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Lumbar support belt</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">Contacts intact skin</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood administration set</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Channels blood; consider Rule 2</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood filter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Modifies blood; consider Rule 3</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Burn dressing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> Usually</td>
              <td className="border border-slate-200 px-4 py-2">Contacts injured skin; consider Rule 4</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Urinary catheter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Invasive device</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Implantable device</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of Rule 1, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 1 is the starting point for classifying many simple non-invasive devices.</li>
          <li>The key concept is <strong>intact skin</strong>.</li>
          <li>Healthy skin is a natural protective barrier.</li>
          <li>Devices that only contact intact skin or provide external support generally present lower biological risk than devices that enter the body.</li>
          <li>However, being non-invasive does not automatically mean Rule 1 applies. Always consider the device's intended use and whether another non-invasive rule is more appropriate.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Before We Move to Rule 2</h4>
           <p className="text-sm text-slate-300 m-0">Rule 2 surprises many beginners because it teaches an important lesson: <strong className="text-blue-400">A device can remain completely outside the body and still be medium or high risk.</strong></p>
           <p className="text-sm text-slate-300 m-0 mt-2">We will learn why blood bags, IV administration sets, tubing systems, reservoirs, and similar products are regulated differently, even though they never enter the patient's body themselves. That chapter is where the logic of the MDR classification system becomes much clearer.</p>
        </div>
      </div>

    </div>
  );
}
