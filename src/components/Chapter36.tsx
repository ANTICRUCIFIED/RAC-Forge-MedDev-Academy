import React from 'react';
import { CalendarClock, Activity, Sparkles } from 'lucide-react';

export default function Chapter36() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 36</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 4: Product Lifetime, Durability, and Integrity Over Time</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Safety is not just a Day 1 requirement. It must endure throughout the device's declared lifetime."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 4 of the Essential Requirements (or GSPR). You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>Understanding the regulatory distinction between shelf-life and in-use lifetime.</li>
          <li>Designing and executing real-time and accelerated aging studies.</li>
          <li>Addressing degradation, corrosion, and fatigue hazards under clinical conditions.</li>
          <li>Drafting defensible lifetime rationales for chemical, mechanical, and active devices.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <CalendarClock className="w-6 h-6 text-indigo-600" />
        36.1 The Principle of Lifetime Integrity
      </h3>
      <p>
        <strong>Clause 4 Text:</strong> <em>"The characteristics and performances referred to in Sections 1, 2 and 3 must not be adversely affected to such a degree that the clinical conditions and safety of the patients and the users or, where applicable, other persons are compromised during the lifetime of the device as indicated by the manufacturer, when the device is subjected to the stresses which can occur during normal conditions of use."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Activity className="w-4 h-4 text-amber-600" /> Shelf Life vs. Service Life
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Manufacturers must declare two distinct temporal parameters: <strong>Shelf Life</strong> (how long can the device sit in its package without degrading before opening, e.g., 2 years for a chemical preparation/gel) and <strong>Service Life/In-use Lifetime</strong> (how long can the device actively function in the clinical environment, e.g., 5 years for an active diagnostic system, or 3 years of permanent clinical use for a passive metallic implant structure).
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">36.2 Standard Compliance Pathway</h3>
      <p>
        To verify performance integrity over time, different device categories rely on specific lifetime and degradation testing standards:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Chemical Stability:</strong> ASTM F1980 (Accelerated aging of sterile barrier packaging and chemical products).
        </li>
        <li>
          <strong>Mechanical Durability:</strong> Mechanical fatigue testing under repeated load cycles (e.g., ISO 15841 corrosion and stress cycling in artificial saliva).
        </li>
        <li>
          <strong>Active Systems:</strong> Electrical reliability, battery charge-discharge degradation testing, and accelerated component testing under elevated temperature limits.
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">36.3 Clause 4 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">ASTM F1980</td>
              <td className="px-3 py-2">Accelerated Stability Report (ST-05), Real-Time Aging Ledger, Packaging Seal Integrity Log</td>
              <td className="px-3 py-2 leading-relaxed">
                "The product is certified with a 2-year shelf life. Stability is validated via accelerated aging studies (Report ST-05) in accordance with ASTM F1980 at 55°C, simulating 24 months of ambient storage. Retrospective testing of aged samples confirms that the physical suspension (no excessive syneresis or phase separation), chemical concentration, and packaging peel strength meet day-one performance specifications."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 10271 (Corrosion), ASTM F138 / F136</td>
              <td className="px-3 py-2">Artificial Saliva Immersion Logs, Stress Corrosion Cracking Report, Fatigue Limit Testing</td>
              <td className="px-3 py-2 leading-relaxed">
                "The metallic structures are indicated for a typical clinical in-use lifetime of up to 3 years. Durability is verified through stress corrosion cracking testing (Report MS-11) and long-term chemical immersion in artificial physiological fluids according to ISO 10271. Testing proves the surgical-grade alloy maintains mechanical tensile limits, weld-attachment fatigue thresholds, and resists localized pit corrosion, guaranteeing zero structural integrity breakdown."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1, IEC 60601-1-3</td>
              <td className="px-3 py-2">Mean Time Between Failures (MTBF) File, Battery Life Cycling Test, High-Stress Thermal Log</td>
              <td className="px-3 py-2 leading-relaxed">
                "The active generator is designed for a service lifetime of 5 years. High-stress thermal aging of the generator head assembly and component reliability testing (MTBF report) confirm that beam collimation, filtration, and dosing accuracy do not degrade under repeated exposures. Internal battery cycling verification guarantees at least 80% capacity retention after 500 charge-discharge cycles."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 4
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          Auditors expect to see a clear distinction between how you prove **Shelf-Life** (before clinical use) and **Service-Life** (during active clinical use). Ensure you reference <strong>real-time or accelerated packaging aging logs</strong> for the shelf-life and <strong>mechanical wear or component cycle test logs</strong> for the service-life.
        </p>
      </div>

    </div>
  );
}
