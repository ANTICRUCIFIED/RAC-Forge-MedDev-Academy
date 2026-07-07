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
  hydrocolloid_alginate: {
    id: 'hydrocolloid_alginate',
    name: 'Hydrocolloid & Alginate Wound Dressings',
    category: 'Non-Invasive Wound Management',
    definition: 'Under Indian MDR Rule 4, these are advanced materials that actively manage a wound\'s biological micro-environment. Instead of simply covering the injury, they interact with exuded wound fluids to form a protective moist gel layer that accelerates cellular healing.',
    examples: ['Duoderm hydrocolloid patch', 'Calcium alginate packing ropes', 'Absorptive polymer foam dressing', 'Silver-infused alginate pads'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Injured Skin layers */}
        <rect x="20" y="140" width="360" height="40" fill="#312e81" opacity="0.3" rx="4" />
        <path d="M 20 140 L 150 140 Q 170 155, 200 155 Q 230 155, 250 140 L 380 140" fill="none" stroke="#475569" strokeWidth="2" />
        <text x="50" y="165" fill="#94a3b8" fontSize="10">Breached Dermis (Wound)</text>
        
        {/* Dressing Gel Interface */}
        <g transform="translate(130, 95)">
          {/* Unhydrated backing */}
          <rect x="0" y="0" width="140" height="15" fill="#eab308" opacity="0.8" rx="2" />
          <text x="70" y="10" fill="#020617" fontSize="8" fontWeight="bold" textAnchor="middle">Dry Hydrocolloid Sheet</text>
          
          {/* Dynamic gel formulation layer */}
          <rect x="10" y="15" width="120" height="25" fill="#10b981" opacity="0.6" rx="2" />
          <text x="70" y="30" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" className="animate-pulse">Active Moist Gel Layer</text>
          
          {/* Absorption Pointers */}
          <path d="M 30 55 L 30 43 M 70 55 L 70 43 M 110 55 L 110 43" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#arrow-green)" />
        </g>
        
        <defs>
          <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
          </marker>
        </defs>
        
        <text x="200" y="30" fill="#22c55e" fontSize="10" fontWeight="bold" textAnchor="middle" className="uppercase tracking-wide">Moisture Retention Bio-Interface</text>
        <text x="200" y="188" fill="#94a3b8" fontSize="8" textAnchor="middle">Absorbs fluid exudate and prevents wound bed desiccation</text>
      </svg>
    )
  },
  stent: {
    id: 'stent',
    name: 'Vascular / Coronary Stent',
    category: 'Surgically Invasive Implant',
    definition: 'A microscopic, self-expanding wire mesh tube that acts as a physical scaffold. It is surgically navigated into an obstructed blood vessel, then expanded using a balloon catheter to permanently restore normal blood flow.',
    examples: ['Everolimus-eluting cobalt stent', 'Nitinol self-expanding carotid stent', 'Bare-metal alloy stent', 'Bioresorbable vascular scaffold'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Arterial boundaries */}
        <path d="M 30 50 C 120 40, 280 40, 370 50" fill="none" stroke="#ef4444" strokeWidth="32" opacity="0.3" strokeLinecap="round" />
        <path d="M 30 50 C 120 40, 280 40, 370 50" fill="none" stroke="#991b1b" strokeWidth="26" strokeLinecap="round" />
        
        {/* Plaque blockage */}
        <path d="M 140 37 C 170 42, 230 42, 260 37" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" />
        <path d="M 140 63 C 170 58, 230 58, 260 63" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" />
        
        {/* Expanded Stent Mesh */}
        <g transform="translate(130, 41)">
          <rect x="0" y="0" width="140" height="18" fill="none" stroke="#e2e8f0" strokeWidth="2" rx="3" />
          <path d="M 10 0 L 25 18 M 25 0 L 40 18 M 40 0 L 55 18 M 55 0 L 70 18 M 70 0 L 85 18 M 85 0 L 100 18 M 100 0 L 115 18 M 115 0 L 130 18" stroke="#ffffff" strokeWidth="1" />
          <path d="M 25 18 L 10 0 M 40 18 L 25 0 M 55 18 L 40 0 M 70 18 L 55 0 M 85 18 L 70 0 M 100 18 L 85 0 M 115 18 L 100 0 M 130 18 L 115 0" stroke="#ffffff" strokeWidth="1" />
        </g>
        
        <text x="200" y="105" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Physical Metal Scaffolding (Expanded)</text>
        <text x="200" y="125" fill="#eab308" fontSize="9" textAnchor="middle">Squeezes atherosclerotic plaque against the vascular wall</text>
        <text x="200" y="185" fill="#94a3b8" fontSize="8" textAnchor="middle">Class D under CDSCO Rules due to permanent contact with coronary bloodstream</text>
      </svg>
    )
  },
  ancillary_substance: {
    id: 'ancillary_substance',
    name: 'Ancillary Medicinal Substance (Drug Coating)',
    category: 'Combination Products',
    definition: 'A therapeutic drug molecule incorporated directly onto a medical device. It acts secondary or ancillary to the physical action of the device (e.g. Sirolimus coating on stents stops scar tissue growth; Heparin prevents blood clots). Under CDSCO Rule 13, this combination triggers Class D status.',
    examples: ['Sirolimus anti-restenotic agent', 'Heparin blood anticoagulant layer', 'Silver-sulfadiazine antimicrobial coating', 'Bovine-derived active growth factors'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Metal strut cross section */}
        <rect x="50" y="60" width="300" height="40" fill="#334155" stroke="#475569" strokeWidth="2" rx="4" />
        <text x="200" y="85" fill="#94a3b8" fontSize="10" textAnchor="middle" fontWeight="bold">STAINLESS STEEL OR COBALT IMPLANT STRUT</text>
        
        {/* Polymer Carrier Coating */}
        <rect x="50" y="42" width="300" height="18" fill="#10b981" opacity="0.4" rx="2" />
        <line x1="50" y1="42" x2="350" y2="42" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
        <text x="200" y="54" fill="#6ee7b7" fontSize="8" textAnchor="middle" className="font-mono">DRUG-LOADED BIOABSORBABLE POLYMER MATRIX</text>
        
        {/* Eluting Drug Dots */}
        <circle cx="80" cy="25" r="2.5" fill="#10b981" />
        <circle cx="140" cy="22" r="3" fill="#10b981" />
        <circle cx="200" cy="26" r="2.5" fill="#10b981" />
        <circle cx="260" cy="20" r="3" fill="#10b981" />
        <circle cx="320" cy="24" r="2.5" fill="#10b981" />
        
        {/* Release vectors */}
        <path d="M 80 42 L 80 32 M 140 42 L 140 28 M 200 42 L 200 33 M 260 42 L 260 27 M 320 42 L 320 31" stroke="#10b981" strokeWidth="1" />
        
        <text x="200" y="130" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">Secondary Clinical Drug Elution (Ancillary Action)</text>
        <text x="200" y="178" fill="#94a3b8" fontSize="8" textAnchor="middle">Physical stent scaffolds first; drug elution acts secondarily to suppress tissue scar growth</text>
      </svg>
    )
  },
  catheter: {
    id: 'catheter',
    name: 'Clinical Tube & Catheter Systems',
    category: 'Invasive Orifice / Vessel Channeling',
    definition: 'A flexible, hollow medical tube designed to be inserted into a physiological cavity, urinary tract, or blood vessel. Catheters facilitate the drainage of body fluids, injection of therapeutics, or navigation of surgical instruments.',
    examples: ['Foley urinary drainage catheter', 'Central venous catheter (CVC)', 'Peripheral IV cannula', 'Coronary diagnostic guide catheter'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Catheter main body */}
        <rect x="40" y="80" width="260" height="16" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" rx="2" />
        {/* Internal fluid channel dashed line */}
        <line x1="40" y1="88" x2="300" y2="88" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Retention Balloon (Uninflated or semi inflated) */}
        <ellipse cx="250" cy="88" rx="14" ry="18" fill="#38bdf8" opacity="0.6" stroke="#0284c7" strokeWidth="1" />
        <text x="250" y="60" fill="#38bdf8" fontSize="8" textAnchor="middle" fontWeight="bold">Anchoring Balloon</text>
        
        {/* Drainage ports */}
        <circle cx="290" cy="88" r="3" fill="#1e293b" />
        <path d="M 290 88 C 300 88, 310 88, 320 88" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 1" />
        
        {/* Flow indicators */}
        <path d="M 60 88 L 120 88" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-blue)" />
        <defs>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
          </marker>
        </defs>
        
        <text x="140" y="115" fill="#e2e8f0" fontSize="9" fontWeight="bold">Dual-Channel Extrusion Tube</text>
        <text x="200" y="150" fill="#cbd5e1" fontSize="10" fontWeight="bold" textAnchor="middle">Orifice placement (Class B) vs. Central Vascular Placement (Class C/D)</text>
        <text x="200" y="185" fill="#94a3b8" fontSize="8" textAnchor="middle">Risk escalates if placed in high-shear blood channels instead of urine cavities</text>
      </svg>
    )
  },
  hemodialysis: {
    id: 'hemodialysis',
    name: 'Hemodialysis Blood Filter (Artificial Kidney)',
    category: 'Non-Invasive Composition Modification',
    definition: 'An extracorporeal filter column packed with thousands of semi-permeable hollow fibers. Dirty blood is circulated outside the body through these fibers while a cleansing fluid (dialysate) flows in the opposite direction, extracting waste toxins via diffusion. Classified as Class C under Rule 3.',
    examples: ['Hollow-fiber capillary dialyzer', 'Synthetic polyethersulfone membrane', 'Extracorporeal blood lines', 'CRRT continuous renal filters'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Dialyzer column outer shell */}
        <rect x="80" y="40" width="240" height="70" fill="#1e293b" stroke="#475569" strokeWidth="2" rx="6" />
        
        {/* Hollow fibers bundles */}
        <line x1="80" y1="55" x2="320" y2="55" stroke="#4f46e5" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="80" y1="65" x2="320" y2="65" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="80" y1="75" x2="320" y2="75" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="80" y1="85" x2="320" y2="85" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="80" y1="95" x2="320" y2="95" stroke="#3b82f6" strokeWidth="1.5" />
        
        {/* Counter-current ports */}
        {/* Dirty Blood Input */}
        <path d="M 60 70 L 80 70" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-red)" />
        <text x="55" y="52" fill="#ef4444" fontSize="8" fontWeight="bold">Dirty Blood In</text>
        
        {/* Clean Blood Output */}
        <path d="M 320 80 L 340 80" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrow-blue-dial)" />
        <text x="345" y="98" fill="#3b82f6" fontSize="8" fontWeight="bold">Clean Blood Out</text>
        
        {/* Dialysate Inlet & Outlet */}
        <path d="M 280 110 L 280 130" stroke="#10b981" strokeWidth="2" />
        <text x="280" y="142" fill="#10b981" fontSize="8" textAnchor="middle" fontWeight="bold">Dialysate In</text>
        
        <path d="M 120 40 L 120 20" stroke="#eab308" strokeWidth="2" />
        <text x="120" y="15" fill="#eab308" fontSize="8" textAnchor="middle" fontWeight="bold">Waste Out</text>
        
        <defs>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
          <marker id="arrow-blue-dial" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>
        
        <text x="200" y="165" fill="#94a3b8" fontSize="9" textAnchor="middle" fontWeight="bold">Semi-Permeable Capillary Membrane Separation</text>
        <text x="200" y="184" fill="#a5b4fc" fontSize="8" textAnchor="middle">Rule 3: Modifies patient blood composition directly, triggering Class C status</text>
      </svg>
    )
  },
  central_circulatory: {
    id: 'central_circulatory',
    name: 'Central Circulatory System (Coronary Heart Vessels)',
    category: 'Critical Anatomical Site',
    definition: 'The primary blood vessels of the human heart that sustain life, including the aorta, coronary arteries, pulmonary trunk, carotid arteries, and brain blood supply lines. Direct contact with these areas represents extreme systemic risk, elevating surgical devices to Class D.',
    examples: ['Coronary arteries', 'Ascending/descending aorta', 'Pulmonary veins and arteries', 'Carotid bifurcation pathway'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Heart profile vector */}
        <g transform="translate(140, 30)">
          <path d="M 60 30 C 20 -15, -40 10, -40 70 C -40 120, 20 150, 60 170 C 100 150, 160 120, 160 70 C 160 10, 100 -15, 60 30 Z" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2" opacity="0.6" />
          
          {/* Aorta Arch */}
          <path d="M 40 30 C 40 -10, 80 -10, 80 40" fill="none" stroke="#ef4444" strokeWidth="16" strokeLinecap="round" />
          <path d="M 50 -5 L 50 -15 M 60 -7 L 60 -18 M 70 -5 L 70 -15" stroke="#ef4444" strokeWidth="4" />
          
          {/* Coronary arteries branching on heart muscle surface */}
          <path d="M 45 42 Q 25 70, 20 110" fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
          <path d="M 28 80 Q 15 90, 8 105" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 75 42 Q 95 75, 115 120" fill="none" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        <text x="60" y="45" fill="#ef4444" fontSize="12" fontWeight="black">AORTA ARCH</text>
        <text x="340" y="110" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="end">CORONARY ARTERIES</text>
        <line x1="240" y1="105" x2="200" y2="105" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 1" />
        
        <text x="200" y="185" fill="#94a3b8" fontSize="8" textAnchor="middle">Any contact with these primary oxygen pipelines triggers maximum regulatory scrutiny</text>
      </svg>
    )
  },
  central_nervous: {
    id: 'central_nervous',
    name: 'Central Nervous System (Brain & Spinal Column)',
    category: 'Critical Anatomical Site',
    definition: 'The physiological center of neural processing, consisting of the brain, cranial nerves, spinal cord parenchyma, and protecting dura mater linings. These fragile tissues have virtually zero regenerative capability, mandating maximum Class C or Class D compliance checks.',
    examples: ['Cerebral cortex cells', 'Spinal cord tissue', 'Cranial optic nerves', 'Dura mater cerebral sheath'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Brain outline profile */}
        <g transform="translate(130, 20)" fill="none" stroke="#d97706" strokeWidth="1.5">
          {/* Cerebrum lobes */}
          <path d="M 60 20 C 40 10, 10 30, 10 60 C 10 75, 20 85, 35 90 C 25 105, 45 120, 65 110 C 75 115, 95 115, 105 105 C 120 105, 130 90, 130 70 C 130 40, 100 10, 60 20 Z" fill="#78350f" opacity="0.3" />
          {/* Brain ridges inner doodles */}
          <path d="M 30 60 Q 45 45, 60 60 T 90 60" />
          <path d="M 20 75 Q 50 65, 80 80 T 110 70" />
          <path d="M 40 40 Q 60 30, 80 40" />
          
          {/* Cerebellum (back brain) */}
          <path d="M 105 105 C 105 118, 120 125, 130 115 C 135 110, 130 100, 115 100" />
          
          {/* Brain Stem (Spinal Cord link) */}
          <path d="M 75 112 L 75 155 L 85 155 L 85 111 Z" fill="#d97706" opacity="0.5" />
        </g>
        
        <text x="60" y="70" fill="#fbbf24" fontSize="12" fontWeight="black">BRAIN</text>
        <text x="60" y="150" fill="#f59e0b" fontSize="10" fontWeight="bold">SPINAL CORD</text>
        <line x1="120" y1="145" x2="200" y2="145" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 1" />
        
        <text x="200" y="185" fill="#94a3b8" fontSize="8" textAnchor="middle">Rule 6/7/8: Transient, short-term, or chronic CNS contacts automatically escalate risk tiers</text>
      </svg>
    )
  },
  bioburden: {
    id: 'bioburden',
    name: 'Microbial Bioburden & Pathogen Defense',
    category: 'Biological Risk Factor',
    definition: 'The concentration of viable microorganisms (bacteria, spores, viruses, fungi) residing on a raw material or device surface. For animal or human-sourced devices (e.g., cow tissue patches), controlling bioburden is crucial to prevent lethal transmissions of pathogens (e.g. Mad Cow Prions) to patients.',
    examples: ['BSE / Prion agents (non-sterile tissue risks)', 'Staphylococcus epidermidis cleanroom counts', 'Endotoxins triggering pyrogenic shock', 'Spores resisting standard steam cycles'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* Sterile barrier filter */}
        <line x1="200" y1="20" x2="200" y2="160" stroke="#10b981" strokeWidth="4" strokeDasharray="8 4" />
        <text x="185" y="35" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="end">STERILE INLINE FILTER BARRIER</text>
        
        {/* Contaminated Left side */}
        <g fill="#f43f5e" opacity="0.8">
          {/* Bacteria rod 1 */}
          <rect x="50" y="60" width="16" height="8" rx="4" transform="rotate(30 50 60)" />
          {/* Bacteria rod 2 */}
          <rect x="110" y="110" width="16" height="8" rx="4" transform="rotate(-15 110 110)" />
          {/* Spiky virus spheres */}
          <circle cx="80" cy="50" r="5" />
          <line x1="80" y1="42" x2="80" y2="58" stroke="#f43f5e" strokeWidth="1.5" />
          <line x1="72" y1="50" x2="88" y2="50" stroke="#f43f5e" strokeWidth="1.5" />
          
          <circle cx="130" cy="75" r="4" />
          <line x1="130" y1="68" x2="130" y2="82" stroke="#f43f5e" strokeWidth="1" />
          <line x1="123" y1="75" x2="137" y2="75" stroke="#f43f5e" strokeWidth="1" />
          
          <text x="50" y="140" fill="#f43f5e" fontSize="9" fontWeight="bold">High Bioburden Zone (Raw Tissue)</text>
        </g>
        
        {/* Sterile Right side */}
        <g fill="#10b981">
          <circle cx="260" cy="70" r="3" />
          <circle cx="310" cy="110" r="3" />
          <circle cx="280" cy="130" r="2.5" />
          <text x="350" y="140" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="end">Sterilized Clinical Zone</text>
        </g>
        
        <text x="200" y="184" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontWeight="bold">Pathogens are strictly blocked to maintain patient safety</text>
      </svg>
    )
  },
  sirolimus: {
    id: 'sirolimus',
    name: 'Sirolimus',
    category: 'Active Pharmaceutical Ingredient',
    definition: 'An immunosuppressive drug that acts as an mTOR inhibitor. In medical devices, it is used as an anti-proliferative agent coating on drug-eluting stents to prevent restenosis (scar tissue regrowth) in coronary arteries.',
    examples: ['Drug-Eluting Stents (DES)', 'Immunosuppressive therapy'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <text x="200" y="30" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">Sirolimus Elution Mechanism</text>
        <rect x="50" y="80" width="300" height="20" fill="#334155" rx="4" />
        <text x="200" y="94" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="monospace">Polymer Coating Layer</text>
        <circle cx="100" cy="120" r="4" fill="#a78bfa" className="animate-ping" style={{ animationDuration: '3s' }}/>
        <circle cx="150" cy="130" r="4" fill="#a78bfa" className="animate-ping" style={{ animationDuration: '2.5s' }}/>
        <circle cx="200" cy="125" r="4" fill="#a78bfa" className="animate-ping" style={{ animationDuration: '4s' }}/>
        <circle cx="250" cy="135" r="4" fill="#a78bfa" className="animate-ping" style={{ animationDuration: '2s' }}/>
        <circle cx="300" cy="120" r="4" fill="#a78bfa" className="animate-ping" style={{ animationDuration: '3.5s' }}/>
        <text x="200" y="160" fill="#a78bfa" fontSize="10" textAnchor="middle" fontFamily="monospace">Inhibits Smooth Muscle Cell Proliferation</text>
      </svg>
    )
  },
  occlusion: {
    id: 'occlusion',
    name: 'Occlusion',
    category: 'Pathology',
    definition: 'A complete or partial blockage of a blood vessel or hollow organ. In cardiology, coronary occlusion is the blockage of a coronary artery, restricting blood flow to the heart muscle, often requiring stenting to reopen.',
    examples: ['Coronary artery occlusion', 'Deep vein thrombosis', 'Vascular blockage'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <text x="200" y="30" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">Arterial Occlusion</text>
        <path d="M50,80 Q200,80 350,80 L350,120 Q200,120 50,120 Z" fill="#475569" />
        <ellipse cx="200" cy="100" rx="30" ry="20" fill="#ef4444" opacity="0.8" />
        <text x="200" y="104" fill="#fee2e2" fontSize="10" textAnchor="middle" fontFamily="monospace">Blockage</text>
        <line x1="100" y1="100" x2="160" y2="100" stroke="#f87171" strokeWidth="2" strokeDasharray="4 2" />
        <polygon points="160,95 170,100 160,105" fill="#f87171" />
        <text x="130" y="90" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="monospace">Restricted Flow</text>
      </svg>
    )
  },
  stenosis: {
    id: 'stenosis',
    name: 'Stenosis',
    category: 'Pathology',
    definition: 'The abnormal narrowing of a blood vessel or other tubular organ or structure. Coronary stenosis decreases blood flow to the heart, potentially leading to angina or myocardial infarction.',
    examples: ['Coronary stenosis', 'Aortic stenosis', 'Spinal stenosis'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
         <text x="200" y="30" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">Vessel Stenosis</text>
         <path d="M50,70 Q150,70 200,90 Q250,70 350,70 L350,130 Q250,130 200,110 Q150,130 50,130 Z" fill="#475569" />
         <path d="M180,75 Q200,95 220,75 Z" fill="#eab308" opacity="0.8"/>
         <path d="M180,125 Q200,105 220,125 Z" fill="#eab308" opacity="0.8"/>
         <text x="200" y="150" fill="#eab308" fontSize="10" textAnchor="middle" fontFamily="monospace">Plaque Buildup Narrowing Lumen</text>
      </svg>
    )
  },
  restenosis: {
    id: 'restenosis',
    name: 'Restenosis',
    category: 'Pathology',
    definition: 'The recurrence of stenosis (narrowing) in a blood vessel or heart valve after it has been treated with angioplasty or stenting. It is primarily caused by neointimal hyperplasia (scar tissue growth).',
    examples: ['In-stent restenosis', 'Post-angioplasty restenosis'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <text x="200" y="30" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">In-Stent Restenosis</text>
        <path d="M50,70 L350,70 L350,130 L50,130 Z" fill="#334155" />
        <rect x="100" y="70" width="200" height="60" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M120,70 Q200,110 280,70 Z" fill="#fb923c" opacity="0.8" />
        <path d="M120,130 Q200,90 280,130 Z" fill="#fb923c" opacity="0.8" />
        <text x="200" y="104" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Tissue Regrowth</text>
      </svg>
    )
  },
  plga: {
    id: 'plga',
    name: 'PLGA',
    category: 'Biomaterial',
    definition: 'Poly(lactic-co-glycolic acid) is a biodegradable and biocompatible polymer used in medical devices. In drug-eluting stents, it serves as a carrier matrix that safely degrades while controlling the release rate of the drug (like Sirolimus) over months.',
    examples: ['Biodegradable sutures', 'Drug delivery coatings', 'Resorbable implants'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        <text x="200" y="30" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">PLGA Degradation Profile</text>
        <polyline points="50,150 150,140 250,90 350,40" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <polyline points="50,40 150,50 250,100 350,150" fill="none" stroke="#a78bfa" strokeWidth="2" />
        <text x="100" y="160" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">Drug Released</text>
        <text x="100" y="20" fill="#a78bfa" fontSize="10" textAnchor="middle" fontFamily="monospace">Polymer Mass</text>
        <line x1="200" y1="40" x2="200" y2="150" stroke="#475569" strokeDasharray="4 4" />
        <text x="200" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="monospace">Time (Weeks)</text>
      </svg>
    )
  },
  dehp: {
    id: 'dehp',
    name: 'DEHP Plasticizers & Chemical Leaching',
    category: 'Chemical Risk Factor',
    definition: 'Di(2-ethylhexyl) phthalate (DEHP) is a chemical additive used to make PVC plastics flexible and resilient. Under CDSCO MDR 2017 Rule 3, devices that channel or store blood or biological fluids (such as blood bags or bypass tubing) present chemical leaching hazards, as DEHP molecules can dissolve out of the plastic and enter the patient\'s bloodstream.',
    examples: ['PVC blood storage bags', 'Intravenous (IV) infusion sets', 'Extracorporeal circulation tubing', 'Enteral nutrition feeding tubes'],
    renderDiagram: () => (
      <svg viewBox="0 0 400 200" className="w-full h-40 bg-slate-900 rounded-xl p-2 border border-slate-700">
        {/* PVC Tube Wall (Top and Bottom) */}
        <rect x="30" y="40" width="340" height="15" fill="#475569" opacity="0.8" rx="2" />
        <rect x="30" y="125" width="340" height="15" fill="#475569" opacity="0.8" rx="2" />
        <text x="40" y="32" fill="#94a3b8" fontSize="8" fontWeight="bold" className="font-mono">FLEXIBLE PVC TUBING WALL</text>
        
        {/* Liquid flowing inside */}
        <rect x="30" y="55" width="340" height="70" fill="#991b1b" opacity="0.2" />
        <text x="200" y="93" fill="#f43f5e" fontSize="11" fontWeight="bold" textAnchor="middle">Biological Fluid Stream (Blood / Saline)</text>
        
        {/* DEHP Chemical Molecules (represented by small hexagon structures or circles leaching out) */}
        <g stroke="#fbbf24" strokeWidth="1" fill="none">
          {/* Leaching path 1 */}
          <path d="M 100 55 C 100 65, 110 75, 120 75" strokeDasharray="2 1" />
          <circle cx="120" cy="75" r="3.5" fill="#eab308" />
          
          {/* Leaching path 2 */}
          <path d="M 280 55 C 280 65, 270 80, 255 80" strokeDasharray="2 1" />
          <circle cx="255" cy="80" r="3.5" fill="#eab308" />
          
          {/* Leaching path 3 */}
          <path d="M 180 125 C 180 115, 190 100, 205 100" strokeDasharray="2 1" />
          <circle cx="205" cy="100" r="3.5" fill="#eab308" />
          
          {/* Leaching path 4 */}
          <path d="M 320 125 C 320 115, 310 105, 300 105" strokeDasharray="2 1" />
          <circle cx="300" cy="105" r="3.5" fill="#eab308" />
        </g>
        
        <text x="200" y="155" fill="#eab308" fontSize="9" fontWeight="extrabold" textAnchor="middle" className="font-mono uppercase tracking-wider">⚠️ ACTIVE DEHP PLASTICIZER LEACHING (MIGRATION)</text>
        <text x="200" y="184" fill="#cbd5e1" fontSize="8" textAnchor="middle">Leached phthalates pose endocrine-disrupting and reproductive health hazards</text>
      </svg>
    )
  },
};

interface TermsPopupProps {
  termId?: string;
  termData?: RegulatoryTerm | null;
  onClose: () => void;
}

export const RegulatoryTermsPopup: React.FC<TermsPopupProps> = ({ termId, termData, onClose }) => {
  const term = termData || (termId ? REGULATORY_TERMS[termId] : null);
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
            <h4 className="text-xs font-extrabold text-indigo-400 uppercase tracking-wide">Definition</h4>
            <p className="text-slate-300 text-xs leading-relaxed italic border-l-2 border-indigo-500 pl-3">
              {term.definition}
            </p>
          </div>

          {/* Inline Interactive SVG Diagram */}
          {term.renderDiagram && (
            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-indigo-400 uppercase tracking-wide">Conceptual Visual Diagram</h4>
              {term.renderDiagram()}
            </div>
          )}

          {/* Compliant Examples */}
          {term.examples && term.examples.length > 0 && (
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
          )}
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
