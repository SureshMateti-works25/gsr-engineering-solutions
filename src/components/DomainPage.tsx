import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  X, 
  ShieldCheck, 
  Layers, 
  Building2, 
  MessageCircle, 
  Sparkles,
  Pill,
  FlaskConical,
  Utensils,
  Factory,
  Cpu,
  Droplets,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import type { ProductItem, RfqItem, ProductCategory } from '../types';
import { industryDomainsData } from '../data/domains';
import { productsData, productCategoriesList } from '../data/products';
import { ProductCard } from './ProductCard';

interface DomainPageProps {
  domainId: string;
  onBackToHome: () => void;
  onSelectOtherDomain: (domainId: string) => void;
  rfqList: RfqItem[];
  onToggleRfq: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  onNavigateToContact: () => void;
}

export const DomainPage: React.FC<DomainPageProps> = ({
  domainId,
  onBackToHome,
  onSelectOtherDomain,
  rfqList,
  onToggleRfq,
  onSelectProduct,
  onNavigateToContact
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [itemTypeFilter, setItemTypeFilter] = useState<'all' | 'specific' | 'common'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  const domain = useMemo(() => {
    return industryDomainsData.find(d => d.id === domainId) || industryDomainsData[0];
  }, [domainId]);

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

  const DomainIcon = getDomainIcon(domain.iconName);

  // Get all products belonging to this domain
  const specificProducts = useMemo(() => {
    return productsData.filter(p => domain.specificProductIds.includes(p.id));
  }, [domain]);

  const commonProducts = useMemo(() => {
    return productsData.filter(p => domain.commonProductIds.includes(p.id));
  }, [domain]);

  const allDomainProducts = useMemo(() => {
    const allIds = [...domain.specificProductIds, ...domain.commonProductIds];
    return productsData.filter(p => allIds.includes(p.id));
  }, [domain]);

  // Filter products by itemTypeFilter, category, and search query
  const filteredProducts = useMemo(() => {
    let pool: ProductItem[];
    if (itemTypeFilter === 'specific') {
      pool = specificProducts;
    } else if (itemTypeFilter === 'common') {
      pool = commonProducts;
    } else {
      pool = allDomainProducts;
    }

    return pool.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesSpecs = p.specifications.some(s => s.toLowerCase().includes(q));
        const matchesBrand = p.brands.some(b => b.toLowerCase().includes(q));
        if (!matchesName && !matchesTagline && !matchesDesc && !matchesSpecs && !matchesBrand) {
          return false;
        }
      }

      return true;
    });
  }, [itemTypeFilter, selectedCategory, searchQuery, specificProducts, commonProducts, allDomainProducts]);

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in sourcing domain-specific industrial supplies & maintenance spares for "${domain.name}". Please provide catalog pricing, MTC datasheets, and delivery lead time.`
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
  };

  const otherDomains = industryDomainsData.filter(d => d.id !== domain.id);

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-700 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Domains</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onBackToHome} className="hover:text-blue-700">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={onBackToHome} className="hover:text-blue-700">Domains</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{domain.name.split(',')[0]}</span>
          </div>
        </div>

        {/* DOMAIN HEADER BANNER */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
          <div className={`p-6 sm:p-10 bg-gradient-to-r ${domain.gradient} text-white relative`}>
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Domain Info & Standards */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider border border-white/30">
                    <DomainIcon className="w-4 h-4 text-amber-300" />
                    <span>{domain.badge}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-blue-100 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>GST Verified Supply • MTC 3.1 Certificates</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  {domain.name}
                </h1>

                <p className="text-sm sm:text-base text-blue-50 font-normal leading-relaxed max-w-2xl">
                  {domain.description}
                </p>

                {/* Certified Standards & MOC Compliance */}
                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Certified Standards & Material Compliance:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.keyStandards.map((std, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-black/25 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold"
                      >
                        ✓ {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Corridors & Quick Action */}
              <div className="lg:col-span-4 bg-black/30 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/20 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4" />
                  <span>Key Industrial Corridors Served:</span>
                </div>

                <ul className="text-xs text-white/95 space-y-1.5">
                  {domain.hubAreas.map((hub, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-300 font-bold text-sm leading-none">•</span>
                      <span>{hub}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all hover:scale-102 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Claim WhatsApp Quote for {domain.name.split(',')[0]}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Quick Stats Strip */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div>
              <div className="font-black text-slate-900 text-sm sm:text-base">{allDomainProducts.length} Products</div>
              <div className="text-slate-500">Domain Portfolio</div>
            </div>
            <div>
              <div className="font-black text-amber-700 text-sm sm:text-base">{specificProducts.length} Items</div>
              <div className="text-slate-500">Process-Critical</div>
            </div>
            <div>
              <div className="font-black text-emerald-700 text-sm sm:text-base">{commonProducts.length} Items</div>
              <div className="text-slate-500">Common Consumables</div>
            </div>
            <div>
              <div className="font-black text-blue-700 text-sm sm:text-base">100% Genuine</div>
              <div className="text-slate-500">OEM Tested & Warranted</div>
            </div>
          </div>
        </div>

        {/* DOMAIN CATALOG CONTROLS */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-4">
          
          {/* Top Row: Segment Tabs & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Process vs Common Segment Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setItemTypeFilter('all')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  itemTypeFilter === 'all'
                    ? 'bg-[#0a2569] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Spares ({allDomainProducts.length})
              </button>
              <button
                onClick={() => setItemTypeFilter('specific')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  itemTypeFilter === 'specific'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                ⭐ Process-Critical Spares ({specificProducts.length})
              </button>
              <button
                onClick={() => setItemTypeFilter('common')}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  itemTypeFilter === 'common'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                🔧 Common Maintenance Consumables ({commonProducts.length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items in this domain..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Bottom Row: Technical Division Filters */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 mr-1">Division:</span>
            {productCategoriesList.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            {(searchQuery || selectedCategory !== 'all' || itemTypeFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setItemTypeFilter('all');
                }}
                className="ml-auto text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

        </div>

        {/* DOMAIN PRODUCTS GRID */}
        <div>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Curated Spares for <span className="text-[#0a2569]">{domain.name.split(',')[0]}</span> ({filteredProducts.length})
            </h2>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Single-GST Consolidated Invoice Available
            </span>
          </div>

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
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8">
              <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No products match your filter</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try clearing search terms or selecting 'All Spares'.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setItemTypeFilter('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#0a2569] text-white text-xs font-bold hover:bg-blue-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* TURNKEY CAPABILITY BANNER FOR DOMAIN */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a2569] to-blue-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Turnkey Erection, Supply & Annual Maintenance (AMC)
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Need On-Site Installation or Annual Maintenance for {domain.name.split(',')[0]}?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              Unlike pure equipment traders, GSR Engineering Solutions provides certified pipe welding, switchgear retrofitting, and 24/7 breakdown coverage on site.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            Inquire Turnkey Project
          </button>
        </div>

        {/* SWITCH TO OTHER DOMAINS */}
        <div className="pt-4 border-t border-slate-200">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700 mb-4">
            Explore Other Industries:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {otherDomains.map((od) => {
              const OdIcon = getDomainIcon(od.iconName);
              return (
                <button
                  key={od.id}
                  onClick={() => {
                    onSelectOtherDomain(od.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-3.5 rounded-xl bg-white hover:bg-blue-50/80 border border-slate-200 hover:border-blue-400 text-left transition-all shadow-2xs group flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${od.gradient} text-white flex items-center justify-center shrink-0`}>
                      <OdIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 line-clamp-1">
                        {od.name.split(',')[0]}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {od.specificProductIds.length + od.commonProductIds.length} Spares
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
