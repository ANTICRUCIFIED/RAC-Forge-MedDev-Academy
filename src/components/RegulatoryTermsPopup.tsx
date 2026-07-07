import React from 'react';

export interface RegulatoryTerm {
  id: string;
  name: string;
  definition: string;
  category: string;
  examples: string[];
  renderDiagram: () => React.ReactNode;
}

export const REGULATORY_TERMS: Record<string, RegulatoryTerm> = {
  invasive: {
    id: 'invasive',
    name: 'Invasive Device',
    category: 'Anatomical Interaction',
    definition: 'Under Indian MDR 2017, an invasive device is any medical device which, in whole or in part, penetrates inside the body, either through a natural body orifice or through the surgical surface of the body.',
    examples: ['Surgical scalpel', 'Urinary catheter', 'Endoscope', 'Cardiology stent', 'Dental implant'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <defs>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="45%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="55%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        {/* Skin surface boundary */}
        <rect x="190" y="20" width="20" height="160" fill="url(#skinGrad)" rx="2" opacity="0.8" />
        <text x="130" y="105" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="end">External Environment</text>
        <text x="270" y="105" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="start">Internal Body Space</text>
        
        {/* Device penetrating */}
        <g transform="translate(100, 90)">
          {/* Shaft */}
          <rect x="0" y="5" width="160" height="10" fill="#cbd5e1" rx="2" stroke="#475569" strokeWidth="1.5" />
          {/* Handle */}
          <rect x="-30" y="0" width="40" height="20" fill="#3b82f6" rx="4" />
          {/* Penetrating Tip */}
          <path d="M 160 5 L 180 10 L 160 15 Z" fill="#ef4444" />
          {/* Motion indicator */}
          <path d="M -10 -15 L 10 -15" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
        </g>
        
        {/* Arrow definition */}
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
        </marker>
        
        {/* Annotation */}
        <rect x="180" y="45" width="40" height="2" fill="#ef4444" />
        <circle cx="200" cy="100" r="4" fill="#ef4444" className="animate-ping" />
        <circle cx="200" cy="100" r="3" fill="#ef4444" />
        <text x="200" y="145" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">Penetration Boundary</text>
      </svg>
    )
  },
  orifices: {
    id: 'orifices',
    name: 'Body Orifice (Natural Opening)',
    category: 'Anatomical Interaction',
    definition: 'Any natural opening in the body, as well as the external surface of the eyeball, or any permanent artificial opening, such as a surgically created stoma.',
    examples: ['Nasal cannulas', 'Oral thermometers', 'Ear speculums', 'Contact lenses', 'Enema nozzles'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Simplified head profile representing orifices */}
        <path d="M 120 170 C 120 180, 240 180, 240 170 L 240 150 C 240 120, 280 100, 280 80 C 280 40, 230 20, 180 20 C 130 20, 120 50, 120 80 C 120 95, 125 110, 135 120 L 120 150 Z" fill="none" stroke="#475569" strokeWidth="2" />
        
        {/* Eye orifice */}
        <ellipse cx="205" cy="65" rx="12" ry="7" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <circle cx="205" cy="65" r="4" fill="#38bdf8" />
        <text x="225" y="68" fill="#38bdf8" fontSize="9" fontWeight="bold">Eyeball Surface</text>
        <path d="M 185 65 L 195 65" stroke="#ef4444" strokeWidth="1" />
        
        {/* Ear orifice */}
        <path d="M 123 85 C 118 85, 118 75, 123 75" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="75" y="80" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="end">Ear Canal</text>
        <path d="M 105 80 L 120 80" stroke="#ef4444" strokeWidth="1" />

        {/* Nose orifice */}
        <path d="M 245 92 C 248 95, 248 100, 240 102" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="290" y="100" fill="#38bdf8" fontSize="9" fontWeight="bold">Nostril Entrance</text>
        <path d="M 275 98 L 245 98" stroke="#ef4444" strokeWidth="1" />

        {/* Mouth orifice */}
        <path d="M 210 115 C 220 115, 235 115, 240 120" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="280" y="130" fill="#38bdf8" fontSize="9" fontWeight="bold">Oral Cavity</text>
        <path d="M 265 125 L 235 120" stroke="#ef4444" strokeWidth="1" />

        <text x="200" y="185" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="bold">Natural Anatomical Gateways</text>
      </svg>
    )
  },
  surgically_invasive: {
    id: 'surgically_invasive',
    name: 'Surgically Invasive',
    category: 'Anatomical Interaction',
    definition: 'An invasive device which penetrates inside the human body through the surface of the body, with the aid or in the context of a surgical operation or clinical intervention.',
    examples: ['Vascular catheters', 'Laprascopic trocars', 'Nitinol coronary stents', 'Suture needles', 'Orthopedic bone screws'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Layer of tissue */}
        <rect x="30" y="120" width="340" height="40" fill="#334155" rx="4" />
        <line x1="30" y1="120" x2="370" y2="120" stroke="#475569" strokeWidth="2" />
        <text x="40" y="145" fill="#94a3b8" fontSize="10">Dermis / Tissue Layer</text>

        {/* Surgical Scalpel cutting */}
        <g transform="translate(120, 20)">
          {/* Scalpel blade */}
          <path d="M 50 70 L 80 100 L 40 100 L 30 85 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Blade cutting point */}
          <circle cx="80" cy="100" r="3" fill="#ef4444" />
          {/* Scalpel handle */}
          <rect x="10" y="40" width="40" height="12" fill="#64748b" transform="rotate(-45 10 40)" />
          {/* Incision cut vector */}
          <path d="M 80 100 C 95 100, 110 100, 140 100" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="3 3" />
          <text x="145" y="95" fill="#ef4444" fontSize="9" fontWeight="bold">Surgical Incision</text>
        </g>

        {/* Device entry */}
        <g transform="translate(200, 10)">
          <path d="M 20 20 L 70 110" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="70" cy="110" r="5" fill="#22c55e" />
          <text x="80" y="115" fill="#22c55e" fontSize="9" fontWeight="bold">Surgically Placed Stent</text>
        </g>
        
        <text x="200" y="185" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="bold">Artificial penetration bypassing natural defense barriers</text>
      </svg>
    )
  },
  active: {
    id: 'active',
    name: 'Active Medical Device',
    category: 'Energy Operation',
    definition: 'Any medical device, the operation of which depends on a source of electrical energy or any source of power other than that generated by the human body or gravity and which acts by changing the density of or converting this energy.',
    examples: ['Cardiac pacemakers', 'Infusion pumps', 'Electrocardiographs (ECG)', 'Surgical lasers', 'Ultrasound imaging'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Device chassis */}
        <rect x="50" y="40" width="120" height="100" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="8" />
        <rect x="65" y="55" width="90" height="45" fill="#0f172a" stroke="#334155" rx="4" />
        
        {/* Pulse wave inside screen */}
        <path d="M 70 78 L 90 78 L 95 62 L 100 92 L 105 78 L 125 78 L 130 68 L 135 88 L 140 78 L 150 78" fill="none" stroke="#22c55e" strokeWidth="1.5" />
        
        {/* Energy flow */}
        <g transform="translate(190, 80)">
          {/* Energy converter block */}
          <rect x="0" y="0" width="50" height="30" fill="#3b82f6" rx="4" />
          <text x="25" y="18" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Battery</text>
          
          <path d="M -20 15 L 0 15" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M 50 15 L 80 15" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
          
          <text x="110" y="18" fill="#ef4444" fontSize="10" fontWeight="bold">Converted Energy</text>
        </g>
        
        {/* Power indicators */}
        <circle cx="80" cy="120" r="4" fill="#ef4444" />
        <circle cx="100" cy="120" r="4" fill="#eab308" />
        <circle cx="120" cy="120" r="4" fill="#22c55e" />
        
        <text x="200" y="175" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Requires external electrical power, battery, or pneumatic source</text>
      </svg>
    )
  },
  implantable: {
    id: 'implantable',
    name: 'Implantable Device',
    category: 'Anatomical Interaction',
    definition: 'Any device, including those that are partially or completely absorbed, which is intended to be totally or partially introduced into the human body by surgical intervention, and which is intended to remain in place after the procedure for at least thirty days.',
    examples: ['Nitinol vascular stents', 'Intraocular lenses', 'Artificial heart valves', 'Titanium hip joints', 'Pacemaker leads'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Heart shape background */}
        <path d="M 200 45 C 160 0, 100 20, 100 80 C 100 130, 160 160, 200 180 C 240 160, 300 130, 300 80 C 300 20, 240 0, 200 45 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
        
        {/* Coronary artery channel */}
        <path d="M 120 70 C 160 85, 240 85, 280 70" fill="none" stroke="#ef4444" strokeWidth="14" strokeLinecap="round" opacity="0.6" />
        <path d="M 120 70 C 160 85, 240 85, 280 70" fill="none" stroke="#dc2626" strokeWidth="10" strokeLinecap="round" />
        
        {/* Implanted metal mesh stent */}
        <g transform="translate(160, 68)">
          <rect x="0" y="0" width="80" height="14" fill="none" stroke="#e2e8f0" strokeWidth="1.5" rx="2" />
          {/* Wire frame lines inside stent */}
          <line x1="10" y1="0" x2="20" y2="14" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="20" y1="0" x2="30" y2="14" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="30" y1="0" x2="40" y2="14" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="40" y1="0" x2="50" y2="14" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="50" y1="0" x2="60" y2="14" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="60" y1="0" x2="70" y2="14" stroke="#e2e8f0" strokeWidth="1" />
          
          <line x1="20" y1="14" x2="10" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="30" y1="14" x2="20" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="40" y1="14" x2="30" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="50" y1="14" x2="40" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="60" y1="14" x2="50" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          <line x1="70" y1="14" x2="60" y2="0" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Pulsing drug active molecules dots */}
          <circle cx="25" cy="7" r="1.5" fill="#38bdf8" />
          <circle cx="45" cy="4" r="1.5" fill="#38bdf8" />
          <circle cx="55" cy="10" r="1.5" fill="#38bdf8" />
        </g>
        
        <text x="200" y="115" fill="#e2e8f0" fontSize="9" fontWeight="bold" textAnchor="middle">Stent fully integrated into vessel wall</text>
        <text x="200" y="165" fill="#94a3b8" fontSize="8" textAnchor="middle">Remains inside human tissue permanently (&gt;30 days)</text>
      </svg>
    )
  },
  transient: {
    id: 'transient',
    name: 'Transient Duration (< 60 minutes)',
    category: 'Contact Duration',
    definition: 'Medical devices intended for continuous, uninterrupted use for less than sixty minutes, such as temporary diagnostic accessories.',
    examples: ['Hypodermic needles', 'Surgical gloves', 'Diagnostic blood sampling tubes', 'Transient surface swabs'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <circle cx="200" cy="90" r="50" fill="none" stroke="#475569" strokeWidth="4" />
        <circle cx="200" cy="90" r="50" fill="none" stroke="#ef4444" strokeWidth="4" strokeDasharray="80 320" />
        
        {/* Clock hand */}
        <line x1="200" y1="90" x2="200" y2="55" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="200" y1="90" x2="225" y2="105" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        
        <circle cx="200" cy="90" r="5" fill="#ef4444" />
        
        <text x="200" y="165" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Continuous exposure: 0 to 60 Mins</text>
        <text x="200" y="182" fill="#94a3b8" fontSize="8" textAnchor="middle">Extremely short interaction window limits bioburden accumulation</text>
      </svg>
    )
  },
  short_term: {
    id: 'short_term',
    name: 'Short Term Duration (60 mins to 30 days)',
    category: 'Contact Duration',
    definition: 'Medical devices intended for continuous, uninterrupted use for between sixty minutes and up to thirty calendar days.',
    examples: ['Hemodialysis catheters', 'Contact lenses', 'Tracheal tubes', 'Temporary urinary drainage bags'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Calendar sheet */}
        <rect x="140" y="35" width="120" height="110" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="6" />
        <rect x="140" y="35" width="120" height="25" fill="#3b82f6" rx="4" />
        <circle cx="165" cy="47" r="4" fill="#0f172a" />
        <circle cx="235" cy="47" r="4" fill="#0f172a" />
        
        <text x="200" y="105" fill="#ffffff" fontSize="24" fontWeight="black" textAnchor="middle" fontClassName="font-mono">30</text>
        <text x="200" y="130" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="bold">DAYS MAX LIMIT</text>
        
        <text x="200" y="165" fill="#3b82f6" fontSize="11" fontWeight="bold" textAnchor="middle">Continuous exposure: 1 hour to 30 days</text>
        <text x="200" y="182" fill="#94a3b8" fontSize="8" textAnchor="middle">Triggers moderate biocompatibility screening (sensitization, irritation)</text>
      </svg>
    )
  },
  long_term: {
    id: 'long_term',
    name: 'Long Term / Permanent Duration (> 30 days)',
    category: 'Contact Duration',
    definition: 'Medical devices intended for continuous, uninterrupted use for more than thirty calendar days, typically implantable devices.',
    examples: ['Drug-eluting coronary stents', 'Artificial joint replacements', 'Dental crowns', 'Breast implants'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <path d="M 130 100 C 130 70, 190 70, 200 100 C 210 130, 270 130, 270 100 C 270 70, 210 70, 200 100 C 190 130, 130 130, 130 100 Z" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" />
        <path d="M 130 100 C 130 70, 190 70, 200 100 C 210 130, 270 130, 270 100 C 270 70, 210 70, 200 100 C 190 130, 130 130, 130 100 Z" fill="none" stroke="#16a34a" strokeWidth="4" />
        
        <text x="200" y="45" fill="#22c55e" fontSize="14" fontWeight="black" textAnchor="middle">PERMANENT</text>
        
        <text x="200" y="165" fill="#22c55e" fontSize="11" fontWeight="bold" textAnchor="middle">Continuous exposure: &gt; 30 Days</text>
        <text x="200" y="182" fill="#94a3b8" fontSize="8" textAnchor="middle">Mandates complete carcinogenicity, toxicity, and implantation audits</text>
      </svg>
    )
  },
};

