/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { INITIAL_FMEA_ROWS } from '../data/caseStudyData';
import { FMEARow } from '../types';
import { CheckCircle2, Download, AlertTriangle, ShieldAlert, ArrowRight, RotateCcw } from 'lucide-react';

interface RiskManagementBoardProps {
  onTaskCompleted: (taskKey: string) => void;
}

export default function RiskManagementBoard({ onTaskCompleted }: RiskManagementBoardProps) {
  const [fmeaRows, setFmeaRows] = useState<FMEARow[]>(
    INITIAL_FMEA_ROWS.map(row => ({
      ...row,
      selectedMitigations: [] // empty initially to let interns "apply" them
    }))
  );
  
  const [activeHazardId, setActiveHazardId] = useState<string>('HAZ-001');
  const [viewPhase, setViewPhase] = useState<'pre' | 'post'>('pre');

  // Find active hazard row
  const activeRow = fmeaRows.find(r => r.id === activeHazardId) || fmeaRows[0];

  const handleToggleMitigation = (hazardId: string, mitigation: string) => {
    setFmeaRows(prev =>
      prev.map(row => {
        if (row.id !== hazardId) return row;
        
        const alreadySelected = row.selectedMitigations.includes(mitigation);
        const nextSelected = alreadySelected
          ? row.selectedMitigations.filter(m => m !== mitigation)
          : [...row.selectedMitigations, mitigation];
          
        return {
          ...row,
          selectedMitigations: nextSelected
        };
      })
    );
  };

  const handleResetMitigations = () => {
    setFmeaRows(prev =>
      prev.map(row => ({
        ...row,
        selectedMitigations: []
      }))
    );
  };

  const handleCompleteAllMitigations = () => {
    setFmeaRows(prev =>
      prev.map(row => ({
        ...row,
        selectedMitigations: [...row.mitigationControls]
      }))
    );
  };

  // Helper to calculate dynamic post-mitigation scores
  const getCalculatedScores = (row: FMEARow) => {
    const totalCount = row.mitigationControls.length;
    const selectedCount = row.selectedMitigations.length;
    
    // If no controls applied, scores remain raw
    if (selectedCount === 0) {
      return {
        occurrence: row.preOccurrence,
        severity: row.preSeverity,
        rpn: row.preOccurrence * row.preSeverity,
        level: getRiskLevel(row.preOccurrence * row.preSeverity)
      };
    }

    // Occurrence drops based on selected mitigations
    // For every control applied, occurrence drops by 1 (min 1)
    const newOccurrence = Math.max(1, row.preOccurrence - selectedCount);
    
    // Severity usually stays constant in medical design (harm is harm), but sometimes can drop slightly with specific containment
    // Let's drop severity by 1 only if ALL mitigations are selected, otherwise keep same
    const newSeverity = selectedCount === totalCount ? Math.max(1, row.preSeverity - 1) : row.preSeverity;
    const rpn = newOccurrence * newSeverity;

    return {
      occurrence: newOccurrence,
      severity: newSeverity,
      rpn,
      level: getRiskLevel(rpn)
    };
  };

  // Calculate 5x5 cell risk level
  const getCellRiskLevel = (occ: number, sev: number) => {
    const rpn = occ * sev;
    if (rpn >= 12 || sev === 5) return 'high'; // Red zone
    if (rpn >= 6) return 'medium'; // Yellow zone
    return 'low'; // Green zone
  };

  const getRiskLevel = (rpn: number) => {
    if (rpn >= 12) return 'High (Unacceptable)';
    if (rpn >= 6) return 'Medium (ALARP)';
    return 'Low (Acceptable)';
  };

  const getRiskColorClass = (level: string) => {
    if (level.startsWith('High')) return 'text-red-600 bg-red-50 border-red-100';
    if (level.startsWith('Medium')) return 'text-amber-600 bg-amber-50 border-amber-100';
    return 'text-green-600 bg-green-50 border-green-100';
  };

  // Get active hazard coordinate for matrix plotting
  const getCoordinates = (phase: 'pre' | 'post') => {
    return fmeaRows.map(row => {
      if (phase === 'pre') {
        return {
          id: row.id,
          label: row.id.replace('HAZ-', 'H'),
          occ: row.preOccurrence,
          sev: row.preSeverity,
          name: row.hazard
        };
      } else {
        const calc = getCalculatedScores(row);
        return {
          id: row.id,
          label: row.id.replace('HAZ-', 'H'),
          occ: calc.occurrence,
          sev: calc.severity,
          name: row.hazard
        };
      }
    });
  };

  const downloadFmeaCSV = () => {
    let csvContent = 'Hazard ID,Hazard Name,Category,Failure Mode,Potential Harm,Pre-Occurrence,Pre-Severity,Pre-RPN,Applied Controls,Post-Occurrence,Post-Severity,Post-RPN,Residual Status\n';
    
    fmeaRows.forEach(row => {
      const calc = getCalculatedScores(row);
      const appliedControls = row.selectedMitigations.map(m => m.replace(/"/g, '""')).join('; ');
      csvContent += `"${row.id}","${row.hazard}","${row.category}","${row.description}","${row.potentialHarm}",${row.preOccurrence},${row.preSeverity},${row.preOccurrence * row.preSeverity},"${appliedControls}",${calc.occurrence},${calc.severity},${calc.rpn},"${calc.level}"\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ISO_14971_Stent_FMEA_Report.csv';
    link.click();
    URL.revokeObjectURL(url);

    // Trigger parent task completion
    onTaskCompleted('risk');
  };

  const allMitigatedCount = fmeaRows.filter(r => {
    const calc = getCalculatedScores(r);
    return calc.rpn < 6; // green zone
  }).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="risk-section">
      {/* 5x5 Heatmap Matrix - 4 Cols */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800 text-sm">ISO 14971 Risk Matrix</h3>
            {/* View phase toggle */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setViewPhase('pre')}
                className={`text-[10px] font-semibold px-2 py-1 rounded-lg transition-all ${
                  viewPhase === 'pre' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'
                }`}
              >
                Pre-Mitigation
              </button>
              <button
                onClick={() => setViewPhase('post')}
                className={`text-[10px] font-semibold px-2 py-1 rounded-lg transition-all ${
                  viewPhase === 'post' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'
                }`}
              >
                Residual Risk
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-500 mb-5 leading-normal">
            Currently displaying <strong className="text-slate-700 font-medium">{viewPhase === 'pre' ? 'Pre-Mitigation (Initial Raw)' : 'Post-Mitigation (Residual)'}</strong> hazard mapping.
          </p>

          {/* 5x5 Grid */}
          <div className="relative">
            {/* Y-Axis Label */}
            <div className="absolute -left-5 top-1/2 -rotate-90 origin-center text-[10px] font-bold text-slate-400 tracking-wider">
              SEVERITY (S)
            </div>
            
            <div className="pl-6 pb-6">
              <div className="grid grid-cols-5 gap-1 bg-slate-50 p-2 rounded-xl border border-slate-100">
                {/* Loop Severity (S) from 5 down to 1 */}
                {[5, 4, 3, 2, 1].map((sev) => (
                  <div key={sev} className="contents">
                    {/* Loop Occurrence (O) from 1 to 5 */}
                    {[1, 2, 3, 4, 5].map((occ) => {
                      const cellRisk = getCellRiskLevel(occ, sev);
                      const activePlotted = getCoordinates(viewPhase).filter(
                        p => p.occ === occ && p.sev === sev
                      );
                      
                      let bgClass = '';
                      if (cellRisk === 'high') bgClass = 'bg-red-100 border-red-200/50 hover:bg-red-200/60';
                      else if (cellRisk === 'medium') bgClass = 'bg-amber-100 border-amber-200/50 hover:bg-amber-200/60';
                      else bgClass = 'bg-green-100 border-green-200/50 hover:bg-green-200/60';

                      return (
                        <div
                          key={`${sev}-${occ}`}
                          className={`h-11 rounded-lg border flex flex-wrap items-center justify-center p-1 cursor-default transition-colors relative ${bgClass}`}
                          title={`Severity: ${sev}, Occurrence: ${occ}`}
                        >
                          {/* Plotted Hazards */}
                          {activePlotted.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => setActiveHazardId(p.id)}
                              className={`text-[9px] font-bold px-1 py-0.5 rounded shadow-sm text-white ${
                                p.id === activeHazardId 
                                  ? 'bg-slate-900 ring-2 ring-white scale-110 z-10' 
                                  : 'bg-slate-700/80 hover:bg-slate-800'
                              }`}
                              title={`${p.id}: ${p.name}`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              
              {/* X-Axis labels */}
              <div className="grid grid-cols-5 gap-1 mt-1 text-center text-[10px] font-semibold text-slate-400">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
              <div className="text-center text-[10px] font-bold text-slate-400 mt-2 tracking-wider">
                OCCURRENCE (O)
              </div>
            </div>
          </div>

          {/* Map Legend */}
          <div className="flex justify-between items-center text-[10px] font-medium pt-4 border-t border-slate-100 mt-4">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-red-200 border border-red-300 rounded"></span>
              <span className="text-slate-500">Unacceptable</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-amber-200 border border-amber-300 rounded"></span>
              <span className="text-slate-500">ALARP (Medium)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-green-200 border border-green-300 rounded"></span>
              <span className="text-slate-500">Acceptable (Low)</span>
            </div>
          </div>
        </div>

        {/* Rapid training actions */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-xs space-y-3">
          <span className="font-semibold text-slate-800 block">Trainer Automation Actions</span>
          <p className="text-slate-500 text-[11px] leading-normal">
            Speed up your presentation by using these automatic setup controls, or let interns complete them individually.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCompleteAllMitigations}
              className="py-1.5 px-3 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg text-[11px] transition-all"
            >
              Apply All Mitigations
            </button>
            <button
              onClick={handleResetMitigations}
              className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium rounded-lg text-[11px] flex justify-center items-center gap-1"
            >
              <RotateCcw size={12} /> Reset Risk Board
            </button>
          </div>
        </div>
      </div>

      {/* Interactive FMEA Worksheet - 8 Cols */}
      <div className="lg:col-span-7 space-y-5">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 text-base">FMEA Risk Management Board</h3>
              <p className="text-xs text-slate-500">Mitigate Class D hazards dynamically below</p>
            </div>
            <button
              onClick={downloadFmeaCSV}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 px-3.5 font-medium flex items-center gap-1.5 transition-all shadow-sm shadow-blue-100"
            >
              <Download size={14} /> Download FMEA (.CSV)
            </button>
          </div>

          {/* Quick status report */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs flex justify-between items-center mb-4">
            <span className="text-slate-600 leading-normal">
              Overall Safety Target:{' '}
              <strong className="text-slate-800 font-semibold">
                {allMitigatedCount === fmeaRows.length ? '100% Acceptable (All Green/Yellow)' : `${allMitigatedCount}/${fmeaRows.length} Hazards Acceptable`}
              </strong>
            </span>
            <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${allMitigatedCount === fmeaRows.length ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
              {allMitigatedCount === fmeaRows.length ? 'COMPLIANT' : 'PENDING ACTION'}
            </span>
          </div>

          {/* Hazard Selection List */}
          <div className="grid grid-cols-5 gap-1.5 mb-5">
            {fmeaRows.map((row) => {
              const calc = getCalculatedScores(row);
              const isSelected = row.id === activeHazardId;
              
              let badgeColor = 'bg-red-500';
              if (calc.rpn < 6) badgeColor = 'bg-green-500';
              else if (calc.rpn < 10) badgeColor = 'bg-amber-500';

              return (
                <button
                  key={row.id}
                  onClick={() => setActiveHazardId(row.id)}
                  className={`p-2 text-center rounded-xl border transition-all relative ${
                    isSelected 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm shadow-slate-100' 
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="block text-[11px] font-bold">{row.id.replace('HAZ-', 'H ')}</span>
                  <span className="text-[8px] opacity-80 block truncate max-w-full">{row.hazard.split(' ')[0]}</span>
                  <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white ${badgeColor}`}></span>
                </button>
              );
            })}
          </div>

          {/* Active Hazard Workspace */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
            <div className="flex justify-between items-start border-b border-slate-200/60 pb-3">
              <div>
                <span className="text-[10px] font-mono text-blue-600 font-bold bg-blue-50 py-0.5 px-2 rounded-md">
                  {activeRow.id} | {activeRow.category}
                </span>
                <h4 className="font-bold text-slate-800 text-sm mt-1">{activeRow.hazard}</h4>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-slate-400 block font-medium">POTENTIAL CLINICAL HARM</span>
                <span className="text-[10px] text-red-700 font-medium leading-tight max-w-xs block">{activeRow.potentialHarm}</span>
              </div>
            </div>

            {/* Risk Calculation Score Comparison */}
            <div className="grid grid-cols-2 gap-4">
              {/* Pre-Mitigation Card */}
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                <span className="text-[10px] text-slate-400 font-bold block mb-1.5 uppercase">1. Raw Initial Risk</span>
                <div className="flex gap-4">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Occurrence (O)</span>
                    <span className="text-lg font-bold text-slate-800">{activeRow.preOccurrence}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Severity (S)</span>
                    <span className="text-lg font-bold text-slate-800">{activeRow.preSeverity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Risk Index (RPN)</span>
                    <span className="text-lg font-extrabold text-red-600">{activeRow.preOccurrence * activeRow.preSeverity}</span>
                  </div>
                </div>
                <div className="mt-2 text-[10px] px-2 py-0.5 rounded bg-red-50 text-red-700 inline-block font-semibold border border-red-100">
                  Unacceptable Risk Zone
                </div>
              </div>

              {/* Post-Mitigation Card */}
              {(() => {
                const calc = getCalculatedScores(activeRow);
                return (
                  <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                    <span className="text-[10px] text-slate-400 font-bold block mb-1.5 uppercase">2. Residual Protected Risk</span>
                    <div className="flex gap-4">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Occurrence (O)</span>
                        <span className="text-lg font-bold text-slate-800">{calc.occurrence}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Severity (S)</span>
                        <span className="text-lg font-bold text-slate-800">{calc.severity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block">Risk Index (RPN)</span>
                        <span className={`text-lg font-extrabold ${calc.rpn < 6 ? 'text-green-600' : 'text-amber-600'}`}>{calc.rpn}</span>
                      </div>
                    </div>
                    <div className={`mt-2 text-[10px] px-2 py-0.5 rounded inline-block font-semibold border ${getRiskColorClass(calc.level)}`}>
                      {calc.level}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Interactive Mitigations Selector */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 block">
                Implement Risk Controls (FDA Hierarchy of Controls)
              </span>
              <p className="text-[10px] text-slate-500 mb-2 leading-relaxed">
                Check the engineering, chemical, and instructions-for-use (IFU) mitigations to apply them. Watch the Residual Risk RPN reduce above and on the matrix.
              </p>

              <div className="space-y-2">
                {activeRow.mitigationControls.map((mit, mIdx) => {
                  const isChecked = activeRow.selectedMitigations.includes(mit);
                  return (
                    <button
                      key={mIdx}
                      type="button"
                      onClick={() => handleToggleMitigation(activeRow.id, mit)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-3 ${
                        isChecked 
                          ? 'bg-blue-50/50 border-blue-200 text-slate-800' 
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                        isChecked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <span className="text-[10px] font-bold">✓</span>}
                      </div>
                      <div>
                        <strong className="text-slate-800 block font-medium mb-0.5">
                          {mIdx === 0 ? 'Tier 1 Control: Design Feature' : mIdx === 1 ? 'Tier 2 Control: Protective Measure' : 'Tier 3 Control: Information for Safety / IFU'}
                        </strong>
                        <span className="leading-relaxed block">{mit}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width ISO 14971 Risk Management Explainer Board */}
      <div className="col-span-12 mt-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-800 text-base">RAC Forge ISO 14971 Risk Training Center</h3>
            <p className="text-xs text-slate-500">Essential regulatory concepts regarding risk management for high-risk (Class III / D) medical products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: ISO 14971 Lifecycle */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                <span className="w-2.5 h-2.5 rounded bg-blue-500"></span>
                <span>The Risk Management Lifecycle</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Risk management is not a one-time "box-checking" exercise. It starts at concept phase, proceeds through Design FMEA, and continues actively into production and post-market surveillance. Every customer complaint or adverse event must feed directly back into this risk assessment.
              </p>
            </div>

            {/* Box 2: Hierarchy of Controls */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                <span className="w-2.5 h-2.5 rounded bg-amber-500"></span>
                <span>FDA / ISO Mitigation Hierarchy</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Regulatory bodies mandate that risk control measures must follow a strict hierarchy:
              </p>
              <ol className="text-[11px] text-slate-600 list-decimal pl-4 space-y-1">
                <li><strong>Safe by Design</strong>: Eliminate the risk physically (e.g. bioresorbable coating).</li>
                <li><strong>Protective Measures</strong>: Mechanical features or machine alarms (e.g. balloon pressure limits).</li>
                <li><strong>Information for Safety</strong>: Warnings, labels, and IFU manuals.</li>
              </ol>
            </div>

            {/* Box 3: ALARP vs EU MDR State of the Art */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                <span className="w-2.5 h-2.5 rounded bg-indigo-500"></span>
                <span>The EU MDR Shift (No Economic Excuse)</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Historically, **ALARP** (As Low As Reasonably Practicable) allowed companies to stop mitigating risks if the cost was too high. Under **EU MDR Annex I**, this economic excuse is **completely removed**. Manufacturers must reduce risks as far as possible using the absolute latest "State of the Art" (SOTA) scientific standards.
              </p>
            </div>
          </div>

          <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 text-[11px] text-slate-600 leading-relaxed">
            <strong className="text-slate-800 block mb-0.5">Consultant Supervisor Tip for Screen Share:</strong>
            "When teaching interns, point out HAZ-001 (Drug Dose Toxicity). Explain how we cannot completely remove the drug (Severity is fixed because Sirolimus is toxic at high levels), so we must rely on Tier 1 (Safe by Design) bioresorbable polymers to slow down release over exactly 90 days. This decreases the probability of Occurrence, successfully shifting the final risk index from High to Low!"
          </div>
        </div>
      </div>
    </div>
  );
}
