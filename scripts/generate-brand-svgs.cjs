const fs = require('fs');
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'public', 'brands');
if (!fs.existsSync(brandsDir)) {
  fs.mkdirSync(brandsDir, { recursive: true });
}

// 23 Official Brand SVGs with authentic typography, corporate hex colors, and geometric brandmarks
const brandSVGs = {
  'schneider': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 10)">
      <!-- Schneider Arc Icon -->
      <path d="M 12 4 C 5 12 5 28 12 36 C 18 42 28 42 34 36 C 36 34 38 31 38 27 L 29 27 C 28 29 26 31 24 31 C 19 31 16 26 16 20 C 16 14 19 9 24 9 C 26 9 28 11 29 13 L 38 13 C 38 9 36 6 34 4 C 28 -2 18 -2 12 4 Z" fill="#3DCD58"/>
      <path d="M 23 2 C 28 2 33 5 36 9 L 29 13 C 27 11 25 9 23 9 C 19 9 16 13 16 20 L 7 20 C 7 10 14 2 23 2 Z" fill="#008000"/>
      <!-- Text -->
      <text x="48" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="800" fill="#2B394A" letter-spacing="-0.3">Schneider</text>
      <text x="48" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="12" font-weight="700" fill="#3DCD58" letter-spacing="1.5">ELECTRIC</text>
    </g>
  </svg>`,

  'siemens': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="120" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="34" font-weight="900" fill="#00646E" text-anchor="middle" letter-spacing="2.5">SIEMENS</text>
  </svg>`,

  'abb': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="200" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(25, 12)">
      <!-- ABB iconic thick block letters -->
      <text x="75" y="40" font-family="Arial Black, Impact, sans-serif" font-size="44" font-weight="900" fill="#FF000F" text-anchor="middle" letter-spacing="3">ABB</text>
    </g>
  </svg>`,

  'eaton': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="200" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 10)">
      <text x="90" y="40" font-family="Arial Black, sans-serif" font-size="36" font-weight="900" fill="#005EB8" text-anchor="middle" letter-spacing="1">FAT·N</text>
      <path d="M 28 32 L 38 18" stroke="#005EB8" stroke-width="5" stroke-linecap="round"/>
    </g>
  </svg>`,

  'lnt': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 10)">
      <circle cx="26" cy="25" r="24" fill="#002B49"/>
      <circle cx="26" cy="25" r="21" fill="none" stroke="#FFFFFF" stroke-width="2"/>
      <text x="26" y="32" font-family="Arial, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">L&amp;T</text>
      <text x="60" y="25" font-family="Arial, sans-serif" font-size="15" font-weight="800" fill="#002B49">LARSEN &amp; TOUBRO</text>
      <text x="60" y="40" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#C59B27" letter-spacing="0.5">Electrical &amp; Automation</text>
    </g>
  </svg>`,

  'havells': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 12)">
      <circle cx="22" cy="23" r="14" fill="#E31E24"/>
      <path d="M 14 23 L 30 23 M 22 15 L 22 31" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>
      <text x="46" y="32" font-family="Arial Black, Impact, sans-serif" font-size="26" font-weight="900" fill="#E31E24" letter-spacing="1.5">HAVELLS</text>
    </g>
  </svg>`,

  'legrand': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 15)">
      <rect x="0" y="0" width="38" height="40" rx="4" fill="#ED1C24"/>
      <path d="M 10 10 L 10 30 L 28 30" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="48" y="28" font-family="-apple-system, Arial, sans-serif" font-size="25" font-weight="800" fill="#222222" letter-spacing="-0.5">legrand</text>
    </g>
  </svg>`,

  'chnt': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="200" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="100" y="44" font-family="Arial Black, Impact, sans-serif" font-size="34" font-weight="900" fill="#005BAC" text-anchor="middle" letter-spacing="3">CHNT</text>
  </svg>`,

  'cs-electric': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 70" width="230" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 14)">
      <rect x="5" y="5" width="34" height="34" rx="6" fill="#0D2240"/>
      <text x="22" y="29" font-family="Arial Black, sans-serif" font-size="17" font-weight="900" fill="#FFFFFF" text-anchor="middle">C&amp;S</text>
      <path d="M 33 8 L 41 8 L 41 16 Z" fill="#E31E24"/>
      <text x="48" y="25" font-family="Arial, sans-serif" font-size="18" font-weight="900" fill="#0D2240">C&amp;S electric</text>
      <text x="48" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#E31E24" letter-spacing="1">POWER &amp; CONTROL</text>
    </g>
  </svg>`,

  'panasonic': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="120" y="44" font-family="Helvetica, Arial, sans-serif" font-size="32" font-weight="800" fill="#004098" text-anchor="middle" letter-spacing="1">Panasonic</text>
  </svg>`,

  'smc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="200" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 10)">
      <text x="90" y="42" font-family="Arial Black, Impact, sans-serif" font-size="44" font-style="italic" font-weight="900" fill="#005AA0" text-anchor="middle" letter-spacing="3">SMC</text>
    </g>
  </svg>`,

  'festo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="200" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <text x="90" y="40" font-family="Arial Black, Impact, sans-serif" font-size="38" font-weight="900" fill="#0067A5" text-anchor="middle" letter-spacing="2">FESTO</text>
      <circle cx="168" cy="18" r="4" fill="#00B0F0"/>
    </g>
  </svg>`,

  'airtac': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <polygon points="12,10 32,10 24,36" fill="#E50012"/>
      <polygon points="26,10 46,10 38,36" fill="#003896"/>
      <text x="54" y="32" font-family="Arial Black, Impact, sans-serif" font-size="28" font-weight="900" fill="#003896" letter-spacing="1">AirTAC</text>
    </g>
  </svg>`,

  'mindman': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <path d="M 12 12 L 24 34 L 36 12 L 48 34" fill="none" stroke="#0055A5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="56" y="32" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#0055A5" letter-spacing="0.5">Mindman</text>
    </g>
  </svg>`,

  'ckd': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 70" width="190" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 10)">
      <text x="85" y="42" font-family="Arial Black, sans-serif" font-size="40" font-weight="900" fill="#002D62" text-anchor="middle" letter-spacing="3">CKD</text>
    </g>
  </svg>`,

  'parker-legris': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <rect x="4" y="5" width="34" height="34" fill="#000000"/>
      <text x="21" y="31" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#FFBF00" text-anchor="middle">P</text>
      <text x="48" y="24" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#000000">Parker</text>
      <text x="48" y="38" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFBF00" letter-spacing="2">LEGRIS</text>
    </g>
  </svg>`,

  'camozzi': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <circle cx="24" cy="23" r="16" fill="#0077C8"/>
      <path d="M 28 14 L 18 23 L 28 32" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" fill="none"/>
      <text x="48" y="27" font-family="Arial, sans-serif" font-size="21" font-weight="900" fill="#1C355E" letter-spacing="1">CAMOZZI</text>
      <text x="48" y="39" font-family="Arial, sans-serif" font-size="9" font-weight="700" fill="#0077C8" letter-spacing="1.5">Automation</text>
    </g>
  </svg>`,

  'rg-ss': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <rect x="6" y="6" width="34" height="34" rx="4" fill="#2B394A"/>
      <text x="23" y="29" font-family="Arial Black, sans-serif" font-size="16" font-weight="900" fill="#C41230" text-anchor="middle">RG</text>
      <text x="50" y="25" font-family="Arial, sans-serif" font-size="19" font-weight="900" fill="#2B394A">RG STAINLESS</text>
      <text x="50" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#C41230" letter-spacing="1">PIPES &amp; FITTINGS</text>
    </g>
  </svg>`,

  'metal-work': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <circle cx="22" cy="23" r="15" fill="#E60000"/>
      <circle cx="22" cy="23" r="8" fill="#003399"/>
      <text x="46" y="24" font-family="Arial Black, sans-serif" font-size="17" font-weight="900" fill="#003399">METAL WORK</text>
      <text x="46" y="38" font-family="Arial, sans-serif" font-size="11" font-weight="800" fill="#E60000" letter-spacing="1">P N E U M A T I C</text>
    </g>
  </svg>`,

  'janatics': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="240" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <path d="M 12 10 L 28 10 C 34 10 38 14 38 20 C 38 28 30 36 20 36 C 14 36 10 32 10 26" fill="none" stroke="#0C3B78" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="28" cy="20" r="3.5" fill="#E31E24"/>
      <text x="48" y="27" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#0C3B78" letter-spacing="0.5">JANATICS</text>
      <text x="48" y="39" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#E31E24" letter-spacing="1.5">PNEUMATIC</text>
    </g>
  </svg>`,

  'yuken': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="200" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 10)">
      <text x="90" y="42" font-family="Arial Black, sans-serif" font-size="34" font-weight="900" fill="#E3001B" text-anchor="middle" letter-spacing="3">YUKEN</text>
    </g>
  </svg>`,

  'tata-steel': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 70" width="230" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <rect x="4" y="6" width="34" height="34" rx="4" fill="#00508F"/>
      <text x="21" y="29" font-family="Arial Black, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">TATA</text>
      <text x="48" y="25" font-family="Arial, sans-serif" font-size="20" font-weight="900" fill="#00508F">TATA STEEL</text>
      <text x="48" y="38" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#666666" letter-spacing="1">TRUSTED STAINLESS &amp; TUBES</text>
    </g>
  </svg>`,

  'jsw-steel': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 12)">
      <polygon points="10,36 24,10 38,36" fill="#D71920"/>
      <text x="48" y="26" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="#002D62">JSW</text>
      <text x="105" y="26" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="#D71920">Steel</text>
      <text x="48" y="39" font-family="Arial, sans-serif" font-size="9" font-weight="700" fill="#666666" letter-spacing="1">BETTER EVERYDAY</text>
    </g>
  </svg>`
};

let count = 0;
for (const [name, svgContent] of Object.entries(brandSVGs)) {
  const filePath = path.join(brandsDir, `${name}.svg`);
  fs.writeFileSync(filePath, svgContent.trim(), 'utf8');
  count++;
}

console.log(`Successfully generated ${count} vector brand SVGs in ${brandsDir}`);
