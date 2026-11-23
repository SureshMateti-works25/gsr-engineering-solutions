import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShoppingBag, 
  Menu, 
  X, 
  ShieldCheck, 
  Layers, 
  Settings, 
  Briefcase,
  Send
} from 'lucide-react';
import type { RfqItem } from '../types';

interface NavbarProps {
  rfqList: RfqItem[];
  onOpenRfq: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenFlyer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  rfqList, 
  onOpenRfq, 
  onNavigateToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalRfqCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Credentials & Contact Bar */}
      <div className="bg-[#0a2569] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Coverage & Verified GST */}
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Serving: <strong className="text-white">TS, AP, TN & Maharashtra</strong></span>
            </span>
            <span className="hidden sm:inline text-blue-400">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-slate-300">GSTIN:</span>
              <span className="font-mono text-white font-bold tracking-wider">36CTUPG6618J11Z9</span>
              <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE
              </span>
            </span>
          </div>

          {/* Right: Phone & Email */}
          <div className="flex items-center space-x-4 text-xs font-semibold">
            <a 
              href="tel:+918712344439" 
              className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 8712344439</span>
            </a>
            <a 
              href="mailto:sales@gsrengineeringsolutions.com" 
              className="hidden md:flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors text-[11px]"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>sales@gsrengineeringsolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Company Name */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 text-left focus:outline-none group shrink-0"
          >
            <div className="h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center p-1 bg-white rounded-xl border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform">
              <img 
                src="./gsr-logo.png" 
                alt="GSR Engineering Solutions Logo" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-black text-base sm:text-lg tracking-tight text-[#0a2569] group-hover:text-blue-700 transition-colors">
                GSR ENGINEERING SOLUTIONS
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block tracking-wider uppercase font-semibold">
                Industrial Supplies & Turnkey Engineering Services
              </p>
            </div>
          </button>

          {/* Clean Desktop Navigation (5 focused links) */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
            <button
              onClick={() => handleNavClick('domains')}
              className="px-3 py-2 rounded-lg text-[#0a2569] bg-blue-50/80 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center gap-1.5 font-bold"
            >
              <Layers className="w-4 h-4 text-blue-700" />
              <span>Industry Domains</span>
            </button>
            <button
              onClick={() => handleNavClick('catalog')}
              className="px-3 py-2 rounded-lg text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              Product Catalog
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="px-3 py-2 rounded-lg text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5 text-slate-500" />
              <span>Installation & AMC</span>
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="px-3 py-2 rounded-lg text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors flex items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-slate-500" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-2 rounded-lg text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2.5">
            {/* RFQ Cart Button */}
            <button
              onClick={onOpenRfq}
              className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all flex items-center gap-2 group shadow-2xs"
              title="View Request For Quote List"
              aria-label="Request For Quote List"
            >
              <ShoppingBag className="w-4.5 h-4.5 text-amber-600 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-slate-700">
                RFQ Cart
              </span>
              {totalRfqCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalRfqCount}
                </span>
              )}
            </button>

            {/* Request Quote Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0a2569] hover:bg-blue-800 shadow-sm shadow-blue-900/20 transition-all hover:scale-102 active:scale-98"
            >
              <Send className="w-3.5 h-3.5 text-amber-300" />
              <span>Get Quote</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('domains')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0a2569] bg-blue-50 border border-blue-200"
          >
            <Layers className="w-4 h-4 text-blue-700" />
            <span>Select by Industry Domain</span>
          </button>
          <button
            onClick={() => handleNavClick('catalog')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <span>Full Product Catalog</span>
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Settings className="w-4 h-4 text-slate-500" />
            <span>Installation, Supply & AMC</span>
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Briefcase className="w-4 h-4 text-slate-500" />
            <span>Executed Projects & Case Studies</span>
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Send className="w-4 h-4 text-slate-500" />
            <span>Contact & RFQ Submission</span>
          </button>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:+918712344439"
              className="w-full py-2.5 px-4 rounded-xl text-center font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 text-xs border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call: +91 8712344439</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 rounded-xl text-center font-bold text-white bg-[#0a2569] hover:bg-blue-800 text-xs shadow-sm"
            >
              Request Price Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
