import React from 'react';

export function StartNode({ text }: { text: string }) {
  return (
    <div className="bg-slate-100 border-2 border-slate-400 text-slate-700 font-bold text-center px-4 py-2.5 rounded-lg shadow-sm min-w-[140px] text-sm flex items-center justify-center transition-all hover:border-slate-500 hover:shadow-md">
      <div>
        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Start</div>
        {text}
      </div>
    </div>
  );
}

export function DecisionNode({ text }: { text: string }) {
  return (
    <div className="bg-white border-2 border-sky-500 text-sky-950 font-semibold text-center px-4 py-3 rounded-xl shadow-sm min-w-[180px] max-w-[240px] text-xs leading-normal flex items-center justify-center transition-all hover:border-sky-600 hover:shadow-md">
      {text}
    </div>
  );
}

export function Arrow() {
  return (
    <div className="flex flex-col items-center select-none w-full relative h-10">
      <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-sky-300 -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-sky-500"></div>
    </div>
  );
}

export function VerticalConnector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center select-none w-full relative h-12">
      <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-sky-300 -translate-x-1/2"></div>
      {label && (
        <span className="relative z-10 bg-white border border-sky-100 text-sky-700 font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-sm my-auto">
          {label}
        </span>
      )}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-sky-500"></div>
    </div>
  );
}

export function HorizontalConnector({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center select-none relative px-4 py-2 min-w-[80px]">
      <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-sky-300 -translate-y-1/2"></div>
      {label && (
        <span className="relative z-10 bg-white border border-sky-100 text-sky-700 font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
          {label}
        </span>
      )}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-sky-500"></div>
    </div>
  );
}

export function Branch({ text }: { text: string }) {
  return (
    <div className="text-[10px] font-bold text-sky-700 text-center px-2 py-1 bg-sky-50 border border-sky-200 rounded select-none min-w-[50px] shadow-sm">
      {text}
    </div>
  );
}

export function TwoWaySplit({
  leftChild,
  rightChild,
  leftLabel = "YES",
  rightLabel = "NO"
}: {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center min-w-max my-1">
      {/* Stem going down from parent */}
      <div className="w-[2px] h-5 bg-sky-300"></div>
      
      {/* Left & Right branches */}
      <div className="flex flex-row items-start">
        {/* Left column */}
        <div className="flex flex-col items-center min-w-[280px]">
          {/* Shoulder and drop line */}
          <div className="relative w-full h-4">
            {/* Horizontal shoulder line from center (50%) to right (100%) */}
            <div className="absolute top-0 left-1/2 right-0 h-[2px] bg-sky-300"></div>
            {/* Vertical drop line down the center (50%) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-sky-300 -translate-x-1/2"></div>
          </div>
          
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-black px-2 py-0.5 rounded-full mb-3 shadow-sm select-none z-10">
            {leftLabel}
          </span>
          <div className="px-4 w-full flex flex-col items-center">
            {leftChild}
          </div>
        </div>
        
        {/* Right column */}
        <div className="flex flex-col items-center min-w-[280px]">
          {/* Shoulder and drop line */}
          <div className="relative w-full h-4">
            {/* Horizontal shoulder line from left (0%) to center (50%) */}
            <div className="absolute top-0 left-0 right-1/2 h-[2px] bg-sky-300"></div>
            {/* Vertical drop line down the center (50%) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-sky-300 -translate-x-1/2"></div>
          </div>
          
          <span className="bg-rose-50 text-rose-700 border border-rose-100 text-[10px] font-black px-2 py-0.5 rounded-full mb-3 shadow-sm select-none z-10">
            {rightLabel}
          </span>
          <div className="px-4 w-full flex flex-col items-center">
            {rightChild}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MultiSplit({
  branches
}: {
  branches: { label: string; child: React.ReactNode }[];
}) {
  return (
    <div className="flex flex-col items-center min-w-max my-1">
      {/* Vertical trunk line from parent */}
      <div className="w-[2px] h-5 bg-sky-300"></div>
      
      {/* Column children */}
      <div className="flex flex-row items-start mt-1">
        {branches.map((b, idx) => {
          // First branch: 50% to 100%
          // Last branch: 0% to 50%
          // Middle branches: 0% to 100%
          let lineStyle = "absolute top-0 h-[2px] bg-sky-300";
          if (idx === 0) {
            lineStyle += " left-1/2 right-0";
          } else if (idx === branches.length - 1) {
            lineStyle += " left-0 right-1/2";
          } else {
            lineStyle += " left-0 right-0";
          }

          return (
            <div 
              key={idx} 
              className="flex flex-col items-center min-w-[280px]"
            >
              {/* Shoulder header area */}
              <div className="relative w-full h-4">
                {/* Horizontal line segment */}
                <div className={lineStyle}></div>
                {/* Vertical drop line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-sky-300 -translate-x-1/2"></div>
              </div>

              <span className="bg-sky-50 text-sky-700 border border-sky-100 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mb-3 shadow-sm select-none z-10">
                {b.label}
              </span>
              <div className="px-4 w-full flex flex-col items-center">
                {b.child}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface OutcomeCardProps {
  clazz: 'A' | 'B' | 'C' | 'D' | 'Matches Active' | string;
  subpart: string;
  title: string;
  examples: string[];
}

export function OutcomeCard({ clazz, subpart, title, examples }: OutcomeCardProps) {
  let cardClass = '';
  let tagClass = '';

  switch (clazz) {
    case 'A':
      cardClass = 'bg-emerald-50 border-2 border-emerald-400 text-emerald-950';
      tagClass = 'bg-emerald-200/60 text-emerald-900';
      break;
    case 'B':
      cardClass = 'bg-amber-50 border-2 border-amber-400 text-amber-950';
      tagClass = 'bg-amber-200/60 text-amber-900';
      break;
    case 'C':
      cardClass = 'bg-orange-50 border-2 border-orange-400 text-orange-950';
      tagClass = 'bg-orange-200/60 text-orange-900';
      break;
    case 'D':
      cardClass = 'bg-rose-50 border-2 border-rose-400 text-rose-950';
      tagClass = 'bg-rose-200/60 text-rose-900';
      break;
    case 'Matches Active':
    default:
      cardClass = 'bg-sky-50 border-2 border-sky-400 text-sky-950';
      tagClass = 'bg-sky-200/60 text-sky-900';
      break;
  }

  return (
    <div className={`p-4 rounded-xl shadow-sm min-w-[200px] max-w-[280px] text-left transition-all hover:shadow-md ${cardClass}`}>
      <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider mb-2 inline-block ${tagClass}`}>
        {subpart} &rarr; Class {clazz}
      </span>
      <h5 className="font-bold text-xs mt-0 mb-1 leading-tight">{title}</h5>
      {examples.length > 0 && (
        <div className="mt-2 pt-2 border-t border-current/10 text-[10px] font-medium leading-normal opacity-85">
          <span className="font-semibold block mb-0.5">Examples:</span>
          <span className="italic">{examples.join(', ')}</span>
        </div>
      )}
    </div>
  );
}
