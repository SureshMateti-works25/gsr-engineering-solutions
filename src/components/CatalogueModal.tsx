import React from 'react';
import { X, Download, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const CatalogueModal: React.FC<CatalogueModalProps> = ({
  isOpen,
  onClose,
  onNavigateToContact
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './gsr-catalogue-banner.jpg';
    link.download = 'GSR-Engineering-Solutions-Product-Catalogue.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-[#0a2569] via-blue-900 to-indigo-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto bg-white p-1 rounded-lg flex items-center justify-center">
              <img src="./gsr-logo.png" alt="GSR Logo" className="h-8 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                GSR Engineering Solution's Product Catalogue
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                  <Sparkles className="w-3 h-3" /> Official Flyer
                </span>
              </h3>
              <p className="text-xs text-blue-200">
                Building Trust, Delivering Quality • Proprietor: G Sandeep Kumar (+91 8712444439)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/20"
              title="Download Catalogue Image"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable Full Flyer View */}
        <div className="p-2 sm:p-6 overflow-y-auto flex-1 bg-slate-100 flex flex-col items-center justify-start">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-300 max-w-full bg-white">
            <img
              src="./gsr-catalogue-banner.jpg"
              alt="GSR Engineering Solutions Complete Product Catalogue Flyer"
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="font-bold text-slate-900">GSTIN:</span> 36CTUPG6618J11Z9
            <span className="text-slate-300">•</span>
            <span>Telangana & Andhra Pradesh</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownload}
              className="sm:hidden px-3 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold flex items-center gap-1.5 border border-slate-300"
            >
              <Download className="w-4 h-4" />
              <span>Save Flyer</span>
            </button>

            <a
              href="https://wa.me/918712444439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20reviewed%20your%20product%20catalogue%20flyer%20and%20would%20like%20to%20request%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onNavigateToContact();
              }}
              className="px-4 py-2 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <span>Submit RFQ Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
