import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Layers, 
  SlidersHorizontal, 
  RotateCcw,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Cog,
  Wrench,
  Sparkles,
  FileText,
  CheckCircle2,
  Eye
} from 'lucide-react';
import type { ProductItem, ProductCategory, RfqItem } from '../types';
import { productsData, productCategoriesList } from '../data/products';
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
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  rfqList,
  onToggleRfq,
  onSelectProduct,
  onOpenFlyer
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

  // Filter products by category, search query, brand, and subcategory
  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
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
  }, [selectedCategory, selectedBrand, selectedSubCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedSubCategory('all');
    onSearchChange('');
    onSelectCategory('all');
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ss-material': return Layers;
      case 'pharma-material': return ShieldCheck;
      case 'electrical-material': return Zap;
      case 'mechanical-material': return Cog;
      case 'other-industrial': return Wrench;
      default: return Sparkles;
    }
  };

  const getCategoryButtonClasses = (id: string, isActive: boolean) => {
    switch (id) {
      case 'ss-material':
        return isActive 
          ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-sky-500/25 ring-2 ring-sky-400' 
          : 'bg-white text-slate-700 hover:text-sky-700 hover:bg-sky-50 border border-slate-200';
      case 'pharma-material':
        return isActive 
          ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-500/25 ring-2 ring-emerald-400' 
          : 'bg-white text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200';
      case 'electrical-material':
        return isActive 
          ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md shadow-purple-500/25 ring-2 ring-purple-400' 
          : 'bg-white text-slate-700 hover:text-purple-700 hover:bg-purple-50 border border-slate-200';
      case 'mechanical-material':
        return isActive 
          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 ring-2 ring-amber-400' 
          : 'bg-white text-slate-700 hover:text-amber-800 hover:bg-amber-50 border border-slate-200';
      case 'other-industrial':
        return isActive 
          ? 'bg-gradient-to-r from-rose-600 to-pink-700 text-white shadow-md shadow-rose-500/25 ring-2 ring-rose-400' 
          : 'bg-white text-slate-700 hover:text-rose-700 hover:bg-rose-50 border border-slate-200';
      default:
        return isActive 
          ? 'bg-gradient-to-r from-slate-900 via-blue-950 to-blue-900 text-white shadow-md shadow-slate-900/25 ring-2 ring-blue-500' 
          : 'bg-white text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200';
    }
  };

  const getCategoryBannerData = (cat: ProductCategory) => {
    switch (cat) {
      case 'ss-material':
        return {
          number: '01',
          name: 'SS MATERIAL',
          headline: 'Stainless Steel Piping, Fittings, Valves, Flanges & Vessels',
          description: 'Supplying ASTM A312 / A269 seamless and welded SS pipes, forged flanges (Class 150 - 2500#), butt-weld & threaded fittings, industrial ball/gate valves, sheets, plates, and process tanks with 100% Original Mill Test Certificates (MTC).',
          gradient: 'from-sky-600 via-blue-600 to-blue-800',
          border: 'border-sky-400/40',
          features: ['ASTM A312 / A269', 'Grades 304, 316, 316L, 310', 'SCH 5S to XXS', 'PMI & Hydrostatic Tested'],
          icon: Layers
        };
      case 'pharma-material':
        return {
          number: '02',
          name: 'PHARMA MATERIAL',
          headline: 'Electropolished Sanitary Tubes, Diaphragm Valves & cGMP Supplies',
          description: 'High-purity ASME BPE sanitary electropolished tubing (guaranteed Ra < 0.38 µm), zero-deadleg aseptic diaphragm valves, tri-clamp ferrules and bends, FDA compliant seals, and sterile filtration housings for pharmaceutical & biotech loops.',
          gradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          border: 'border-emerald-400/40',
          features: ['ASME BPE Table DT-4-1', 'Electropolished Ra < 0.38 µm', 'FDA 21 CFR 177 / USP Class VI', 'WFI & Pure Steam Loops'],
          icon: ShieldAlert
        };
      case 'electrical-material':
        return {
          number: '03',
          name: 'ELECTRICAL MATERIAL',
          headline: 'MCCB, MCB, Air Circuit Breakers (ACB), Contactors & Power Cables',
          description: 'Tier-1 electrical switchgear and motor control products from Schneider, Siemens, ABB, and L&T. Covering breakers up to 6300A, heavy-duty contactors, thermal bimetallic relays, pilot devices, and XLPE armoured multicore power cables.',
          gradient: 'from-purple-600 via-indigo-600 to-purple-850',
          border: 'border-purple-400/40',
          features: ['Schneider / Siemens / ABB', 'Up to 100kA Breaking (Icu)', 'IEC / IS 60947 Standards', '1.1 kV XLPE Armoured'],
          icon: Zap
        };
      case 'mechanical-material':
        return {
          number: '04',
          name: 'MECHANICAL MATERIAL',
          headline: 'Industrial Gearboxes, Hardened Gears, Bearings & Power Transmission',
          description: 'High-torque reduction gearboxes, 58-62 HRC carburized gear wheels & pinions, flexible tyre and pin-bush couplings, genuine SKF / FAG / Timken bearings, industrial roller chains, carbon steel piping, and high-tensile Gr 8.8/10.9 fasteners.',
          gradient: 'from-amber-500 via-orange-500 to-amber-700',
          border: 'border-amber-400/40',
          features: ['Elecon / Fenner / SKF', '58-62 HRC Case Carburized', 'High Torque Absorbing', 'High Tensile 8.8 / 10.9 Fasteners'],
          icon: Cog
        };
      case 'other-industrial':
        return {
          number: '05',
          name: 'OTHER INDUSTRIAL ITEMS',
          headline: 'Centrifugal Pumps, IE2/IE3/IE4 Motors, Instrumentation & PPE Safety',
          description: 'Complete range of fluid handling centrifugal and process pumps, continuous S1 duty energy-efficient induction motors, precision WIKA pressure gauges, certified plant PPE gear, packaging machine spares, and Loctite maintenance consumables.',
          gradient: 'from-rose-600 via-pink-600 to-rose-800',
          border: 'border-rose-400/40',
          features: ['Kirloskar / ABB / WIKA', 'IE2 / IE3 / IE4 Electric Motors', 'IS 2925 Certified PPE', 'Loctite & Castrol Consumables'],
          icon: Wrench
        };
      default:
        return {
          number: 'ALL',
          name: 'FULL INDUSTRIAL INVENTORY',
          headline: '44 Specialized Supplies Across 5 Official Categories',
          description: 'Browse complete catalog or use quick filters above to narrow by category, sub-category, or OEM manufacturer. All materials backed by verified GST invoicing and manufacturer test certificates.',
          gradient: 'from-[#0a2569] via-blue-900 to-indigo-950',
          border: 'border-blue-400/30',
          features: ['5 Specialized Categories', '44 Item Catalog', 'Official Catalogue Flyer', '24/7 Field Maintenance'],
          icon: Sparkles
        };
    }
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Official GSR Product Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High Precision Components & OEM Supplies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Organized across our 5 flagship industrial categories: SS Material, Pharma Material, Electrical Material, Mechanical Material, and Industrial Utilities.
          </p>
        </div>

        {/* Category Tabs - Bright & Colorful Matching Flyer */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2.5 scrollbar-none">
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
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

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

            {/* Sub-category dropdown */}
            <div className="flex flex-wrap items-center gap-2">
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
              {(selectedBrand !== 'all' || selectedSubCategory !== 'all' || searchQuery !== '' || selectedCategory !== 'all') && (
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

                {onOpenFlyer && (
                  <div className="shrink-0 flex sm:flex-col items-center justify-end gap-2">
                    <button
                      onClick={onOpenFlyer}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-amber-400 font-extrabold text-xs shadow-md transition-all hover:scale-105"
                    >
                      <FileText className="w-4 h-4 text-blue-900" />
                      <span>View Full Flyer</span>
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                    <span className="text-[10px] text-white/80 font-medium hidden sm:block text-center">
                      Proprietor: G Sandeep Kumar
                    </span>
                  </div>
                )}
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
