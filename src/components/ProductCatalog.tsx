import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Layers, 
  SlidersHorizontal, 
  RotateCcw, 
  ShieldCheck, 
  Zap, 
  Cog, 
  Wrench, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  Eye, 
  Cpu, 
  Wind
} from 'lucide-react';
import type { ProductItem, ProductCategory, RfqItem } from '../types';
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
  domainFilterIds?: string[];
  activeDomainName?: string | null;
  onClearDomainFilter?: () => void;
  onSelectDomainFilter?: (domainId: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  rfqList,
  onToggleRfq,
  onSelectProduct,
  onOpenFlyer,
  domainFilterIds = [],
  activeDomainName = null,
  onClearDomainFilter,
  onSelectDomainFilter
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  // Extract all unique brands and subcategories for the active category
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    productsData.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        p.brands.forEach(b => brandsSet.add(b));
      }
    });
    return Array.from(brandsSet).sort();
  }, [selectedCategory]);

  const availableSubCategories = useMemo(() => {
    const subSet = new Set<string>();
    productsData.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        subSet.add(p.subCategory);
      }
    });
    return Array.from(subSet).sort();
  }, [selectedCategory]);

  // Filter products by domain, category, search query, brand, and subcategory
  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      // Domain filter (if active from the top DomainSolutionsSection or dropdown)
      if (domainFilterIds && domainFilterIds.length > 0) {
        if (!domainFilterIds.includes(p.id)) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'all' && !p.brands.includes(selectedBrand)) {
        return false;
      }

      // SubCategory filter
      if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) {
        return false;
      }

      // Search query
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
  }, [domainFilterIds, selectedCategory, selectedBrand, selectedSubCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedSubCategory('all');
    onSearchChange('');
    onSelectCategory('all');
    if (onClearDomainFilter) {
      onClearDomainFilter();
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'mechanical-items': return Cog;
      case 'electrical-items': return Zap;
      case 'automation-electronics': return Cpu;
      case 'pneumatics-items': return Wind;
      case 'ss-material': return Layers;
      case 'pharma-material': return ShieldCheck;
      case 'other-industrial': return Wrench;
      default: return Sparkles;
    }
  };

  const getCategoryButtonClasses = (id: string, isActive: boolean) => {
    switch (id) {
      case 'mechanical-items':
        return isActive 
          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 ring-2 ring-amber-400' 
          : 'bg-white text-slate-700 hover:text-amber-800 hover:bg-amber-50 border border-slate-200';
      case 'electrical-items':
        return isActive 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-400' 
          : 'bg-white text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200';
      case 'automation-electronics':
        return isActive 
          ? 'bg-gradient-to-r from-purple-600 to-violet-700 text-white shadow-md shadow-purple-500/25 ring-2 ring-purple-400' 
          : 'bg-white text-slate-700 hover:text-purple-700 hover:bg-purple-50 border border-slate-200';
      case 'pneumatics-items':
        return isActive 
          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 ring-2 ring-emerald-400' 
          : 'bg-white text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 border border-slate-200';
      default:
        return isActive 
          ? 'bg-[#0a2569] text-white shadow-md shadow-blue-900/25 ring-2 ring-blue-500' 
          : 'bg-white text-slate-700 hover:text-[#0a2569] hover:bg-blue-50 border border-slate-200';
    }
  };

  const getCategoryBannerData = (catId: ProductCategory) => {
    switch (catId) {
      case 'mechanical-items':
        return {
          number: '01',
          name: 'MECHANICAL ITEMS',
          headline: 'Precision Stainless Steel, Flanges, Heavy Gearing & Power Transmission',
          gradient: 'from-amber-600 via-orange-600 to-red-700',
          border: 'border-amber-400/40',
          icon: Cog,
          description: 'Supplying ASTM A312 SS pipes, forged Class 150-6000# fittings, industrial reduction gearboxes, hardened gears, flexible couplings, and high-tensile hardware with MTC 3.1 certification.',
          features: ['SS 304 / 316 / 316L', '58-62 HRC Gears', 'Class 150 - 6000# Flanges', 'Express Dispatch']
        };
      case 'electrical-items':
        return {
          number: '02',
          name: 'ELECTRICAL ITEMS',
          headline: 'LV/MV Switchgear, Air & Vacuum Circuit Breakers, Panels & Industrial Cables',
          gradient: 'from-blue-700 via-indigo-700 to-slate-900',
          border: 'border-blue-400/40',
          icon: Zap,
          description: 'Authorized distribution of Schneider, Siemens, ABB, L&T, Legrand & Havells ACB/VCB breakers, power contactors, motor protection, and heavy electrolytic copper busbars.',
          features: ['IEC 61439 Certified', 'ACB up to 6300A', 'Type-Tested Switchgear', 'Original OEM Spares']
        };
      case 'automation-electronics':
        return {
          number: '03',
          name: 'ELECTRONICS & INDUSTRIAL AUTOMATION',
          headline: 'Micro & Modular PLCs, Touch HMIs, VFD Inverter Drives & Industrial Sensors',
          gradient: 'from-purple-700 via-violet-800 to-slate-900',
          border: 'border-purple-400/40',
          icon: Cpu,
          description: 'Factory automation controllers, servo drives, digital touch panels, DIN rail SMPS power supplies, and photoelectric sensors for machine builders (OEMs) and process lines.',
          features: ['Industry 4.0 Ready', 'Modbus / PROFINET', 'VFDs 0.37kW to 500kW', 'High-Speed IO Slices']
        };
      case 'pneumatics-items':
        return {
          number: '04',
          name: 'PNEUMATICS ITEMS OEM MAKE',
          headline: 'SMC, FESTO, AirTAC & Parker Legris Pneumatic Automation Components',
          gradient: 'from-emerald-700 via-teal-700 to-cyan-900',
          border: 'border-emerald-400/40',
          icon: Wind,
          description: 'Genuine OEM pneumatic cylinders, 5/2 & 5/3 solenoid valves, modular FRL air preparation units, PU tubes, and quick-connect push-in fittings for automated manufacturing.',
          features: ['SMC & FESTO Genuine', 'Oil-Free FRL Units', 'High-Flex PU Tubing', '100% Tested Manifolds']
        };
      default:
        return {
          number: 'ALL',
          name: 'COMPLETE INDUSTRIAL PORTFOLIO',
          headline: 'Specialized Industrial Products Across 4 Official Divisions',
          gradient: 'from-[#0a2569] via-blue-900 to-slate-900',
          border: 'border-blue-500/40',
          icon: Sparkles,
          description: 'Unified single-source procurement for industrial mechanical items, electrical switchgear, automation electronics, and OEM pneumatics backed by engineering installation and AMC maintenance.',
          features: ['4 Specialized Categories', 'Comprehensive Inventory', 'Official OEM Brands', '24/7 Field Maintenance']
        };
    }
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0a2569] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Engineering Supplies Catalogue</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Explore Products by <span className="text-[#0a2569]">Category or Industry Domain</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Organized across our 4 flagship divisions from our official poster: Mechanical Items, Electrical Items, Electronics & Industrial Automation, and Pneumatics Items OEM Make.
          </p>
        </div>

        {/* Category Tabs - Bright & Colorful Matching Flyer */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-6 gap-2.5 scrollbar-none">
          {productCategoriesList.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id as ProductCategory);
                  setSelectedBrand('all');
                  setSelectedSubCategory('all');
                }}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 shadow-xs ${getCategoryButtonClasses(cat.id, isActive)}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-extrabold ${
                  isActive ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.id === 'all' ? 'All' : cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Domain Filter Alert Banner */}
        {activeDomainName && (
          <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#0a2569] via-indigo-900 to-slate-900 text-white flex flex-wrap items-center justify-between gap-3 shadow-md border border-blue-400/30">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-400 text-slate-950 font-black">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-amber-300 tracking-wider">
                  Industry Domain Filter Active:
                </div>
                <div className="text-sm sm:text-base font-black text-white">
                  {activeDomainName}
                </div>
                <div className="text-xs text-blue-200">
                  Showing specialized process items + common plant maintenance spares
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-200 hidden sm:inline">
                {filteredProducts.length} items matched
              </span>
              {onClearDomainFilter && (
                <button
                  onClick={onClearDomainFilter}
                  className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-xs font-bold text-white transition-all flex items-center gap-1.5 border border-white/30 hover:scale-102"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear Domain Filter</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Inline search box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products by part name, specifications, grade (e.g., SS 316, MCCB, Gearbox)..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
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

            {/* Filter dropdowns */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Industry Domain Selector */}
              <div className="relative">
                <select
                  value={
                    activeDomainName 
                      ? industryDomainsData.find(d => d.name === activeDomainName)?.id || 'all' 
                      : 'all'
                  }
                  onChange={(e) => {
                    const domId = e.target.value;
                    if (domId === 'all') {
                      if (onClearDomainFilter) onClearDomainFilter();
                    } else {
                      if (onSelectDomainFilter) onSelectDomainFilter(domId);
                    }
                  }}
                  className="py-2.5 px-3 rounded-xl bg-blue-50/80 border border-blue-300 text-xs text-[#0a2569] font-bold focus:outline-none focus:bg-white focus:border-blue-600 shadow-2xs"
                >
                  <option value="all">🏢 All Industry Domains</option>
                  {industryDomainsData.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.name.split(',')[0]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sub-category dropdown */}
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-700 font-medium focus:outline-none focus:bg-white focus:border-blue-600"
              >
                <option value="all">All Sub-Categories</option>
                {availableSubCategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>

              {/* Brand dropdown */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-700 font-medium focus:outline-none focus:bg-white focus:border-blue-600"
              >
                <option value="all">All OEM Brands</option>
                {availableBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>

              {/* Active filters reset */}
              {(selectedBrand !== 'all' || selectedSubCategory !== 'all' || searchQuery !== '' || selectedCategory !== 'all' || activeDomainName) && (
                <button
                  onClick={resetFilters}
                  className="p-2.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-colors"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              <span>Showing <strong>{filteredProducts.length}</strong> industrial items</span>
              {selectedCategory !== 'all' && (
                <span className="font-semibold text-blue-600">
                  in {productCategoriesList.find(c => c.id === selectedCategory)?.label}
                </span>
              )}
              {activeDomainName && (
                <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Domain: {activeDomainName.split(',')[0]}
                </span>
              )}
            </div>
            
            {rfqList.length > 0 && (
              <span className="font-semibold text-emerald-600">
                {rfqList.length} item{rfqList.length > 1 ? 's' : ''} in RFQ cart
              </span>
            )}
          </div>
        </div>

        {/* Category Showcase Banner - Bright & Colorful matching Flyer */}
        {(() => {
          const banner = getCategoryBannerData(selectedCategory);
          const BannerIcon = banner.icon;
          return (
            <div className={`relative mb-8 rounded-2xl bg-gradient-to-r ${banner.gradient} text-white p-6 sm:p-7 shadow-lg border ${banner.border} overflow-hidden`}>
              {/* Subtle background glow effect */}
              <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-black/25 text-white border border-white/20 tracking-wider">
                      <BannerIcon className="w-3.5 h-3.5" />
                      CATEGORY {banner.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                      {banner.name}
                    </span>
                    {selectedCategory !== 'all' && (
                      <span className="hidden sm:inline-block text-xs text-white/60">•</span>
                    )}
                    {selectedCategory !== 'all' && (
                      <span className="hidden sm:inline-block text-xs font-medium text-white/90">
                        Official GSR Catalogue Section
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {banner.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {banner.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    {banner.features.map((feat, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/15 text-white border border-white/20"
                      >
                        <CheckCircle2 className="w-3 h-3 text-amber-300" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:items-end justify-center gap-2">
                  {selectedCategory !== 'all' && (
                    <button
                      onClick={() => { window.location.hash = `#/category/${selectedCategory}`; }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow-md transition-all hover:scale-105"
                    >
                      <span>Open Dedicated Category Page</span>
                      <span>→</span>
                    </button>
                  )}

                  {onOpenFlyer && (
                    <button
                      onClick={onOpenFlyer}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-300" />
                      <span>View Official Poster</span>
                      <Eye className="w-3 h-3 text-white/80" />
                    </button>
                  )}
                  <span className="text-[10px] text-white/80 font-medium hidden sm:block text-right">
                    Proprietor: G Sandeep Kumar (+91 8712344439)
                  </span>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isInRfq={rfqList.some((item) => item.product.id === product.id)}
                onToggleRfq={onToggleRfq}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-200">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No items match your filter</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try clearing your search term, selecting a different OEM brand, or resetting to "All Categories".
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
