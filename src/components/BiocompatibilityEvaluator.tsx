/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { CONTACT_TYPES, BIOLOGICAL_ENDPOINTS, BIOCOMPATIBILITY_MATRIX, STENT_MATERIALS } from '../data/biocompatibilityData';
import { ContactCategory, ContactDuration, StentMaterial } from '../types';
import { Check, CheckCircle2, Download, AlertTriangle, Plus, Trash2, ShieldAlert } from 'lucide-react';

interface BiocompatibilityEvaluatorProps {
  onTaskCompleted: (taskKey: string) => void;
}

export default function BiocompatibilityEvaluator({ onTaskCompleted }: BiocompatibilityEvaluatorProps) {
  // Evaluator States
  const [selectedCategory, setSelectedCategory] = useState<ContactCategory>('implant');
  const [selectedTypeId, setSelectedTypeId] = useState<string>('implant_blood');
  const [selectedDuration, setSelectedDuration] = useState<ContactDuration>('long_term');
  
  // Custom materials state
  const [customMaterials, setCustomMaterials] = useState<StentMaterial[]>([]);
  const [newMaterialName, setNewMaterialName] = useState('');
  const [newMaterialType, setNewMaterialType] = useState<StentMaterial['type']>('Metal Alloy');
  const [newMaterialGrade, setNewMaterialGrade] = useState('');
  const [newMaterialPurpose, setNewMaterialPurpose] = useState('');
  const [newMaterialRisk, setNewMaterialRisk] = useState('');

  // Find types that belong to the selected category
  const activeTypes = CONTACT_TYPES.filter(t => t.category === selectedCategory);
  
  // Find matched matrix row
  const matchedRow = BIOCOMPATIBILITY_MATRIX.find(
    row => row.category === selectedCategory && 
           row.typeId === selectedTypeId && 
           row.duration === selectedDuration
  );

  const requiredEndpoints = matchedRow ? matchedRow.requiredEndpoints : [];

  // Filter endpoints that are required based on selection
  const activeEndpoints = BIOLOGICAL_ENDPOINTS.filter(ep => requiredEndpoints.includes(ep.key));
  const optionalEndpoints = BIOLOGICAL_ENDPOINTS.filter(ep => !requiredEndpoints.includes(ep.key));

  const handleCategoryChange = (cat: ContactCategory) => {
    setSelectedCategory(cat);
    const relatedTypes = CONTACT_TYPES.filter(t => t.category === cat);
    if (relatedTypes.length > 0) {
      setSelectedTypeId(relatedTypes[0].id);
    }
  };

  const handleAddMaterial = (e: FormEvent) => {
    e.preventDefault();
    if (!newMaterialName || !newMaterialPurpose) return;

    const newMat: StentMaterial = {
      name: newMaterialName,
      type: newMaterialType,
      grade: newMaterialGrade || 'Research/Industrial Grade',
      purpose: newMaterialPurpose,
      riskFactors: newMaterialRisk ? [newMaterialRisk] : ['Potential trace leachables', 'Biological surface rejection'],
      recommendedTesting: ['In Vitro Cytotoxicity (ISO 10993-5)', 'Irritation & Skin Sensitization (ISO 10993-10)']
    };

    setCustomMaterials([...customMaterials, newMat]);
    setNewMaterialName('');
    setNewMaterialPurpose('');
    setNewMaterialGrade('');
    setNewMaterialRisk('');
  };

  const handleRemoveMaterial = (index: number) => {
    setCustomMaterials(customMaterials.filter((_, i) => i !== index));
  };

  const downloadEvaluationReport = () => {
    const activeTypeName = CONTACT_TYPES.find(t => t.id === selectedTypeId)?.name || selectedTypeId;
    const durationLabel = selectedDuration === 'limited' ? 'Limited (≤ 24 hours)' : selectedDuration === 'prolonged' ? 'Prolonged (> 24 hours to 30 days)' : 'Long-term (> 30 days)';
    
    let reportContent = `==========================================================\n`;
    reportContent += `          ISO 10993-1 BIOCOMPATIBILITY ASSESSMENT REPORT\n`;
    reportContent += `          RAC FORGE PRIVATE LIMITED - MEDDEV ACADEMY\n`;
    reportContent += `==========================================================\n\n`;
    reportContent += `DATE: ${new Date().toLocaleDateString()}\n`;
    reportContent += `DEVICE CONTACT CATEGORY: ${selectedCategory.toUpperCase()}\n`;
    reportContent += `CONTACT TISSUE/TYPE: ${activeTypeName}\n`;
    reportContent += `CONTACT DURATION: ${durationLabel}\n\n`;
    reportContent += `----------------------------------------------------------\n`;
    reportContent += `REQUIRED BIOLOGICAL EVALUATION ENDPOINTS:\n`;
    reportContent += `----------------------------------------------------------\n`;
    
    activeEndpoints.forEach((ep, idx) => {
      reportContent += `${idx + 1}. ${ep.name}\n`;
      reportContent += `   Standard: ${ep.standardReference}\n`;
      reportContent += `   Significance: ${ep.clinicalSignificance}\n\n`;
    });

    reportContent += `----------------------------------------------------------\n`;
    reportContent += `ASSESSMENT OF CONSTITUENT MATERIALS:\n`;
    reportContent += `----------------------------------------------------------\n`;

    const allMaterials = [...STENT_MATERIALS, ...customMaterials];
    allMaterials.forEach((mat) => {
      reportContent += `* MATERIAL: ${mat.name} (${mat.type})\n`;
      reportContent += `  Grade: ${mat.grade}\n`;
      reportContent += `  Purpose in Device: ${mat.purpose}\n`;
      reportContent += `  Risk Factors: ${mat.riskFactors.join('; ')}\n`;
      reportContent += `  Recommended Tests: ${mat.recommendedTesting.join(', ')}\n\n`;
    });

    reportContent += `==========================================================\n`;
    reportContent += `Prepared by: Intern under supervision of RAC Forge private limited\n`;
    reportContent += `Approved: [Simulated RAC Forge Quality Sign-off]\n`;

    const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ISO-10993-Biocompatibility-Plan-${selectedTypeId}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    // Complete the task in parent
    onTaskCompleted('biocompatibility');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="biocompatibility-section">
      {/* Selector Dashboard - 5 Cols */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200" id="iso-matrix-calculator">
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
              <ShieldAlert size={18} />
            </span>
            <h3 className="font-semibold text-slate-800 text-base">ISO 10993-1 Matrix Calculator</h3>
          </div>
          
          <p className="text-xs text-slate-500 mb-5 leading-relaxed">
            Select the body contact parameters of your medical device. The tool will calculate the exact biocompatibility endpoints required under global standards.
          </p>

          <div className="space-y-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">1. Tissue Contact Category</label>
              <div className="grid grid-cols-3 gap-2">
                {(['surface', 'external_communicating', 'implant'] as ContactCategory[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`py-2 px-2 text-center rounded-xl text-xs font-medium border transition-all ${
                      selectedCategory === cat
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-100'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat === 'surface' ? 'Surface' : cat === 'external_communicating' ? 'Ext. Comm.' : 'Implant'}
                  </button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">2. Specific Contact Tissue</label>
              <select
                value={selectedTypeId}
                onChange={(e) => setSelectedTypeId(e.target.value)}
                className="w-full text-xs border border-slate-200 bg-white rounded-xl py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-700"
              >
                {activeTypes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
              <div className="mt-2 bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                <span className="text-[11px] text-slate-600 leading-normal block">
                  <strong className="text-slate-700 font-medium">Anatomy Details:</strong>{' '}
                  {CONTACT_TYPES.find(t => t.id === selectedTypeId)?.description}
                </span>
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1.5">3. Exposure Duration Category</label>
              <div className="grid grid-cols-3 gap-2">
                {(['limited', 'prolonged', 'long_term'] as ContactDuration[]).map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setSelectedDuration(dur)}
                    className={`py-2 px-1 text-center rounded-xl text-[11px] font-medium border transition-all ${
                      selectedDuration === dur
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-100'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block font-semibold">
                      {dur === 'limited' ? 'Limited' : dur === 'prolonged' ? 'Prolonged' : 'Long-Term'}
                    </span>
                    <span className="text-[9px] opacity-80 block">
                      {dur === 'limited' ? '≤24h' : dur === 'prolonged' ? '24h-30d' : '>30d'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stent Material Analysis */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 text-base mb-1">Stent Formulation (Class D)</h3>
          <p className="text-xs text-slate-500 mb-4">Constituent materials in our Drug-Eluting Stent case study:</p>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {STENT_MATERIALS.map((mat, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-slate-800">{mat.name}</span>
                  <span className="px-1.5 py-0.5 bg-slate-200/60 text-slate-700 font-mono text-[9px] rounded-md">{mat.type}</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-relaxed mb-1.5"><strong className="text-slate-600">Function:</strong> {mat.purpose}</p>
                <div className="text-[10px] space-y-1">
                  <div className="text-amber-700 font-medium flex items-center gap-1">
                    <AlertTriangle size={10} />
                    <span>Biological Concerns: {mat.riskFactors[0]}</span>
                  </div>
                  <div className="text-blue-700 font-mono text-[9px]">
                    Test focus: {mat.recommendedTesting[0]}
                  </div>
                </div>
              </div>
            ))}

            {/* Custom materials list */}
            {customMaterials.map((mat, idx) => (
              <div key={idx} className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-xs">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-blue-900">{mat.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 font-mono text-[9px] rounded-md">{mat.type}</span>
                    <button onClick={() => handleRemoveMaterial(idx)} className="text-slate-400 hover:text-red-500">
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <p className="text-[10px] text-blue-800/80 mb-1"><strong className="text-blue-900">Function:</strong> {mat.purpose}</p>
                <p className="text-[10px] text-amber-800 font-medium flex items-center gap-1">
                  <AlertTriangle size={10} />
                  <span>Risk: {mat.riskFactors[0]}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Add custom material form */}
          <form onSubmit={handleAddMaterial} className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-xs font-semibold text-slate-700 block">Add Custom Intern Material Exercise</span>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Material Name (e.g. Pure Gold)"
                value={newMaterialName}
                onChange={(e) => setNewMaterialName(e.target.value)}
                className="col-span-2 text-xs border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <select
                value={newMaterialType}
                onChange={(e) => setNewMaterialType(e.target.value as any)}
                className="text-xs border border-slate-200 bg-white rounded-lg p-1.5 text-slate-600 focus:outline-none"
              >
                <option value="Metal Alloy">Metal Alloy</option>
                <option value="Biodegradable Polymer">Bioresorbable Polymer</option>
                <option value="Permanent Polymer">Permanent Polymer</option>
                <option value="Active Drug">Active Drug</option>
              </select>
              <input
                type="text"
                placeholder="Grade (e.g. USP VI)"
                value={newMaterialGrade}
                onChange={(e) => setNewMaterialGrade(e.target.value)}
                className="text-xs border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Core Purpose/Function"
                value={newMaterialPurpose}
                onChange={(e) => setNewMaterialPurpose(e.target.value)}
                className="col-span-2 text-xs border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Leachable/Toxic Risk Concern"
                value={newMaterialRisk}
                onChange={(e) => setNewMaterialRisk(e.target.value)}
                className="col-span-2 text-xs border border-slate-200 rounded-lg p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={!newMaterialName || !newMaterialPurpose}
              className="w-full text-xs bg-slate-800 text-white rounded-lg py-1.5 font-medium hover:bg-slate-900 flex justify-center items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Plus size={14} /> Add to Study Stent
            </button>
          </form>
        </div>
      </div>

      {/* Required Endpoints list - 7 Cols */}
      <div className="lg:col-span-7 space-y-5">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 text-base">Required Biological Evaluations</h3>
              <p className="text-xs text-slate-500">According to Annex A of ISO 10993-1:2018</p>
            </div>
            <button
              onClick={downloadEvaluationReport}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 px-3.5 font-medium flex items-center gap-1.5 transition-all shadow-sm shadow-blue-100"
            >
              <Download size={14} /> Download BEP Report
            </button>
          </div>

          {/* Warning banner for Class D stent */}
          {selectedTypeId === 'implant_blood' && selectedDuration === 'long_term' && (
            <div className="bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-100 text-xs flex items-start gap-2 mb-4">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
              <div>
                <strong className="font-semibold">Vascular Implant Alert (Class D / III):</strong> Since this device resides permanently in blood, all 13 biological testing pathways are standard. In-vivo implantation and Hemocompatibility must be conducted in compliance with Good Laboratory Practice (GLP).
              </div>
            </div>
          )}

          <div className="space-y-3">
            {activeEndpoints.map((ep) => (
              <div key={ep.key} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1 bg-green-100 text-green-700 rounded-full">
                    <Check size={12} />
                  </span>
                  <span className="font-semibold text-slate-800 text-xs">{ep.name}</span>
                  <span className="text-[9px] font-mono text-slate-400 bg-slate-200/50 py-0.5 px-1.5 rounded ml-auto">
                    {ep.standardReference.split(':')[0]}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal mb-2">{ep.description}</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] pt-2 border-t border-slate-100 bg-slate-50/50">
                  <div>
                    <span className="text-slate-400 block font-medium">CLINICAL FOCUS</span>
                    <span className="text-slate-600 leading-snug">{ep.clinicalSignificance}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">METHOD/STANDARD</span>
                    <span className="text-slate-500 font-mono text-[9px]">{ep.standardReference}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {optionalEndpoints.length > 0 && (
            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-600 block mb-2">Endpoints NOT required for this category (Exempted)</span>
              <div className="flex flex-wrap gap-1.5">
                {optionalEndpoints.map((ep) => (
                  <span
                    key={ep.key}
                    className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-md cursor-help border border-slate-200/40"
                    title={ep.description}
                  >
                    {ep.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modern ISO 10993 Big Concepts Explainer Panel */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
            <span className="p-1 bg-indigo-50 text-indigo-600 rounded">
              <CheckCircle2 size={16} />
            </span>
            <h4 className="font-bold text-slate-800 text-sm">ISO 10993 modern Principles: Characterization-First</h4>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            In modern medical device regulatory pathways, **animal testing is the absolute last resort**. Regulatory bodies now mandate a chemistry-first routing, which can drastically reduce development timelines.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1.5 mb-1 text-slate-800 font-bold text-[11px]">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>ISO 10993-18 (E&L Chemistry)</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                **Extractables & Leachables (E&L)**: Chemical screening using high-resolution GC-MS, LC-MS, and ICP-OES to map out all polymers, plasticizers, and trace metals washing off the device under extreme thermal stress.
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1.5 mb-1 text-slate-800 font-bold text-[11px]">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span>ISO 10993-17 (Toxicology)</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                **Toxicological Risk Assessment**: Toxicologists compute the **Tolerable Intake (TI)** for every identified chemical. If the calculated **Margin of Safety (MoS)** exceeds 1.0, you can legally bypass chronic animal studies.
              </p>
            </div>
          </div>

          <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100/50 text-[10px] text-slate-600 leading-relaxed">
            <strong className="text-slate-800 block mb-0.5">RAC Forge Consultant Rule of Thumb:</strong>
            Under the EU MDR, a Notified Body auditor will instantly reject a technical documentation folder if the manufacturer immediately runs animal tests without first performing chemical characterization under ISO 10993-18. Chemistry data is mandatory for all Class III implants.
          </div>
        </div>
      </div>
    </div>
  );
}
