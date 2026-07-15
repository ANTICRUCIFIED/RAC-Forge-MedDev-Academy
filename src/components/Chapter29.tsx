import { ArrowDown, CornerDownRight, AlertTriangle, CheckSquare, FileText, BookOpen, Clock, Zap, Beaker, HelpCircle, Lightbulb, CheckCircle2, FileSearch, ShieldCheck } from 'lucide-react';

export default function Chapter29() {
  const MistakeCard = ({ title, mistake, correct }: any) => (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm mb-4 hover:shadow-md transition-shadow">
      <h4 className="font-bold text-slate-800 m-0 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-rose-500" />
        {title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-rose-50 rounded p-4 border border-rose-100">
          <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-2">The Mistake</span>
          <p className="text-sm text-rose-900 m-0 italic font-medium">"{mistake}"</p>
        </div>
        <div className="bg-emerald-50 rounded p-4 border border-emerald-100">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">Correct Thinking</span>
          <p className="text-sm text-emerald-900 m-0">{correct}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8 rounded-r-xl shadow-sm text-center">
        <h1 className="text-2xl font-bold text-blue-900 mt-0 mb-2">PART VIII</h1>
        <h2 className="text-xl font-semibold text-blue-800 mt-0 mb-4">Common Classification Mistakes</h2>
        <p className="m-0 font-medium text-blue-900 italic bg-white p-4 rounded-lg shadow-sm border border-indigo-200 inline-block">
          "Most classification errors are not caused by misunderstanding the rules. They are caused by asking the wrong questions."
        </p>
      </div>

      <div className="bg-rose-50 border-l-4 border-rose-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-rose-900 mt-0 mb-2">CHAPTER 29</h2>
        <h2 className="text-xl font-bold text-rose-900 mt-0 mb-2">The 100 Most Common Medical Device Classification Mistakes</h2>
        <p className="m-0 font-medium text-rose-900 italic">
          "Learn From Others' Mistakes Before Making Your Own"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Identify the most common classification mistakes.</li>
          <li>Understand why these mistakes occur.</li>
          <li>Learn how to avoid them.</li>
          <li>Develop better regulatory judgment.</li>
          <li>Improve classification consistency.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HelpCircle className="w-6 h-6 text-indigo-500" /> 29.1 Why Do Classification Mistakes Happen?</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80" alt="Medical professional analyzing data" className="w-full h-64 object-cover" />
      </div>
      <p>Imagine two regulatory professionals. One has 20 years of experience. The other has just joined the company.</p>
      <p>Both receive the same medical device.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg shadow-sm">
          <p className="font-bold text-emerald-900 m-0 mb-2">The experienced professional asks:</p>
          <p className="text-emerald-800 italic m-0">"What is the manufacturer's intended purpose?"</p>
        </div>
        <div className="bg-rose-50 border border-rose-200 p-4 rounded-lg shadow-sm">
          <p className="font-bold text-rose-900 m-0 mb-2">The beginner asks:</p>
          <p className="text-rose-800 italic m-0">"What does it look like?"</p>
        </div>
      </div>
      <p className="font-bold text-slate-800">That difference explains most classification mistakes.</p>

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-blue-500" /> 29.2 Mistake Category 1 – Judging by Appearance</h3>
      
      <MistakeCard 
        title="Mistake 1: The 'Looks Like' Trap"
        mistake="It looks like a syringe, so every syringe has the same classification."
        correct="Wrong. A syringe intended for general injection, contrast media delivery, insulin administration, or veterinary use may have different regulatory considerations depending on its intended purpose and applicable rules."
      />
      
      <MistakeCard 
        title="Mistake 2: The Material Myth"
        mistake="It is made of plastic, so it must be low risk."
        correct="Wrong. Many high-risk devices are made from plastic (e.g., heart valve components, catheters, vascular introducers, infusion systems). Material alone never determines risk."
      />

      <MistakeCard 
        title="Mistake 3: The Size Fallacy"
        mistake="It is very small, so it must be low risk."
        correct="Wrong. A tiny coronary stent can be far higher risk than a large hospital trolley. Risk depends on function, not size."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><FileText className="w-6 h-6 text-amber-500" /> 29.3 Mistake Category 2 – Ignoring Intended Purpose</h3>

      <MistakeCard 
        title="Mistake 4: Assuming Function"
        mistake="I know what the device does."
        correct="Wrong. Regulators classify what the manufacturer claims the device is intended to do, not what someone assumes it does."
      />

      <MistakeCard 
        title="Mistake 5: Name vs. Purpose"
        mistake="Reading only the product name."
        correct="Imagine a 'Smart Monitor'. Does it monitor patients? Machines? Temperature? Without reading the intended purpose, you cannot classify it."
      />

      <MistakeCard 
        title="Mistake 6: Missing Details"
        mistake="Ignoring the IFU."
        correct="Many important details appear only in the Instructions for Use."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><Clock className="w-6 h-6 text-emerald-500" /> 29.4 Mistake Category 3 – Ignoring Duration of Use</h3>

      <MistakeCard 
        title="Mistake 7: Grouping by Name, Not Duration"
        mistake="Assuming every catheter has the same classification."
        correct="Wrong. A catheter used for 10 minutes is very different from one used for 30 days. Duration directly affects classification."
      />

      <MistakeCard 
        title="Mistake 8: The Repeated Use Factor"
        mistake="Ignoring repeated use."
        correct="Some devices are used repeatedly over months or years. This influences regulatory assessment."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><Zap className="w-6 h-6 text-purple-500" /> 29.5 Mistake Category 4 – Confusing Active and Non-Active Devices</h3>

      <MistakeCard 
        title="Mistake 9: The Electricity Shortcut"
        mistake="It uses electricity, therefore Rule 9."
        correct="Wrong. Electricity alone does not determine the rule. Ask: Does it Treat? Diagnose? Monitor? Administer medicine?"
      />

      <MistakeCard 
        title="Mistake 10: The Software Blindspot"
        mistake="Thinking software cannot be a medical device."
        correct="Modern software may itself be regulated if it has an intended medical purpose."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><Beaker className="w-6 h-6 text-indigo-500" /> 29.6 Mistake Category 5 – Misunderstanding Combination Products</h3>

      <MistakeCard 
        title="Mistake 11: The Automatic Drug Assumption"
        mistake="If it contains a medicine, it is automatically a medicine."
        correct="Wrong. Some products remain medical devices because the principal intended action is provided by the device."
      />

      <MistakeCard 
        title="Mistake 12: Ignoring the Ancillary Substance"
        mistake="Ignoring the medicinal substance."
        correct="A drug-eluting stent requires consideration of both the device and the incorporated medicinal substance."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-orange-500" /> 29.7 Mistake Category 6 – Reading Only Part of the Rule</h3>

      <MistakeCard 
        title="Mistake 13: The First Sentence Trap"
        mistake="Reading only the first sentence."
        correct="Many classification rules contain exceptions, special situations, and additional conditions. Always read the complete rule."
      />

      <MistakeCard 
        title="Mistake 14: Skipping the Fine Print"
        mistake="Ignoring the notes below the rule."
        correct="The notes often clarify how the rule should be interpreted."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><FileSearch className="w-6 h-6 text-teal-500" /> 29.8 Mistake Category 7 – Confusing Accessories</h3>

      <MistakeCard 
        title="Mistake 15: The Inheritance Fallacy"
        mistake="Every accessory has the same classification as the parent device."
        correct="Not necessarily. Accessories should be assessed according to their own intended purpose and the applicable regulatory provisions."
      />

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-yellow-500" /> 29.9 Mistake Category 8 – Marketing Problems</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Mistake 16</p>
          <p className="text-sm text-slate-600 m-0 mb-3 font-medium">Changing website claims without reviewing regulatory impact.</p>
          <p className="text-sm font-semibold text-rose-600 m-0 bg-rose-50 p-2 rounded">A simple change in wording can change the intended purpose.</p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Mistake 17</p>
          <p className="text-sm text-slate-600 m-0 mb-3 font-medium">Brochure and IFU say different things.</p>
          <p className="text-sm font-semibold text-rose-600 m-0 bg-rose-50 p-2 rounded">Regulators expect consistency.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3">29.10 Mistake Category 9 – Assuming All Implants Are Class D</h3>
      <p className="font-bold text-rose-600">This is one of the biggest myths.</p>
      <p>Not every implant automatically belongs to the highest risk class.</p>
      <p className="font-medium text-slate-800">The applicable classification depends on the specific rule, intended purpose, duration, anatomical location, and any applicable exceptions in the MDR.</p>

      <h3 className="text-xl font-semibold mt-10 mb-3">29.11 Mistake Category 10 – Assuming Sterile Means Higher Risk</h3>
      <p>Many beginners think: <strong className="text-rose-600 bg-rose-50 px-2 py-1 rounded mx-1">Sterile = Higher Class</strong></p>
      <p>Not necessarily.</p>
      <p className="font-medium text-slate-800">Sterility is an important characteristic, but classification depends on the complete classification rules.</p>

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><CheckSquare className="w-6 h-6 text-emerald-500" /> 29.12 The Ten Golden Questions Before Finalising a Classification</h3>
      <p>Before submitting any classification, ask:</p>
      
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6 shadow-sm">
        <ul className="space-y-3 m-0 pl-0 list-none">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I confirmed it is a medical device?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I read the intended purpose?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I reviewed the IFU?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I identified the duration of use?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I identified whether it is active?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I checked every potentially relevant rule?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I considered special rules?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I documented my reasoning?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Are all manufacturer documents consistent?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Can I justify my decision to another regulator?</span></li>
        </ul>
      </div>
      <p className="font-bold text-rose-600 text-center">If the answer to any question is "No", stop and review your classification.</p>

      <h3 className="text-xl font-semibold mt-10 mb-6">Case Studies</h3>
      
      <div className="space-y-6 my-6">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
            <h4 className="font-bold text-slate-800 m-0">29.13 Case Study 1: Digital Thermometer</h4>
          </div>
          <div className="p-5">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mb-1">Mistake</span>
                <p className="text-sm text-slate-700 m-0 italic bg-rose-50 p-3 rounded">"It uses electricity, therefore Rule 9."</p>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Correct Thinking</span>
                <p className="text-sm text-slate-700 m-0 bg-emerald-50 p-3 rounded">Electricity only powers the device. Its intended purpose is diagnosis. Therefore, consider <strong>Rule 10</strong>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
            <h4 className="font-bold text-slate-800 m-0">29.14 Case Study 2: Drug-Eluting Stent</h4>
          </div>
          <div className="p-5">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mb-1">Mistake</span>
                <p className="text-sm text-slate-700 m-0 italic bg-rose-50 p-3 rounded">"It contains medicine, therefore it is a drug."</p>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Correct Thinking</span>
                <p className="text-sm text-slate-700 m-0 bg-emerald-50 p-3 rounded">The device provides the principal intended action. The medicinal substance has an ancillary role. Consider both the implant classification and the special considerations for devices incorporating medicinal substances.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="bg-slate-100 px-5 py-3 border-b border-slate-200">
            <h4 className="font-bold text-slate-800 m-0">29.15 Case Study 3: Hospital Bed</h4>
          </div>
          <div className="p-5">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider block mb-1">Mistake</span>
                <p className="text-sm text-slate-700 m-0 italic bg-rose-50 p-3 rounded">"Every bed is a medical device."</p>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Correct Thinking</span>
                <p className="text-sm text-slate-700 m-0 bg-emerald-50 p-3 rounded">Only beds specifically intended for medical purposes fall within the medical device framework. A household bed is not a medical device.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-blue-500"/> 29.16 Memory Trick</h3>
      <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl my-6 text-center shadow-sm">
        <p className="text-blue-900 m-0 mb-3">Imagine a pilot. Before every flight, the pilot follows a checklist. Even after 20 years of experience.</p>
        <p className="text-blue-900 m-0 mb-3">Why? Because experience does not eliminate mistakes. Checklists reduce mistakes.</p>
        <p className="text-blue-900 m-0 mb-4 font-medium">Regulatory professionals should follow the same discipline.</p>
        <p className="text-lg font-bold text-blue-900 m-0 italic bg-white p-3 rounded shadow-sm">Remember: "Never trust memory when a checklist can prevent an error."</p>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><CheckSquare className="w-6 h-6 text-indigo-500" /> 29.17 Practical Classification Checklist</h3>
      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl overflow-x-auto my-8 shadow-sm flex flex-col items-center">
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm">
  </div>
</div> Read the Label</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Read the IFU</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Read the Website</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Confirm Intended Purpose</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Active or Non-active?</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Invasive or Non-invasive?</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Duration of Use?</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Applicable Rule?</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Special Rules?</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Record Justification</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border border-slate-500 rounded-sm"></div> Independent Review</div>
        <div className="flex items-center gap-3"><div className="w-4 h-4 border-slate-500 rounded bg-emerald-500"></div> <span className="text-emerald-400 font-bold">Classification Complete</span></div>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-0">
          <li>Most classification errors result from poor analysis, not from difficult regulations.</li>
          <li>Never classify a device based on its appearance, size, material, or product name.</li>
          <li>Always begin with the manufacturer's intended purpose.</li>
          <li>Read the complete applicable rule, including any exceptions and special provisions.</li>
          <li>Use a structured checklist before finalising a classification.</li>
          <li>A well-documented rationale is just as important as selecting the correct rule.</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10 shadow-sm">
        <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Preview of Chapter 30 – Classification Case Studies Across Medical Specialties</h3>
        <p className="text-sm text-blue-800 mb-3">In the next chapter, we will move beyond individual products and study complete real-world scenarios from different medical specialties.</p>
        <p className="text-sm text-blue-800 mb-2">You will learn how to classify devices used in:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
          <div className="text-sm text-blue-800 font-semibold">• Cardiology</div>
          <div className="text-sm text-blue-800 font-semibold">• Orthopaedics</div>
          <div className="text-sm text-blue-800 font-semibold">• Dentistry</div>
          <div className="text-sm text-blue-800 font-semibold">• Ophthalmology</div>
          <div className="text-sm text-blue-800 font-semibold">• Radiology</div>
          <div className="text-sm text-blue-800 font-semibold">• Intensive Care Units (ICU)</div>
          <div className="text-sm text-blue-800 font-semibold">• Operating Theatres</div>
          <div className="text-sm text-blue-800 font-semibold">• Clinical Laboratories</div>
          <div className="text-sm text-blue-800 font-semibold">• Home Healthcare</div>
        </div>
        <p className="text-sm text-blue-800 mb-0 font-medium">Instead of isolated examples, you'll see how classification decisions are made in the context of real clinical practice, making it much easier to apply the Medical Devices Rules, 2017 in day-to-day regulatory work.</p>
      </div>

    </div>
  );
}
