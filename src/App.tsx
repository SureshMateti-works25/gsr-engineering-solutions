import { useState, useEffect } from 'react';
import type { ProductCategory, ProductItem, RfqItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OffersCarousel } from './components/OffersCarousel';
import { ProductCatalog } from './components/ProductCatalog';
import { ProjectsSection } from './components/ProjectsSection';
import { BrandShowcase } from './components/BrandShowcase';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { RfqDrawer } from './components/RfqDrawer';
import { QuickContactFloating } from './components/QuickContactFloating';
import { CatalogueModal } from './components/CatalogueModal';
import { CategoryPage } from './components/CategoryPage';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [rfqList, setRfqList] = useState<RfqItem[]>([]);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [activeCategoryPage, setActiveCategoryPage] = useState<ProductCategory | null>(null);

  // Sync with URL Hash for Deep Linking and Category Pages
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/category/')) {
        const cat = hash.replace('#/category/', '') as ProductCategory;
        setActiveCategoryPage(cat);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveCategoryPage(null);
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

  const handleNavigateToSection = (sectionId: string) => {
    if (activeCategoryPage) {
      window.location.hash = `#${sectionId}`;
      setActiveCategoryPage(null);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectBrandForSearch = (brandName: string) => {
    if (activeCategoryPage) {
      setActiveCategoryPage(null);
      window.location.hash = '';
    }
    setSearchQuery(brandName);
    handleNavigateToSection('catalog');
  };

  const handleInquireService = (serviceTitle: string) => {
    if (activeCategoryPage) {
      setActiveCategoryPage(null);
      window.location.hash = '';
    }
    setPrefilledService(serviceTitle);
    handleNavigateToSection('contact');
  };

  const handleQuickInquireProduct = (product: ProductItem) => {
    if (!rfqList.some(it => it.product.id === product.id)) {
      setRfqList(prev => [...prev, { product, quantity: 1 }]);
    }
    handleNavigateToSection('contact');
  };

  const isCurrentProductInRfq = selectedProductModal 
    ? rfqList.some(item => item.product.id === selectedProductModal.id)
    : false;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#0a2569] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        rfqList={rfqList}
        onOpenRfq={() => setIsRfqDrawerOpen(true)}
        onNavigateToSection={handleNavigateToSection}
        onOpenFlyer={() => setIsFlyerModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {activeCategoryPage ? (
          /* Dedicated Full Category Page View */
          <CategoryPage
            categoryId={activeCategoryPage}
            onBackToHome={() => {
              window.location.hash = '';
              setActiveCategoryPage(null);
            }}
            rfqList={rfqList}
            onToggleRfq={handleToggleRfq}
            onSelectProduct={setSelectedProductModal}
            onOpenFlyer={() => setIsFlyerModalOpen(true)}
            onNavigateToContact={() => handleNavigateToSection('contact')}
          />
        ) : (
          /* Home Overview with all sections */
          <>
            {/* Hero Section with Official GSR Logo and 4 Category Pillars */}
            <Hero
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectCategory={setSelectedCategory}
              onNavigateToSection={handleNavigateToSection}
              onOpenFlyer={() => setIsFlyerModalOpen(true)}
            />

            {/* Special Discounts & Product Offers Image Carousel */}
            <OffersCarousel
              onSelectCategory={setSelectedCategory}
              onNavigateToSection={handleNavigateToSection}
            />

            {/* Product Catalog Section with 62 Products across 4 Poster Divisions */}
            <ProductCatalog
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              rfqList={rfqList}
              onToggleRfq={handleToggleRfq}
              onSelectProduct={setSelectedProductModal}
              onOpenFlyer={() => setIsFlyerModalOpen(true)}
            />

            {/* Turnkey Case Studies & Completed Projects (Supply + Installation + AMC) */}
            <ProjectsSection
              onInquireProject={handleInquireService}
            />

            {/* OEM Brands Partner Showcase with 23 Official Vector Logos */}
            <BrandShowcase
              onSelectBrandForSearch={handleSelectBrandForSearch}
            />

            {/* Industrial Services Section (Supply + Installation + 24/7 Breakdown + AMC) */}
            <ServicesSection
              onInquireService={handleInquireService}
            />

            {/* Why Choose GSR Engineering Solutions */}
            <WhyChooseUs />

            {/* Contact Page & RFQ Submission */}
            <ContactSection
              rfqList={rfqList}
              prefilledService={prefilledService}
              onClearPrefilledService={() => setPrefilledService('')}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onNavigateToSection={handleNavigateToSection}
        onOpenFlyer={() => setIsFlyerModalOpen(true)}
      />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        isInRfq={isCurrentProductInRfq}
        onToggleRfq={handleToggleRfq}
        onQuickInquire={handleQuickInquireProduct}
      />

      {/* Official Master Product Catalogue & Document Modal */}
      <CatalogueModal
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
        onNavigateToContact={() => handleNavigateToSection('contact')}
      />

      {/* RFQ Drawer */}
      <RfqDrawer
        isOpen={isRfqDrawerOpen}
        onClose={() => setIsRfqDrawerOpen(false)}
        rfqList={rfqList}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAllRfq}
        onProceedToForm={() => handleNavigateToSection('contact')}
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
