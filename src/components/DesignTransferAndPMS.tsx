/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { INITIAL_VALIDATION_STEPS, PMS_SCENARIOS } from '../data/caseStudyData';
import { ValidationStep, PMSScenario } from '../types';
import { Check, CheckCircle2, AlertTriangle, Play, HelpCircle, FileText, Sparkles, Building, Settings } from 'lucide-react';

interface DesignTransferAndPMSProps {
  onTaskCompleted: (taskKey: string) => void;
  activeSubTab: 'transfer' | 'pms';
}

export default function DesignTransferAndPMS({ onTaskCompleted, activeSubTab }: DesignTransferAndPMSProps) {
  // --- Tab 5: Design Transfer (IQ/OQ/PQ) State ---
  const [validationSteps, setValidationSteps] = useState<ValidationStep[]>(INITIAL_VALIDATION_STEPS);
  const [activeStepId, setActiveStepId] = useState<string>('VAL-001');

  // Interactive OQ Calibration States
  const [nozzlePressure, setNozzlePressure] = useState<number>(3.0); // Safe sweet spot is 4.5 - 5.5
  const [sprayScanSpeed, setSprayScanSpeed] = useState<number>(12); // Safe spot is 18 - 22
  const [oqOutputMessage, setOqOutputMessage] = useState<string>('');
  const [oqStatus, setOqStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  // Interactive IQ Hookups States
  const [iqPowerCheck, setIqPowerCheck] = useState(false);
  const [iqArgonCheck, setIqArgonCheck] = useState(false);
  const [iqHumidityCheck, setIqHumidityCheck] = useState(false);

  // Interactive PQ Simulation States
  const [pqShiftCount, setPqShiftCount] = useState<number>(0);
  const [pqMessage, setPqMessage] = useState<string>('');
  const [pqIsRunning, setPqIsRunning] = useState(false);

  // --- Tab 6: PMS Vigilance State ---
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('PMS-001');
  const [userDecisions, setUserDecisions] = useState<Record<string, string>>({}); // scenarioId -> optionId
  const [resolvedScenarios, setResolvedScenarios] = useState<string[]>([]);

  // Find active items
  const activeValidationStep = validationSteps.find(s => s.id === activeStepId) || validationSteps[0];
  const activeScenario = PMS_SCENARIOS.find(s => s.id === selectedScenarioId) || PMS_SCENARIOS[0];

  // IQ Validation triggers
  const handleVerifyIQ = () => {
    if (iqPowerCheck && iqArgonCheck && iqHumidityCheck) {
      setValidationSteps(prev =>
        prev.map(step => (step.id === 'VAL-001' ? { ...step, isCompleted: true, notes: 'Utilities and calibrations verified at 100% compliance.' } : step))
      );
      // Automatically advance step or show success
    }
  };

  // OQ Calibration triggers
  const handleRunOQChallenge = () => {
    // Math model to evaluate nozzle spray parameters
    // Sweet spot: pressure 4.5 to 5.5 bar AND speed 18 to 22 mm/s
    const isPressureOk = nozzlePressure >= 4.5 && nozzlePressure <= 5.5;
    const isSpeedOk = sprayScanSpeed >= 18 && sprayScanSpeed <= 22;

    if (isPressureOk && isSpeedOk) {
      const computedThickness = (4.8 + Math.random() * 0.4).toFixed(2);
      setOqOutputMessage(`SUCCESS: Spray parameters locked. Coating thickness verified at ${computedThickness} μm (Tolerance zone 4.0 - 6.0 μm). No dry spray or webbing defects.`);
      setOqStatus('success');
      setValidationSteps(prev =>
        prev.map(step => (step.id === 'VAL-002' ? { ...step, isCompleted: true, notes: `Operational window locked. Tested at pressure: ${nozzlePressure} bar, speed: ${sprayScanSpeed} mm/s.` } : step))
      );
    } else {
      setOqStatus('fail');
      if (!isPressureOk && !isSpeedOk) {
        setOqOutputMessage('FAILURE: High atomizing pressure caused extreme orange-peel micro-fractures in the polymer, and excessive scan speed caused thin, uneven coating streaks (< 2.8 μm). Out of Specification (OOS).');
      } else if (!isPressureOk) {
        setOqOutputMessage(`FAILURE: Nozzle pressure of ${nozzlePressure} bar led to poor droplet atomization, causing large polymer beads (pooling) exceeding 9.5 μm. Out of Specification (OOS).`);
      } else {
        setOqOutputMessage(`FAILURE: Slow scan speed of ${sprayScanSpeed} mm/s caused high drug delivery load concentration, and polymer sag runs. Out of Specification (OOS).`);
      }
    }
  };

  // PQ Shift Run simulation
  const handleRunPQShiftValidation = () => {
    setPqIsRunning(true);
    setPqMessage('Starting Shift A validation run. Monitoring cleanroom bioburden and stent crimping pull retention...');
    
    setTimeout(() => {
      setPqShiftCount(1);
      setPqMessage('Shift A completed. 30 units verified. Proceeding to Shift B evening run...');
      
      setTimeout(() => {
        setPqShiftCount(2);
        setPqMessage('Shift B completed. 60 units total verified. Simulating high-fatigue third shift (Shift C)...');
        
        setTimeout(() => {
          setPqShiftCount(3);
          setPqMessage('Shift C completed! 90 units total produced. 100% of samples passed catheter retention forces > 1.8 N and balloon profile profile checks.');
          setPqIsRunning(false);
          setValidationSteps(prev =>
            prev.map(step => (step.id === 'VAL-003' ? { ...step, isCompleted: true, notes: 'Multi-shift PQ validated on 90 production samples. Cpk indices exceed 1.67.' } : step))
          );
          onTaskCompleted('design_transfer');
        }, 1200);
      }, 1200);
    }, 1200);
  };

  // PMS Option selection handler
  const handleSelectPMSOption = (scenarioId: string, optionId: string) => {
    setUserDecisions(prev => ({ ...prev, [scenarioId]: optionId }));
    
    // Check if correct/highly effective choice was selected to mark scenario resolved
    const scenario = PMS_SCENARIOS.find(s => s.id === scenarioId);
    const selectedOpt = scenario?.correctiveActionOptions.find(o => o.id === optionId);
    
    if (selectedOpt && selectedOpt.effectiveness === 'high') {
      if (!resolvedScenarios.includes(scenarioId)) {
        const nextResolved = [...resolvedScenarios, scenarioId];
        setResolvedScenarios(nextResolved);
        if (nextResolved.length === PMS_SCENARIOS.length) {
          onTaskCompleted('pms');
        }
      }
    }
  };

  return (
    <div id="transfer-pms-section">
      {activeSubTab === 'transfer' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* IQ/OQ/PQ Sidebar Tabs - 4 Cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-800 text-base mb-1">Process Validation (DMR)</h3>
              <p className="text-xs text-slate-500 mb-4">Validate our Class D manufacturing line equipment to complete design transfer.</p>

              <div className="space-y-2">
                {validationSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all relative ${
                      activeStepId === step.id
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm shadow-slate-100'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-mono text-[9px] text-slate-400 font-bold">{step.id}</span>
                      <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] font-bold ${
                        step.stage === 'IQ' ? 'bg-indigo-100 text-indigo-700' : step.stage === 'OQ' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                      }`}>
                        {step.stage}
                      </span>
                    </div>
                    <span className="font-semibold leading-snug block truncate">{step.processName}</span>
                    
                    {step.isCompleted ? (
                      <span className="text-[10px] text-green-500 font-bold flex items-center gap-1 mt-1.5">
                        ✓ QUALIFIED
                      </span>
                    ) : (
                      <span className="text-[10px] text-amber-500 font-bold flex items-center gap-1 mt-1.5 animate-pulse">
                        ● ACTION REQUIRED
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick validation definitions */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs">
              <span className="font-bold text-slate-800 mb-1.5 block flex items-center gap-1">
                <Settings size={14} className="text-slate-500" /> Validation Reference Guide
              </span>
              <div className="space-y-2 text-[11px] text-slate-600 leading-normal">
                <p><strong>IQ (Installation):</strong> Proves the machine is delivered, leveled, connected, and calibrated per specification.</p>
                <p><strong>OQ (Operational):</strong> Proves the process window works at parameter extremes (high speed, low pressure, etc.).</p>
                <p><strong>PQ (Performance):</strong> Proves the process is robust, repeatable, and compliant over multiple shifts under normal operator conditions.</p>
              </div>
            </div>
          </div>

          {/* Qualification Simulation Workspace - 8 Cols */}
          <div className="lg:col-span-8 space-y-5">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-start border-b border-slate-100 pb-3 mb-4">
                <div>
                  <span className="font-mono text-[10px] bg-slate-100 text-slate-600 py-0.5 px-2 rounded font-bold">
                    ACTIVE STEP: {activeValidationStep.stage} Protocol
                  </span>
                  <h3 className="font-bold text-slate-800 text-base mt-1.5">{activeValidationStep.processName}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-slate-400 block font-medium">ACCEPTANCE CRITERIA</span>
                  <span className="text-[11px] text-slate-600 font-semibold max-w-xs block leading-tight">{activeValidationStep.acceptanceCriteria}</span>
                </div>
              </div>

              {/* IQ Workspace */}
              {activeValidationStep.id === 'VAL-001' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 leading-normal">
                    Before turning on the Automated Fiber Laser Cutter, we must verify critical environmental and facility infrastructure hookups (Installation Qualification). Check the requirements to qualify:
                  </p>

                  <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <label className="flex items-start gap-3 p-2 bg-white rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={iqPowerCheck}
                        onChange={(e) => setIqPowerCheck(e.target.checked)}
                        className="mt-0.5"
                      />
                      <div className="text-xs">
                        <strong className="text-slate-700 block font-medium">Power Hookup Verification</strong>
                        <span className="text-slate-400 text-[10px]">Verify stable 220V industrial feed and dedicated laser ground circuitry.</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-2 bg-white rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={iqArgonCheck}
                        onChange={(e) => setIqArgonCheck(e.target.checked)}
                        className="mt-0.5"
                      />
                      <div className="text-xs">
                        <strong className="text-slate-700 block font-medium">Argon Shielding Gas Line</strong>
                        <span className="text-slate-400 text-[10px]">Pressure gauge calibrated to 4.2 ± 0.2 bar (critical to prevent cobalt-chromium oxidation dross).</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-2 bg-white rounded-lg border border-slate-100 cursor-pointer hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={iqHumidityCheck}
                        onChange={(e) => setIqHumidityCheck(e.target.checked)}
                        className="mt-0.5"
                      />
                      <div className="text-xs">
                        <strong className="text-slate-700 block font-medium">Cleanroom Environmental Baseline</strong>
                        <span className="text-slate-400 text-[10px]">Ambient temperature of 21°C ± 2°C and humidity locked &lt; 50%.</span>
                      </div>
                    </label>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-mono text-slate-400">
                      Protocol: IQ-LAS-001 (Rev 3)
                    </span>
                    <button
                      onClick={handleVerifyIQ}
                      disabled={!(iqPowerCheck && iqArgonCheck && iqHumidityCheck) || activeValidationStep.isCompleted}
                      className="text-xs bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl py-2 px-4 font-semibold transition-all shadow-sm"
                    >
                      {activeValidationStep.isCompleted ? 'Installation Approved ✓' : 'Approve Installation Qualification (IQ)'}
                    </button>
                  </div>
                </div>
              )}

              {/* OQ Workspace */}
              {activeValidationStep.id === 'VAL-002' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 leading-normal">
                    For Operational Qualification (OQ), we must challenge parameter boundaries to establish a bulletproof process window. Dial in nozzle atomizing pressure (Target: <strong className="text-blue-600 font-bold">4.5 - 5.5 bar</strong>) and spray-nozzle scan speed (Target: <strong className="text-blue-600 font-bold">18 - 22 mm/s</strong>) to execute a validation batch.
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-700">Nozzle Pressure: {nozzlePressure.toFixed(1)} bar</span>
                        <span className="text-slate-400 text-[10px]">Range: 2.0 - 7.0 bar</span>
                      </div>
                      <input
                        type="range"
                        min="2.0"
                        max="7.0"
                        step="0.1"
                        value={nozzlePressure}
                        onChange={(e) => {
                          setNozzlePressure(parseFloat(e.target.value));
                          setOqStatus('idle');
                        }}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        disabled={activeValidationStep.isCompleted}
                      />
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-700">Scan Spray Speed: {sprayScanSpeed} mm/s</span>
                        <span className="text-slate-400 text-[10px]">Range: 5 - 30 mm/s</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={sprayScanSpeed}
                        onChange={(e) => {
                          setSprayScanSpeed(parseInt(e.target.value));
                          setOqStatus('idle');
                        }}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        disabled={activeValidationStep.isCompleted}
                      />
                    </div>
                  </div>

                  {oqStatus !== 'idle' && (
                    <div className={`p-3 rounded-xl border text-xs leading-relaxed ${
                      oqStatus === 'success' ? 'bg-green-50 text-green-800 border-green-100' : 'bg-red-50 text-red-800 border-red-100'
                    }`}>
                      <div className="flex items-center gap-1.5 font-bold mb-1">
                        {oqStatus === 'success' ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                        <span>OQ Status: {oqStatus === 'success' ? 'QUALIFIED RUN' : 'OUT OF SPECIFICATION (OOS)'}</span>
                      </div>
                      <p>{oqOutputMessage}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-mono text-slate-400">
                      Protocol: OQ-SPRAY-004
                    </span>
                    <button
                      onClick={handleRunOQChallenge}
                      disabled={activeValidationStep.isCompleted}
                      className="text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 px-4 font-semibold transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <Play size={12} /> Run Parameter OQ Challenge
                    </button>
                  </div>
                </div>
              )}

              {/* PQ Workspace */}
              {activeValidationStep.id === 'VAL-003' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 leading-normal">
                    Performance Qualification (PQ) mandates consistency. We must execute full commercial runs across 3 consecutive shifts with routine personnel to prove zero operator variation drift.
                  </p>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-center space-y-3">
                    <div className="flex justify-center items-center gap-6">
                      <div className="text-center">
                        <span className="text-slate-400 text-[10px] block font-bold uppercase">Validated Shifts</span>
                        <span className="text-2xl font-extrabold text-slate-800">{pqShiftCount} / 3</span>
                      </div>
                      <div className="text-center">
                        <span className="text-slate-400 text-[10px] block font-bold uppercase">Samples Verified</span>
                        <span className="text-2xl font-extrabold text-slate-800">{pqShiftCount * 30} / 90</span>
                      </div>
                    </div>

                    {pqMessage && (
                      <p className="text-[11px] text-slate-600 leading-relaxed max-w-md mx-auto italic">
                        {pqMessage}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-mono text-slate-400">
                      Protocol: PQ-CRIMP-PKG-02
                    </span>
                    <button
                      onClick={handleRunPQShiftValidation}
                      disabled={pqIsRunning || activeValidationStep.isCompleted}
                      className="text-xs bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-2 px-4 font-semibold transition-all shadow-sm disabled:opacity-50"
                    >
                      {activeValidationStep.isCompleted ? 'PQ Validated ✓' : pqIsRunning ? 'Simulating Shifts...' : 'Run 3-Shift PQ Trial'}
                    </button>
                  </div>
                </div>
              )}

              {/* Signed notes */}
              {activeValidationStep.isCompleted && (
                <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100 text-[11px] text-green-800 flex items-center gap-2">
                  <Check size={14} className="text-green-600 flex-shrink-0" />
                  <span>
                    <strong className="font-semibold">Sign-off:</strong> {activeValidationStep.notes}
                  </span>
                </div>
              )}
            </div>

            {/* Protocol document viewer (educational template) */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">DMR Reference Protocol Template</span>
              <pre className="p-3 bg-slate-900 text-slate-100 font-mono text-[9px] leading-relaxed rounded-xl overflow-x-auto max-h-56">
                {activeValidationStep.protocolTemplate}
              </pre>
            </div>
          </div>

          {/* Full-Width GHTF Process Validation board */}
          <div className="col-span-12 mt-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-800 text-base">GHTF Process Validation Strategy & Revalidation triggers</h3>
                <p className="text-xs text-slate-500">Every Class D / III implant manufacturer must validate manufacturing lines per Global Harmonization Task Force (GHTF) SG3 guidelines.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Section 1: The Three Pillars */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800 text-xs block">IQ-OQ-PQ Golden Flow</span>
                  <p>
                    Process validation is required when the outputs cannot be 100% verified by non-destructive inspection (e.g., you cannot test the balloon burst pressure or stent weld strength of every single unit without destroying the device). 
                  </p>
                  <p>
                    Therefore, the process itself must be fully qualified (IQ to establish physical setup, OQ to establish the safe operating margins, and PQ to demonstrate long-term stability and statistical control).
                  </p>
                </div>

                {/* Section 2: Revalidation Triggers */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800 text-xs block">Critical Revalidation Triggers</span>
                  <p>
                    Once qualified, you must establish a <strong>revalidation schedule</strong> or trigger-based protocols. Key triggers include:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[11px]">
                    <li>Changes in critical raw material suppliers (e.g., Nitinol alloy purity drift).</li>
                    <li>Move or relocation of Cleanroom physical facilities or lines.</li>
                    <li>Major machine repairs or PLC software firmware revisions.</li>
                    <li>Quality trends indicating drift or decreased Cpk indices.</li>
                  </ul>
                </div>

                {/* Section 3: Statistical Control */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800 text-xs block">Statistical Process Control (SPC)</span>
                  <p>
                    For Class D implants, regulatory bodies require robust statistical proof. Standard acceptance targets are:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-[11px]">
                    <li><strong>Process Capability (Cpk)</strong> must be &gt; 1.33 for standard dimensions and &gt; 1.67 for critical-to-safety specifications.</li>
                    <li>Continuous control charting (X-bar / R-charts) to monitor for non-random variation patterns.</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 text-[11px] text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-0.5">Consultant Supervisor Screen Share Tip:</strong>
                "Explain to interns that because we are coating Nitinol with a precise dose of Sirolimus drug, we use an ultrasonic sprayer (OQ-SPRAY-004). If the pressure drops too low, the drug will pool, causing toxic local release. If the speed is too high, it won't adhere properly. This OQ process window is what prevents fatal clotting in our cardiology patients!"
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* --- Tab 6: Post Market Surveillance (PMS) --- */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Vigilance Scenario Selector - 4 Cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-800 text-base mb-1">Lead Vigilance Room</h3>
              <p className="text-xs text-slate-500 mb-4">Investigate customer complaints and clinical signals occurring globally in the field.</p>

              <div className="space-y-2.5">
                {PMS_SCENARIOS.map((scenario) => {
                  const resolved = resolvedScenarios.includes(scenario.id);
                  const active = selectedScenarioId === scenario.id;
                  
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => setSelectedScenarioId(scenario.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all relative ${
                        active
                          ? 'bg-slate-900 border-slate-900 text-white shadow-sm shadow-slate-100'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] font-bold ${
                          scenario.source === 'Customer Complaint' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {scenario.source}
                        </span>
                        {resolved && (
                          <span className="text-[10px] text-green-500 font-bold">RESOLVED</span>
                        )}
                      </div>
                      <span className="font-semibold leading-snug block mt-1">{scenario.title}</span>
                      <span className="text-[10px] text-slate-400 block truncate mt-1">{scenario.reportedEvent}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PMS Educational Card */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs leading-normal text-slate-600">
              <span className="font-bold text-slate-800 mb-1.5 block flex items-center gap-1">
                <FileText size={14} className="text-slate-500" /> PMS Compliance Note (MDR)
              </span>
              <p className="text-[11px]">
                Under <strong className="text-slate-700 font-semibold">EU MDR Article 83</strong> and <strong className="text-slate-700 font-semibold">FDA Part 803</strong>, high-risk implants require continuous passive monitoring (complaints) AND active clinical studies (PMCF). Failure to investigate reports of serious injury within 15 days triggers severe criminal consent decrees.
              </p>
            </div>
          </div>

          {/* Scenario Investigation - 8 Cols */}
          <div className="lg:col-span-8 space-y-5">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              {/* Incident Header */}
              <div className="border-b border-slate-100 pb-3.5 mb-4">
                <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 py-0.5 px-2 rounded border border-red-100">
                  {activeScenario.source.toUpperCase()} INVESTIGATION
                </span>
                <h3 className="font-extrabold text-slate-800 text-base mt-2">{activeScenario.title}</h3>
                <div className="flex gap-4 mt-2 text-[10px] font-semibold text-slate-400">
                  <span>Frequency Trend: <strong className="text-red-600 font-bold uppercase">{activeScenario.frequencyTrend}</strong></span>
                  <span>Impact Level: <strong className="text-red-700 font-bold uppercase">{activeScenario.severityLevel}</strong></span>
                </div>
              </div>

              {/* Event Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                {activeScenario.description}
              </p>

              {/* Choices list */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-800 block">Select Regulatory CAPA Action:</span>
                
                {activeScenario.correctiveActionOptions.map((opt) => {
                  const isChosen = userDecisions[activeScenario.id] === opt.id;
                  
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectPMSOption(activeScenario.id, opt.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start gap-3.5 ${
                        isChosen
                          ? 'bg-blue-50/50 border-blue-200 text-slate-800'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full border flex items-center justify-center transition-all ${
                        isChosen ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                      }`}>
                        {isChosen && <span className="text-[10px]">✓</span>}
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <span className="font-semibold text-slate-800 leading-normal block">{opt.label}</span>
                        
                        {isChosen && (
                          <div className="text-[10px] border-t border-slate-200/60 pt-2 bg-slate-50/50 p-2 rounded space-y-1 mt-1.5 text-slate-700 leading-relaxed">
                            <div className="flex justify-between font-bold text-[9px] mb-1">
                              <span className={opt.effectiveness === 'high' ? 'text-green-700' : 'text-amber-700'}>
                                EFFECTIVENESS: {opt.effectiveness.toUpperCase()}
                              </span>
                              <span className="text-slate-400">COST: {opt.cost.toUpperCase()}</span>
                            </div>
                            <p><strong className="text-slate-800">Regulatory Impact:</strong> {opt.regulatoryImpact}</p>
                            <p><strong className="text-slate-800">Auditor Rationale:</strong> {opt.rationale}</p>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Success Badge */}
              {resolvedScenarios.includes(activeScenario.id) && (
                <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100 text-xs text-green-800 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                  <span>
                    <strong className="font-bold">Corrective Action Accepted:</strong> You have selected the highly effective regulatory pathway. The risk file and Periodic Safety Update Report (PSUR) have been updated dynamically.
                  </span>
                </div>
              )}
            </div>

            {/* Wide Full-Width PMS Terms Explainer Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-800 text-base">EU MDR Post-Market Surveillance (PMS) Core Terms Guide</h3>
                <p className="text-xs text-slate-500">Every RAC Forge compliance supervisor needs to make sure their interns understand these 4 distinct post-market regulatory pillars:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Pillar 1 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5">
                  <span className="font-bold text-xs text-slate-800 block">1. PMS (Reactive & Active)</span>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    The general system required to collect, record, and investigate customer complaints, clinician feedback, and competitor failures in the market. Must be documented in a formalized <strong>PMS Plan</strong> and <strong>PMS Report</strong>.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5">
                  <span className="font-bold text-xs text-slate-800 block">2. PMCF (Active Clinical)</span>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    <strong>Post-Market Clinical Follow-up</strong>. An active, continuous feedback loop where the manufacturer conducts post-market human registry studies or clinical trials to verify stent safety over 10+ years.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5">
                  <span className="font-bold text-xs text-slate-800 block">3. Vigilance (Emergency)</span>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    The formal legal channel used to report serious incidents, deaths, or major public health threats immediately to national competent authorities (e.g., FDA, BfArM). Standard reporting window is **15 calendar days** (or **2 days** for public health threats).
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-1.5">
                  <span className="font-bold text-xs text-slate-800 block">4. PSUR (Regulatory Summary)</span>
                  <p className="text-[10px] text-slate-600 leading-relaxed">
                    <strong>Periodic Safety Update Report</strong>. For Class IIa, IIb, and III/D devices, this report aggregates all PMS/PMCF data and computes benefit-risk analyses. Must be updated annually and submitted to EUDAMED.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 text-[11px] text-slate-600 leading-relaxed">
                <strong className="text-slate-800 block mb-0.5">Trainer Screen Share Note:</strong>
                "Under the EU MDR, a manufacturer cannot just sit back and wait for complaints. PMCF is an absolute blocking requirement for implantable devices like our Sirolimus Drug-Eluting Stent. If we don't have active clinical follow-up registry trials running, our CE certificate will be suspended at our next audit!"
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
