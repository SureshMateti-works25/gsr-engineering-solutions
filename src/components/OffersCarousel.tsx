import React, { useState, useEffect, useRef } from 'react';
import { 
  Tag, 
  Clock, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  MessageCircle, 
  Percent,
  ShieldCheck,
  Gift
} from 'lucide-react';
import type { OfferItem, ProductCategory } from '../types';
import { offersData } from '../data/offers';

interface OffersCarouselProps {
  onSelectCategory: (category: ProductCategory) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const OffersCarousel: React.FC<OffersCarouselProps> = ({
  onSelectCategory,
  onNavigateToSection
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalOffers = offersData.length;

  // Auto-play timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalOffers);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalOffers]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalOffers);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalOffers) % totalOffers);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const handleShopCategory = (cat: ProductCategory) => {
    onSelectCategory(cat);
    onNavigateToSection('catalog');
  };

  const currentOffer = offersData[currentIndex];

  const getWhatsAppOfferLink = (offer: OfferItem) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I would like to claim the special offer "${offer.title}" (Coupon Code: ${offer.couponCode}). Please provide discounted pricing and availability.`
    );
    return `https://wa.me/918712344439?text=${text}`;
  };

  return (
    <section 
      id="offers"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-10 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Live Offers Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20 text-xs font-black uppercase tracking-wider mb-1">
              <Gift className="w-3.5 h-3.5" />
              Special Industrial Deals & Project Discounts
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              Featured Offers & Contractor Pricing
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-600 text-white animate-pulse">
                Live Now
              </span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold mr-1">
              Offer {currentIndex + 1} of {totalOffers}
            </span>
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 shadow-xs transition-all active:scale-95"
              aria-label="Previous Offer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 shadow-xs transition-all active:scale-95"
              aria-label="Next Offer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slide Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-blue-900/10 bg-gradient-to-r from-[#0a2569] via-[#0d348a] to-[#1e40af] text-white">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 items-center">
            
            {/* Offer Text Details (Cols 1-7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 shadow-xs uppercase tracking-wide">
                  <Percent className="w-3.5 h-3.5" />
                  {currentOffer.badge}
                </span>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  {currentOffer.validUntil}
                </span>

                <span className="text-xs font-medium text-blue-200">
                  Category: <strong className="text-white">{currentOffer.targetCategoryLabel}</strong>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {currentOffer.title}
              </h3>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
                {currentOffer.description}
              </p>

              {/* Coupon Code Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="flex items-center bg-black/30 border border-white/20 rounded-xl px-3 py-1.5 shadow-inner">
                  <Tag className="w-4 h-4 text-amber-300 mr-2" />
                  <span className="text-xs text-blue-200 mr-2">Promo Code:</span>
                  <span className="font-mono font-black text-sm text-amber-300 tracking-wider">
                    {currentOffer.couponCode}
                  </span>
                  <button
                    onClick={() => handleCopyCode(currentOffer.couponCode)}
                    className="ml-3 p-1 rounded hover:bg-white/20 transition-colors text-white"
                    title="Copy Coupon Code"
                  >
                    {copiedCode === currentOffer.couponCode ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-blue-200" />
                    )}
                  </button>
                </div>

                {copiedCode === currentOffer.couponCode && (
                  <span className="text-xs text-emerald-300 font-bold animate-in fade-in">
                    ✓ Code copied!
                  </span>
                )}
              </div>

              {/* Trust Highlight */}
              <div className="flex items-center gap-2 text-xs text-amber-200/90 font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{currentOffer.highlightText}</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={getWhatsAppOfferLink(currentOffer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Claim via WhatsApp (+91 8712344439)</span>
                </a>

                <button
                  onClick={() => handleShopCategory(currentOffer.category)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
                >
                  <span>Explore {currentOffer.targetCategoryLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Offer Product Graphic / Badge Box (Cols 8-12) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm rounded-2xl p-4 bg-white/95 backdrop-blur-sm border-2 border-amber-400 shadow-2xl flex flex-col items-center text-center">
                
                {/* Big Discount Stamp */}
                <div className="absolute -top-3.5 -right-3.5 bg-gradient-to-r from-rose-600 to-amber-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg border-2 border-white transform rotate-3">
                  {currentOffer.discount}
                </div>

                {/* Product Picture from PPT */}
                <div className="w-full h-48 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden flex items-center justify-center p-2 mb-3">
                  <img
                    src={currentOffer.imageUrl}
                    alt={currentOffer.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="font-extrabold text-sm text-slate-900 line-clamp-1">
                  {currentOffer.title}
                </div>
                <div className="text-xs text-blue-700 font-bold mt-0.5">
                  GSR ENGINEERING SOLUTION'S
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Proprietor: G Sandeep Kumar • <span className="inline-flex items-center gap-1 text-emerald-600 font-bold"><span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span></span><span className="gst-active-blink">● Active Verified GST</span></span>
                </div>
              </div>
            </div>

          </div>

          {/* Dots Navigation Bar */}
          <div className="px-6 py-3 bg-black/20 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-blue-200">
              *Offers applicable on commercial, contractor & project inquiries across Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra.
            </span>
            <div className="flex items-center gap-1.5">
              {offersData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx 
                      ? 'w-6 bg-amber-400' 
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
