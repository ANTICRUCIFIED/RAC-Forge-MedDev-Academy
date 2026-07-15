import React from 'react';
import { HeartPulse, FileText, Sparkles } from 'lucide-react';

export default function Chapter38() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 38</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 6 & 6a: Acceptable Residual Side Effects & Clinical Evaluation</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "Undesirable side-effects are inevitable, but they must remain clinically acceptable and backed by literature."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clauses 6 & 6a of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>Understanding undesirable side effects and how they must map to clinical benefits.</li>
          <li>The framework of a Clinical Evaluation Report (CER) according to MEDDEV 2.7/1 Rev 4 or MDR.</li>
          <li>Selecting peer-reviewed medical literature and clinical trial databases.</li>
          <li>Drafting robust Column 5 rationales based on clinical and scientific datasets.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <HeartPulse className="w-6 h-6 text-indigo-600" />
        38.1 Side-Effects Acceptability & Clinical Verification
      </h3>
      <p>
        <strong>Clause 6 Text:</strong> <em>"Any undesirable side-effect must constitute an acceptable risk when weighed against the performances intended."</em>
        <br />
        <strong>Clause 6a Text:</strong> <em>"Demonstration of conformity with the essential requirements must include a clinical evaluation in accordance with Annex X."</em>
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1">
          <FileText className="w-4 h-4 text-blue-600" /> The Clinical Evaluation Report (CER)
        </span>
        <p className="text-blue-800 m-0 leading-relaxed text-xs">
          Conformance to Clauses 6 & 6a cannot be demonstrated through laboratory bench tests. It requires a formal <strong>Clinical Evaluation Report (CER)</strong> compiled by a clinical expert. The CER is a synthesis of clinical literature databases, equivalent device data comparisons, post-market surveillance (PMS) tracking, and physical clinical trials (if required). It certifies that the product satisfies state-of-the-art medical benchmarks.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">38.2 Standard Compliance Pathway</h3>
      <p>
        To comply with clinical demonstration requirements, manufacturers must reference:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>MEDDEV 2.7/1 Rev 4 / MDR Annex XIV:</strong> Establishes the standard guidelines for searching databases, selecting scientific literature, and organizing clinical evaluations.
        </li>
        <li>
          <strong>ISO 14155:</strong> Good Clinical Practice (GCP) guidelines for medical device clinical investigations involving human subjects.
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">38.3 Clause 6 & 6a Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">MEDDEV 2.7/1 Rev 4, ISO 14971</td>
              <td className="px-3 py-2">Clinical Evaluation Report (CER-v1.2), PMCF Plan, PMS Database Log (PMS-02)</td>
              <td className="px-3 py-2 leading-relaxed">
                "Conformity is verified by the Clinical Evaluation Report (CER-v1.2). Undesirable side effects, such as localized swelling of mucosa or mild redness due to chemical sensitivity, are extremely rare (&lt; 0.01% based on global PMS data) and resolved easily upon product wash/removal. These minor, temporary risks are highly acceptable when balanced against the documented 40% therapeutic efficacy."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">MEDDEV 2.7/1 Rev 4</td>
              <td className="px-3 py-2">Clinical Evaluation Report (CER-Implant), Clinical Safety Literature Index, PMCF Surveys</td>
              <td className="px-3 py-2 leading-relaxed">
                "The clinical evaluation establishes a high-level safety profile for medical-grade alloys in long-term structural treatments. Undesirable side effects like local tissue irritation, plaque accumulation, and mild physiological pH fluctuations are standard, manageable clinical consequences of permanent passive implants. These side effects constitute acceptable, temporary clinical risks when balanced against long-term structural alignment."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">MEDDEV 2.7/1 Rev 4, ISO 14155</td>
              <td className="px-3 py-2">Clinical Evaluation Report (CER-Active-01), Clinical Efficacy Literature, PMS Logs</td>
              <td className="px-3 py-2 leading-relaxed">
                "Conformity is validated in Clinical Evaluation Report. Undesirable side effects represent the controlled stress of active electrical exposures, which is kept to absolute minimums via technical limits and beam collimating. Systematic review of scientific literature and global PMS databases confirms zero reportable adverse tissue injuries, proving that active clinical benefits outweigh the negligible, controlled risks."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 6 & 6a
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          In your technical file, never state "there are no side effects." Every medical device has side effects. Auditors expect to see a <strong>Clinical Evaluation Report (CER)</strong> and a <strong>Post-Market Clinical Follow-up (PMCF) Plan</strong> detailing exactly how you monitor and compile real-world complaints. Quantify the complaints (e.g., "1 report in 1,000,000 units sold") to defend acceptability.
        </p>
      </div>

    </div>
  );
}
