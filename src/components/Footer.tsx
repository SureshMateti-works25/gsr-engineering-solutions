import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp
} from 'lucide-react';
import type { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: ProductCategory) => {
    onSelectCategory(cat);
    onNavigateToSection('catalog');
  };

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
              GSR
            </div>
            <div>
              <div className="text-white font-bold text-base">GSR ENGINEERING SOLUTIONS</div>
              <div className="text-xs text-slate-400">Quality Materials. Reliable Service. Lasting Solutions.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              GSTIN: 36CTUPG6618J11Z9
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <MapPin className="w-4 h-4" />
              Telangana & Andhra Pradesh
            </span>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:+918712444439" 
              className="text-white font-semibold hover:text-blue-400 transition-colors"
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
              We are a trusted supplier of Mechanical, Electrical, Electronics, Pneumatics & Industrial Automation materials and provider of Maintenance services for industrial requirements across Hyderabad, Secunderabad, Vizag, and the entire two Telugu states.
            </p>
            <div className="pt-2 text-xs text-slate-300 space-y-1.5">
              <div><strong>Proprietor:</strong> G Sandeep Kumar</div>
              <div><strong>Core Sectors:</strong> Heavy Engineering, Steel, Pharma, Power, Cement, Automation</div>
              <div><strong>Certifications:</strong> 100% Genuine MTC Supplied, GST Registered</div>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-[11px] text-blue-400">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleCategoryClick('mechanical')} 
                  className="hover:text-white transition-colors"
                >
                  Mechanical Items & SS Pipes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('electrical')} 
                  className="hover:text-white transition-colors"
                >
                  Electrical Items & Switchgear
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('electronics-automation')} 
                  className="hover:text-white transition-colors"
                >
                  Sensors, Drives & PLCs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('pneumatics')} 
                  className="hover:text-white transition-colors"
                >
                  Pneumatics Cylinders & Valves (OEM)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleCategoryClick('all')} 
                  className="hover:text-white transition-colors font-medium text-blue-400"
                >
                  Browse Full Catalog (500+ Items) →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industrial Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-[11px] text-emerald-400">
              Industrial Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Mechanical Maintenance & Alignment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Electrical Services & Diagnostics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('services')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Critical Spare Parts Express Supply
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateToSection('brands')} 
                  className="hover:text-white transition-colors text-left"
                >
                  OEM Brand Sourcing (Tata, SMC, Schneider)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase text-[11px] text-amber-400">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a 
                href="tel:+918712444439" 
                className="flex items-center gap-2 hover:text-white transition-colors"
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
                <span>State of Telangana & Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} GSR Engineering Solutions. All rights reserved. GSTIN: 36CTUPG6618J11Z9.
          </div>
          
          <div className="flex items-center gap-4">
            <span>Proprietor: G Sandeep Kumar</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-xs"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
