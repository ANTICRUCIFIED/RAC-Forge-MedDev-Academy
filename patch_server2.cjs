const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const oldPromptStr = `const prompt = \`Summarize the following chapter content in Hinglish (a mix of Hindi and English). Keep it conversational, like a teacher explaining to a student. Use English only for complex technical or regulatory terms, and Hindi for the conversational connecting parts. The summary should be concise (around 3-4 sentences) so it can be easily spoken out loud. Content: "\\${text.substring(0, 5000)}"\`;`;

const newPromptStr = `const prompt = \`Act as an expert lecturer or trainer. Deliver a short, engaging lecture (about 4-6 sentences) based on the following chapter notes. Do NOT just read the text. Instead, explain the core concepts naturally in Hinglish (a conversational mix of Hindi and English). Use English for complex technical or regulatory terms, and Hindi for the conversational and explanatory parts. Speak directly to the learner as if you are training them in a classroom. Keep it concise so it can be easily spoken out loud. Chapter content: "\\${text.substring(0, 5000)}"\`;`;

content = content.replace(oldPromptStr, newPromptStr);
fs.writeFileSync('server.ts', content);
console.log("Patched server.ts with new prompt");
