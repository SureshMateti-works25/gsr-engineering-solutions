import React from 'react';
import { 
  Wrench, 
  Cog, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Headphones,
  AlertTriangle,
  PhoneCall
} from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
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

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a2569] text-white text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
            <Wrench className="w-3.5 h-3.5 text-amber-400" />
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industrial Maintenance & Field Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Backed by experienced technicians and engineers to ensure minimum downtime, certified preventative maintenance, and 24/7 breakdown emergency recovery.
          </p>
        </div>

        {/* 5 Official Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isBreakdown = service.id === 'breakdown-service';
            return (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl border p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
                  isBreakdown 
                    ? 'border-rose-300 ring-2 ring-rose-500/20 md:col-span-2 lg:col-span-1' 
                    : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <div>
                  {/* Service Photography Header */}
                  {service.imageUrl && (
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-200 shadow-2xs">
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

                      <div className="absolute bottom-2.5 left-3">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          isBreakdown ? 'bg-rose-600 text-white' : 'bg-white/90 text-slate-900'
                        }`}>
                          Service 0{index + 1}
                        </span>
                      </div>
                    </div>
                  )}

                  <h3 className={`text-lg font-extrabold transition-colors ${
                    isBreakdown ? 'text-rose-950 group-hover:text-rose-600' : 'text-slate-900 group-hover:text-blue-700'
                  }`}>
                    {service.title}
                  </h3>

                  <div className={`text-xs font-bold mt-1 mb-3 ${
                    isBreakdown ? 'text-rose-600' : 'text-amber-600'
                  }`}>
                    {service.tagline}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet capabilities */}
                  <div className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Scope of Work:
                    </div>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isBreakdown ? 'text-rose-600' : 'text-emerald-600'
                        }`} />
                        <span className="line-clamp-2">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service SLA & Action */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium mb-3">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span className="truncate">{service.sla}</span>
                  </div>

                  <button
                    onClick={() => onInquireService(service.title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-xs ${
                      isBreakdown 
                        ? 'bg-rose-600 hover:bg-rose-700' 
                        : 'bg-[#0a2569] hover:bg-blue-800'
                    }`}
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Breakdown Support Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0a2569] via-blue-900 to-indigo-950 border border-blue-800/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white">Facing An Urgent Machinery Breakdown?</div>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
                Call G Sandeep Kumar immediately for rapid technical troubleshooting and urgent dispatch of mechanical, electrical, or pneumatic replacement spares.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+918712444439"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Call +91 8712444439</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
