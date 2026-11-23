import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Copy,
  Check,
  Building2,
  FileText
} from 'lucide-react';
import type { RfqItem } from '../types';

interface ContactPageProps {
  onBackToHome: () => void;
  rfqList: RfqItem[];
  prefilledService?: string;
  onClearPrefilledService?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  rfqList,
  prefilledService,
  onClearPrefilledService
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    location: '',
    category: 'all',
    urgency: 'routine',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copiedGst, setCopiedGst] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        category: 'services',
        message: `I would like to inquire about the service: "${prefilledService}". Please provide consultation details and engineer availability.`
      }));
    }
  }, [prefilledService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'GSR-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(ref);
    setSubmitted(true);
    onClearPrefilledService?.();
  };

  const copyGstin = () => {
    navigator.clipboard.writeText('36CTUPG6618J11Z9');
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  const generateWhatsAppFromForm = () => {
    let msg = `*GSR Engineering Solutions - Client Inquiry*\n`;
    msg += `----------------------------------------\n`;
    msg += `*Name:* ${formData.fullName || 'Prospective Client'}\n`;
    if (formData.companyName) msg += `*Company:* ${formData.companyName}\n`;
    if (formData.phone) msg += `*Phone:* ${formData.phone}\n`;
    if (formData.location) msg += `*Location:* ${formData.location}\n`;
    if (formData.category) msg += `*Requirement:* ${formData.category}\n`;
    if (formData.urgency) msg += `*Priority:* ${formData.urgency.toUpperCase()}\n`;
    if (formData.message) msg += `*Details:* ${formData.message}\n`;
    
    if (rfqList.length > 0) {
      msg += `\n*RFQ Cart Items (${rfqList.length}):*\n`;
      rfqList.forEach((it, idx) => {
        msg += `${idx + 1}. ${it.product.name} (Qty: ${it.quantity})\n`;
      });
    }

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/918712344439?text=${encoded}`, '_blank');
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
            <span className="text-slate-900 font-bold">Contact & RFQ</span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#0a2569] via-blue-900 to-slate-900 text-white shadow-xl border border-slate-200 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              <Send className="w-3.5 h-3.5 text-amber-300" />
              <span>Direct Commercial & Engineering Hotline</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Contact GSR Engineering Solutions & Request Quotation
            </h1>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
              Send your Bill of Materials, technical drawings, or turnkey service requirements. G Sandeep Kumar and our engineering estimators guarantee rapid response and comprehensive commercial proposals.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Clock className="w-4 h-4" />
                <span>Avg. Quote Turnaround: &lt; 2 Hours</span>
              </span>
              <span>•</span>
              <span>Direct WhatsApp Estimator</span>
              <span>•</span>
              <span>Registered & Active GST Verified</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Info Cards (Col 1-5) & RFQ Form (Col 6-12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts, Address, GSTIN */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Calling & Emergency Hotline Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                Primary Contact & Estimation
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Proprietor Direct Phone:</div>
                    <a href="tel:+918712344439" className="text-base font-black text-slate-900 hover:text-blue-700 transition-colors">
                      +91 8712344439
                    </a>
                    <div className="text-[11px] text-slate-500">G Sandeep Kumar • Available Mon–Sat (24/7 for Breakdown)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">WhatsApp Quotations:</div>
                    <button 
                      onClick={generateWhatsAppFromForm}
                      className="text-base font-black text-emerald-700 hover:text-emerald-800 transition-colors text-left"
                    >
                      +91 8712344439 (Chat Now)
                    </button>
                    <div className="text-[11px] text-slate-500">Send Bill of Materials (BOM), drawings, or Excel lists</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Official RFQ Email:</div>
                    <a href="mailto:sales@gsrengineeringsolutions.com" className="text-sm font-black text-slate-900 hover:text-blue-700 transition-colors">
                      sales@gsrengineeringsolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Registered Office & Hubs */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-blue-700" />
                <span>Office & Regional Hub Locations</span>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block font-bold text-xs mb-1">
                    Registered Commercial Office:
                  </strong>
                  <p className="leading-relaxed">
                    D.No: 3-102/2, Main Road, Near Industrial Area, Tadepalligudem, West Godavari District, Andhra Pradesh - 534101, India.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block font-bold text-xs mb-1">
                    Operational Supply Hubs:
                  </strong>
                  <p className="leading-relaxed">
                    • <strong>Telangana Hub:</strong> Hyderabad Industrial Zone & Genome Valley Corridor<br />
                    • <strong>Andhra Pradesh Hub:</strong> Visakhapatnam & Tadepalligudem Dispatch Network<br />
                    • <strong>Tamil Nadu Hub:</strong> Chennai / Sriperumbudur Industrial Corridor<br />
                    • <strong>Maharashtra Hub:</strong> Pune / Chakan & MIDC Industrial Network
                  </p>
                </div>
              </div>
            </div>

            {/* GSTIN Verification Card */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-900 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>GSTIN Credentials</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">
                  ● ACTIVE VERIFIED
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-200">
                <span className="font-mono text-sm font-black text-slate-900">
                  36CTUPG6618J11Z9
                </span>
                <button
                  onClick={copyGstin}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold text-emerald-700 hover:bg-emerald-50 flex items-center gap-1"
                >
                  {copiedGst ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedGst ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-[11px] text-emerald-800">
                All supplies are accompanied by official GST E-way bills, 100% genuine tax invoices, and Material Test Certificates.
              </p>
            </div>

          </div>

          {/* Right Column: RFQ Submission Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
            
            <div className="mb-6">
              <div className="text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-1">
                Fast Quotation Generator
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Submit Bill of Materials (BOM) or Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill in your company details and product specifications. We respond with formal quote datasheets.
              </p>
            </div>

            {/* Active RFQ Cart preview if items exist */}
            {rfqList.length > 0 && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>Attached RFQ Cart Items ({rfqList.length}):</span>
                  </span>
                </div>
                <div className="max-h-32 overflow-y-auto space-y-1 text-xs">
                  {rfqList.map((it, idx) => (
                    <div key={idx} className="flex items-center justify-between text-slate-700 py-0.5">
                      <span className="truncate pr-2 font-medium">• {it.product.name}</span>
                      <span className="font-bold text-slate-900 shrink-0">Qty: {it.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Thank You! Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Your reference ID is <strong className="font-mono text-blue-700">{referenceId}</strong>. G Sandeep Kumar and our engineering team will get in touch with you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={generateWhatsAppFromForm}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Forward via WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Reddy"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Hyderabad Pharma Works Ltd."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number (WhatsApp preferred) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. procurement@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Delivery Location (City / State)
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Pashamylaram, Hyderabad, TS"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Procurement Urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option value="routine">Routine Project Procurement</option>
                      <option value="scheduled">Planned Shutdown / Overhaul</option>
                      <option value="critical">Critical Breakdown (&lt; 24h Emergency)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Technical Specifications / Bill of Materials Details *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify material grades (e.g., SS 316L, SCH 40, Class 150#), part numbers, dimensions, quantities or engineering service requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-102 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request for Quotation</span>
                  </button>
                  <button
                    type="button"
                    onClick={generateWhatsAppFromForm}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Forward to WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
