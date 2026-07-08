const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldCode = `  const handleSpeakSummary = async () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }`;

const newCode = `  const handleSpeakSummary = async () => {
    if (isSpeaking) {
      if ((window as any).currentAudioSource) {
        try { (window as any).currentAudioSource.stop(); } catch(e) {}
      }
      setIsSpeaking(false);
      return;
    }`;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched stop behavior in App.tsx");
