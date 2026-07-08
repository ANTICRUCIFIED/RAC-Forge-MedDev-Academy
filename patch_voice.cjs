const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldVoiceCode = `      const voices = window.speechSynthesis.getVoices();
      const hiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('hi-IN'));
      if (hiVoice) utterance.voice = hiVoice;`;

const newVoiceCode = `      // Ensure voices are loaded
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
      }`;

content = content.replace(oldVoiceCode, newVoiceCode);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched voice selection in App.tsx");
