import React, { useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';

let mermaidInstance: any = null;

const getMermaid = async () => {
  if (mermaidInstance) return mermaidInstance;
  try {
    // Dynamically import from jsdelivr CDN to bypass Vite development pre-bundling issues for dynamic/lazy-loaded layout types
    const cdnUrl = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    const module = await import(/* @vite-ignore */ cdnUrl);
    mermaidInstance = module.default || module;
    return mermaidInstance;
  } catch (err) {
    console.warn("Failed to load mermaid from CDN, falling back to local package", err);
    // Dynamic fallback to local bundle
    const localModule = await import('mermaid');
    mermaidInstance = localModule.default || localModule;
    return mermaidInstance;
  }
};

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

// Sequential render queue to avoid concurrent Mermaid parses (which corrupt the parser state)
let renderQueue = Promise.resolve();

const queueRender = async (id: string, chartText: string): Promise<string> => {
  const currentQueue = renderQueue;
  let resolveNext: () => void = () => {};
  renderQueue = new Promise((resolve) => {
    resolveNext = resolve;
  });

  try {
    await currentQueue;
    const m = await getMermaid();
    const { svg } = await m.render(id, chartText);
    resolveNext();
    return svg;
  } catch (err) {
    resolveNext();
    throw err;
  }
};

let initialized = false;
const initMermaid = async () => {
  if (initialized) return;
  const m = await getMermaid();
  m.initialize({
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
  initialized = true;
};

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const renderChart = async () => {
      try {
        await initMermaid();
        const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
        const renderedSvg = await queueRender(id, chart);
        if (isMounted) {
          setSvg(renderedSvg);
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Mermaid parsing failed", err);
        if (isMounted) {
          setError(err?.message || String(err));
          setLoading(false);
        }
      }
    };

    renderChart();
    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (loading) {
    return (
      <div className="w-full border border-slate-200 rounded-xl bg-slate-50 relative flex items-center justify-center p-12 min-h-[300px]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-slate-500 font-medium">Rendering flowchart...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full border border-red-200 rounded-xl bg-red-50 p-6 my-6 shadow-sm">
        <h4 className="text-red-800 font-bold mb-2">Diagram Rendering Failed</h4>
        <p className="text-sm text-red-600 mb-4">There was an issue rendering this diagram. Please verify the diagram syntax.</p>
        <div className="bg-red-100 p-3 rounded font-mono text-xs text-red-700 max-h-40 overflow-y-auto">
          {error}
        </div>
      </div>
    );
  }

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
