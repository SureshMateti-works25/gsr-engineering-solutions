import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Layers, 
  SlidersHorizontal, 
  RotateCcw,
  Cog,
  Zap,
  Cpu,
  Wind
} from 'lucide-react';
import type { ProductItem, ProductCategory, RfqItem } from '../types';
import { productsData, productCategoriesList } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  rfqList: RfqItem[];
  onToggleRfq: (product: ProductItem) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  rfqList,
  onToggleRfq,
  onSelectProduct
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');

  // Extract all unique brands and subcategories for the active category
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    productsData.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        p.brands.forEach(b => brandsSet.add(b));
      }
    });
    return Array.from(brandsSet).sort();
  }, [selectedCategory]);

  const availableSubCategories = useMemo(() => {
    const subSet = new Set<string>();
    productsData.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        subSet.add(p.subCategory);
      }
    });
    return Array.from(subSet).sort();
  }, [selectedCategory]);

  // Filter products by category, search query, brand, and subcategory
  const filteredProducts = useMemo(() => {
    return productsData.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'all' && !p.brands.includes(selectedBrand)) {
        return false;
      }

      // SubCategory filter
      if (selectedSubCategory !== 'all' && p.subCategory !== selectedSubCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesSub = p.subCategory.toLowerCase().includes(q);
        const matchesSpecs = p.specifications.some(s => s.toLowerCase().includes(q));
        const matchesBrand = p.brands.some(b => b.toLowerCase().includes(q));
        const matchesApp = p.applications.some(a => a.toLowerCase().includes(q));

        if (!matchesName && !matchesTagline && !matchesDesc && !matchesSub && !matchesSpecs && !matchesBrand && !matchesApp) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedBrand, selectedSubCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedSubCategory('all');
    onSearchChange('');
    onSelectCategory('all');
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'mechanical': return Cog;
      case 'electrical': return Zap;
      case 'electronics-automation': return Cpu;
      case 'pneumatics': return Wind;
      default: return Layers;
    }
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-slate-100/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            Complete Industrial Product Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High Precision Components & OEM Supplies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Source high-grade Mechanical, Electrical, Electronics, and Pneumatics products backed by manufacturer test certificates and guaranteed reliability.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 scrollbar-none">
          {productCategoriesList.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id as ProductCategory);
                  setSelectedBrand('all');
                  setSelectedSubCategory('all');
                }}
                className={`whitespace-nowrap flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/30'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                  isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Inline search box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Filter by keyword, part name, grade, specification..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sub-category dropdown */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedSubCategory}
                onChange={(e) => setSelectedSubCategory(e.target.value)}
                className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-700 font-medium focus:outline-none focus:bg-white focus:border-blue-600"
              >
                <option value="all">All Sub-Categories</option>
                {availableSubCategories.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>

              {/* Brand dropdown */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-700 font-medium focus:outline-none focus:bg-white focus:border-blue-600"
              >
                <option value="all">All OEM Brands</option>
                {availableBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>

              {/* Reset filter button if any active */}
              {(selectedBrand !== 'all' || selectedSubCategory !== 'all' || searchQuery !== '' || selectedCategory !== 'all') && (
                <button
                  onClick={resetFilters}
                  className="p-2.5 rounded-xl text-xs text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors flex items-center gap-1 border border-amber-300 font-semibold"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div>
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> industrial items
              {searchQuery && <span> matching "<span className="text-blue-600 font-semibold">{searchQuery}</span>"</span>}
            </div>
            <div className="hidden sm:flex items-center gap-2 text-slate-500">
              <span>Quick Actions:</span>
              <span className="text-emerald-600 font-semibold">WhatsApp Quote</span>
              <span>•</span>
              <span className="text-blue-600 font-semibold">Add to RFQ List</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isInRfq = rfqList.some(item => item.product.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  isInRfq={isInRfq}
                  onToggleRfq={onToggleRfq}
                  onSelectProduct={onSelectProduct}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-white border border-dashed border-slate-300 p-8 shadow-xs">
            <SlidersHorizontal className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md mx-auto">
              We supply thousands of custom items not listed here. Try clearing filters or submit a custom inquiry.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm"
            >
              Reset Filters & View All
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
