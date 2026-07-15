import React from 'react';
import { Ruler, Activity, Sparkles } from 'lucide-react';

export default function Chapter42() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 42</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 10: Devices with a Measuring Function (Metrology)</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Ensuring metrological precision, scientific calibration, and standardization of legal units."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 10 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>Defining the regulatory threshold of a "Measuring Function" (metrological tracking).</li>
          <li>Developing quantitative calibration and test limits for clinical metrics.</li>
          <li>Aligning technical UI outputs with standard SI legal measuring units.</li>
          <li>Drafting robust Column 5 compliance rationales (including Not Applicable declarations).</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Ruler className="w-6 h-6 text-indigo-600" />
        42.1 Metrological Precision & Standard SI Units
      </h3>
      <p>
        <strong>Clause 10 Text:</strong> <em>"Devices with a measuring function must be designed and manufactured in such a way as to provide sufficient accuracy and stability within appropriate limits of accuracy, taking account of the intended purpose of the device. The limits of accuracy must be indicated by the manufacturer.
        <br />Measurements made by devices with a measuring function must be expressed in legal units in conformity with the provisions of Directive 80/181/EEC."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Activity className="w-4 h-4 text-amber-600" /> Does My Device Have a Measuring Function?
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          A device has a **Measuring Function** only if it is explicitly designed to quantitatively measure, display, or track a physiological parameter (e.g., blood pressure, heart rate, blood glucose) or a quantitative physical output (e.g., radiation dosing, volume dispensed). Passive mechanical tools or chemical preparations do not have a measuring function. However, if a device has a measuring function, it must be calibrated to legal units (such as seconds, milligrays, or millimeters).
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">42.2 Standard Compliance Pathway</h3>
      <p>
        Metrological accuracy must be validated against international physical standard limits and metric frameworks:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>SI Legal Measuring Units:</strong> Council Directive 80/181/EEC (relating to indicators of measurement).
        </li>
        <li>
          <strong>Particular Calibration Limits:</strong> Specialized technical metrology codes such as IEC 60601-2-65 (exposure timer and voltage precision parameters).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">42.3 Clause 10 Mapping & Evidence Table</h3>
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
                "The device is a topical chemical preparation. It does not perform, display, or record any physiological, physical, or diagnostic measurements. Therefore, Clause 10 is not applicable to this product."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">Not Applicable</td>
              <td className="px-3 py-2">----</td>
              <td className="px-3 py-2 leading-relaxed italic">
                "Metallic passive implants are passive mechanical structures implanted or mounted on body tissues. The device does not incorporate any diagnostic, monitoring, or active measurement systems. Therefore, Clause 10 is not applicable to this product."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-2-65, Directive 80/181/EEC</td>
              <td className="px-3 py-2">Metrological Calibration Report (MET-04), Display Interface Spec, Timer Tolerance Log</td>
              <td className="px-3 py-2 leading-relaxed">
                "The active diagnostic imaging device incorporates high-precision measuring functions to monitor and control exposure parameters. Time measurement is calibrated and expressed in seconds (s) conforming to Directive 80/181/EEC. High-precision calibration (Report MET-04) certifies that the digital exposure timer operates within ±5% of the selected duration, and tube voltage accuracy is within ±10% under IEC 60601-2-65, protecting patients from dose delivery discrepancies."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 10
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          When auditing an active device with a measuring function, auditors will check whether your technical dossier contains <strong>annual calibration logs and physical accuracy validation datasets</strong>. You must state the exact error tolerances (e.g., "Timer accuracy ±5% or ±0.01s") in your Column 5, and link to the <strong>Metrological Test Report</strong> to defend the precision claims.
        </p>
      </div>

    </div>
  );
}
