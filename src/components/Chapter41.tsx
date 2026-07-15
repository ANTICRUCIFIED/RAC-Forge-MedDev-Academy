import React from 'react';
import { ShieldAlert, Compass, Sparkles } from 'lucide-react';

export default function Chapter41() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 41</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 9: Environmental and Mechanical Properties</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Ensuring safety under mechanical stress, environmental pressures, and co-use configurations."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 9 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>Mitigating mechanical risks: fracture, compression, shearing, sharp edges.</li>
          <li>Analyzing electrostatic discharge (ESD) and electromagnetic compatibility (EMC) hazards.</li>
          <li>Addressing co-use, reciprocal interference, and accidental component detachment.</li>
          <li>Drafting robust Column 5 compliance rationales across passive and active device families.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Compass className="w-6 h-6 text-indigo-600" />
        41.1 Mechanical, Co-use & Environmental Hazards
      </h3>
      <p>
        <strong>Clause 9 Text:</strong> <em>"If the device is intended for use in combination with other devices or equipment, the whole combination, including the connection system must be safe and must not impair the specified performances of the devices.
        <br />Devices must be designed and manufactured in such a way as to remove or minimize as far as possible:
        <br />- the risk of injury, in connection with their physical and ergonomic characteristics,
        <br />- risks connected with reasonably foreseeable external influences or environmental conditions, such as magnetic fields, external electrical influences, electrostatic discharge, pressure, temperature or humidity."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <ShieldAlert className="w-4 h-4 text-amber-600" /> Reciprocal Interference & Physical Hazards
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Clause 9 requires physical robustness. For passive surgical/implant structures, the device must resist functional tension or masticatory forces without fracturing (which could lead to ingestion/choking). For active electronic devices, the system must resist reciprocal electrical or electromagnetic interference (EMC) so it does not malfunction when co-used next to high-frequency surgical generators, smartphones, or telemetry instruments.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">41.2 Standard Compliance Pathway</h3>
      <p>
        Physical, mechanical, and co-use safety is validated via the following core consensus standard pathways:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Electromagnetic Compatibility:</strong> IEC 60601-1-2 (Collateral Standard: Electromagnetic disturbances - tests).
        </li>
        <li>
          <strong>Mechanical Robustness & Wear:</strong> ISO 15841 (Orthodontic materials - wires, bands), ISO 7405 (Evaluation of biocompatibility of medical devices).
        </li>
        <li>
          <strong>Enclosure Ingress Protection:</strong> IEC 60529 (Degrees of protection provided by enclosures - IP Code).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">41.3 Clause 9 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">ISO 14971, ISO 10993-1</td>
              <td className="px-3 py-2">Risk File Annex 03 (Hazard Ledger), Compatibility Study (CS-04)</td>
              <td className="px-3 py-2 leading-relaxed">
                "The topical chemical suspension contains no electrical components or mechanical moving parts. There is zero risk of electrostatic, electromagnetic, or magnetic reciprocal interference. Compatibility testing (CS-04) confirms that the compound can be safely co-applied inside mucosal surfaces alongside standard dental/surgical salivary aspirators and fluid syringes without foaming or losing therapeutic adhesion properties."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 15841, ASTM F138 / F136</td>
              <td className="px-3 py-2">Weld Attachment Shear Test (MS-04), Dimensional Geometrical Specification, Edge Radii Check Log</td>
              <td className="px-3 py-2 leading-relaxed">
                "Metallic passive implants are engineered with high mechanical integrity under ISO 15841. Geometrical laser control logs verify that outer and inner implant surfaces have smooth, micro-rounded margins to prevent soft-tissue laceration during clinical loading. Weld attachment shear testing (Report MS-04) certifies that structural sub-elements remain securely attached at loads exceeding 100N, eliminating accidental swallowing or choking hazards."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1, IEC 60601-1-2, IEC 60529</td>
              <td className="px-3 py-2">EMC Compliance Test Certificate (EMC-89), IP22 Ingress Protection Audit, Drop Resilience Study</td>
              <td className="px-3 py-2 leading-relaxed">
                "The active diagnostic imaging system is fully certified to IEC 60601-1-2 EMC limits (Report EMC-89), ensuring absolute immunity to radio-frequency fields and electrostatic discharges. Reciprocal interference with other instruments is prevented by limiting emissions below standard CISPR 11 limits. Enclosure ingress protection is validated to IP22 under IEC 60529, shielding circuits from dripping fluids or accidental oral sprays."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 9
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          For physical clinical products like passive metallic implants, Clause 9 is audited on **mechanical safety and choking risks**. You must provide concrete evidence that any attachments (brackets, tubes, cleats, buttons) are structurally welded to the parent band/implant and subjected to a <strong>shearing load or mechanical traction validation</strong>. Show that under chewing stress, the assembly will bend rather than detach.
        </p>
      </div>

    </div>
  );
}
