import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, GitBranch, Lightbulb, AlertTriangle, Layers, BrainCircuit, PenTool, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Chapter26() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 26</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">When More Than One Classification Rule Applies</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Finding the Most Appropriate Rule"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand why multiple rules may appear to apply.</li>
          <li>Learn how regulators resolve conflicts between rules.</li>
          <li>Understand the concept of primary intended purpose.</li>
          <li>Learn how to classify combination products.</li>
          <li>Understand accessories and multifunction devices.</li>
          <li>Learn practical decision-making using real examples.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-amber-500" /> 26.1 The Most Common Question in Regulatory Affairs</h3>
      <p>Imagine a manufacturer asks you:</p>
      <p className="font-semibold italic text-slate-700">"Our product is an implant."</p>
      <p>Simple enough.</p>
      <p>Then they continue. <span className="font-semibold italic text-slate-700">"It also releases a medicine."</span></p>
      <p>Now you're uncertain. Does Rule 8 apply? Or Rule 13?</p>
      <p>Now imagine they add another feature. <span className="font-semibold italic text-slate-700">"It also contains software."</span></p>
      <p>Now perhaps Rule 12?</p>
      <p className="font-bold text-slate-800">This situation happens every day in regulatory affairs.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Layers className="w-6 h-6 text-indigo-500" /> 26.2 Why Can Multiple Rules Apply?</h3>
      <p>Modern medical devices are becoming increasingly sophisticated.</p>
      <p>A single device may:</p>
      <ul className="mb-4 grid grid-cols-2 md:grid-cols-3">
        <li>be implantable</li>
        <li>use electricity</li>
        <li>contain software</li>
        <li>release a medicine</li>
        <li>monitor the patient</li>
        <li>communicate wirelessly</li>
      </ul>
      <p className="font-medium text-slate-800">One device. Many features.</p>
      <p>This is why reading only one rule is often not enough.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><BrainCircuit className="w-6 h-6 text-emerald-500" /> 26.3 Think of a Person Wearing Many Hats</h3>
      <p>Imagine someone who is a doctor, a teacher, a researcher, a parent.</p>
      <p>They perform many roles. But if they are seeing patients in a hospital, their role at that moment is <strong>Doctor</strong>.</p>
      <p>Medical devices are similar. They may have many features, but regulators ask:</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-lg font-bold text-emerald-900 m-0">"What is the device's primary intended medical purpose?"</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">26.4 The Principle of Primary Intended Purpose</h3>
      <p>This is one of the most important regulatory principles.</p>
      <p>Always ask: <strong>What is the device mainly intended to do?</strong></p>
      <ul className="space-y-2 mb-4">
        <li>Not "What else can it do?"</li>
        <li>Not "What technology does it contain?"</li>
        <li>But <strong className="text-blue-600">"What is its principal medical purpose?"</strong></li>
      </ul>
      <p className="font-medium text-slate-800">The answer usually guides you toward the appropriate rule.</p>

      <h3 className="text-xl font-semibold mt-10 mb-6">26.5 to 26.10 Examples</h3>
      
      <div className="space-y-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 border-b border-slate-100 pb-2">Example 1 – Drug-Eluting Coronary Stent</h4>
          <p className="text-sm text-slate-600 m-0 mb-2">The product is implanted, remains long-term, releases a medicine. At first glance, both Rule 8 and Rule 13 seem relevant.</p>
          <p className="text-sm text-slate-600 m-0 mb-2"><strong>Ask:</strong> What is the main purpose?</p>
          <p className="text-sm text-slate-600 m-0 mb-3"><strong>Answer:</strong> To keep the artery open. The medicine supports that purpose by reducing the chance of restenosis.</p>
          <p className="text-sm font-bold text-blue-600 m-0 bg-blue-50 p-2 rounded">Therefore, the implant remains primarily a medical device, while the medicinal substance receives additional regulatory consideration under the applicable provisions.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 border-b border-slate-100 pb-2">Example 2 – Infusion Pump</h4>
          <p className="text-sm text-slate-600 m-0 mb-2">The device uses electricity, contains software, delivers medicine, has alarms, stores data. Which feature matters most?</p>
          <p className="text-sm text-slate-600 m-0 mb-3">The intended purpose is to administer medicinal products accurately.</p>
          <p className="text-sm font-bold text-blue-600 m-0 bg-blue-50 p-2 rounded">Therefore, Rule 11 becomes the primary rule to consider. The software, battery, and alarms are important, but they support the main function.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 border-b border-slate-100 pb-2">Example 3 – MRI Scanner</h4>
          <p className="text-sm text-slate-600 m-0 mb-2">The MRI uses electricity, magnets, software, stores images, monitors system performance. Should we classify it because it uses electricity? <strong>No.</strong></p>
          <p className="text-sm text-slate-600 m-0 mb-3">Electricity simply allows it to work. Its primary intended purpose is diagnostic imaging.</p>
          <p className="text-sm font-bold text-blue-600 m-0 bg-blue-50 p-2 rounded">Therefore, Rule 10 becomes the key rule.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 border-b border-slate-100 pb-2">Example 4 – Pacemaker</h4>
          <p className="text-sm text-slate-600 m-0 mb-2">It is implanted, active, battery powered, electronic, software controlled. Several rules appear relevant.</p>
          <p className="text-sm text-slate-600 m-0 mb-3">However, its principal purpose is to provide ongoing therapeutic electrical stimulation to maintain heart rhythm.</p>
          <p className="text-sm font-bold text-blue-600 m-0 bg-blue-50 p-2 rounded">Because it is an active implantable device, regulators consider both its implantable nature and its active therapeutic function when determining the appropriate regulatory requirements.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 border-b border-slate-100 pb-2">Example 5 – Hormone-Releasing Intrauterine System (IUS)</h4>
          <p className="text-sm text-slate-600 m-0 mb-2">This product provides contraception, remains inside the uterus, releases a hormone.</p>
          <p className="text-sm text-slate-600 m-0 mb-3">Now three concepts appear together: Implantation, Medicinal substance, Contraception. The regulator evaluates the product as a whole.</p>
          <p className="text-sm font-bold text-blue-600 m-0 bg-blue-50 p-2 rounded">Its intended purpose is contraception, while also considering the incorporated medicinal substance and the applicable special rules.</p>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-slate-800 mt-0 mb-3 border-b border-slate-100 pb-2">Example 6 – AI Diagnostic Software</h4>
          <p className="text-sm text-slate-600 m-0 mb-2">Suppose software: analyses chest X-rays, identifies possible lung nodules, assists radiologists. It uses: software, artificial intelligence, cloud computing.</p>
          <p className="text-sm text-slate-600 m-0 mb-3">The technology is interesting, but the question remains: What is its intended purpose? <strong>Diagnosis.</strong></p>
          <p className="text-sm font-bold text-blue-600 m-0 bg-blue-50 p-2 rounded">Therefore, the diagnostic classification principles are the starting point.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">26.11 Accessories</h3>
      <p>Accessories create confusion. Imagine an ECG machine.</p>
      <p>Now consider: ECG cable, ECG electrodes, Battery charger, Printer.</p>
      <p>Should every accessory automatically receive the same classification? <strong>Not necessarily.</strong></p>
      <p>Each accessory should be evaluated according to: its intended purpose, its role, and the applicable regulatory provisions.</p>
      <p className="font-medium text-slate-800">Some accessories are medical devices. Others are not.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">26.12 Multifunction Devices</h3>
      <p>Modern devices often perform several functions. Imagine a patient monitor that: monitors ECG, monitors oxygen, monitors blood pressure, records data, sends alarms, connects to the hospital network.</p>
      <p>Although many functions exist, they all contribute to one overall intended purpose: <strong>patient monitoring</strong>.</p>
      <p className="font-bold text-slate-800">The regulator evaluates the device as a complete medical system.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">26.13 Combination Products</h3>
      <p>Combination products combine different regulatory concepts. Examples include:</p>
      <ul className="mb-4">
        <li>Drug-eluting stent</li>
        <li>Antibiotic bone cement</li>
        <li>Hormone-releasing IUS</li>
        <li>Antimicrobial wound dressing</li>
        <li>Drug-coated balloon catheter</li>
      </ul>
      <p className="font-medium text-slate-800">Each must be evaluated according to: primary intended purpose, role of the medicinal substance, applicable special rules.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ShieldAlert className="w-6 h-6 text-rose-500" /> 26.14 What If Two Rules Truly Apply?</h3>
      <p>Sometimes, two rules genuinely seem relevant. In those situations, do not guess. Instead:</p>
      <ul className="mb-4">
        <li>Read both rules completely.</li>
        <li>Identify the manufacturer's intended purpose.</li>
        <li>Identify the principal mode of action.</li>
        <li>Consider any specific provisions or exceptions.</li>
        <li>Document why one rule is more appropriate.</li>
      </ul>
      <p className="font-bold text-slate-800">If uncertainty remains, seek expert regulatory advice or consult the competent authority where appropriate.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">26.15 The Decision Hierarchy</h3>
      <p>When classification becomes difficult, work through these questions in order.</p>
      
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-0 my-6 divide-y divide-slate-100">
        <div className="p-4 flex gap-4 items-start"><div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div><p className="m-0 font-medium text-slate-800 pt-1">What is the intended purpose?</p></div>
        <div className="p-4 flex gap-4 items-start"><div className="bg-indigo-100 text-indigo-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div><p className="m-0 font-medium text-slate-800 pt-1">How is that purpose achieved?</p></div>
        <div className="p-4 flex gap-4 items-start"><div className="bg-purple-100 text-purple-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div><p className="m-0 font-medium text-slate-800 pt-1">Which feature is medically most important?</p></div>
        <div className="p-4 flex gap-4 items-start"><div className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">4</div><p className="m-0 font-medium text-slate-800 pt-1">Which rule most specifically addresses that purpose?</p></div>
        <div className="p-4 flex gap-4 items-start"><div className="bg-amber-100 text-amber-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">5</div><p className="m-0 font-medium text-slate-800 pt-1">Do any special rules also apply?</p></div>
      </div>
      <p className="font-bold text-slate-800 text-center">This hierarchy prevents most classification mistakes.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-red-500" /> 26.16 Common Beginner Mistakes</h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-6">
        <ul className="space-y-4 m-0 text-red-900 list-none pl-0">
          <li>
             <strong>Mistake 1: Choosing the first rule that seems to fit.</strong>
             <br/>Incorrect. Read all potentially relevant rules.
          </li>
          <li>
             <strong>Mistake 2: Ignoring special rules.</strong>
             <br/>Incorrect. Rules 13–16 may be highly relevant even when another rule also appears applicable.
          </li>
          <li>
             <strong>Mistake 3: Classifying based on technology.</strong>
             <br/>Incorrect. Technology supports the function. The intended medical purpose drives classification.
          </li>
          <li>
             <strong>Mistake 4: Ignoring documentation.</strong>
             <br/>Incorrect. Always record why a particular rule was selected.
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">26.17 Real Regulatory Thinking</h3>
      <p>Experienced regulators rarely ask: "What rule fits?"</p>
      <p>Instead, they ask: <span className="font-bold text-slate-800">"What is this device trying to achieve medically?"</span></p>
      <p className="font-medium text-slate-800">Once that answer is clear, the applicable rule usually becomes much easier to identify.</p>

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 26.18 Universal Conflict Resolution Flowchart</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Classification Complete"]
`} />
</div>
      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><PenTool className="w-6 h-6 text-indigo-500" /> 26.19 Practice Case Studies</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Case 1: Drug-eluting coronary stent</p>
          <p className="text-sm text-slate-600 m-0"><strong>Questions:</strong> Is it implanted? ✔ Does it contain a medicinal substance? ✔</p>
          <p className="text-sm text-slate-600 m-0 mt-2"><strong>Primary purpose:</strong> To maintain vessel patency while the medicinal substance plays a supporting role.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Case 2: Insulin Pump</p>
          <p className="text-sm text-slate-600 m-0"><strong>Questions:</strong> Active? ✔ Delivers medicine? ✔ Contains software? ✔</p>
          <p className="text-sm text-slate-600 m-0 mt-2"><strong>Primary purpose:</strong> Safe administration of insulin.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Case 3: MRI Scanner</p>
          <p className="text-sm text-slate-600 m-0"><strong>Questions:</strong> Active? ✔ Diagnostic? ✔ Uses software? ✔</p>
          <p className="text-sm text-slate-600 m-0 mt-2"><strong>Primary purpose:</strong> Diagnostic imaging.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Case 4: Hormone-Releasing IUS</p>
          <p className="text-sm text-slate-600 m-0"><strong>Questions:</strong> Contraception? ✔ Contains medicinal substance? ✔ Long-term use? ✔</p>
          <p className="text-sm text-slate-600 m-0 mt-2"><strong>Primary purpose:</strong> Contraception, with additional consideration of the incorporated medicinal substance.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Case 5: AI Chest X-ray Software</p>
          <p className="text-sm text-slate-600 m-0"><strong>Questions:</strong> Software? ✔ Diagnostic? ✔</p>
          <p className="text-sm text-slate-600 m-0 mt-2"><strong>Primary purpose:</strong> Assist diagnosis by analysing medical images.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 26.20 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine a Swiss Army knife. It contains: knife, scissors, screwdriver, bottle opener.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">If you are tightening a screw, you use the screwdriver. You don't classify the tool based on every feature it contains.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Medical devices are similar. They may have many technologies, but regulators focus first on the principal intended medical purpose.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "Many features. One principal purpose."</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>A medical device may appear to fit more than one classification rule.</li>
          <li>Begin with the manufacturer's intended purpose.</li>
          <li>Determine the principal medical purpose before considering secondary features.</li>
          <li>Read every potentially relevant rule before making a decision.</li>
          <li>Consider special rules (Rules 13–16) whenever applicable.</li>
          <li>Always document the reasoning behind the chosen classification.</li>
          <li>If uncertainty remains, obtain expert regulatory advice rather than making assumptions.</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10 shadow-sm">
        <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Preview of Chapter 27 – Master Classification Decision Trees</h3>
        <p className="text-sm text-blue-800 mb-3">The next chapter brings everything together. Instead of reading through all 16 rules each time, you'll learn to use practical decision trees that guide you from the first question to the appropriate rule in a logical sequence.</p>
        <p className="text-sm text-blue-800 mb-2">We'll build:</p>
        <ul className="text-sm text-blue-800 space-y-1 mb-0 pl-5">
          <li>A master classification flowchart,</li>
          <li>Individual decision trees for Rules 1–16,</li>
          <li>Quick-reference pathways,</li>
          <li>And a practical algorithm that regulatory professionals can use during real-world device classification.</li>
        </ul>
      </div>

    </div>
  );
}
