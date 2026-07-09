import { useState, useEffect } from 'react';
import { 
  Bell, 
  User, 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  FileText,
  Building,
  Download,
  Menu
} from 'lucide-react';
import { ChapterComponents } from './chapterComponents';
import WordMeaningPopup from './components/WordMeaningPopup';
import NotesDownloadModal from './components/NotesDownloadModal';

const CHAPTERS = [
  { id: 1, title: 'Chapter 1: Introduction to Medical Devices and Risk-Based Classification' },
  { id: 2, title: 'Chapter 2: Why Are Medical Devices Classified? Understanding Risk-Based Classification in Simple Language' },
  { id: 3, title: 'Chapter 3: Understanding the Language of Medical Device Classification' },
  { id: 4, title: 'Chapter 4: How Regulators Actually Classify a Medical Device' },
  { id: 5, title: 'Chapter 5: Understanding Non-Invasive Medical Devices The Foundation of Rules 1–4' },
  { id: 6, title: 'Chapter 6: Rule 1 – Non-Invasive Medical Devices That Contact Intact Skin' },
  { id: 7, title: 'Chapter 7: Rule 2 – Non-Invasive Medical Devices Intended for Channeling or Storing Blood, Body Liquids, Cells, Tissues, Liquids or Gases' },
  { id: 8, title: 'Chapter 8: Rule 3 – Non-Invasive Medical Devices That Modify Blood or Other Liquids Before Administration' },
  { id: 9, title: 'Chapter 9: Rule 4 – Non-Invasive Medical Devices Intended to Contact Injured Skin' },
  { id: 10, title: 'Chapter 10: Understanding Invasive Medical Devices' },
  { id: 11, title: 'Chapter 11: Rule 5 – Invasive Medical Devices Intended to Enter the Body Through a Body Orifice' },
  { id: 12, title: 'Chapter 12: Rule 6 – Surgically Invasive Medical Devices Intended for Transient Use' },
  { id: 13, title: 'Chapter 13: Rule 7 – Surgically Invasive Medical Devices Intended for Short-Term Use' },
  { id: 14, title: 'Chapter 14: Rule 8 – Implantable Medical Devices and Surgically Invasive Medical Devices Intended for Long-Term Use' },
  { id: 15, title: 'Chapter 15: Understanding Active Medical Devices' },
  { id: 16, title: 'Chapter 16: Rule 9 – Active Therapeutic Medical Devices Intended to Administer or Exchange Energy' },
  { id: 17, title: 'Chapter 17: Rule 10 – Active Medical Devices Intended for Diagnosis and Monitoring' },
  { id: 18, title: 'Chapter 18: Rule 11 – Active Medical Devices Intended to Administer or Remove Medicinal Products, Body Liquids, or Other Substances' },
  { id: 19, title: 'Chapter 19: Rule 12 – All Other Active Medical Devices' },
  { id: 20, title: 'Chapter 20: Rule 13 – Medical Devices Incorporating a Medicinal Substance' },
  { id: 21, title: 'Chapter 21: Rule 14 – Medical Devices Intended for Contraception or Prevention of the Transmission of Sexually Transmitted Diseases (STDs)' },
  { id: 22, title: 'Chapter 22: Rule 15 – Medical Devices Intended Specifically for Disinfecting, Cleaning, Rinsing or Sterilizing Medical Devices' },
  { id: 23, title: 'Chapter 23: Rule 16 – Medical Devices Intended Specifically for Recording Diagnostic X-Ray Images' },
  { id: 23.5, title: 'Chapter 23.5: Master Classification Wizard' },
  { id: 24, title: 'Chapter 24: How to Classify a Medical Device Step-by-Step' },
  { id: 25, title: 'Chapter 25: Understanding Intended Purpose' },
  { id: 26, title: 'Chapter 26: When More Than One Classification Rule Applies' },
  { id: 27, title: 'Chapter 27: Master Medical Device Classification Decision Trees' },
  { id: 28, title: 'Chapter 28: Practical Classification of Common Medical Devices' },
  { id: 29, title: 'Chapter 29: The 100 Most Common Medical Device Classification Mistakes' },
  { id: 30, title: 'Chapter 30: Practical Classification in Different Medical Specialties' },
];

