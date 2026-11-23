import fs from 'fs';

const productsFile = 'src/data/products.ts';
let content = fs.readFileSync(productsFile, 'utf8');

const updatedBases = [
  'air-preparation-units',
  'frl-units',
  'fuses-fuse-holders',
  'hose-pipes-clamps',
  'industrial-fasteners',
  'industrial-valves',
  'mcb-rccb-elcb',
  'mccb',
  'photoelectric-sensors',
  'pneumatic-actuators',
  'pneumatic-fittings',
  'pressure-sensors',
  'proximity-sensors',
  'pu-tubes',
  'push-buttons-indicators',
  'rubber-ptfe-gaskets',
  'solenoid-valves',
  'switchgear-panels',
  'temperature-sensors',
  'terminal-blocks-connectors',
  'u-bolts-clamps',
  'vfd-ac-drives',
  'cable-glands-accessories',
  'lugs-terminals',
  'power-contactors',
  'ss-sheets-plates',
  'vcb',
  'acb',
  'vcb-acb'
];

const VERSION = '20261124-v2';

let replacedCount = 0;
for (const base of updatedBases) {
  // Regex to match "./products/<base>.png..." or "./products/<base>.jpg..."
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

// Also update src/data/offers.ts
const offersFile = 'src/data/offers.ts';
if (fs.existsSync(offersFile)) {
  let offersContent = fs.readFileSync(offersFile, 'utf8');
  for (const base of updatedBases) {
    const reg = new RegExp(`\"imageUrl\":\\s*\"\\./products/${base}\\.(png|jpg|jpeg)(\\?[^\"]*)?\"`, 'g');
    if (reg.test(offersContent)) {
      offersContent = offersContent.replace(reg, `"imageUrl": "./products/${base}.png?v=${VERSION}"`);
      console.log(`Updated offers imageUrl for: ${base}`);
    }
  }
  fs.writeFileSync(offersFile, offersContent, 'utf8');
}
