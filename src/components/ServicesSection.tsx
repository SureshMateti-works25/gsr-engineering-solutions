import React from 'react';
import { 
  Wrench, 
  Zap, 
  PackageCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Headphones
} from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wrench': return Wrench;
      case 'Zap': return Zap;
      case 'PackageCheck': return PackageCheck;
      default: return Wrench;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Wrench className="w-3.5 h-3.5 text-emerald-600" />
            End-To-End Technical Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industrial Maintenance & Engineering Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Beyond component supply, we provide certified field engineers to maintain plant machinery, minimize costly production downtime, and ensure peak electrical safety.
          </p>
        </div>

        {/* 3 Core Services Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="relative bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Service Photography Header */}
                  {service.imageUrl ? (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 mb-6 border border-slate-200 shadow-xs">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-600 mt-1 mb-3">
                    {service.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet capabilities */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Scope of Capabilities:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service SLA & Action */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 font-semibold mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.sla}</span>
                  </div>

                  <button
                    onClick={() => onInquireService(service.title)}
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Breakdown Support Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-800/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <div className="text-lg font-bold text-white">Experiencing Plant Breakdown or Critical Equipment Failure?</div>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                Reach G Sandeep Kumar directly for fast spares dispatch and urgent electrical/mechanical technician deployment.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+918712444439"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Call +91 8712444439</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
