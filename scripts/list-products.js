import fs from 'fs';
const content = fs.readFileSync('src/data/products.ts', 'utf8');

// Parse products by regex
const productRegex = /\{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)"[\s\S]*?"imageUrl":\s*"([^"]+)"/g;
let match;
const products = [];
while ((match = productRegex.exec(content)) !== null) {
  products.push({
    id: match[1],
    name: match[2],
    imageUrl: match[3]
  });
}

console.log(`Found ${products.length} products:`);
products.forEach(p => console.log(`${p.id.padEnd(30)} | ${p.name.padEnd(35)} | ${p.imageUrl}`));

