import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Cog, 
  PhoneCall, 
  MessageCircle,
  Search,
  FileText,
  Eye,
  Cpu,
  Wind
} from 'lucide-react';
import type { ProductCategory } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onSelectCategory: (catId: ProductCategory) => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenFlyer?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSearchChange, 
  searchQuery, 
  onSelectCategory,
  onNavigateToSection,
  onOpenFlyer
}) => {
  // 4 exact divisions from official GSR catalogue poster (62 products)
  const quickCategories = [
    { 
      id: 'mechanical-items' as ProductCategory, 
      label: 'Mechanical Items', 
      sub: 'SS & MS Pipes, Flanges, Valves, Fasteners, Tools, Bearings',
      icon: Cog, 
      bg: 'bg-amber-50 text-amber-900 border-amber-300 hover:border-amber-500 hover:shadow-amber-500/20',
      iconBg: 'bg-amber-500 text-white',
      badge: '18 Products'
    },
    { 
      id: 'electrical-items' as ProductCategory, 
      label: 'Electrical Items', 
      sub: 'MCCB, MCB, ACB, Contactors, Cables, Panel Enclosures',
      icon: Zap, 
      bg: 'bg-blue-50 text-blue-900 border-blue-300 hover:border-blue-500 hover:shadow-blue-500/20',
      iconBg: 'bg-blue-600 text-white',
      badge: '18 Products'
    },
    { 
      id: 'automation-electronics' as ProductCategory, 
      label: 'Automation & Electronics', 
      sub: 'Sensors, Drives, PLC, HMI, VFD, Encoders, SMPS',
      icon: Cpu, 
      bg: 'bg-purple-50 text-purple-900 border-purple-300 hover:border-purple-500 hover:shadow-purple-500/20',
      iconBg: 'bg-purple-600 text-white',
      badge: '15 Products'
    },
    { 
      id: 'pneumatics-items' as ProductCategory, 
      label: 'Pneumatics Items (OEM)', 
      sub: 'Cylinders, FRL, Solenoid Valves, Push-In Fittings, PU Tubing',
      icon: Wind, 
      bg: 'bg-cyan-50 text-cyan-900 border-cyan-300 hover:border-cyan-500 hover:shadow-cyan-500/20',
      iconBg: 'bg-cyan-600 text-white',
      badge: '11 Products'
    }
  ];

  const topBrandLogos = [
    'Schneider Electric',
    'Siemens',
    'ABB',
    'Eaton',
    'L&T Electrical & Automation',
    'Havells',
    'SMC',
    'FESTO',
    'AirTAC',
    'Parker Legris',
    'Legrand',
    'CKD'
  ];

  const handleQuickCategory = (catId: ProductCategory) => {
    onSelectCategory(catId);
    window.location.hash = `#/category/${catId}`;
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateToSection('catalog');
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 sm:pb-20 lg:pt-12 lg:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200">
      
      {/* Decorative Soft Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-amber-300/25 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Official GSR Logo & Verified Banner Header */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 mb-3 max-w-xs transition-transform hover:scale-105 duration-300">
            <img 
              src="./gsr-logo.png" 
              alt="GSR Engineering Solutions Official Logo" 
              className="h-14 sm:h-16 w-auto object-contain mx-auto"
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0a2569] text-white text-xs font-black tracking-wider uppercase shadow-xs">
              Building Trust, Delivering Quality
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs">
              Proprietor: <span className="text-[#0a2569]">G Sandeep Kumar</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              GSTIN: 36CTUPG6618J11Z9
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18]">
            Complete Industrial Supplies & Engineering Solutions for{' '}
            <span className="bg-gradient-to-r from-[#0a2569] via-blue-700 to-amber-600 bg-clip-text text-transparent">
              Mechanical, Electrical & Process Industries
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            One-stop supplier of SS & Pharma materials, electrical switchgear, mechanical power transmission, industrial pumps & tools with guaranteed Mill Test Certificates (MTC) across <strong className="text-slate-900 font-bold">Telangana & Andhra Pradesh</strong>.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-lg shadow-blue-500/5">
            <div className="absolute left-4 pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-[#0a2569]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 62 industrial items: SS Pipes, MCCB, PLC, VFD, Solenoid Valves, SMC Cylinders..."
              className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a2569] focus:border-transparent text-sm sm:text-base shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between mt-2.5 px-3 text-xs text-slate-500">
            <span>Popular: <span className="text-slate-800 font-medium">SS Pipes, MCCB Breakers, PLC / HMI, VFD Drives, Pneumatic Cylinders</span></span>
            <span className="hidden sm:inline text-emerald-700 font-bold">✓ 62 Genuine Products • 21 OEM Brands</span>
          </div>
        </div>

        {/* 4 Bright, Colorful Category Pillars Matching Poster */}
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center mb-3">
            Explore 62 Products Across 4 Official Divisions
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-6xl mx-auto">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleQuickCategory(cat.id)}
                  className={`flex flex-col justify-between p-4 rounded-2xl ${cat.bg} border-2 hover:scale-[1.03] active:scale-[0.98] transition-all text-left shadow-sm group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl ${cat.iconBg} flex items-center justify-center shadow-xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/80 border border-black/5 text-slate-800">
                        {cat.badge}
                      </span>
                    </div>
                    <div className="font-black text-sm text-slate-900 group-hover:text-[#0a2569] transition-colors">
                      {cat.label}
                    </div>
                    <div className="text-[11px] text-slate-600 mt-1 line-clamp-2 leading-snug font-medium">
                      {cat.sub}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-[11px] font-bold text-slate-800 group-hover:text-blue-800">
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action CTAs + View Official Flyer */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {/* View Official Flyer Button */}
          {onOpenFlyer && (
            <button
              onClick={onOpenFlyer}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-[#0a2569] bg-white hover:bg-blue-50 border-2 border-[#0a2569] shadow-md hover:shadow-lg transition-all scale-100 hover:scale-102"
            >
              <FileText className="w-5 h-5 text-[#0a2569]" />
              <span>View Official Product Catalogue Flyer</span>
              <Eye className="w-4 h-4 text-amber-500" />
            </button>
          )}

          <button
            onClick={() => onNavigateToSection('contact')}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-white bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-500/25 transition-all scale-100 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>Request Instant Quote</span>
          </button>

          <a
            href="https://wa.me/918712344439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20would%20like%20to%20enquire%20about%20industrial%20products%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-md shadow-emerald-500/10 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>WhatsApp Sandeep Kumar</span>
          </a>

          <a
            href="tel:+918712344439"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>+91 8712344439</span>
          </a>
        </div>

        {/* Top Brand Logos Banner in Hero */}
        <div className="mb-10 pt-6 border-t border-slate-200/80">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center mb-4">
            Authorized OEM Brands We Stock & Supply
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {topBrandLogos.map((brandName) => (
              <div 
                key={brandName}
                onClick={() => {
                  onSearchChange(brandName);
                  onNavigateToSection('catalog');
                }}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-white border-2 border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-blue-500 transition-all cursor-pointer hover:scale-105 flex items-center justify-center min-w-[120px] sm:min-w-[140px]"
                title={`Explore ${brandName} components`}
              >
                <BrandLogo name={brandName} size="md" showText={true} />
              </div>
            ))}
          </div>
        </div>

        {/* 5 Trust Commitments Matching Flyer Bottom Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto border-t border-slate-200 pt-8">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-blue-700">QUALITY</div>
            <div className="text-xs text-slate-700 mt-0.5 font-bold">100% Genuine Materials</div>
            <div className="text-[10px] text-slate-400">Mill Test Certified</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-amber-600">RELIABLE</div>
            <div className="text-xs text-slate-700 mt-0.5 font-bold">Proven Field Service</div>
            <div className="text-[10px] text-slate-400">Expert Engineering Team</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-emerald-600">COMPETITIVE</div>
            <div className="text-xs text-slate-700 mt-0.5 font-bold">Direct Factory Prices</div>
            <div className="text-[10px] text-slate-400">Bulk & ARC Contracts</div>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-purple-600">SATISFACTION</div>
            <div className="text-xs text-slate-700 mt-0.5 font-bold">Client-First Approach</div>
            <div className="text-[10px] text-slate-400">Long-term Industrial Trust</div>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
            <div className="text-xl sm:text-2xl font-black text-rose-600">24/7 SUPPORT</div>
            <div className="text-xs text-slate-700 mt-0.5 font-bold">Timely Dispatch</div>
            <div className="text-[10px] text-slate-400">Telangana & Andhra Pradesh</div>
          </div>
        </div>

      </div>
    </section>
  );
};
