import { useState, useEffect, useRef } from 'react';
import { 
  Bell, 
  User, 
  CheckCircle2, 
  Circle, 
  ChevronRight, 
  AlertTriangle,
  FileText,
  Building,
  Download, Volume2, VolumeX, Loader2,
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
  
  const contentRef = useRef<HTMLDivElement>(null);
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [ttsMode, setTtsMode] = useState<'gemini' | 'browser'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ttsMode');
      return (saved === 'browser') ? 'browser' : 'gemini';
    }
    return 'gemini';
  });

  useEffect(() => {
    localStorage.setItem('ttsMode', ttsMode);
  }, [ttsMode]);
  
  // Chapter summaries & high-quality PCM audio cache
  const [chapterSummaries, setChapterSummaries] = useState<Record<number, string>>({});
  const [chapterAudio, setChapterAudio] = useState<Record<number, Float32Array>>({});
  const [isPreFetching, setIsPreFetching] = useState<Record<number, 'idle' | 'loading' | 'ready' | 'error'>>({});
  
  const preFetchPromises = useRef<Record<number, Promise<{ summary: string; audio?: Float32Array }>>>({});

  // Stop speaking when component unmounts or chapter changes
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if ((window as any).currentAudioSource) {
        try { (window as any).currentAudioSource.stop(); } catch(e) {}
        (window as any).currentAudioSource = null;
      }
      setIsSpeaking(false);
    };
  }, [activeChapter]);

  // Pre-load synthesis voices to ensure high quality on fallback
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      const handleVoices = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.addEventListener('voiceschanged', handleVoices);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoices);
      };
    }
  }, []);

  // Decodes base64 string from Gemini TTS to PCM Float32Array (24kHz Mono)
  const decodeBase64ToFloat32PCM = (base64Str: string): Float32Array => {
    const binary = atob(base64Str);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const int16 = new Int16Array(bytes.buffer);
    const float32 = new Float32Array(int16.length);
    for (let i = 0; i < int16.length; i++) {
      float32[i] = int16[i] / 32768.0;
    }
    return float32;
  };

  const fetchStreamingSummary = async (textContent: string, signal?: AbortSignal): Promise<string> => {
    let timeoutId: any = null;
    let fetchSignal = signal;
    if (!signal) {
      const controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 45000); // 45 second timeout
      fetchSignal = controller.signal;
    }

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textContent }),
        signal: fetchSignal
      });

      if (timeoutId) clearTimeout(timeoutId);

      if (!response.ok) {
        let errorMsg = `Summary API failed with status ${response.status}`;
        try {
          const rawText = await response.text();
          try {
            const errData = JSON.parse(rawText);
            if (errData.error) {
              errorMsg = errData.error;
              if (errData.details) errorMsg += ` (${errData.details})`;
            }
          } catch (_) {
            if (rawText) {
              errorMsg = rawText.substring(0, 200);
            }
          }
        } catch (e) {}
        throw new Error(errorMsg);
      }

      if (!response.body) {
        throw new Error("No response body to stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let accumulatedText = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulatedText += decoder.decode(value, { stream: true });
        }
      } finally {
        reader.releaseLock();
      }

      const trimmed = accumulatedText.trim();
      if (!trimmed) {
        throw new Error("Empty summary streamed from API");
      }

      return trimmed;
    } catch (err: any) {
      if (timeoutId) clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        throw new Error("Summary API request timed out after 10 seconds.");
      }
      throw err;
    }
  };

  // Ensures high-quality text & TTS audio are generated and cached for the target chapter
  const ensureAudioForChapter = async (chapterId: number): Promise<{ summary: string; audio?: Float32Array }> => {
    // If already cached, return immediately
    if (chapterAudio[chapterId]) {
      return { summary: chapterSummaries[chapterId] || "", audio: chapterAudio[chapterId] };
    }

    // If already prefetching, return the existing promise
    if (preFetchPromises.current[chapterId]) {
      return preFetchPromises.current[chapterId];
    }

    // Start a new pre-fetch process
    const promise = (async () => {
      setIsPreFetching(prev => ({ ...prev, [chapterId]: 'loading' }));
      try {
        let summaryText = chapterSummaries[chapterId];

        // Step 1: Ensure we have the summary text
        if (!summaryText) {
          const textContent = contentRef.current?.innerText || "";
          if (!textContent.trim() || textContent.length < 15) {
            throw new Error("No chapter content available to summarize");
          }

          try {
            summaryText = await fetchStreamingSummary(textContent);
          } catch (sumErr: any) {
            console.warn(`Failed to fetch streaming summary for chapter ${chapterId}, using client-side fallback:`, sumErr);
            const cleanText = textContent.replace(/\s+/g, ' ').trim();
            const sentences = cleanText.split(/(?<=[.!?])\s+/);
            const firstFew = sentences.slice(0, 4).join(' ');
            summaryText = `[Offline Mode: Showing chapter excerpt] ${firstFew}`;
            setTtsMode('browser');
            setApiError("Your Gemini cloud API quota is fully exhausted for today (Free Tier Rate Limit). To ensure an uninterrupted experience, we have automatically switched to local 'Offline Mode' using browser-native speech synthesis and instant client-side summaries!");
          }
          setChapterSummaries(prev => ({ ...prev, [chapterId]: summaryText }));
        }

        // Skip high-quality TTS audio API call if we are in browser-native TTS mode
        if (ttsMode === 'browser') {
          setIsPreFetching(prev => ({ ...prev, [chapterId]: 'ready' }));
          return { summary: summaryText };
        }

        // Step 2: Ensure we generate the high-quality natural TTS audio
        try {
          const ttsResponse = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: summaryText })
          });

          if (!ttsResponse.ok) {
            let errorMsg = "TTS API failed";
            try {
              const errData = await ttsResponse.json();
              if (errData.error) {
                errorMsg = `TTS API failed: ${errData.error}`;
                if (errData.details) errorMsg += ` (${errData.details})`;
              }
            } catch (e) {
              try {
                const textErr = await ttsResponse.text();
                if (textErr) errorMsg = `TTS API failed: ${textErr.substring(0, 200)}`;
              } catch (e2) {}
            }
            throw new Error(errorMsg);
          }

          const ttsData = await ttsResponse.json();
          if (!ttsData.audio) {
            throw new Error("No audio returned from TTS API");
          }

          const float32PCM = decodeBase64ToFloat32PCM(ttsData.audio);

          // Cache the result
          setChapterAudio(prev => ({ ...prev, [chapterId]: float32PCM }));
          setIsPreFetching(prev => ({ ...prev, [chapterId]: 'ready' }));
          return { summary: summaryText, audio: float32PCM };
        } catch (ttsErr: any) {
          console.warn(`High-quality TTS generation failed for chapter ${chapterId}, using native fallback:`, ttsErr);
          setIsPreFetching(prev => ({ ...prev, [chapterId]: 'ready' }));
          return { summary: summaryText };
        }
      } catch (err: any) {
        console.warn(`ensureAudioForChapter failed for chapter ${chapterId}:`, err);
        setIsPreFetching(prev => ({ ...prev, [chapterId]: 'error' }));
        delete preFetchPromises.current[chapterId];

        const errorStr = String(err?.message || err);
        const isQuotaExceeded = errorStr.includes("quota") || errorStr.includes("429") || errorStr.includes("exhausted") || errorStr.includes("RESOURCE_EXHAUSTED") || errorStr.includes("Limit");
        if (isQuotaExceeded) {
          setTtsMode('browser');
          setApiError("Your Gemini cloud API quota is fully exhausted for today (Free Tier Rate Limit). To ensure an uninterrupted experience, we have automatically switched your Speech Engine to 'Browser Native (Fast/Offline)'. You can still listen to all summaries and read without issues!");
        }

        throw err;
      }
    })();

    preFetchPromises.current[chapterId] = promise;
    return promise;
  };

  // Proactive background pre-fetching of current chapter's summary & natural TTS
  useEffect(() => {
    const timer = setTimeout(() => {
      ensureAudioForChapter(activeChapter).catch(() => {});
    }, 400); // Small delay to let DOM stabilize

    return () => clearTimeout(timer);
  }, [activeChapter]);

  // Plays high-quality PCM using browser's AudioContext
  const playFloat32Audio = async (pcmData: Float32Array) => {
    // Stop any existing speech synthesis or audio context source
    window.speechSynthesis.cancel();
    if ((window as any).currentAudioSource) {
      try { (window as any).currentAudioSource.stop(); } catch(e) {}
      (window as any).currentAudioSource = null;
    }

    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      await audioCtx.resume();

      const audioBuffer = audioCtx.createBuffer(1, pcmData.length, 24000);
      audioBuffer.getChannelData(0).set(pcmData);

      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);
      source.onended = () => {
        setIsSpeaking(false);
        (window as any).currentAudioSource = null;
      };

      setIsSpeaking(true);
      source.start(0);
      (window as any).currentAudioSource = source;
    } catch (err) {
      console.error("Failed to play PCM audio:", err);
      setIsSpeaking(false);
    }
  };

  // Fallback to native Web Speech API if natural TTS is completely blocked/fails
  const speakNativeInstantly = (text: string, onEndCallback?: () => void) => {
    window.speechSynthesis.cancel();
    if ((window as any).currentAudioSource) {
      try { (window as any).currentAudioSource.stop(); } catch(e) {}
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find(v => v.lang.toLowerCase().includes('hi') || v.lang.toLowerCase().includes('in'));
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
    utterance.rate = 0.95;

    utterance.onend = () => {
      setIsSpeaking(false);
      if (onEndCallback) onEndCallback();
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeakSummary = async () => {
    // If currently speaking, toggle off immediately on click!
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      if ((window as any).currentAudioSource) {
        try { (window as any).currentAudioSource.stop(); } catch(e) {}
        (window as any).currentAudioSource = null;
      }
      setIsSpeaking(false);
      return;
    }

        // Handle Browser-Only Speech Synthesis
    if (ttsMode === 'browser') {
      setIsSummarizing(true);
      try {
        let textToSpeak = chapterSummaries[activeChapter];
        
        if (!textToSpeak) {
          try {
            const textContent = contentRef.current?.innerText || "";
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 45000); // 45-second timeout
            
            textToSpeak = await fetchStreamingSummary(textContent, controller.signal);
            clearTimeout(timeoutId);
            
            if (textToSpeak) {
              setChapterSummaries(prev => ({ ...prev, [activeChapter]: textToSpeak }));
            }
          } catch (e) {
            console.warn("Summary API failed or timed out, reading from chapter text directly instead:", e);
          }
        }

        // If we still don't have a summary, read the first 4 key paragraphs/headings
        if (!textToSpeak) {
          const rawText = contentRef.current?.innerText || "";
          const lines = rawText.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 25 && !line.includes("RAC Forger") && !line.includes("Course Curriculum"));
          
          textToSpeak = lines.slice(0, 4).join(". ");
          if (!textToSpeak) {
            textToSpeak = rawText.substring(0, 500) + "...";
          }
        }

        setIsSummarizing(false);
        speakNativeInstantly(textToSpeak);
      } catch (err) {
        setIsSummarizing(false);
        const fallbackText = contentRef.current?.innerText?.substring(0, 500) || "Chapter content not found.";
        speakNativeInstantly(fallbackText);
      }
      return;
    }

    // Play instantly if already pre-fetched and cached!
    if (chapterAudio[activeChapter]) {
      await playFloat32Audio(chapterAudio[activeChapter]);
      return;
    }

    // Otherwise wait for the active fetch promise or trigger a new one
    setIsSummarizing(true);
    try {
      const result = await ensureAudioForChapter(activeChapter);
      setIsSummarizing(false);
      if (result.audio) {
        await playFloat32Audio(result.audio);
      } else {
        console.warn("High-quality TTS was unavailable, using native synthesis with summary.");
        speakNativeInstantly(result.summary);
      }
    } catch (err: any) {
      console.error("High-quality TTS failed, falling back to native TTS:", err);
      setIsSummarizing(false);
      setIsSpeaking(false);
      
      const errorStr = String(err?.message || err);
      const isQuotaExceeded = errorStr.includes("quota") || errorStr.includes("429") || errorStr.includes("exhausted") || errorStr.includes("RESOURCE_EXHAUSTED") || errorStr.includes("Limit");
      
      if (isQuotaExceeded) {
        setTtsMode('browser');
        setApiError("Your Gemini cloud API quota is fully exhausted for today (Free Tier Rate Limit). To ensure an uninterrupted experience, we have automatically switched your Speech Engine to 'Browser Native (Fast/Offline)'. You can still listen to all summaries and read without issues!");
      }

      const summaryText = chapterSummaries[activeChapter] || "Sorry, summary ready nahi ho payi. Kripya thodi der baad fir se try karein.";
      speakNativeInstantly(summaryText);
    }
  };

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

      {apiError && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in" id="error-notice-modal">
          <div className="bg-white rounded-2xl shadow-xl border border-red-100 max-w-md w-full overflow-hidden transform scale-100 transition-transform duration-300">
            <div className="p-6 bg-red-50 border-b border-red-100 flex items-center gap-3">
              <div className="bg-red-500 text-white p-2 rounded-full">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-red-900">System Notice</h3>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{apiError}</p>
              <div className="flex justify-end">
                <button
                  id="dismiss-error-btn"
                  onClick={() => setApiError(null)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm cursor-pointer shadow-sm"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
              <div className="p-8 lg:p-12" ref={contentRef}>
                
                <div className="flex flex-col gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4 justify-between sm:justify-start">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] m-0">
                      {CHAPTERS.find(c => c.id === activeChapter)?.title}
                    </h1>
                    <button
                      onClick={handleSpeakSummary}
                      disabled={isSummarizing}
                      className="flex items-center justify-center p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-blue-600 transition-colors shrink-0 cursor-pointer"
                      title={isSpeaking ? "Stop Summary" : "Listen to Chapter Summary"}
                    >
                      {isSummarizing ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : isSpeaking ? (
                        <VolumeX className="w-6 h-6 text-red-500" />
                      ) : (
                        <Volume2 className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-500 font-semibold uppercase tracking-wider text-[10px]">Speech Engine:</span>
                    <div className="inline-flex rounded-lg p-0.5 bg-slate-100 border border-slate-200">
                      <button
                        onClick={() => {
                          if (isSpeaking) {
                            window.speechSynthesis.cancel();
                            if ((window as any).currentAudioSource) {
                              try { (window as any).currentAudioSource.stop(); } catch(e) {}
                            }
                            setIsSpeaking(false);
                          }
                          setTtsMode('gemini');
                        }}
                        className={`px-3 py-1 rounded-md font-bold transition-all cursor-pointer ${
                          ttsMode === 'gemini' 
                            ? 'bg-[#0f172a] text-white shadow-sm' 
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        🌟 Gemini AI (Hinglish Class)
                      </button>
                      <button
                        onClick={() => {
                          if (isSpeaking) {
                            window.speechSynthesis.cancel();
                            if ((window as any).currentAudioSource) {
                              try { (window as any).currentAudioSource.stop(); } catch(e) {}
                            }
                            setIsSpeaking(false);
                          }
                          setTtsMode('browser');
                        }}
                        className={`px-3 py-1 rounded-md font-bold transition-all cursor-pointer ${
                          ttsMode === 'browser' 
                            ? 'bg-[#0f172a] text-white shadow-sm' 
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        💻 Browser Native (Fast/Offline)
                      </button>
                    </div>
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
