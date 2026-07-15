import React from 'react';
import { FlaskConical, HeartPulse, Sparkles } from 'lucide-react';

export default function Chapter39() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 39</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 7: Chemical, Physical, and Biological Properties (Biocompatibility)</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "The chemical, physical, and biological formulation of the device must be safe for patient tissue contact."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 7 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The critical parameters of biocompatibility: Cytotoxicity, Irritation, and Sensitization.</li>
          <li>Classifying devices by patient contact type (skin, mucosa, implants) and duration.</li>
          <li>Addressing material characterization, leaching, and flammability.</li>
          <li>Drafting robust Column 5 rationales based on ISO 10993 laboratory certificates.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <FlaskConical className="w-6 h-6 text-indigo-600" />
        39.1 Material Properties & Biological Safety
      </h3>
      <p>
        <strong>Clause 7 Text:</strong> <em>"Particular attention must be paid to:
        <br />- the choice of materials used, particularly as regards toxicity and, where appropriate, flammability,
        <br />- the compatibility between the materials used and biological tissues, cells and body fluids, given the intended purpose of the device."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <HeartPulse className="w-4 h-4 text-amber-600" /> Biocompatibility Matrix & The ISO 10993 Standards
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Biocompatibility evaluation under Clause 7 is a regulatory threshold. Manufacturers must define the contact pathway (e.g., surface, mucosa, bone, circulating blood) and contact duration (Transient &lt;24h, Prolonged 24h to 30d, or Permanent &gt;30d) of patient-facing parts, and test them to the specific components of <strong>ISO 10993</strong>.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">39.2 Standard Compliance Pathway</h3>
      <p>
        Biocompatibility compliance requires laboratory validation against the following standard modules:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>ISO 10993-1:</strong> Evaluation and testing within a risk management framework (Overall strategy).
        </li>
        <li>
          <strong>ISO 10993-5:</strong> Tests for In Vitro Cytotoxicity (cell survival, elution tests).
        </li>
        <li>
          <strong>ISO 10993-10:</strong> Tests for Skin Sensitization (delayed hypersensitivity).
        </li>
        <li>
          <strong>ISO 10993-23:</strong> Tests for Irritation (evaluation of mucosal or skin exposure).
        </li>
        <li>
          <strong>ISO 10993-18:</strong> Chemical Characterization of medical device materials (organic/inorganic extractables).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">39.3 Clause 7 Mapping & Evidence Table</h3>
      <div className="overflow-x-auto my-6 border border-slate-200 rounded-lg">
        <table className="min-w-full divide-y divide-slate-200 text-xs">
          <thead className="bg-slate-50 font-bold text-slate-700">
            <tr>
              <th className="px-3 py-2 text-left">Device Category</th>
              <th className="px-3 py-2 text-left">Applied Standards</th>
              <th className="px-3 py-2 text-left">Technical File Document References</th>
              <th className="px-3 py-2 text-left">Example Compliance Rationale (Column 5)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            <tr>
              <td className="px-3 py-2 font-semibold">Category A: Topical & Chemical Semi-Solids</td>
              <td className="px-3 py-2 font-mono">ISO 10993-1, ISO 10993-5, ISO 10993-10</td>
              <td className="px-3 py-2">Biocompatibility Test Suite (REP-BIO-05), SDS File, Chemical Formulation Certificate</td>
              <td className="px-3 py-2 leading-relaxed">
                "The topical semi-solid formulation has prolonged mucosal contact (under 30 days). Biological safety is verified via ISO 10993-5 (In-vitro Cytotoxicity showing &gt;70% cell viability) and ISO 10993-10 (Guinea Pig Maximization Test showing zero sensitization). If the vehicle contains a flammable carrier (e.g., ethanol), risks are controlled via low single-dose packaging units (0.4mL), airtight primary blister seals, and a strict temperature storage warning in the instruction manual."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 10993-1, ISO 10993-5, ISO 10993-18</td>
              <td className="px-3 py-2">Biocompatibility Evaluation File (BIO-Impl-09), Chemical Characterization Report, ICP-MS Leaching Study</td>
              <td className="px-3 py-2 leading-relaxed">
                "Passive metallic implants are classified as long-term permanent implants. They are constructed of ASTM F138/F136 medical-grade biocompatible alloys. Biocompatibility was validated in accordance with ISO 10993 parts 5, 10, 11, and 12. Extractable testing (ISO 10993-18) and ICP-MS leaching studies confirm nickel, cobalt, and chrome leaching into physiological fluids is well below daily toxic limits, guaranteeing zero cytotoxicity or sensitization."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">ISO 10993-1, ISO 10993-5, ISO 10993-10</td>
              <td className="px-3 py-2">Casing Material Safety Data Sheet, Skin Irritation Audit Report, Enclosure Material Certificate</td>
              <td className="px-3 py-2 leading-relaxed">
                "The outer casing enclosure of the active diagnostic device is constructed of medical-grade non-porous PC+ABS polymer. Since patient exposure is purely transient, indirect skin contact via the operator, skin irritation and sensitization profiles were audited under ISO 10993-1. Material characterization (MSDS) confirms zero toxic plasticizers or hazardous leaching, certifying skin-contact safety."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 7
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          When dealing with patient-contacting devices, auditors will not accept general declarations like "medical-grade steel used". You must include the exact <strong>ISO 10993 Cytotoxicity and Sensitization laboratory test certificates</strong>. If your device contains well-known alloys (e.g., stainless steel containing nickel), you must specifically provide a <strong>Chemical Characterization or Leachability Study</strong> to prove that the alloy is stable and does not release toxic ions into salivary fluids.
        </p>
      </div>

    </div>
  );
}
