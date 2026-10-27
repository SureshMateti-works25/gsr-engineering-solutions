import React, { useState } from 'react';
import { 
  Award, 
  Sparkles,
  Cog,
  Zap,
  Wind
} from 'lucide-react';
import { brandPartnersData } from '../data/brands';
import { BrandLogo } from './BrandLogo';

interface BrandShowcaseProps {
  onSelectBrandForSearch: (brandName: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onSelectBrandForSearch }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'mechanical' | 'electrical' | 'pneumatics'>('all');

  const filteredBrands = brandPartnersData.filter(brand => {
    if (filterCategory === 'all') return true;
    return brand.category === filterCategory;
  });

  const featuredMarqueeBrands = [
    'Tata Steel',
    'Schneider Electric',
    'Siemens',
    'ABB',
    'SMC',
    'FESTO',
    'JSW Steel',
    'L&T Electrical & Automation',
    'Parker Legris',
    'Havells',
    'Eaton',
    'BHEL',
    'AirTAC'
  ];

  return (
    <section id="brands" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            Authorized & Trusted OEM Brand Sourcing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Partnered with Industry-Leading Global Brands
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Procured directly from premier metal manufacturers, electrical switchgear titans, and world-class pneumatic innovators with certified manufacturer test reports.
          </p>
        </div>

        {/* Official OEM Partners Banner Strips from Master Poster */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-600" />
              Electrical & Automation OEM Brand Lineup
            </div>
            <div className="w-full bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-center">
              <img 
                src="./brands/banner-electrical-partners.png" 
                alt="Electrical OEM Partners: Schneider, Siemens, ABB, Eaton, L&T, Havells, Legrand, CHNT, C&S, Panasonic" 
                className="max-h-32 sm:max-h-40 w-auto object-contain drop-shadow-xs"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-3 text-center font-medium">
              Schneider Electric • Siemens • ABB • Eaton • L&T • Havells • Legrand • CHNT • C&S • Panasonic
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-between">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-3 flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-cyan-600" />
              Pneumatics & Fluid Power OEM Brand Lineup
            </div>
            <div className="w-full bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-center">
              <img 
                src="./brands/banner-pneumatics-partners.png" 
                alt="Pneumatics OEM Partners: SMC, FESTO, AirTAC, Mindman, CKD, Parker, Camozzi, RG SS, Metal Work, Janatics, Yuken" 
                className="max-h-32 sm:max-h-40 w-auto object-contain drop-shadow-xs"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-3 text-center font-medium">
              SMC • FESTO • AirTAC • Mindman • CKD • Parker Legris • Camozzi • RG SS • Metal Work • Janatics • Yuken
            </p>
          </div>
        </div>

        {/* Featured Brand Logo Strip / Wall */}
        <div className="mb-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center">
            Prominent Industrial OEM Partner Portfolio
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {featuredMarqueeBrands.map((bName) => (
              <button
                key={bName}
                onClick={() => onSelectBrandForSearch(bName)}
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-500 shadow-2xs hover:shadow-md transition-all hover:scale-105 flex items-center justify-center min-w-[130px] sm:min-w-[160px]"
                title={`Filter products by ${bName}`}
              >
                <BrandLogo name={bName} size="md" showText={true} />
              </button>
            ))}
          </div>
        </div>

        {/* Brand Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filterCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            All Brands ({brandPartnersData.length})
          </button>
          <button
            onClick={() => setFilterCategory('mechanical')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filterCategory === 'mechanical'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Cog className="w-3.5 h-3.5" />
            <span>Steel & Mechanical ({brandPartnersData.filter(b => b.category === 'mechanical').length})</span>
          </button>
          <button
            onClick={() => setFilterCategory('electrical')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filterCategory === 'electrical'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Electrical & Switchgear ({brandPartnersData.filter(b => b.category === 'electrical').length})</span>
          </button>
          <button
            onClick={() => setFilterCategory('pneumatics')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filterCategory === 'pneumatics'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Pneumatics OEM ({brandPartnersData.filter(b => b.category === 'pneumatics').length})</span>
          </button>
        </div>

        {/* Brands Grid with Real Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredBrands.map((brand, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Brand Logo Container */}
                <div className="w-full h-24 sm:h-28 bg-white rounded-2xl border-2 border-slate-200/90 p-3 sm:p-4 flex items-center justify-center mb-4 shadow-2xs group-hover:border-blue-500 group-hover:shadow-md transition-all">
                  <BrandLogo 
                    name={brand.name} 
                    logoUrl={brand.logoUrl} 
                    size="lg" 
                    showText={true} 
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    brand.category === 'mechanical' ? 'bg-amber-100 text-amber-800' :
                    brand.category === 'electrical' ? 'bg-blue-100 text-blue-800' :
                    'bg-emerald-100 text-emerald-800'
                  }`}>
                    {brand.category}
                  </span>
                  {brand.popular && (
                    <span className="text-[10px] text-amber-600 font-bold flex items-center gap-0.5">
                      ★ Top Tier
                    </span>
                  )}
                </div>

                <div className="font-extrabold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </div>

                <div className="text-xs text-blue-600 font-semibold mt-0.5">
                  {brand.type}
                </div>

                {brand.description && (
                  <p className="mt-2 text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {brand.description}
                  </p>
                )}
              </div>

              <button
                onClick={() => onSelectBrandForSearch(brand.name)}
                className="mt-4 pt-2.5 border-t border-slate-200 text-[11px] font-bold text-slate-700 group-hover:text-blue-600 flex items-center justify-between transition-colors"
              >
                <span>View Products</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Quality Banner Under Brands */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-blue-600 text-white shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base">Looking for a specific OEM brand part number?</div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Send us your Bill of Materials (BOM) or manufacturer part code for instant quotation and lead-time confirmation.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/918712444439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20have%20a%20BOM%20/%20list%20of%20OEM%20part%20numbers%20I%20would%20like%20to%20get%20quoted."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0"
          >
            Submit OEM BOM List
          </a>
        </div>

      </div>
    </section>
  );
};
