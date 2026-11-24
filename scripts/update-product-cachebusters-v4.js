import fs from 'fs';

const productsFile = 'src/data/products.ts';
let content = fs.readFileSync(productsFile, 'utf8');

const updatedBases = [
  'bearings',
  'hmis-touch-panels',
  'plcs',
  'remote-io-modules',
  'io-modules',
  'industrial-io-modules',
  'industrial-automation-modules',
  'servo-drives',
  'silencers-mufflers',
  'smps-power-supplies',
  'speed-controllers',
  'ss-rods-bars'
];

const VERSION = '20261124-v4';

let replacedCount = 0;
for (const base of updatedBases) {
  const reg = new RegExp(`\"imageUrl\":\\s*\"\\./products/${base}\\.(png|jpg|jpeg)(\\?[^\"]*)?\"`, 'g');
  if (reg.test(content)) {
    content = content.replace(reg, `"imageUrl": "./products/${base}.png?v=${VERSION}"`);
    console.log(`Updated imageUrl for: ${base}`);
    replacedCount++;
  } else {
    console.log(`Notice: did not match imageUrl for ${base}`);
  }
}

fs.writeFileSync(productsFile, content, 'utf8');
console.log(`Successfully updated ${replacedCount} product images in ${productsFile}`);
