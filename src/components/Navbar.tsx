import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Layers, 
  Settings, 
  Briefcase, 
  Send, 
  FileText, 
  ChevronDown,
  Pill,
  FlaskConical,
  Utensils,
  Factory,
  Cpu,
  Droplets,
  ArrowRight,
  Award,
  Phone,
  MessageCircle
} from 'lucide-react';
import type { RfqItem } from '../types';
import { industryDomainsData } from '../data/domains';

interface NavbarProps {
  rfqList: RfqItem[];
  onOpenRfq: () => void;
  onNavigateToPage: (page: string) => void;
  activePage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  rfqList, 
  onOpenRfq, 
  onNavigateToPage,
  activePage = 'home'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainsDropdownOpen, setDomainsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalRfqCount = rfqList.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handlePageClick = (pageRoute: string) => {
    onNavigateToPage(pageRoute);
    setMobileMenuOpen(false);
    setDomainsDropdownOpen(false);
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDomainsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDomainsActive = activePage === 'domains' || activePage === 'domain';
  const isServicesActive = activePage === 'services';
  const isProjectsActive = activePage === 'projects';
  const isContactActive = activePage === 'contact';
  const isFlyerActive = activePage === 'flyer';

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs font-sans">
      
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Company Name */}
          <button 
            onClick={() => handlePageClick('home')} 
            className="flex items-center space-x-2 sm:space-x-3 text-left focus:outline-none group min-w-0 flex-1 sm:flex-initial"
          >
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center p-0.5 bg-white rounded-xl border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img 
                src="./gsr-logo.png?v=20261125-v2" 
                alt="GSR Engineering Solutions Logo" 
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="min-w-0 pr-1">
              <div className="font-black text-xs sm:text-base md:text-lg tracking-tight text-[#0a2569] group-hover:text-blue-700 transition-colors leading-tight truncate sm:whitespace-normal">
                GSR ENGINEERING SOLUTIONS
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block tracking-wider uppercase font-semibold">
                Industrial Supplies & Turnkey Engineering Services
              </p>
            </div>
          </button>

