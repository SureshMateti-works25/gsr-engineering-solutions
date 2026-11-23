import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { brandPartnersData } from '../data/brands';
import { BrandLogo } from './BrandLogo';

interface BrandShowcaseProps {
  onSelectBrandForSearch?: (brandName: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = () => {
  return (
    <section id="brands" className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Authorized OEM Brand Sourcing & Supply</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted OEM Partner Brands
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            100% genuine industrial components supplied directly with manufacturer warranties and Original Mill Test Certificates (MTC 3.1).
          </p>
        </div>

        {/* Clean, Uniform Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
          {brandPartnersData.map((brand) => (
            <div
              key={brand.name}
              className="h-18 sm:h-20 bg-slate-50/80 hover:bg-white rounded-xl border border-slate-200/90 hover:border-blue-400 p-2 sm:p-3 flex items-center justify-center transition-all duration-200 hover:shadow-sm shadow-2xs group"
              title={`${brand.name} - ${brand.type}`}
            >
              <BrandLogo 
                name={brand.name} 
                logoUrl={brand.logoUrl} 
                size="md" 
                showText={true} 
              />
            </div>
          ))}
        </div>

        {/* Subtle Trust Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium text-center">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Direct OEM Sourcing & Warranties</span>
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Fast Delivery Across TS, AP, TN & Maharashtra</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Full Material Test Certification (MTC 3.1)</span>
        </div>

      </div>
    </section>
  );
};
