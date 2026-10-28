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
  Sparkles,
  Eye
} from 'lucide-react';
import type { RfqItem } from '../types';
import { VisitorCounterWidget } from './VisitorCounterWidget';

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
  onOpenFlyer
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalRfqCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top Bar for Industrial Credentials & Emergency Contact */}
      <div className="bg-[#0a2569] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <span className="flex items-center gap-1.5 text-blue-200 font-medium text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Serving: <strong className="text-white">Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra</strong>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/70 border border-emerald-500/50 px-2.5 py-0.5 rounded-full text-emerald-300 text-[11px] sm:text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>GSTIN:</span>
              <span className="font-mono text-white font-bold tracking-wider">36CTUPG6618J11Z9</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[9px] uppercase tracking-wider gst-active-blink flex items-center gap-1">
                ● ACTIVE VERIFIED
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 text-xs">
            {/* Live Visitor Counter */}
            <div className="hidden sm:block">
              <VisitorCounterWidget variant="compact" />
            </div>

            <a 
              href="tel:+918712344439" 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+91 8712344439</span>
            </a>
            <a 
              href="mailto:sales@gsrengineeringsolutions.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-300 transition-colors text-blue-100"
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
          
          {/* Official Logo Branding */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 text-left focus:outline-none group"
          >
            <div className="h-12 w-auto flex items-center justify-center p-1 bg-white rounded-xl border border-slate-200/80 shadow-xs group-hover:scale-105 transition-transform">
              <img 
                src="./gsr-logo.png" 
                alt="GSR Engineering Solutions Official Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-[#0a2569] group-hover:text-blue-700 transition-colors">
                  GSR ENGINEERING SOLUTION'S
                </span>
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block tracking-wider uppercase font-bold">
                Building Trust, Delivering Quality <span className="text-amber-500">•</span> Proprietor: G Sandeep Kumar
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick('domains')}
              className="px-3 py-2 rounded-lg text-sm font-bold text-[#0a2569] bg-blue-50/80 hover:bg-blue-100 border border-blue-200/80 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>By Industry</span>
            </button>
            <button
              onClick={() => handleNavClick('catalog')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              Products Catalog
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Projects & Case Studies</span>
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              Installation & AMC
            </button>
            <button
              onClick={() => handleNavClick('brands')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              OEM Brands
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              Why GSR
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0a2569] hover:bg-slate-100 transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2.5">
            {/* View Official Flyer Button */}
            {onOpenFlyer && (
              <button
                onClick={onOpenFlyer}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#0a2569] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all shadow-xs"
                title="View Official Product Catalogue Flyer"
              >
                <Eye className="w-3.5 h-3.5 text-amber-500" />
                <span>View Flyer</span>
              </button>
            )}

            {/* RFQ Drawer Trigger Button */}
            <button
              onClick={onOpenRfq}
              className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all flex items-center gap-2 group shadow-xs"
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
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0a2569] hover:bg-blue-800 shadow-md shadow-blue-900/20 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
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
          {onOpenFlyer && (
            <button
              onClick={() => {
                onOpenFlyer();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-bold text-[#0a2569] bg-blue-50 border border-blue-200"
            >
              <Eye className="w-5 h-5 text-amber-500" />
              <span>View Official Product Flyer</span>
            </button>
          )}
          <button
            onClick={() => handleNavClick('domains')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-bold text-[#0a2569] bg-blue-50 hover:bg-blue-100 border border-blue-200"
          >
            <Layers className="w-5 h-5 text-blue-700" />
            By Industry Domain
          </button>
          <button
            onClick={() => handleNavClick('catalog')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Layers className="w-5 h-5 text-blue-600" />
            Products Catalog
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100 border border-emerald-200"
          >
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Projects & Case Studies (Supply + Install)
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Settings className="w-5 h-5 text-blue-600" />
            Turnkey Services & AMC
          </button>
          <button
            onClick={() => handleNavClick('brands')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            OEM Brands & Partners
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
            <div className="py-1 flex justify-center">
              <VisitorCounterWidget variant="badge" />
            </div>
            <a
              href="tel:+918712344439"
              className="w-full py-2.5 px-4 rounded-xl text-center font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-2 text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Call G Sandeep Kumar: +91 8712344439
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 px-4 rounded-xl text-center font-bold text-white bg-[#0a2569] hover:bg-blue-800 text-sm shadow-md"
            >
              Request Price Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
