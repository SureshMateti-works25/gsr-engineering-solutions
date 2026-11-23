import React from 'react';
import { 
  ArrowRight, 
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
  onSelectDomain: (domainId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onSelectDomain
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

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-slate-200">
      
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-48 bg-gradient-to-r from-blue-100/50 via-cyan-100/40 to-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simpler, Compact Top Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#0a2569] text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            <span>Industrial Spares by Industry Sector</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Select Your <span className="text-[#0a2569]">Industry Domain</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Choose your sector to explore certified process components, high-torque machinery spares, and plant maintenance consumables.
          </p>
        </div>

        {/* DOMAIN CARDS GRID - 6 Industry Verticals */}
        <div id="domains" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {industryDomainsData.map((domain) => {
            const Icon = getDomainIcon(domain.iconName);
            const totalItems = domain.specificProductIds.length + domain.commonProductIds.length;

            return (
              <div
                key={domain.id}
                onClick={() => onSelectDomain(domain.id)}
                className="group relative bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${domain.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                          {domain.name.split(',')[0]}
                        </h2>
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
                  <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Process + Common Spares</span>
                  </span>
                  <span className="flex items-center gap-1 text-blue-700 font-extrabold group-hover:translate-x-1 transition-transform">
                    <span>Open Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Trust Pillars Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-sm sm:text-base text-[#0a2569]">6 Core Sectors</div>
            <div className="text-[11px] text-slate-500">Domain-Tailored Spares</div>
          </div>
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-sm sm:text-base text-[#0a2569]">60+ Product Lines</div>
            <div className="text-[11px] text-slate-500">Ready Stock & Custom Fab</div>
          </div>
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-sm sm:text-base text-[#0a2569]">27 OEM Brands</div>
            <div className="text-[11px] text-slate-500">100% Genuine MTC 3.1</div>
          </div>
          <div className="p-3 bg-white/70 rounded-xl border border-slate-200/60 shadow-2xs">
            <div className="font-extrabold text-sm sm:text-base text-emerald-700">Supply + Install + AMC</div>
            <div className="text-[11px] text-slate-500">Turnkey Plant Support</div>
          </div>
        </div>

      </div>
    </section>
  );
};
