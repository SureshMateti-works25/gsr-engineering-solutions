import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  FileText, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MessageCircle, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface FlyerPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export const FlyerPage: React.FC<FlyerPageProps> = ({
  onBackToHome,
  onNavigateToContact
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeFlyer, setActiveFlyer] = useState<'poster' | 'original'>('poster');

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

  const handleWhatsAppFlyer = () => {
    const text = encodeURIComponent(
      'Hello GSR Engineering Solutions, I am viewing your official Master Product Flyer. I would like to inquire about pricing and availability for items listed in the poster.'
    );
    window.open(`https://wa.me/918712344439?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-6 sm:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold border border-slate-200 transition-all shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 text-blue-700 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={onBackToHome} className="hover:text-blue-700">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Catalogue Flyer</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0a2569] via-blue-900 to-indigo-950 text-white shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <FileText className="w-3.5 h-3.5 text-amber-300" />
              <span>Official Engineering Documentation</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Official Master Product Catalogue & Flyer
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Explore our complete multi-division industrial poster featuring all 4 specialized divisions: Mechanical Items, Electrical Switchgear, Electronics & Automation, and OEM Pneumatics.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Proprietor: G Sandeep Kumar</span>
              </span>
              <span>•</span>
              <span>Hotline: +91 8712344439</span>
              <span>•</span>
              <span>High-Resolution Document</span>
            </div>
          </div>
        </div>

        {/* Interactive Viewer Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
          
          {/* Controls Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            
            {/* Poster Version Toggle */}
            <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl">
              <button
                onClick={() => { setActiveFlyer('poster'); setZoomLevel(100); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFlyer === 'poster' 
                    ? 'bg-white text-[#0a2569] shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Full Poster View
              </button>
              <button
                onClick={() => { setActiveFlyer('original'); setZoomLevel(100); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFlyer === 'original' 
                    ? 'bg-white text-[#0a2569] shadow-2xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Catalogue Banner
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2 py-1 rounded-xl shadow-2xs text-xs">
              <button 
                onClick={zoomOut}
                disabled={zoomLevel <= 75}
                className="p-1 rounded hover:bg-slate-100 disabled:opacity-40" 
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4 text-slate-700" />
              </button>
              <span className="font-mono font-bold text-slate-700 w-12 text-center">
                {zoomLevel}%
              </span>
              <button 
                onClick={zoomIn}
                disabled={zoomLevel >= 200}
                className="p-1 rounded hover:bg-slate-100 disabled:opacity-40" 
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4 text-slate-700" />
              </button>
              <button 
                onClick={resetZoom}
                className="p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 ml-1" 
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download & WhatsApp Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0a2569] border border-blue-200 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Document</span>
              </button>
              <button
                onClick={handleWhatsAppFlyer}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire via WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Image Display Area */}
          <div className="p-4 sm:p-8 overflow-auto flex items-center justify-center bg-slate-900/5 min-h-[500px] max-h-[75vh]">
            <img
              src={currentImageSrc}
              alt="GSR Engineering Solutions Master Catalogue Poster"
              style={{ width: `${zoomLevel}%`, maxWidth: 'none' }}
              className="object-contain rounded-xl shadow-lg border border-slate-200 transition-all duration-200"
            />
          </div>

          {/* Footer Callout */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <span>
              Need customized dimensions, specialized material grades, or bulk contractor pricing for items on this flyer?
            </span>
            <button
              onClick={onNavigateToContact}
              className="font-extrabold text-[#0a2569] hover:text-blue-800 hover:underline flex items-center gap-1"
            >
              <span>Submit RFQ on Contact Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
