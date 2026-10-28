import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Copy,
  Check,
  MapPin
} from 'lucide-react';
import type { RfqItem } from '../types';

interface ContactSectionProps {
  rfqList: RfqItem[];
  prefilledService?: string;
  onClearPrefilledService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
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
    if (formData.fullName) msg += `*Name:* ${formData.fullName}\n`;
    if (formData.companyName) msg += `*Company:* ${formData.companyName}\n`;
    if (formData.phone) msg += `*Phone:* ${formData.phone}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    if (formData.location) msg += `*Location:* ${formData.location}\n`;
    msg += `*Urgency:* ${formData.urgency.toUpperCase()}\n\n`;

    if (rfqList.length > 0) {
      msg += `*Selected Products (${rfqList.length}):*\n`;
      rfqList.forEach((it, idx) => {
        msg += `  ${idx + 1}. ${it.product.name} (Qty: ${it.quantity || 1})\n`;
      });
      msg += `\n`;
    }

    if (formData.message) {
      msg += `*Message / Requirements:*\n${formData.message}\n\n`;
    }

    msg += `Please revert with price quote and terms.\nGSTIN: 36CTUPG6618J11Z9`;

    return `https://wa.me/918712344439?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            Direct Industrial Inquiries & RFQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Engineering Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Send your Bill of Materials, product specifications, or service requirements. G Sandeep Kumar and our technical estimators guarantee rapid turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards, Proprietor Info & GST */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Proprietor Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                  GS
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-blue-600">Proprietor</div>
                  <h3 className="text-xl font-extrabold text-slate-900">G Sandeep Kumar</h3>
                  <div className="text-xs text-slate-500">GSR Engineering Solutions</div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="tel:+918712344439"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Direct Mobile / Call</div>
                    <div className="font-bold text-slate-900 group-hover:text-blue-600">+91 8712344439</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918712344439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-slate-700 border border-emerald-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-emerald-700">WhatsApp Instant Chat</div>
                    <div className="font-bold text-slate-900 group-hover:text-emerald-700">+91 8712344439</div>
                  </div>
                </a>

                <a
                  href="mailto:sales@gsrengineeringsolutions.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Sales Inquiries</div>
                    <div className="font-bold text-slate-900 group-hover:text-amber-600 truncate">
                      sales@gsrengineeringsolutions.com
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:sandeepkumar@gsrengineeringsolutions.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Direct Email</div>
                    <div className="font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                      sandeepkumar@gsrengineeringsolutions.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* GST & Compliance Verification Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase text-slate-500 font-bold">Registered GSTIN</span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-black text-[9px] uppercase tracking-wider">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                      </span>
                      <span className="gst-active-blink">● Active Verified</span>
                    </span>
                  </div>
                  <div className="font-mono font-black text-slate-900 text-sm sm:text-base tracking-wider mt-0.5">
                    36CTUPG6618J11Z9
                  </div>
                </div>
              </div>
              <button
                onClick={copyGstin}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors border border-slate-200"
                title="Copy GSTIN"
              >
                {copiedGst ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Operating Hours & Dispatch */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Operating Schedule & Fast Dispatch</span>
              </div>
              <div className="text-slate-600 pl-6 space-y-1">
                <div>• Monday – Saturday: <span className="text-slate-900 font-bold">9:00 AM – 8:00 PM</span></div>
                <div>• Critical Breakdown Hotline: <span className="text-emerald-600 font-bold">24/7 Available</span></div>
                <div>• Dispatch Coverage: <span className="text-slate-900 font-semibold">All industrial areas in Telangana, AP, Tamil Nadu & Maharashtra</span></div>
              </div>
            </div>

            {/* Registered Office & Regional Dispatch Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Registered Address & Operational Hubs</span>
              </div>
              <div className="text-slate-600 pl-6 space-y-1.5">
                <div>
                  <span className="font-semibold text-slate-900">Registered Office:</span>
                  <div className="text-slate-700">Ambedkar Veedhi, Tadepalligudem, Andhra Pradesh - 534176, India</div>
                </div>
                <div>
                  <span className="font-semibold text-slate-900">Coverage & Delivery Hubs:</span>
                  <div className="text-slate-700">Telangana, Andhra Pradesh, Tamil Nadu & Maharashtra (Hyderabad, Vizag, Chennai, Mumbai, Pune, Vijayawada)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive RFQ Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Submit RFQ / Commercial Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Directly routed to our sales & estimation desk.
                  </p>
                </div>
                {rfqList.length > 0 && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                    {rfqList.length} Items Selected
                  </span>
                )}
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">RFQ Received Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName || 'Valued Client'}</strong>. Your inquiry reference number is <span className="font-mono text-amber-600 font-black">{referenceId}</span>.
                  </p>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    G Sandeep Kumar has been notified and will email/call you with comprehensive pricing, technical datasheets, and delivery timeline.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <a
                      href={generateWhatsAppFromForm()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ping on WhatsApp with Ref: {referenceId}</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Selected RFQ Preview Chips */}
                  {rfqList.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-2">
                        Attached Items from Catalog:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {rfqList.map(it => (
                          <span
                            key={it.product.id}
                            className="px-2.5 py-1 rounded-lg bg-white text-slate-800 text-xs border border-slate-200 font-semibold shadow-xs"
                          >
                            {it.product.name} ({it.quantity || 1}x)
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Reddy"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Factory Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Bharat Heavy Industries Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Official Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. purchase@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Plant / Delivery City
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Hyderabad / Vizag"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 font-medium focus:outline-none focus:bg-white focus:border-blue-600"
                      >
                        <option value="all">Multiple / General Inquiry (All Products)</option>
                        <option value="mechanical-items">Mechanical Items (18 Items: Pipes, Flanges, Valves, Fasteners)</option>
                        <option value="electrical-items">Electrical Items (18 Items: Switchgear, Breakers, Cables)</option>
                        <option value="automation-electronics">Electronics & Automation (15 Items: Sensors, PLC, VFD, HMI)</option>
                        <option value="pneumatics-items">Pneumatics Items - OEM Make (11 Items: SMC, FESTO, AirTAC)</option>
                        <option value="services">Maintenance & AMC Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Urgency Level
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-800 font-medium focus:outline-none focus:bg-white focus:border-blue-600"
                      >
                        <option value="routine">Routine Inquiry (Standard)</option>
                        <option value="urgent">Urgent Need (24-48 Hours)</option>
                        <option value="breakdown">🚨 Emergency Plant Breakdown</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Detailed Specifications / BOM / Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify item sizes, pressure ratings, OEM brand preferences (e.g. SMC, Festo, Schneider, Tata), quantities, or describe machinery maintenance required..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit RFQ to Sandeep Kumar</span>
                    </button>

                    <a
                      href={generateWhatsAppFromForm()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Direct WhatsApp Quote</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center pt-2 font-medium">
                    🔒 We respect your enterprise privacy. Quotes provided with official GST invoice & MTC certs.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
