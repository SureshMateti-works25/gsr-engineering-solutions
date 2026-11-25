import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Phone, 
  ShoppingBag, 
  Menu, 
  X, 
  Layers, 
  Award,
  ChevronRight,
  Pill,
  FlaskConical,
  Utensils,
  Factory,
  Cpu,
  Droplets
} from 'lucide-react';
import type { RfqItem } from '../types';
import { industryDomainsData } from '../data/domains';

interface QuickContactFloatingProps {
  rfqList: RfqItem[];
  onOpenRfq: () => void;
  onSelectDomain?: (domainId: string) => void;
  onNavigatePage?: (pageRoute: string) => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ 
  rfqList, 
  onOpenRfq,
  onSelectDomain,
  onNavigatePage
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const totalRfqCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

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

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-3 pointer-events-auto font-sans">
      {/* Floating RFQ Cart trigger when items added */}
      {totalRfqCount > 0 && (
        <button
          onClick={onOpenRfq}
          className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 border-2 border-white group"
          title="Review RFQ List"
        >
          <ShoppingBag className="w-4 h-4 text-white" />
          <span>RFQ Cart ({totalRfqCount})</span>
        </button>
      )}

      {/* Floating Industries Menu & Blinking Hamburger Trigger */}
      <div ref={menuRef} className="relative">
        {/* Industries Popup Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-x-3 bottom-24 sm:static sm:absolute sm:bottom-14 sm:right-0 mb-2 sm:w-84 max-w-[calc(100vw-1.5rem)] sm:max-w-none bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-3 space-y-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 px-1">
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-black uppercase tracking-wider text-[#0a2569]">
                  Select Industry
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close Industries Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1 max-h-[50vh] sm:max-h-[55vh] overflow-y-auto pr-0.5">
              {industryDomainsData.map((d) => {
                const Icon = getDomainIcon(d.iconName);
                return (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDomain?.(d.id);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-xl hover:bg-blue-50/80 transition-all flex items-center justify-between group border border-transparent hover:border-blue-200"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${d.gradient} text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 truncate">
                          {d.name.split(',')[0]}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {d.badge}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  onSelectDomain?.('domains');
                  setIsMenuOpen(false);
                }}
                className="w-full py-1.5 text-center text-xs font-extrabold text-[#0a2569] hover:text-blue-800 hover:underline"
              >
                View All Industries Hub →
              </button>
            </div>
          </div>
        )}

        {/* Highlighting Blinks Always Hamburger Button */}
        <div className="relative">
          {/* Always-Blinking Animated Halo Ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-75 blur-xs animate-pulse pointer-events-none"></span>

          {/* Persistent Blinking Beacon Dot */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4 z-20 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-90"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white shadow-xs"></span>
          </span>

          {/* Quick Label Badge (Visible on desktop/tablet to prevent mobile screen obstruction) */}
          {!isMenuOpen && (
            <button
              onClick={() => setIsMenuOpen(true)}
              className="hidden sm:flex absolute right-14 top-1/2 -translate-y-1/2 bg-[#0a2569] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-lg border border-amber-300 whitespace-nowrap items-center gap-1.5 hover:bg-blue-900 transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Industries</span>
            </button>
          )}

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a2569] hover:bg-blue-800 text-white flex items-center justify-center shadow-xl shadow-blue-950/40 transition-all hover:scale-110 active:scale-95 border-2 border-amber-400 group z-10"
            title="Browse Industries Menu"
            aria-label="Browse Industries Menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-amber-300 transition-transform rotate-90 duration-200" />
            ) : (
              <Menu className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Floating OEM Brands Button (Below Industries Button, Above Call Button) */}
      <div className="relative group">
        {/* Quick Label Badge (Visible on desktop/tablet to prevent mobile screen obstruction) */}
        <button
          onClick={() => {
            if (onNavigatePage) {
              onNavigatePage('brands');
            } else {
              window.location.hash = '#/brands';
            }
          }}
          className="hidden sm:flex absolute right-14 top-1/2 -translate-y-1/2 bg-[#0a2569] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-lg border border-amber-300 whitespace-nowrap items-center gap-1.5 hover:bg-blue-900 transition-colors cursor-pointer"
        >
          <Award className="w-3.5 h-3.5 text-amber-300" />
          <span>OEM Brands</span>
        </button>

        {/* Circular Floating Button */}
        <button
          onClick={() => {
            if (onNavigatePage) {
              onNavigatePage('brands');
            } else {
              window.location.hash = '#/brands';
            }
          }}
          className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a2569] hover:bg-blue-900 text-white flex items-center justify-center shadow-xl shadow-blue-950/40 transition-all hover:scale-110 active:scale-95 border-2 border-amber-400 group z-10"
          title="Authorized OEM Partner Brands"
          aria-label="Authorized OEM Partner Brands"
        >
          <Award className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:+918712344439"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-all hover:scale-110 active:scale-95 border-2 border-white"
        title="Call G Sandeep Kumar: +91 8712344439"
      >
        <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
      </a>

      {/* Floating WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/918712344439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20am%20looking%20for%20industrial%20products/services.%20Please%20assist%20me."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-all hover:scale-110 active:scale-95 border-2 border-white group"
        title="Chat on WhatsApp (+91 8712344439)"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border border-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};
