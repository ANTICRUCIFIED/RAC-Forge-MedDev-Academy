const fs = require('fs');

function processFile(file, ruleNum) {
  let content = fs.readFileSync(file, 'utf8');
  // Need to find the node like N7["Think about Rule X (Class Y/Z)"] or N13["Apply Rule X (Class Y/Z)"]
  // And expand it.
}

console.log("ready");
