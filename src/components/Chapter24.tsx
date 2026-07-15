import React from 'react';
import Mermaid from './Mermaid';
import { Lightbulb } from 'lucide-react';

export default function Chapter24() {
  return (
    <div className="prose prose-slate max-w-none">
      <div className="bg-slate-800 text-white p-8 my-8 rounded-xl shadow-md text-center not-prose">
        <h2 className="text-3xl font-bold m-0 text-blue-400">Chapter 24</h2>
        <p className="text-xl mt-2 text-slate-300">The Classification Workflow</p>
      </div>

      <p className="lead text-lg text-slate-700">
        In this chapter, we put all the rules together into a unified workflow. Classification is not about memorizing 22 rules; it is about asking the right questions in the right order.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
        <h3 className="text-xl font-bold text-blue-900 mt-0 mb-3">24.1 The Golden Rule of Classification</h3>
        <p className="text-blue-800 m-0">
          <strong>Never skip to the rule.</strong> Always begin with the intended purpose. If you do not know exactly what the device is intended to do, who it is for, and how long it will be used, you cannot classify it.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mt-10 mb-4 text-slate-800">24.2 The Standard Classification Workflow</h3>

      <div className="my-8 overflow-x-auto flex justify-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
  <Mermaid chart={`graph TD
  START["START"] --> Q1{Is it a Medical Device?}
  Q1 -->|NO| END1["Not regulated as MD"]
  Q1 -->|YES| PURP["Determine Intended Purpose"]
  PURP --> Q2{Is it Active?}
  Q2 -->|YES: Active Device Rules| Q3{What does it do?}
  Q3 -->|Therapy| R9{"Rule 9"}
  R9 -->|Hazardous| R9C["Class C"]
  R9 -->|Not Hazardous| R9B["Class B"]
  Q3 -->|Diagnosis/Monitoring| R10{"Rule 10"}
  R10 -->|Vital/Radio| R10C["Class C"]
  R10 -->|General| R10B["Class B"]
  Q3 -->|Administer/Remove Substances| R11{"Rule 11"}
  R11 -->|Hazardous| R11D["Class D"]
  R11 -->|Not Hazardous| R11C["Class C"]
  Q3 -->|Other Active Device| R12["Rule 12 (Class A)"]
  Q2 -->|NO: Non-Active Rules| Q4{Does it Enter the Body?}
  Q4 -->|NO| R1_4["Rules 1-4"]
  Q4 -->|YES| Q5{Where/How?}
  Q5 -->|Body Orifice| R5{"Rule 5"}
  R5 -->|Transient| R5A["Class A"]
  R5 -->|Short-term/Oral| R5B["Class B"]
  R5 -->|Long-term| R5C["Class C"]
  Q5 -->|Surgery: Transient| R6{"Rule 6"}
  R6 -->|Reusable| R6A["Class A"]
  R6 -->|Other| R6B["Class B"]
  R6 -->|CNS/Heart| R6C["Class C"]
  Q5 -->|Surgery: Short-term| R7{"Rule 7"}
  R7 -->|Medicine/CNS| R7C["Class C"]
  R7 -->|Other| R7B["Class B"]
  Q5 -->|Surgery: Long-term/Implant| R8{"Rule 8"}
  R8 -->|Heart/CNS/Active| R8D["Class D"]
  R8 -->|Other| R8C["Class C"]
  
  R9B --> SPEC
  R9C --> SPEC{Special Characteristics?}
  R10B --> SPEC
  R10C --> SPEC
  R11C --> SPEC
  R11D --> SPEC
  R12 --> SPEC
  R1_4 --> SPEC
  R5A --> SPEC
  R5B --> SPEC
  R5C --> SPEC
  R6A --> SPEC
  R6B --> SPEC
  R6C --> SPEC
  R7B --> SPEC
  R7C --> SPEC
  R8C --> SPEC
  R8D --> SPEC
  
  SPEC -->|Medicinal Substance| R13["Rule 13 (Class D)"]
  SPEC -->|Contraception| R14{"Rule 14"}
  R14 -->|Implant/Long-term| R14D["Class D"]
  R14 -->|Other| R14C["Class C"]
  SPEC -->|Cleaning/Sterilization| R15{"Rule 15"}
  R15 -->|Invasive MDs| R15C["Class C"]
  R15 -->|Other| R15B["Class B"]
  SPEC -->|X-ray Recording| R16["Rule 16 (Class B)"]
  
  R13 --> DOC["Document Classification"]
  R14C --> DOC
  R14D --> DOC
  R15B --> DOC
  R15C --> DOC
  R16 --> DOC
  SPEC -->|None| DOC
`} />
</div>

      <h3 className="text-xl font-semibold mt-10 mb-3">24.19 Practice Exercise</h3>
      <p>Try classifying the following by identifying the first question you would ask—not the final class.</p>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-slate-200 text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">Device</th>
              <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-800">First Question</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Hip implant</td>
              <td className="border border-slate-200 px-4 py-2">What is its intended purpose and is it intended for long-term implantation?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">ECG machine</td>
              <td className="border border-slate-200 px-4 py-2">Is its primary purpose diagnosis or therapy?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Urinary catheter</td>
              <td className="border border-slate-200 px-4 py-2">Does it enter through a natural body orifice, and for how long?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Surgical forceps</td>
              <td className="border border-slate-200 px-4 py-2">Is it reusable and intended only for transient surgical use?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Infusion pump</td>
              <td className="border border-slate-200 px-4 py-2">Does it actively administer a medicinal product?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Autoclave</td>
              <td className="border border-slate-200 px-4 py-2">Is it intended to sterilize reusable medical devices?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Condom</td>
              <td className="border border-slate-200 px-4 py-2">Is its intended purpose contraception or prevention of STI transmission?</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-2 font-medium">Drug-eluting stent</td>
              <td className="border border-slate-200 px-4 py-2">Does it incorporate a medicinal substance while remaining primarily a medical device?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3 flex items-center gap-2"><Lightbulb className="w-6 h-6 text-amber-500"/> 24.20 Memory Trick</h3>
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg my-6 text-center shadow-sm">
        <p className="text-sm text-amber-800 m-0 mb-3">Imagine solving a maze. Running randomly rarely gets you to the exit. Following a map does.</p>
        <p className="text-sm text-amber-800 m-0 mb-3">Medical device classification works the same way. The classification rules are not designed to be memorized one by one. They are designed to be followed step by step.</p>
        <p className="text-lg font-bold text-amber-900 m-0 italic">Remember: "Don't ask 'What class is this?' First ask, 'What is this device intended to do?'"</p>
      </div>

      <div className="not-prose bg-slate-800 text-white rounded-xl p-6 my-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-400 mt-0 mb-4">Chapter Summary</h3>
        <p className="text-slate-300 text-sm mb-4">By the end of this chapter, you should remember:</p>
        <ul className="text-slate-200 space-y-2 mb-6">
          <li>Classification is a logical process, not a guessing exercise.</li>
          <li>The manufacturer's intended purpose is always the starting point.</li>
          <li>Follow a structured sequence: Confirm it is a medical device, understand the intended purpose, determine whether it is active or non-active, determine whether it enters the body, determine the duration of use, apply the appropriate rule(s).</li>
          <li>Document your reasoning.</li>
          <li>Never classify a device based on its name, appearance, material, or size.</li>
          <li>Good regulatory practice means that another reviewer should be able to follow your reasoning from the evidence to the final classification.</li>
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-10 shadow-sm">
        <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Preview of Chapter 25 – Understanding Intended Purpose</h3>
        <p className="text-sm text-blue-800 mb-3">The next chapter focuses on the single most important concept in medical device regulation: <strong>Intended Purpose</strong>.</p>
        <p className="text-sm text-blue-800 mb-2">We will explain:</p>
        <ul className="text-sm text-blue-800 space-y-1 mb-0 pl-5">
          <li>how intended purpose is established,</li>
          <li>where regulators look for it,</li>
          <li>how manufacturers accidentally change it through marketing claims,</li>
          <li>why two identical products can have different classifications,</li>
          <li>and how intended purpose affects every regulatory decision under the Medical Devices Rules, 2017.</li>
        </ul>
      </div>
    </div>
  );
}
