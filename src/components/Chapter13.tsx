import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Clock, Activity, HeartPulse, Brain, AlertCircle, GitBranch, Lightbulb, Check, X, ShieldAlert } from 'lucide-react';

export default function Chapter13() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 7 – Surgically Invasive Medical Devices Intended for Short-Term Use</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Stays Inside the Body Long Enough for New Risks to Develop"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 7 covers.</li>
          <li>Understand the meaning of short-term use.</li>
          <li>Learn why the risk increases after 60 minutes.</li>
          <li>Understand why temporary implants are regulated differently from transient surgical devices.</li>
          <li>Understand the important exceptions in Rule 7.</li>
          <li>Learn how regulators decide between Class B, C and higher-risk situations under this rule.</li>
          <li>Apply Rule 7 using real-life examples.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Clock className="w-6 h-6 text-amber-500" /> 13.1 From Minutes to Days – Why Does It Matter?</h3>
      <p>Imagine two patients undergoing surgery.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Patient A</h5>
          <p className="text-sm text-slate-600 mb-0">A surgeon inserts a surgical instrument. The instrument is removed after 20 minutes. The operation is completed.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Patient B</h5>
          <p className="text-sm text-slate-600 mb-0">Another patient receives a surgical drain. Instead of being removed immediately, the drain remains inside the body for seven days.</p>
        </div>
      </div>
      
      <p>Although both devices entered through surgery, their situations are completely different.</p>
      <p className="font-medium text-slate-800">The second device remains inside the body long enough for complications to develop. This is the idea behind Rule 7.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.2 What Does "Short-Term Use" Mean?</h3>
      <p>Under the Medical Devices Rules, short-term use means continuous use for <strong>more than 60 minutes but not more than 30 days</strong>.</p>
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6 text-sm text-slate-700">
        <p className="m-0 mb-2">Think of it like staying in a hotel. Staying for one hour is very different from staying for three weeks.</p>
        <p className="m-0 font-medium">The longer you stay, the more interaction you have with the environment. The same principle applies inside the human body.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.3 Why Does Risk Increase With Time?</h3>
      <p>Imagine placing a metal spoon in a glass of water. Leave it there for five minutes. Nothing much happens. Now leave it there for three weeks. You may begin to notice changes such as stains or deposits.</p>
      <p>The human body is far more complex than a glass of water. Inside the body, a device is exposed to:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>blood,</li>
        <li>body fluids,</li>
        <li>enzymes,</li>
        <li>immune cells,</li>
        <li>movement,</li>
        <li>pressure,</li>
        <li>temperature changes.</li>
      </ul>
      <p className="font-medium text-rose-700">The longer the device remains, the more opportunities there are for problems to develop.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-indigo-500" /> 13.4 What Happens Inside the Body?</h3>
      <p>When a surgically invasive device remains inside the body for several days, the body does not ignore it. Instead, it begins to respond.</p>
      <p>Possible responses include:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>inflammation,</li>
        <li>swelling,</li>
        <li>pain,</li>
        <li>tissue healing around the device,</li>
        <li>infection,</li>
        <li>formation of scar tissue.</li>
      </ul>
      <p className="font-semibold text-slate-800">These responses are natural, but they also explain why prolonged use requires closer regulatory evaluation.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.5 Examples of Short-Term Surgically Invasive Devices</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Surgical drains, Temporary bone fixation devices, Temporary vascular access devices, Temporary orthopaedic fixation pins, Certain temporary surgical spacers.</p></div>
      <p className="font-medium text-slate-800">Each of these devices remains inside the body for a limited period, but longer than transient use.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.6 Why Isn't Every Temporary Implant the Same?</h3>
      <p>Imagine two devices.</p>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device A</h5>
          <p className="text-sm text-slate-600 mb-0">A temporary surgical drain. Its purpose is to remove excess fluid. It is removed after five days.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device B</h5>
          <p className="text-sm text-slate-600 mb-0">A temporary fixation plate holding fractured bone. It may remain for several weeks.</p>
        </div>
      </div>
      <p>Although both are temporary, their intended functions, mechanical stresses, and interaction with tissues are completely different. Therefore, their regulatory evaluation may also differ.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HeartPulse className="w-6 h-6 text-rose-500" /> 13.7 Important Exception – Contact With the Heart</h3>
      <p>Now we reach one of the most important concepts.</p>
      <p>Imagine placing a temporary device inside a muscle. Now imagine placing another device inside the heart.</p>
      <p>Are both situations equally risky? <strong>Of course not.</strong></p>
      <p>The heart beats continuously. Even a small problem may have serious consequences.</p>
      <p className="font-medium text-rose-700 bg-rose-50 p-4 rounded-lg border border-rose-200">Therefore, devices intended for the heart or major blood vessels receive greater regulatory attention.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Brain className="w-6 h-6 text-purple-500" /> 13.8 Important Exception – Contact With the Central Nervous System</h3>
      <p>The brain and spinal cord control almost every function of the human body.</p>
      <p>Imagine a temporary surgical device used near the brain. A small error may result in:</p>
      <ul className="mb-4">
        <li>paralysis,</li>
        <li>permanent disability,</li>
        <li>loss of speech,</li>
        <li>loss of memory,</li>
        <li>death.</li>
      </ul>
      <p className="font-medium text-purple-800 bg-purple-50 p-4 rounded-lg border border-purple-200">This explains why devices used in these areas are evaluated much more carefully.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-emerald-500" /> 13.9 Devices Having Biological Effects</h3>
      <p>Some devices do more than simply support tissue. They may:</p>
      <ul className="mb-4">
        <li>encourage tissue growth,</li>
        <li>influence healing,</li>
        <li>interact chemically with surrounding tissues,</li>
        <li>release biologically active materials.</li>
      </ul>
      <p className="font-semibold text-slate-800">These additional functions increase the complexity of the regulatory assessment.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.10 Devices That Are Absorbed</h3>
      <p>Some temporary devices disappear after performing their function.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: absorbable fixation materials, absorbable haemostatic materials, absorbable surgical supports.</p></div>
      <p>Although they eventually disappear, regulators must understand:</p>
      <ul className="mb-4">
        <li>how they break down,</li>
        <li>what they release,</li>
        <li>whether the body tolerates the breakdown products,</li>
        <li>whether they remain effective until no longer needed.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-amber-500" /> 13.11 Devices Delivering Medicines</h3>
      <p>Some surgically invasive devices also release medicines.</p>
      <p>For example, a temporary implant may slowly release an antimicrobial or another medicinal substance while it remains in the body.</p>
      <p>Now the regulator must evaluate: the device, the medicinal component, how both work together, and the overall intended purpose.</p>
      <p className="font-medium text-slate-800">This is why combination devices require careful assessment.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.12 Real-Life Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Surgical Drain</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Remove excess fluid after surgery. Remains for several days.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 7 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Temporary Bone Fixation Pin</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Stabilize a fracture during healing. Removed after several weeks.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 7 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Temporary Vascular Access Device</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Provide access for treatment over several days.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 7 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: Temporary Surgical Spacer</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Maintain space during treatment. Removed later.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 7 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 5: Absorbable Haemostatic Device</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Control bleeding during surgery. Gradually absorbed.</p>
           <p className="text-sm font-bold text-rose-700 m-0">Special consideration under Rule 7.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.13 Combination Devices</h3>
      <p>Modern surgical devices often combine several technologies.</p>
      <p>Imagine a temporary implant that includes: metal framework, polymer coating, antimicrobial medicine, radiopaque marker, special surface treatment.</p>
      <p>It looks like one device, but several technologies work together. Regulators evaluate: the intended use, the interaction between components, and the overall risk.</p>
      <p className="font-bold text-slate-800">This is why classification cannot be based on appearance alone.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 13.14 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "If the device will eventually be removed, it is always low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The duration of use and the anatomical location remain important.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Temporary means harmless."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. A temporary device may remain inside the body long enough to cause infection or tissue damage if it fails.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "All drains belong to the same class."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The intended use, placement, and specific design determine the applicable rule.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Absorbable devices are safer because they disappear."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Their breakdown process must also be shown to be safe and effective.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 13.15 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Does it enter through surgery?"]
  N2 --> N3
  N3 -->|NO| N4["See Rules 1-5"]
  N5["↓"]
  N3 -->|YES| N5
  N6["Is continuous use more than 60 minutes but not more than 30 days?"]
  N5 --> N6
  N6 -->|NO| N7["See Rules 6, 8"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Does it contact the heart, major blood vessels, or central nervous system?"]
  N8 --> N9
  N10["OR"]
  N9 --> N10
  N11["Does it have a biological effect?"]
  N10 --> N11
  N12["OR"]
  N11 --> N12
  N13["Is it absorbed by the body?"]
  N12 --> N13
  N14["OR"]
  N13 --> N14
  N15["Does it incorporate or deliver a medicinal substance?"]
  N14 --> N15
  N16["↓"]
  N15 --> N16
  N17{"Rule 7: Does it administer medicines, undergo chemical change, or contact the CNS/heart?"}
  N17 -->|YES| N17A["Rule 7 (Class C)"]
  N17 -->|NO| N17B["Rule 7 (Class B)"]
  N16 --> N17
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 13.16 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine renting a furnished apartment.</p>
        <p className="text-sm text-amber-800 m-0 mb-2">Staying for one hour is very different from staying for one month. The longer you stay, the greater the chance of: wear and tear, maintenance issues, unexpected problems.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">The body behaves in a similar way. A surgically invasive device that remains inside for days or weeks has more opportunity to interact with tissues and cause complications than one removed immediately.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "More time inside the body means more opportunity for interaction—and more opportunity for risk."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">13.17 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 7 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical drain</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Surgically invasive, short-term use</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Temporary fixation pin</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Remains during healing, then removed</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Temporary vascular access device</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Short-term surgical use</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Temporary surgical spacer</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Remains for a limited period</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Reusable surgical forceps</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Removed immediately (Rule 6 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Long-term implant (Rule 8 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Urinary catheter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Body-orifice device (Rule 5 concept)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 7 applies to <strong>surgically invasive devices intended for short-term use</strong>.</li>
          <li>The increase in risk comes not only from surgery but also from the time the device remains inside the body.</li>
          <li>Devices intended for the heart, major blood vessels, or central nervous system, or those with biological effects, absorbable materials, or medicinal components, require special regulatory attention.</li>
          <li>Classification always depends on the complete intended use, the anatomical location, the duration of use, and the special characteristics of the device.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 14, we will study <strong>Rule 8</strong>, which covers <strong>implantable devices and surgically invasive devices intended for long-term use</strong>.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">This is one of the most important rules in the entire Medical Devices Rules, 2017 because it applies to many high-risk devices such as: Artificial hip joints, Knee replacements, Pacemakers, Heart valves, Dental implants, Spinal implants.</p>
           <p className="text-sm font-bold text-blue-900 m-0">We'll explore why these devices are among the most heavily regulated medical devices and how their long-term interaction with the human body shapes their classification.</p>
        </div>
      </div>

    </div>
  );
}
