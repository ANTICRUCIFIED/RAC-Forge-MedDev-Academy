import React from 'react';
import { Truck, Package, Sparkles } from 'lucide-react';

export default function Chapter37() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 37</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 5: Transport, Storage, and Packaging Systems Verification</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "The device must withstand the physical violence of shipping, heat, and humidity before reaching clinical hands."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 5 of the Essential Requirements (or GSPR). You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>Understanding the transport stresses: vibration, dropping, vacuum, temperature extremes.</li>
          <li>Designing and executing transit simulation testing protocols.</li>
          <li>The critical roles of ASTM D4169 and ISTA standards in technical file compliance.</li>
          <li>Drafting defensible transit rationales for chemical, mechanical, and active electronic devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Truck className="w-6 h-6 text-indigo-600" />
        37.1 The Principle of Transport Survival
      </h3>
      <p>
        <strong>Clause 5 Text:</strong> <em>"The devices must be designed, manufactured and packed in such a way that their characteristics and performances during their intended use will not be adversely affected during transport and storage conditions (for example, fluctuations of temperature and humidity) taking account of the instructions and information provided by the manufacturer."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Package className="w-4 h-4 text-amber-600" /> Transit Simulation Testing
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Manufacturers cannot assume their packaging is adequate. They must physically submit fully-packed shipping boxes (shippers) to laboratory transit simulation testing. This replicates truck transport vibration, aircraft depressurization, handling drops, and extreme seasonal warehousing temperature/humidity exposures.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">37.2 Standard Compliance Pathway</h3>
      <p>
        To prove transit stability, technical files must contain validation reports mapped to recognized packaging and distribution test standards:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Transit Simulation:</strong> ASTM D4169 (Standard Practice for Performance Testing of Shipping Containers and Systems) or ISTA series (ISTA 2A, 3A).
        </li>
        <li>
          <strong>Climatic Preconditioning:</strong> ASTM D4332 (Standard Practice for Conditioning Containers, Packages, or Packaging Components for Testing).
        </li>
        <li>
          <strong>Bubble/Leakage Testing:</strong> ASTM F2096 (Standard Test Method for Detecting Gross Leaks in Packaging by Internal Pressurization) for sterile barriers.
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">37.3 Clause 5 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">ASTM D4169, ASTM D4332</td>
              <td className="px-3 py-2">Transit Validation Report (TR-204), Environmental Cycling Log, Visual Leakage Audits</td>
              <td className="px-3 py-2 leading-relaxed">
                "The product and its primary packaging are validated through transit simulation according to ASTM D4169 (Assurance Level I). Shippers were preconditioned under ASTM D4332 thermal extremes (-10°C to +40°C, 90% RH) and subjected to random vibration and drop testing. Post-test audits confirm zero mechanical damage, zero sealant peeling, and zero leakages of chemical solvents."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISTA 2A</td>
              <td className="px-3 py-2">Shock and Drop Test Report, Sizing Integrity Ledger, Outer Box Design Specification</td>
              <td className="px-3 py-2 leading-relaxed">
                "Metallic passive implants are packaged inside compartmentalized polymer storage cases enclosed in protective outer boxes. Compliance is established via ISTA 2A performance testing, including physical vibration and high-impact drops. Testing proves that implants remain in their designated slots without mixing, shifting, or undergoing dimensional/geometrical deformation."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">ASTM D4169, IEC 60601-1</td>
              <td className="px-3 py-2">Transit Damage Validation Report (TR-88), Shock Mount Engineering Drawing, Post-Transit Calibration Log</td>
              <td className="px-3 py-2 leading-relaxed">
                "The active electrical generator is packaged inside a custom-molded protective case with polyurethane foam shock inserts. Transit testing was conducted using ASTM D4169 parameters. Post-transit visual inspection, electrical leakage testing under IEC 60601-1, and functional output calibration confirm zero component displacement, zero electrical isolation breakdown, and perfect focal stability."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 5
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          Do not confuse storage instructions with transit validation. Storage instructions (e.g., "Store at 10-24°C" on outer labels) are intended for the clinician. Clause 5, however, is a demand for <strong>engineering verification</strong>. You must prove that transient excursions outside these boundaries during shipping (e.g., a hot cargo container at 45°C) do not permanently degrade your device. Reference your <strong>ASTM D4169 or ISTA test report</strong> in your technical file.
        </p>
      </div>

    </div>
  );
}
