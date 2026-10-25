import React from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  Plus, 
  Minus
} from 'lucide-react';
import type { RfqItem } from '../types';

interface RfqDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  rfqList: RfqItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
  onProceedToForm: () => void;
}

export const RfqDrawer: React.FC<RfqDrawerProps> = ({
  isOpen,
  onClose,
  rfqList,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onProceedToForm
}) => {
  if (!isOpen) return null;

  const totalCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Generate WhatsApp message with all RFQ items
  const generateWhatsAppRfq = () => {
    let msg = `*GSR Engineering Solutions - RFQ Inquiry*\n`;
    msg += `----------------------------------------\n`;
    msg += `I would like to request a quotation for the following items:\n\n`;

    rfqList.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   - Category: ${item.product.category}\n`;
      msg += `   - Quantity: ${item.quantity || 1} units\n`;
      msg += `   - OEM Brands: ${item.product.brands.slice(0, 3).join(', ')}\n\n`;
    });

    msg += `Please reply with best prices, lead time, and GST terms.\n`;
    msg += `Thank you!`;

    return `https://wa.me/918712444439?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">Request For Quote (RFQ)</h3>
              <p className="text-xs text-slate-500 font-medium">
                {rfqList.length} unique items ({totalCount} total qty)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {rfqList.length > 0 ? (
            <>
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
                <span className="font-semibold">Selected Materials / Spares</span>
                <button
                  onClick={onClearAll}
                  className="text-red-600 hover:text-red-700 font-medium transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>

              {rfqList.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-blue-600 font-semibold">
                        {item.product.subCategory}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 hover:text-red-600 transition-colors p-1"
                      title="Remove Item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-600 font-semibold">Est. Quantity:</span>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-300 shadow-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, (item.quantity || 1) - 1))}
                        className="p-0.5 text-slate-500 hover:text-slate-900"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-900 min-w-[24px] text-center">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, (item.quantity || 1) + 1)}
                        className="p-0.5 text-slate-500 hover:text-slate-900"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700">
                <span className="font-bold text-blue-700">Pro-Tip:</span> Once submitted, Sandeep Kumar will respond with wholesale OEM rates and estimated delivery times within 2 business hours.
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <ShoppingBag className="w-12 h-12 text-slate-300 mb-3" />
              <h4 className="text-base font-bold text-slate-800">Your RFQ Cart is Empty</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs font-normal">
                Browse our Mechanical, Electrical, Automation, or Pneumatics catalog and click "Add to RFQ" to request pricing.
              </p>
              <button
                onClick={onClose}
                className="mt-5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm"
              >
                Explore Products Now
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {rfqList.length > 0 && (
          <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
            <a
              href={generateWhatsAppRfq()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send RFQ Directly on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onProceedToForm();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Fill Formal Quotation Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
