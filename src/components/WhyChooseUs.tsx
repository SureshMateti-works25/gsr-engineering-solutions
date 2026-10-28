import React from 'react';
import { 
  ShieldCheck, 
  BadgePercent, 
  Smile, 
  MapPin, 
  CheckCircle, 
  Building, 
  Truck
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Premium Quality Materials',
      desc: 'Supplying only authentic, OEM-certified mechanical, electrical, and pneumatic items with original Mill Test Certificates (MTC).',
      badge: 'Zero Compromise'
    },
    {
      icon: Building,
      title: 'Durable & Reliable Products',
      desc: 'Built to endure harsh industrial environments—chemical fumes, extreme temperature cycles, and 24/7 continuous duty.',
      badge: 'Industrial Grade'
    },
    {
      icon: Smile,
      title: 'Customer-Centric Satisfaction',
      desc: 'Technical consultation on choosing the right part specs, retrofitting legacy systems, and dedicated after-sales support.',
      badge: 'Dedicated Desk'
    },
    {
      icon: BadgePercent,
      title: 'Competitive Direct Pricing',
      desc: 'Transparent pricing structures for bulk project orders, annual rate contracts (ARC), and routine maintenance supplies.',
      badge: 'Best Value'
    },
    {
      icon: Truck,
      title: 'Timely Express Delivery',
      desc: 'Strategic stocking and express dispatch across Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra industrial belts to eliminate plant downtime.',
      badge: 'Express Dispatch'
    },
    {
      icon: CheckCircle,
      title: 'Trust & Uncompromising Integrity',
      desc: 'Government verified business with transparent GST billing (GSTIN: 36CTUPG6618J11Z9) and reliable long-term partnerships.',
      badge: '100% Compliant'
    }
  ];

  const locations = [
    'Hyderabad / Secunderabad Industrial Hubs',
    'Patancheru & Pashamylaram Pharma SEZ',
    'Balanagar, Jeedimetla & Sanath Nagar',
    'Visakhapatnam Steel & Port Zone',
    'Vijayawada & Guntur Manufacturing Corridors',
    'Sri City & Tirupati Industrial Clusters',
    'Kakinada & Godavari Petroleum Hubs',
    'Warangal & Karimnagar Engineering Belts'
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            Your Trusted Partner For Industrial Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Top Plant Engineers Choose GSR Engineering Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Rooted in technical expertise and fast execution, we bridge global manufacturers with regional manufacturing facilities to maintain seamless industrial momentum.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regional Coverage Map / Location Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-800 shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Strategic Regional Footprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive Coverage Across Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                With centralized logistics in Hyderabad and rapid freight transit routes, we serve major industrial parks, pharmaceuticals hubs, thermal plants, and heavy fabrication yards.
              </p>
              
              <div className="pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Routine Scheduled Deliveries</span>
                  <span className="h-2 w-2 rounded-full bg-blue-400 ml-2" />
                  <span>Emergency Same-Day Breakdown Courier</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
