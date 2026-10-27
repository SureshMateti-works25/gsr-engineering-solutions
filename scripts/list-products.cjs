const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');
const re = /"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)"/g;
let m;
let count = 0;
while ((m = re.exec(content)) !== null) {
  count++;
  console.log(`${count.toString().padStart(2, '0')}. ${m[1].padEnd(28)} | ${m[3].padEnd(23)} | ${m[2]}`);
}
console.log(`Total: ${count} products.`);
