import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Chapter40() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 40</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 8: Infection Control, Sterilization, and Microbial Contamination</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Preventing patient infection: sterile barriers, terminal validation, and validated clinic re-processing."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 8 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The critical distinction between terminal sterile delivery and reusable clinical reprocessing.</li>
          <li>Design of sterile barrier systems (ISO 11607) and terminal sterilization standards (ISO 11135, ISO 11137).</li>
          <li>Developing validated reprocessing instructions for clinical cleaning (ISO 17664).</li>
          <li>Drafting robust Column 5 rationales for both sterile and non-sterile device classes.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-indigo-600" />
        40.1 Microbial Cleanliness & Infection Mitigation
      </h3>
      <p>
        <strong>Clause 8 Text:</strong> <em>"The devices and manufacturing processes must be designed in such a way as to eliminate or reduce as far as possible the risk of infection to the patient, user and third parties. The design must:
        <br />- allow easy handling, and, where necessary, reduce contamination of the device by the patient or vice versa during use,
        <br />- limit as far as possible any microbial leakage,
        <br />- allow validated cleaning, disinfection, and/or sterilization."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Heart className="w-4 h-4 text-amber-600" /> Sterile vs. Non-Sterile Design Strategies
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Device cleanliness strategies split into three regulatory pathways: (1) <strong>Terminally Sterile</strong> (manufactured in cleanrooms, gas or radiation sterilized, protected by sterile barrier pouch pouches), (2) <strong>Supplied Non-Sterile / Reusable</strong> (requires validated clinical cleaning and autoclaving instructions before each use), or (3) <strong>Supplied Non-Sterile / Single-Use</strong> (rely on hygiene controls, low bioburden levels, and single-patient disposal).
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">40.2 Standard Compliance Pathway</h3>
      <p>
        Microbial compliance requires engineering records mapped to the following standards:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Sterile Packaging:</strong> ISO 11607-1 & 2 (Packaging for terminally sterilized medical devices - materials, barrier validation).
        </li>
        <li>
          <strong>Sterilization Validation:</strong> ISO 11135 (Ethylene Oxide validation), ISO 11137 (Gamma/E-beam validation), or ISO 17665 (Steam/Autoclave validation).
        </li>
        <li>
          <strong>Cleanroom Controls:</strong> ISO 14644 (Cleanroom environmental classification and bioburden monitoring).
        </li>
        <li>
          <strong>Reusable Reprocessing:</strong> ISO 17664-1 (Reprocessing of reusable health care devices - instructions).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">40.3 Clause 8 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">ISO 13485, QMS Bioburden Logs</td>
              <td className="px-3 py-2">Cleanroom Environmental Reports, Bioburden Testing Log (BB-102), Technical Packaging Drawings</td>
              <td className="px-3 py-2 leading-relaxed">
                "Delivered in a clean, non-sterile state, which is standard for topical preparations. Manufactured in monitored Class 8 cleanrooms (ISO 14644) to restrict pre-packaging bioburden limits. Crucially, patient-to-patient cross-contamination is 100% eliminated by the single-dose blister packaging design containing a single-use applicator brush. The entire packaging and contents are disposed of immediately after clinical application."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 17664-1, ISO 17665</td>
              <td className="px-3 py-2">IFU Section 05: Clinical Reprocessing Protocol, Autoclave Validation Study (REP-STER-09)</td>
              <td className="px-3 py-2 leading-relaxed">
                "Metallic passive implants are typically supplied non-sterile. To prevent clinical infection, the Instructions for Use (IFU) include a validated cleaning, disinfection, and steam autoclaving protocol in compliance with ISO 17664-1. Laboratory validation (Report REP-STER-09) proves that a standard autoclaving cycle (134°C for 3 minutes) achieves a Sterility Assurance Level (SAL) of 10^-6 without degrading the metallic mechanical structural integrity."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">ISO 17664-1</td>
              <td className="px-3 py-2">User Manual Maintenance Guidelines, Disinfection Compatibility Log (DC-02)</td>
              <td className="px-3 py-2 leading-relaxed">
                "As an active, reusable diagnostic device with zero patient mucosal contact, terminal sterilization is not required. The external casing enclosure is engineered with smooth, non-porous polymer surfaces resistant to standard clinical chemical disinfectants (Report DC-02). The user manual details step-by-step alcohol spray and wipe disinfection protocols to sanitize active contact zones between patients."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 8
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          If your device is reusable, you cannot simply write "Clean the device before use". Under ISO 17664-1, you must provide a **fully validated, step-by-step reprocessing recipe**: specify the exact detergent, water temp, brush type, rinsing duration, autoclave temp (e.g., 134°C), pressure, and drying time (e.g., 20 mins). Auditors will verify whether your technical file contains the laboratory validation report certifying this exact recipe is effective.
        </p>
      </div>

    </div>
  );
}
