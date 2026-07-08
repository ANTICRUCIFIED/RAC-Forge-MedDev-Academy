const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldSpeechCode = `      // Ensure voices are loaded
      let voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        await new Promise(resolve => {
          window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            resolve(null);
          };
        });
      }
      
      // Try to find a Hindi voice, or an Indian English voice as fallback
      const hiVoice = voices.find(v => 
        v.lang.replace('_', '-').toLowerCase().includes('hi-in') || 
        v.name.toLowerCase().includes('hindi')
      );
      const inVoice = voices.find(v => v.lang.replace('_', '-').toLowerCase().includes('en-in'));
      
      if (hiVoice) {
        utterance.voice = hiVoice;
        utterance.lang = 'hi-IN';
      } else if (inVoice) {
        utterance.voice = inVoice;
        utterance.lang = 'en-IN';
      } else {
        utterance.lang = 'hi-IN'; // Hint to the browser even if we couldn't find a specific voice object
      }
      
      utterance.onend = () => setIsSpeaking(false);
      
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);`;

const newSpeechCode = `      setIsSpeaking(true);
      // Fetch high-quality natural TTS from backend
      const ttsResponse = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: summaryText })
      });
      
      if (!ttsResponse.ok) {
        const errText = await ttsResponse.text();
        throw new Error("Failed to generate speech: " + errText);
      }
      
      const ttsData = await ttsResponse.json();
      if (ttsData.audio) {
        const binary = atob(ttsData.audio);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: 'audio/pcm;rate=24000' });
        
        // Use AudioContext to play PCM data
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const buffer = await audioCtx.decodeAudioData(await blob.arrayBuffer());
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.onended = () => setIsSpeaking(false);
        source.start(0);
      } else {
        setIsSpeaking(false);
        alert("Failed to get audio data.");
      }`;

content = content.replace(oldSpeechCode, newSpeechCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx for TTS");
