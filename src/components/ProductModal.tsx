import React from 'react';
import { 
  X, 
  Check, 
  Plus, 
  MessageCircle, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import type { ProductItem } from '../types';
import { BrandLogo } from './BrandLogo';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  isInRfq: boolean;
  onToggleRfq: (product: ProductItem) => void;
  onQuickInquire: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isInRfq,
  onToggleRfq,
  onQuickInquire
}) => {
  if (!product) return null;

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'mechanical-items':
        return {
          label: 'Mechanical Items',
          gradient: 'from-amber-500 via-orange-500 to-amber-700',
          accentColor: 'text-amber-600',
          borderAccent: 'border-amber-300',
          badgeBg: 'bg-amber-50 text-amber-800 border-amber-300'
        };
      case 'electrical-items':
        return {
          label: 'Electrical Items',
          gradient: 'from-blue-600 via-indigo-600 to-blue-800',
          accentColor: 'text-blue-600',
          borderAccent: 'border-blue-300',
          badgeBg: 'bg-blue-50 text-blue-800 border-blue-300'
        };
      case 'automation-electronics':
        return {
          label: 'Automation & Electronics',
          gradient: 'from-purple-600 via-indigo-700 to-violet-800',
          accentColor: 'text-purple-600',
          borderAccent: 'border-purple-300',
          badgeBg: 'bg-purple-50 text-purple-800 border-purple-300'
        };
      case 'pneumatics-items':
        return {
          label: 'Pneumatics Items (OEM)',
          gradient: 'from-cyan-600 via-teal-600 to-blue-700',
          accentColor: 'text-cyan-600',
          borderAccent: 'border-cyan-300',
          badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-300'
        };
      // Fallback
      case 'ss-material':
        return {
          label: 'SS Material',
          gradient: 'from-sky-600 via-blue-600 to-blue-800',
          accentColor: 'text-sky-600',
          borderAccent: 'border-sky-300',
          badgeBg: 'bg-sky-50 text-sky-800 border-sky-300'
        };
      case 'pharma-material':
        return {
          label: 'Pharma Material',
          gradient: 'from-emerald-600 via-teal-600 to-emerald-800',
          accentColor: 'text-emerald-600',
          borderAccent: 'border-emerald-300',
          badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-300'
        };
      default:
        return {
          label: 'Industrial Item',
          gradient: 'from-slate-900 via-blue-900 to-slate-900',
          accentColor: 'text-blue-600',
          borderAccent: 'border-blue-300',
          badgeBg: 'bg-blue-50 text-blue-800 border-blue-300'
        };
    }
  };

  const theme = getCategoryTheme(product.category);

  const getWhatsAppMessage = (prodName: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I need technical details and a quote for: "${prodName}". Please connect with me.`
    );
    return `https://wa.me/918712344439?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Category Matching Gradient */}
        <div className={`px-6 py-4 bg-gradient-to-r ${theme.gradient} text-white flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="h-9 w-auto bg-white p-1 rounded-lg flex items-center justify-center shadow-xs">
              <img src="./gsr-logo.png" alt="GSR Logo" className="h-7 w-auto object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-black/20 text-white px-2.5 py-0.5 rounded-full border border-white/20">
                  {theme.label}
                </span>
                <span className="text-[11px] text-white/80 font-mono">#{product.id}</span>
              </div>
              <p className="text-[11px] text-white/90 font-medium">
                GSR Engineering Solution's • Official Catalogue
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Large Product Image Preview */}
          {product.imageUrl && (
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm">
                  Genuine Industrial Item
                </span>
                {product.discountBadge && (
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-600 text-white shadow-md animate-pulse">
                    Special Offer: {product.discountBadge}
                  </span>
                )}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-black text-slate-900">{product.name}</h2>
            <p className="text-sm font-semibold text-blue-600 mt-1">{product.tagline}</p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              Technical Specifications & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* OEM Brands Available */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-600" />
              Available OEM Brands & Manufacturers
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {product.brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white text-xs font-bold text-slate-800 border-2 border-slate-200 inline-flex items-center shadow-xs"
                >
                  <BrandLogo name={brand} size="md" showText={true} />
                </div>
              ))}
            </div>
          </div>

          {/* Typical Industrial Applications */}
          {product.applications && product.applications.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Typical Applications & Industries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded text-xs bg-slate-100 text-slate-600 border border-slate-200 font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quality & Delivery Assurance */}
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
            <div className="text-xs text-slate-700">
              <span className="font-bold text-slate-900">Genuine Material Assurance:</span> Supplied with Original Manufacturer Test Certificate (MTC), GST Invoice, and express dispatch across Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onToggleRfq(product)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isInRfq
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-xs'
            }`}
          >
            {isInRfq ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to RFQ Cart</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to RFQ List</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppMessage(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Quote</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onQuickInquire(product);
              }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
            >
              Inquire via Contact Form
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
