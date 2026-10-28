import React from 'react';
import { MessageCircle, Phone, ShoppingBag } from 'lucide-react';
import type { RfqItem } from '../types';

interface QuickContactFloatingProps {
  rfqList: RfqItem[];
  onOpenRfq: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ rfqList, onOpenRfq }) => {
  const totalRfqCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating RFQ Cart trigger when items added */}
      {totalRfqCount > 0 && (
        <button
          onClick={onOpenRfq}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 border-2 border-white group"
          title="Review RFQ List"
        >
          <ShoppingBag className="w-4 h-4 text-white" />
          <span>RFQ Cart ({totalRfqCount})</span>
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+918712344439"
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all hover:scale-110 active:scale-95 border-2 border-white"
        title="Call G Sandeep Kumar: +91 8712344439"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/918712344439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20am%20looking%20for%20industrial%20products/services.%20Please%20assist%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 border-2 border-white group"
        title="Chat on WhatsApp (+91 8712344439)"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
