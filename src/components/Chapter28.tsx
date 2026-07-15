import { Target, Lightbulb, CheckCircle2, AlertTriangle, Play, Settings, Beaker, Crosshair, ListOrdered } from 'lucide-react';

export default function Chapter28() {
  const ExampleCard = ({ number, title, purpose, questions, rule, reasoning }: any) => (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm mb-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Example {number}</span>
        <h4 className="font-bold text-slate-800 m-0">{title}</h4>
      </div>
      <div className="space-y-3">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Purpose</span>
          <p className="text-sm text-slate-700 m-0 mt-1">{purpose}</p>
        </div>
        {questions && (
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Questions</span>
            <p className="text-sm text-slate-700 m-0 mt-1 whitespace-pre-line">{questions}</p>
          </div>
        )}
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Applicable Rule</span>
          <p className="text-sm font-semibold text-blue-700 m-0 mt-1">{rule}</p>
        </div>
        {reasoning && (
          <div className="bg-slate-50 p-3 rounded border border-slate-100 mt-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Reasoning</span>
            <p className="text-sm text-slate-600 m-0 mt-1">{reasoning}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 28</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Practical Classification of Common Medical Devices</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "Learning Classification Through Real Examples"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Apply the classification rules to real medical devices.</li>
          <li>Understand why similar-looking devices may have different classifications.</li>
          <li>Learn the reasoning behind classification.</li>
          <li>Develop confidence in practical classification.</li>
          <li>Avoid common mistakes.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Target className="w-6 h-6 text-emerald-500" /> 28.1 Why Study Real Examples?</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80" alt="Medical devices and tools laid out in a hospital environment" className="w-full h-64 object-cover" />
      </div>
      <p>Suppose someone asks, "What is Rule 7?" You may remember the definition.</p>
      <p>Now suppose someone places an arthroscopy cannula on your desk. Immediately, the question changes.</p>
      <p>Now you must think like a regulatory professional. That is why examples are essential.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">28.2 How to Read This Chapter</h3>
      <p>Every example follows the same format.</p>
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-6 text-center font-mono text-sm text-indigo-900">
        Device <span className="text-indigo-400 mx-2">→</span> 
        Intended Purpose <span className="text-indigo-400 mx-2">→</span> 
        Key Questions <span className="text-indigo-400 mx-2">→</span> 
        Applicable Rule <span className="text-indigo-400 mx-2">→</span> 
        Reasoning
      </div>
      <p className="font-medium text-slate-800">Notice that we do not jump directly to the classification. We always begin with the intended purpose.</p>

      <h3 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b-2 border-slate-200 text-slate-800">SECTION A: Non-Invasive Medical Devices</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExampleCard 
          number="1"
          title="Examination Gloves"
          purpose="To provide a protective barrier during medical examination."
          questions="Does it enter the body? No.&#10;Is it active? No.&#10;Does it contact injured skin? Normally no."
          rule="Consider the non-invasive classification rules based on the intended use and applicable provisions."
          reasoning="The glove primarily acts as a barrier on intact skin. If supplied sterile or intended for higher-risk applications, additional regulatory considerations may apply."
        />
        <ExampleCard 
          number="2"
          title="Surgical Drapes"
          purpose="Maintain a sterile field during surgery."
          rule="Non-invasive device."
          reasoning="Although used during surgery, the drape itself does not enter the patient's body."
        />
        <ExampleCard 
          number="3"
          title="Elastic Bandage"
          purpose="Provide compression and support."
          rule="Non-invasive rules."
          reasoning="The bandage contacts intact skin. Its intended purpose determines the applicable non-invasive rule."
        />
        <ExampleCard 
          number="4"
          title="Blood Administration Tubing"
          purpose="Transport blood during transfusion."
          questions="Does it store or channel blood? Yes."
          rule="Rule 2."
          reasoning="Its principal purpose is to channel blood safely."
        />
        <ExampleCard 
          number="5"
          title="Blood Filter"
          purpose="Filter blood before administration."
          rule="Rule 3."
          reasoning="It modifies blood before it reaches the patient."
        />
        <ExampleCard 
          number="6"
          title="Hydrogel Wound Dressing"
          purpose="Manage wound healing."
          questions="Superficial wound? Deep wound? Healing by primary or secondary intention?"
          rule="Depends on the wound type and intended purpose under Rule 4."
        />
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b-2 border-slate-200 text-slate-800">SECTION B: Body Orifice Devices</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExampleCard 
          number="7"
          title="Foley Catheter"
          purpose="Drain urine."
          questions="Natural body opening? Yes.&#10;Duration? Short-term."
          rule="Rule 5."
        />
        <ExampleCard 
          number="8"
          title="Nasogastric Tube"
          purpose="Provide enteral nutrition."
          rule="Rule 5."
          reasoning="Introduced through the nose into the gastrointestinal tract."
        />
        <ExampleCard 
          number="9"
          title="Endotracheal Tube"
          purpose="Maintain airway."
          rule="Rule 5."
          reasoning="Introduced through the mouth into the trachea."
        />
        <ExampleCard 
          number="10"
          title="Vaginal Speculum"
          purpose="Facilitate examination."
          rule="Rule 5."
        />
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b-2 border-slate-200 text-slate-800">SECTION C: Surgically Invasive Devices</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExampleCard 
          number="11"
          title="Scalpel"
          purpose="Cut tissue during surgery."
          questions="Duration: Transient."
          rule="Rule 6."
        />
        <ExampleCard 
          number="12"
          title="Surgical Forceps"
          purpose="Hold tissue during surgery."
          rule="Rule 6."
        />
        <ExampleCard 
          number="13"
          title="Bone Drill Bit"
          purpose="Prepare bone during surgery."
          rule="Rule 6."
        />
        <ExampleCard 
          number="14"
          title="Temporary Surgical Drain"
          purpose="Drain fluids after surgery."
          questions="Duration: Short-term."
          rule="Rule 7."
        />
        <ExampleCard 
          number="15"
          title="Temporary Bone Plate"
          purpose="Support fracture healing."
          rule="Rule 7."
        />
        <ExampleCard 
          number="16"
          title="Hip Prosthesis"
          purpose="Replace hip joint."
          questions="Duration: Long-term."
          rule="Rule 8."
        />
        <ExampleCard 
          number="17"
          title="Dental Implant"
          purpose="Replace missing tooth."
          rule="Rule 8."
        />
        <ExampleCard 
          number="18"
          title="Artificial Heart Valve"
          purpose="Replace damaged valve."
          rule="Rule 8."
        />
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b-2 border-slate-200 text-slate-800">SECTION D: Active Medical Devices</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExampleCard 
          number="19"
          title="Ventilator"
          purpose="Support breathing."
          rule="Rule 9."
        />
        <ExampleCard 
          number="20"
          title="Defibrillator"
          purpose="Restore heart rhythm."
          rule="Rule 9."
        />
        <ExampleCard 
          number="21"
          title="Dialysis Machine"
          purpose="Treat kidney failure."
          rule="Rule 9."
        />
        <ExampleCard 
          number="22"
          title="ECG Machine"
          purpose="Record electrical activity of the heart."
          rule="Rule 10."
        />
        <ExampleCard 
          number="23"
          title="MRI Scanner"
          purpose="Produce diagnostic images."
          rule="Rule 10."
        />
        <ExampleCard 
          number="24"
          title="CT Scanner"
          purpose="Diagnostic imaging."
          rule="Rule 10."
        />
        <ExampleCard 
          number="25"
          title="Ultrasound Machine"
          purpose="Diagnostic imaging."
          rule="Rule 10."
        />
        <ExampleCard 
          number="26"
          title="Infusion Pump"
          purpose="Deliver medicines accurately."
          rule="Rule 11."
        />
        <ExampleCard 
          number="27"
          title="Syringe Pump"
          purpose="Deliver very small quantities of medicine."
          rule="Rule 11."
        />
        <ExampleCard 
          number="28"
          title="Enteral Feeding Pump"
          purpose="Deliver nutrition."
          rule="Rule 11."
        />
        <ExampleCard 
          number="29"
          title="Examination Light"
          purpose="Assist clinical examination."
          rule="Rule 12 (subject to intended medical purpose)."
        />
        <ExampleCard 
          number="30"
          title="Powered Examination Chair"
          purpose="Assist patient positioning."
          rule="Rule 12 (subject to intended medical purpose)."
        />
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-6 pb-2 border-b-2 border-slate-200 text-slate-800">SECTION E: Special Rule Devices</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ExampleCard 
          number="31"
          title="Drug-Eluting Coronary Stent"
          purpose="Maintain vessel patency while releasing a medicinal substance."
          rule="Rule 8 together with the considerations applicable under Rule 13."
        />
        <ExampleCard 
          number="32"
          title="Antibiotic Bone Cement"
          purpose="Fix orthopaedic implant while incorporating an antibiotic."
          rule="Rule 13 considerations."
        />
        <ExampleCard 
          number="33"
          title="Male Condom"
          purpose="Contraception and reduction of STI transmission."
          rule="Rule 14."
        />
        <ExampleCard 
          number="34"
          title="Copper IUD"
          purpose="Long-term contraception."
          rule="Rule 14."
        />
        <ExampleCard 
          number="35"
          title="Steam Sterilizer"
          purpose="Sterilize reusable medical devices."
          rule="Rule 15."
        />
        <ExampleCard 
          number="36"
          title="Washer-Disinfector"
          purpose="Clean and disinfect reusable medical devices."
          rule="Rule 15."
        />
        <ExampleCard 
          number="37"
          title="Digital X-ray Detector"
          purpose="Record diagnostic X-ray images."
          rule="Rule 16."
        />
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 28.3 What These Examples Teach Us</h3>
      <p>After studying these examples, one important lesson becomes clear.</p>
      <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg my-6 shadow-sm">
        <p className="font-bold text-blue-900 m-0 mb-2">Classification is not based on the product name.</p>
        <p className="text-blue-800 m-0 mb-2">Instead, classification depends on:</p>
        <ul className="text-blue-800 m-0 pl-5 space-y-1">
          <li>intended purpose,</li>
          <li>duration of use,</li>
          <li>invasiveness,</li>
          <li>whether the device is active,</li>
          <li>how it interacts with the patient,</li>
          <li>and any special characteristics described in the First Schedule.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-rose-500" /> 28.4 Common Mistakes When Using Examples</h3>
      <p>Never assume:</p>
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 my-6">
        <ul className="space-y-2 m-0 text-rose-900 list-none pl-0">
          <li className="flex items-start gap-2"><span className="font-bold">❌</span> <div>Every catheter has the same classification.</div></li>
          <li className="flex items-start gap-2"><span className="font-bold">❌</span> <div>Every implant belongs to the same class.</div></li>
          <li className="flex items-start gap-2"><span className="font-bold">❌</span> <div>Every electrical device is Rule 9.</div></li>
          <li className="flex items-start gap-2"><span className="font-bold">❌</span> <div>Every software product is a medical device.</div></li>
          <li className="flex items-start gap-2"><span className="font-bold">❌</span> <div>Every wound dressing belongs to Rule 4.</div></li>
        </ul>
        <p className="mt-4 mb-0 text-rose-800 font-bold text-center border-t border-rose-200 pt-3">Always go back to the intended purpose and the applicable rule.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><ListOrdered className="w-6 h-6 text-blue-500" /> 28.5 Practice Exercise</h3>
      <p>Without looking at the answer, identify the first question you would ask for each device:</p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800 w-1/3">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800 w-2/3">First Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Urinary catheter</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">What is its intended purpose and duration of use?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG machine</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Is it intended for diagnosis or treatment?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Is it intended for long-term implantation?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood filter</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Does it modify blood before administration?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion pump</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Does it actively administer medicinal products?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Condom</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Is it intended for contraception or STI prevention?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Autoclave</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Is it intended to sterilize reusable medical devices?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">X-ray detector</td>
              <td className="border border-slate-200 px-4 py-2 italic text-slate-600">Is it specifically intended to record diagnostic X-ray images?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Play className="w-6 h-6 text-amber-500"/> 28.6 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-6 text-center shadow-sm">
        <p className="text-amber-900 m-0 mb-3">Imagine learning to drive. Reading the traffic rules is important.</p>
        <p className="text-amber-900 m-0 mb-3">But you become a confident driver only after driving many different vehicles on different roads.</p>
        <p className="text-amber-900 m-0 mb-3">Medical device classification is the same. The 16 rules are the traffic rules.</p>
        <p className="text-amber-900 m-0 mb-4 font-bold">These practical examples are your driving lessons.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic bg-white p-3 rounded shadow-sm">The more examples you study, the more naturally you will be able to classify unfamiliar devices.</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-0">
          <li>Practical classification always begins with the manufacturer's intended purpose.</li>
          <li>Similar-looking devices may fall under different rules because they serve different medical purposes.</li>
          <li>Never classify based on appearance, material, or product name alone.</li>
          <li>The examples in this chapter illustrate how to think, not just what answer to choose.</li>
          <li>When in doubt, return to the structured process described in Chapters 24–27 and apply the relevant rule step by step.</li>
        </ul>
      </div>

    </div>
  );
}
