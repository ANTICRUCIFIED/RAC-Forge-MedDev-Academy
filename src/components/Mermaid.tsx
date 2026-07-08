import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  flowchart: {
    htmlLabels: true,
    padding: 25,
    nodeSpacing: 50,
    rankSpacing: 50,
    useMaxWidth: false
  },
  themeVariables: {
    primaryColor: '#f8fafc',
    primaryTextColor: '#0f172a',
    primaryBorderColor: '#cbd5e1',
    lineColor: '#64748b',
    secondaryColor: '#f1f5f9',
    tertiaryColor: '#e2e8f0',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px'
  }
});

const ZoomControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't zoom if user is typing in an input
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

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    const renderChart = async () => {
      try {
        const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error("Mermaid parsing failed", err);
      }
    };
    renderChart();
    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div className="mermaid-wrapper w-full border border-slate-200 rounded-xl bg-slate-50 relative overflow-hidden my-6 group" tabIndex={0}>
      <TransformWrapper
        initialScale={1}
        minScale={0.2}
        maxScale={4}
        centerOnInit={true}
        wheel={{ disabled: true }}
        panning={{ disabled: false }}
        doubleClick={{ disabled: true }}
      >
        <ZoomControls />
        <TransformComponent wrapperStyle={{ width: '100%', height: '100%', minHeight: '500px' }}>
          <div 
            dangerouslySetInnerHTML={{ __html: svg }} 
            className="w-full h-full flex justify-center items-center p-8 cursor-move"
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
