import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Target, Search, FileText, Globe, AlertTriangle, GitBranch, Lightbulb, Check, X, Users, MapPin } from 'lucide-react';

export default function Chapter25() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 25</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Understanding Intended Purpose</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "The Heart of Medical Device Classification"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Understand what Intended Purpose means.</li>
          <li>Learn why it is the most important concept in medical device regulation.</li>
          <li>Understand how regulators determine Intended Purpose.</li>
          <li>Learn where Intended Purpose is found.</li>
          <li>Understand why identical products may have different classifications.</li>
          <li>Learn common mistakes manufacturers make.</li>
          <li>Understand how marketing claims can change classification.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.1 Imagine Two Identical Chairs</h3>
      <p>Imagine entering a furniture shop. You see two chairs. Both look identical. Same colour. Same size. Same material. Same manufacturer.</p>
      <p>Would you say they are the same product? Most people would say Yes.</p>
      <p>Now let's read their labels.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Chair A</p>
          <p className="text-sm font-semibold text-blue-600 m-0 mb-1">"Office Chair"</p>
          <p className="text-sm text-slate-600 m-0"><strong>Purpose:</strong> For office work.</p>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-lg shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Chair B</p>
          <p className="text-sm font-semibold text-blue-600 m-0 mb-1">"Patient Transfer Chair"</p>
          <p className="text-sm text-slate-600 m-0"><strong>Purpose:</strong> For transporting hospital patients.</p>
        </div>
      </div>
      
      <p>Suddenly, they are no longer the same product.</p>
      <p>Why? Because their purpose is different.</p>
      <p className="font-bold text-slate-800">Medical devices work exactly the same way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Target className="w-6 h-6 text-blue-500" /> 25.2 What Does "Intended Purpose" Mean?</h3>
      <p>In simple language, Intended Purpose means:</p>
      <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-xl font-bold text-blue-900 m-0">What the manufacturer says the device is designed to do.</p>
      </div>
      <p>Notice something important. It is not what the doctor thinks, or what the patient wants, or what another company says.</p>
      <p className="font-bold text-slate-800">It is what the manufacturer claims.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500" /> 25.3 Everyday Analogy</h3>
      <p>Imagine buying a ladder. The manufacturer says "For climbing."</p>
      <p>Now imagine someone uses the ladder as a bridge across a river. Does that change the manufacturer's intended purpose? <strong>No.</strong></p>
      <p>The manufacturer designed it for climbing. The user's unusual use does not change its intended purpose.</p>
      <p className="font-medium text-slate-800">Medical devices are regulated the same way.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.4 Why Is Intended Purpose So Important?</h3>
      <p>Every regulatory decision begins here. The regulator asks "What does the manufacturer claim this device is intended to do?"</p>
      <p>Only after answering that question can the regulator decide:</p>
      <ul className="mb-4">
        <li>whether it is a medical device,</li>
        <li>which classification rule applies,</li>
        <li>what evidence is required,</li>
        <li>what testing is needed,</li>
        <li>what clinical evidence is expected.</li>
      </ul>
      <p className="font-bold text-slate-800">Without Intended Purpose, none of these decisions can be made correctly.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Search className="w-6 h-6 text-indigo-500" /> 25.5 Where Does the Regulator Find Intended Purpose?</h3>
      <p>Many beginners think "There must be one official document." Actually, the regulator looks at all relevant manufacturer information.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include:</p></div>
      <ul className="mb-4 grid grid-cols-2 md:grid-cols-3">
        <li>Product Label</li>
        <li>Instructions for Use (IFU)</li>
        <li>User Manual</li>
        <li>Product Brochure</li>
        <li>Technical Documentation</li>
        <li>Catalogue</li>
        <li>Website</li>
        <li>Advertising Material</li>
        <li>Packaging</li>
        <li>Product Claims</li>
        <li>Training Material</li>
      </ul>
      <p className="font-medium text-slate-800">All of these help establish the manufacturer's intended purpose.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><FileText className="w-6 h-6 text-emerald-500" /> 25.6 The Label Speaks</h3>
      <p>Imagine reading a product label. It says:</p>
      <div className="bg-slate-100 border-l-4 border-slate-500 p-4 my-4 font-mono text-sm">
        "Sterile Disposable Urinary Catheter<br/><br/>
        Intended for temporary urinary drainage."
      </div>
      <p>Immediately, the regulator learns: what the product is, where it is used, how it is used, why it exists.</p>
      <p className="font-bold text-slate-800">One sentence can determine the entire classification process.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.7 The IFU (Instructions for Use)</h3>
      <p>The IFU often contains much more detail. It may explain:</p>
      <ul className="mb-4 grid grid-cols-2">
        <li>patient population</li>
        <li>intended user</li>
        <li>indications</li>
        <li>contraindications</li>
        <li>duration of use</li>
        <li>warnings</li>
        <li>precautions</li>
        <li>operating instructions</li>
      </ul>
      <p className="font-medium text-slate-800">For regulators, the IFU is one of the most valuable documents.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Globe className="w-6 h-6 text-blue-400" /> 25.8 The Website Can Change Everything</h3>
      <p>Imagine a manufacturer selling a software application.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Website Version 1</p>
          <p className="text-sm text-slate-600 m-0 mb-2 italic">"Stores patient appointments."</p>
          <p className="text-sm font-semibold text-slate-500 m-0">Not a medical purpose.</p>
        </div>
        <div className="border border-blue-200 rounded-lg p-5 bg-blue-50 shadow-sm">
          <p className="font-bold text-blue-900 m-0 mb-2">Website Version 2</p>
          <p className="text-sm text-blue-800 m-0 mb-2 italic">"Helps detect early heart rhythm abnormalities."</p>
          <p className="text-sm font-semibold text-blue-600 m-0">Now the software performs a medical purpose.</p>
        </div>
      </div>
      <p>Without changing the software, the manufacturer changed the regulatory position simply by changing the claim.</p>
      <p className="font-bold text-slate-800">This demonstrates the power of intended purpose.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.9 Marketing Claims Matter</h3>
      <p>Imagine selling sunglasses.</p>
      <div className="space-y-4 my-6">
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Advertisement A</p>
          <p className="text-sm text-slate-600 m-0 mb-1 italic">"Fashion sunglasses."</p>
          <p className="text-sm font-semibold text-slate-500 m-0">Not a medical device.</p>
        </div>
        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50 shadow-sm">
          <p className="font-bold text-blue-900 m-0 mb-1">Advertisement B</p>
          <p className="text-sm text-blue-800 m-0 mb-1 italic">"Relieves migraine headaches."</p>
          <p className="text-sm font-semibold text-blue-600 m-0">Now a medical claim has been made.</p>
        </div>
      </div>
      <p>The regulatory implications become completely different.</p>
      <p className="font-medium text-slate-800">Marketing claims are therefore reviewed carefully by regulators.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.10 Two Identical Products—Different Classification</h3>
      <p>Imagine two thermometers. Physically, they are identical.</p>
      <ul className="mb-4">
        <li><strong>Thermometer A:</strong> Measures room temperature. <span className="text-slate-500 font-semibold">(Not a medical device)</span></li>
        <li><strong>Thermometer B:</strong> Measures human body temperature for clinical diagnosis. <span className="text-blue-600 font-semibold">(Medical device)</span></li>
      </ul>
      <p className="font-bold text-slate-800">Same product. Different intended purpose. Different regulation.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.11 Accessories</h3>
      <p>Imagine an ECG machine. Now imagine its patient cable. The cable alone cannot diagnose anything. Yet, without it, the ECG cannot function properly.</p>
      <p>Some accessories are themselves regulated because they are specifically intended to enable a medical device to perform its intended purpose.</p>
      <p className="font-medium text-slate-800">Always evaluate the accessory according to its own intended use and the applicable regulatory provisions.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Users className="w-6 h-6 text-purple-500" /> 25.12 Intended User</h3>
      <p>Regulators also ask "Who is expected to use the device?"</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">include: Surgeon, Nurse, Dentist, Laboratory Technician, Patient, Home Caregiver.</p></div>
      <p>Why does this matter?</p>
      <p>Imagine designing an MRI scanner for radiologists, and a blood glucose meter for home use.</p>
      <p>The users have completely different levels of training. This affects: usability, labeling, instructions, risk management.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.13 Intended Patient Population</h3>
      <p>Now ask "Who will use the device?" Adults? Children? Newborn babies? Pregnant women? Critically ill patients?</p>
      <p>Imagine giving the same medicine dose to an adult and a newborn baby. Obviously, the risks are different.</p>
      <p className="font-medium text-slate-800">Medical devices follow the same principle.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><MapPin className="w-6 h-6 text-rose-500" /> 25.14 Intended Environment</h3>
      <p>Where will the device be used? Examples: Hospital, ICU, Operating Theatre, Ambulance, Home, Dental Clinic, Laboratory.</p>
      <p>Imagine a ventilator. One model is designed for ICU. Another is designed for emergency transport.</p>
      <p className="font-medium text-slate-800">Although both support breathing, their intended environments differ, which influences design requirements.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.15 Off-Label Use</h3>
      <p>Sometimes, a doctor uses a medical device for a purpose that the manufacturer never intended. This is called <strong>off-label use</strong>.</p>
      <div className="bg-emerald-50 border border-emerald-200 p-5 my-6 rounded-xl shadow-sm"><strong className="text-emerald-800 flex items-center gap-2 text-lg">📝 Example</strong><p className="mt-2 mb-0 text-emerald-700">A device approved for adults is used in children because the doctor believes it is clinically appropriate.</p></div>
      <p>Does this change the manufacturer's intended purpose? <strong>No.</strong></p>
      <p className="font-bold text-slate-800">The manufacturer's intended purpose remains unchanged.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.16 Can Intended Purpose Change?</h3>
      <p><strong>Yes.</strong></p>
      <p>Suppose a manufacturer originally markets software that stores patient records.</p>
      <p>Later, the manufacturer updates the product and now claims "Automatically detects diabetic retinopathy."</p>
      <p>The software has changed its intended medical purpose. This may change: classification, required evidence, regulatory obligations, applicable standards.</p>
      <p className="font-medium text-slate-800">Manufacturers should carefully assess regulatory implications whenever intended purpose changes.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-red-500" /> 25.17 Common Manufacturer Mistakes</h3>
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-6">
        <ul className="space-y-2 m-0 text-red-900 list-none pl-0">
          <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500 shrink-0"/> <strong>Mistake 1:</strong> Changing website claims without regulatory review.</li>
          <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500 shrink-0"/> <strong>Mistake 2:</strong> Advertising benefits not supported by evidence.</li>
          <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-500 shrink-0"/> <strong>Mistake 3:</strong> Writing vague Intended Purpose statements.</li>
          <li className="flex items-start gap-2"><X className="w-4 h-4 text-red-500 shrink-0 mt-1"/> <div><strong>Mistake 4:</strong> Using inconsistent wording across Label, IFU, Website, Brochure.</div></li>
        </ul>
        <p className="mt-4 mb-0 text-red-800 font-bold text-center">Inconsistencies create regulatory problems.</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.18 Real-Life Examples</h3>
      <div className="space-y-4 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
             <p className="font-bold text-slate-800 m-0 mb-1">Example 1: Wheelchair</p>
             <p className="text-sm text-slate-600 m-0 mb-1"><strong>Purpose:</strong> Assist patient mobility.</p>
             <p className="text-sm font-bold text-blue-600 m-0">Medical device.</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
             <p className="font-bold text-slate-800 m-0 mb-1">Example 2: Office Chair</p>
             <p className="text-sm text-slate-600 m-0 mb-1"><strong>Purpose:</strong> Office seating.</p>
             <p className="text-sm font-bold text-slate-500 m-0">Not a medical device.</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
             <p className="font-bold text-slate-800 m-0 mb-1">Example 3: Infrared Thermometer</p>
             <p className="text-sm text-slate-600 m-0 mb-1">Measures body temperature.</p>
             <p className="text-sm font-bold text-blue-600 m-0">Medical device.</p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
             <p className="font-bold text-slate-800 m-0 mb-1">Example 4: Industrial Infrared Thermometer</p>
             <p className="text-sm text-slate-600 m-0 mb-1">Measures machinery temperature.</p>
             <p className="text-sm font-bold text-slate-500 m-0">Not a medical device.</p>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-1">Example 5: Hospital Bed</p>
          <p className="text-sm text-slate-600 m-0">If specifically intended to support patient care and medical treatment, it may be regulated as a medical device. A standard household bed, designed only for sleeping, is not.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.19 The Golden Rule</h3>
      <p>Whenever you become confused, ask one question.</p>
      <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-lg font-bold text-blue-900 m-0">"What exactly does the manufacturer say this device is intended to do?"</p>
      </div>
      <p className="font-bold text-slate-800 text-center">That question solves most classification problems.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Check className="w-6 h-6 text-emerald-500" /> 25.20 The Intended Purpose Checklist</h3>
      <p>Before classifying any device, confirm:</p>
      <ul className="mb-6 space-y-2">
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> What medical condition or purpose is addressed?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> Who is the intended patient?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> Who is the intended user?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> Where will the device be used?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> How is the device intended to work?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> For how long is it intended to be used?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> What claims has the manufacturer made?</li>
        <li className="flex items-start gap-2"><Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" /> Are the claims consistent across all documentation?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><GitBranch className="w-6 h-6 text-emerald-600"/> 25.21 Decision Tree</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  N1["Start"]
  N2["Apply MDR Rules"]
  N1 --> N2
