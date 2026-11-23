import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
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
  Settings,
  Sparkles
} from 'lucide-react';
import { caseStudiesData, type CaseStudy } from '../data/projects';

interface ProjectsPageProps {
  onBackToHome: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onBackToHome,
  onInquireProject
}) => {
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

  const handleWhatsAppProject = (title: string) => {
    const text = encodeURIComponent(
      `Hello GSR Engineering Solutions, I am interested in your project execution capabilities similar to: "${title}". Please share case study details and discuss our site requirements.`
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
            <span className="text-slate-900 font-bold">Projects & Case Studies</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0a2569] via-indigo-900 to-emerald-950 text-white shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Wrench className="w-3.5 h-3.5 text-emerald-300" />
              <span>Supply + Installation + Annual Maintenance Contracts</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Executed Industrial Projects & Real Client Case Studies
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Explore how GSR Engineering Solutions delivers end-to-end turnkey solutions for major industrial clients across Telangana, Andhra Pradesh, Tamil Nadu, and Maharashtra — combining certified material supply with precision on-site erection and continuous maintenance.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>ASME BPE Certified Erection</span>
              </span>
              <span>•</span>
              <span>Substation Modernization</span>
              <span>•</span>
              <span>Multi-Year Plant AMCs</span>
            </div>
          </div>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
          <button
            onClick={() => setSelectedIndustry('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
              selectedIndustry === 'all'
                ? 'bg-[#0a2569] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
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
                  ? 'bg-[#0a2569] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* CASE STUDIES CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((study) => {
            const IndIcon = getIndustryIcon(study.industry);
            return (
              <div
                key={study.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                      <IndIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>{study.industry}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-blue-200 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{study.location}</span>
                        <span>•</span>
                        <span>{study.clientType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-black text-lg text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                      {study.title}
                    </h3>

                    {/* Scope Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200/80 text-[#0a2569] text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{study.scope}</span>
                    </div>

                    {/* Problem vs Solution */}
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-extrabold text-rose-700 uppercase tracking-wider block mb-0.5">
                          Engineering Challenge:
                        </span>
                        <p className="text-slate-600 line-clamp-2 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="font-extrabold text-emerald-700 uppercase tracking-wider block mb-0.5">
                          Turnkey Solution:
                        </span>
                        <p className="text-slate-600 line-clamp-2 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Verified Result Pill */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="font-extrabold text-slate-900 block mb-0.5">Key Deliverable:</span>
                      <span className="text-slate-700 font-medium">{study.results[0]}</span>
                    </div>

                    {/* Client Quote */}
                    {study.clientQuote && (
                      <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs text-slate-700 italic relative">
                        <Quote className="w-4 h-4 text-amber-400 absolute -top-2 -left-1 transform -rotate-12" />
                        "{study.clientQuote.quote}"
                        <div className="mt-1 text-[11px] font-bold text-slate-900 not-italic">
                          — {study.clientQuote.author}, {study.clientQuote.role}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedStudyModal(study)}
                    className="text-xs font-extrabold text-[#0a2569] hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleWhatsAppProject(study.title)}
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                    title="Inquire Similar Project"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Full Case Study View */}
        {selectedStudyModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-[#0a2569]">
                    {selectedStudyModal.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                    {selectedStudyModal.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {selectedStudyModal.location} • {selectedStudyModal.clientType}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStudyModal(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={selectedStudyModal.imageUrl}
                  alt={selectedStudyModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div>
                  <strong className="text-slate-900 block font-black uppercase text-xs text-rose-700 mb-1">
                    The Industrial Challenge:
                  </strong>
                  <p className="leading-relaxed">{selectedStudyModal.challenge}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-black uppercase text-xs text-emerald-700 mb-1">
                    Turnkey Engineering Solution Executed:
                  </strong>
                  <p className="leading-relaxed">{selectedStudyModal.solution}</p>
                </div>
                <div>
                  <strong className="text-slate-900 block font-black uppercase text-xs text-blue-700 mb-1">
                    Project Deliverables & Outcome:
                  </strong>
                  <ul className="list-disc list-inside space-y-1 leading-relaxed">
                    {selectedStudyModal.results.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => {
                    const title = selectedStudyModal.title;
                    setSelectedStudyModal(null);
                    onInquireProject(title);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-bold text-xs shadow-md"
                >
                  Inquire Similar Turnkey Project
                </button>
                <button
                  onClick={() => handleWhatsAppProject(selectedStudyModal.title)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Estimator</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
