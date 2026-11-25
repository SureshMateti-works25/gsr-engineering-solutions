import fs from 'fs';
import zlib from 'zlib';

const inputPath = 'public/gsr-logo.png';
const backupPath = 'public/gsr-logo-original.png';

if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(inputPath, backupPath);
  console.log('Backed up original logo to', backupPath);
}

const buf = fs.readFileSync(backupPath);
let idatBuffers = [];
let offset = 8;
let width, height;

while (offset < buf.length) {
  const length = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IHDR') {
    width = buf.readUInt32BE(offset + 8);
    height = buf.readUInt32BE(offset + 12);
  } else if (type === 'IDAT') {
    idatBuffers.push(buf.subarray(offset + 8, offset + 8 + length));
  }
  offset += 12 + length;
}

const raw = zlib.inflateSync(Buffer.concat(idatBuffers));
const bpp = 4;
const stride = 1 + width * bpp;
const uncompressed = Buffer.alloc(width * height * bpp);

for (let y = 0; y < height; y++) {
  const filter = raw[y * stride];
  const rowStart = y * stride + 1;
  const prevRowStart = (y - 1) * width * bpp;
  const currRowStart = y * width * bpp;

  for (let x = 0; x < width * bpp; x++) {
    const rawVal = raw[rowStart + x];
    const a = x >= bpp ? uncompressed[currRowStart + x - bpp] : 0;
    const b = y > 0 ? uncompressed[prevRowStart + x] : 0;
    const c = (x >= bpp && y > 0) ? uncompressed[prevRowStart + x - bpp] : 0;

    let val = rawVal;
    if (filter === 1) val = (rawVal + a) & 0xff;
    else if (filter === 2) val = (rawVal + b) & 0xff;
    else if (filter === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
    else if (filter === 4) {
      const p = a + b - c;
      const pa = Math.abs(p - a);
      const pb = Math.abs(p - b);
      const pc = Math.abs(p - c);
      const pr = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
      val = (rawVal + pr) & 0xff;
    }
    uncompressed[currRowStart + x] = val;
  }
}

// Find content bounding box
let minX = width, maxX = 0, minY = height, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = uncompressed[idx], g = uncompressed[idx+1], b = uncompressed[idx+2], a = uncompressed[idx+3];
    if (a > 20 && !(r > 245 && g > 245 && b > 245)) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log('Bounding box:', { minX, maxX, minY, maxY });

// Add padding of 4px
const pad = 4;
const cropX1 = Math.max(0, minX - pad);
const cropX2 = Math.min(width - 1, maxX + pad);
const cropY1 = Math.max(0, minY - pad);
const cropY2 = Math.min(height - 1, maxY + pad);

const cropWidth = cropX2 - cropX1 + 1;
const cropHeight = cropY2 - cropY1 + 1;

console.log('Cropped dimensions:', cropWidth, 'x', cropHeight);

const croppedRGBA = Buffer.alloc(cropWidth * cropHeight * 4);
for (let y = 0; y < cropHeight; y++) {
  const srcY = cropY1 + y;
  for (let x = 0; x < cropWidth; x++) {
    const srcX = cropX1 + x;
    const srcIdx = (srcY * width + srcX) * 4;
    const dstIdx = (y * cropWidth + x) * 4;
    
    // Copy RGBA
    croppedRGBA[dstIdx] = uncompressed[srcIdx];
    croppedRGBA[dstIdx + 1] = uncompressed[srcIdx + 1];
    croppedRGBA[dstIdx + 2] = uncompressed[srcIdx + 2];
    croppedRGBA[dstIdx + 3] = uncompressed[srcIdx + 3];
  }
}

// Encode PNG
function createPNG(w, h, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    crcTable[n] = c;
  }
  function crc32(b) {
    let c = 0xffffffff;
    for (let i = 0; i < b.length; i++) c = crcTable[(c ^ b[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) | 0;
  }
  function createChunk(type, data) {
    const chunk = Buffer.alloc(12 + data.length);
    chunk.writeUInt32BE(data.length, 0);
    chunk.write(type, 4, 4, 'ascii');
    data.copy(chunk, 8);
    chunk.writeInt32BE(crc32(chunk.subarray(4, 8 + data.length)), 8 + data.length);
    return chunk;
  }

  const stride = 1 + w * 4;
  const rawData = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    rawData[y * stride] = 0;
    rgba.copy(rawData, y * stride + 1, y * w * 4, (y + 1) * w * 4);
  }

  const idat = zlib.deflateSync(rawData);
  return Buffer.concat([
    signature,
    createChunk('IHDR', ihdr),
    createChunk('IDAT', idat),
    createChunk('IEND', Buffer.alloc(0))
  ]);
}

const newPngBuf = createPNG(cropWidth, cropHeight, croppedRGBA);
fs.writeFileSync('public/gsr-logo.png', newPngBuf);
fs.writeFileSync('src/assets/gsr-logo.png', newPngBuf);
console.log('Saved new tightly cropped gsr-logo.png (bytes:', newPngBuf.length, ')');
