import { useState } from 'react';
import type { ProductCategory, ProductItem, RfqItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { BrandShowcase } from './components/BrandShowcase';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { RfqDrawer } from './components/RfqDrawer';
import { QuickContactFloating } from './components/QuickContactFloating';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [rfqList, setRfqList] = useState<RfqItem[]>([]);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

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
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBrandForSearch = (brandName: string) => {
    setSearchQuery(brandName);
    handleNavigateToSection('catalog');
  };

  const handleInquireService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    handleNavigateToSection('contact');
  };

  const handleQuickInquireProduct = (product: ProductItem) => {
    // Add to RFQ if not already added
    if (!rfqList.some(it => it.product.id === product.id)) {
      setRfqList(prev => [...prev, { product, quantity: 1 }]);
    }
    handleNavigateToSection('contact');
  };

  const isCurrentProductInRfq = selectedProductModal 
    ? rfqList.some(item => item.product.id === selectedProductModal.id)
    : false;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        rfqList={rfqList}
        onOpenRfq={() => setIsRfqDrawerOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSelectCategory={setSelectedCategory}
          onNavigateToSection={handleNavigateToSection}
        />

        {/* Product Catalog Section */}
        <ProductCatalog
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          rfqList={rfqList}
          onToggleRfq={handleToggleRfq}
          onSelectProduct={setSelectedProductModal}
        />

        {/* OEM Brands Partner Showcase */}
        <BrandShowcase
          onSelectBrandForSearch={handleSelectBrandForSearch}
        />

        {/* Industrial Services Section */}
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
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Product Details Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        isInRfq={isCurrentProductInRfq}
        onToggleRfq={handleToggleRfq}
        onQuickInquire={handleQuickInquireProduct}
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
