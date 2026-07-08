import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, UserPlus, Activity, DoorOpen, Scissors, Clock, AlertCircle, GitBranch, Lightbulb } from 'lucide-react';

export default function Chapter10() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="text-center my-8">
        <h2 className="text-2xl font-bold text-slate-400 tracking-widest uppercase mb-2">Part III</h2>
        <h1 className="text-3xl font-extrabold text-slate-900 mt-0">Invasive Medical Devices</h1>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Chapter 10: Understanding Invasive Medical Devices</h2>
        <p className="m-0 font-medium text-blue-800 italic">
          The Foundation for Rules 5–8
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what an invasive medical device is.</li>
          <li>Understand why invasive devices are generally considered higher risk.</li>
          <li>Differentiate between body-orifice devices and surgically invasive devices.</li>
          <li>Understand implantable devices.</li>
          <li>Understand why duration of use changes the risk.</li>
          <li>Understand why some invasive devices remain Class A or B while others become Class C or D.</li>
          <li>Learn how regulators think before applying Rules 5–8.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.1 A New Beginning</h3>
      <p>Until now, every medical device we studied remained outside the body. Some touched healthy skin. Some contacted wounds. Some stored blood. Some filtered blood.</p>
      <p>But none of them actually entered the patient's body.</p>
      <p className="font-bold text-slate-800 text-lg">Now, everything changes.</p>
      <p>From this chapter onward, we begin studying devices that enter the human body.</p>
      <p>The moment a device enters the body, the possibility of harm generally increases. Why? Because inside the human body, there are blood vessels, nerves, muscles, organs, tissues, body fluids, that can be injured if the device is poorly designed, manufactured, or used.</p>
      <p className="font-semibold text-blue-800">That is why invasive devices receive closer regulatory attention.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><UserPlus className="w-6 h-6 text-indigo-500" /> 10.2 What Does "Invasive" Really Mean?</h3>
      <p>Many people hear the word <em>Invasive</em> and immediately think <em>"Major surgery."</em> That is not always true.</p>
      <p>In regulatory language, an invasive device is simply:</p>
      <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 text-indigo-900 italic font-medium p-4 rounded-r-lg my-4">
        a device that enters the human body, either through a natural body opening (body orifice) or by penetrating the body's surface.
      </blockquote>
      <p>The key word is <strong>enters</strong>.</p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-slate-800 mb-2 mt-0">Everyday Analogy</h4>
        <p className="text-sm text-slate-700 m-0 mb-3">Imagine your house. A person standing outside your front door is not inside your house. The moment they step through the doorway, they have entered your house.</p>
        <p className="text-sm font-semibold text-slate-800 m-0">The human body works similarly. The moment a device passes into the body, it becomes invasive.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.3 Two Ways a Device Can Enter the Body</h3>
      <p>There are only two basic ways.</p>
      
      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <DoorOpen className="w-5 h-5 text-emerald-600" />
            <h5 className="font-bold text-slate-800 mt-0 mb-0">Method 1: Through a natural body opening</h5>
          </div>
          <p className="text-sm text-slate-600 mb-2">These openings already exist. No surgery is needed to use these openings.</p>
          <ul className="text-sm m-0 pl-4 space-y-1">
             <li>Mouth</li>
             <li>Nose</li>
             <li>Ear canal</li>
             <li>Urethra</li>
             <li>Rectum</li>
             <li>Vagina</li>
          </ul>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Scissors className="w-5 h-5 text-rose-600" />
            <h5 className="font-bold text-slate-800 mt-0 mb-0">Method 2: Through penetration of the body's surface</h5>
          </div>
          <p className="text-sm text-slate-600 mb-2">Usually during a medical procedure. These approaches involve intentionally breaching the body's tissues.</p>
          <ul className="text-sm m-0 pl-4 space-y-1">
             <li>Surgical incision</li>
             <li>Needle puncture</li>
             <li>Trocar entry</li>
             <li>Bone drilling</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.4 What Is a Body Orifice?</h3>
      <p>The term body orifice sounds difficult, but the concept is simple.</p>
      <p><strong>A body orifice is a natural opening through which a device can enter the body.</strong></p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Mouth, Nose, Ear, Urethra, Anus, Vagina.</p></div>
      <p className="text-sm text-slate-600 italic">Certain permanent artificial openings, such as a stoma or tracheostomy, are also treated as body orifices in the MDR 2017 definitions.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.5 Everyday Examples</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Thermometer placed under the tongue.</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">The device enters the mouth. No surgery.</p>
           <p className="text-sm font-bold text-emerald-700 m-0">Body orifice device.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Urinary catheter.</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Enters through the urethra. Again, no cutting.</p>
           <p className="text-sm font-bold text-emerald-700 m-0">Body orifice device.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Colonoscope.</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Enters through the rectum.</p>
           <p className="text-sm font-bold text-emerald-700 m-0">Body orifice device.</p>
        </div>
      </div>
      <p className="font-bold text-blue-800">Notice something. No cutting is involved.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.6 Surgically Invasive Devices</h3>
      <p>Now imagine a surgeon performing a hip replacement. The surgeon makes an incision. The device enters through that surgical opening.</p>
      <p>This is called <strong>surgically invasive</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Bone screws, Orthopaedic plates, Hip implants, Knee implants, Surgical meshes, Cardiac valves.</p></div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.7 Everyday Analogy</h3>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6 text-sm text-amber-900">
        <p className="m-0 mb-2">Imagine entering a stadium.</p>
        <p className="m-0 mb-2">You can enter through the main gate. That is like a body orifice.</p>
        <p className="m-0 mb-2">Now imagine creating a completely new entrance by breaking a wall. That resembles a surgical approach.</p>
        <p className="m-0 font-bold">Both allow entry, but they are very different.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.8 Implantable Devices</h3>
      <p>Some surgically invasive devices are removed immediately after use. Others remain inside the patient for months, years, or even for life.</p>
      <p>These are called <strong>implantable devices</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Artificial hip joint, Artificial knee joint, Dental implant, Pacemaker, Heart valve, Spinal implant.</p></div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.9 Why Are Implants Usually Higher Risk?</h3>
      <p>Imagine installing a ceiling fan. If the fan stops working, you can replace it fairly easily.</p>
      <p>Now imagine replacing the foundation of your house. That is a much bigger job.</p>
      <p>Implants are similar. Once inside the body, they are difficult to inspect, repair, or replace. Another operation is often required.</p>
      <p className="font-semibold text-slate-800">Because of this, implantable devices usually require much greater evidence of safety and performance.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Clock className="w-6 h-6 text-orange-500" /> 10.10 Duration of Use – One of the Most Important Concepts</h3>
      <p>This is one of the biggest factors in Rules 5–8.</p>
      <p>Regulators ask: <strong>How long will the device stay inside the patient?</strong></p>
      <p>The answer has a major influence on classification.</p>
      
      <div className="grid lg:grid-cols-3 gap-4 my-6">
         <div className="border border-slate-200 bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Transient Use</h5>
            <p className="text-sm font-semibold text-indigo-600 mb-2">Continuous use for less than 60 minutes.</p>
            <p className="text-xs text-slate-600 font-medium mb-1">Examples:</p>
            <ul className="text-xs text-slate-600 m-0 pl-4 mb-3">
              <li>Examination scope used briefly</li>
              <li>Temporary suction catheter</li>
            </ul>
            <p className="text-xs text-slate-700 m-0 mt-auto">Because exposure is short, the opportunity for harm is generally lower than with prolonged use.</p>
         </div>
         <div className="border border-slate-200 bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Short-Term Use</h5>
            <p className="text-sm font-semibold text-indigo-600 mb-2">Continuous use for more than 60 minutes but not more than 30 days.</p>
            <p className="text-xs text-slate-600 font-medium mb-1">Examples:</p>
            <ul className="text-xs text-slate-600 m-0 pl-4 mb-3">
              <li>Urinary catheter left in place after surgery</li>
              <li>Surgical drain</li>
              <li>Temporary feeding tube</li>
            </ul>
            <p className="text-xs text-slate-700 m-0 mt-auto">The longer the device remains, the greater the opportunity for infection, irritation, or device-related problems.</p>
         </div>
         <div className="border border-slate-200 bg-white p-5 rounded-lg shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Long-Term Use</h5>
            <p className="text-sm font-semibold text-indigo-600 mb-2">Continuous use for more than 30 days.</p>
            <p className="text-xs text-slate-600 font-medium mb-1">Examples:</p>
            <ul className="text-xs text-slate-600 m-0 pl-4 mb-3">
              <li>Hip implant</li>
              <li>Pacemaker</li>
              <li>Artificial heart valve</li>
              <li>Long-term vascular access device</li>
            </ul>
            <p className="text-xs text-slate-700 m-0 mt-auto">Long-term exposure generally requires the greatest confidence in the device's safety and performance.</p>
         </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.11 Why Does Duration Matter?</h3>
      <p>Imagine wearing a pair of shoes. Wearing them for 10 minutes is very different from wearing them every day for five years.</p>
      <p>Over time, small problems become more significant.</p>
      <p>Similarly, a medical device remaining inside the body for years has more opportunities to:</p>
      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 mb-4">
        <li>wear out,</li>
        <li>break,</li>
        <li>corrode,</li>
        <li>trigger tissue reactions,</li>
        <li>become infected,</li>
        <li>require replacement.</li>
      </ul>
      <p className="font-medium text-slate-800">This is why duration is such an important factor in the classification rules.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.12 Reusable Surgical Instruments</h3>
      <p>Some surgical instruments enter the body, but only during the operation. Afterwards, they are cleaned, sterilized, inspected, reused.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Surgical forceps, Scissors, Retractors, Needle holders.</p></div>
      <p className="font-medium">Although they are surgically invasive during use, their intended purpose and pattern of use are different from implantable devices.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">10.13 Think Like a Regulator</h3>
      <p>When a new invasive device is submitted for classification, the regulator asks:</p>
      <ul className="mb-4">
        <li>Does it enter the body?</li>
        <li>Through a body orifice or through surgery?</li>
        <li>Does it remain inside the body?</li>
        <li>For how long?</li>
        <li>Is it reusable?</li>
        <li>Is it implanted?</li>
        <li>Does it contact the heart, brain, or spinal cord?</li>
        <li>Could failure cause serious harm?</li>
      </ul>
      <p className="font-semibold text-blue-800">Only after answering these questions does the regulator determine which of Rules 5–8 should be applied.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 10.14 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Medical Device"]
  N2["↓"]
  N1 --> N2
  N3["Does it enter the body?"]
  N2 --> N3
  N3 -->|NO| N4["See Rules 1-4"]
  N5["↓"]
  N3 -->|YES| N5
  N6["How?"]
  N5 --> N6
  N6 -->|Through a natural body opening?| N7{"Rule 5: How long will it be used in the body orifice?"}
  N7 -->|Transient (< 60 minutes)| N7A["Rule 5 (Class A)"]
  N7 -->|Short-term (60 mins to 30 days) OR oral/nasal/ear cavity| N7B["Rule 5 (Class B)"]
  N7 -->|Long-term (> 30 days) NOT in oral/nasal/ear cavity| N7C["Rule 5 (Class C)"]
  N6 -->|Through surgery?| N8["Continue evaluating Rules 6–8"]
  N9["↓"]
  N6 --> N9
  N10["How long does it remain?"]
  N9 --> N10
  N11["↓"]
  N10 -->|Transient| N11
  N10 -->|Short-term| N11
  N10 -->|Long-term| N11
  N12["Is it implantable?"]
  N11 --> N12
  N13["↓"]
  N12 --> N13
  N14["Apply the appropriate rule."]
  N13 --> N14
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 10.15 Common Beginner Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "Every invasive device requires surgery."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Many invasive devices enter through natural body openings.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "If a device is small, it must be low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. A very small implant may present much higher risk than a large external device.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Duration does not matter."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The same type of device may be classified differently depending on how long it remains in the body.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "All invasive devices are implants."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Many invasive devices are removed immediately after use and are never implanted.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 10.16 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Remember three questions:</p>
        <p className="text-lg font-bold text-amber-900 m-0">1. Where?</p>
        <p className="text-sm text-amber-800 m-0 mb-2">How does the device enter?</p>
        
        <p className="text-lg font-bold text-amber-900 m-0">2. How?</p>
        <p className="text-sm text-amber-800 m-0 mb-2">Through a natural opening or surgery?</p>
        
        <p className="text-lg font-bold text-amber-900 m-0">3. How long?</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Transient, short-term, or long-term?</p>
        
        <p className="text-sm font-semibold text-amber-900 m-0 italic">If you can answer these three questions, you have already completed most of the thinking needed before applying Rules 5–8.</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">Before studying the invasive-device classification rules, remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>An invasive device <strong>enters the body</strong>.</li>
          <li>Entry may occur through a natural body opening or through surgery.</li>
          <li>Implantable devices remain inside the body after the procedure.</li>
          <li>The duration of use (transient, short-term, or long-term) is a key factor in classification.</li>
          <li>Reusable surgical instruments are treated differently from implants because their intended use and exposure profile are different.</li>
          <li>The regulator always starts with <strong>how the device enters the body, how long it stays there, and what it is intended to do</strong>.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 11, we will begin <strong>Rule 5</strong>, which covers invasive medical devices intended to enter the body through a body orifice.</p>
           <p className="text-sm text-slate-300 m-0 mb-2">We'll answer questions like: Why is entering through the mouth different from entering through surgery? Why does a urinary catheter differ from a tongue depressor? Why does duration of use change the classification? Why are devices used in the ear, nose, throat, urinary tract, and gastrointestinal tract treated differently depending on how and where they are used?</p>
           <p className="text-sm font-bold text-blue-900 m-0">This is where the invasive-device classification rules truly begin.</p>
        </div>
      </div>

    </div>
  );
}
