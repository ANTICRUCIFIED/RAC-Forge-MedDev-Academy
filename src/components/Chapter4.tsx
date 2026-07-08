import { ArrowDown, CornerDownRight, Target, HelpCircle, GitMerge, FileText, Lightbulb, BrainCircuit } from 'lucide-react';

export default function Chapter4() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, the reader will understand:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>How CDSCO approaches classification.</li>
          <li>Why the First Schedule contains multiple rules instead of one.</li>
          <li>How regulators think while classifying a device.</li>
          <li>Why intended use always comes first.</li>
          <li>Why the same device may appear in different classes.</li>
          <li>Why more than one rule may appear applicable.</li>
          <li>The logical sequence for classification.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><HelpCircle className="w-6 h-6 text-red-500"/> 4.1 The Biggest Mistake Beginners Make</h3>
      <p>One of the biggest mistakes new regulatory professionals make is this: They ask,</p>
      <blockquote className="border-l-4 border-red-500 bg-red-50 text-red-900 italic font-medium">"Tell me the class of this device."</blockquote>
      <p>This seems like a reasonable question. Unfortunately, it is usually the wrong question. The correct question is:</p>
      <blockquote className="border-l-4 border-green-500 bg-green-50 text-green-900 italic font-medium">"What is the intended use of this device?"</blockquote>
      <p>Notice the difference. Regulators never start with <em>"What is the product called?"</em> Instead, they start with <em>"What is the manufacturer claiming this device is intended to do?"</em></p>
      <p className="font-semibold text-blue-800">That is the foundation of classification under the Medical Devices Rules, 2017. Medical devices are classified based on intended use and the parameters laid down in the First Schedule.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">4.2 Why the Name of a Device Is Not Enough</h3>
      <p>Imagine someone tells you <em>"This is a catheter."</em> Can you classify it? <strong>No.</strong></p>
      <p><strong>Why?</strong> Because there are many different catheters. For example:</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-4">
        <li>Urinary catheter</li>
        <li>Cardiac catheter</li>
        <li>Suction catheter</li>
        <li>Feeding catheter</li>
        <li>Diagnostic catheter</li>
        <li>Electrophysiology catheter</li>
      </ul>
      <p>They do not all present the same level of risk. Their classification depends on factors such as:</p>
      <div className="bg-slate-100 p-4 rounded-lg my-4 text-sm">
        <ul className="m-0">
          <li>Intended use</li>
          <li>Where they are used</li>
          <li>How long they remain in the body</li>
          <li>Whether they are connected to an active device</li>
          <li>Whether they are used in the central circulatory system</li>
        </ul>
      </div>
      <p className="font-bold text-slate-800 bg-slate-50 py-2 px-4 rounded border border-slate-200">Therefore, the product name alone is never enough.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><BrainCircuit className="w-6 h-6 text-purple-600"/> 4.3 Think Like a CDSCO Reviewer</h3>
      <p>Imagine you are working as a CDSCO reviewer. A manufacturer submits an application. Do you immediately ask, <em>"Is it Class B?"</em> <strong>No.</strong></p>
      <p>Instead, you ask a sequence of questions.</p>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 my-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
             <p className="m-0 font-medium text-slate-800">What is the intended use?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
             <p className="m-0 font-medium text-slate-800">Is it a medical device?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
             <p className="m-0 font-medium text-slate-800">Is it an IVD?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">4</div>
             <p className="m-0 font-medium text-slate-800">Does it touch the patient?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">5</div>
             <p className="m-0 font-medium text-slate-800">Does it enter the body?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">6</div>
             <p className="m-0 font-medium text-slate-800">Through a natural opening? Or through surgery?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">7</div>
             <p className="m-0 font-medium text-slate-800">How long does it remain in the body?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">8</div>
             <p className="m-0 font-medium text-slate-800">Does it require electrical energy?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">9</div>
             <p className="m-0 font-medium text-slate-800">Does it diagnose? Treat? Monitor? Support life?</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">10</div>
             <p className="m-0 font-medium text-slate-800">Which rule of the First Schedule applies?</p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100">
             <p className="m-0 font-bold text-blue-900 text-center uppercase tracking-wider">Final Step: Determine Class A / B / C / D</p>
          </div>
        </div>
      </div>
      <p className="font-semibold text-center text-blue-800 bg-blue-50 py-2 rounded-lg border border-blue-200">Notice something. The class is determined only after answering many questions.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3">4.4 Why Are There 16 Rules?</h3>
      <p>Many beginners ask: <em>"If there are only four classes, why are there sixteen rules?"</em> This is a very good question.</p>
      <p>Imagine classifying vehicles. You could classify them as Small, Medium, Large, Heavy. Would that be enough? <strong>No.</strong> You also need to know if it's a Passenger vehicle, Goods vehicle, Motorcycle, Emergency vehicle, or Agricultural vehicle.</p>
      <p>Similarly, medical devices perform many different functions. Some diagnose. Some treat. Some monitor. Some replace body parts. Some deliver medicine. Some emit radiation. Some remain inside the body for decades.</p>
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg my-4 text-sm font-medium text-amber-900">
        One rule cannot accurately classify all of these. Therefore, the First Schedule contains multiple rules, each dealing with a different type of device or use scenario.
      </div>


      <h3 className="text-xl font-semibold mt-8 mb-3">4.5 Why One Device May Seem to Fit More Than One Rule</h3>
      <p>Imagine an infusion pump. It:</p>
      <ul>
        <li>Uses electricity.</li>
        <li>Delivers fluids.</li>
        <li>Is connected to a catheter.</li>
        <li>May be used in intensive care.</li>
        <li>May administer medicines.</li>
      </ul>
      <p>Someone might think Rule 9 applies. Someone else might think Rule 12 applies. Which one is correct?</p>
      <p>This is why regulators carefully analyse the <strong>primary intended purpose</strong> and the exact wording of the applicable rules before assigning a class. Classification is not based on guesswork. It follows a structured process.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3">4.6 What If Two Rules Seem Applicable?</h3>
      <p>This is another common question. Sometimes, a medical device appears to satisfy more than one rule.</p>
      <p>When this happens, the applicable classification is determined by applying the relevant rules of the First Schedule to the device's intended use and characteristics. In practice, the rule that best matches the device's intended purpose and risk profile is used.</p>
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-4">
        <p className="m-0 font-medium text-blue-900">
          For beginners, the important lesson is: Do not classify a device by looking at only one feature. Consider the complete intended use and all relevant characteristics before deciding which rule applies.
        </p>
      </div>


      <h3 className="text-xl font-semibold mt-8 mb-3">4.7 Classification Is Not Based on Marketing</h3>
      <p>Manufacturers sometimes describe products using attractive marketing terms. Examples: <em>"Premium", "Advanced", "Smart", "Next Generation", "AI Powered"</em>.</p>
      <p>These words have <strong>no direct role</strong> in classification. A device is not higher class because it is:</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-6">
        <li>Expensive</li>
        <li>Smart</li>
        <li>Wireless</li>
        <li>AI-enabled</li>
        <li>Imported</li>
      </ul>
      <p className="font-semibold text-slate-800 bg-slate-50 py-2 px-4 rounded border border-slate-200">Regulators classify the device according to its intended use and the applicable rules—not its marketing claims.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><FileText className="w-6 h-6 text-emerald-600"/> 4.8 The Importance of Reading the Instructions for Use (IFU)</h3>
      <p>One of the first documents a regulator examines is the Instructions for Use (IFU). Why? Because the IFU tells the regulator:</p>
      <ul className="mb-4">
        <li>Who the intended users are.</li>
        <li>Which patients the device is intended for.</li>
        <li>The intended medical purpose.</li>
        <li>Warnings and precautions.</li>
        <li>Contraindications.</li>
        <li>Operating conditions.</li>
      </ul>
      <p className="font-medium text-red-700 bg-red-50 py-2 px-4 rounded border border-red-200">Without understanding these details, correct classification may not be possible.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitMerge className="w-6 h-6 text-indigo-600"/> 4.9 A Simple Classification Decision Tree</h3>
      <p>Think of classification as answering a series of simple questions.</p>

      <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl overflow-x-auto my-8 shadow-sm flex flex-col items-center">
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    START
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    Is it intended for a medical purpose?
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-rose-600 mr-2">NO</span>
    <span className="bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 shadow-sm">(Not a medical device)</span>
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-emerald-600">YES</span>
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    Is it an IVD?
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-emerald-600 mr-2">YES</span>
    <span className="bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 shadow-sm">(Use IVD Rules)</span>
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-rose-600">NO</span>
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    Does it contact the patient?
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-rose-600 mr-2">NO</span>
    <span className="bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 shadow-sm">Consider non-invasive rules</span>
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-emerald-600">YES</span>
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    Does it enter the body?
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-rose-600 mr-2">NO</span>
    <span className="bg-white text-slate-700 px-3 py-1 rounded-md border border-slate-200 shadow-sm">Non-invasive pathway</span>
  </div>
  <div className="flex items-center self-start ml-[50%] -translate-x-1/2 my-2 text-sm translate-x-16">
    <CornerDownRight className="w-4 h-4 text-slate-400 mr-2" />
    <span className="font-bold text-emerald-600">YES</span>
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    Natural opening? OR Surgery?
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    How long? (Transient? Short-term? Long-term?)
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    Active? Implantable? Life-supporting?
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    <span className="text-blue-400 font-bold">Determine the applicable rule.</span>
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    ↓
  </div>
  <div className="bg-white border border-blue-200 text-blue-900 px-5 py-3 rounded-xl font-medium text-center shadow-sm max-w-sm w-full mx-auto">
    <span className="text-green-400 font-bold text-base">Assign Class A / B / C / D</span>
  </div>
