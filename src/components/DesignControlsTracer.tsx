/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { INITIAL_TRACEABILITY_NODES } from '../data/caseStudyData';
import { TraceabilityNode } from '../types';
import { CheckCircle2, Download, AlertTriangle, ArrowRight, Plus, Trash2, HelpCircle } from 'lucide-react';

interface DesignControlsTracerProps {
  onTaskCompleted: (taskKey: string) => void;
}

export default function DesignControlsTracer({ onTaskCompleted }: DesignControlsTracerProps) {
  const [nodes, setNodes] = useState<TraceabilityNode[]>(
    INITIAL_TRACEABILITY_NODES.map(n => ({ ...n, status: 'verified' }))
  );
  
  // Custom requirements input state
  const [customUserNeed, setCustomUserNeed] = useState('');
  const [customDesignInput, setCustomDesignInput] = useState('');
  const [customDesignOutput, setCustomDesignOutput] = useState('');
  const [customVerification, setCustomVerification] = useState('');
  const [customValidation, setCustomValidation] = useState('');

  // Selected trace group (UN-001 or UN-002 or Custom)
  const [selectedGroup, setSelectedGroup] = useState<string>('UN-001');

  // Audit state - whether the intern has run the "DHF Compliance Audit"
  const [auditPassed, setAuditPassed] = useState<boolean | null>(null);
  const [auditErrors, setAuditErrors] = useState<string[]>([]);

  // Sub-tab selection for the QMS educational board
  const [infoTab, setInfoTab] = useState<'records' | 'v_and_v' | 'qms_standards'>('records');

  // Selected file details in QMS records explorer
  const [selectedMockFile, setSelectedMockFile] = useState<string>('DHF_Overview.pdf');

  // Function to add a complete custom traceability chain
  const handleAddCustomChain = (e: FormEvent) => {
    e.preventDefault();
    if (!customUserNeed || !customDesignInput || !customDesignOutput || !customVerification || !customValidation) return;

    const idNum = Math.floor(100 + Math.random() * 900);
    const unId = `UN-${idNum}`;
    const diId = `DI-${idNum}`;
    const doId = `DO-${idNum}`;
    const dveId = `DVE-${idNum}`;
    const dvaId = `DVA-${idNum}`;

    const newNodes: TraceabilityNode[] = [
      {
        id: unId,
        label: `${unId}: ${customUserNeed.slice(0, 30)}...`,
        type: 'user_need',
        description: customUserNeed,
        status: 'verified'
      },
      {
        id: diId,
        label: `${diId}: ${customDesignInput.slice(0, 30)}...`,
        type: 'design_input',
        description: customDesignInput,
        parentId: unId,
        status: 'verified'
      },
      {
        id: doId,
        label: `${doId}: ${customDesignOutput.slice(0, 30)}...`,
        type: 'design_output',
        description: customDesignOutput,
        parentId: diId,
        status: 'verified'
      },
      {
        id: dveId,
        label: `${dveId}: ${customVerification.slice(0, 30)}...`,
        type: 'verification',
        description: customVerification,
        parentId: doId,
        status: 'verified'
      },
      {
        id: dvaId,
        label: `${dvaId}: ${customValidation.slice(0, 30)}...`,
        type: 'validation',
        description: customValidation,
        parentId: dveId,
        status: 'verified'
      }
    ];

    setNodes([...nodes, ...newNodes]);
    setSelectedGroup(unId);
    
    // Clear inputs
    setCustomUserNeed('');
    setCustomDesignInput('');
    setCustomDesignOutput('');
    setCustomVerification('');
    setCustomValidation('');
    setAuditPassed(null); // Reset audit since new nodes added
  };

  const handleRemoveChain = (unId: string) => {
    // Find all nodes that are linked to this UN
    const relatedIds = [unId];
    
    // Simple recursive-like filter for single level dependency depth
    const inputs = nodes.filter(n => n.parentId === unId);
    inputs.forEach(i => {
      relatedIds.push(i.id);
      const outputs = nodes.filter(n => n.parentId === i.id);
      outputs.forEach(o => {
        relatedIds.push(o.id);
        const verifications = nodes.filter(n => n.parentId === o.id);
        verifications.forEach(v => {
          relatedIds.push(v.id);
          const validations = nodes.filter(n => n.parentId === v.id);
          validations.forEach(val => relatedIds.push(val.id));
        });
      });
    });

    setNodes(nodes.filter(n => !relatedIds.includes(n.id)));
    setSelectedGroup('UN-001');
    setAuditPassed(null);
  };

  // Run a simulated strict DHF regulatory audit on our matrix
  const handleRunAudit = () => {
    const errors: string[] = [];
    
    // Group needs
    const userNeeds = nodes.filter(n => n.type === 'user_need');
    
    userNeeds.forEach(un => {
      // Check for matching Design Input
      const input = nodes.find(n => n.type === 'design_input' && n.parentId === un.id);
      if (!input) {
        errors.push(`Compliance Gap: User Need [${un.id}] is unmapped. It has no associated Design Input specification!`);
        return;
      }

      // Check for matching Design Output
      const output = nodes.find(n => n.type === 'design_output' && n.parentId === input.id);
      if (!output) {
        errors.push(`Compliance Gap: Design Input [${input.id}] has no corresponding Design Output (drawing/bill of materials)!`);
        return;
      }

      // Check for matching Verification
      const ver = nodes.find(n => n.type === 'verification' && n.parentId === output.id);
      if (!ver) {
        errors.push(`Regulatory Fine Risk: Design Output [${output.id}] has no mechanical/chemical Verification protocol mapped!`);
      }

      // Check for matching Validation
      const val = nodes.find(n => n.type === 'validation' && n.parentId === ver?.id);
      if (!val) {
        errors.push(`Severe Clinical Violation: Verification protocol [${ver?.id || 'unknown'}] has no Clinical Validation study linking back to user clinical needs!`);
      }
    });

    setAuditErrors(errors);
    setAuditPassed(errors.length === 0);
    
    // Complete parent task
    onTaskCompleted('design_files');
  };

  // Get active chain nodes based on selected group
  const getActiveChain = () => {
    const unNode = nodes.find(n => n.id === selectedGroup && n.type === 'user_need');
    if (!unNode) return [];

    const activeList: TraceabilityNode[] = [unNode];

    const inputNode = nodes.find(n => n.type === 'design_input' && n.parentId === unNode.id);
    if (inputNode) {
      activeList.push(inputNode);
      const outputNode = nodes.find(n => n.type === 'design_output' && n.parentId === inputNode.id);
      if (outputNode) {
        activeList.push(outputNode);
        const verNode = nodes.find(n => n.type === 'verification' && n.parentId === outputNode.id);
        if (verNode) {
          activeList.push(verNode);
          const valNode = nodes.find(n => n.type === 'validation' && n.parentId === verNode.id);
          if (valNode) {
            activeList.push(valNode);
          }
        }
      }
    }

    return activeList;
  };

  const activeChain = getActiveChain();
  const userNeedsList = nodes.filter(n => n.type === 'user_need');

  const downloadTraceabilityMatrix = () => {
    let mdContent = `# RAC FORGE PRIVATE LIMITED\n`;
    mdContent += `# COMPLIANT DHF DESIGN TRACEABILITY MATRIX\n`;
    mdContent += `Generated: ${new Date().toLocaleDateString()}\n\n`;
    mdContent += `| User Need (UN) | Design Input (DI) | Design Output (DO) | Design Verification (DVE) | Design Validation (DVA) |\n`;
    mdContent += `| :--- | :--- | :--- | :--- | :--- |\n`;

    userNeedsList.forEach(un => {
      const input = nodes.find(n => n.type === 'design_input' && n.parentId === un.id);
      const output = input ? nodes.find(n => n.type === 'design_output' && n.parentId === input.id) : null;
      const ver = output ? nodes.find(n => n.type === 'verification' && n.parentId === output.id) : null;
      const val = ver ? nodes.find(n => n.type === 'validation' && n.parentId === ver.id) : null;

      mdContent += `| **${un.id}:** ${un.description.replace(/\n/g, ' ')} | `;
      mdContent += input ? `**${input.id}:** ${input.description.replace(/\n/g, ' ')} | ` : 'MISSING | ';
      mdContent += output ? `**${output.id}:** ${output.description.replace(/\n/g, ' ')} | ` : 'MISSING | ';
      mdContent += ver ? `**${ver.id}:** ${ver.description.replace(/\n/g, ' ')} | ` : 'MISSING | ';
      mdContent += val ? `**${val.id}:** ${val.description.replace(/\n/g, ' ')} |\n` : 'MISSING |\n';
    });

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DHF_Traceability_Matrix_MDR.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="trace-section">
      {/* Traceability Flow Visualization - 7 Cols */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 text-base">DHF Traceability Chain</h3>
              <p className="text-xs text-slate-500">The core compliance thread of medical device design controls</p>
            </div>
            <button
              onClick={downloadTraceabilityMatrix}
              className="text-xs bg-slate-800 hover:bg-slate-900 text-white rounded-xl py-2 px-3.5 font-medium flex items-center gap-1.5 transition-all shadow-sm shadow-slate-100"
            >
              <Download size={14} /> Download Matrix (.MD)
            </button>
          </div>

          {/* Group selector tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
            {userNeedsList.map((un) => (
              <div key={un.id} className="relative flex-shrink-0">
                <button
                  onClick={() => setSelectedGroup(un.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    selectedGroup === un.id
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-100'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {un.id.replace('UN-', 'Trace Chain ')}
                </button>
                {un.id.startsWith('UN-') && !['UN-001', 'UN-002'].includes(un.id) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveChain(un.id);
                    }}
                    className="absolute -top-1.5 -right-1 bg-red-100 text-red-600 border border-red-200 rounded-full p-0.5 hover:bg-red-200"
                  >
                    <Trash2 size={9} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Interactive requirement nodes flow (vertical cards connected by lines) */}
          <div className="space-y-4 relative pl-3 border-l-2 border-slate-200 ml-4 py-1">
            {activeChain.map((node, index) => {
              let headerText = '';
              let badgeColor = '';
              let explanation = '';

              if (node.type === 'user_need') {
                headerText = 'Tier 1: Clinical User Need';
                badgeColor = 'bg-indigo-100 text-indigo-800 border-indigo-200';
                explanation = 'What does the clinician or patient physically require in the real world? (High-level, non-technical).';
              } else if (node.type === 'design_input') {
                headerText = 'Tier 2: Engineering Design Input';
                badgeColor = 'bg-blue-100 text-blue-800 border-blue-200';
                explanation = 'How do we translate that need into a measurable, testable engineering specification?';
              } else if (node.type === 'design_output') {
                headerText = 'Tier 3: Design Output (Physical Realization)';
                badgeColor = 'bg-amber-100 text-amber-800 border-amber-200';
                explanation = 'What is the physical drawing, recipe, material grade, or formula that engineers build?';
              } else if (node.type === 'verification') {
                headerText = 'Tier 4: Design Verification (Bench Testing)';
                badgeColor = 'bg-teal-100 text-teal-800 border-teal-200';
                explanation = 'Does the design output meet the input specification? (Bench test, chemical assay, simulation - DID WE MAKE THE DEVICE RIGHT?).';
              } else if (node.type === 'validation') {
                headerText = 'Tier 5: Design Validation (Clinical Performance)';
                badgeColor = 'bg-purple-100 text-purple-800 border-purple-200';
                explanation = 'Does the final device solve the user need in real anatomical environments? (Animal models, human clinical trials - DID WE MAKE THE RIGHT DEVICE?).';
              }

              return (
                <div key={node.id} className="relative group">
                  {/* Connection Node Circle */}
                  <span className="absolute -left-5 top-4 w-3.5 h-3.5 bg-blue-600 border-2 border-white rounded-full shadow-sm z-10"></span>
                  
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 hover:bg-slate-100/50 transition-colors">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        {node.id}
                      </span>
                      <span className={`text-[10px] font-semibold py-0.5 px-2 rounded-full border ${badgeColor}`}>
                        {headerText}
                      </span>
                    </div>
                    
                    <p className="text-xs font-semibold text-slate-800 mb-1 leading-normal">
                      {node.description}
                    </p>
                    
                    <span className="text-[10px] text-slate-400 leading-normal block italic mt-1 bg-white p-1.5 rounded border border-slate-100">
                      <strong>Regulatory Rule:</strong> {explanation}
                    </span>
                  </div>
                </div>
              );
            })}

            {activeChain.length === 0 && (
              <div className="p-10 text-center text-slate-400">
                Select or add a trace chain to show the active compliance path.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Compliance Auditing & Add Chain - 5 Cols */}
      <div className="lg:col-span-5 space-y-6">
        {/* Compliance Audit Tool */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 text-base mb-1">DHF Compliance Auditor</h3>
          <p className="text-xs text-slate-500 mb-4">Simulate a high-stress Notified Body or FDA audit on your active traceability matrix.</p>
          
          <button
            onClick={handleRunAudit}
            className="w-full text-xs bg-red-600 hover:bg-red-700 text-white rounded-xl py-2 px-4 font-semibold flex justify-center items-center gap-1.5 transition-all shadow-sm"
          >
            Run Regulatory Audit Run
          </button>

          {auditPassed !== null && (
            <div className="mt-4 space-y-3">
              {auditPassed ? (
                <div className="p-3.5 bg-green-50 rounded-xl border border-green-100 text-xs">
                  <div className="flex items-center gap-1.5 text-green-800 font-bold mb-1">
                    <CheckCircle2 size={16} className="text-green-600" />
                    <span>Audit Passed Successfully!</span>
                  </div>
                  <p className="text-green-700 text-[11px] leading-relaxed">
                    Notified Body Auditor: "Every User Need is fully traced to clinical validation, and design outputs are verified with appropriate GLP laboratory protocols. Compliant DHF record."
                  </p>
                </div>
              ) : (
                <div className="p-3.5 bg-red-50 rounded-xl border border-red-100 text-xs">
                  <div className="flex items-center gap-1.5 text-red-800 font-bold mb-1">
                    <AlertTriangle size={16} className="text-red-600" />
                    <span>Audit Non-Conformance Found!</span>
                  </div>
                  <div className="space-y-1.5 text-red-700 text-[11px] max-h-40 overflow-y-auto">
                    {auditErrors.map((err, idx) => (
                      <p key={idx} className="leading-relaxed border-b border-red-100 pb-1">
                        • {err}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Add Chain Custom Exercise */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 text-base mb-1">Intern Trace Exercise</h3>
          <p className="text-xs text-slate-500 mb-4">Practice mapping a new product feature. Formulate a full chain below:</p>

          <form onSubmit={handleAddCustomChain} className="space-y-3">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">1. User Need</label>
              <input
                type="text"
                placeholder="e.g. Cardiologist wants high visibility under X-Ray."
                value={customUserNeed}
                onChange={(e) => setCustomUserNeed(e.target.value)}
                className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">2. Design Input (Spec)</label>
              <input
                type="text"
                placeholder="e.g. Stent must incorporate radiopaque gold markers."
                value={customDesignInput}
                onChange={(e) => setCustomDesignInput(e.target.value)}
                className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">3. Design Output (Blueprint)</label>
              <input
                type="text"
                placeholder="e.g. Formula gold alloy layer 0.5 microns thick on distal ends."
                value={customDesignOutput}
                onChange={(e) => setCustomDesignOutput(e.target.value)}
                className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">4. Verification (Bench)</label>
              <input
                type="text"
                placeholder="e.g. Fluoroscopic scanning assay to verify visibility rating."
                value={customVerification}
                onChange={(e) => setCustomVerification(e.target.value)}
                className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 uppercase">5. Validation (Clinical)</label>
              <input
                type="text"
                placeholder="e.g. Clinician review in catheter lab simulator."
                value={customValidation}
                onChange={(e) => setCustomValidation(e.target.value)}
                className="w-full text-xs border border-slate-200 rounded-lg p-2 focus:ring-1 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 font-semibold transition-colors"
            >
              Commit Custom Trace Chain
            </button>
          </form>
        </div>
      </div>

       {/* Full-Width QMS Educational & Guidelines Board */}
       <div className="col-span-12 mt-4 space-y-6">
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
           <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4 flex-wrap gap-3">
             <div>
               <h3 className="font-bold text-slate-800 text-base">RAC Forge Core QMS Training Board</h3>
               <p className="text-xs text-slate-500">Self-explanatory interactive reference portal for DHF/DMR/DHR files, Verification vs Validation, and standards.</p>
             </div>

             {/* Toggles */}
             <div className="flex bg-slate-100 p-1 rounded-xl">
               <button
                 onClick={() => setInfoTab('records')}
                 className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                   infoTab === 'records' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                 }`}
               >
                 DHF vs DMR vs DHR
               </button>
               <button
                 onClick={() => setInfoTab('v_and_v')}
                 className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                   infoTab === 'v_and_v' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                 }`}
               >
                 Verification vs Validation
               </button>
               <button
                 onClick={() => setInfoTab('qms_standards')}
                 className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all ${
                   infoTab === 'qms_standards' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                 }`}
               >
                 ISO 13485 vs 21 CFR 820
               </button>
             </div>
           </div>

           {/* Tab 1: DHF vs DMR vs DHR File Explorer */}
           {infoTab === 'records' && (
             <div className="space-y-4">
               <p className="text-xs text-slate-600 leading-relaxed">
                 A medical device company is audited on three main records. If a document is missing or in the wrong file, it triggers instant regulatory citations (FDA Form 483 / Major Non-Conformance). Click any document below to view its context:
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {/* DHF Folder */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                   <div className="flex items-center gap-1.5 mb-2 font-bold text-xs text-slate-800">
                     <span className="w-2.5 h-2.5 rounded bg-blue-500"></span>
                     <span>Design History File (DHF)</span>
                   </div>
                   <p className="text-[10px] text-slate-500 mb-3 leading-normal">
                     Documents <strong>how</strong> the device was designed. Proves that the design controls process was strictly followed.
                   </p>
                   <div className="space-y-1.5">
                     {[
                       { name: 'DHF_Overview.pdf', desc: 'Design History File. Proves the device was designed under compliance rules. Includes clinical testing protocols, risk mitigations, human usability studies.' },
                       { name: 'User_Needs_UN-001.pdf', desc: 'Real-world requirements written from cardiologist clinician input regarding balloon inflation and stent expansion forces.' },
                       { name: 'Risk_Management_FMEA_RevA.xlsx', desc: 'ISO 14971 Risk Assessment documenting risk-benefit evaluations and active engineering controls.' }
                     ].map(f => (
                       <button
                         key={f.name}
                         onClick={() => setSelectedMockFile(f.name)}
                         className={`w-full text-left p-2 rounded-lg text-[10px] font-mono border transition-all ${
                           selectedMockFile === f.name ? 'bg-blue-50 border-blue-300 text-blue-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                         }`}
                       >
                         📄 {f.name}
                       </button>
                     ))}
                   </div>
                 </div>

                 {/* DMR Folder */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                   <div className="flex items-center gap-1.5 mb-2 font-bold text-xs text-slate-800">
                     <span className="w-2.5 h-2.5 rounded bg-amber-500"></span>
                     <span>Device Master Record (DMR)</span>
                   </div>
                   <p className="text-[10px] text-slate-500 mb-3 leading-normal">
                     Documents <strong>how to build</strong> the device. The "recipe book" containing drawings, CAD specifications, and test methods.
                   </p>
                   <div className="space-y-1.5">
                     {[
                       { name: 'Manufacturing_Drawing_D-4402.dwg', desc: 'Device Master Record drawing. Fully specifies dimensions, laser pulse coordinates, and Nitinol material composition for production runs.' },
                       { name: 'Coating_Recipe_CR-99.pdf', desc: 'Formulation recipe outlining the exact ratio of Sirolimus drug to bioresorbable polymer solvent mixture.' },
                       { name: 'Coronary_Crimp_SOP-303.pdf', desc: 'Step-by-step Standard Operating Procedure for operators detailing machine settings, air pressures, and crimping alignments.' }
                     ].map(f => (
                       <button
                         key={f.name}
                         onClick={() => setSelectedMockFile(f.name)}
                         className={`w-full text-left p-2 rounded-lg text-[10px] font-mono border transition-all ${
                           selectedMockFile === f.name ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                         }`}
                       >
                         📄 {f.name}
                       </button>
                     ))}
                   </div>
                 </div>

                 {/* DHR Folder */}
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50">
                   <div className="flex items-center gap-1.5 mb-2 font-bold text-xs text-slate-800">
                     <span className="w-2.5 h-2.5 rounded bg-green-500"></span>
                     <span>Device History Record (DHR)</span>
                   </div>
                   <p className="text-[10px] text-slate-500 mb-3 leading-normal">
                     Documents <strong>what was built</strong>. The actual production logs proving that a specific batch met all DMR recipes.
                   </p>
                   <div className="space-y-1.5">
                     {[
                       { name: 'Lot_Batch_Traveler_B2026.pdf', desc: 'Device History Record file. Proves that batch B2026 was made precisely according to DMR specs. Documents the operator names, ambient temperature logs, and visual pass results.' },
                       { name: 'Sterility_EtO_Cycle_Log_S10.pdf', desc: 'Real cycle records verifying chamber humidity, gas concentration, and vacuum exposure curves for sterilization.' },
                       { name: 'Operator_Signoff_Sheet.pdf', desc: 'Individual signature log confirming that certified Cleanroom operators inspected and verified catheter balloon integrity.' }
                     ].map(f => (
                       <button
                         key={f.name}
                         onClick={() => setSelectedMockFile(f.name)}
                         className={`w-full text-left p-2 rounded-lg text-[10px] font-mono border transition-all ${
                           selectedMockFile === f.name ? 'bg-green-50 border-green-300 text-green-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                         }`}
                       >
                         📄 {f.name}
                       </button>
                     ))}
                   </div>
                 </div>
               </div>

               {/* Mock File Detail Viewer */}
               {selectedMockFile && (
                 <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-[10px] leading-relaxed border border-slate-950">
                   <span className="text-blue-400 block font-bold border-b border-slate-800 pb-1 mb-2">📄 ACTIVE RECORD PREVIEW: {selectedMockFile}</span>
                   <p className="text-slate-300 font-sans">
                     {(() => {
                       const f = [
                         { name: 'DHF_Overview.pdf', desc: 'Design History File. Proves the device was designed under compliance rules. Includes clinical testing protocols, risk mitigations, human usability studies.' },
                         { name: 'User_Needs_UN-001.pdf', desc: 'Real-world requirements written from cardiologist clinician input regarding balloon inflation and stent expansion forces.' },
                         { name: 'Risk_Management_FMEA_RevA.xlsx', desc: 'ISO 14971 Risk Assessment documenting risk-benefit evaluations and active engineering controls.' },
                         { name: 'Manufacturing_Drawing_D-4402.dwg', desc: 'Device Master Record drawing. Fully specifies dimensions, laser pulse coordinates, and Nitinol material composition for production runs.' },
                         { name: 'Coating_Recipe_CR-99.pdf', desc: 'Formulation recipe outlining the exact ratio of Sirolimus drug to bioresorbable polymer solvent mixture.' },
                         { name: 'Coronary_Crimp_SOP-303.pdf', desc: 'Step-by-step Standard Operating Procedure for operators detailing machine settings, air pressures, and crimping alignments.' },
                         { name: 'Lot_Batch_Traveler_B2026.pdf', desc: 'Device History Record file. Proves that batch B2026 was made precisely according to DMR specs. Documents the operator names, ambient temperature logs, and visual pass results.' },
                         { name: 'Sterility_EtO_Cycle_Log_S10.pdf', desc: 'Real cycle records verifying chamber humidity, gas concentration, and vacuum exposure curves for sterilization.' },
                         { name: 'Operator_Signoff_Sheet.pdf', desc: 'Individual signature log confirming that certified Cleanroom operators inspected and verified catheter balloon integrity.' }
                       ].find(x => x.name === selectedMockFile);
                       return f ? f.desc : 'Select a mock file above to see its detailed description.';
                     })()}
                   </p>
                 </div>
               )}
             </div>
           )}

           {/* Tab 2: Design Verification vs Validation */}
           {infoTab === 'v_and_v' && (
             <div className="space-y-4 text-xs text-slate-600 leading-normal">
               <p>
                 Understanding the distinction between <strong>Verification</strong> and <strong>Validation</strong> is one of the most critical training areas for junior engineers.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 space-y-2">
                   <span className="font-bold text-teal-900 block text-sm">Design Verification</span>
                   <p className="text-[11px] font-semibold text-teal-800">Focus Question: "Did we build the device right?"</p>
                   <ul className="space-y-1.5 text-[11px] list-disc pl-4 text-teal-900">
                     <li>Checks design outputs against design inputs.</li>
                     <li>Conducted primarily on standard benchtop environments.</li>
                     <li>Examples: Tensile pull test of catheter joints, drug elution chromatography assays, stent radial fatigue testing for 400M pressure cycles.</li>
                     <li>Result format: Objective pass/fail numbers against mechanical specs.</li>
                   </ul>
                 </div>

                 <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 space-y-2">
                   <span className="font-bold text-purple-900 block text-sm">Design Validation</span>
                   <p className="text-[11px] font-semibold text-purple-800">Focus Question: "Did we build the right device?"</p>
                   <ul className="space-y-1.5 text-[11px] list-disc pl-4 text-purple-900">
                     <li>Checks the physical device against clinical User Needs.</li>
                     <li>Conducted in simulated or actual clinical anatomical models.</li>
                     <li>Examples: GLP porcine animal studies to evaluate tissue healing, human clinical trials under GCP, physician simulated-use evaluations in catheter laboratories.</li>
                     <li>Result format: Human outcome scores, histological tissue reactions, and clinician usability feedback.</li>
                   </ul>
                 </div>
               </div>
             </div>
           )}

           {/* Tab 3: ISO 13485 vs FDA Part 820 */}
           {infoTab === 'qms_standards' && (
             <div className="space-y-3 text-xs text-slate-600 leading-normal">
               <p>
                 Medical device quality systems must comply with two dominant systems. Junior interns must learn how these rules align:
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                 <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                   <span className="font-bold text-slate-800 block text-xs">ISO 13485:2016 (International)</span>
                   <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                     An international harmonized standard specifying QMS requirements. It focuses on systemic process linkages, risk management integration throughout lifecycle (ISO 14971), and continuous organizational compliance.
                   </p>
                 </div>
                 <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                   <span className="font-bold text-slate-800 block text-xs">FDA 21 CFR Part 820 (United States)</span>
                   <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                     US Federal law specifying the Quality System Regulation (QSR) for medical devices. Features strict legal liability, strict document signature rules, and mandatory management reviews. FDA is currently transitioning to <strong>QMSR</strong> (Quality Management System Regulation) to unify Part 820 directly with ISO 13485.
                   </p>
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>
     </div>
   );
 }
