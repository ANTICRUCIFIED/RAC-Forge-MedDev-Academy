const fs = require('fs');

function removeMixedClasses(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/\(Class [A-D]\/[A-D](?:\/[A-D])?\)/g, '');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Removed mixed classes in ${filePath}`);
  }
}

['src/components/Chapter5.tsx', 
 'src/components/Chapter6.tsx', 
 'src/components/Chapter7.tsx',
 'src/components/Chapter8.tsx',
 'src/components/Chapter22.tsx',
 'src/components/Chapter27.tsx'].forEach(removeMixedClasses);

