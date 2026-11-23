import React from 'react';
import { 
  ArrowRight, 
  Search, 
  Layers, 
  Pill, 
  FlaskConical, 
  Utensils, 
  Factory, 
  Cpu, 
  Droplets,
  CheckCircle2
} from 'lucide-react';
import { industryDomainsData } from '../data/domains';

interface HeroProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  onSelectDomain: (domainId: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSearchChange, 
  searchQuery, 
  onSelectDomain,
  onNavigateToSection,
}) => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return Pill;
      case 'FlaskConical': return FlaskConical;
      case 'Utensils': return Utensils;
      case 'Factory': return Factory;
      case 'Cpu': return Cpu;
      case 'Droplets': return Droplets;
      default: return Factory;
    }
  };

  const handleDomainCardClick = (domainId: string) => {
    onSelectDomain(domainId);
    onNavigateToSection('catalog');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigateToSection('catalog');
  };

  return (
    <section id="hero" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-64 bg-gradient-to-r from-blue-200/40 via-cyan-100/30 to-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header / Value Proposition */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          {/* Executive Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-[#0a2569] text-xs font-bold tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Industrial Distributor & Turnkey Erection Contractor</span>
            <span className="hidden sm:inline text-blue-300">•</span>
            <span className="hidden sm:inline text-slate-600 font-medium">Single-GST Consolidated Sourcing</span>
          </div>

          {/* Impact Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Find Industrial Spares & Equipment <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0a2569] via-blue-700 to-indigo-800 bg-clip-text text-transparent">
              Tailored to Your Industry Sector
            </span>
          </h1>

          {/* Explanatory Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Select your plant domain below to explore certified process components, high-grade machinery spares, and universal maintenance consumables curated for your manufacturing environment.
          </p>

          {/* Quick Search Bar */}
          <form onSubmit={handleSearchSubmit} className="pt-2 max-w-xl mx-auto">
            <div className="relative flex items-center shadow-md rounded-2xl bg-white border border-slate-300 hover:border-blue-500 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all p-1">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search products, spares or OEM brands (e.g., SS 316 pipe, Helical Gearbox, VFD, Solenoid valve...)"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shrink-0 transition-all shadow-xs"
              >
                Search
              </button>
            </div>
          </form>

        </div>

        {/* DOMAIN CARDS GRID - 6 Industry Verticals */}
        <div id="domains" className="mt-10 sm:mt-12 scroll-mt-24">
          
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-700" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                Pick Your Industry Sector:
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Click a sector to view certified spares & common consumables
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {industryDomainsData.map((domain) => {
              const Icon = getDomainIcon(domain.iconName);
              const totalItems = domain.specificProductIds.length + domain.commonProductIds.length;

              return (
                <div
                  key={domain.id}
                  onClick={() => handleDomainCardClick(domain.id)}
                  className="group relative bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                >
                  {/* Top Header inside card */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${domain.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                            {domain.name.split(',')[0]}
                          </h3>
                          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md inline-block">
                            {domain.badge}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-lg shrink-0">
                        {totalItems} Items
                      </span>
                    </div>

                    {/* Tagline / Key Spares */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {domain.tagline}
                    </p>

                    {/* Certified Standards Chips */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {domain.keyStandards.slice(0, 3).map((std, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                        >
                          ✓ {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTA */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a2569] group-hover:text-blue-600 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Process Spares + Common Consumables</span>
                    </span>
                    <span className="flex items-center gap-1 text-blue-700 font-extrabold group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Clean Trust Pillars Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-base sm:text-lg text-[#0a2569]">6 Core Sectors</div>
            <div className="text-[11px] text-slate-500 font-medium">Domain-Tailored Spares</div>
          </div>
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-base sm:text-lg text-[#0a2569]">60+ Product Lines</div>
            <div className="text-[11px] text-slate-500 font-medium">Ready Stock & Custom Fab</div>
          </div>
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-base sm:text-lg text-[#0a2569]">27 OEM Brands</div>
            <div className="text-[11px] text-slate-500 font-medium">100% Genuine MTC 3.1</div>
          </div>
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-base sm:text-lg text-emerald-700">Supply + Install + AMC</div>
            <div className="text-[11px] text-slate-500 font-medium">Turnkey Plant Support</div>
          </div>
        </div>

      </div>
    </section>
  );
};
