import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Pill, 
  FlaskConical, 
  Utensils, 
  Factory, 
  Droplets, 
  Building2, 
  MessageCircle 
} from 'lucide-react';
import type { ProductItem, ProductCategory, RfqItem, IndustryDomain } from '../types';
import { productsData, productCategoriesList } from '../data/products';
import { industryDomainsData } from '../data/domains';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  rfqList: RfqItem[];
  onToggleRfq: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenFlyer?: () => void;
  activeDomainId: string | null;
  onSelectDomain: (domainId: string | null) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  rfqList,
  onToggleRfq,
  onSelectProduct,
  activeDomainId,
  onSelectDomain
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [domainItemType, setDomainItemType] = useState<'all' | 'specific' | 'common'>('all');

  const activeDomain = useMemo(() => {
    if (!activeDomainId) return null;
    return industryDomainsData.find(d => d.id === activeDomainId) || null;
  }, [activeDomainId]);

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

  // Filter products by domain, category, search query, brand, and subcategory
  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      // 1. Domain Filter
      if (activeDomain) {
        if (domainItemType === 'specific') {
          if (!activeDomain.specificProductIds.includes(p.id)) return false;
        } else if (domainItemType === 'common') {
          if (!activeDomain.commonProductIds.includes(p.id)) return false;
        } else {
          const allDomainIds = [...activeDomain.specificProductIds, ...activeDomain.commonProductIds];
          if (!allDomainIds.includes(p.id)) return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // 3. Brand filter
      if (selectedBrand !== 'all' && !p.brands.includes(selectedBrand)) {
        return false;
      }

      // 4. SubCategory filter
      if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) {
        return false;
      }

      // 5. Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesSub = p.subCategory.toLowerCase().includes(q);
        const matchesSpecs = p.specifications.some(s => s.toLowerCase().includes(q));
        const matchesBrand = p.brands.some(b => b.toLowerCase().includes(q));
        const matchesApp = p.applications.some(a => a.toLowerCase().includes(q));

        if (!matchesName && !matchesTagline && !matchesDesc && !matchesSub && !matchesSpecs && !matchesBrand && !matchesApp) {
          return false;
        }
      }

      return true;
    });
  }, [activeDomain, domainItemType, selectedCategory, selectedBrand, selectedSubCategory, searchQuery]);

  // Extract available brands for the current filtered scope
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    const pool = activeDomain
      ? productsData.filter(p => {
          const allIds = [...activeDomain.specificProductIds, ...activeDomain.commonProductIds];
          return allIds.includes(p.id);
        })
      : productsData;

    pool.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        p.brands.forEach(b => brandsSet.add(b));
      }
    });
    return Array.from(brandsSet).sort();
  }, [activeDomain, selectedCategory]);

  const resetAllFilters = () => {
    setSelectedBrand('all');
    setSelectedSubCategory('all');
    setDomainItemType('all');
    onSearchChange('');
    onSelectCategory('all');
    onSelectDomain(null);
  };

  const handleWhatsAppDomainInquiry = (domain: IndustryDomain) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in sourcing domain-tailored industrial spares for "${domain.name}". Please share complete pricing and technical datasheets.`
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
  };

  const ActiveDomainIcon = activeDomain ? getDomainIcon(activeDomain.iconName) : Layers;

  return (
    <section id="catalog" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0a2569] text-white text-xs font-bold uppercase tracking-wider mb-2.5 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Industrial Engineering Supplies & Maintenance Spares</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            {activeDomain ? (
              <span>
                Domain Catalog: <span className="text-[#0a2569]">{activeDomain.name.split(',')[0]}</span>
              </span>
            ) : (
              <span>
                Browse Products by <span className="text-[#0a2569]">Industry Domain or Division</span>
              </span>
            )}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            {activeDomain 
              ? activeDomain.tagline
              : "Explore genuine OEM spares, certified process piping, electrical switchgear, and automation spares. Click any industry sector to view curated packages."}
          </p>
        </div>

        {/* DOMAIN SWITCHER TABS (Horizontal Pill Bar) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-3 mb-6 gap-2 scrollbar-none">
          <button
            onClick={() => {
              onSelectDomain(null);
              setDomainItemType('all');
            }}
            className={`whitespace-nowrap flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 border ${
              activeDomainId === null
                ? 'bg-[#0a2569] text-white border-[#0a2569] shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-blue-50/60 hover:border-blue-300'
            }`}
          >
            <Layers className={`w-4 h-4 ${activeDomainId === null ? 'text-amber-400' : 'text-slate-500'}`} />
            <span>All Products (60+)</span>
          </button>

          {industryDomainsData.map((d) => {
            const Icon = getDomainIcon(d.iconName);
            const isActive = activeDomainId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => {
                  onSelectDomain(d.id);
                  setDomainItemType('all');
                }}
                className={`whitespace-nowrap flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 border ${
                  isActive
                    ? 'bg-[#0a2569] text-white border-[#0a2569] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-blue-50/60 hover:border-blue-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{d.name.split(',')[0]}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-extrabold ${
                  isActive ? 'bg-white/20 text-blue-100' : 'bg-slate-100 text-slate-500'
                }`}>
                  {d.specificProductIds.length + d.commonProductIds.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE DOMAIN SPOTLIGHT BANNER */}
        {activeDomain && (
          <div className="mb-8 rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden">
            
            {/* Gradient Top Strip */}
            <div className={`p-5 sm:p-6 bg-gradient-to-r ${activeDomain.gradient} text-white`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-black uppercase tracking-wider border border-white/25">
                      <ActiveDomainIcon className="w-3.5 h-3.5 text-amber-300" />
                      <span>{activeDomain.badge}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-blue-100 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                      <span>GST Verified • MTC 3.1 Certificates</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {activeDomain.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-normal">
                    {activeDomain.description}
                  </p>

                  {/* Certified Standards */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeDomain.keyStandards.map((std, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-black/20 border border-white/20 text-white text-[11px] font-semibold">
                        ✓ {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hub Locations & Direct Inquiry */}
                <div className="lg:w-80 shrink-0 bg-black/25 backdrop-blur-md p-4 rounded-xl border border-white/20 space-y-3">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Serving Industrial Corridors:</span>
                  </div>
                  <ul className="text-xs text-white/90 space-y-1">
                    {activeDomain.hubAreas.slice(0, 3).map((hub, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-300 font-bold">•</span>
                        <span className="line-clamp-1">{hub}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleWhatsAppDomainInquiry(activeDomain)}
                    className="w-full py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all hover:scale-102"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire for {activeDomain.name.split(',')[0]}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Sub-Filter Controls for Active Domain */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Category Segment Selector */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-600 mr-1 hidden sm:inline">View:</span>
                <button
                  onClick={() => setDomainItemType('all')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    domainItemType === 'all'
                      ? 'bg-[#0a2569] text-white shadow-2xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All Domain Spares ({activeDomain.specificProductIds.length + activeDomain.commonProductIds.length})
                </button>
                <button
                  onClick={() => setDomainItemType('specific')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    domainItemType === 'specific'
                      ? 'bg-amber-600 text-white shadow-2xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  ⭐ Process-Critical ({activeDomain.specificProductIds.length})
                </button>
                <button
                  onClick={() => setDomainItemType('common')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    domainItemType === 'common'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  🔧 Universal Plant Consumables ({activeDomain.commonProductIds.length})
                </button>
              </div>

              {/* Clear Domain button */}
              <button
                onClick={() => {
                  onSelectDomain(null);
                  setDomainItemType('all');
                }}
                className="text-xs text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 hover:underline"
              >
                <X className="w-3.5 h-3.5" />
                <span>Show All 60+ Products</span>
              </button>

            </div>

          </div>
        )}

        {/* SEARCH & REFINEMENT BAR */}
        <div className="p-3.5 rounded-2xl bg-white border border-slate-200 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by product name, part number, or material grade..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Division Tabs (if no domain selected or for additional filtering) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {productCategoriesList.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id as ProductCategory)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#0a2569] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}

              {/* Brand Filter */}
              {availableBrands.length > 0 && (
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="py-1.5 px-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 font-semibold focus:outline-none focus:border-blue-600"
                >
                  <option value="all">All Brands ({availableBrands.length})</option>
                  {availableBrands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              )}

              {/* Reset Button */}
              {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery !== '' || activeDomainId !== null) && (
                <button
                  onClick={resetAllFilters}
                  className="px-2.5 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-bold transition-colors flex items-center gap-1"
                  title="Reset all filters"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* RESULTS HEADER */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-xs sm:text-sm text-slate-600 font-semibold">
            Showing <strong className="text-slate-900 font-black">{filteredProducts.length}</strong> industrial items
            {activeDomain && (
              <span> for <span className="text-[#0a2569] font-bold">{activeDomain.name.split(',')[0]}</span></span>
            )}
            {selectedCategory !== 'all' && (
              <span> in <span className="text-[#0a2569] font-bold">{selectedCategory.replace('-', ' ')}</span></span>
            )}
          </div>
          <div className="text-[11px] text-slate-500 hidden sm:block">
            MTC 3.1 Certificates & Manufacturer Warranties Provided
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const isInRfq = rfqList.some(item => item.product.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  isInRfq={isInRfq}
                  onToggleRfq={onToggleRfq}
                  onSelectProduct={onSelectProduct}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find items matching your search or filters. Try adjusting your search query or reset filters.
            </p>
            <button
              onClick={resetAllFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-[#0a2569] text-white text-xs font-bold hover:bg-blue-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
