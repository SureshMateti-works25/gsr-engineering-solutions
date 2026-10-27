import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp,
  FileText
} from 'lucide-react';
import type { ProductCategory } from '../types';
import { VisitorCounterWidget } from './VisitorCounterWidget';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenFlyer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onSelectCategory, 
  onNavigateToSection,
  onOpenFlyer 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    if (cat === 'all') {
      window.location.hash = '';
      onSelectCategory('all');
      onNavigateToSection('catalog');
    } else {
      window.location.hash = `#/category/${cat}`;
    }
  };

  return (
    <footer className="bg-[#050b1a] text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-1.5 bg-white rounded-xl flex items-center justify-center shadow-md">
              <img 
                src="./gsr-logo.png" 
                alt="GSR Engineering Solutions Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-white font-black text-base sm:text-lg tracking-tight">
                GSR ENGINEERING SOLUTION'S
              </div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                Building Trust, Delivering Quality
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              GSTIN: 36CTUPG6618J11Z9
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <MapPin className="w-4 h-4" />
              Telangana & Andhra Pradesh
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:+918712444439" 
              className="text-white font-bold hover:text-amber-400 transition-colors"
            >
              Hotline: +91 8712444439
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-base">About GSR Engineering Solutions</h4>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We are a premier industrial supply and field engineering enterprise based in Andhra Pradesh and serving all industrial zones across Telangana and AP. Supplying authentic materials with Mill Test Certificates (MTC) and reliable turnkey maintenance.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div><strong>Proprietor:</strong> G Sandeep Kumar</div>
              <div><strong>Key Sectors:</strong> Steel, Pharma, Heavy Engineering, Power, Cement, Food Processing</div>
              <div><strong>Quality Promise:</strong> 100% Genuine OEM Materials, Verified GST Invoicing</div>
            </div>

            {onOpenFlyer && (
              <div className="pt-2">
                <button
                  onClick={onOpenFlyer}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-900/60 hover:bg-blue-800 text-white text-xs font-bold border border-blue-700 transition-colors"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>View Official Product Poster (62 Items)</span>
                </button>
              </div>
            )}

            {/* Live Visitors Analytics Card */}
            <div className="pt-3 max-w-xs">
              <VisitorCounterWidget variant="card" />
            </div>
          </div>

          {/* Column 2: Product Categories (4 Divisions from Poster) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-[11px] text-sky-400">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleCategoryClick('mechanical-items')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Mechanical Items (18 Items)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('electrical-items')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Electrical Items (18 Items)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('automation-electronics')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Electronics & Automation (15 Items)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('pneumatics-items')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Pneumatics Items - OEM Make (11 Items)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('all')} 
                  className="hover:text-white transition-colors text-left text-amber-400 font-bold"
                >
                  View All 62 Products & Offers →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industrial Services (from Flyer) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-[11px] text-emerald-400">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  AMC (Annual Maintenance Contract)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Machine Maintenance Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Installation & Commissioning Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  On-Site Service & Technical Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left text-rose-400 font-semibold"
                >
                  24/7 Breakdown Service
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contacts & Registered Office */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-[11px] text-amber-400">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a 
                href="tel:+918712444439" 
                className="flex items-center gap-2 hover:text-white transition-colors font-bold text-white"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+91 8712444439</span>
              </a>
              <a 
                href="mailto:sales@gsrengineeringsolutions.com" 
                className="flex items-center gap-2 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">sales@gsrengineeringsolutions.com</span>
              </a>
              <a 
                href="mailto:sandeepkumar@gsrengineeringsolutions.com" 
                className="flex items-center gap-2 hover:text-white transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">sandeepkumar@gsrengineeringsolutions.com</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-300 font-bold">Registered Office:</span>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Ambedkar Veedhi, Tadepalligudem, Andhra Pradesh - 534176, India
                  </p>
                  <p className="text-slate-500 text-[10px] mt-0.5">
                    Service Areas: Telangana & Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} GSR Engineering Solution's. All rights reserved. GSTIN: 36CTUPG6618J11Z9.
          </div>
          
          <div className="flex items-center gap-4">
            <span>Proprietor: <strong className="text-slate-300">G Sandeep Kumar</strong></span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs border border-slate-800"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
