import fs from 'fs';
import path from 'path';

const SRC_DIR = 'd:/workspace/personal/ready/New folder (2)';
const TARGET_DIR = path.resolve('public/products');

const mappings = [
  { src: 'Bearings.jpeg', targets: ['bearings'] },
  { src: 'HMIS and Touch Panels.jpeg', targets: ['hmis-touch-panels'] },
  { src: 'PLCs.jpeg', targets: ['plcs'] },
  { src: 'Remote IO Modules.jpeg', targets: ['remote-io-modules', 'io-modules', 'industrial-io-modules', 'industrial-automation-modules'] },
  { src: 'Servo drives.jpeg', targets: ['servo-drives'] },
  { src: 'Silensers and Mufflers.jpeg', targets: ['silencers-mufflers'] },
  { src: 'SMPs PowerSupplies.jpeg', targets: ['smps-power-supplies'] },
  { src: 'Speed controllers.jpeg', targets: ['speed-controllers'] },
  { src: 'SS Rods and Bars.jpeg', targets: ['ss-rods-bars'] },
];

console.log(`Starting image copying from ${SRC_DIR} to ${TARGET_DIR} ...`);

let count = 0;
for (const item of mappings) {
  const fullSrc = path.join(SRC_DIR, item.src);
  if (!fs.existsSync(fullSrc)) {
    console.error(`ERROR: Source file does not exist: ${fullSrc}`);
    continue;
  }
  const fileBytes = fs.readFileSync(fullSrc);
  const size = fileBytes.length;

  for (const targetBase of item.targets) {
    const pngPath = path.join(TARGET_DIR, `${targetBase}.png`);
    const jpgPath = path.join(TARGET_DIR, `${targetBase}.jpg`);
    const jpegPath = path.join(TARGET_DIR, `${targetBase}.jpeg`);

    fs.writeFileSync(pngPath, fileBytes);
    fs.writeFileSync(jpgPath, fileBytes);
    fs.writeFileSync(jpegPath, fileBytes);

    console.log(`[SUCCESS] Copied ${item.src} (${size} bytes) -> ${targetBase}.png, .jpg, .jpeg`);
    count++;
  }
}

console.log(`Done! Total targets copied: ${count}`);
