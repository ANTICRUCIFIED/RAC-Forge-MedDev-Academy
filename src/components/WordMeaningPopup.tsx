import { useState, useEffect } from 'react';
import { X, Book, Loader2 } from 'lucide-react';

interface WordMeaningPopupProps {
  term: string;
  context: string;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

export default function WordMeaningPopup({ term, context, position, onClose }: WordMeaningPopupProps) {
  const [loading, setLoading] = useState(true);
  const [definition, setDefinition] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!term) return;
    
    // Deselect text so it doesn't trigger again
    window.getSelection()?.removeAllRanges();

    const fetchDefinition = async () => {
      setLoading(true);
      setError(null);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
      
      const cleanTerm = term.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
      
      try {
        const response = await fetch('/api/define', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ term, context }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`API status ${response.status}`);
        }
        
        const data = await response.json();
        setDefinition(data);
      } catch (err: any) {
        clearTimeout(timeoutId);
        console.warn("Primary definition API failed, trying public dictionary fallback...", err);
        
        // Fallback 1: Public keyless Dictionary API
        try {
          const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanTerm)}`);
          if (dictRes.ok) {
            const dictData = await dictRes.json();
            if (Array.isArray(dictData) && dictData.length > 0) {
              const firstEntry = dictData[0];
              const firstMeaning = firstEntry.meanings?.[0];
              const firstDef = firstMeaning?.definitions?.[0];
              
              if (firstDef) {
                setDefinition({
                  category: (firstMeaning?.partOfSpeech || "Dictionary").toUpperCase(),
                  definition: firstDef.definition,
                  examples: firstDef.example ? [firstDef.example] : []
                });
                return;
              }
            }
          }
        } catch (dictErr) {
          console.warn("Public dictionary API fallback failed:", dictErr);
        }

        // Fallback 2: Intelligent local explanation
        setDefinition({
          category: "OFFLINE / LOCAL EXPLAINER",
          definition: `We are currently in offline/backup mode because the Gemini API free quota limit has been reached. "${cleanTerm}" is a key term in this chapter context.`,
          examples: ["Check back in a few minutes or double-click to look up standard definitions when API limits reset."]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDefinition();
  }, [term, context]);

  if (!position || !term) return null;

  return (
    <div 
      className="fixed z-50 bg-white rounded-xl shadow-xl border border-slate-200 w-80 overflow-hidden flex flex-col"
      style={{
        left: `${Math.min(position.x, window.innerWidth - 340)}px`,
        top: `${Math.min(position.y + 10, window.innerHeight - 200)}px`
      }}
    >
      <div className="bg-[#0f172a] text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Book className="w-4 h-4 text-blue-400" />
          <h3 className="font-bold text-sm truncate">{term}</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4 max-h-60 overflow-y-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-6 gap-2">
            <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
            <p className="text-xs text-slate-500">Looking up meaning...</p>
          </div>
        ) : error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : definition ? (
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold mb-2">
              {definition.category}
            </span>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              {definition.definition}
            </p>
            {definition.examples && definition.examples.length > 0 && (
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Examples</p>
                <ul className="list-disc pl-4 space-y-1">
                  {definition.examples.map((ex: string, i: number) => (
                    <li key={i} className="text-xs text-slate-600">{ex}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
