import { BookOpen, Target, Activity, Power, PowerOff, Clock, HeartPulse, Brain, AlertCircle, Syringe, Stethoscope, Thermometer, ShieldAlert } from 'lucide-react';

export default function Chapter3() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <p className="m-0 font-medium text-blue-900 text-lg italic">
          "If you understand the language of the rules, you will understand the rules."
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, the reader will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand the important terms used in the Medical Devices Rules, 2017.</li>
          <li>Distinguish between non-invasive, invasive, surgically invasive, and implantable devices.</li>
          <li>Understand the meaning of transient, short-term, and long-term use.</li>
          <li>Understand active and non-active devices.</li>
          <li>Understand body orifice, central circulatory system, and central nervous system.</li>
          <li>Understand why these terms are important for classification.</li>
          <li>Read the First Schedule with confidence.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.1 Why Should We Learn These Terms First?</h3>
      <p>Imagine trying to learn English without knowing the alphabet. <strong>Impossible.</strong></p>
      <p>Similarly, trying to understand Rule 1, Rule 2, Rule 3...Rule 16 without understanding the terminology is almost impossible. Many people memorize the classification rules. Very few actually understand them.</p>
      <p className="font-semibold text-blue-800">This handbook focuses on understanding rather than memorization.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.2 Intended Use – The Most Important Concept</h3>
      <p>If there is one concept you must remember throughout this handbook, it is <strong>Intended Use</strong>. Everything in medical device classification begins here.</p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6 flex items-start gap-4">
        <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm hidden sm:block">
          <Target className="w-6 h-6 text-slate-700" />
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-2 mt-0">What is Intended Use?</h4>
          <p className="m-0 text-slate-700">In simple language, Intended use is the <strong>purpose for which the manufacturer says the medical device should be used</strong>.</p>
        </div>
      </div>

      <p>The manufacturer decides this purpose and states it in:</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-6">
        <li>Product label</li>
        <li>Instructions for Use (IFU)</li>
        <li>User Manual</li>
        <li>Promotional literature</li>
        <li>Technical Documentation</li>
      </ul>
      <p>The MDR 2017 defines intended use based on the information supplied by the manufacturer and approved by the licensing authority.</p>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Everyday Example: Kitchen Knife</h5>
          <ul className="text-sm space-y-1 m-0 pl-4 mb-4">
            <li>One person uses it <em>to cut vegetables.</em></li>
            <li>Another uses it <em>to open paint cans.</em></li>
            <li>Another uses it <em>to carve wood.</em></li>
          </ul>
          <p className="text-sm mb-0">The manufacturer intended it <strong>for cutting food</strong>. That is its intended use. Medical devices work exactly the same way.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2">Medical Device Example: Laser</h5>
          <p className="text-sm mb-2">The manufacturer may say <em>"This laser is intended for removing unwanted hair."</em> Another manufacturer may produce a laser intended for eye surgery.</p>
          <p className="text-sm mb-0">Although both products use laser technology, their intended use is completely different. Therefore, their regulatory classification may also differ.</p>
        </div>
      </div>
      <p className="font-semibold text-center text-blue-800 bg-blue-50 py-2 rounded-lg border border-blue-200">Important Point: Regulators classify the manufacturer's intended use, not the user's personal use.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.3 Medical Purpose</h3>
      <p>A medical device must have a medical purpose. Examples include:</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-6">
        <li>Diagnosis</li>
        <li>Prevention</li>
        <li>Monitoring</li>
        <li>Treatment</li>
        <li>Alleviation of disease</li>
        <li>Compensation for an injury</li>
        <li>Replacement of anatomy</li>
        <li>Life support</li>
      </ul>
      <p>If a product is not intended for a medical purpose, it usually is not regulated as a medical device.</p>
      
      <div className="my-6 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
         <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
            <h5 className="font-bold text-slate-800 m-0">Example: Smartwatch</h5>
         </div>
         <div className="p-5 grid sm:grid-cols-2 gap-4 bg-white">
            <div>
              <p className="text-sm font-medium mt-0 mb-1 text-slate-800">Scenario A:</p>
              <p className="text-sm text-slate-600 m-0">Used only to display time.<br/><strong className="text-slate-800">→ Not a medical device.</strong></p>
            </div>
            <div>
              <p className="text-sm font-medium mt-0 mb-1 text-slate-800">Scenario B:</p>
              <p className="text-sm text-slate-600 m-0">Intended to detect atrial fibrillation and assist healthcare decisions.<br/><strong className="text-slate-800">→ May become a medical device depending on its intended use.</strong></p>
            </div>
         </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.4 Patient Contact</h3>
      <p>One of the first questions a regulator asks is: <strong>Does the device come into contact with the patient?</strong> The level of contact often influences the level of risk.</p>
      
      <div className="grid sm:grid-cols-3 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
          <h5 className="font-bold text-slate-800 mb-2 text-sm">Never touches patient</h5>
          <p className="text-xs mb-0 text-slate-600">Hospital furniture, Medicine refrigerator, Wheelchair ramp</p>
        </div>
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
          <h5 className="font-bold text-blue-900 mb-2 text-sm">Touches externally</h5>
          <p className="text-xs mb-0 text-blue-800">Thermometer, Blood pressure cuff, Examination glove</p>
        </div>
        <div className="border border-red-200 rounded-lg p-4 bg-red-50">
          <h5 className="font-bold text-red-900 mb-2 text-sm">Enters the body</h5>
          <p className="text-xs mb-0 text-red-800">Catheter, Endoscope, Surgical implant</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.5 Non-Invasive Device</h3>
      <p><strong>Simple Meaning:</strong> A non-invasive device does not enter the human body. It may touch the body, but it does not penetrate through the skin or enter through a natural opening.</p>
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4 text-sm">
        <strong>Everyday Analogy:</strong> Think about wearing a cap. The cap touches your head. It never enters your body. That is similar to a non-invasive device.
      </div>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Blood pressure monitor, Wheelchair, External splint, Stethoscope, External ECG electrodes (surface contact), Surgical drapes.</p></div>
      <p className="text-sm font-semibold text-red-700 bg-red-50 py-2 px-4 rounded border border-red-200">Common Misconception: Many people think "If a device touches the body, it must be invasive." Wrong. Touching is not the same as entering.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.6 Invasive Device</h3>
      <p><strong>Simple Meaning:</strong> An invasive device enters the body. It may enter through the mouth, nose, ear, urethra, rectum, vagina, or through the skin.</p>
      <p>The MDR 2017 defines an invasive device as one that penetrates, in whole or in part, inside the body through a body orifice or through the surface of the body.</p>
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4 text-sm">
        <strong>Everyday Analogy:</strong> Think about inserting a key into a lock. The key enters the lock. Similarly, an invasive device enters the body.
      </div>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Urinary catheter, Endoscope, Colonoscope, Feeding tube.</p></div>
      <p className="text-sm font-semibold text-blue-800 bg-blue-50 py-2 px-4 rounded border border-blue-200">Important Point: Entering the body does not automatically mean surgery. Many invasive devices enter through natural openings.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.7 Body Orifice</h3>
      <p>A body orifice is a natural opening in the body. Examples include the Mouth, Nose, Ear canal, Urethra, Anus, and Vagina. It also includes certain permanent artificial openings, such as a stoma or permanent tracheostomy, as defined in the MDR 2017.</p>
      <p><strong>Why Is This Important?</strong> Because many classification rules distinguish between devices that enter through a body orifice and through surgery.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.8 Surgically Invasive Device</h3>
      <p>Some devices cannot enter through natural openings. A doctor must perform surgery. Examples include Bone plate, Bone screw, Hip replacement, Knee replacement. These devices are called <strong>surgically invasive</strong>.</p>
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4 text-sm">
        <strong>Everyday Analogy:</strong> Imagine entering a house.<br/>
        One way → Use the front door (Natural openings).<br/>
        Another way → Break a wall (Surgery).
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.9 Implantable Device</h3>
      <p>Some surgically invasive devices remain inside the body after the procedure. These are called <strong>implantable devices</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Artificial hip, Artificial knee, Pacemaker, Heart valve, Dental implant.</p></div>
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4 text-sm mb-4">
        <strong>Everyday Analogy:</strong> Imagine replacing a broken pipe inside your house. After installation, the pipe stays there permanently. Implants work the same way.
      </div>
      <p><strong>Why Are They Usually Higher Risk?</strong> Because once implanted, removing or replacing them often requires another surgical procedure. Failure may have serious consequences.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">3.10 Duration of Use</h3>
      <p>One of the most important concepts in classification is how long the device remains in contact with the patient. The MDR 2017 defines three categories of continuous use:</p>

      <div className="grid sm:grid-cols-3 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <Clock className="w-8 h-8 text-blue-500 mb-2" />
          <h5 className="font-bold text-slate-800 mb-1 mt-0">Transient Use</h5>
          <p className="text-lg font-bold text-blue-600 m-0">&lt; 60 mins</p>
          <p className="text-xs mt-2 text-slate-600">Example: Dental examination mirror</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <Clock className="w-8 h-8 text-amber-500 mb-2" />
          <h5 className="font-bold text-slate-800 mb-1 mt-0">Short-Term Use</h5>
          <p className="text-lg font-bold text-amber-600 m-0">60 mins - 30 days</p>
          <p className="text-xs mt-2 text-slate-600">Examples: Urinary catheter, Surgical drain</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex flex-col items-center text-center">
          <Clock className="w-8 h-8 text-red-500 mb-2" />
          <h5 className="font-bold text-slate-800 mb-1 mt-0">Long-Term Use</h5>
          <p className="text-lg font-bold text-red-600 m-0">&gt; 30 days</p>
          <p className="text-xs mt-2 text-slate-600">Examples: Pacemaker, Hip implant, Artificial heart valve</p>
        </div>
      </div>
      
      <p><strong>Why Does Duration Matter?</strong> Imagine borrowing someone's car. Using it for 10 minutes is very different from using it every day for 10 years. The longer a device remains inside the body, the greater the opportunity for wear, infection, biological reactions, or failure. That is why duration is an important consideration in the classification rules.</p>

      <div className="grid sm:grid-cols-2 gap-6 my-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2"><Power className="w-6 h-6 text-green-600"/> 3.11 Active Medical Device</h3>
          <p>Requires a source of energy—such as electricity or a battery—to operate. The MDR 2017 defines it as a device whose operation depends on electrical energy or another source of energy other than that generated by the human or animal body or gravity.</p>
          <p className="text-sm"><strong>Examples:</strong> ECG machine, Ventilator, Infusion pump, Dialysis machine, MRI scanner.</p>
          <div className="bg-slate-50 p-3 rounded text-sm mt-3">
             <strong>Analogy:</strong> An electric bicycle needs electricity.
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2"><PowerOff className="w-6 h-6 text-slate-500"/> 3.12 Non-Active Medical Device</h3>
          <p>These devices work without electricity.</p>
          <p className="text-sm mt-4"><strong>Examples:</strong> Surgical scissors, Bandage, Syringe, Scalpel, Wheelchair (manual).</p>
          <div className="bg-slate-50 p-3 rounded text-sm mt-8">
             <strong>Analogy:</strong> A manual bicycle does not need electricity.
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 my-8">
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold mt-0 mb-2 flex items-center gap-2 text-blue-900"><Activity className="w-5 h-5"/> 3.13 Active Therapeutic</h3>
          <p className="text-sm text-blue-800">These are active devices that provide treatment. They actively influence the patient's condition.</p>
          <p className="text-sm text-blue-900 font-medium mb-0 mt-3">Examples: Ventilator, Dialysis machine, Defibrillator, Therapeutic laser.</p>
        </div>
        <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
          <h3 className="text-lg font-semibold mt-0 mb-2 flex items-center gap-2 text-blue-900"><Activity className="w-5 h-5"/> 3.14 Active Diagnostic</h3>
          <p className="text-sm text-blue-800">These are active devices used to obtain information for diagnosis or monitoring.</p>
          <p className="text-sm text-blue-900 font-medium mb-0 mt-3">Examples: ECG machine, Ultrasound, CT scanner, MRI scanner.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HeartPulse className="w-6 h-6 text-red-600"/> 3.15 Central Circulatory System</h3>
      <p>This term often sounds intimidating, but the idea is simple. It refers to the body's main blood transport network, especially the heart and the major blood vessels directly connected to it.</p>
      <p><strong>Why is this important?</strong> Because devices used in these areas may pose a greater risk if they fail. <em>Example: A catheter used in a small peripheral vein is different from one intended for the heart or major blood vessels.</em></p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Brain className="w-6 h-6 text-purple-600"/> 3.16 Central Nervous System</h3>
      <p>The central nervous system consists primarily of the brain and spinal cord. Devices intended for these structures receive special attention because injury can have permanent and severe consequences.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Brain electrodes, Deep brain stimulation systems, Certain neurosurgical implants.</p></div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-emerald-600"/> 3.17 Sterile Device</h3>
      <p>A sterile device is supplied free from viable microorganisms and is intended to remain sterile until use.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Sterile syringes, Sterile surgical gloves, Sterile catheters. Sterility is important because contamination can introduce infection into the patient.</p></div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-teal-600"/> 3.18 Measuring Function</h3>
      <p>Some devices do more than simply perform a task—they measure something. For these devices, accuracy is essential because treatment decisions may depend on the measurement.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Blood pressure monitor, Thermometer, Glucometer, Weighing scale used for medical purposes.</p></div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should understand the essential vocabulary used throughout the First Schedule:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-slate-200">
          <ul className="m-0 pl-4">
            <li>Intended use</li>
            <li>Medical purpose</li>
            <li>Patient contact</li>
            <li>Non-invasive device</li>
            <li>Invasive device</li>
          </ul>
          <ul className="m-0 pl-4">
            <li>Body orifice</li>
            <li>Surgically invasive device</li>
            <li>Implantable device</li>
            <li>Transient, short-term, and long-term use</li>
            <li>Active and non-active devices</li>
          </ul>
          <ul className="m-0 pl-4">
            <li>Active therapeutic and active diagnostic devices</li>
            <li>Central circulatory system</li>
            <li>Central nervous system</li>
            <li>Sterile devices</li>
            <li>Measuring function</li>
          </ul>
        </div>
        <p className="mt-4 mb-0 text-sm font-medium text-blue-200">
          These terms are the building blocks of the 16 classification rules. In the next chapter, we will begin Rule 1 and apply this terminology to real devices using simple decision trees, practical examples, and plain-language explanations.
        </p>
      </div>

    </div>
  );
}
