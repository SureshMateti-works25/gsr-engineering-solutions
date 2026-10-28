import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  RotateCcw, 
  Cog, 
  Zap, 
  Cpu, 
  Wind, 
  ShieldCheck, 
  FileText, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import type { ProductCategory, ProductItem, RfqItem } from '../types';
import { productsData } from '../data/products';
import { ProductCard } from './ProductCard';
import { BrandLogo } from './BrandLogo';
import { caseStudiesData } from '../data/projects';

interface CategoryPageProps {
  categoryId: ProductCategory;
  onBackToHome: () => void;
  rfqList: RfqItem[];
  onToggleRfq: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenFlyer: () => void;
  onNavigateToContact: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  onBackToHome,
  rfqList,
  onToggleRfq,
  onSelectProduct,
  onOpenFlyer,
  onNavigateToContact
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const categoryDetails = useMemo(() => {
    switch (categoryId) {
      case 'mechanical-items':
        return {
          title: 'Mechanical Items & Piping Supplies',
          headline: '18 Heavy-Duty Industrial Mechanical Materials, Valves, Fasteners & Power Transmission',
          sub: 'Supplying ASTM A312/A269 seamless SS pipes, forged flanges (Class 150-2500#), ball/gate valves, bearings, couplings & gearboxes with 100% Original Mill Test Certificates.',
          badge: 'Division 01 • 18 Products',
          icon: Cog,
          bannerBg: 'from-amber-600 via-orange-600 to-amber-800',
          accentText: 'text-amber-600',
          borderColor: 'border-amber-300',
          relatedIndustry: 'Pharma & Biotech'
        };
      case 'electrical-items':
        return {
          title: 'Electrical Items & Switchgear Systems',
          headline: '18 Low & Medium Voltage Breakers, Motor Control Centers & Armoured Power Cables',
          sub: 'Authorized supply of Schneider Electric, Siemens, ABB, Eaton, and L&T switchgear. ACB up to 6300A, MCCB, contactors, overload relays, terminal blocks, panel enclosures & XLPE cables.',
          badge: 'Division 02 • 18 Products',
          icon: Zap,
          bannerBg: 'from-blue-700 via-indigo-700 to-blue-900',
          accentText: 'text-blue-600',
          borderColor: 'border-blue-300',
          relatedIndustry: 'Steel & Heavy Engineering'
        };
      case 'automation-electronics':
        return {
          title: 'Electronics & Industrial Automation',
          headline: '15 High-Precision Sensors, Controllers, PLC, HMI, VFD Drives & Motion Controls',
          sub: 'Turnkey industrial automation components: inductive/capacitive proximity sensors, optical sensors, PID temperature controllers, Siemens & Omron PLCs, touch HMIs, VFDs, and SMPS power supplies.',
          badge: 'Division 03 • 15 Products',
          icon: Cpu,
          bannerBg: 'from-purple-700 via-indigo-800 to-violet-900',
          accentText: 'text-purple-600',
          borderColor: 'border-purple-300',
          relatedIndustry: 'Food & Packaging'
        };
      case 'pneumatics-items':
        return {
          title: 'Pneumatics Items (OEM Make)',
          headline: '11 World-Class Pneumatic Cylinders, Solenoids, FRL Units & Fluid Power Spares',
          sub: 'Genuine OEM pneumatic automation equipment from SMC, FESTO, AirTAC, Mindman, CKD, Parker Legris, and Camozzi. Standard & compact ISO cylinders, directional valves, PU tubes & fittings.',
          badge: 'Division 04 • 11 Products',
          icon: Wind,
          bannerBg: 'from-cyan-700 via-teal-700 to-blue-900',
          accentText: 'text-cyan-600',
          borderColor: 'border-cyan-300',
          relatedIndustry: 'Food & Packaging'
        };
      default:
        return {
          title: 'Industrial Products Catalog',
          headline: 'Comprehensive Industrial Supplies Across 4 Specialized Divisions',
          sub: 'Browse complete catalog backed by verified GST invoicing and manufacturer test certificates.',
          badge: 'All Industrial Products',
          icon: Sparkles,
          bannerBg: 'from-[#0a2569] via-blue-900 to-indigo-950',
          accentText: 'text-blue-600',
          borderColor: 'border-blue-300',
          relatedIndustry: 'Pharma & Biotech'
        };
    }
  }, [categoryId]);

  const IconComponent = categoryDetails.icon;

  // Filter products belonging to this category
  const categoryProducts = useMemo(() => {
    return productsData.filter(p => categoryId === 'all' || p.category === categoryId);
  }, [categoryId]);

