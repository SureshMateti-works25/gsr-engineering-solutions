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
  FileText,
  Sparkles
} from 'lucide-react';
import type { RfqItem } from '../types';

interface NavbarProps {
  rfqList: RfqItem[];
  onOpenRfq: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ rfqList, onOpenRfq, onNavigateToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalRfqCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top Bar for Industrial Credentials & Emergency Contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-blue-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Serving: <strong className="text-white">Telangana & Andhra Pradesh</strong>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              GSTIN: <span className="font-mono text-slate-200">36CTUPG6618J11Z9</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 text-xs">
            <a 
              href="tel:+918712444439" 
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 8712444439</span>
            </a>
            <a 
              href="mailto:sales@gsrengineeringsolutions.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>sales@gsrengineeringsolutions.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <span className="font-black text-xl tracking-tight bg-gradient-to-r from-blue-400 via-white to-amber-400 bg-clip-text text-transparent">
                  GSR
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors">
                  GSR ENGINEERING SOLUTIONS
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block tracking-wider uppercase font-semibold">
                Quality Materials <span className="text-amber-500">•</span> Reliable Service <span className="text-blue-600">•</span> Lasting Solutions
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick('catalog')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              Products Catalog
            </button>
            <button
              onClick={() => handleNavClick('brands')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              OEM Brands
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              Industrial Services
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              Why GSR
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            {/* RFQ Drawer Trigger Button */}
            <button
              onClick={onOpenRfq}
              className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all flex items-center gap-2 group shadow-sm"
              title="View Request For Quote List"
              aria-label="Request For Quote List"
            >
              <ShoppingBag className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Instant Quote</span>
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
            onClick={() => handleNavClick('catalog')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Layers className="w-5 h-5 text-blue-600" />
            Products Catalog
          </button>
          <button
            onClick={() => handleNavClick('brands')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            OEM Brands & Partners
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Settings className="w-5 h-5 text-emerald-600" />
            Industrial Services
          </button>
          <button
            onClick={() => handleNavClick('why-us')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
            Why Choose Us
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <FileText className="w-5 h-5 text-cyan-600" />
            Contact & Quote Inquiry
          </button>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:+918712444439"
              className="w-full py-2.5 px-4 rounded-xl text-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Call G Sandeep Kumar: +91 8712444439
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 rounded-xl text-center font-bold text-white bg-blue-600 hover:bg-blue-700 text-sm shadow-md"
            >
              Request Price Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
