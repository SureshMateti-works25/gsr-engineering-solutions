import React, { useState } from 'react';

interface BrandLogoProps {
  name: string;
  logoUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

const LOCAL_OEM_LOGOS: Record<string, string> = {
  'schneider electric': './brands/schneider.svg',
  'schneider': './brands/schneider.svg',
  'siemens': './brands/siemens.svg',
  'abb': './brands/abb.svg',
  'eaton': './brands/eaton.svg',
  'l&t electrical & automation': './brands/lnt.svg',
  'l&t electrical': './brands/lnt.svg',
  'l&t': './brands/lnt.svg',
  'havells': './brands/havells.svg',
  'legrand': './brands/legrand.svg',
  'chnt': './brands/chnt.svg',
  'c&s electric': './brands/cs-electric.svg',
  'c&s': './brands/cs-electric.svg',
  'panasonic': './brands/panasonic.svg',
  'smc': './brands/smc.svg',
  'festo': './brands/festo.svg',
  'airtac': './brands/airtac.svg',
  'mindman': './brands/mindman.svg',
  'ckd': './brands/ckd.svg',
  'parker legris': './brands/parker-legris.svg',
  'parker': './brands/parker-legris.svg',
  'camozzi': './brands/camozzi.svg',
  'camozzi automation': './brands/camozzi.svg',
  'rg ss': './brands/rg-ss.svg',
  'rgss': './brands/rg-ss.svg',
  'metal work': './brands/metal-work.svg',
  'metal work pneumatic': './brands/metal-work.svg',
  'janatics': './brands/janatics.svg',
  'janatics pneumatic': './brands/janatics.svg',
  'yuken': './brands/yuken.svg',
  'tata steel': './brands/tata-steel.svg',
  'tata': './brands/tata-steel.svg',
  'jsw steel': './brands/jsw-steel.svg',
  'jsw': './brands/jsw-steel.svg',
  'jindal steel & power': './brands/jindal-steel.svg',
  'jindal steel': './brands/jindal-steel.svg',
  'jindal': './brands/jindal-steel.svg',
  'skf bearings': './brands/skf.svg',
  'skf': './brands/skf.svg',
  'fenner': './brands/fenner.svg',
  'elecon': './brands/elecon.svg'
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  name,
  logoUrl,
  size = 'md',
  className = '',
  showText = true,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  // Normalize brand name for matching
  const cleanName = name.toLowerCase().trim();

  // Size styling - generous heights for prominent OEM brand presence
  const sizeClasses = {
    xs: 'h-6 text-[10px]',
    sm: 'h-9 sm:h-10 text-xs',
    md: 'h-14 sm:h-16 text-sm',
    lg: 'h-20 sm:h-24 text-base',
    xl: 'h-28 sm:h-32 text-lg'
  }[size];

  // 1. Direct local original OEM logo check
  const matchedKey = Object.keys(LOCAL_OEM_LOGOS).find(k => cleanName === k || cleanName.includes(k));
  const localLogo = matchedKey ? LOCAL_OEM_LOGOS[matchedKey] : null;

  if (localLogo && !imgFailed) {
    return (
      <div className={`inline-flex items-center justify-center ${sizeClasses} ${className}`}>
        <img
          src={localLogo}
          alt={`${name} Original OEM Logo`}
          onError={() => setImgFailed(true)}
          className="h-full w-auto max-w-full object-contain filter contrast-105 drop-shadow-2xs"
          loading="lazy"
        />
      </div>
    );
  }

  // If an external logoUrl is provided and hasn't failed, attempt to render it
  if (logoUrl && !imgFailed) {
    return (
      <div className={`inline-flex items-center justify-center ${sizeClasses} ${className}`}>
        <img
          src={logoUrl}
          alt={`${name} logo`}
          onError={() => setImgFailed(true)}
          className="h-full w-auto max-w-full object-contain filter contrast-105 drop-shadow-2xs"
          loading="lazy"
        />
      </div>
    );
  }

  // Vector SVG rendering matching exact corporate identities
  const renderVectorLogo = () => {
    // 1. SCHNEIDER ELECTRIC
    if (cleanName.includes('schneider')) {
      return (
        <div className="flex items-center gap-2">
          <svg className="h-7 w-7 shrink-0" viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="16" fill="#3DCD58" />
            <path d="M50 18L32 50H50L45 82L68 44H48L50 18Z" fill="white" />
          </svg>
          {showText && (
            <span className="font-extrabold tracking-tight text-emerald-800 text-sm sm:text-base">
              Schneider <span className="font-light text-slate-700">Electric</span>
            </span>
          )}
        </div>
      );
    }

    // 2. SIEMENS
    if (cleanName.includes('siemens')) {
      return (
        <div className="flex items-center gap-1.5">
          <span className="font-black tracking-widest text-[#00646e] text-lg sm:text-xl font-mono uppercase">
            SIEMENS
          </span>
        </div>
      );
    }

    // 3. ABB
    if (cleanName.includes('abb')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black tracking-tighter text-[#ff000f] text-2xl font-sans italic">
            ABB
          </span>
        </div>
      );
    }

    // 4. TATA STEEL
    if (cleanName.includes('tata')) {
      return (
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6 shrink-0" viewBox="0 0 100 100" fill="#003366">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#003366" strokeWidth="8" />
            <path d="M28 32H72M50 32V75M38 52H62" stroke="#003366" strokeWidth="9" strokeLinecap="round" />
          </svg>
          {showText && (
            <div className="leading-tight">
              <span className="font-black tracking-wider text-[#003366] text-sm block">TATA STEEL</span>
            </div>
          )}
        </div>
      );
    }

    // 5. JSW STEEL
    if (cleanName.includes('jsw')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            <span className="font-black text-[#d32f2f] text-xl tracking-tight">JSW</span>
            <span className="font-bold text-[#1565c0] text-sm ml-1">Steel</span>
          </div>
        </div>
      );
    }

    // 6. JINDAL STEEL
    if (cleanName.includes('jindal')) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#004080] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            J
          </div>
          {showText && (
            <div className="leading-tight">
              <span className="font-black text-[#004080] text-xs sm:text-sm tracking-wide block">JINDAL</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">STEEL & POWER</span>
            </div>
          )}
        </div>
      );
    }

    // 7. L&T (LARSEN & TOUBRO)
    if (cleanName.includes('l&t') || cleanName.includes('larsen')) {
      return (
        <div className="flex items-center gap-2">
          <div className="px-2 py-0.5 bg-[#00509d] rounded text-white font-black text-sm tracking-wider shadow-xs">
            L&T
          </div>
          {showText && (
            <span className="font-bold text-slate-800 text-xs">Electrical & Automation</span>
          )}
        </div>
      );
    }

    // 8. SMC
    if (cleanName === 'smc' || cleanName.includes('smc')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-wider text-[#004b93] text-2xl font-sans">
            SMC
          </span>
        </div>
      );
    }

    // 9. FESTO
    if (cleanName.includes('festo')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-widest text-[#0069b4] text-xl font-mono uppercase">
            FESTO
          </span>
        </div>
      );
    }

    // 10. PARKER LEGRIS
    if (cleanName.includes('parker') || cleanName.includes('legris')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-[#d4af37] font-serif font-black text-sm shadow-xs">
            P
          </div>
          {showText && (
            <div>
              <span className="font-extrabold text-black text-sm tracking-wide">Parker</span>
              <span className="text-xs text-slate-500 font-semibold ml-1">Legris</span>
            </div>
          )}
        </div>
      );
    }

    // 11. EATON
    if (cleanName.includes('eaton')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-wide text-[#005eb8] text-xl">
            FAT•N
          </span>
        </div>
      );
    }

    // 12. HAVELLS
    if (cleanName.includes('havells')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-wider text-[#e31e24] text-lg uppercase font-sans">
            HAVELLS
          </span>
        </div>
      );
    }

    // 13. LEGRAND
    if (cleanName.includes('legrand')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-[#ea1d24] rounded-sm flex items-center justify-center text-white font-bold text-xs">
            ⊞
          </div>
          {showText && (
            <span className="font-bold text-slate-900 text-sm tracking-tight lowercase">
              legrand
            </span>
          )}
        </div>
      );
    }

    // 14. PANASONIC
    if (cleanName.includes('panasonic')) {
      return (
        <div className="flex items-center">
          <span className="font-bold tracking-tight text-[#004098] text-lg font-sans">
            Panasonic
          </span>
        </div>
      );
    }

    // 15. BHEL
    if (cleanName.includes('bhel')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-[#007a3d] border-2 border-amber-400 flex items-center justify-center text-white font-bold text-[10px]">
            ⚙
          </div>
          {showText && (
            <span className="font-black tracking-wider text-[#007a3d] text-base">
              BHEL
            </span>
          )}
        </div>
      );
    }

    // 16. SAIL
    if (cleanName.includes('sail')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded bg-[#005596] flex items-center justify-center text-white font-bold text-xs">
            ⬡
          </div>
          {showText && (
            <span className="font-black tracking-wider text-[#005596] text-base">
              SAIL
            </span>
          )}
        </div>
      );
    }

    // 17. VIRAJ PROFILES
    if (cleanName.includes('viraj')) {
      return (
        <div className="flex items-center gap-1.5">
          <span className="font-black tracking-widest text-[#800020] text-sm sm:text-base">
            VIRAJ
          </span>
          <span className="text-[10px] text-slate-500 font-bold uppercase">PROFILES</span>
        </div>
      );
    }

    // 18. RATNAMANI
    if (cleanName.includes('ratnamani')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black tracking-wider text-[#b30006] text-sm sm:text-base">
            RATNAMANI
          </span>
        </div>
      );
    }

    // 19. MIDHANI
    if (cleanName.includes('midhani')) {
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-[#008080] rounded rotate-45 flex items-center justify-center text-white text-[10px] font-bold">
            M
          </div>
          {showText && (
            <span className="font-black text-[#008080] text-sm tracking-wide">
              MIDHANI
            </span>
          )}
        </div>
      );
    }

    // 20. WELSPUN
    if (cleanName.includes('welspun')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black tracking-wider text-[#e63946] text-sm sm:text-base">
            WELSPUN
          </span>
        </div>
      );
    }

    // 21. KALYANI
    if (cleanName.includes('kalyani')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black tracking-wider text-[#cc0000] text-sm sm:text-base">
            KALYANI
          </span>
        </div>
      );
    }

    // 22. CHNT / CHINT
    if (cleanName.includes('chnt') || cleanName.includes('chint')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-wider text-[#0055b8] text-lg font-sans">
            CHNT
          </span>
        </div>
      );
    }

    // 23. C&S ELECTRIC
    if (cleanName.includes('c&s')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black text-[#0d2c6c] text-sm">C&S</span>
          <span className="font-semibold text-red-600 text-xs">electric</span>
        </div>
      );
    }

    // 24. AIRTAC
    if (cleanName.includes('airtac')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black tracking-tight text-[#003876] text-lg">
            Air<span className="text-[#d32f2f]">TAC</span>
          </span>
        </div>
      );
    }

    // 25. MINDMAN
    if (cleanName.includes('mindman')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-tight text-[#2b3a8f] text-base italic">
            Mindman
          </span>
        </div>
      );
    }

    // 26. CKD
    if (cleanName.includes('ckd')) {
      return (
        <div className="flex items-center">
          <span className="font-black tracking-widest text-[#d90429] text-xl font-mono">
            CKD
          </span>
        </div>
      );
    }

    // 27. AIGNEP / AITREC
    if (cleanName.includes('aignep') || cleanName.includes('aitrec')) {
      return (
        <div className="flex items-center gap-1">
          <span className="font-black text-[#c1121f] text-base tracking-wide">
            Aignep
          </span>
        </div>
      );
    }

    // Default Fallback
    return (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded bg-blue-600 text-white font-black text-xs flex items-center justify-center">
          {name.charAt(0)}
        </div>
        {showText && (
          <span className="font-bold text-slate-800 text-xs sm:text-sm truncate">
            {name}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {renderVectorLogo()}
    </div>
  );
};
