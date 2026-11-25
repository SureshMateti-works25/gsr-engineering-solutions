import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Layers, 
  ChevronRight, 
  Pill, 
  FlaskConical, 
  Utensils, 
  Factory, 
  Cpu, 
  Droplets,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  MessageCircle
} from 'lucide-react';
import { industryDomainsData } from '../data/domains';
import { forceScrollToTop } from '../utils/scroll';

interface DomainsHubPageProps {
  onBackToHome: () => void;
  onSelectDomain: (domainId: string) => void;
  onNavigateToContact: () => void;
}

export const DomainsHubPage: React.FC<DomainsHubPageProps> = ({
  onBackToHome,
  onSelectDomain,
  onNavigateToContact
}) => {
  useEffect(() => {
    forceScrollToTop();
  }, []);
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

  const handleWhatsAppGeneralInquiry = () => {
    const text = encodeURIComponent(
      'Hello GSR Engineering Solutions, I would like to inquire about domain-specific industrial spares and supplies for our manufacturing plant. Please share your complete catalogue.'
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-700 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onBackToHome} className="hover:text-blue-700">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Industry Domains</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0a2569] via-blue-900 to-indigo-950 text-white shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              <span>Industry-Specific Procurement & Spares</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Industrial Supplies by Industry
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Procuring for a specific process or manufacturing facility? Choose your industry below to explore certified material grades, process-critical components, and universal plant maintenance consumables under a single consolidated GST invoice.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Genuine OEM Spares</span>
              </span>
              <span>•</span>
              <span>MTC 3.1 Material Test Reports</span>
              <span>•</span>
              <span>Serving TS, AP, TN & Maharashtra</span>
            </div>
          </div>
        </div>

        {/* 6 INDUSTRY DOMAIN CARDS GRID */}
        <div>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Select Your Industry:
            </h2>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Click any industry to view its dedicated catalogue and items
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryDomainsData.map((domain) => {
              const Icon = getDomainIcon(domain.iconName);
              const totalItems = domain.specificProductIds.length + domain.commonProductIds.length;

              return (
                <div
                  key={domain.id}
                  onClick={() => onSelectDomain(domain.id)}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Top Header inside card */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
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
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg shrink-0">
                        {totalItems} Items
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {domain.tagline}
                    </p>

                    {/* Certified Standards Chips */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {domain.keyStandards.map((std, idx) => (
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
                      <span>Open Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Turnkey Support Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-blue-600" />
              Consolidated Plant Procurement Advantage
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Procure Specialized Materials + Daily Maintenance Consumables Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Consolidate your specialized stainless steel piping, high-torque gearboxes, or automation drives alongside common routine spares (fasteners, gaskets, couplings, cables, and bearings) under a single verified GST invoice.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={handleWhatsAppGeneralInquiry}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp RFQ</span>
            </button>
            <button
              onClick={onNavigateToContact}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