          {/* FOCUSED INDIVIDUAL PAGE LINKS (HYTORC-Style: Domain, Services, Projects, Contact, Flyer) */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-sm">
            
            {/* 1. DOMAIN (With interactive sector flyout dropdown + Direct Domains Page) */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDomainsDropdownOpen(true)}
              onMouseLeave={() => setDomainsDropdownOpen(false)}
            >
              <button
                onClick={() => handlePageClick('domains')}
                className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 font-bold ${
                  isDomainsActive
                    ? 'text-[#0a2569] bg-blue-50 border border-blue-200/80 shadow-2xs'
                    : 'text-slate-700 hover:text-[#0a2569] hover:bg-slate-100'
                }`}
                aria-expanded={domainsDropdownOpen}
              >
                <Layers className={`w-4 h-4 ${isDomainsActive ? 'text-[#0a2569]' : 'text-slate-500'}`} />
                <span>Industry</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${domainsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Domains Dropdown Flyout */}
              {domainsDropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>Industry Pages:</span>
                    <button 
                      onClick={() => handlePageClick('domains')}
                      className="text-blue-700 hover:underline"
                    >
                      All Industries →
                    </button>
                  </div>
                  <div className="py-1 space-y-1">
                    {industryDomainsData.map((d) => {
                      const Icon = getDomainIcon(d.iconName);
                      return (
                        <button
                          key={d.id}
                          onClick={() => handlePageClick(`domain/${d.id}`)}
                          className="w-full text-left p-2 rounded-xl hover:bg-blue-50/80 transition-colors flex items-center gap-2.5 group"
                        >
                          <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${d.gradient} text-white flex items-center justify-center shrink-0 shadow-2xs`}>
                            <Icon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 truncate">
                              {d.name.split(',')[0]}
                            </div>
                            <div className="text-[10px] text-slate-500 truncate">
                              {d.badge}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => handlePageClick('domains')}
                      className="w-full text-center py-1.5 text-xs font-extrabold text-[#0a2569] hover:text-blue-800 hover:underline flex items-center justify-center gap-1"
                    >
                      <span>Explore All Industries</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. SERVICES PAGE */}
            <button
              onClick={() => handlePageClick('services')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                isServicesActive
                  ? 'text-[#0a2569] bg-blue-50 border border-blue-200/80 font-bold shadow-2xs'
                  : 'text-slate-700 hover:text-[#0a2569] hover:bg-slate-100'
              }`}
            >
              <Settings className={`w-4 h-4 ${isServicesActive ? 'text-[#0a2569]' : 'text-slate-500'}`} />
              <span>Services</span>
            </button>

            {/* 3. PROJECTS PAGE */}
            <button
              onClick={() => handlePageClick('projects')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                isProjectsActive
                  ? 'text-[#0a2569] bg-blue-50 border border-blue-200/80 font-bold shadow-2xs'
                  : 'text-slate-700 hover:text-[#0a2569] hover:bg-slate-100'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${isProjectsActive ? 'text-[#0a2569]' : 'text-slate-500'}`} />
              <span>Projects</span>
            </button>

            {/* 4. CONTACT PAGE */}
            <button
              onClick={() => handlePageClick('contact')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                isContactActive
                  ? 'text-[#0a2569] bg-blue-50 border border-blue-200/80 font-bold shadow-2xs'
                  : 'text-slate-700 hover:text-[#0a2569] hover:bg-slate-100'
              }`}
            >
              <Send className={`w-4 h-4 ${isContactActive ? 'text-[#0a2569]' : 'text-slate-500'}`} />
              <span>Contact</span>
            </button>

            {/* 5. FLYER PAGE */}
            <button
              onClick={() => handlePageClick('flyer')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 font-bold ${
                isFlyerActive
                  ? 'text-[#0a2569] bg-amber-100 border border-amber-300 shadow-2xs'
                  : 'text-[#0a2569] bg-amber-50 hover:bg-amber-100/80 border border-amber-200/80'
              }`}
              title="Open Official Product Catalogue Flyer Page"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Flyer</span>
            </button>

          </nav>

          {/* Action CTAs: RFQ Cart + Mobile Menu Toggle */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            {/* RFQ Cart Button */}
            <button
              onClick={onOpenRfq}
              className="relative p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-all flex items-center gap-1.5 sm:gap-2 group shadow-2xs cursor-pointer"
              title="View Request For Quote List"
              aria-label="Request For Quote List"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-600 group-hover:scale-110 transition-transform" />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-wider text-slate-700">
                RFQ Cart
              </span>
              {totalRfqCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-[10px] sm:text-[11px] w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalRfqCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none border border-slate-200 shadow-2xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5 sm:w-6 sm:h-6" /> : <Menu className="w-5.5 h-5.5 sm:w-6 sm:h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Focused individual page links) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2.5 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {/* 1. Industries Hub */}
          <button
            onClick={() => handlePageClick('domains')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold ${
              isDomainsActive
                ? 'text-[#0a2569] bg-blue-50 border border-blue-200 shadow-xs'
                : 'text-slate-800 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-blue-700" />
              <span>Industries Hub Page</span>
            </div>
            <span className="text-[10px] font-black uppercase text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md">
              6 Sectors →
            </span>
          </button>

          {/* Sub-grid of 6 industries */}
          <div className="pl-1 pr-1 py-1 grid grid-cols-2 gap-1.5">
            {industryDomainsData.map((d) => (
              <button
                key={d.id}
                onClick={() => handlePageClick(`domain/${d.id}`)}
                className="text-left py-2 px-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 transition-colors truncate border border-slate-200/80 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                <span className="truncate">{d.name.split(',')[0]}</span>
              </button>
            ))}
          </div>

          {/* 2. OEM Partner Brands */}
          <button
            onClick={() => handlePageClick('brands')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold ${
              activePage === 'brands'
                ? 'text-[#0a2569] bg-blue-50 border border-blue-200 shadow-xs'
                : 'text-slate-800 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Authorized OEM Partner Brands</span>
            </div>
            <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded-md">
              27+ Brands
            </span>
          </button>

          {/* 3. Services */}
          <button
            onClick={() => handlePageClick('services')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              isServicesActive ? 'text-[#0a2569] bg-blue-50 border border-blue-200 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Settings className="w-4 h-4 text-slate-500" />
            <span>Services (Turnkey Installation & AMC)</span>
          </button>

          {/* 4. Projects */}
          <button
            onClick={() => handlePageClick('projects')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              isProjectsActive ? 'text-[#0a2569] bg-blue-50 border border-blue-200 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Briefcase className="w-4 h-4 text-slate-500" />
            <span>Projects & Plant Track Record</span>
          </button>

          {/* 5. Flyer */}
          <button
            onClick={() => handlePageClick('flyer')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold ${
              isFlyerActive ? 'text-[#0a2569] bg-amber-100 border border-amber-300' : 'text-[#0a2569] bg-amber-50 border border-amber-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Master Product Flyer / Catalogue</span>
            </div>
            <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded">
              PDF / HD
            </span>
          </button>

          {/* 6. Contact */}
          <button
            onClick={() => handlePageClick('contact')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
              isContactActive ? 'text-[#0a2569] bg-blue-50 border border-blue-200 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Send className="w-4 h-4 text-slate-500" />
            <span>Contact & RFQ Quotation Desk</span>
          </button>

          {/* Mobile Quick Action Buttons */}
          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <a
              href="tel:+918712344439"
              className="py-2.5 px-3 rounded-xl bg-blue-50 text-blue-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-blue-200"
            >
              <Phone className="w-3.5 h-3.5 text-blue-700" />
              <span>Call Direct</span>
            </a>
            <a
              href="https://wa.me/918712344439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20need%20product%20details%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
