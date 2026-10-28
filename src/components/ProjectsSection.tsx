import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  ShieldCheck, 
  MessageCircle, 
  Quote, 
  Zap, 
  Wind, 
  Settings 
} from 'lucide-react';
import { caseStudiesData, type CaseStudy } from '../data/projects';

interface ProjectsSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInquireProject }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedStudyModal, setSelectedStudyModal] = useState<CaseStudy | null>(null);

  const filteredProjects = caseStudiesData.filter(cs => {
    if (selectedIndustry === 'all') return true;
    return cs.industry === selectedIndustry;
  });

  const getIndustryIcon = (ind: string) => {
    switch (ind) {
      case 'Pharma & Biotech': return ShieldCheck;
      case 'Steel & Heavy Engineering': return Zap;
      case 'Food & Packaging': return Wind;
      case 'Chemical & Process': return Settings;
      default: return Building2;
    }
  };

  const getIndustryColor = (ind: string) => {
    switch (ind) {
      case 'Pharma & Biotech': return 'bg-emerald-50 text-emerald-800 border-emerald-300';
      case 'Steel & Heavy Engineering': return 'bg-blue-50 text-blue-800 border-blue-300';
      case 'Food & Packaging': return 'bg-cyan-50 text-cyan-800 border-cyan-300';
      case 'Chemical & Process': return 'bg-amber-50 text-amber-800 border-amber-300';
      default: return 'bg-slate-50 text-slate-800 border-slate-300';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Boldly Emphasizing "More Than Supply" */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Wrench className="w-3.5 h-3.5 text-emerald-600" />
            Supply + Installation + Annual Maintenance Contracts (AMC)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            We Do More Than Supply.{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-600 bg-clip-text text-transparent">
              We Engineer, Install & Maintain.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Unlike pure trading middlemen, GSR Engineering Solutions provides turnkey execution: genuine material procurement, precision on-site orbital welding, switchgear retrofitting, pneumatic automation overhauls, and comprehensive 24/7 AMC plant support across Telangana, Andhra Pradesh, Tamil Nadu and Maharashtra.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-10 gap-2 scrollbar-none">
          <button
            onClick={() => setSelectedIndustry('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
              selectedIndustry === 'all'
                ? 'bg-[#0a2569] text-white shadow-md shadow-blue-900/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Case Studies ({caseStudiesData.length})
          </button>
          {['Pharma & Biotech', 'Steel & Heavy Engineering', 'Food & Packaging', 'Chemical & Process'].map(ind => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                selectedIndustry === ind
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => {
            const Icon = getIndustryIcon(project.industry);
            const colorClass = getIndustryColor(project.industry);

            return (
              <div 
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image Banner */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Top Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black border shadow-xs ${colorClass}`}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{project.industry}</span>
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs font-black bg-black/60 backdrop-blur-md text-amber-300 border border-white/20">
                        {project.duration}
                      </span>
                    </div>

                    {/* Bottom Image Overlay Text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 text-xs text-blue-200 font-bold mb-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" />
                        <span>{project.location}</span>
                      </div>
                      <div className="text-xs font-semibold text-white/90">
                        Client: <span className="text-white font-bold">{project.clientType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6">
                    <div className="inline-block text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md mb-2">
                      Scope: {project.serviceCategory}
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Key Metrics Highlight Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-5 pt-4 border-t border-slate-100">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                          <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{m.label}</div>
                          <div className="text-xs sm:text-sm font-black text-slate-900 mt-0.5 text-blue-700">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Results Bullet Points */}
                    <div className="space-y-1.5 mb-5">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Key Project Results:</div>
                      {project.results.slice(0, 3).map((res, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    {/* Client Testimonial Preview */}
                    {project.clientQuote && (
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs italic text-slate-700 flex items-start gap-2.5">
                        <Quote className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p>"{project.clientQuote.quote}"</p>
                          <div className="mt-1 font-bold not-italic text-slate-900 text-[11px]">
                            — {project.clientQuote.author}, <span className="text-slate-600">{project.clientQuote.role}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedStudyModal(project)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/918712344439?text=${encodeURIComponent(`Hello GSR Engineering Solutions, I am interested in discussing a project similar to: "${project.title}". Please connect with me.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300 transition-colors shadow-2xs"
                      title="Quick WhatsApp Inquiry"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onInquireProject(project.title)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
                    >
                      Request Similar Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Turnkey Assurance Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0a2569] via-blue-900 to-indigo-950 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 shrink-0">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">
                Have an Upcoming Turnkey Installation or Maintenance Project?
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-2xl leading-relaxed">
                Whether you need specialized stainless steel piping erection for a pharma plant, a switchgear ACB replacement during plant shutdown, or a 24/7 Annual Maintenance Contract (AMC) for your machinery, G Sandeep Kumar and our engineering crew are ready on-site.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+918712344439"
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Call Engineer: +91 8712344439</span>
            </a>
          </div>
        </div>

      </div>

      {/* Case Study Full Modal */}
      {selectedStudyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0a2569] text-white flex items-center justify-between shrink-0">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Case Study • {selectedStudyModal.industry}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mt-0.5">
                  {selectedStudyModal.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedStudyModal(null)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
              <div className="rounded-2xl overflow-hidden h-48 w-full bg-slate-900 relative">
                <img 
                  src={selectedStudyModal.imageUrl} 
                  alt={selectedStudyModal.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur px-3 py-1 rounded-lg text-white font-bold text-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedStudyModal.location}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 text-blue-700">The Engineering Challenge:</h4>
                <p className="text-slate-600 leading-relaxed">{selectedStudyModal.challenge}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1 text-emerald-700">Our Technical Solution:</h4>
                <p className="text-slate-600 leading-relaxed">{selectedStudyModal.solution}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-900 text-xs uppercase mb-2">Materials Supplied:</h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedStudyModal.materialsSupplied.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h5 className="font-bold text-slate-900 text-xs uppercase mb-2">Engineering Services Executed:</h5>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedStudyModal.servicesRendered.map((s, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <h5 className="font-bold text-emerald-900 text-xs uppercase mb-2">Verified Results:</h5>
                <ul className="space-y-1.5 text-xs text-emerald-800">
                  {selectedStudyModal.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-500">Contact: G Sandeep Kumar (+91 8712344439)</span>
              <button
                onClick={() => {
                  const title = selectedStudyModal.title;
                  setSelectedStudyModal(null);
                  onInquireProject(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-colors"
              >
                Inquire on this Project Scope
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
