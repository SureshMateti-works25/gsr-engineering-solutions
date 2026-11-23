import React from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Wrench, 
  Cog, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Headphones, 
  AlertTriangle, 
  PhoneCall,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesPageProps {
  onBackToHome: () => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onBackToHome,
  onInquireService
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Cog': return Cog;
      case 'Wrench': return Wrench;
      case 'Headphones': return Headphones;
      case 'AlertTriangle': return AlertTriangle;
      default: return Wrench;
    }
  };

  const handleCallEmergency = () => {
    window.location.href = 'tel:+918712344439';
  };

  const handleWhatsAppService = (title: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in inquiring about your engineering service: "${title}". Please provide scope, consultation, and availability.`
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
            <span className="text-slate-900 font-bold">Services & AMC</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0a2569] via-blue-900 to-slate-900 text-white shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Wrench className="w-3.5 h-3.5 text-amber-300" />
              <span>Turnkey Engineering, Supply + Erection + AMC</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Industrial Maintenance & Field Engineering Services
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Unlike pure equipment traders, GSR Engineering Solutions provides turnkey execution: genuine material procurement, precision on-site orbital welding, switchgear retrofitting, pneumatic automation overhauls, and comprehensive 24/7 AMC plant support across Telangana, Andhra Pradesh, Tamil Nadu and Maharashtra.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified On-Site Crews</span>
              </span>
              <span>•</span>
              <span>24/7 Critical Breakdown Support</span>
              <span>•</span>
              <span>Preventative Plant AMC</span>
            </div>
          </div>
        </div>

        {/* 24/7 Emergency Breakdown Hotline Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-rose-700/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-rose-600 text-white shadow-md shrink-0 animate-pulse">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-rose-300">
                Immediate Plant Breakdown Support
              </div>
              <h2 className="text-lg sm:text-xl font-black">
                24/7 Emergency Breakdown Hotline: +91 8712344439
              </h2>
              <p className="text-xs text-rose-100 mt-0.5">
                Rapid technician dispatch and urgent component sourcing for critical plant failures across southern industrial corridors.
              </p>
            </div>
          </div>
          <button
            onClick={handleCallEmergency}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-rose-900 hover:bg-rose-50 font-black text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all hover:scale-105"
          >
            <PhoneCall className="w-4 h-4 text-rose-600" />
            <span>Call Hotline Now</span>
          </button>
        </div>

        {/* SERVICES CARDS GRID */}
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 mb-4 px-1">
            Core Turnkey Industrial Service Capabilities:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const Icon = getIcon(service.iconName);
              const isBreakdown = service.id === 'breakdown-service';

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
                    isBreakdown 
                      ? 'border-rose-300 ring-2 ring-rose-500/20' 
                      : 'border-slate-200 hover:border-blue-400'
                  }`}
                >
                  <div>
                    {/* Service Photography Header */}
                    {service.imageUrl && (
                      <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-200">
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        
                        <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md ${
                          isBreakdown ? 'bg-rose-600' : 'bg-[#0a2569]'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                          <span className="font-bold flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                            <Clock className="w-3 h-3 text-amber-400" />
                            {service.sla}
                          </span>
                        </div>
                      </div>
                    )}

                    <h3 className="font-black text-lg text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Scope of Execution:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onInquireService(service.title)}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                    >
                      <span>Inquire Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppService(service.title)}
                      className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                      title="WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Credentials Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="font-black text-lg text-slate-900">Certified Engineering Crews</div>
            <p className="text-xs text-slate-500">ASME IX certified welders, licensed electrical supervisors, and factory automation specialists.</p>
          </div>
          <div className="space-y-1">
            <div className="font-black text-lg text-slate-900">Genuine Materials Guaranteed</div>
            <p className="text-xs text-slate-500">Every fitting, valve, breaker, and motor is backed by original OEM test certificates and manufacturer warranty.</p>
          </div>
          <div className="space-y-1">
            <div className="font-black text-lg text-slate-900">Comprehensive Safety Compliance</div>
            <p className="text-xs text-slate-500">Full adherence to plant safety work permits, PPE protocols, hot work regulations, and cleanroom gowning.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
