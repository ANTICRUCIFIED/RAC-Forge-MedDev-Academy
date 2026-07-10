import React, { useEffect } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

const ZoomControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === '+' || e.key === '=') {
        zoomIn(0.2);
      } else if (e.key === '-' || e.key === '_') {
        zoomOut(0.2);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIn, zoomOut]);

  return (
    <React.Fragment>
      <div className="absolute bottom-4 right-4 print-hidden z-20 flex gap-2 bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-1.5 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => zoomIn(0.2)} 
          className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-blue-600 transition-colors"
          title="Zoom In (+)"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button 
          onClick={() => zoomOut(0.2)} 
          className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-blue-600 transition-colors"
          title="Zoom Out (-)"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <div className="w-px bg-slate-200 my-1 mx-0.5"></div>
        <button 
          onClick={() => resetTransform()} 
          className="p-1.5 hover:bg-slate-100 rounded text-slate-600 hover:text-blue-600 transition-colors"
          title="Reset View"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>
      
      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Use + / - to zoom, drag to pan
      </div>
    </React.Fragment>
  );
};

interface InteractiveFlowchartProps {
  children: React.ReactNode;
  minHeight?: string;
}

export default function InteractiveFlowchart({ children, minHeight = "400px" }: InteractiveFlowchartProps) {
  return (
    <div className="flowchart-wrapper w-full border border-slate-200 rounded-xl bg-slate-50 relative overflow-hidden my-6 group" tabIndex={0}>
      <TransformWrapper
        initialScale={1}
        minScale={0.1}
        maxScale={4}
        centerOnInit={true}
        wheel={{ disabled: true }}
        panning={{ disabled: false }}
        doubleClick={{ disabled: true }}
      >
        <ZoomControls />
        <TransformComponent wrapperStyle={{ width: '100%', height: '100%', minHeight }}>
          <div className="p-8 cursor-move select-none flex justify-center items-center min-w-max min-h-full">
            <div className="font-sans text-slate-700 min-w-max [&>div]:!w-auto [&>div]:!min-w-max">
              {children}
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
