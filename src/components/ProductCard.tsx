import React, { useState } from 'react';
import { 
  Check, 
  Plus, 
  MessageCircle, 
  Info, 
  Tag, 
  Cog, 
  Zap, 
  Cpu, 
  Wind 
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
      case 'mechanical':
        return { label: 'Mechanical', icon: Cog, color: 'text-amber-800 bg-amber-50/95 border-amber-300' };
      case 'electrical':
        return { label: 'Electrical', icon: Zap, color: 'text-blue-800 bg-blue-50/95 border-blue-300' };
      case 'electronics-automation':
        return { label: 'Automation', icon: Cpu, color: 'text-purple-800 bg-purple-50/95 border-purple-300' };
      case 'pneumatics':
        return { label: 'Pneumatics', icon: Wind, color: 'text-emerald-800 bg-emerald-50/95 border-emerald-300' };
      default:
        return { label: 'Industrial', icon: Cog, color: 'text-slate-800 bg-slate-100 border-slate-300' };
    }
  };

  const meta = getCategoryMeta(product.category);
  const IconComponent = meta.icon;

  const getWhatsAppMessage = (prodName: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in inquiring about "${prodName}". Please provide availability and a price quotation.`
    );
    return `https://wa.me/918712444439?text=${text}`;
  };

  return (
    <div className="group relative bg-white hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
      
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
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border shadow-xs ${meta.color}`}>
            <IconComponent className="w-3.5 h-3.5" />
            <span>{meta.label}</span>
          </span>

          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-xs">
              <Tag className="w-3 h-3" />
              {product.badge}
            </span>
          )}
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
          <div className="text-[11px] text-blue-600 font-bold tracking-wide uppercase">
            {product.subCategory}
          </div>

          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer mt-1 line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Key Specifications preview */}
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Key Specifications:
            </div>
            <ul className="text-xs text-slate-700 space-y-1">
              {product.specifications.slice(0, 2).map((spec, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1 text-[11px]">
                  <span className="text-blue-600 font-bold">•</span>
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
                  className="inline-flex items-center px-2 py-0.5 rounded-lg bg-slate-50 border border-slate-200 shadow-2xs"
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

            {/* Add to RFQ cart */}
            <button
              onClick={() => onToggleRfq(product)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                isInRfq
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20'
              }`}
            >
              {isInRfq ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>In RFQ</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to RFQ</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
