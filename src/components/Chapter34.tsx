import React from 'react';
import { ShieldAlert, ListOrdered, CheckSquare, Info, Sparkles } from 'lucide-react';

export default function Chapter34() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 34</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 2: Safety Principles & Risk Reduction Hierarchy</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "The three-step hazard mitigation rule: design out, protect against, warn about."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 2 of the Essential Requirements (or GSPR). You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The strict three-step risk mitigation hierarchy mandated by international regulators.</li>
          <li>How to categorize engineering controls under design, protection, or labeling.</li>
          <li>Mapping risks directly to the Risk Management Plan and Product Instructions (IFU).</li>
          <li>Drafting defensible rationales detailing specific mitigation measures.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <ShieldAlert className="w-6 h-6 text-indigo-600" />
        34.1 The Three-Step Risk Control Hierarchy
      </h3>
      <p>
        <strong>Clause 2 Text:</strong> <em>"In selecting the most appropriate solutions, the manufacturer must apply the following principles in the following order:
        <br />- eliminate or reduce risks as far as possible (inherently safe design and construction),
        <br />- where appropriate, take adequate protection measures, including alarms if necessary, in relation to risks that cannot be eliminated,
        <br />- inform users of the residual risks due to any shortcomings of the protective measures adopted."</em>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-sm">
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <span className="font-bold text-emerald-800 block mb-1 flex items-center gap-1">
            <ListOrdered className="w-4 h-4 text-emerald-600" /> 1. Inherent Safety by Design
          </span>
          <p className="text-slate-600 text-xs m-0">
            Modifying the product's physical design, geometry, chemical composition, or basic operations so that the hazard is physically impossible (e.g., using safe voltages, non-toxic materials, or single-unit packaging constraints).
          </p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <span className="font-bold text-indigo-800 block mb-1 flex items-center gap-1">
            <CheckSquare className="w-4 h-4 text-indigo-600" /> 2. Protective Safety Measures
          </span>
          <p className="text-slate-600 text-xs m-0">
            Adding active or passive protective features, shields, physical guards, electrical isolation barriers, backup interlock circuits, or automated alarm indicators.
          </p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <span className="font-bold text-amber-800 block mb-1 flex items-center gap-1">
            <Info className="w-4 h-4 text-amber-600" /> 3. Information for Safety
          </span>
          <p className="text-slate-600 text-xs m-0">
            Placing warnings on outer labels, highlighting contraindications in instructions, requiring personal protective gear, or specifying training criteria.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">34.2 Standard Compliance Pathway</h3>
      <p>
        Clause 2 requires direct compliance with <strong>ISO 14971 (Section 7: Risk Control)</strong>. Every identified hazard in the hazard ledger must have a corresponding "Risk Control Option Selection" documenting that the hierarchy was followed sequentially.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">34.3 Clause 2 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2">Risk Control Matrix (RCM-02), Product Packaging Specification, IFU Warnings Section</td>
              <td className="px-3 py-2 leading-relaxed">
                "Risk mitigation follows the three-step hierarchy: (1) Inherent Design: Formulation restricts unit-dose volumes (e.g., 0.4mL), making toxic chemical overdosage clinically impossible. (2) Protective: Viscous semi-solid gel sets instantly upon contact with moisture/saliva, preventing wash-away. (3) Warnings: IFU outlines mucosal application limits and lists known chemical allergies."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 14971, ASTM F138 / F136</td>
              <td className="px-3 py-2">Hazard Mitigation Logs (Annex 03), Sizing Guidelines, Alloy Tensile Test Reports</td>
              <td className="px-3 py-2 leading-relaxed">
                "Risks of tissue irritation are controlled through: (1) Inherent Design: High-precision laser smoothing eliminates sharp metal burrs, and inner walls are micro-roughened for cement adhesion. (2) Protective: Proportional anatomical sizing increments guarantee friction fits to prevent dislocation. (3) Warnings: IFU details professional installation forces."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1, IEC 60601-1-3, ISO 14971</td>
              <td className="px-3 py-2">Dual Microprocessor Firmware Logs (IEC 62304), Beam Collimator Drawing, Cabinet Leakage Audit</td>
              <td className="px-3 py-2 leading-relaxed">
                "Radiation and electrical hazards are controlled via: (1) Inherent Design: Rigid lead internal shielding blocks accidental beam scatter. (2) Protective: Dual-redundant hardware interlock circuits instantly cut power to the emitter if software loops. Battery indicator prevents partial cycles. (3) Warnings: Labels display ionizing/high-voltage warning icons."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 2
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          Auditors are highly sensitive to "warning laziness." You cannot use labeling (Step 3) to justify hazards that could easily be addressed through design changes (Step 1) or hardware barriers (Step 2). When compiling your technical files, always document why physical design modifications were technically impossible before relying on warning labels.
        </p>
      </div>

    </div>
  );
}
