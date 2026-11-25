import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// pneumatic-fittings: add 'RG SS'
content = content.replace(
  /("id":\s*"pneumatic-fittings"[\s\S]*?"brands":\s*\[)([\s\S]*?)(\])/,
  (match, p1, p2, p3) => p1 + p2.trimEnd() + ',\n      "RG SS"\n    ' + p3
);

// ss-pipe-fittings: add 'RG SS'
content = content.replace(
  /("id":\s*"ss-pipe-fittings"[\s\S]*?"brands":\s*\[)([\s\S]*?)(\])/,
  (match, p1, p2, p3) => p1 + p2.trimEnd() + ',\n      "RG SS"\n    ' + p3
);

// direction-control-valves: add 'Yuken'
content = content.replace(
  /("id":\s*"direction-control-valves"[\s\S]*?"brands":\s*\[)([\s\S]*?)(\])/,
  (match, p1, p2, p3) => p1 + p2.trimEnd() + ',\n      "Yuken"\n    ' + p3
);

// solenoid-valves: add 'Yuken', 'CKD'
content = content.replace(
  /("id":\s*"solenoid-valves"[\s\S]*?"brands":\s*\[)([\s\S]*?)(\])/,
  (match, p1, p2, p3) => p1 + p2.trimEnd() + ',\n      "Yuken",\n      "CKD"\n    ' + p3
);

// air-filter-regulators: add 'CKD', 'Camozzi Automation'
content = content.replace(
  /("id":\s*"air-filter-regulators"[\s\S]*?"brands":\s*\[)([\s\S]*?)(\])/,
  (match, p1, p2, p3) => p1 + p2.trimEnd() + ',\n      "CKD",\n      "Camozzi Automation"\n    ' + p3
);

// pneumatic-cylinders: add 'Camozzi Automation'
content = content.replace(
  /("id":\s*"pneumatic-cylinders"[\s\S]*?"brands":\s*\[)([\s\S]*?)(\])/,
  (match, p1, p2, p3) => p1 + p2.trimEnd() + ',\n      "Camozzi Automation"\n    ' + p3
);

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Successfully enriched brand associations in products.ts');
