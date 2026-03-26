import React, { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../marketplace/ProductCard';
import CategoryFilter from './CategoryFilter';
import CategoryHeader from './CategoryHeader';

const CategoryPageLayout = ({ title, icon, description, products }) => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: '',
    rating: null,
    discount: null,
    sort: 'popular',
  });

  const handleFilterChange = (key, value) => {
    if (key === 'reset') {
      setFilters({ priceRange: '', rating: null, discount: null, sort: 'popular' });
      return;
    }
    setFilters((prev) => ({
      ...prev,
      [key]:
        prev[key] === value
          ? key === 'sort'
            ? 'popular'
            : key === 'rating' || key === 'discount'
              ? null
              : ''
          : value,
    }));
  };

  // Parse price from string (e.g., "$49.99" -> 49.99)
  const parsePrice = (priceStr) => {
    return parseFloat(priceStr?.replace(/[\$,]/g, '') || 0);
  };

  // Get filtered and sorted products
  const getFilteredAndSortedProducts = () => {
    let filtered = [...products];

    // Apply sorting
    if (filters.sort === 'price-low') {
      filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (filters.sort === 'price-high') {
      filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (filters.sort === 'rating') {
      filtered.sort((a, b) => parseFloat(b.rating || 0) - parseFloat(a.rating || 0));
    }
    // 'popular' and 'newest' keep original order

    return filtered;
  };

  const sortedProducts = getFilteredAndSortedProducts();

  return (
    <section className="px-3 py-6 min-[640px]:px-4 min-[900px]:px-8 min-[900px]:py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-2 min-[640px]:flex-row min-[640px]:items-center min-[640px]:justify-between">
          <CategoryHeader title={title} description={description} />
          <div className="flex items-center gap-3">
            <span className="text-gray text-[0.8rem]">{products.length} products</span>
            <select
              value={filters.sort}
              onChange={(e) => handleFilterChange('sort', e.target.value)}
              className="bg-card focus:border-teal text-gray2 hover:border-teal/50 cursor-pointer rounded border border-white/10 px-3 py-2 text-[0.75rem] font-medium transition-colors outline-none min-[640px]:text-[0.8rem]"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="bg-card text-gray2 hover:border-teal/50 hover:text-teal flex items-center gap-1.5 rounded border border-white/10 px-3 py-2 text-[0.8rem] transition-colors min-[900px]:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Desktop Filter */}
          <div className="hidden min-[900px]:block">
            <CategoryFilter filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Mobile Filter Overlay */}
          {mobileFilterOpen && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/60 min-[900px]:hidden"
                onClick={() => setMobileFilterOpen(false)}
              />
              <div className="bg-navy2 fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto p-4 min-[900px]:hidden">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-['Syne'] text-sm font-bold text-white">Filters</span>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-gray2 transition-colors hover:text-white"
                  >
                    <X size={20} />
                  </button>
                </div>
                <CategoryFilter filters={filters} onFilterChange={handleFilterChange} />
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-2 min-[375px]:grid-cols-2 min-[375px]:gap-2 min-[640px]:gap-3 min-[768px]:gap-4 min-[1024px]:grid-cols-3 min-[1280px]:grid-cols-4">
              {sortedProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPageLayout;
