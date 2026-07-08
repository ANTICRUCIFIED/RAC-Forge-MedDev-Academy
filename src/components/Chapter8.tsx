import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Check, X, Droplet, GitBranch, Lightbulb, AlertCircle, RefreshCw, Filter } from 'lucide-react';

export default function Chapter8() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 3 – Non-Invasive Medical Devices That Modify Blood or Other Liquids Before Administration</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Device Never Touches the Inside of the Body, Yet It Can Change What Goes Inside."
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand the meaning of modification.</li>
          <li>Differentiate Rule 2 from Rule 3.</li>
          <li>Learn why modifying blood increases risk.</li>
          <li>Understand why dialysis equipment belongs here.</li>
          <li>Learn the regulatory thinking behind blood-processing devices.</li>
          <li>Understand why filtration is treated differently from simple storage.</li>
          <li>Understand why some devices become Class C while others remain lower risk.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.1 First, Let's Compare Rule 2 and Rule 3</h3>
      <p>Many beginners confuse these two rules. The difference is actually very simple.</p>
      
      <div className="grid sm:grid-cols-2 gap-6 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Rule 2</h5>
          <p className="text-sm text-slate-600 mb-2">Imagine carrying drinking water from your kitchen to your dining table. You simply carry it. You do not change it.</p>
          <p className="text-sm font-bold text-indigo-700 m-0">That is Rule 2 thinking.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
          <h5 className="font-bold text-slate-800 mb-2 mt-0">Rule 3</h5>
          <p className="text-sm text-slate-600 mb-2">Now imagine you take that same water and boil it, filter it, cool it, purify it, before someone drinks it. Now, you have changed it.</p>
          <p className="text-sm font-bold text-indigo-700 m-0">That is Rule 3 thinking.</p>
        </div>
      </div>
      
      <div className="bg-blue-50 py-3 px-5 rounded-lg border border-blue-200 mb-6">
        <p className="font-semibold text-blue-900 m-0 text-center">The important difference is: <strong>Rule 2 transports or stores. Rule 3 changes or modifies.</strong></p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><RefreshCw className="w-6 h-6 text-indigo-500" /> 8.2 What Does "Modify" Mean?</h3>
      <p>The word modify sounds technical. In very simple language, it means:</p>
      <blockquote className="border-l-4 border-indigo-500 bg-indigo-50 text-indigo-900 italic font-medium p-4 rounded-r-lg my-4">
        To change something before it is used.
      </blockquote>
      <p>You may filter it, separate it, warm it, cool it, oxygenate it, or remove unwanted components, before giving it to the patient.</p>
      
      <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6">
        <h4 className="font-bold text-slate-800 mb-2 mt-0">Everyday Example: Making Tea</h4>
        <p className="text-sm text-slate-700 m-0 mb-3">Imagine making tea. You start with water. Then you boil it, add tea leaves, filter it, add milk.</p>
        <p className="text-sm text-slate-700 m-0">The liquid has changed. You modified it. Medical devices sometimes do something similar.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.3 Why Is This More Risky?</h3>
      <p>Imagine two hospitals.</p>
      
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Hospital A</h5>
          <p className="text-sm text-slate-600 mb-0">Stores blood. Nothing happens to the blood. It is simply stored.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <h5 className="font-bold text-slate-800 mb-2 mt-0 text-lg">Hospital B</h5>
          <p className="text-sm text-slate-600 mb-0">Filters blood, warms blood, removes white blood cells, adds oxygen, or performs dialysis. Now, the blood itself is being changed.</p>
        </div>
      </div>
      <p>If something goes wrong, the patient's health may be seriously affected. That is why Rule 3 generally involves a higher level of regulatory concern than simple storage or transportation.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Filter className="w-6 h-6 text-emerald-500" /> 8.4 Think About a Water Purifier</h3>
      <p>Imagine a water bottle. It stores water. Simple.</p>
      <p>Now imagine a water purifier. It actively changes the water. It removes impurities. If the purifier fails, the water may become unsafe. The purifier therefore has a much greater influence on the quality of the water.</p>
      <p className="font-medium text-slate-800">Rule 3 devices work in the same way. They actively influence the substance before it reaches the patient.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.5 Dialysis – The Best Example</h3>
      <p>Suppose a person's kidneys stop working. Normally, healthy kidneys remove waste from the blood. When they fail, a dialysis machine performs part of this function.</p>
      <p><strong>Does the dialysis filter enter the patient's body?</strong> No. It stays outside.</p>
      <p><strong>So why is it important?</strong> Because the patient's blood flows through the filter. The filter removes waste products. It changes the blood. Then the cleaned blood returns to the patient.</p>
      <p className="font-semibold text-blue-800">The filter never entered the body, but it directly influenced the patient's blood. This is exactly the type of thinking behind Rule 3.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.6 Blood Warmers</h3>
      <p>Imagine receiving a large blood transfusion. Very cold blood may not be ideal in certain clinical situations. Some devices warm blood before it reaches the patient.</p>
      <p>The blood passes through the warmer. The warmer changes its temperature. Again, the device has modified the blood.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.7 Blood Filters</h3>
      <p>Some blood contains unwanted particles. A blood filter removes these particles.</p>
      <p>Think about making coffee. The coffee filter separates coffee grounds from the liquid. Similarly, a blood filter separates unwanted material from blood.</p>
      <p className="font-medium">Again, the blood has been modified.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.8 Blood Oxygenators</h3>
      <p>During some heart surgeries, special equipment temporarily adds oxygen to blood outside the body. The oxygenator changes the blood before it returns to the patient. This is a much more critical function than simply storing blood.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.9 Plasma Separation</h3>
      <p>Blood contains several components. Sometimes, doctors need only one part. Special devices separate plasma, red blood cells, platelets, or other components.</p>
      <p className="font-medium">Again, the blood is modified.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.10 Why Modification Increases Risk</h3>
      <p>Imagine a bank locker. It stores money. Simple.</p>
      <p>Now imagine someone opens the locker, counts the money, sorts the money, changes the money, and returns it. Many more things can go wrong.</p>
      <p>Exactly the same logic applies here. Simply storing blood is one thing. Changing blood is another. Every additional processing step introduces additional opportunities for error.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.11 Why Filtration Is Usually Different</h3>
      <p>Many people ask, <em>"Filtering seems simple. Why is it treated differently?"</em></p>
      <p>Imagine a coffee filter. If the filter tears, coffee grounds pass into your cup.</p>
      <p>Now imagine a blood filter. If the filter fails, undesired material may pass to the patient. The consequences are much more serious.</p>
      <p className="font-semibold text-slate-800">Therefore, medical filtration is not treated the same way as household filtration.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.12 Real Hospital Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Dialysis Filter</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Removes waste from blood. Blood is modified.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 3 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Blood Warmer</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Changes blood temperature.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 3 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Leukocyte Removal Filter</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Removes certain white blood cells. Blood is modified.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 3 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: Blood Oxygenator</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Adds oxygen to blood outside the body.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 3 concept.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 5: Plasma Separator</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Separates blood into components. Again, blood is modified.</p>
           <p className="text-sm font-bold text-indigo-700 m-0">Rule 3 concept.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.13 Combination Systems</h3>
      <p>Modern hospitals increasingly use systems that combine multiple functions. Consider a dialysis machine. It contains: Pumps, Tubing, Filters, Sensors, Pressure monitors, Air detectors, Software, Heating systems, Alarm systems.</p>
      <p>To a patient, it looks like one machine. From a regulatory perspective, it is a combination of many components working together.</p>
      <p className="font-bold text-blue-800 bg-blue-50 p-4 rounded-lg border border-blue-200">The important point is this: The overall intended medical purpose determines how the system is classified. Regulators assess the device as a whole, while also considering the role of its individual components where relevant.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 8.14 Common Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "It stays outside the body, so it must be low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "Filtering is the same as storing."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. Filtering changes the substance.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "Dialysis machines clean themselves."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. The device performs a medical function on the patient's blood.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "Blood modification is just another transport process."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Wrong. Transport moves. Modification changes.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 8.15 Decision Tree</h3>
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
  N6["Does it simply transport or store?"]
  N5 --> N6
  N6 -->|YES| N7["See Rule 2 "]
  N8["↓"]
  N6 -->|NO| N8
  N9["Does it modify blood, body liquids, or other substances before administration?"]
  N8 --> N9
  N9 -->|YES| N10{"Rule 3: Does the modification consist only of filtration, centrifugation, or exchanges of gas/heat?"}
  N10 -->|YES| N10A["Rule 3 (Class B)"]
  N10 -->|NO| N10B["Rule 3 (Class C)"]
  N9 -->|NO| N11["Consider other rules."]
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 8.16 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Remember these two sentences:</p>
        <p className="text-lg font-bold text-amber-900 m-0">Rule 2: "Carry it."</p>
        <p className="text-lg font-bold text-amber-900 m-0 mb-3">Rule 3: "Change it."</p>
        <p className="text-sm text-amber-800 m-0">If the device merely moves or stores a substance, think Rule 2. If the device changes the substance before it reaches the patient, think Rule 3.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">8.17 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 3 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Dialysis filter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Removes waste from blood</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood warmer</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Changes blood temperature</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood oxygenator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Adds oxygen to blood</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Plasma separator</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Separates blood components</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Leukocyte removal filter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Removes selected blood components</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood storage bag</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Stores blood; does not modify it</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">IV administration tubing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Channels fluid; does not modify it</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Wheelchair</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">External support device</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 3 is about modifying, not merely transporting or storing.</li>
          <li>Modification means <strong>changing a substance</strong> before it is administered to the patient.</li>
          <li>Blood-processing devices receive closer regulatory attention because they directly influence what enters the patient's body.</li>
          <li>A device does not need to enter the body to have a major impact on patient safety.</li>
          <li>The key question is: <em className="text-blue-400">"Does this device simply move the substance, or does it change the substance?"</em> If it changes the substance, Rule 3 becomes relevant.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">Preview of the Next Chapter</h4>
           <p className="text-sm text-slate-300 m-0 mb-2">In Chapter 9, we will study <strong>Rule 4</strong>, which introduces another important idea: <strong className="text-blue-400">Healthy skin protects the body. Injured skin does not.</strong></p>
           <p className="text-sm text-slate-300 m-0">You will learn why a simple adhesive bandage and an advanced burn dressing may be classified differently, even though both are applied from the outside. We will also discuss wound healing, deep wounds, burns, chronic ulcers, hydrogel dressings, foam dressings, and advanced wound-care technologies in language that anyone can understand.</p>
        </div>
      </div>

    </div>
  );
}
