const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldTTSBlock = `      const ttsResponse = await fetch('/api/tts', {
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
        
        // Convert 16-bit PCM to Float32 for AudioBuffer
        const int16 = new Int16Array(bytes.buffer);
        const float32 = new Float32Array(int16.length);
        for (let i = 0; i < int16.length; i++) {
          float32[i] = int16[i] / 32768.0;
        }
        
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const audioBuffer = audioCtx.createBuffer(1, float32.length, 24000);
        audioBuffer.getChannelData(0).set(float32);
        
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.onended = () => setIsSpeaking(false);
        source.start(0);
        
        // Store source in a ref if we want to support stopping, but simple for now
        (window as any).currentAudioSource = source; 
      } else {
        setIsSpeaking(false);
        alert("Failed to get audio data.");
      }`;

const newTTSBlock = `      let usedNativeTTS = false;
      try {
        const ttsResponse = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: summaryText })
        });
        
        if (!ttsResponse.ok) {
          throw new Error("TTS API failed");
        }
        
        const ttsData = await ttsResponse.json();
        if (ttsData.audio) {
          const binary = atob(ttsData.audio);
          const bytes = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
          }
          
          const int16 = new Int16Array(bytes.buffer);
          const float32 = new Float32Array(int16.length);
          for (let i = 0; i < int16.length; i++) {
            float32[i] = int16[i] / 32768.0;
          }
          
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
          const audioBuffer = audioCtx.createBuffer(1, float32.length, 24000);
          audioBuffer.getChannelData(0).set(float32);
          
          const source = audioCtx.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(audioCtx.destination);
          source.onended = () => setIsSpeaking(false);
          source.start(0);
          
          (window as any).currentAudioSource = source; 
        } else {
          throw new Error("No audio data returned");
        }
      } catch (err) {
        console.warn("High-quality TTS failed, falling back to native browser TTS", err);
        const utterance = new SpeechSynthesisUtterance(summaryText);
        // Try to find a Hindi voice
        const voices = window.speechSynthesis.getVoices();
        const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('in'));
        if (hindiVoice) utterance.voice = hindiVoice;
        
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        usedNativeTTS = true;
      }
`;

content = content.replace(oldTTSBlock, newTTSBlock);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched TTS fallback");
