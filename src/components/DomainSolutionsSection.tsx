import React, { useState } from 'react';
import { 
  Pill, 
  FlaskConical, 
  Utensils, 
  Factory, 
  Cpu, 
  Droplets, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Wrench, 
  Sparkles, 
  Send,
  Building2,
  ExternalLink
} from 'lucide-react';
import { industryDomainsData } from '../data/domains';
import { productsData } from '../data/products';
import type { IndustryDomain, ProductItem } from '../types';

interface DomainSolutionsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onFilterCatalogByDomain: (productIds: string[], domainName: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const DomainSolutionsSection: React.FC<DomainSolutionsSectionProps> = ({
  onSelectProduct,
  onFilterCatalogByDomain,
  onNavigateToSection
}) => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>(industryDomainsData[0].id);

  const activeDomain = industryDomainsData.find(d => d.id === selectedDomainId) || industryDomainsData[0];

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return Pill;
      case 'FlaskConical':
        return FlaskConical;
      case 'Utensils':
        return Utensils;
      case 'Factory':
        return Factory;
      case 'Cpu':
        return Cpu;
      case 'Droplets':
        return Droplets;
      default:
        return Factory;
    }
  };

  const getProductById = (id: string): ProductItem | undefined => {
    return productsData.find(p => p.id === id);
  };

  const domainSpecificProducts = activeDomain.specificProductIds
    .map(id => getProductById(id))
    .filter((p): p is ProductItem => !!p);

  const domainCommonProducts = activeDomain.commonProductIds
    .map(id => getProductById(id))
    .filter((p): p is ProductItem => !!p);

  const handleWhatsAppInquiry = (domain: IndustryDomain) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in sourcing domain-specific industrial supplies & common plant spares for "${domain.name}". Please provide an industrial catalog and quotation.`
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
  };

  const handleCatalogFilterClick = () => {
    const allDomainItemIds = [...activeDomain.specificProductIds, ...activeDomain.commonProductIds];
    onFilterCatalogByDomain(allDomainItemIds, activeDomain.name);
    onNavigateToSection('catalog');
  };

  const ActiveIcon = getDomainIcon(activeDomain.iconName);

  return (
    <section id="domains" className="py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a2569] text-white text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Domain-Specific Solutions & Common Plant Supplies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Procurement for Your <span className="text-[#0a2569]">Industry Sector</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Procuring for a specific process or manufacturing plant? Explore specialized material grades, certified components, and universal maintenance spares tailored for facilities across <strong className="text-slate-800">Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra</strong>.
          </p>
        </div>

        {/* Industry Domain Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2.5 scrollbar-none">
          {industryDomainsData.map((domain) => {
            const Icon = getDomainIcon(domain.iconName);
            const isSelected = domain.id === selectedDomainId;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomainId(domain.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 border-2 shadow-2xs ${
                  isSelected
                    ? 'bg-[#0a2569] text-white border-[#0a2569] shadow-md shadow-blue-900/20 scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{domain.name.split(',')[0]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                  isSelected ? 'bg-white/20 text-blue-100' : 'bg-slate-100 text-slate-500'
                }`}>
                  {domain.specificProductIds.length + domain.commonProductIds.length} Items
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Spotlight Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden transition-all duration-300">
          
          {/* Header Banner */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${activeDomain.gradient} text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider border border-white/30">
                    <ActiveIcon className="w-3.5 h-3.5 text-amber-300" />
                    <span>{activeDomain.badge}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-blue-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    <span>GST Verified Supply + 24/7 AMC</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {activeDomain.name}
                </h3>
                <p className="text-sm sm:text-base text-blue-50/90 font-medium leading-relaxed">
                  {activeDomain.description}
                </p>

                {/* Key Standards Badges */}
                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Certified Industry Standards & MOC Compliance:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDomain.keyStandards.map((std, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg bg-black/20 border border-white/20 text-white text-xs font-semibold"
                      >
                        ✓ {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hub Locations & Quick Action Column */}
              <div className="lg:w-80 shrink-0 bg-black/25 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Key Manufacturing Hubs Served:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-blue-50/90">
                  {activeDomain.hubAreas.map((hub, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-300 font-bold shrink-0">•</span>
                      <span>{hub}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => handleWhatsAppInquiry(activeDomain)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:scale-102"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire for {activeDomain.name.split(',')[0]}</span>
                  </button>
                  <button
                    onClick={handleCatalogFilterClick}
                    className="w-full py-2 px-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/30"
                  >
                    <span>View All in Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Two Section Comparison: Domain-Specific Products VS Common Plant Essentials */}
          <div className="p-6 sm:p-8 bg-slate-50/60">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Column: Domain-Specific Specialized Products */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-50 text-[#0a2569]">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm sm:text-base">
                        Specialized Domain Products
                      </h4>
                      <p className="text-xs text-slate-500">
                        Process-critical MOCs, sanitary, high-pressure & automated components
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-[#0a2569] font-black text-xs">
                    {domainSpecificProducts.length} Items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {domainSpecificProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className="group p-3 rounded-xl border border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-white transition-all cursor-pointer flex items-center gap-3 shadow-2xs hover:shadow-md"
                    >
                      <div className="w-14 h-14 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        {prod.imageUrl ? (
                          <img
                            src={prod.imageUrl}
                            alt={prod.name}
                            className="w-full h-full object-cover rounded"
                            loading="lazy"
                          />
                        ) : (
                          <ActiveIcon className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {prod.subCategory}
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
                          <span>View Specs</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Universal Common Maintenance & Spares */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border-2 border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm sm:text-base">
                        Common Maintenance & Utility Spares
                      </h4>
                      <p className="text-xs text-slate-500">
                        Essential universal fasteners, gaskets, cables, couplings & electrical spares
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-900 font-black text-xs">
                    {domainCommonProducts.length} Essentials
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {domainCommonProducts.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => onSelectProduct(prod)}
                      className="group p-3 rounded-xl border border-slate-200 hover:border-amber-500 bg-slate-50 hover:bg-white transition-all cursor-pointer flex items-center gap-3 shadow-2xs hover:shadow-md"
                    >
                      <div className="w-14 h-14 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        {prod.imageUrl ? (
                          <img
                            src={prod.imageUrl}
                            alt={prod.name}
                            className="w-full h-full object-cover rounded"
                            loading="lazy"
                          />
                        ) : (
                          <Wrench className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-900 truncate group-hover:text-amber-700 transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {prod.subCategory}
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-[10px] text-amber-700 font-semibold">
                          <span>View Specs</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Common Utilities Value Box */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-50 via-blue-50 to-emerald-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Single-Vendor Advantage:</strong> Order both specialized process items and routine maintenance spares together on a single GST invoice with express regional delivery.
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Bar Action Banner */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold shrink-0">
                  ✓ 24/7 Dispatch
                </span>
                <span>
                  Supplying all industrial zones in <strong>Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra</strong>.
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCatalogFilterClick}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#0a2569] hover:bg-blue-900 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                >
                  <span>Filter Catalog for {activeDomain.name.split(',')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
