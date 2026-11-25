import React, { useState, useMemo, useRef } from 'react';
import { 
  ArrowLeft, 
  Award, 
  ShieldCheck, 
  Search, 
  PhoneCall, 
  MessageCircle, 
  ChevronRight, 
  FileCheck2, 
  CheckCircle2, 
  Truck, 
  Zap, 
  Wind, 
  Cog,
  Send,
  Package,
  X,
  Layers
} from 'lucide-react';
import type { ProductItem, RfqItem, BrandPartner } from '../types';
import { brandPartnersData } from '../data/brands';
import { productsData } from '../data/products';
import { BrandLogo } from './BrandLogo';
import { ProductCard } from './ProductCard';

interface BrandsPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
  rfqList?: RfqItem[];
  onToggleRfq?: (product: ProductItem) => void;
  onSelectProduct?: (product: ProductItem) => void;
}

type CategoryTab = 'all' | 'electrical' | 'pneumatics' | 'mechanical';

// Map of canonical brand keywords for robust 100% accurate product association
const brandKeyMap: Record<string, string[]> = {
  'Schneider Electric': ['schneider'],
  'Siemens': ['siemens'],
  'ABB': ['abb'],
  'Eaton': ['eaton'],
  'L&T Electrical & Automation': ['l&t', 'larsen'],
  'Havells': ['havells'],
  'Legrand': ['legrand'],
  'CHNT': ['chnt'],
  'C&S Electric': ['c&s'],
  'Panasonic': ['panasonic'],
  'SMC': ['smc'],
  'FESTO': ['festo'],
  'AirTAC': ['airtac'],
  'Mindman': ['mindman'],
  'CKD': ['ckd'],
  'Parker Legris': ['parker', 'legris'],
  'Camozzi Automation': ['camozzi'],
  'RG SS': ['rg ss', 'rg'],
  'Metal Work Pneumatic': ['metal work'],
  'Janatics Pneumatic': ['janatics'],
  'Yuken': ['yuken'],
  'Tata Steel': ['tata'],
  'Jindal Steel & Power': ['jindal'],
  'JSW Steel': ['jsw'],
  'SKF Bearings': ['skf'],
  'Fenner': ['fenner'],
  'Elecon': ['elecon']
};

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onBackToHome,
  onNavigateToContact,
  rfqList = [],
  onToggleRfq = () => {},
  onSelectProduct = () => {}
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<BrandPartner | null>(null);

  const productsSectionRef = useRef<HTMLDivElement>(null);

  // Helper to extract products for a given brand name
  const getProductsForBrand = (brandName: string): ProductItem[] => {
    const keys = brandKeyMap[brandName] || [brandName.toLowerCase()];
    return productsData.filter(p =>
      p.brands.some(b => {
        const normB = b.toLowerCase();
        return keys.some(k => normB.includes(k) || k.includes(normB));
      })
    );
  };

  // Pre-calculate products count per brand for fast badges
  const brandProductCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const b of brandPartnersData) {
      counts[b.name] = getProductsForBrand(b.name).length;
    }
    return counts;
  }, []);

  // Filter brands based on category tab & search query
  const filteredBrands = useMemo(() => {
    return brandPartnersData.filter((brand) => {
      const matchesCat = selectedCategory === 'all' || brand.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        brand.name.toLowerCase().includes(q) || 
        brand.type.toLowerCase().includes(q) || 
        (brand.description ? brand.description.toLowerCase().includes(q) : false);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: brandPartnersData.length,
      electrical: brandPartnersData.filter(b => b.category === 'electrical').length,
      pneumatics: brandPartnersData.filter(b => b.category === 'pneumatics').length,
      mechanical: brandPartnersData.filter(b => b.category === 'mechanical').length,
    };
  }, []);

  // Products belonging to the currently selected brand
  const selectedBrandProducts = useMemo(() => {
    if (!selectedBrand) return [];
    return getProductsForBrand(selectedBrand.name);
  }, [selectedBrand]);

  const handleSelectBrand = (brand: BrandPartner) => {
    if (selectedBrand?.name === brand.name) {
      // Toggle off if already selected
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brand);
      // Smooth scroll to products showcase section after state update
      setTimeout(() => {
        productsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleWhatsAppBrand = (e: React.MouseEvent, brandName: string) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am inquiring about wholesale pricing, availability, and MTC certificates for ${brandName} components. Please assist.`
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
  };

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateToContact();
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'electrical':
        return { label: 'Electrical Switchgear', icon: Zap, color: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'pneumatics':
        return { label: 'Pneumatics & Fluid Power', icon: Wind, color: 'bg-sky-100 text-sky-800 border-sky-200' };
      case 'mechanical':
        return { label: 'Mechanical & Steel', icon: Cog, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      default:
        return { label: 'Industrial Sourcing', icon: Award, color: 'bg-slate-100 text-slate-800 border-slate-200' };
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-20">
      
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 font-bold text-[#0a2569] hover:text-blue-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">Authorized OEM Brands</span>
            {selectedBrand && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
                <span className="font-bold text-blue-700 hidden sm:inline truncate max-w-[200px]">
                  {selectedBrand.name} ({selectedBrandProducts.length} Items)
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:+918712344439"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+91 8712344439</span>
              <span className="sm:hidden">Call</span>
            </a>
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a2569] text-white hover:bg-blue-900 text-xs font-bold transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get Wholesale Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-br from-[#0a2569] via-[#0d3184] to-[#0a2569] text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs sm:text-sm font-extrabold tracking-wide uppercase mb-4 shadow-xs">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Authorized OEM Brand Sourcing & Supply</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-4xl mx-auto">
            Authorized OEM Partner Brands
          </h1>

          <p className="mt-4 text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Click any brand below to view all genuine products, specifications, and wholesale inventory available with Original Mill Test Certificates (MTC 3.1).
          </p>

          {/* Key Value Proposition Badges */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3 bg-white/10 backdrop-blur-xs rounded-xl border border-white/15 text-left flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">100% Genuine MTC 3.1</div>
                <div className="text-[11px] text-slate-300">Mill Test Certified</div>
              </div>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-xs rounded-xl border border-white/15 text-left flex items-start gap-2.5">
              <Truck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Express Dispatch</div>
                <div className="text-[11px] text-slate-300">TS, AP, TN & MH</div>
              </div>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-xs rounded-xl border border-white/15 text-left flex items-start gap-2.5">
              <FileCheck2 className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Verified GST Invoicing</div>
                <div className="text-[11px] text-slate-300">100% Input Tax Credit</div>
              </div>
            </div>
            <div className="p-3 bg-white/10 backdrop-blur-xs rounded-xl border border-white/15 text-left flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Full OEM Warranty</div>
                <div className="text-[11px] text-slate-300">Direct Factory Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        
        {/* Search & Category Filter Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full md:w-auto">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#0a2569] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Brands ({counts.all})
              </button>
              <button
                onClick={() => setSelectedCategory('electrical')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === 'electrical'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Electrical ({counts.electrical})</span>
              </button>
              <button
                onClick={() => setSelectedCategory('pneumatics')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === 'pneumatics'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Wind className="w-3.5 h-3.5" />
                <span>Pneumatics ({counts.pneumatics})</span>
              </button>
              <button
                onClick={() => setSelectedCategory('mechanical')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === 'mechanical'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Cog className="w-3.5 h-3.5" />
                <span>Mechanical ({counts.mechanical})</span>
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search brands or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BRAND PRODUCTS SHOWCASE SECTION (Triggered when user clicks any brand box) */}
        {/* ========================================================================= */}
        {selectedBrand && (
          <div 
            ref={productsSectionRef}
            className="mb-12 scroll-mt-32 rounded-3xl bg-white border-2 border-blue-600/60 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#0a2569] via-blue-900 to-[#0a2569] text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="h-18 w-36 sm:h-20 sm:w-44 bg-white rounded-2xl p-2.5 flex items-center justify-center shrink-0 shadow-lg border border-slate-200">
                  <BrandLogo
                    name={selectedBrand.name}
                    logoUrl={selectedBrand.logoUrl}
                    size="md"
                    showText={true}
                  />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1.5">
                    <Award className="w-3 h-3 text-slate-950" />
                    <span>Authorized OEM Partner</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
                    <span>{selectedBrand.name} Products</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/30 text-blue-200 text-xs sm:text-sm font-bold border border-blue-400/40">
                      {selectedBrandProducts.length} Items Available
                    </span>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl line-clamp-2">
                    {selectedBrand.description || selectedBrand.type}
                  </p>
                </div>
              </div>

              {/* Action & Close Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
                <button
                  onClick={(e) => handleWhatsAppBrand(e, selectedBrand.name)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
                  title={`Direct WhatsApp inquiry for ${selectedBrand.name} items`}
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Inquire on WhatsApp</span>
                </button>

                <button
                  onClick={onNavigateToContact}
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all hover:scale-105 cursor-pointer"
                  title="Request wholesale quotation"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Request Quote</span>
                </button>

                <button
                  onClick={() => setSelectedBrand(null)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer border border-white/20"
                  title="Close brand products showcase and return to brands grid"
                  aria-label="Close brand products showcase"
                >
                  <X className="w-5 h-5 text-white" />
                  <span className="hidden sm:inline">Close</span>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="p-6 sm:p-8 bg-slate-50/60">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                <div className="text-xs sm:text-sm font-extrabold text-slate-800 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#0a2569]" />
                  <span>Showing All Sourced Spares for <strong>{selectedBrand.name}</strong></span>
                </div>
                <div className="text-xs text-slate-500">
                  Click any product card for technical datasheets & RFQ
                </div>
              </div>

              {selectedBrandProducts.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
                  <Package className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <div className="text-sm font-bold text-slate-700">Custom Order Line for {selectedBrand.name}</div>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                    We supply the complete catalog of {selectedBrand.name} directly upon request. Contact our engineering desk for immediate quotation and lead times.
                  </p>
                  <button
                    onClick={(e) => handleWhatsAppBrand(e, selectedBrand.name)}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    Inquire {selectedBrand.name} Spares on WhatsApp
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {selectedBrandProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isInRfq={rfqList.some(r => r.product.id === product.id)}
                      onToggleRfq={onToggleRfq}
                      onSelectProduct={onSelectProduct}
                    />
                  ))}
                </div>
              )}

              {/* Bottom return to brands reminder */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Want to inspect another OEM manufacturer? Click any brand card below.</span>
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="font-bold text-[#0a2569] hover:underline cursor-pointer"
                >
                  ↑ Hide Products & View All Brands
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Title above Brand Cards */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-700" />
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Select An OEM Brand To View Products
            </h2>
          </div>
          <div className="text-xs text-slate-500 hidden sm:block">
            {filteredBrands.length} Brands Available • Click box to inspect spares
          </div>
        </div>

        {/* Brands Grid (Clicking any box reveals brand related products) */}
        {filteredBrands.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <Award className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching OEM brands found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We source hundreds of specialized OEM spares. Contact our engineering desk directly for brands not listed here.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBrands.map((brand) => {
              const catBadge = getCategoryBadge(brand.category);
              const CatIcon = catBadge.icon;
              const productCount = brandProductCounts[brand.name] || 0;
              const isSelected = selectedBrand?.name === brand.name;

              return (
                <div
                  key={brand.name}
                  onClick={() => handleSelectBrand(brand)}
                  className={`bg-white rounded-2xl border-2 p-5 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/40 ring-4 ring-blue-500/20 shadow-md scale-[1.01]'
                      : 'border-slate-200/90 hover:border-blue-400 hover:-translate-y-0.5'
                  }`}
                  title={`Click to view all ${brand.name} related products`}
                >
                  {/* Active Selection Indicator Ribbon */}
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg shadow-xs tracking-wider">
                      ✓ Currently Viewing Products
                    </div>
                  )}

                  <div>
                    {/* Header: Logo + Category Pill */}
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="h-16 w-36 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100 shrink-0 group-hover:scale-105 transition-transform">
                        <BrandLogo
                          name={brand.name}
                          logoUrl={brand.logoUrl}
                          size="md"
                          showText={true}
                        />
                      </div>
                      
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${catBadge.color}`}>
                          <CatIcon className="w-3 h-3" />
                          <span>{brand.category.toUpperCase()}</span>
                        </div>

                        {/* Product Count Badge */}
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-extrabold border border-blue-200">
                          <Package className="w-2.5 h-2.5 text-blue-600" />
                          <span>{productCount} Products</span>
                        </div>
                      </div>
                    </div>

                    {/* Brand Details */}
                    <div className="mt-3.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {brand.name}
                        </h3>
                        {brand.popular && (
                          <span className="px-1.5 py-0.5 rounded-sm bg-blue-100 text-[#0a2569] text-[9px] font-black uppercase">
                            Tier-1
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-semibold text-blue-700 mt-0.5">
                        {brand.type}
                      </div>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {brand.description}
                      </p>
                    </div>
                  </div>

                  {/* Brand Card Footer: View Products Banner & Quick Contact */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col gap-2">
                    {/* Primary Click CTA */}
                    <div className={`py-1.5 px-3 rounded-xl text-xs font-black flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-[#0a2569] group-hover:bg-[#0a2569] group-hover:text-white'
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5" />
                        <span>{isSelected ? 'Viewing Products' : `View ${productCount} Products`}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Secondary WhatsApp & Quote buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={(e) => handleWhatsAppBrand(e, brand.name)}
                        className="flex-1 py-1.5 px-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold transition-colors flex items-center justify-center gap-1 border border-emerald-200/60"
                        title={`Chat on WhatsApp for ${brand.name} spares`}
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        onClick={handleQuoteClick}
                        className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition-colors border border-slate-200"
                        title="Request quotation"
                      >
                        Quote
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Comprehensive Trust Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-[#0a2569] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Bulk OEM Pricing & Project Procurement</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">
              Need Manufacturer Test Certificates or Bulk OEM Pricing?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              GSR Engineering Solutions provides factory-sealed items, manufacturer calibration reports, and dedicated procurement support for industrial plants across Telangana, Andhra Pradesh, Tamil Nadu, and Maharashtra.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+918712344439"
              className="px-5 py-3 rounded-xl bg-white text-[#0a2569] font-black text-xs sm:text-sm hover:bg-slate-100 transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#0a2569]" />
              <span>Call +91 8712344439</span>
            </a>
            <button
              onClick={onNavigateToContact}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              <span>Submit RFQ Inquiry</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
