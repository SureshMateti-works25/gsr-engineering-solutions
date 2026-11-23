import fs from 'fs';
import path from 'path';

const READY_DIR = 'd:/workspace/personal/ready';
const NEW_FOLDER_DIR = path.join(READY_DIR, 'New folder');
const TARGET_DIR = path.resolve('public/products');

// Mapping from source file (relative to NEW_FOLDER_DIR or READY_DIR) to target base names
const mappings = [
  // From New folder (21 items)
  { src: path.join(NEW_FOLDER_DIR, 'Air preparation units.jpeg'), targets: ['air-preparation-units', 'frl-units'] },
  { src: path.join(NEW_FOLDER_DIR, 'Fuses and Fuse holders.jpeg'), targets: ['fuses-fuse-holders'] },
  { src: path.join(NEW_FOLDER_DIR, 'Hose pipes and clamps.jpeg'), targets: ['hose-pipes-clamps'] },
  { src: path.join(NEW_FOLDER_DIR, 'Industrial fastners(bolts and nuts).jpeg'), targets: ['industrial-fasteners'] },
  { src: path.join(NEW_FOLDER_DIR, 'Industrial valves.jpeg'), targets: ['industrial-valves'] },
  { src: path.join(NEW_FOLDER_DIR, 'MCB_RCCB_ELCB.jpeg'), targets: ['mcb-rccb-elcb'] },
  { src: path.join(NEW_FOLDER_DIR, 'MCCB.jpeg'), targets: ['mccb'] },
  { src: path.join(NEW_FOLDER_DIR, 'Photo electric sensors.jpeg'), targets: ['photoelectric-sensors'] },
  { src: path.join(NEW_FOLDER_DIR, 'pneumatic actuators.jpeg'), targets: ['pneumatic-actuators'] },
  { src: path.join(NEW_FOLDER_DIR, 'pnuematic fittings.jpeg'), targets: ['pneumatic-fittings'] },
  { src: path.join(NEW_FOLDER_DIR, 'Pressure sensors.jpeg'), targets: ['pressure-sensors'] },
  { src: path.join(NEW_FOLDER_DIR, 'Proximity sensors.jpeg'), targets: ['proximity-sensors'] },
  { src: path.join(NEW_FOLDER_DIR, 'PU Tubes.jpeg'), targets: ['pu-tubes'] },
  { src: path.join(NEW_FOLDER_DIR, 'Push buttons and indicators.jpeg'), targets: ['push-buttons-indicators'] },
  { src: path.join(NEW_FOLDER_DIR, 'Rubber PTFE Gaskets.jpeg'), targets: ['rubber-ptfe-gaskets'] },
  { src: path.join(NEW_FOLDER_DIR, 'Solenoid valves.jpeg'), targets: ['solenoid-valves'] },
  { src: path.join(NEW_FOLDER_DIR, 'Switchgear and panels.jpeg'), targets: ['switchgear-panels'] },
  { src: path.join(NEW_FOLDER_DIR, 'Temparature sensors.jpeg'), targets: ['temperature-sensors'] },
  { src: path.join(NEW_FOLDER_DIR, 'Terminal blocks and connectors.jpeg'), targets: ['terminal-blocks-connectors'] },
  { src: path.join(NEW_FOLDER_DIR, 'U Bolts and clamps.jpeg'), targets: ['u-bolts-clamps'] },
  { src: path.join(NEW_FOLDER_DIR, 'VFD AC Drives.jpeg'), targets: ['vfd-ac-drives'] },

  // From ready root folder (5 items)
  { src: path.join(READY_DIR, 'Cable glands and accesories.jpeg'), targets: ['cable-glands-accessories'] },
  { src: path.join(READY_DIR, 'Lugs and Terminals.jpeg'), targets: ['lugs-terminals'] },
  { src: path.join(READY_DIR, 'Power contractors.jpeg'), targets: ['power-contactors'] },
  { src: path.join(READY_DIR, 'Steel plates.jpeg'), targets: ['ss-sheets-plates'] },
  { src: path.join(READY_DIR, 'vaccum_air circuit breaker.jpeg'), targets: ['vcb', 'acb', 'vcb-acb'] },
];

console.log(`Starting image copying to ${TARGET_DIR} ...`);

let count = 0;
for (const item of mappings) {
  if (!fs.existsSync(item.src)) {
    console.error(`ERROR: Source file does not exist: ${item.src}`);
    continue;
  }
  const fileBytes = fs.readFileSync(item.src);
  const size = fileBytes.length;

  for (const targetBase of item.targets) {
    // Write both .png and .jpg to guarantee matching any cached URL format
    const pngPath = path.join(TARGET_DIR, `${targetBase}.png`);
    const jpgPath = path.join(TARGET_DIR, `${targetBase}.jpg`);
    const jpegPath = path.join(TARGET_DIR, `${targetBase}.jpeg`);

    fs.writeFileSync(pngPath, fileBytes);
    fs.writeFileSync(jpgPath, fileBytes);
    fs.writeFileSync(jpegPath, fileBytes);

    console.log(`[SUCCESS] Copied ${path.basename(item.src)} (${size} bytes) -> ${targetBase}.png, .jpg, .jpeg`);
    count++;
  }
}

console.log(`Done! Total targets copied: ${count}`);
