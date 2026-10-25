import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Cog, 
  Zap, 
  Wind, 
  PhoneCall, 
  MessageCircle,
  Search
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onSelectCategory: (catId: any) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSearchChange, 
  searchQuery, 
  onSelectCategory,
  onNavigateToSection 
}) => {
  const quickCategories = [
    { id: 'mechanical', label: 'Mechanical & Piping', icon: Cog, bg: 'bg-amber-50 text-amber-700 border-amber-200 hover:border-amber-400' },
    { id: 'electrical', label: 'Electrical & Switchgear', icon: Zap, bg: 'bg-blue-50 text-blue-700 border-blue-200 hover:border-blue-400' },
    { id: 'electronics-automation', label: 'Automation & Sensors', icon: Cpu, bg: 'bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400' },
    { id: 'pneumatics', label: 'Pneumatics (OEM)', icon: Wind, bg: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400' }
  ];

  const topBrandLogos = [
    'Tata Steel',
    'Schneider Electric',
    'Siemens',
    'ABB',
    'SMC',
    'FESTO',
    'L&T Electrical & Automation',
    'JSW Steel',
    'Havells',
    'Parker Legris'
  ];

  const handleQuickCategory = (catId: string) => {
    onSelectCategory(catId);
    onNavigateToSection('catalog');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateToSection('catalog');
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-16 sm:pb-24 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200">
      {/* Background Decorative Soft Blur Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 shadow-sm backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-bold text-slate-900">GSR Engineering Solutions</span>
            <span className="text-slate-300">|</span>
            <span className="text-amber-600 font-semibold">Quality Materials. Reliable Service. Lasting Solutions.</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            GSTIN: 36CTUPG6618J11Z9
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18]">
            One-Stop Industrial Supplier & Maintenance Partner for{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent">
              Mechanical, Electrical & Automation
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Supplying genuine OEM engineering materials, pneumatic cylinders, switchgear, precision valves, stainless steel pipes, and offering turnkey maintenance services across <strong className="text-slate-900 font-bold">Telangana & Andhra Pradesh</strong>.
          </p>
        </div>

        {/* Live Search Bar for Quick Equipment Finding */}
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-lg shadow-slate-200">
            <div className="absolute left-4 pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-blue-600" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 500+ items: e.g. SMC cylinder, Festo valve, Schneider MCCB, SS Flange, VFD drive..."
              className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between mt-2.5 px-3 text-xs text-slate-500">
            <span>Popular: <span className="text-slate-800 font-medium">Pneumatic Cylinders, MCCB, SS 316 Pipes, PLCs, Solenoid Valves</span></span>
            <span className="hidden sm:inline text-emerald-600 font-bold">✓ Direct Factory Prices</span>
          </div>
        </div>

        {/* Quick Category Quick Jump Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => handleQuickCategory(cat.id)}
                className={`flex items-center gap-3 p-3.5 rounded-xl ${cat.bg} border hover:scale-[1.02] active:scale-[0.98] transition-all text-left group shadow-sm`}
              >
                <div className="p-2 rounded-lg bg-white text-current shadow-sm border border-slate-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500">View Products →</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => onNavigateToSection('contact')}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all scale-100 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span>Request Instant Quote</span>
          </button>

          <a
            href="https://wa.me/918712444439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20would%20like%20to%20enquire%20about%20industrial%20products%20and%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 shadow-md shadow-emerald-500/10 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>WhatsApp Sandeep Kumar</span>
          </a>

          <a
            href="tel:+918712444439"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            <span>+91 8712444439</span>
          </a>
        </div>

        {/* Top Brand Logos Banner in Hero */}
        <div className="mb-10 pt-6 border-t border-slate-200/80">
          <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center mb-4">
            Authorized OEM Brands We Stock & Supply
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            {topBrandLogos.map((brandName) => (
              <div 
                key={brandName}
                onClick={() => {
                  onSearchChange(brandName);
                  onNavigateToSection('catalog');
                }}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-blue-400 transition-all cursor-pointer hover:scale-105"
                title={`Explore ${brandName} components`}
              >
                <BrandLogo name={brandName} size="sm" showText={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths Grid / Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto border-t border-slate-200 pt-8">
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">25+ Brands</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Tier-1 OEM Partnerships</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">500+ Items</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Mechanical, Electrical, Pneumatics</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100% Quality</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Mill Test Certified (MTC)</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">Quick Dispatch</div>
            <div className="text-xs text-slate-600 mt-1 font-medium">Telangana & Andhra Pradesh</div>
          </div>
        </div>

      </div>
    </section>
  );
};
