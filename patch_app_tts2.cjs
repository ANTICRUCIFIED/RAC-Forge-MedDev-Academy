const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldCode = `      const ttsData = await ttsResponse.json();
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

const newCode = `      const ttsData = await ttsResponse.json();
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

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx with direct PCM decoding");
