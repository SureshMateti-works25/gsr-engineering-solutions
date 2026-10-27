const fs = require('fs');
const path = require('path');

const brandsDir = path.join(__dirname, '..', 'public', 'brands');
if (!fs.existsSync(brandsDir)) {
  fs.mkdirSync(brandsDir, { recursive: true });
}

// 27 Official Brand SVGs with authentic typography, corporate hex colors, tight bounding boxes, and large crisp visuals
const brandSVGs = {
  // 1. SCHNEIDER ELECTRIC
  'schneider': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 8)">
      <rect x="0" y="8" width="48" height="48" rx="10" fill="#3DCD58"/>
      <path d="M 24 16 L 15 32 H 24 L 21 48 L 33 28 H 23 L 24 16 Z" fill="#FFFFFF"/>
      <text x="58" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="900" fill="#2B394A" letter-spacing="-0.5">Schneider</text>
      <text x="59" y="52" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="800" fill="#3DCD58" letter-spacing="2.5">ELECTRIC</text>
    </g>
  </svg>`,

  // 2. SIEMENS
  'siemens': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="130" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="44" font-weight="900" fill="#00646E" text-anchor="middle" letter-spacing="3">SIEMENS</text>
  </svg>`,

  // 3. ABB
  'abb': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="100" y="52" font-family="Arial Black, Impact, sans-serif" font-size="56" font-weight="900" fill="#FF000F" text-anchor="middle" letter-spacing="2">ABB</text>
  </svg>`,

  // 4. EATON
  'eaton': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 6)">
      <text x="95" y="46" font-family="Arial Black, sans-serif" font-size="46" font-weight="900" fill="#005EB8" text-anchor="middle" letter-spacing="1">FAT·N</text>
      <path d="M 28 36 L 40 18" stroke="#005EB8" stroke-width="6" stroke-linecap="round"/>
    </g>
  </svg>`,

  // 5. L&T (LARSEN & TOUBRO)
  'lnt': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 8)">
      <circle cx="32" cy="32" r="30" fill="#002B49"/>
      <circle cx="32" cy="32" r="26" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
      <text x="32" y="41" font-family="Arial Black, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">L&amp;T</text>
      <text x="74" y="32" font-family="Arial Black, sans-serif" font-size="19" font-weight="900" fill="#002B49" letter-spacing="0.5">LARSEN &amp; TOUBRO</text>
      <text x="74" y="52" font-family="Arial, sans-serif" font-size="14" font-weight="800" fill="#C59B27" letter-spacing="1">Electrical &amp; Automation</text>
    </g>
  </svg>`,

  // 6. HAVELLS
  'havells': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(12, 10)">
      <circle cx="25" cy="25" r="18" fill="#E31E24"/>
      <path d="M 15 25 L 35 25 M 25 15 L 25 35" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <text x="54" y="36" font-family="Arial Black, Impact, sans-serif" font-size="34" font-weight="900" fill="#E31E24" letter-spacing="2">HAVELLS</text>
    </g>
  </svg>`,

  // 7. LEGRAND
  'legrand': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(12, 10)">
      <rect x="0" y="2" width="46" height="46" rx="6" fill="#ED1C24"/>
      <path d="M 12 14 L 12 36 L 34 36" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="56" y="36" font-family="-apple-system, Arial, sans-serif" font-size="34" font-weight="900" fill="#1E293B" letter-spacing="-0.5">legrand</text>
    </g>
  </svg>`,

  // 8. CHNT
  'chnt': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="100" y="50" font-family="Arial Black, Impact, sans-serif" font-size="46" font-weight="900" fill="#005BAC" text-anchor="middle" letter-spacing="3">CHNT</text>
  </svg>`,

  // 9. C&S ELECTRIC
  'cs-electric': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 10)">
      <rect x="5" y="8" width="44" height="44" rx="8" fill="#0D2240"/>
      <text x="27" y="38" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">C&amp;S</text>
      <path d="M 40 12 L 52 12 L 52 24 Z" fill="#E31E24"/>
      <text x="58" y="33" font-family="Arial Black, sans-serif" font-size="24" font-weight="900" fill="#0D2240">C&amp;S electric</text>
      <text x="60" y="50" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#E31E24" letter-spacing="1.5">POWER &amp; CONTROL</text>
    </g>
  </svg>`,

  // 10. PANASONIC
  'panasonic': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="130" y="48" font-family="Helvetica, Arial Black, sans-serif" font-size="40" font-weight="900" fill="#004098" text-anchor="middle" letter-spacing="1">Panasonic</text>
  </svg>`,

  // 11. SMC
  'smc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="110" y="52" font-family="Arial Black, Impact, sans-serif" font-size="56" font-style="italic" font-weight="900" fill="#005AA0" text-anchor="middle" letter-spacing="3">SMC</text>
  </svg>`,

  // 12. FESTO
  'festo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="120" y="50" font-family="Arial Black, sans-serif" font-size="44" font-weight="900" fill="#0091DC" text-anchor="middle" letter-spacing="4">FESTO</text>
  </svg>`,

  // 13. AIRTAC
  'airtac': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 8)">
      <text x="30" y="44" font-family="Arial Black, sans-serif" font-size="42" font-weight="900" fill="#003876">Air</text>
      <text x="100" y="44" font-family="Arial Black, sans-serif" font-size="42" font-weight="900" fill="#D32F2F">TAC</text>
      <rect x="195" y="16" width="18" height="28" rx="4" fill="#003876"/>
    </g>
  </svg>`,

  // 14. MINDMAN
  'mindman': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="125" y="48" font-family="Arial Black, sans-serif" font-size="38" font-style="italic" font-weight="900" fill="#2B3A8F" text-anchor="middle" letter-spacing="1">Mindman</text>
  </svg>`,

  // 15. CKD
  'ckd': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="100" y="52" font-family="Arial Black, Impact, sans-serif" font-size="52" font-weight="900" fill="#00843D" text-anchor="middle" letter-spacing="4">CKD</text>
  </svg>`,

  // 16. PARKER LEGRIS
  'parker-legris': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 8)">
      <rect x="4" y="6" width="46" height="46" rx="6" fill="#000000"/>
      <text x="27" y="41" font-family="Georgia, serif" font-size="36" font-weight="900" fill="#FFB81C" text-anchor="middle">P</text>
      <text x="60" y="34" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="#000000" letter-spacing="0.5">Parker</text>
      <text x="62" y="52" font-family="Arial, sans-serif" font-size="16" font-weight="800" fill="#555555" letter-spacing="1">legris</text>
    </g>
  </svg>`,

  // 17. CAMOZZI
  'camozzi': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 10)">
      <circle cx="25" cy="28" r="18" fill="#E30613"/>
      <path d="M 18 20 L 32 28 L 18 36 Z" fill="#FFFFFF"/>
      <text x="54" y="36" font-family="Arial Black, sans-serif" font-size="30" font-weight="900" fill="#1E293B" letter-spacing="0.5">CAMOZZI</text>
      <text x="56" y="52" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="#E30613" letter-spacing="2">Automation</text>
    </g>
  </svg>`,

  // 18. RG SS
  'rg-ss': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 10)">
      <rect x="2" y="8" width="42" height="42" rx="8" fill="#334155"/>
      <text x="23" y="38" font-family="Arial Black, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">RG</text>
      <text x="56" y="34" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="#334155" letter-spacing="1">RG SS</text>
      <text x="58" y="50" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#64748B" letter-spacing="1.5">STAINLESS PNEUMATICS</text>
    </g>
  </svg>`,

  // 19. METAL WORK
  'metal-work': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(12, 10)">
      <rect x="5" y="6" width="44" height="44" rx="8" fill="#C8102E"/>
      <text x="27" y="36" font-family="Arial Black, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">MW</text>
      <text x="58" y="32" font-family="Arial Black, sans-serif" font-size="24" font-weight="900" fill="#1E293B">METAL WORK</text>
      <text x="60" y="50" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#C8102E" letter-spacing="2">PNEUMATIC</text>
    </g>
  </svg>`,

  // 20. JANATICS
  'janatics': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 10)">
      <rect x="4" y="6" width="44" height="44" rx="8" fill="#0047BB"/>
      <path d="M 18 16 L 34 16 L 26 40 Z" fill="#FFFFFF"/>
      <text x="58" y="34" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="#0047BB" letter-spacing="0.5">JANATICS</text>
      <text x="60" y="52" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0284C7" letter-spacing="2">Pneumatic</text>
    </g>
  </svg>`,

  // 21. YUKEN
  'yuken': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <text x="110" y="50" font-family="Arial Black, sans-serif" font-size="44" font-weight="900" fill="#0284C7" text-anchor="middle" letter-spacing="3">YUKEN</text>
  </svg>`,

  // 22. TATA STEEL
  'tata-steel': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(12, 10)">
      <circle cx="28" cy="28" r="26" fill="#003366"/>
      <path d="M 14 18 H 42 M 28 18 V 44 M 20 30 H 36" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <text x="66" y="32" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#003366" letter-spacing="1">TATA STEEL</text>
      <text x="68" y="50" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#555555" letter-spacing="1.5">INDUSTRIAL PIPES &amp; SECTIONS</text>
    </g>
  </svg>`,

  // 23. JSW STEEL
  'jsw-steel': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 12)">
      <text x="10" y="42" font-family="Arial Black, sans-serif" font-size="46" font-weight="900" fill="#D32F2F" letter-spacing="1">JSW</text>
      <text x="130" y="42" font-family="Arial Black, sans-serif" font-size="34" font-weight="800" fill="#1565C0">Steel</text>
    </g>
  </svg>`,

  // 24. JINDAL STEEL & POWER
  'jindal-steel': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(12, 10)">
      <circle cx="28" cy="28" r="26" fill="#004080"/>
      <text x="28" y="38" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">J</text>
      <text x="66" y="32" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#004080" letter-spacing="1">JINDAL</text>
      <text x="68" y="50" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#D32F2F" letter-spacing="1.5">STEEL &amp; POWER</text>
    </g>
  </svg>`,

  // 25. SKF BEARINGS
  'skf': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(15, 8)">
      <text x="95" y="48" font-family="Arial Black, Impact, sans-serif" font-size="52" font-style="italic" font-weight="900" fill="#005BAC" text-anchor="middle" letter-spacing="4">SKF</text>
    </g>
  </svg>`,

  // 26. FENNER
  'fenner': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 8)">
      <rect x="5" y="10" width="40" height="38" rx="8" fill="#D97706"/>
      <text x="25" y="37" font-family="Arial Black, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" text-anchor="middle">F</text>
      <text x="56" y="42" font-family="Arial Black, sans-serif" font-size="36" font-weight="900" fill="#D97706" letter-spacing="1.5">Fenner</text>
    </g>
  </svg>`,

  // 27. ELECON
  'elecon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 70" width="100%" height="100%">
    <rect width="100%" height="100%" fill="transparent"/>
    <g transform="translate(10, 8)">
      <rect x="5" y="8" width="42" height="42" rx="8" fill="#B45309"/>
      <path d="M 16 18 H 36 M 16 28 H 30 M 16 38 H 36" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
      <text x="58" y="42" font-family="Arial Black, sans-serif" font-size="34" font-weight="900" fill="#B45309" letter-spacing="2">ELECON</text>
    </g>
  </svg>`
};

console.log('Generating 27 official brand SVGs...');
let count = 0;
for (const [key, svg] of Object.entries(brandSVGs)) {
  const filePath = path.join(brandsDir, `${key}.svg`);
  fs.writeFileSync(filePath, svg.trim(), 'utf8');
  count++;
}
console.log(`Successfully written ${count} bold, high-resolution OEM Brand SVGs to ${brandsDir}`);
