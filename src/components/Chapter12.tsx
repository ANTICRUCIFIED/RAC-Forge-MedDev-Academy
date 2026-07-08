import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Scissors, Zap, AlertCircle, GitBranch, Lightbulb, Clock, Activity, ShieldAlert } from 'lucide-react';

export default function Chapter12() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 6 – Surgically Invasive Medical Devices Intended for Transient Use</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Enters Through Surgery, But It Does Not Stay There for Long."
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Rule 6 covers.</li>
          <li>Understand the meaning of transient surgical use.</li>
          <li>Learn why surgery itself increases risk.</li>
          <li>Understand why reusable surgical instruments are treated differently.</li>
          <li>Understand the important exceptions in Rule 6.</li>
          <li>Learn why some transient surgical devices remain lower class while others move to higher classes.</li>
          <li>Apply Rule 6 using real-life examples.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.1 What Changes in Rule 6?</h3>
      <p>Until now, we studied devices that entered the body through natural openings such as the mouth, nose, or urethra.</p>
      <p>Rule 6 introduces a different situation.</p>
      <p>The device does not enter through a natural opening. Instead, a surgeon intentionally creates an opening by making an incision or another controlled surgical access.</p>
      <p className="font-semibold text-slate-800">This changes the level of risk.</p>
      <p>Why? Because surgery itself carries risks such as: Bleeding, Infection, Injury to nearby organs, Damage to blood vessels, Damage to nerves, Anaesthesia-related complications.</p>
      <p className="font-medium text-blue-800">The medical device now becomes part of a surgical procedure.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Clock className="w-6 h-6 text-amber-500" /> 12.2 What Does "Transient Use" Mean?</h3>
      <p>The term transient use has already been introduced in Chapter 10.</p>
      <p>It means the device is intended for continuous use for <strong>less than 60 minutes</strong>.</p>
      <p>Think of it like borrowing a tool. You use it briefly, complete the work, and then remove it.</p>
      <p>Many surgical devices are intended to work in exactly this way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.3 Everyday Analogy</h3>
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm text-slate-700 m-0 mb-3">Imagine a mechanic repairing your car. During the repair, the mechanic uses: a screwdriver, a wrench, pliers.</p>
        <p className="text-sm text-slate-700 m-0 mb-3">These tools enter the engine compartment, help complete the repair, and are then removed. They do not remain inside the car.</p>
        <p className="text-sm font-semibold text-slate-800 m-0">Transient surgical devices work in a similar manner. They are introduced into the body, perform a specific task, and are removed before the procedure is completed.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Scissors className="w-6 h-6 text-emerald-500" /> 12.4 What Is a Surgically Invasive Device?</h3>
      <p>A surgically invasive device enters the body through a surgical incision or another surgically created opening.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include:</p></div>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>Surgical forceps</li>
        <li>Surgical scissors</li>
        <li>Bone chisels</li>
        <li>Curettes</li>
        <li>Trocars</li>
        <li>Temporary surgical retractors</li>
      </ul>
      <p className="font-medium text-slate-800">Unlike Rule 5 devices, these devices require surgery for entry.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.5 Why Doesn't Every Surgical Device Have the Same Classification?</h3>
      <p>Imagine two devices used in the same operation.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device A</h5>
          <p className="text-sm text-slate-600 mb-0">A reusable surgical forceps. The surgeon uses it for a few minutes. It is then cleaned, sterilized, and reused for another patient.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Device B</h5>
          <p className="text-sm text-slate-600 mb-0">A temporary surgical electrode that delivers electrical energy directly to tissue. It is also used for a short period. However, it interacts with tissue in a much more complex way.</p>
        </div>
      </div>
      
      <p>Both devices are used during surgery. Both are transient. Yet, their potential risks are very different.</p>
      <p className="font-medium text-blue-800 bg-indigo-50 p-4 rounded-lg border border-indigo-200">This is why Rule 6 contains several exceptions.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.6 Reusable Surgical Instruments</h3>
      <p>One of the most important concepts in Rule 6 is the reusable surgical instrument.</p>
      <p>These are instruments that:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>are introduced into the body during surgery,</li>
        <li>perform a mechanical function,</li>
        <li>are removed before the procedure ends,</li>
        <li>are cleaned,</li>
        <li>sterilized,</li>
        <li>and used again.</li>
      </ul>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Surgical scissors, Needle holders, Forceps, Bone rongeurs, Retractors, Curettes.</p></div>
      <p className="font-semibold text-slate-800">Because they are not intended to remain in the patient and generally perform mechanical functions, the regulatory approach to these instruments differs from that for implants or devices with more complex biological or energetic interactions.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.7 Why Are Reusable Instruments Treated Differently?</h3>
      <p>Imagine two kitchen knives. Knife A is used, washed, and stored. Knife B is left inside the food permanently. Clearly, the risks are different.</p>
      <p>A reusable surgical instrument is not intended to remain inside the patient. It performs its job, is removed, and undergoes reprocessing before being used again.</p>
      <p className="font-medium text-rose-700">However, this also creates another responsibility: The instrument must be properly cleaned, disinfected, inspected, and sterilized before reuse. Improper reprocessing can expose future patients to infection.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Zap className="w-6 h-6 text-indigo-500" /> 12.8 Important Exception – Devices Connected to an Active Medical Device</h3>
      <p>Now let's discuss an important exception. Some surgically invasive devices are connected to an active medical device.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Electrosurgical electrodes, Surgical probes connected to energy generators, Certain laparoscopic accessories used with powered systems.</p></div>
      <p>Although these devices are transient, they interact with energy delivered by another device. This additional function may affect their regulatory classification because the consequences of failure can be more significant than those of a purely mechanical instrument.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-amber-500" /> 12.9 Important Exception – Devices Intended to Supply Ionizing Radiation</h3>
      <p>Some transient surgical devices are designed to deliver or assist in delivering ionizing radiation during treatment.</p>
      <p>Think about cancer treatment. Radiation can destroy tumour cells, but it can also damage healthy tissue if not properly controlled.</p>
      <p className="font-medium text-slate-800">Therefore, devices involved in the delivery of ionizing radiation receive greater regulatory attention.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-emerald-500" /> 12.10 Important Exception – Devices Having a Biological Effect</h3>
      <p>Some devices do more than simply hold or cut tissue. They actively interact with the body's biological processes.</p>
      <p>For example, a device may contain materials that influence healing or interact with surrounding tissues.</p>
      <p className="font-medium text-slate-800">Because the device affects the body's biological response, its potential risks are different from those of a simple surgical instrument.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.11 Important Exception – Devices That Are Absorbed by the Body</h3>
      <p>Some surgically invasive devices are designed to be gradually absorbed after fulfilling their purpose.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include certain absorbable sutures or absorbable fixation materials.</p></div>
      <p>Although the device may disappear over time, its interaction with the body must be carefully understood. Questions regulators ask include:</p>
      <ul className="mb-4">
        <li>How quickly is it absorbed?</li>
        <li>What substances are released?</li>
        <li>Are the breakdown products safe?</li>
        <li>Does the device continue to perform its intended function until absorption?</li>
      </ul>
      <p className="font-medium text-slate-800">These questions explain why such devices receive additional regulatory consideration.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.12 Why Rule 6 Contains So Many Exceptions</h3>
      <p>Many students wonder why Rule 6 seems more complicated than earlier rules. The answer is simple.</p>
      <p>During surgery, a device may:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>cut tissue,</li>
        <li>hold tissue,</li>
        <li>deliver electricity,</li>
        <li>deliver radiation,</li>
        <li>support tissue,</li>
        <li>interact biologically,</li>
        <li>be absorbed,</li>
        <li>contact critical organs.</li>
      </ul>
      <p className="font-semibold text-blue-800">Not all transient surgical devices present the same risk. Therefore, the rule distinguishes between different situations rather than treating every surgical instrument alike.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">12.13 Real-Life Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Reusable Surgical Forceps</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Hold tissue during surgery. Removed before surgery ends. Reusable after sterilization.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 6 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Surgical Scissors</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Cut tissue. Removed after use.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 6 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Electrosurgical Electrode</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Cut or coagulate tissue using electrical energy. Transient use, but connected to an active device.</p>
           <p className="text-sm font-bold text-rose-700 m-0">Special consideration under Rule 6.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: Trocar</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Provide temporary access during minimally invasive surgery. Removed after the procedure.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 6 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 5: Absorbable Surgical Material</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Provide temporary support and then be absorbed by the body.</p>
           <p className="text-sm font-bold text-rose-700 m-0">Special consideration because of its interaction with the body.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 12.14 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "All surgical instruments have the same classification."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Different functions and interactions with the body can lead to different classifications.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Reusable means low quality."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Reusable instruments are designed for repeated use after validated cleaning and sterilization.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "If the device is removed after surgery, it must always be low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. A transient device delivering electrical energy or radiation may present higher risks than a purely mechanical instrument.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Mechanical and biological devices are regulated in the same way."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Devices that interact biologically or are absorbed by the body require additional regulatory assessment.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 12.15 Decision Tree</h3>
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
  N6["Is continuous use less than 60 minutes?"]
  N5 --> N6
  N6 -->|NO| N7["See Rules 7, 8"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Is it a reusable surgical instrument?"]
  N8 --> N9
  N10["OR"]
  N9 --> N10
  N11["Does it deliver energy?"]
  N10 --> N11
  N12["OR"]
  N11 --> N12
  N13["Does it have a biological effect?"]
  N12 --> N13
  N14["OR"]
  N13 --> N14
  N15["Is it absorbed by the body?"]
  N14 --> N15
  N16["↓"]
  N15 --> N16
  N17{"Rule 6: What type of device is it?"}
  N17 -->|Reusable surgical instrument| N17A["Rule 6 (Class A)"]
  N17 -->|Direct contact with CNS/heart or supplies energy| N17B["Rule 6 (Class C)"]
  N17 -->|Other transient use| N17C["Rule 6 (Class B)"]
  N16 --> N17
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 12.16 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Think about workers repairing a bridge. Some workers simply use hand tools and leave. Others use heavy electrical equipment. Others inject repair materials into the structure.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">All are working on the same bridge, but their activities carry different levels of risk.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Rule 6 follows the same principle. It is not just the surgical entry that matters. It is what the device does during surgery.</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 6 applies to <strong>surgically invasive devices intended for transient use</strong>.</li>
          <li>Surgery itself introduces additional risk compared with natural body openings.</li>
          <li>Reusable surgical instruments are an important category within this rule.</li>
          <li>Some transient surgical devices receive greater regulatory attention because they:
            <ul className="mt-2 mb-0 space-y-1">
               <li>connect to active medical devices,</li>
               <li>deliver ionizing radiation,</li>
               <li>have a biological effect,</li>
               <li>or are absorbed by the body.</li>
            </ul>
          </li>
          <li>Always evaluate the intended use, duration, and special characteristics of the device before determining the appropriate classification.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 13, we will study <strong>Rule 7</strong>, which covers surgically invasive devices intended for <strong>short-term use</strong> (more than 60 minutes but not more than 30 days).</p>
           <p className="text-sm text-slate-300 m-0 mb-2">This chapter introduces another important idea: The longer a surgically invasive device remains inside the body, the greater the opportunity for infection, tissue reaction, mechanical failure, and other complications.</p>
           <p className="text-sm font-bold text-blue-900 m-0">We will explore why a temporary bone fixation device, a surgical drain, and a temporary vascular access device may require different regulatory considerations even though all are intended for short-term use.</p>
        </div>
      </div>

    </div>
  );
}
