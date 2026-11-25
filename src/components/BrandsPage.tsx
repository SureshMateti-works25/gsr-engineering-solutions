import React, { useState, useMemo } from 'react';
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
  Send
} from 'lucide-react';
import { brandPartnersData } from '../data/brands';
import { BrandLogo } from './BrandLogo';

interface BrandsPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
  onSelectBrandForSearch?: (brandName: string) => void;
}

type CategoryTab = 'all' | 'electrical' | 'pneumatics' | 'mechanical';

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onBackToHome,
  onNavigateToContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleWhatsAppBrand = (brandName: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am inquiring about wholesale pricing, availability, and MTC certificates for ${brandName} components. Please assist.`
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
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
      <div className="bg-white border-b border-slate-200 sticky top-16 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 font-bold text-[#0a2569] hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">Authorized OEM Brands</span>
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a2569] text-white hover:bg-blue-900 text-xs font-bold transition-colors"
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
            100% genuine industrial spares sourced directly from Tier-1 global manufacturers. Supplied with manufacturer warranties and Original Mill Test Certificates (MTC 3.1).
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
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#0a2569] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Brands ({counts.all})
              </button>
              <button
                onClick={() => setSelectedCategory('electrical')}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
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
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
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
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Brands Grid */}
        {filteredBrands.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <Award className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching OEM brands found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We source hundreds of specialized OEM spares. Contact our engineering desk directly for brands not listed here.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBrands.map((brand) => {
              const catBadge = getCategoryBadge(brand.category);
              const CatIcon = catBadge.icon;

              return (
                <div
                  key={brand.name}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-300 p-5 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Logo + Category Pill */}
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="h-16 w-36 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100 shrink-0 group-hover:scale-102 transition-transform">
                        <BrandLogo
                          name={brand.name}
                          logoUrl={brand.logoUrl}
                          size="md"
                          showText={true}
                        />
                      </div>
                      
                      <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${catBadge.color} shrink-0`}>
                        <CatIcon className="w-3 h-3" />
                        <span>{brand.category.toUpperCase()}</span>
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

                  {/* Actions Bar */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleWhatsAppBrand(brand.name)}
                      className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-emerald-200/60"
                      title={`Chat on WhatsApp for ${brand.name} spares`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Inquire {brand.name.split(' ')[0]}</span>
                    </button>

                    <button
                      onClick={onNavigateToContact}
                      className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 text-xs font-bold transition-colors border border-slate-200"
                      title="Request official quotation"
                    >
                      Quote
                    </button>
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
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 border border-white/20"
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
