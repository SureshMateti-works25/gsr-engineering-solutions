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
import { BrandsPage } from './components/BrandsPage';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { RfqDrawer } from './components/RfqDrawer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { CatalogueModal } from './components/CatalogueModal';

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
      } else if (hash === '#/contact' || hash === '#contact' || hash === '#contact-us' || hash === '#rfq' || hash === '#quote') {
        setActiveRoute('contact');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/flyer' || hash === '#flyer') {
        setActiveRoute('flyer');
        setRouteParam('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/brands' || hash === '#brands' || hash === '#/oem-brands' || hash === '#oem-brands') {
        setActiveRoute('brands');
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
        ) : activeRoute === 'brands' ? (
          /* Dedicated Authorized OEM Brands Individual Page */
          <BrandsPage
            onBackToHome={() => handleNavigateToPage('home')}
            onNavigateToContact={() => handleNavigateToPage('contact')}
          />
        ) : (
          /* Home Landing Page (Domain-First, Ultra Clean & Streamlined) */
          <Hero
            onSelectDomain={(domainId) => handleNavigateToPage(`domain/${domainId}`)}
          />
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
        onNavigatePage={(pageRoute) => handleNavigateToPage(pageRoute)}
        onSelectDomain={(domId) => {
          if (domId === 'domains') {
            handleNavigateToPage('domains');
          } else {
            handleNavigateToPage(`domain/${domId}`);
          }
        }}
      />
    </div>
  );
}

export default App;
