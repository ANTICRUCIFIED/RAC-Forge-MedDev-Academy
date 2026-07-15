import React from 'react';
import { Target, TrendingUp, CheckCircle, FileText, Sparkles } from 'lucide-react';

export default function Chapter35() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 35</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 3: Performance, Efficacy, and Technical Verification</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "The device must do exactly what it says on the box. Consistently."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 3 of the Essential Requirements (or GSPR). You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The definition of technical performance vs. clinical performance.</li>
          <li>How to map design verification tests (engineering) to intended use declarations.</li>
          <li>Aligning technical specifications with established product standards.</li>
          <li>Writing solid Column 5 compliance rationales based on engineering test results.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <Target className="w-6 h-6 text-indigo-600" />
        35.1 Intended Use and Clinical Efficacy
      </h3>
      <p>
        <strong>Clause 3 Text:</strong> <em>"The devices must achieve the performances intended by the manufacturer and be designed, manufactured and packaged in such a way that they are suitable for one or more of the functions referred to in Article 1(2)(a), as specified by the manufacturer."</em>
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-blue-900 block mb-1 flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-blue-600" /> Verification vs. Validation
        </span>
        <p className="text-blue-800 m-0 leading-relaxed text-xs">
          Clause 3 bridges <strong>Design Verification</strong> (did we build the device right according to technical specs?) and <strong>Design Validation</strong> (did we build the right device that actually works for the clinical user?). To prove performance under this clause, manufacturers must deliver quantitative test files proving specific technical outputs, coupled with a robust Clinical Evaluation Report (CER) proving the device meets clinical claims.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">35.2 Standard Compliance Pathway</h3>
      <p>
        Compliance is established through testing to **Particular/Product-Specific standards** which detail exactly what mechanical, chemical, or electrical parameters must be verified:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Particular Product Standards:</strong> Specialized technical specifications like ISO standards for topical mixtures (e.g., ISO 17730), ISO standards for metallic load-bearing assemblies (e.g., ISO 15841), or IEC standards for active generator performance (e.g., IEC 60601-2-65).
        </li>
        <li>
          <strong>Validation Frameworks:</strong> Pre-clinical bench testing, literature reviews, or clinical trials (ISO 14155).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">35.3 Clause 3 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">ISO 10993-1, ISO 17730</td>
              <td className="px-3 py-2">Total Concentration Release Study (TR-10), In-vitro Activity Audit (DA-03), Efficacy Logs</td>
              <td className="px-3 py-2 leading-relaxed">
                "The chemical preparation complies with performance specifications. Quantitative bench testing (Report TR-10) confirms constituent concentration is maintained exactly within 5% limits. Controlled-release studies verify immediate therapeutic coating upon mucosal/salivary hydration, successfully occluding underlying pathways and demonstrating clinical desensitization efficacy."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 15841, ASTM F138 / F136</td>
              <td className="px-3 py-2">Tensile Strength Test Log (MS-04), Micro-Geometrical Fitment Records, Attachment Shear Audit</td>
              <td className="px-3 py-2 leading-relaxed">
                "Technical performance is verified against mechanical testing parameters. Tensile and fatigue limits are engineered to allow professional installation/shaping without micro-fissures. Connection weld strength is certified via shear testing (Report MS-04) to exceed 100N, ensuring the metallic structures withstand mechanical forces of continuous chewing or movement."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">IEC 60601-1, IEC 60601-2-65</td>
              <td className="px-3 py-2">System Resolution & Contrast Test Log, Focal Spot Geometry Certificate, Exposure Precision Log</td>
              <td className="px-3 py-2 leading-relaxed">
                "Diagnostic performance is verified according to electrical/radiation specifications. Generator voltage accuracy is certified within ±10%, and exposure timing accuracy within ±5%. High-contrast resolution testing verifies a spatial resolution of &gt;12 lp/mm, enabling precise identification of target patient anatomy under stable electrical loads."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 3
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          In your Column 4, you must link to specific numerical outputs in your test reports rather than general declarations. For instance, if you are registering orthopedic or orthodontic passive metal structures, refer directly to your <strong>Tensile Stress and Fatigue Test reports</strong>. For active systems, refer to your <strong>Focal Spot and Dosimetry reports</strong>. Prove performance quantitatively.
        </p>
      </div>

    </div>
  );
}
