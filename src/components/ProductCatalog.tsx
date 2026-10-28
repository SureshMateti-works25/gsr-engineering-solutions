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
          ? 'bg-gradient-to-r from-cyan-600 to-teal-700 text-white shadow-md shadow-cyan-500/25 ring-2 ring-cyan-400' 
          : 'bg-white text-slate-700 hover:text-cyan-800 hover:bg-cyan-50 border border-slate-200';
      default:
        return isActive 
          ? 'bg-gradient-to-r from-slate-900 via-blue-950 to-blue-900 text-white shadow-md shadow-slate-900/25 ring-2 ring-blue-500' 
          : 'bg-white text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200';
    }
  };

  const getCategoryBannerData = (cat: ProductCategory) => {
    switch (cat) {
      case 'mechanical-items':
        return {
          number: '01',
          name: 'MECHANICAL ITEMS (18 PRODUCTS)',
          headline: 'SS & ERW Pipes, Flanges, Industrial Valves, Fasteners, Tools & Spares',
          description: 'Supplying ASTM A312/A269 seamless and ERW pipes, forged flanges (Class 150-2500#), butt-weld & threaded fittings, ball/butterfly/gate valves, gaskets, high-tensile fasteners, certified safety gear, hand tools, bearings, couplings, and reduction gearboxes with 100% Original Mill Test Certificates.',
          gradient: 'from-amber-500 via-orange-600 to-amber-700',
          border: 'border-amber-400/40',
          features: ['ASTM A312 / A269', 'Grades 304, 316, 316L, MS', 'Flanges & Butt-Weld Fittings', 'High-Tensile 8.8 / 10.9 & Bearings'],
          icon: Cog
        };
      case 'electrical-items':
        return {
          number: '02',
          name: 'ELECTRICAL ITEMS (18 PRODUCTS)',
          headline: 'MCCB, MCB, ACB, Switch Disconnectors, Contactors & Armoured Power Cables',
          description: 'Tier-1 electrical switchgear and motor control products from Schneider Electric, Siemens, ABB, L&T, Havells, Legrand, CHNT, C&S, and Panasonic. Breakers up to 6300A, thermal overload relays, industrial plugs, energy meters, push buttons, terminal blocks, panel cooling fans, and XLPE cables.',
          gradient: 'from-blue-600 via-indigo-600 to-blue-850',
          border: 'border-blue-400/40',
          features: ['Schneider / Siemens / ABB / L&T', 'Up to 100kA Breaking (Icu)', 'IEC 60947 Certified Switchgear', '1.1 kV XLPE Armoured Cables'],
          icon: Zap
        };
      case 'automation-electronics':
        return {
          number: '03',
          name: 'ELECTRONICS & INDUSTRIAL AUTOMATION (15 PRODUCTS)',
          headline: 'Sensors, Controllers, PLC, HMI, VFD Drives, Servo Systems & SMPS',
          description: 'Turnkey industrial automation components: inductive/capacitive proximity sensors, photoelectric sensors, rotary encoders, PID temperature controllers, PLC modular controllers, touchscreen HMIs, Variable Frequency Drives (VFD), servo motors, DIN-rail SMPS, and safety light curtains.',
          gradient: 'from-purple-600 via-indigo-700 to-violet-850',
          border: 'border-purple-400/40',
          features: ['Omron / Siemens / Schneider', '0-10V & 4-20mA Signals', 'VFD & Servo Motion Control', 'IP67 Sealed Rugged Sensors'],
          icon: Cpu
        };
      case 'pneumatics-items':
        return {
          number: '04',
          name: 'PNEUMATICS ITEMS (OEM MAKE - 11 PRODUCTS)',
          headline: 'Pneumatic Cylinders, Solenoid Valves, FRL Air Prep, Push-In Fittings & Tubing',
          description: 'Genuine OEM pneumatic automation equipment from SMC, FESTO, AirTAC, Mindman, CKD, Parker Legris, Camozzi, RG SS, Metal Work, Janatics, and Yuken. Standard and compact ISO cylinders, 5/2 & 5/3-way solenoid valves, precision FRL modular units, PU tubing, and quick couplings.',
          gradient: 'from-cyan-600 via-teal-600 to-blue-800',
          border: 'border-cyan-400/40',
          features: ['SMC / FESTO / AirTAC / Parker', 'ISO 15552 & ISO 21287 Cylinders', 'High-Flow 24VDC/230VAC Solenoids', 'Polyurethane PU & Coiled Hoses'],
          icon: Wind
        };
      default:
        return {
          number: 'ALL',
          name: 'FULL INDUSTRIAL INVENTORY',
          headline: '62 Specialized Industrial Products Across 4 Official Poster Divisions',
          description: 'Browse complete catalog or use quick filters above to narrow by category, sub-category, or OEM manufacturer. All materials backed by verified GST invoicing and manufacturer test certificates.',
          gradient: 'from-[#0a2569] via-blue-900 to-indigo-950',
          border: 'border-blue-400/30',
          features: ['4 Specialized Categories', '62 Item Inventory', 'Official OEM Brands', '24/7 Field Maintenance'],
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
            Organized across our 4 flagship divisions from our official poster: Mechanical Items (18), Electrical Items (18), Electronics & Industrial Automation (15), and Pneumatics Items OEM Make (11).
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
