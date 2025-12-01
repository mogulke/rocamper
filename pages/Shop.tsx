
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Sparkles, ShoppingCart, Filter, ChevronDown, Star, X } from 'lucide-react';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

const Shop: React.FC = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Derived Data
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const maxProductPrice = Math.max(...PRODUCTS.map(p => p.price));

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category Filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      
      // Price Filter
      if (product.price > maxPrice) return false;

      // Rating Filter
      if ((product.rating || 0) < minRating) return false;

      return true;
    }).sort((a, b) => {
      // Sort Logic
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'featured':
        default:
          return 0; // Keep original order
      }
    });
  }, [selectedCategory, maxPrice, minRating, sortBy]);

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 animate-fade-in-up">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-4">
              Shop <span className="text-primary">Gear</span>
            </h1>
            <p className="text-gray-500 max-w-lg">
              Explore our complete collection of premium camping equipment.
            </p>
          </div>
          
          {/* Mobile Filter Toggle & Sort (Visible on Mobile) */}
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-bold flex-1 justify-center"
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
            
            <div className="relative group flex-1 md:flex-none">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none w-full md:w-48 px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-bold text-dark focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className={`
            fixed md:static inset-0 z-50 bg-white md:bg-transparent p-6 md:p-0 overflow-y-auto md:overflow-visible transition-transform duration-300 md:translate-x-0 w-full md:w-64 flex-shrink-0
            ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}
          `}>
            <div className="flex justify-between items-center md:hidden mb-6">
              <h2 className="text-xl font-bold font-display">Filters</h2>
              <button onClick={() => setIsMobileFiltersOpen(false)}><X className="w-6 h-6" /></button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-dark font-bold mb-4 font-display text-lg">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedCategory === category ? 'border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                      {selectedCategory === category && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                    <input 
                      type="radio" 
                      name="category" 
                      value={category} 
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="hidden" 
                    />
                    <span className={`text-sm ${selectedCategory === category ? 'text-dark font-bold' : 'text-gray-500 group-hover:text-dark'}`}>
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-dark font-bold mb-4 font-display text-lg">Max Price</h3>
              <div className="px-2">
                 <input 
                   type="range" 
                   min="0" 
                   max={maxProductPrice} 
                   value={maxPrice} 
                   onChange={(e) => setMaxPrice(Number(e.target.value))}
                   className="w-full accent-primary h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                 />
                 <div className="flex justify-between mt-2 text-sm font-bold text-gray-500">
                   <span>$0</span>
                   <span className="text-primary">${maxPrice}</span>
                 </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-8">
              <h3 className="text-dark font-bold mb-4 font-display text-lg">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2].map(rating => (
                  <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${minRating === rating ? 'bg-primary border-primary text-white' : 'border-gray-300 group-hover:border-primary'}`}>
                      {minRating === rating && <span className="text-xs">✓</span>}
                    </div>
                    <input 
                      type="radio" 
                      name="rating" 
                      checked={minRating === rating}
                      onChange={() => setMinRating(minRating === rating ? 0 : rating)}
                      onClick={() => { if(minRating === rating) setMinRating(0); }} // Allow toggle off
                      className="hidden" 
                    />
                    <div className="flex items-center gap-1">
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'fill-current' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">& Up</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setMaxPrice(maxProductPrice);
                setMinRating(0);
                setSortBy('featured');
              }}
              className="w-full py-3 border border-gray-200 rounded-lg text-sm font-bold text-gray-500 hover:text-dark hover:border-dark transition-colors"
            >
              Reset Filters
            </button>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
             <div className="flex justify-between items-center mb-6">
                <p className="text-gray-400 text-sm font-medium">
                  Showing <span className="text-dark font-bold">{filteredProducts.length}</span> Products
                </p>
             </div>

             {filteredProducts.length === 0 ? (
               <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 dashed">
                 <p className="text-gray-400 text-lg">No products found matching your filters.</p>
                 <button 
                   onClick={() => {setSelectedCategory('All'); setMaxPrice(1000); setMinRating(0);}}
                   className="mt-4 text-primary font-bold hover:underline"
                 >
                   Clear all filters
                 </button>
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="group bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col animate-fade-in-up"
                  >
                    <div className="relative h-60 bg-gray-100 rounded-[1.5rem] overflow-hidden mb-5 group-hover:bg-gray-200 transition-colors">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                      {product.rating && (
                         <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
                           <Star className="w-3 h-3 text-primary fill-current" />
                           {product.rating}
                         </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors leading-tight">{product.name}</h3>
                      </div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                          {product.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                      <span className="text-xl font-bold text-dark">${product.price}</span>
                      <button className="text-xs font-bold border border-dark rounded-full px-4 py-2 hover:bg-dark hover:text-white transition-all">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
