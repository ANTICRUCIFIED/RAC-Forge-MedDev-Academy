import React from 'react';
import { Zap, Cpu, Sparkles } from 'lucide-react';

export default function Chapter44() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 44</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 12: Electrical Safety, Active Energy Sources, and Software</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Preventing clinical electrocution, managing thermal dissipation, and validating software lifecycles."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 12 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The critical isolation barriers for active electrical devices (MOOP vs. MOPP).</li>
          <li>Validating battery power networks and emergency power-loss safety.</li>
          <li>The software development lifecycle and safety risk classes under IEC 62304.</li>
          <li>Drafting robust Column 5 compliance and N/A rationales.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Zap className="w-6 h-6 text-indigo-600" />
        44.1 Electrical Safety & Software Lifecycle Validation
      </h3>
      <p>
        <strong>Clause 12 Text:</strong> <em>"Devices connected to or equipped with an energy source must be designed and manufactured in such a way as to protect patients and users against electrical, mechanical or thermal risks.
        <br />For devices incorporating software or which are medical software in themselves, the software must be validated in accordance with the state of the art, taking into account the principles of development lifecycle, risk management, validation and verification."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Cpu className="w-4 h-4 text-amber-600" /> Software Risk Classification & IEC 62304
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Active medical devices are highly prone to electrical shock and thermal burns. Furthermore, if a device contains a microprocessor, its software (firmware) must be developed according to <strong>IEC 62304</strong>. Software is classified into three risk classes: <strong>Class A</strong> (No injury possible), <strong>Class B</strong> (Non-serious injury possible), or <strong>Class C</strong> (Death or serious injury possible). Higher classes require deeper verification and unit testing.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">44.2 Standard Compliance Pathway</h3>
      <p>
        Compliance with Clause 12 is established via the following core active standards:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>General Electrical Safety:</strong> IEC 60601-1 (Requirements for basic safety and essential performance - leakage currents, isolation barriers, dielectric strength).
        </li>
        <li>
          <strong>Software Lifecycle Processes:</strong> IEC 62304 (Design controls, configuration management, software unit testing, and hazard mapping).
        </li>
        <li>
          <strong>Battery Safety Standards:</strong> IEC 62133 (Secondary cells and batteries containing alkaline or non-acid electrolytes).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">44.3 Clause 12 Mapping & Evidence Table</h3>
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
                "The topical chemical preparation is a topical liquid-gel suspension containing no electrical circuits, batteries, heating elements, or microprocessors. No active energy source is utilized, and there is zero embedded software. Therefore, Clause 12 is not applicable."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">Not Applicable</td>
              <td className="px-3 py-2">----</td>
              <td className="px-3 py-2 leading-relaxed italic">
                "Metallic passive implants are passive metallic components. The device does not incorporate any electrical wires, energy sources, heating elements, or software firmware. Therefore, Clause 12 is not applicable."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1, IEC 62304, IEC 62133</td>
              <td className="px-3 py-2">Electrical Test Report (E-201), Software Validation File (SW-DHF-01), Battery Safety Certificate</td>
              <td className="px-3 py-2 leading-relaxed">
                "The active diagnostic imaging system is battery-powered. Electrical safety is verified to IEC 60601-1 (Report E-201); leakage current under normal/single-fault conditions remains below 10µA. The internal lithium battery is certified to IEC 62133. Embedded firmware is classified as Class B under IEC 62304 and validated (File SW-DHF-01) with unit tests, proving that software watchdogs and backup hardware timers shut down the active generator immediately if exposure control is lost."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 12
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          When presenting software-controlled active devices, auditors will ask for your **IEC 62304 Software Architecture and Release Notes**. You must provide evidence of your <strong>Software Bug Defect Tracking, static code analysis, and regression verification logs</strong>. Simply writing "software is validated" will trigger a technical file rejection. Always reference the exact <strong>Software Release Version and Verification Report</strong>.
        </p>
      </div>

    </div>
  );
}
