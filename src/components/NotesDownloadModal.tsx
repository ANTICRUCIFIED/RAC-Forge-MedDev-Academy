import { useReactToPrint } from 'react-to-print';
import { useState, useRef } from 'react';
import { X, Download, FileText, CheckSquare, Square } from 'lucide-react';

import { ChapterComponents } from '../chapterComponents';

interface NotesDownloadModalProps {
  chapters: { id: number; title: string }[];
  onClose: () => void;
}

export default function NotesDownloadModal({ chapters, onClose }: NotesDownloadModalProps) {
  const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
  const pdfExportRef = useRef<HTMLDivElement>(null);

  const toggleChapter = (id: number) => {
    setSelectedChapters(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedChapters.length === chapters.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters(chapters.map(c => c.id));
    }
  };

  
  const handlePrint = useReactToPrint({
    contentRef: pdfExportRef,
    documentTitle: 'Medical_Devices_Regulatory_Notes',
    pageStyle: `
      @page { size: A4 landscape; margin: 15mm; }
      @media print {
        body { 
          -webkit-print-color-adjust: exact; 
          print-color-adjust: exact; 
          background-color: white !important;
          color: black !important;
        }
        .print-page-break { page-break-after: always; break-after: page; }
        * { 
          overflow: visible !important; 
          max-height: none !important;
          height: auto !important;
          position: static !important;
        }
        .grid { display: block !important; }
        .grid > div { margin-bottom: 1rem; page-break-inside: avoid; break-inside: avoid; }
        table, tr, pre, blockquote { page-break-inside: avoid; break-inside: avoid; }
        h1, h2, h3, h4, h5, h6 { page-break-after: avoid; break-after: avoid; }
        svg { max-width: 100% !important; height: auto !important; max-height: 170mm !important; }
        button, .print-hidden, .absolute { display: none !important; }
      }
    `
  });


  return (
    <>
      <div className="absolute opacity-0 pointer-events-none w-full" style={{ zIndex: -9999, left: "-9999px", top: 0 }}>
        {/* Hidden container for PDF generation */}
        <div 
          ref={pdfExportRef} 
          id="pdf-export-container"
          className="prose prose-slate max-w-none p-8"
        >
          

          <div className="mb-10 text-center print-page-break">
             <h1 className="text-4xl font-bold mb-4 text-slate-900">Medical Devices Regulatory Course</h1>
             <h2 className="text-2xl text-slate-600">Comprehensive Notes & Reference</h2>
             <p className="mt-8 text-slate-500">Generated on {new Date().toLocaleDateString()}</p>
          </div>
          
          {selectedChapters.sort((a,b) => a-b).map(id => {
            const Comp = ChapterComponents[id];
            const chapterInfo = chapters.find(c => c.id === id);
            if (!Comp) return null;
            
            return (
              <div key={id} className="mb-12 print-page-break">
                <div className="border-b-2 border-slate-200 pb-4 mb-6">
                  <h2 className="text-3xl font-bold text-slate-800 m-0">{chapterInfo?.title}</h2>
                </div>
                <div className="pdf-chapter-content">
                   <Comp />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh]">
          
          <div className="bg-[#0f172a] text-white p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Download Course Notes</h2>
                <p className="text-xs text-slate-300">Select chapters to include in PDF</p>
              </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <span className="text-sm font-medium text-slate-700">
              {selectedChapters.length} of {chapters.length} selected
            </span>
            <button 
              onClick={toggleAll}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              {selectedChapters.length === chapters.length ? 'Deselect All' : 'Select All'}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
            {chapters.map(chapter => (
              <button
                key={chapter.id}
                onClick={() => toggleChapter(chapter.id)}
                className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors text-left"
              >
                <div className="flex-shrink-0 text-blue-600">
                  {selectedChapters.includes(chapter.id) ? (
                    <CheckSquare className="w-5 h-5" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <span className="text-sm text-slate-700 truncate">{chapter.title}</span>
              </button>
            ))}
          </div>

          <div className="p-5 border-t border-slate-100 bg-white">
            <button
              onClick={() => handlePrint()}
              disabled={selectedChapters.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-5 h-5" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
