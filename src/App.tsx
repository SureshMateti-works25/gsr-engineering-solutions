import { useState, useEffect } from 'react';
import type { ProductCategory, ProductItem, RfqItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DomainsHubPage } from './components/DomainsHubPage';
import { DomainPage } from './components/DomainPage';
import { ServicesPage } from './components/ServicesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ContactPage } from './components/ContactPage';
import { FlyerPage } from './components/FlyerPage';
import { CategoryPage } from './components/CategoryPage';
import { OffersCarousel } from './components/OffersCarousel';
import { BrandShowcase } from './components/BrandShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { RfqDrawer } from './components/RfqDrawer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { CatalogueModal } from './components/CatalogueModal';
import { Wrench, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react';

export function App() {
  const [, setSelectedCategory] = useState<ProductCategory>('all');
  const [activeRoute, setActiveRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string>('');
  const [rfqList, setRfqList] = useState<RfqItem[]>([]);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Sync with URL Hash for Multi-Page SPA Routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/domain/')) {
        const domId = hash.replace('#/domain/', '');
        setActiveRoute('domain');
        setRouteParam(domId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/domains' || hash === '#domains') {
        setActiveRoute('domains');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/services' || hash === '#services') {
        setActiveRoute('services');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/projects' || hash === '#projects') {
        setActiveRoute('projects');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/contact' || hash === '#contact') {
        setActiveRoute('contact');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/flyer' || hash === '#flyer') {
        setActiveRoute('flyer');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#/category/')) {
        const cat = hash.replace('#/category/', '');
        setActiveRoute('category');
        setRouteParam(cat);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveRoute('home');
        setRouteParam('');
        if (hash && hash !== '#') {
          const sectionId = hash.replace('#/', '').replace('#', '');
          const el = document.getElementById(sectionId);
          if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
          }
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // RFQ handlers
  const handleToggleRfq = (product: ProductItem) => {
    setRfqList(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        return prev.filter(item => item.product.id !== product.id);
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setRfqList(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setRfqList(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearAllRfq = () => {
    setRfqList([]);
  };

  const handleNavigateToPage = (pageRoute: string) => {
    if (pageRoute === 'home') {
      window.location.hash = '';
      setActiveRoute('home');
      setRouteParam('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = `#/${pageRoute}`;
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    handleNavigateToPage('contact');
  };

  const handleQuickInquireProduct = (product: ProductItem) => {
    if (!rfqList.some(it => it.product.id === product.id)) {
      setRfqList(prev => [...prev, { product, quantity: 1 }]);
    }
    handleNavigateToPage('contact');
  };

  const isCurrentProductInRfq = selectedProductModal 
    ? rfqList.some(item => item.product.id === selectedProductModal.id)
    : false;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#0a2569] selection:text-white">
      {/* Top Navbar with HYTORC-Style Focused Menu */}
      <Navbar
        rfqList={rfqList}
        onOpenRfq={() => setIsRfqDrawerOpen(true)}
        onNavigateToPage={handleNavigateToPage}
        activePage={activeRoute}
      />

      {/* Main Content: Render Individual Pages or Home */}
      <main className="flex-1">
        {activeRoute === 'domains' ? (
          /* Dedicated Industry Domains Hub Page */
          <DomainsHubPage
            onBackToHome={() => handleNavigateToPage('home')}
            onSelectDomain={(domainId) => handleNavigateToPage(`domain/${domainId}`)}
            onNavigateToContact={() => handleNavigateToPage('contact')}
          />
        ) : activeRoute === 'domain' ? (
          /* Dedicated Individual Domain Page */
          <DomainPage
            domainId={routeParam}
            onBackToHome={() => handleNavigateToPage('domains')}
            onSelectOtherDomain={(otherId) => handleNavigateToPage(`domain/${otherId}`)}
            rfqList={rfqList}
            onToggleRfq={handleToggleRfq}
            onSelectProduct={setSelectedProductModal}
            onNavigateToContact={() => handleNavigateToPage('contact')}
          />
        ) : activeRoute === 'services' ? (
          /* Dedicated Services & AMC Page */
          <ServicesPage
            onBackToHome={() => handleNavigateToPage('home')}
            onInquireService={handleInquireService}
          />
        ) : activeRoute === 'projects' ? (
          /* Dedicated Projects & Case Studies Page */
          <ProjectsPage
            onBackToHome={() => handleNavigateToPage('home')}
            onInquireProject={handleInquireService}
          />
        ) : activeRoute === 'contact' ? (
          /* Dedicated Contact & RFQ Submission Page */
          <ContactPage
            onBackToHome={() => handleNavigateToPage('home')}
            rfqList={rfqList}
            prefilledService={prefilledService}
            onClearPrefilledService={() => setPrefilledService('')}
          />
        ) : activeRoute === 'flyer' ? (
          /* Dedicated Official Catalogue Flyer Page */
          <FlyerPage
            onBackToHome={() => handleNavigateToPage('home')}
            onNavigateToContact={() => handleNavigateToPage('contact')}
          />
        ) : activeRoute === 'category' ? (
          /* Dedicated Product Category Page */
          <CategoryPage
            categoryId={routeParam as ProductCategory}
            onBackToHome={() => handleNavigateToPage('home')}
            rfqList={rfqList}
            onToggleRfq={handleToggleRfq}
            onSelectProduct={setSelectedProductModal}
            onOpenFlyer={() => handleNavigateToPage('flyer')}
            onNavigateToContact={() => handleNavigateToPage('contact')}
          />
        ) : (
          /* Home Landing Page (Compact & Focused) */
          <>
            {/* Domain-First Landing Hero (Compact Title + 6 Domain Cards) */}
            <Hero
              onSelectDomain={(domainId) => handleNavigateToPage(`domain/${domainId}`)}
            />

            {/* Turnkey Services Overview Highlight */}
            <section className="py-12 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0a2569] text-xs font-bold uppercase tracking-wider">
                      <Wrench className="w-3.5 h-3.5 text-blue-700" />
                      <span>More Than Equipment Supply</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Turnkey Supply, On-Site Installation & Plant Maintenance (AMC)
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      ASME IX certified orbital welding, 3200A substation retrofits, pneumatic automation, and 24/7 critical breakdown response across TS, AP, TN & Maharashtra.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigateToPage('services')}
                    className="shrink-0 px-5 py-3 rounded-xl bg-[#0a2569] hover:bg-blue-800 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all hover:scale-102"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>
            </section>

            {/* Executed Projects Case Studies Highlight */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Proven Site Execution</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Executed Case Studies: Pharma WFI, Steel Substations & Plant AMCs
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Review verified case studies demonstrating how our engineering crew solved complex installation challenges with zero downtime and strict cGMP / IS compliance.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigateToPage('projects')}
                    className="shrink-0 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-md flex items-center gap-2 transition-all hover:scale-102"
                  >
                    <span>Explore Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Special Offers & Volume Discounts */}
            <OffersCarousel
              onSelectCategory={setSelectedCategory}
              onNavigateToSection={() => handleNavigateToPage('contact')}
            />

            {/* Authorized OEM Brand Partner Logos (Clean Logo Wall at Bottom) */}
            <BrandShowcase />

            {/* Why Choose GSR Engineering Solutions */}
            <WhyChooseUs />

            {/* Contact & RFQ Teaser Strip */}
            <section className="py-12 bg-[#0a2569] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center justify-center md:justify-start gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Fast Commercial RFQs & Dedicated Estimators</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">
                    Ready to Source Engineering Spares for Your Plant?
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Proprietor G Sandeep Kumar and technical estimators respond within 2 hours with genuine MTC 3.1 proposals.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigateToPage('contact')}
                  className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Go to Contact Page
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onNavigateToSection={(id) => handleNavigateToPage(id)}
        onOpenFlyer={() => handleNavigateToPage('flyer')}
      />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        isInRfq={isCurrentProductInRfq}
        onToggleRfq={handleToggleRfq}
        onQuickInquire={handleQuickInquireProduct}
      />

      {/* Official Master Product Catalogue Modal (Fallback if needed) */}
      <CatalogueModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
        onNavigateToContact={() => handleNavigateToPage('contact')}
      />

      {/* RFQ Drawer */}
      <RfqDrawer
        isOpen={isRfqDrawerOpen}
        onClose={() => setIsRfqDrawerOpen(false)}
        rfqList={rfqList}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAllRfq}
        onProceedToForm={() => handleNavigateToPage('contact')}
      />

      {/* Floating Action Buttons */}
      <QuickContactFloating
        rfqList={rfqList}
        onOpenRfq={() => setIsRfqDrawerOpen(true)}
      />
    </div>
  );
}

export default App;