  // Extract subcategories
  const availableSubCategories = useMemo(() => {
    const set = new Set<string>();
    categoryProducts.forEach(p => set.add(p.subCategory));
    return Array.from(set).sort();
  }, [categoryProducts]);

  // Extract brands
  const availableBrands = useMemo(() => {
    const set = new Set<string>();
    categoryProducts.forEach(p => p.brands.forEach(b => set.add(b)));
    return Array.from(set).sort();
  }, [categoryProducts]);

  // Filter products by search, subcategory, brand
  const filteredList = useMemo(() => {
    return categoryProducts.filter(p => {
      if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) return false;
      if (selectedBrand !== 'all' && !p.brands.includes(selectedBrand)) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matches = p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.specifications.some(s => s.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    });
  }, [categoryProducts, selectedSubCategory, selectedBrand, searchQuery]);

  // Related Case Study
  const relatedCaseStudy = caseStudiesData.find(cs => cs.industry === categoryDetails.relatedIndustry) || caseStudiesData[0];

  return (
    <div className="min-h-screen bg-slate-50 pt-4 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
            <button 
              onClick={onBackToHome}
              className="hover:text-blue-600 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span>Categories</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">{categoryDetails.title}</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 shadow-2xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </button>
        </div>

        {/* Category Hero Banner */}
        <div className={`rounded-3xl bg-gradient-to-r ${categoryDetails.bannerBg} text-white p-6 sm:p-10 shadow-xl mb-10 relative overflow-hidden`}>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 text-xs font-black uppercase tracking-wider mb-4 text-amber-300">
              <IconComponent className="w-4 h-4" />
              <span>{categoryDetails.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {categoryDetails.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
              {categoryDetails.sub}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenFlyer}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-amber-300" />
                <span>View Official Product Poster</span>
              </button>

              <button
                onClick={onNavigateToContact}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Category Bulk Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category OEM Brand Logos Showcase Bar */}
        {availableBrands.length > 0 && (
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Authorized OEM Partner Brands for {categoryDetails.title}</span>
              </div>
              {selectedBrand !== 'all' && (
                <button
                  onClick={() => setSelectedBrand('all')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Show All Brands
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {availableBrands.map((bName) => (
                <button
                  key={bName}
                  onClick={() => setSelectedBrand(selectedBrand === bName ? 'all' : bName)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl border-2 transition-all flex items-center justify-center hover:scale-105 ${
                    selectedBrand === bName
                      ? 'bg-blue-50 border-blue-600 shadow-sm scale-105'
                      : 'bg-slate-50 hover:bg-white border-slate-200/90 shadow-2xs'
                  }`}
                  title={`Filter products by ${bName}`}
                >
                  <BrandLogo name={bName} size="md" showText={true} />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${categoryDetails.title}...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 transition-all"
              />
            </div>

            {/* Sub-Category Dropdown */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:bg-white"
              >
                <option value="all">All Sub-Categories ({categoryProducts.length})</option>
                {availableSubCategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>

              {/* Brand Dropdown */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:bg-white"
              >
                <option value="all">All OEM Brands ({availableBrands.length})</option>
                {availableBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>

              {(searchQuery || selectedSubCategory !== 'all' || selectedBrand !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSubCategory('all');
                    setSelectedBrand('all');
                  }}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-bold flex items-center gap-1 border border-slate-200"
                  title="Reset Filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Showing {filteredList.length} of {categoryProducts.length} Products
            </span>
            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Genuine Materials With Mill Test Certificates (MTC)
            </span>
          </div>

          {filteredList.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-600">No items matched your search filter.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedSubCategory('all'); setSelectedBrand('all'); }}
                className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isInRfq={rfqList.some(item => item.product.id === product.id)}
                  onToggleRfq={onToggleRfq}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          )}
        </div>

        {/* Featured Case Study for this Category (Showing More Than Supply) */}
        {relatedCaseStudy && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Real Project Delivery • Supply + Installation
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-slate-900 mt-2">
                  How We Supplied & Installed for {relatedCaseStudy.industry}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {relatedCaseStudy.title}
                </p>
              </div>

              <button
                onClick={onNavigateToContact}
                className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-all"
              >
                Request Proposal on this Scope
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="h-48 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <img 
                  src={relatedCaseStudy.imageUrl} 
                  alt={relatedCaseStudy.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-2 space-y-3 text-xs sm:text-sm text-slate-600">
                <p className="leading-relaxed font-medium text-slate-800">
                  {relatedCaseStudy.summary}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {relatedCaseStudy.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">{m.label}</div>
                      <div className="text-xs sm:text-sm font-black text-blue-700 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-700 italic border-t border-slate-100">
                  "{relatedCaseStudy.clientQuote?.quote}" — <span className="font-bold not-italic">{relatedCaseStudy.clientQuote?.author}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
