import Mermaid from "./Mermaid";
import { ArrowDown, CornerDownRight, Map, GitBranch, ShieldCheck, CheckSquare, ListOrdered, FileSearch, Lightbulb, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export default function Chapter27() {
  const FlowArrow = () => <div className="text-center text-slate-400 my-1">↓</div>;

  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">CHAPTER 27</h2>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-2">Master Medical Device Classification Decision Trees</h2>
        <p className="m-0 font-medium text-blue-900 italic">
          "A Practical Roadmap for Classifying Any Medical Device"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mt-0 mb-3">Learning Objectives</h3>
      <div className="my-6 rounded-xl overflow-hidden shadow-md">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" alt="Medical concept illustration" className="w-full h-64 object-cover" />
      </div>

        <p className="mb-2">After completing this chapter, you will be able to:</p>
        <ul className="mt-0 mb-0 space-y-1">
          <li>Classify most medical devices systematically.</li>
          <li>Navigate all sixteen classification rules.</li>
          <li>Select the correct rule without guessing.</li>
          <li>Avoid common decision-making errors.</li>
          <li>Use practical flowcharts for daily regulatory work.</li>
          <li>Document the classification process consistently.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3 flex items-center gap-2"><Map className="w-6 h-6 text-emerald-500" /> 27.1 Why Decision Trees Matter</h3>
      <p>Imagine driving from Delhi to Mumbai. There are hundreds of roads.</p>
      <p>Without a map, you may reach the destination, or you may become completely lost.</p>
      <p className="font-bold text-slate-800">A decision tree is that map.</p>
      <p>Instead of memorising every rule, you simply answer one question at a time. Eventually, the correct rule becomes obvious.</p>

      <h3 className="text-xl font-semibold mt-8 mb-3">27.2 The Universal Classification Philosophy</h3>
      <p>Every classification starts with one question.</p>
      <p>Not: <span className="italic text-slate-500">"What class is this?"</span></p>
      <p>Instead, ask:</p>
      <div className="bg-indigo-50 border border-indigo-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-lg font-bold text-blue-900 m-0">"What is the manufacturer claiming this device is intended to do?"</p>
      </div>
      <p className="font-bold text-slate-800 text-center">Everything else follows from that answer.</p>

      {/* MASTER DECISION TREE */}
      <h3 className="text-xl font-semibold mt-10 mb-6 flex items-center gap-2"><GitBranch className="w-6 h-6 text-blue-600"/> 27.3 MASTER DECISION TREE</h3>
      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  START["Does it incorporate a medicinal substance?"] -->|YES| N1["Consider Rule 13 (Class D)"]
  N2["↓"]
  START -->|NO| N2
  N3["Is it intended for contraception or prevention of STI transmission?"]
  N2 --> N3
  N3 -->|YES| N4{"Rule 14"}
  N4 -->|Implant/Long-term| N4D["Class D"]
  N4 -->|Other| N4C["Class C"]
  N5["↓"]
  N3 -->|NO| N5
  N6["Does it clean, disinfect, rinse, or sterilize medical devices?"]
  N5 --> N6
  N6 -->|YES| N7{"Rule 15"}
  N7 -->|Invasive MDs| N7C["Class C"]
  N7 -->|Other| N7B["Class B"]
  N8["↓"]
  N6 -->|NO| N8
  N9["Does it specifically record diagnostic X-ray images?"]
  N8 --> N9
  N9 -->|YES| N10["Rule 16 (Class B)"]
  N11["27.7 Rule 1 (Class A)"]
  N9 --> N11
  N12["27.8 Rule 2 "]
  N11 --> N12
  N13["27.9 Rule 3 "]
  N12 --> N13
  N14["27.10 Rule 4 "]
  N13 --> N14
  N15["27.11 Rule 5 "]
  N14 --> N15
  N16["27.12 Rule 6 "]
  N15 --> N16
  N17["27.13 Rule 7 "]
  N16 --> N17
  N18["27.14 Rule 8 "]
  N17 --> N18
  N19["27.15 Rule 9 "]
  N18 --> N19
  N20["27.16 Rule 10 "]
  N19 --> N20
  N21["27.17 Rule 11 "]
  N20 --> N21
  N22["27.18 Rule 12 (Class A)"]
  N21 --> N22
  N23["27.19 Rule 13 (Class D)"]
  N22 --> N23
  N24["27.20 Rule 14 "]
  N23 --> N24
  N25["27.21 Rule 15 "]
  N24 --> N25
  N26["27.22 Rule 16 (Class B)"]
  N25 --> N26
`} />
</div>
      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><CheckSquare className="w-6 h-6 text-emerald-500" /> 27.23 Universal Classification Checklist</h3>
      <p>Before finalising any classification, ask yourself:</p>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6 shadow-sm">
        <ul className="space-y-3 m-0 pl-0 list-none">
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Is it truly a medical device?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">What is the intended purpose?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Is it active or non-active?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Does it enter the body?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Is it invasive?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">If invasive, how does it enter?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">How long does it remain in or on the body?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Does it diagnose, monitor, or treat?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Does it administer or remove substances?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Does it contain a medicinal substance?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Is it intended for contraception?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Does it sterilize or disinfect medical devices?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Does it specifically record X-ray images?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I read the complete applicable rule and its exceptions?</span></li>
          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> <span className="font-medium text-emerald-900">Have I documented my reasoning?</span></li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><ListOrdered className="w-6 h-6 text-indigo-500" /> 27.24 Common Classification Workflow Used by Regulatory Professionals</h3>
      <p>Experienced regulatory professionals generally follow this sequence:</p>
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-0 my-6 divide-y divide-slate-100">
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">1</div><p className="m-0 text-sm">Read the product label.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">2</div><p className="m-0 text-sm">Read the Instructions for Use (IFU).</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">3</div><p className="m-0 text-sm">Review the intended purpose.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">4</div><p className="m-0 text-sm">Determine whether the product meets the definition of a medical device.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">5</div><p className="m-0 text-sm">Decide whether it is active or non-active.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">6</div><p className="m-0 text-sm">Assess whether it is invasive or non-invasive.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">7</div><p className="m-0 text-sm">Determine the duration of use.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">8</div><p className="m-0 text-sm">Identify all potentially relevant classification rules.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">9</div><p className="m-0 text-sm font-medium">Apply the rule that most appropriately reflects the intended purpose and risk profile.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">10</div><p className="m-0 text-sm">Check whether any special rules (Rules 13–16) also apply.</p></div>
        <div className="p-3 flex gap-4 items-center"><div className="bg-indigo-100 text-indigo-700 font-bold rounded w-6 h-6 flex items-center justify-center shrink-0 text-sm">11</div><p className="m-0 text-sm">Document the complete rationale for the classification.</p></div>
      </div>
      <p className="font-medium text-slate-800">This systematic approach reduces errors and provides a clear record that can be reviewed by colleagues, auditors, or regulators.</p>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><FileSearch className="w-6 h-6 text-blue-500" /> 27.25 Classification Case Study</h3>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6 shadow-sm">
        <p className="font-bold text-blue-900 m-0 mb-4 text-lg">Product: Digital Infusion Pump</p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-blue-100">
            <span className="font-medium text-slate-700">Question 1: Medical Device?</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Yes</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-blue-100">
            <span className="font-medium text-slate-700">Question 2: Intended Purpose?</span>
            <span className="text-slate-600">Deliver medicines accurately.</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-blue-100">
            <span className="font-medium text-slate-700">Question 3: Active?</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Yes</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-blue-100">
            <span className="font-medium text-slate-700">Question 4: Therapy?</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Yes</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-2 border-b border-blue-100">
            <span className="font-medium text-slate-700">Question 5: Administers medicinal products?</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Yes</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
            <span className="font-bold text-blue-900">Applicable Rule</span>
            <span className="font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded">Rule 11</span>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm font-medium text-slate-500 italic">Document the reasoning.</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-amber-500"/> 27.26 The "Never Guess" Rule</h3>
      <p>One habit separates experienced regulatory professionals from beginners.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm">
          <p className="font-bold text-slate-800 m-0 mb-2">Beginners often ask:</p>
          <p className="text-slate-600 italic m-0">"I think this is Rule 8."</p>
        </div>
        <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50 shadow-sm">
          <p className="font-bold text-emerald-900 m-0 mb-2">Experienced professionals ask:</p>
          <p className="text-emerald-800 italic font-medium m-0">"Can I justify Rule 8 using the intended purpose, the First Schedule, and the manufacturer's documentation?"</p>
        </div>
      </div>
      <p className="font-bold text-slate-800 text-center">A classification decision should always be supported by evidence and reasoning—not by intuition.</p>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 27.27 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl my-6 text-center shadow-sm">
        <p className="text-amber-900 m-0 mb-3">Imagine assembling a jigsaw puzzle.</p>
        <p className="text-amber-900 m-0 mb-3">Looking at one piece tells you very little. When you connect all the pieces, the picture becomes clear.</p>
        <p className="text-amber-900 m-0 mb-3 font-medium">Medical device classification works the same way.</p>
        <p className="text-amber-900 m-0 mb-4">Each question—intended purpose, invasiveness, duration, energy source, and special characteristics—is one puzzle piece. When all the pieces fit together, the correct classification becomes much easier to identify.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic bg-white p-3 rounded shadow-sm">Remember: "Classification is a process of elimination guided by evidence—not a process of guessing."</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-0">
          <li>Classification should always follow a structured decision-making process.</li>
          <li>Start with the manufacturer's intended purpose.</li>
          <li>Determine whether the device is active or non-active.</li>
          <li>Evaluate whether it is non-invasive, invasive, surgically invasive, or implantable.</li>
          <li>Apply the appropriate classification rule and then check whether any special rules (Rules 13–16) also apply.</li>
          <li>Always document your reasoning with reference to the Medical Devices Rules, 2017 and the manufacturer's documentation.</li>
        </ul>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl p-6 mt-10 shadow-sm flex items-start gap-4">
        <FileText className="w-8 h-8 text-indigo-600 shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">End of Part VI – Applying the Classification Rules</h3>
          <p className="text-blue-800 mb-0 font-medium">At this point, the reader has moved beyond simply knowing the rules. They should now be able to apply them in a structured and defensible manner.</p>
        </div>
      </div>

    </div>
  );
}
