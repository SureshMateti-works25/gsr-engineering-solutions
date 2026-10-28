import React, { useState } from 'react';
import { 
  X, 
  Download, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Maximize2
} from 'lucide-react';

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
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeFlyer, setActiveFlyer] = useState<'poster' | 'original'>('poster');

  if (!isOpen) return null;

  const currentImageSrc = activeFlyer === 'poster' ? './gsr-poster.png' : './gsr-catalogue-banner.jpg';
  const currentFileName = activeFlyer === 'poster' 
    ? 'GSR-Engineering-Solutions-Master-Product-Poster.png' 
    : 'GSR-Engineering-Solutions-Catalogue-Flyer.jpg';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImageSrc;
    link.download = currentFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 75));
  const resetZoom = () => setZoomLevel(100);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-1 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[95vh] max-h-[95vh]">
        
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-[#0a2569] via-blue-900 to-indigo-900 text-white flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto bg-white p-1 rounded-xl flex items-center justify-center shadow-sm">
              <img src="./gsr-logo.png" alt="GSR Logo" className="h-8 w-auto object-contain" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-2">
                GSR Engineering Solution's Master Catalogue
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                  <Sparkles className="w-3 h-3" /> Official Document
                </span>
              </h3>
              <p className="text-[11px] text-blue-200 hidden sm:block">
                Building Trust, Delivering Quality • Proprietor: G Sandeep Kumar (+91 8712344439)
              </p>
            </div>
          </div>

          {/* Switcher & Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Flyer Selector Tabs */}
            <div className="flex items-center bg-black/25 p-0.5 rounded-xl border border-white/20 text-xs">
              <button
                onClick={() => { setActiveFlyer('poster'); resetZoom(); }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeFlyer === 'poster' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-white hover:text-amber-300'
                }`}
              >
                Official Product Poster
              </button>
              <button
                onClick={() => { setActiveFlyer('original'); resetZoom(); }}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
                  activeFlyer === 'original' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-white hover:text-amber-300'
                }`}
              >
                Services Flyer
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="hidden md:flex items-center bg-black/25 px-2 py-1 rounded-xl border border-white/20 text-xs gap-1">
              <button onClick={zoomOut} className="p-1 hover:text-amber-300" title="Zoom Out">
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] px-1 text-amber-300">{zoomLevel}%</span>
              <button onClick={zoomIn} className="p-1 hover:text-amber-300" title="Zoom In">
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              {zoomLevel !== 100 && (
                <button onClick={resetZoom} className="p-1 text-slate-400 hover:text-white" title="Reset Zoom">
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
            </div>

            <a
              href={currentImageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/20"
              title="Open full resolution in new tab"
            >
              <Maximize2 className="w-4 h-4 text-sky-300" />
            </a>

            <button
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-colors"
              title="Download Catalogue Image"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors ml-1"
              title="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body - Full Scrollable View with No Bottom Cutoff */}
        <div className="p-3 sm:p-6 overflow-y-auto flex-1 bg-slate-100 flex flex-col items-center justify-start pb-20">
          <div 
            className="relative rounded-2xl overflow-visible shadow-2xl border border-slate-300 bg-white transition-all duration-200"
            style={{ width: `${zoomLevel}%`, maxWidth: zoomLevel === 100 ? '100%' : 'none' }}
          >
            <img
              src={currentImageSrc}
              alt="GSR Engineering Solutions Complete Product Catalogue & Document"
              className="w-full h-auto block select-none rounded-xl"
            />
          </div>
          
          <div className="text-center text-xs text-slate-500 mt-4 mb-2">
            Tip: You can zoom in, scroll freely to the bottom, or click <a href={currentImageSrc} target="_blank" rel="noreferrer" className="text-blue-600 underline font-semibold">Open Full Size</a> to inspect in full resolution.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-lg">
          <div className="text-xs text-slate-600 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-bold text-slate-900">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>GSTIN: 36CTUPG6618J11Z9</span>
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black text-[9px] uppercase tracking-wider gst-active-blink flex items-center gap-1">● ACTIVE VERIFIED</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="hidden sm:inline">Ambedkar Veedhi, Tadepalligudem, AP</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownload}
              className="sm:hidden px-3 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>

            <a
              href="https://wa.me/918712344439?text=Hello%20GSR%20Engineering%20Solutions,%20I%20reviewed%20your%20master%20product%20catalogue%20and%20would%20like%20to%20request%20a%20quotation."
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
