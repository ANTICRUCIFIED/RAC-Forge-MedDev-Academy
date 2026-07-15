import React from 'react';
import { FileText, Compass, Sparkles } from 'lucide-react';

export default function Chapter45() {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-p:text-slate-600 prose-li:text-slate-700">
      
      {/* Chapter Header */}
      <div className="bg-indigo-50 border-l-4 border-indigo-600 p-5 my-6 rounded-r-lg shadow-sm not-prose">
        <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Essential Principles Series</span>
        <h2 className="text-xl font-bold text-blue-900 mt-0 mb-1">CHAPTER 45</h2>
        <h2 className="text-lg font-bold text-blue-800 mt-0 mb-2">Clause 13: Manufacturer Information (IFU & Labeling)</h2>
        <p className="m-0 font-medium text-blue-950 italic">
          "The critical link to clinical reality: clear labels, structured instructions, and standardized hazard symbols."
        </p>
      </div>

      {/* Learning Objectives */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 text-sm">
        <h3 className="text-base font-bold text-slate-800 mt-0 mb-2">Chapter Overview</h3>
        <p className="mb-2">In this chapter, we analyze Clause 13 of the Essential Requirements. You will learn:</p>
        <ul className="mt-0 mb-0 space-y-1 pl-5 list-disc">
          <li>The regulatory components of outer/inner medical device labeling.</li>
          <li>Developing legally compliant Instructions for Use (IFUs).</li>
          <li>Standardizing labeling icons using the ISO 15223-1 international registry.</li>
          <li>Drafting robust Column 5 compliance rationales based on approved label artwork.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800 flex items-center gap-2">
        <FileText className="w-6 h-6 text-indigo-600" />
        45.1 Labeling, Traceability & Clinical Instructions
      </h3>
      <p>
        <strong>Clause 13 Text:</strong> <em>"Each device must be accompanied by the information needed to use it safely and properly, taking into account the training and knowledge of the potential users, and to identify the manufacturer. This information comprises the details on the label and the data in the instructions for use."</em>
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6 text-sm">
        <span className="font-bold text-amber-900 block mb-1 flex items-center gap-1">
          <Compass className="w-4 h-4 text-amber-600" /> Standardizing Symbology & Traceability
        </span>
        <p className="text-amber-800 m-0 leading-relaxed text-xs">
          Labeling under Clause 13 is the front line of patient safety. To prevent language barriers and communication errors, regulatory bodies mandate the use of standard graphical icons from <strong>ISO 15223-1</strong>. Furthermore, labels must enable complete tracking, meaning they must display the batch number (LOT), serial number (SN), manufacturing date, expiration date, and manufacturer's contact address.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">45.2 Standard Compliance Pathway</h3>
      <p>
        To comply with manufacturer information requirements, labels and IFUs must be designed in accordance with the following consensus frameworks:
      </p>
      <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600">
        <li>
          <strong>Standard Symbols:</strong> ISO 15223-1 (Medical devices - Symbols to be used with information to be supplied by the manufacturer).
        </li>
        <li>
          <strong>General Labeling Guidelines:</strong> EN 1041 (Information supplied by the manufacturer of medical devices).
        </li>
        <li>
          <strong>Unique Device Identification:</strong> UDI-DI tracking structures (GS1 standard 2D data-matrix barcodes).
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-3 text-slate-800">45.3 Clause 13 Mapping & Evidence Table</h3>
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
              <td className="px-3 py-2 font-mono">ISO 15223-1, EN 1041</td>
              <td className="px-3 py-2">Approved Outer Carton Artwork, primary blister label, English IFU Document</td>
              <td className="px-3 py-2 leading-relaxed">
                "The product cartoning and primary blister packaging are fully compliant with ISO 15223-1. Outer labels display standard symbols: single-use only (Symbol 5.1.1), batch code (LOT), expiry date, temperature storage limits, and professional prescription warnings. The Instructions for Use (IFU) detail complete clinical application steps, list allergy precautions, and list manufacturer contact information."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category B: Metallic Passive Implants (SS/Ti)</td>
              <td className="px-3 py-2 font-mono">ISO 15223-1</td>
              <td className="px-3 py-2">Case Layout Label Drawing, IFU Booklet, Material Allergy Warnings Section</td>
              <td className="px-3 py-2 leading-relaxed">
                "Metallic passive implants are supplied with clear identification labels inside each storage case in accordance with ISO 15223-1. Enclosures carry symbols identifying non-sterile status (Symbol 5.1.8) and single-use or reprocessing warnings. The accompanying user guide booklet defines sizing parameters, details the validated pre-use professional cleaning and autoclaving instructions, and highlights allergy warnings."
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">Category C: Active Electrical & Imaging Systems</td>
              <td className="px-3 py-2 font-mono">ISO 15223-1, IEC 60601-1</td>
              <td className="px-3 py-2">Chassis Laser Engraving Specification, Comprehensive User Manual</td>
              <td className="px-3 py-2 leading-relaxed">
                "The chassis is laser-engraved with standard clinical icons conforming to ISO 15223-1 and IEC 60601-1, including ionizing radiation warnings, serial number (SN), and manufacturing date. The comprehensive User Manual details full operational procedures, electrical safety boundaries, annual metrological calibration instructions, and battery disposal guidelines."
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-900 text-white rounded-xl p-5 mt-6 shadow-sm text-sm not-prose">
        <h4 className="font-bold mt-0 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-300" />
          Auditor Quick-Tip: How to Address Clause 13
        </h4>
        <p className="m-0 leading-relaxed text-indigo-100 text-xs">
          When compiling technical dossiers under Clause 13, you must include the **actual graphics and PDF files of your label artwork, packaging layouts, and instructions booklets**. Do not simply write a description. Auditors will visually check whether your labels display the manufacturer's name, regulatory CE or FDA status markings, the batch code (LOT) or serial code (SN), and that your symbols match the <strong>ISO 15223-1</strong> official index.
        </p>
      </div>

    </div>
  );
}