`} />
</div>
      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 25.22 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine buying a car. One model is advertised as "A family car." Another, built on the same platform, is advertised as "An ambulance."</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Although many components are identical, their intended purposes—and therefore the design, equipment, and regulatory expectations—are very different.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Medical devices follow exactly the same principle.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "The regulator classifies the manufacturer's intended purpose—not the product's appearance."</p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3">25.23 Practice Exercise</h3>
      <p>For each product, identify the intended purpose before thinking about classification.</p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Product</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Intended Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Digital body thermometer</td>
              <td className="border border-slate-200 px-4 py-2">Measure human body temperature</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Industrial thermometer</td>
              <td className="border border-slate-200 px-4 py-2">Measure machine temperature</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG machine</td>
              <td className="border border-slate-200 px-4 py-2">Record the heart's electrical activity for diagnosis or monitoring</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion pump</td>
              <td className="border border-slate-200 px-4 py-2">Deliver fluids or medicines at a controlled rate</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Drug-eluting stent</td>
              <td className="border border-slate-200 px-4 py-2">Keep a blood vessel open while providing controlled release of a medicinal substance</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Condom</td>
              <td className="border border-slate-200 px-4 py-2">Contraception and/or reduction of STI transmission</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Steam sterilizer</td>
              <td className="border border-slate-200 px-4 py-2">Sterilize reusable medical devices</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">MRI scanner</td>
              <td className="border border-slate-200 px-4 py-2">Produce diagnostic images of internal body structures</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Intended Purpose is the foundation of medical device regulation.</li>
          <li>Regulators determine intended purpose by reviewing the manufacturer's documentation and claims.</li>
          <li>Two identical-looking products may have completely different regulatory classifications because of different intended purposes.</li>
          <li>Marketing claims, labels, IFUs, websites, and technical documentation must be consistent.</li>
          <li>Off-label use by a healthcare professional does not change the manufacturer's intended purpose.</li>
          <li>Before applying any classification rule, always determine the intended purpose first.</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10 shadow-sm">
        <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Preview of Chapter 26 – When More Than One Rule Applies</h3>
        <p className="text-sm text-blue-800 mb-3">In the next chapter, we will answer one of the most difficult questions in regulatory affairs:</p>
        <p className="text-sm text-blue-800 italic font-semibold mb-3">"What happens when a medical device seems to fit more than one classification rule?"</p>
        <p className="text-sm text-blue-800 mb-0">Using real-world examples such as drug-eluting stents, infusion pumps, AI software, powered surgical tables, and combination products, we will learn how regulators determine which rule takes precedence and how to document the reasoning behind the final classification.</p>
      </div>

    </div>
  );
}
