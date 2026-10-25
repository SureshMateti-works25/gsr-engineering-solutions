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

  const getWhatsAppMessage = (prodName: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I need technical details and a quote for: "${prodName}". Please connect with me.`
    );
    return `https://wa.me/918712444439?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              {product.category.replace('-', ' & ')}
            </span>
            <span className="text-xs text-slate-500 font-mono">ID: {product.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
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
              <div className="absolute bottom-3 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm">
                  Genuine Industrial Item
                </span>
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
            <div className="flex flex-wrap gap-2">
              {product.brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 text-xs font-bold text-slate-800 border border-slate-200 inline-flex items-center shadow-xs"
                >
                  <BrandLogo name={brand} size="sm" showText={true} />
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
              <span className="font-bold text-slate-900">Genuine Material Assurance:</span> Supplied with Original Manufacturer Test Certificate (MTC), GST Invoice, and express dispatch across Telangana & AP.
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
