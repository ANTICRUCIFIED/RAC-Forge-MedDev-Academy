const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const oldCatch = `    } catch (error) {
      console.error("Error summarizing:", error);
      alert("Failed to summarize chapter. Please try again.");
    } finally {`;

const newCatch = `    } catch (error: any) {
      console.error("Error summarizing:", error);
      const errMsg = String(error.message || error);
      if (errMsg.includes("429") || errMsg.includes("RESOURCE_EXHAUSTED") || errMsg.includes("quota")) {
        alert("API quota exceeded for this model. Please try again later.");
      } else {
        alert("Failed to summarize chapter. Please try again.");
      }
    } finally {`;

content = content.replace(oldCatch, newCatch);
fs.writeFileSync('src/App.tsx', content);
console.log("Patched App.tsx error handling");
