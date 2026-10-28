import React, { useState } from 'react';
import { 
  Check, 
  Plus, 
  MessageCircle, 
  Info, 
  Tag, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Cog, 
  Cpu, 
  Wind, 
  Percent 
} from 'lucide-react';
import type { ProductItem } from '../types';
import { BrandLogo } from './BrandLogo';

interface ProductCardProps {
  product: ProductItem;
  isInRfq: boolean;
  onToggleRfq: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInRfq,
  onToggleRfq,
  onSelectProduct,
}) => {
  const [imgError, setImgError] = useState(false);

  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'mechanical-items':
        return { 
          label: 'Mechanical Items', 
          icon: Cog, 
          badgeColor: 'text-amber-900 bg-amber-50/95 border-amber-300',
          headerGradient: 'from-amber-500 via-orange-500 to-amber-700',
          accentText: 'text-amber-600',
          hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/15',
          bannerBg: 'bg-amber-600',
          tagBg: 'bg-amber-50 text-amber-800 border-amber-200'
        };
      case 'electrical-items':
        return { 
          label: 'Electrical Items', 
          icon: Zap, 
          badgeColor: 'text-blue-900 bg-blue-50/95 border-blue-300',
          headerGradient: 'from-blue-600 via-indigo-600 to-blue-800',
          accentText: 'text-blue-600',
          hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/15',
          bannerBg: 'bg-blue-600',
          tagBg: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'automation-electronics':
        return { 
          label: 'Automation & Electronics', 
          icon: Cpu, 
          badgeColor: 'text-purple-900 bg-purple-50/95 border-purple-300',
          headerGradient: 'from-purple-600 via-indigo-700 to-violet-800',
          accentText: 'text-purple-600',
          hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/15',
          bannerBg: 'bg-purple-600',
          tagBg: 'bg-purple-50 text-purple-700 border-purple-200'
        };
      case 'pneumatics-items':
        return { 
          label: 'Pneumatics Items (OEM)', 
          icon: Wind, 
          badgeColor: 'text-cyan-900 bg-cyan-50/95 border-cyan-300',
          headerGradient: 'from-cyan-600 via-teal-600 to-blue-700',
          accentText: 'text-cyan-600',
          hoverBorder: 'hover:border-cyan-400 hover:shadow-cyan-500/15',
          bannerBg: 'bg-cyan-600',
          tagBg: 'bg-cyan-50 text-cyan-800 border-cyan-200'
        };
      // Fallback for legacy categories
      case 'ss-material':
        return { 
          label: 'SS Material', 
          icon: Layers, 
          badgeColor: 'text-sky-900 bg-sky-50/95 border-sky-300',
          headerGradient: 'from-sky-500 via-blue-600 to-blue-700',
          accentText: 'text-sky-600',
          hoverBorder: 'hover:border-sky-400 hover:shadow-sky-500/15',
          bannerBg: 'bg-sky-600',
          tagBg: 'bg-sky-50 text-sky-700 border-sky-200'
        };
      case 'pharma-material':
        return { 
          label: 'Pharma Material', 
          icon: ShieldCheck, 
          badgeColor: 'text-emerald-900 bg-emerald-50/95 border-emerald-300',
          headerGradient: 'from-emerald-500 via-teal-600 to-emerald-700',
          accentText: 'text-emerald-600',
          hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
          bannerBg: 'bg-emerald-600',
          tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
        };
      default:
        return { 
          label: 'Industrial Item', 
          icon: Cog, 
          badgeColor: 'text-slate-900 bg-slate-100 border-slate-300',
          headerGradient: 'from-blue-600 to-slate-700',
          accentText: 'text-blue-600',
          hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/15',
          bannerBg: 'bg-blue-600',
          tagBg: 'bg-slate-50 text-slate-700 border-slate-200'
        };
    }
  };

  const meta = getCategoryMeta(product.category);
  const IconComponent = meta.icon;

  const getWhatsAppMessage = (prodName: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in inquiring about "${prodName}". Please provide availability and a price quotation.`
    );
    return `https://wa.me/918712344439?text=${text}`;
  };

  return (
    <div className={`group relative bg-white rounded-2xl border border-slate-200 ${meta.hoverBorder} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1`}>
      
      {/* Top Category Color Accent Strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${meta.headerGradient}`} />

      {/* Product Image Header */}
      <div 
        onClick={() => onSelectProduct(product)}
        className="relative w-full h-48 bg-slate-100 overflow-hidden cursor-pointer"
      >
        {product.imageUrl && !imgError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400">
            <IconComponent className="w-12 h-12 mb-2 text-slate-300" />
            <span className="text-xs font-semibold text-slate-500">{product.name}</span>
          </div>
        )}

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Badges Over Image */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-1 pointer-events-none">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border shadow-xs ${meta.badgeColor}`}>
            <IconComponent className="w-3.5 h-3.5" />
            <span>{meta.label}</span>
          </span>

          <div className="flex flex-col items-end gap-1">
            {product.discountBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md animate-pulse">
                <Percent className="w-3 h-3" />
                {product.discountBadge}
              </span>
            )}
            {product.badge && !product.discountBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-xs">
                <Tag className="w-3 h-3" />
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Hover Click Hint */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur px-2.5 py-0.5 rounded-md text-[10px] text-white flex items-center gap-1 shadow-sm">
          <Info className="w-3 h-3 text-blue-400" />
          <span>Click to Inspect</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 pt-3.5 flex-1 flex flex-col justify-between">
        <div>
          <div className={`text-[11px] font-bold tracking-wide uppercase ${meta.accentText}`}>
            {product.subCategory}
          </div>

          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors cursor-pointer mt-1 line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
            {product.tagline}
          </p>

          {/* Quick Specifications preview */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <ul className="text-xs text-slate-600 space-y-1">
              {product.specifications.slice(0, 2).map((spec, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-[11px]">
                  <span className={`w-1.5 h-1.5 rounded-full ${meta.bannerBg} shrink-0`} />
                  <span className="truncate">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Available OEM Brands */}
          <div className="mt-3">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">
              OEM Brands:
            </div>
            <div className="flex flex-wrap gap-1.5 items-center">
              {product.brands.slice(0, 3).map((b, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center justify-center px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200 shadow-2xs h-8 min-w-[80px]"
                >
                  <BrandLogo name={b} size="sm" showText={true} />
                </div>
              ))}
              {product.brands.length > 3 && (
                <span className="text-[10px] text-slate-500 self-center font-semibold">
                  +{product.brands.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelectProduct(product)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-semibold"
            title="View Complete Specifications"
          >
            <Info className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Details</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Quick WhatsApp Quote */}
            <a
              href={getWhatsAppMessage(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors shadow-xs"
              title="Instant WhatsApp Quote for this product"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Add to RFQ Button */}
            <button
              onClick={() => onToggleRfq(product)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                isInRfq
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-900 hover:bg-blue-700 text-white shadow-xs'
              }`}
            >
              {isInRfq ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>RFQ</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
