import React from 'react';
import { Radio, ShieldAlert, Sparkles } from 'lucide-react';

export default function Chapter43() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 43</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 11: Protection Against Ionizing & Non-Ionizing Radiation</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Harnessing radiation for diagnostics while isolating clinical environments from scatter hazards."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 11 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The critical differences between ionizing (X-ray) and non-ionizing (laser, RF) radiation.</li>
          <li>The regulatory ALARA (As Low As Reasonably Achievable) engineering paradigm.</li>
          <li>Designing beam-limiting collimators, filters, and scatter shields.</li>
          <li>Drafting defensible radiation compliance and N/A rationales.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Radio className="w-6 h-6 text-indigo-600" />
        43.1 Ionizing Radiation & ALARA Protection Principles
      </h3>
      <p>
        <strong>Clause 11 Text:</strong> <em>"Devices must be designed and manufactured in such a way that exposure of patients, users and other persons to radiation is reduced as far as possible compatible with the intended purpose, whilst not restricting the application of appropriate specified levels for therapeutic and diagnostic purposes."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <ShieldAlert className="w-4 h-4 text-amber-600" /> The ALARA (As Low As Reasonably Achievable) Rule
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Ionizing radiation is a double-edged sword. It is essential for high-resolution diagnostic imaging, but excessive scatter radiation causes cellular double-strand DNA damage. To prove safety under Clause 11, manufacturers of radiation-emitting devices must apply strict <strong>mechanical and filtration controls</strong> to ensure patients receive only the highly focused beam needed, and clinicians are shielded from leakage scatter.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">43.2 Standard Compliance Pathway</h3>
      <p>
        Radiation-emitting systems must satisfy highly specific safety validation standards:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Basic Safety & Performance:</strong> IEC 60601-1-3 (Collateral Standard: Radiation protection in diagnostic X-ray equipment).
        </li>
        <li>
          <strong>Particular Technical Requirements:</strong> IEC 60601-2-65 (Particular safety requirements for dental intraoral X-ray equipment - focal-to-skin distance, filtration boundaries, collimator geometry).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">43.3 Clause 11 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">Not Applicable</td>
              <td className="px-3 py-2">----</td>
              <td className="px-3 py-2 leading-relaxed italic">
                "The topical chemical preparation is a topical liquid-gel suspension containing no electronic circuits or active energy elements. The device does not incorporate, emit, utilize, or expose users/patients to any form of ionizing or non-ionizing radiation. Therefore, Clause 11 is not applicable."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">Not Applicable</td>
              <td className="px-3 py-2">----</td>
              <td className="px-3 py-2 leading-relaxed italic">
                "Metallic passive implants are passive metallic components. The device contains no radiation-producing elements, isotopes, or radioactive substances, and does not emit electromagnetic fields. Therefore, Clause 11 is not applicable."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1-3, IEC 60601-2-65</td>
              <td className="px-3 py-2">Dosimetry Testing File (REP-RAD-04), Collimation Drawing, Scatter Radiation Audit</td>
              <td className="px-3 py-2 leading-relaxed">
                "The active diagnostic imaging device is an active radiation-emitting system. Compliance with IEC 60601-1-3 and IEC 60601-2-65 is verified in Report REP-RAD-04. The diagnostic beam is restricted by a built-in lead collimator to a maximum diameter of 60mm. Primary beam filtration is certified at &gt;1.5mm Al equivalent, absorbing soft, non-diagnostic radiation. Tube head leakage testing confirms leakage scatter remains below 0.25 mGy/h at 1 meter, guaranteeing clinical operator safety."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 11
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          When compiling a technical file for an active radiation-emitting diagnostic system, auditors will look up the **Focal-to-Skin Distance (FSD)** and the **Aluminum Equivalent Filtration thickness**. Under typical diagnostic systems standards (like IEC 60601-2-65), devices must have an FSD of at least 200mm (to reduce skin exposure) and at least 1.5mm Al equivalent filtration. Ensure these <strong>specific engineering values</strong> are written into your Column 5 rationale and mapped to your <strong>official dosimetry test reports</strong>.
        </p>
      </div>

    </div>
  );
}
