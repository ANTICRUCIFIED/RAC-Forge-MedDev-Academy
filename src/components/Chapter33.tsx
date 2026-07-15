import { Shield, CheckCircle2, AlertCircle, FileText, Sparkles } from 'lucide-react';

export default function Chapter33() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 33</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 1: General Requirements - Design, Manufacture, and Safety Principles</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "The baseline covenant of medical safety: benefits must always outweigh hazards."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 1 of the Essential Requirements (or GSPR). You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The core regulatory intent of Clause 1 (General Safety & Performance).</li>
          <li>How to demonstrate a positive benefit-risk ratio for different device classes.</li>
          <li>The applicable consensus standards (ISO 14971, ISO 13485).</li>
          <li>How to draft professional, auditor-defensible compliance rationales.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Shield className="w-6 h-6 text-indigo-600" />
        33.1 Core Regulatory Requirement
      </h3>
      <p>
        <strong>Clause 1 Text:</strong> <em>"The devices must be designed and manufactured in such a way that, when used under the conditions and for the purposes intended, they will not compromise the clinical condition or the safety of patients, or the safety and health of users or, where applicable, other persons, provided that any risks which may be associated with their use constitute acceptable risks when weighed against the benefits to the patient and are compatible with a high level of protection of health and safety."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <AlertCircle className="w-4 h-4 text-amber-600" /> Regulatory Focus: The Benefit-Risk Matrix
        </span>
        <p className="text-amber-800 m-0 leading-relaxed">
          Clause 1 is the master umbrella of medical device registration. It demands that the clinical benefit (e.g., caries prevention, malocclusion correction, teeth imaging) is quantitatively greater than any residual risk (such as transient gingival irritation or radiation dose). It establishes that <strong>safety is not the absence of risk, but the containment of risk relative to benefit</strong>.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">33.2 Standard Compliance Pathway</h3>
      <p>
        To address the requirements of Clause 1, manufacturers must implement and reference the following core process standards:
      </p>
      <ul className="space-y-3 pl-5 list-disc">
        <li>
          <strong>ISO 14971: Risk Management:</strong> A continuous lifecycle process starting at the product conceptual stage, defining hazards, evaluating risk probability/severity, executing safety controls, and compiling a Risk Management Report certifying that all residual risks are acceptable.
        </li>
        <li>
          <strong>ISO 13485: QMS:</strong> Outlines design controls (inputs, outputs, reviews, verification, validation) ensuring the device was built strictly according to user needs and clinical requirements.
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">33.3 Clause 1 Mapping & Evidence Table</h3>
      <div className="overflow-x-auto my-6 border border-slate-200 rounded-lg">
        <table className="min-w-full divide-y divide-slate-200 text-xs">
          <thead className="bg-slate-50 font-bold text-slate-700">
            <tr>
              <th className="px-3 py-2 text-left">Device Type</th>
              <th className="px-3 py-2 text-left">Applied Standards</th>
              <th className="px-3 py-2 text-left">Technical File Document References</th>
              <th className="px-3 py-2 text-left">Example Compliance Rationale (Column 5)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            <tr>
              <td className="px-3 py-2 font-semibold">Dental Fluoride Varnish (FluoroDose)</td>
              <td className="px-3 py-2 font-mono">ISO 13485, ISO 14971, ISO 17730</td>
              <td className="px-3 py-2">Risk File Annex 09, Literature Review Report (LR-01), Efficacy Study (EF-12)</td>
              <td className="px-3 py-2 leading-relaxed">
                "The 5% Sodium Fluoride varnish is manufactured under ISO 13485 guidelines. Potential chemical toxicity and accidental swallow hazards are fully addressed in the Risk Management File (DHF-09) according to ISO 14971. Inherent safety is achieved via single-dose LolliTray packaging (0.4mL) which restricts patient ingestion to safe limits. Clinical literature reviews demonstrate that the benefit of caries reduction and dentinal hypersensitivity relief vastly outweighs the low risk of transient localized irritation."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Orthodontic Bands (Orthometric)</td>
              <td className="px-3 py-2 font-mono">ISO 13485, ISO 14971, ISO 15841</td>
              <td className="px-3 py-2">Risk Ledger Document (RM-04), Dimensional Tolerance Logs, Biocompatibility Evaluation</td>
              <td className="px-3 py-2 leading-relaxed">
                "The stainless steel orthodontic bands are designed with precision tolerance geometries and rounded borders to prevent mucosal lacerations, demonstrating inherent safety. Manufactured under a validated QMS, the risk of mechanical collapse or nickel leaching is mitigated to levels as low as possible. The clinical benefit of tooth alignment and orthodontic correction outweighs the transient mucosal pressure discomfort."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Intraoral Dental X-Ray (Woodpecker)</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1, IEC 60601-2-65, ISO 14971</td>
              <td className="px-3 py-2">Electrical Safety Test Report (ES-01), Beam Collimation Certification, Radiation Safety Plan</td>
              <td className="px-3 py-2 leading-relaxed">
                "Ionizing radiation risks are minimized to levels As Low As Reasonably Achievable (ALARA) via an integrated high-efficiency lead collimator and digital micro-timer controls. Safety interlocks verify single-fault protection under IEC 60601-1 and IEC 60601-2-65. The critical clinical benefit of fast, high-resolution diagnostic radiography in dental care outweighs the extremely minor, controlled radiation exposure."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 1
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100">
          When drafting Clause 1, do not simply say "the device is safe". You must explicitly link your <strong>Risk Management File (ISO 14971)</strong>, your <strong>Clinical Evaluation Report (CER)</strong>, and any <strong>particular product testing standards</strong>. Show that you have a proactive process to balance clinical utility against physical, chemical, or biological hazards.
        </p>
      </div>

    </div>
  );
}