</div>
      <p className="italic text-center text-sm text-slate-500">This is the thought process behind classification.</p>


      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 4.10 Before We Study Rule 1</h3>
      <p>Now that you understand:</p>
      <ul>
        <li>What a medical device is.</li>
        <li>Why risk matters.</li>
        <li>The essential terminology.</li>
        <li>How regulators think.</li>
      </ul>
      <p><strong>You are finally ready to study the First Schedule.</strong></p>
      <p>From the next chapter onward, we will study Rule 1 to Rule 16, one rule at a time. For each rule, we will follow the same structure:</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mb-6 text-sm">
        <li>Official regulatory concept (explained in simple language)</li>
        <li>Why this rule exists</li>
        <li>Step-by-step explanation</li>
        <li>Decision tree & Flowchart</li>
        <li>Real-life examples</li>
        <li>Common misconceptions</li>
        <li>Special and combination devices covered by the rule</li>
        <li>Practice classification exercises</li>
        <li>Key learning points</li>
      </ul>
      <p className="font-medium text-slate-800 bg-amber-50 border border-amber-200 p-4 rounded-lg">
        This approach will help the reader understand not just what the classification is, but why it is assigned, making the handbook useful for students, manufacturers, and regulatory professionals alike.
      </p>

    </div>
  );
}