interface TermsPopupProps {
  termId: string;
  onClose: () => void;
}

export const RegulatoryTermsPopup: React.FC<TermsPopupProps> = ({ termId, onClose }) => {
  const term = REGULATORY_TERMS[termId];
  if (!term) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex justify-between items-start bg-slate-950">
          <div>
            <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-bold uppercase font-mono tracking-wider">
              {term.category}
            </span>
            <h3 className="text-lg font-extrabold text-white mt-1.5">{term.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1 rounded-lg transition-colors text-xs font-mono px-2"
          >
            Close ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Definition */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold text-indigo-400 uppercase tracking-wide">Official Indian MDR 2017 Definition</h4>
            <p className="text-slate-300 text-xs leading-relaxed italic border-l-2 border-indigo-500 pl-3">
              {term.definition}
            </p>
          </div>

          {/* Inline Interactive SVG Diagram */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold text-indigo-400 uppercase tracking-wide">Conceptual Visual Diagram</h4>
            {term.renderDiagram()}
          </div>

          {/* Compliant Examples */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold text-indigo-400 uppercase tracking-wide">Representative Examples</h4>
            <div className="flex flex-wrap gap-2">
              {term.examples.map((ex, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-850 border border-slate-800 text-slate-300 text-[11px] rounded-lg font-medium">
                  • {ex}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs py-2 px-5 rounded-xl transition-all"
          >
            I Understand, Return to Simulator
          </button>
        </div>
      </div>
    </div>
  );
};
