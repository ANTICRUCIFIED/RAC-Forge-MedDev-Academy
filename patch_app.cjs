const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Add Volume2 to lucide imports
content = content.replace('Download,', 'Download, Volume2, VolumeX, Loader2,');

// Add state and function inside App component
const states = `
  const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  // Stop speaking when component unmounts or chapter changes
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };
  }, [activeChapter]);

  const handleSpeakSummary = async () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!contentRef.current) return;
    
    setIsSummarizing(true);
    try {
      // Get text content of the chapter
      const textContent = contentRef.current.innerText || "";
      
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textContent })
      });
      
      if (!response.ok) throw new Error("Failed to get summary");
      
      const data = await response.json();
      const summaryText = data.summary;
      
      const utterance = new SpeechSynthesisUtterance(summaryText);
      // Try to use a Hindi voice if available, otherwise default
      const voices = window.speechSynthesis.getVoices();
      const hiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('hi-IN'));
      if (hiVoice) utterance.voice = hiVoice;
      
      utterance.onend = () => setIsSpeaking(false);
      
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Error summarizing:", error);
      alert("Failed to summarize chapter. Please try again.");
    } finally {
      setIsSummarizing(false);
    }
  };
`;

content = content.replace('const [isNotesModalOpen, setIsNotesModalOpen] = useState(false);', states);

const headerButton = `
                <div className="flex items-center gap-4 mb-6">
                  <h1 className="text-3xl font-bold text-[#0f172a] m-0">
                    {CHAPTERS.find(c => c.id === activeChapter)?.title}
                  </h1>
                  <button
                    onClick={handleSpeakSummary}
                    disabled={isSummarizing}
                    className="flex items-center justify-center p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-blue-600 transition-colors shrink-0"
                    title={isSpeaking ? "Stop Summary" : "Listen to Chapter Summary (Hinglish)"}
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
`;

content = content.replace(
  /<h1 className="text-3xl font-bold text-\[#0f172a\] mb-6">\s*\{CHAPTERS\.find\(c => c\.id === activeChapter\)\?\.title\}\s*<\/h1>/,
  headerButton
);

fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx");
