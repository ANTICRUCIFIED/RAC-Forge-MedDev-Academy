import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, ShieldAlert, AlertCircle, Shield, Activity, GitBranch, Lightbulb, Check, X } from 'lucide-react';

export default function Chapter9() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Rule 4 – Non-Invasive Medical Devices Intended to Contact Injured Skin</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "A Small Cut Is Very Different from a Severe Burn"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After studying this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand why injured skin is treated differently from healthy skin.</li>
          <li>Learn what Rule 4 is trying to protect.</li>
          <li>Understand different types of wounds.</li>
          <li>Learn how wounds heal.</li>
          <li>Understand why different dressings are classified differently.</li>
          <li>Learn how intended use affects classification.</li>
          <li>Understand advanced wound care in simple language.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.1 Imagine Falling Off a Bicycle</h3>
      <p>Imagine a child falls while riding a bicycle. He gets a small scrape on his knee. There is a little bleeding.</p>
      <p>His mother washes the wound, applies an antiseptic, and places a small adhesive bandage over it. Within a few days, the wound heals.</p>
      
      <p>Now imagine another patient. This patient suffers severe burns over a large part of the body. The doctor cannot simply place a small adhesive bandage over the injury.</p>
      <p>Instead, special burn dressings, infection-control products, and advanced wound-care technologies are required.</p>
      
      <p className="font-semibold text-blue-800">Both patients have injured skin. Yet, their situations are completely different. This is why Rule 4 exists.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Shield className="w-6 h-6 text-emerald-500" /> 9.2 Why Is Skin So Important?</h3>
      <p>In earlier chapters, we learned that healthy skin protects the body. Think of skin as the security wall around a house. When the wall is intact, outsiders cannot easily enter.</p>
      <p>But if the wall develops a large hole, the house becomes vulnerable. Our skin works exactly the same way.</p>
      <p>Healthy skin protects us against bacteria, viruses, dirt, chemicals, dehydration.</p>
      <p className="font-medium">When the skin is damaged, that natural protection is weakened or lost.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.3 What Is an Injured Skin?</h3>
      <p>An injured skin means <strong>the skin has lost its normal protective structure</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include:</p></div>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>cuts,</li>
        <li>burns,</li>
        <li>surgical wounds,</li>
        <li>ulcers,</li>
        <li>abrasions,</li>
        <li>lacerations,</li>
        <li>pressure sores.</li>
      </ul>
      <p className="font-semibold text-slate-800">In all these situations, the body's natural protective barrier has been broken.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.4 Why Does This Increase Risk?</h3>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6 text-sm text-amber-900">
        <p className="m-0 mb-2">Imagine drinking water from a sealed bottle. The water is protected.</p>
        <p className="m-0 mb-2">Now imagine the bottle cap is removed and the bottle is left open for several days. Dust, bacteria, and insects may enter.</p>
        <p className="m-0 mb-2">The same thing happens when skin is damaged. A wound creates a pathway through which microorganisms can enter the body. This increases the risk of infection.</p>
        <p className="m-0 font-bold">That is why wound-care devices deserve closer regulatory attention than devices that merely touch healthy skin.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.5 What Does Rule 4 Cover?</h3>
      <p>Rule 4 deals with non-invasive medical devices that are intended to come into contact with injured skin.</p>
      <p>These devices do not enter the body, but they interact with tissue that has already lost its normal protective barrier.</p>
      <p>Because wounds differ greatly in severity, Rule 4 also considers what the dressing is intended to do.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.6 Understanding Different Types of Wounds</h3>
      <p>Not all wounds are the same. Let's understand them one by one.</p>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Simple Wound</h5>
           <p className="text-sm m-0 text-slate-600 mb-2">Examples: Small cut, Minor scrape, Shallow abrasion.</p>
           <p className="text-sm text-slate-800 m-0">These wounds usually heal naturally with basic protection.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Surgical Wound</h5>
           <p className="text-sm text-slate-600 m-0 mb-2">A surgeon intentionally makes an incision during an operation. Although this is also a wound, it is created under controlled sterile conditions.</p>
           <p className="text-sm text-slate-800 m-0">The wound still needs protection while healing.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Burn Wound</h5>
           <p className="text-sm text-slate-600 m-0 mb-2">Burns damage the skin using heat, chemicals, electricity, radiation.</p>
           <p className="text-sm text-slate-800 m-0">Severe burns may destroy several layers of skin, making infection much more likely.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Chronic Wound</h5>
           <p className="text-sm text-slate-600 m-0 mb-2">Some wounds do not heal quickly. Examples: Diabetic foot ulcers, Pressure ulcers (bed sores), Venous leg ulcers.</p>
           <p className="text-sm text-slate-800 m-0">These wounds may remain open for weeks or months. They often require specialized wound-care products.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Activity className="w-6 h-6 text-indigo-500" /> 9.7 How Does a Wound Heal?</h3>
      <p>Our body repairs wounds in stages. Imagine repairing a damaged road. First, workers stop further damage. Then, they clean the area. Next, they fill the hole. Finally, they rebuild the road surface.</p>
      <p>The body behaves in a similar way.</p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
         <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg text-center">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Stage 1</h5>
            <p className="text-sm font-semibold mb-1">Stop Bleeding</p>
            <p className="text-xs text-slate-600 m-0">The body forms a clot.</p>
         </div>
         <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg text-center">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Stage 2</h5>
            <p className="text-sm font-semibold mb-1">Clean the Wound</p>
            <p className="text-xs text-slate-600 m-0">White blood cells remove bacteria and damaged tissue.</p>
         </div>
         <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg text-center">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Stage 3</h5>
            <p className="text-sm font-semibold mb-1">Build New Tissue</p>
            <p className="text-xs text-slate-600 m-0">New skin cells begin growing.</p>
         </div>
         <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg text-center">
            <h5 className="font-bold text-slate-800 mb-2 mt-0">Stage 4</h5>
            <p className="text-sm font-semibold mb-1">Strengthen the Skin</p>
            <p className="text-xs text-slate-600 m-0">The wound gradually closes and becomes stronger.</p>
         </div>
      </div>
      <p className="font-medium text-slate-800">Different wound dressings help during different stages of this healing process.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.8 What Is a Wound Dressing?</h3>
      <p>A wound dressing is a medical device placed over injured skin to help protect the wound and support healing.</p>
      <p>A dressing may:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>protect the wound from contamination,</li>
        <li>absorb wound fluid,</li>
        <li>maintain an appropriate healing environment,</li>
        <li>reduce pain,</li>
        <li>support tissue repair.</li>
      </ul>
      <p className="font-semibold text-blue-800">Not every dressing performs the same function.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.9 Simple Dressings</h3>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">Adhesive bandages, Gauze pads, Cotton dressings.</p></div>
      <p>Their main purpose is to <strong>protect the wound and keep it clean.</strong></p>
      <p>They generally do not actively influence the healing process.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.10 Advanced Dressings</h3>
      <p>Modern wound care is much more sophisticated. Examples include:</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
        <li>Hydrogel dressings</li>
        <li>Hydrocolloid dressings</li>
        <li>Foam dressings</li>
        <li>Alginate dressings</li>
        <li>Antimicrobial dressings</li>
        <li>Silicone dressings</li>
      </ul>
      <p>These products do much more than simply cover the wound. They may maintain moisture, absorb excess wound fluid, help remove dead tissue, reduce bacterial growth, support faster healing.</p>
      <p className="font-semibold text-blue-800 bg-indigo-50 p-4 rounded-lg border border-indigo-200">Because their intended purpose is more complex, they may be classified differently from simple protective dressings.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.11 Think About Gardening</h3>
      <p>Imagine planting a young tree. One method is simply to place soil around it.</p>
      <p>Another method is to provide fertilizer, control moisture, add nutrients, protect against insects.</p>
      <p>Both methods protect the plant, but the second method actively influences growth.</p>
      <p className="font-medium">Advanced wound dressings work in a similar way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.12 Negative Pressure Wound Therapy (NPWT)</h3>
      <p>One modern wound-care technique uses gentle suction. A special dressing is placed over the wound, and a pump applies controlled negative pressure.</p>
      <p>This helps remove excess fluid, improve blood flow, promote healing.</p>
      <p className="font-medium text-slate-800">Although the dressing remains outside the body, its intended function is much more sophisticated than a simple adhesive bandage.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.13 Why Does Intended Use Matter?</h3>
      <p>Imagine two pieces of gauze. One is sold simply to cover a small cut. The other is designed specifically to manage deep surgical wounds with heavy wound drainage.</p>
      <p>They may look similar. However, their intended uses are different.</p>
      <p className="font-bold text-slate-800">The intended purpose—not appearance—determines how regulators assess the device.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.14 Real Hospital Examples</h3>
      
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 1: Adhesive Bandage</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Protect a small cut.</p>
           <p className="text-sm font-bold text-slate-700 m-0">Simple wound protection.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 2: Burn Dressing</h5>
           <p className="text-sm m-0 text-slate-600 mb-1">Purpose: Protect extensive burn injuries, maintain moisture, reduce infection risk.</p>
           <p className="text-sm font-bold text-slate-700 m-0">More complex intended use.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 3: Hydrogel Dressing</h5>
           <p className="text-sm m-0 text-slate-600">Purpose: Maintain a moist environment to support healing.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 4: Foam Dressing</h5>
           <p className="text-sm m-0 text-slate-600">Purpose: Absorb wound exudate while protecting surrounding tissue.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
           <h5 className="font-bold text-slate-800 mb-1 mt-0">Example 5: Pressure Ulcer Dressing</h5>
           <p className="text-sm m-0 text-slate-600">Purpose: Support healing of chronic wounds.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.15 Combination Wound-Care Products</h3>
      <p>Some modern dressings combine several technologies. One dressing may include: absorbent foam, antimicrobial silver, silicone adhesive, moisture-control layer, protective backing film.</p>
      <p>Although it appears to be "just a dressing," it actually performs several functions simultaneously.</p>
      <p className="font-medium text-slate-800">Again, the overall intended medical purpose is what regulators evaluate.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertCircle className="w-6 h-6 text-amber-500"/> 9.16 Common Mistakes</h3>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 1: "All bandages are the same."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Different wound-care products have different intended purposes.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 2: "If it stays outside the body, it must be low risk."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Devices used on serious wounds may require greater regulatory scrutiny than devices used only on intact skin.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 3: "A dressing only covers the wound."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. Many modern dressings actively support wound healing.</p>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-red-600 m-0 mb-1">Mistake 4: "A large dressing is always higher risk than a small one."</p>
          <p className="text-sm text-slate-600 m-0"><strong className="text-green-600">Correction:</strong> Incorrect. The intended use and the nature of the wound are far more important than size.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 9.17 Decision Tree</h3>
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
  N6["Does it contact injured skin?"]
  N5 --> N6
  N6 -->|NO| N7["See Rules 1, 2, 3"]
  N8["↓"]
  N6 -->|YES| N8
  N9["Is it intended simply to protect the wound?"]
  N8 --> N9
  N10["Or"]
  N9 --> N10
  N11["Is it intended to actively manage or support wound healing?"]
  N10 --> N11
  N12["↓"]
  N11 --> N12
  N13{"Rule 4: What is the severity of the wound?"}
  N13 -->|Acts only as a mechanical barrier for compression or absorption| N13A["Rule 4 (Class A)"]
  N13 -->|Manages the microenvironment of a wound| N13B["Rule 4 (Class B)"]
  N13 -->|Used for wounds that breach the dermis and heal only by secondary intent| N13C["Rule 4 (Class C)"]
  N12 --> N13
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 9.18 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine two umbrellas. One protects you during light rain. Another is designed to protect you during a severe storm. Both are umbrellas, but they are designed for different situations.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Similarly, two wound dressings may look alike, yet their intended purposes—and therefore their regulatory classifications—may differ.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">"The more critical the wound-care function, the more carefully regulators evaluate the device."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">9.19 Practice Exercise</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">Rule 4 Concept?</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Why?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Adhesive bandage</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Covers a simple wound</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Sterile gauze dressing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Protects injured skin</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Burn dressing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Intended for burn wounds</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hydrogel dressing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Supports wound healing</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Foam dressing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><Check className="inline w-5 h-5 text-green-600"/> Yes</td>
              <td className="border border-slate-200 px-4 py-2">Manages wound fluid</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Blood administration tubing</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Channels blood (Rule 2 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Dialysis filter</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Modifies blood (Rule 3 concept)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Wheelchair</td>
              <td className="border border-slate-200 px-4 py-2 text-center"><X className="inline w-5 h-5 text-red-600"/> No</td>
              <td className="border border-slate-200 px-4 py-2">Contacts intact skin only (Rule 1 concept)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Rule 4 concerns non-invasive devices intended to contact <strong>injured skin</strong>.</li>
          <li>Injured skin no longer provides the same protective barrier as healthy skin.</li>
          <li>Wounds differ in severity, and wound-care devices differ in purpose.</li>
          <li>A simple dressing and an advanced wound-management product are not automatically treated the same.</li>
          <li>As with every previous rule, <strong>intended use</strong> remains the most important factor in classification.</li>
        </ul>

        <div className="bg-slate-700 p-4 rounded-lg border border-slate-600">
           <h4 className="font-bold text-blue-400 mt-0 mb-2">End of the Non-Invasive Device Section</h4>
           <p className="text-sm text-slate-300 m-0 mb-3">With this chapter, we have completed the four rules dealing with non-invasive medical devices.</p>
           <p className="text-sm text-slate-300 m-0 mb-3">In the next major section, we move into an entirely different world: <strong className="text-blue-400">Invasive Medical Devices</strong>.</p>
           <p className="text-sm text-slate-300 m-0">These devices enter the body through natural openings or surgical procedures. Before studying Rules 5–8, we will first understand what it actually means for a device to enter the body, why duration of use (transient, short-term, and long-term) becomes critically important, and why regulators treat body orifices differently from surgical access. Once those concepts are clear, the invasive-device rules become much easier to understand.</p>
        </div>
      </div>

    </div>
  );
}
