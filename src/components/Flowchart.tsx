import React from 'react';
import { ArrowDown, CornerDownRight } from 'lucide-react';

export default function Flowchart({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl overflow-x-auto my-8 shadow-sm">
      <div className="flex flex-col items-start min-w-max font-sans">
        {React.Children.map(children, (child, index) => {
          if (typeof child !== 'string') {
             // Handle elements like <br/> or <span>
             return child;
          }
          return child;
        })}
      </div>
    </div>
  );
}
