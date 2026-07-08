import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, DoorOpen, Clock, Heart, HeartPulse, Brain, ShieldAlert, Zap, AlertCircle, GitBranch, Lightbulb, Check, X } from 'lucide-react';

export default function Chapter14() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 8 – Implantable Medical Devices and Surgically Invasive Medical Devices Intended for Long-Term Use</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Becomes Part of the Patient"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 8 covers.</li>
          <li>Understand the meaning of long-term use.</li>
          <li>Understand why implantable devices are considered higher risk.</li>
          <li>Learn why the body reacts differently to long-term implants.</li>
          <li>Understand the important exceptions in Rule 8.</li>
          <li>Learn how regulators evaluate implants.</li>
          <li>Understand combination implantable devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><DoorOpen className="w-6 h-6 text-amber-600" /> 14.1 Imagine Replacing a Broken Door</h3>
      <p>Imagine your house has a broken front door. There are two options.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Option 1</h5>
          <p className="text-sm text-slate-600 mb-0">A carpenter temporarily holds the door in place while repairing it. After one hour, he removes the support.</p>
          <p className="text-sm font-semibold text-indigo-700 mt-2 mb-0">This is similar to a transient surgical device.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Option 2</h5>
          <p className="text-sm text-slate-600 mb-0">The carpenter installs a brand-new permanent door. Now, the door becomes part of your house. You expect it to work for years.</p>
          <p className="text-sm font-semibold text-indigo-700 mt-2 mb-0">This is similar to an implant.</p>
        </div>
      </div>
      
      <p className="font-medium text-slate-800">Rule 8 is about devices that become part of the patient's body for a long period.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Clock className="w-6 h-6 text-indigo-500" /> 14.2 What Is a Long-Term Device?</h3>
      <p>Under the Medical Devices Rules, long-term use means continuous use for <strong>more than 30 days</strong>.</p>
      <p>Thirty days may not sound like a long time. But inside the human body, 30 days is enough for the body to begin adapting to the device.</p>
      <p className="font-semibold text-slate-800">Some devices remain inside months, years, decades, or even for the patient's entire lifetime.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.3 What Is an Implant?</h3>
      <p>An <strong>implant</strong> is a medical device placed inside the body during a surgical procedure and intended to remain there for an extended period.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Artificial hip joint, Artificial knee joint, Dental implant, Artificial heart valve, Pacemaker, Spinal fixation system, Cranial plate, Breast implant.</p></div>
      <p className="font-medium text-slate-800">Unlike surgical instruments, these devices are not removed after the operation. They become part of the patient's daily life.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.4 Why Are Implants Different?</h3>
      <p>Imagine buying a chair. If it breaks, you replace it.</p>
      <p>Now imagine replacing one of your own bones. Completely different situation.</p>
      <p>A bone implant cannot simply be exchanged at home. Another surgery is required. The surgeon must reopen the body, remove the old implant, and insert a new one.</p>
      <p className="font-semibold text-rose-700">Every additional operation increases risk. That is one reason implantable devices receive greater regulatory scrutiny.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.5 The Body Does Not Ignore an Implant</h3>
      <p>Many beginners think, <em>"Once the implant is inside, the body forgets about it."</em></p>
      <p>Actually, the opposite is true. The body immediately begins interacting with the implant. It asks, "What is this object?"</p>
      <p>Then several biological processes begin. These may include:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>healing,</li>
        <li>tissue attachment,</li>
        <li>inflammation,</li>
        <li>scar formation,</li>
        <li>immune response.</li>
      </ul>
      <p className="font-bold text-slate-800 bg-slate-50 p-4 rounded border border-slate-200">A well-designed implant should work with the body, not against it.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.6 Everyday Analogy</h3>
      <p>Imagine getting a small splinter in your finger. Your body quickly reacts. The area may become: red, swollen, painful.</p>
      <p>Now imagine a carefully designed titanium hip implant. Although it is much larger, it is made from materials chosen because the body can generally tolerate them.</p>
      <p className="font-medium text-slate-800">This is why material selection is one of the most important parts of implant design.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.7 Why Long-Term Devices Require More Evidence</h3>
      <p>Suppose a manufacturer develops a new implant. Would you be comfortable if it had only been tested for one week? Probably not.</p>
      <p>A hip implant may be expected to function for 10, 15, or even 20 years.</p>
      <p className="font-semibold text-slate-800">Therefore, manufacturers must demonstrate that the device is likely to remain safe and perform as intended throughout its expected life.</p>
      <p>This is why long-term implants generally require extensive design verification, validation, biocompatibility assessment, mechanical testing, and clinical evidence.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.8 Common Implantable Devices</h3>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Orthopaedic</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Hip implants</li>
             <li>Knee implants</li>
             <li>Bone plates (long-term)</li>
             <li>Spinal rods & cages</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Cardiovascular</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Artificial heart valves</li>
             <li>Pacemakers</li>
             <li>Implantable cardioverter-defibrillators (ICDs)</li>
             <li>Vascular grafts</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Neurological</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Deep brain stimulation electrodes</li>
             <li>Spinal cord stimulators</li>
           </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
           <h5 className="font-bold text-slate-800 mt-0 mb-2">Dental & Reconstructive</h5>
           <ul className="text-sm m-0 space-y-1">
             <li>Dental implants & abutments</li>
             <li>Breast implants</li>
             <li>Facial reconstruction implants</li>
           </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.9 Why the Anatomical Location Matters</h3>
      <p>Imagine placing a screw in a wooden table. Now imagine placing a screw in the engine of an aircraft. Both are screws. But failure in the aircraft engine has much more serious consequences.</p>
      <p>The same principle applies to implants. An implant placed in: the finger, the hip, the heart, the brain, does not present the same level of clinical risk.</p>
      <p className="font-semibold text-blue-800">Regulators therefore consider where the device is intended to be used, not only what it is made of.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HeartPulse className="w-6 h-6 text-rose-500" /> 14.10 Important Exception – Heart and Central Circulatory System</h3>
      <p>Devices intended for the heart or the major blood vessels receive particularly close attention.</p>
      <p>Why? Because failure may immediately affect: circulation, oxygen delivery, survival.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Heart valves, Certain vascular implants.</p></div>
      <p className="font-bold text-rose-700">The consequences of failure are potentially catastrophic.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Brain className="w-6 h-6 text-purple-500" /> 14.11 Important Exception – Central Nervous System</h3>
      <p>Now imagine an implant intended for the brain or spinal cord.</p>
      <p>Even a small malfunction may result in: paralysis, loss of vision, loss of speech, seizures, permanent neurological injury.</p>
      <p className="font-bold text-purple-700">For this reason, devices intended for the central nervous system are subject to particularly rigorous evaluation.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.12 Devices Having a Biological Effect</h3>
      <p>Some implants do more than simply provide mechanical support. They actively interact with the body.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include devices designed to: encourage bone growth, support tissue regeneration, influence healing.</p></div>
      <p className="font-medium text-slate-800">Because these devices intentionally affect biological processes, their evaluation extends beyond mechanical performance.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.13 Absorbable Implants</h3>
      <p>Not every implant is permanent. Some implants are designed to disappear after completing their purpose.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include certain: absorbable fixation devices, absorbable sutures, absorbable tissue supports.</p></div>
      <p>Although the implant eventually disappears, important questions remain:</p>
      <ul className="mb-4">
        <li>How long does it remain?</li>
        <li>How does it break down?</li>
        <li>Are the breakdown products safe?</li>
        <li>Does it continue to support healing until it is no longer needed?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Zap className="w-6 h-6 text-amber-500" /> 14.14 Combination Implantable Devices</h3>
      <p>Modern implants often combine multiple technologies.</p>
      <p>Imagine an implant that contains: titanium framework, drug coating, antimicrobial surface, special ceramic coating, electronic sensor.</p>
      <p>Is it a metal implant? Yes. Is it also a drug-delivery system? Possibly. Does it contain electronics? Possibly.</p>
      <p className="font-semibold text-slate-800">This is called a combination medical device.</p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6">
        <h5 className="font-bold text-slate-800 mt-0 mb-3 text-lg">Real-Life Example – Drug-Eluting Coronary Stent</h5>
        <p className="text-sm text-slate-700 m-0 mb-3">This is one of the best examples. The device has: a metal stent, a polymer coating, a medicine that is slowly released after implantation.</p>
        <p className="text-sm text-slate-700 m-0 mb-3">Think of it like a sponge soaked with antiseptic. The sponge provides physical support, while the antiseptic is gradually released. Similarly, the stent keeps the artery open, while the medicine helps reduce the chance of the artery narrowing again.</p>
        <p className="text-sm font-semibold text-slate-800 m-0">Although it looks like one product, it combines several technologies. This is why combination implants require particularly careful regulatory assessment.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.15 Real-Life Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Hip Implant</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Replace a damaged hip joint. Long-term implant.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 8 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Artificial Heart Valve</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Replace a diseased heart valve. Implantable. Long-term.</p>
           <p className="text-sm font-bold text-rose-700 m-0">Higher regulatory attention.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Dental Implant</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Replace a missing tooth root. Long-term implant.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 8 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: Pacemaker</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Maintain heart rhythm. Implantable active medical device. Long-term use.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 5: Spinal Cage</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Support spinal fusion. Implanted for long-term use.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 8 concept.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 14.16 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "All implants stay inside forever."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Some implants are intentionally absorbable.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "If an implant is made of metal, it must be safe."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Safety depends on: material, design, intended use, manufacturing quality, interaction with the body.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Small implants are low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. A tiny heart valve component may be far more critical than a much larger external device.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Once implanted, nothing else matters."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Implants require ongoing monitoring, post-market surveillance, vigilance reporting, and, in some cases, long-term clinical follow-up.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 14.17 Decision Tree</h3>
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
  N6["Is continuous use intended for more than 30 days?"]
  N5 --> N6
  N6 -->|NO| N7["See Rules 6-7"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Is it implantable?"]
  N8 --> N9
  N10["↓"]
  N9 -->|NO| N10
  N9 -->|YES| N10
  N11["Does it contact the heart, major blood vessels, or central nervous system?"]
  N10 --> N11
  N12["OR"]
  N11 --> N12
  N13["Does it have a biological effect?"]
  N12 --> N13
  N14["OR"]
  N13 --> N14
  N15["Is it absorbed by the body?"]
  N14 --> N15
  N16["OR"]
  N15 --> N16
  N17["Does it incorporate a medicinal substance?"]
  N16 --> N17
  N18["↓"]
  N17 --> N18
  N19{"Rule 8: Is it an active implantable device, used in direct contact with the heart/CNS, or life-supporting?"}
  N19 -->|YES| N19A["Rule 8 (Class D)"]
  N19 -->|NO| N19B["Rule 8 (Class C)"]
  N18 --> N19
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 14.18 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine building a house.</p>
        <p className="text-sm text-amber-800 m-0 mb-2">A ladder is used during construction and then removed. That is like a transient surgical device.</p>
        <p className="text-sm text-amber-800 m-0 mb-2">The foundation remains for decades. That is like an implant. The foundation must be stronger, tested more carefully, and expected to last much longer.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Rule 8 follows the same principle. "The longer a device becomes part of the body, the greater the confidence we must have in its long-term safety and performance."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">14.19 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 8 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term implant</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Knee replacement</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term implant</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Dental implant</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term implant</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Artificial heart valve</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term implant with critical anatomical location</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Pacemaker</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term active implant</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Spinal cage</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Long-term spinal implant</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical forceps</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Transient surgical instrument (Rule 6 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical drain</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Short-term surgically invasive device (Rule 7 concept)</td>
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
          <li>Rule 8 applies to <strong>implantable devices and surgically invasive devices intended for long-term use</strong>.</li>
          <li>Long-term use means continuous use for <strong>more than 30 days</strong>.</li>
          <li>Implants become part of the patient's body and therefore require extensive evidence of safety and performance.</li>
          <li>The anatomical location, duration of use, biological interaction, absorbability, and combination technologies all influence regulatory assessment.</li>
          <li>Always remember that an implant is not just a product—it becomes part of a person's body, and that is why the regulatory expectations are among the highest in the Medical Devices Rules, 2017.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Part</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">With Rule 8 complete, we have finished the classification rules for non-IVD medical devices up to the surgically invasive and implantable categories.</p>
           <p className="text-sm text-slate-300 m-0">The next section of the handbook will cover <strong>Active Medical Devices (Rules 9–12)</strong>, where the focus shifts from where the device is placed to what the device does using electrical or other external energy. We will begin by explaining what "active" really means in plain language before studying each rule individually.</p>
        </div>
      </div>

    </div>
  );
}