export default function App() {
  const [activeChapter, setActiveChapter] = useState(1);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);

  const [selectedWordInfo, setSelectedWordInfo] = useState<{term: string, context: string, position: {x: number, y: number}} | null>(null);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0 && selection.toString().trim().length < 50) {
        const term = selection.toString().trim();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const context = range.startContainer.parentElement?.textContent || "";
        
        setSelectedWordInfo({
          term,
          context,
          position: { x: rect.left, y: rect.bottom }
        });
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMarkComplete = () => {
    if (!completedChapters.includes(activeChapter)) {
      setCompletedChapters([...completedChapters, activeChapter]);
    }
    if (activeChapter < CHAPTERS.length) {
      setActiveChapter(activeChapter + 1);
    }
  };

  const progressPercentage = Math.round((completedChapters.length / CHAPTERS.length) * 100);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      {selectedWordInfo && (
        <WordMeaningPopup 
          term={selectedWordInfo.term}
          context={selectedWordInfo.context}
          position={selectedWordInfo.position}
          onClose={() => setSelectedWordInfo(null)}
        />
      )}
      {isNotesModalOpen && <NotesDownloadModal chapters={CHAPTERS} onClose={() => setIsNotesModalOpen(false)} />}

      {/* Top Header */}
      <header className="bg-[#0f172a] text-white py-4 px-6 flex justify-between items-center shadow-md z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Building className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">RAC Forger Private Limited</h1>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Internal Training Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsNotesModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download Notes</span>
          </button>
          <button className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#0f172a]"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">Sankhyayan</p>
              <p className="text-xs text-slate-400">Senior QA Director</p>
            </div>
            <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center border border-slate-600">
              <User className="w-5 h-5 text-slate-300" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        
        {/* Left Column: Sidebar */}
        <aside className="group fixed lg:sticky top-[76px] left-0 h-[calc(100vh-76px)] z-40 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out w-16 hover:w-80 overflow-hidden flex flex-col shadow-lg">
          <div className="p-4 flex items-center gap-3 border-b border-slate-100 w-80">
            <Menu className="w-6 h-6 text-slate-500 shrink-0" />
            <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">Course Curriculum</h2>
          </div>
          
          <div className="p-4 overflow-y-auto flex-1 w-80 custom-scrollbar opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <nav className="space-y-2">
              {CHAPTERS.map((chapter) => {
                const isCompleted = completedChapters.includes(chapter.id);
                const isActive = activeChapter === chapter.id;
                
                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapter(chapter.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${
                      isActive 
                        ? 'bg-blue-900 border border-blue-800 shadow-sm' 
                        : 'hover:bg-slate-50 border border-transparent'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : isActive ? (
                        <Circle className="w-5 h-5 text-white fill-blue-900" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300" />
                      )}
                    </div>
                    <span className={`text-sm font-medium leading-tight ${isActive ? 'text-white' : 'text-slate-600'}`}>
                      {chapter.title}
                    </span>
                  </button>
                );
              })}
            </nav>
            
            {/* Dashboard / Other Nav items placeholder */}
            <div className="mt-10 pt-6 border-t border-slate-100">
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Quick Links</h2>
               <div className="space-y-1">
                 {['Dashboard', 'My Regulatory Courses', 'Forging Safety SOPs', 'Certification Vault', 'Audit Reports'].map(link => (
                   <a key={link} href="#" className="block py-2 px-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#0f172a] rounded-lg transition-colors">
                     {link}
                   </a>
                 ))}
               </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Main Content */}
        <main className="w-full lg:flex-1 p-6 lg:p-10 lg:pl-24 transition-all duration-300">
          <div className="max-w-5xl mx-auto">
            
            {/* Breadcrumb & Progress */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <a href="#" className="hover:text-[#0f172a]">Courses</a>
                <ChevronRight className="w-4 h-4" />
                <a href="#" className="hover:text-[#0f172a]">ISO 13485 Internal Auditor</a>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#0f172a] font-medium">{CHAPTERS.find(c => c.id === activeChapter)?.title}</span>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-6">
                 <div className="flex-1">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Course Progress</span>
                     <span className="text-sm font-bold text-[#0f172a]">{progressPercentage}%</span>
                   </div>
                   <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                     <div 
                       className="bg-[#0f172a] h-full rounded-full transition-all duration-500 ease-out"
                       style={{ width: `${progressPercentage}%` }}
                     ></div>
                   </div>
                 </div>
                 <div className="hidden sm:block text-right">
                    <p className="text-sm text-slate-500">Modules Completed</p>
                    <p className="text-lg font-bold text-[#0f172a]">{completedChapters.length} / {CHAPTERS.length}</p>
                 </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
              {/* Text Content */}
              <div className="p-8 lg:p-12">
                
                <div className="flex flex-col gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4 justify-between sm:justify-start">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] m-0">
                      {CHAPTERS.find(c => c.id === activeChapter)?.title}
                    </h1>
                  </div>
                </div>

                
                {(() => {
                  const ActiveChapter = ChapterComponents[activeChapter];
                  return ActiveChapter ? <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h3:text-xl prose-a:text-blue-600 prose-img:rounded-xl"><ActiveChapter /></div> : <div className="prose prose-slate max-w-none prose-headings:text-[#0f172a] prose-a:text-blue-600"><p className="text-lg text-slate-600 leading-relaxed mb-6">Content for this chapter is coming soon.</p></div>;
                })()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button className="text-slate-500 font-medium hover:text-[#0f172a] transition-colors">
                Previous Chapter
              </button>
              <button 
                onClick={handleMarkComplete}
                className="bg-[#0f172a] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                {activeChapter === CHAPTERS.length ? 'Finish Course' : 'Mark Chapter as Complete & Next'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
