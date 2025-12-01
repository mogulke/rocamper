import React, { useState } from 'react';
import { Search, ArrowDown } from 'lucide-react';
import { searchProductsWithGemini } from '../services/geminiService';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface HeroProps {
  onSearchResults: (results: Product[], message: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    const { productIds, message } = await searchProductsWithGemini(query);
    
    const results = PRODUCTS.filter(p => productIds.includes(p.id));
    const finalResults = results.length > 0 ? results : PRODUCTS; 
    
    onSearchResults(finalResults, message);
    setIsSearching(false);
  };

  return (
    <section className="relative w-full h-screen bg-dark overflow-hidden flex flex-col justify-center px-6 md:px-20 pt-20">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop" 
          alt="Camping Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent"></div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-30 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start w-full">
          <span className="text-primary font-medium tracking-[0.2em] mb-4 text-lg md:text-xl uppercase animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Never Stop
          </span>
          
          {/* Huge Typography */}
          <h1 className="text-white text-[15vw] md:text-[160px] lg:text-[200px] font-display font-black leading-[0.85] tracking-tighter opacity-100 select-none animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            EXPLORING
          </h1>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch} 
            className="mt-12 md:mt-16 w-full max-w-xl relative group animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 focus-within:border-primary/50 transition-all shadow-2xl shadow-black/50">
              <input
                type="text"
                placeholder="Search Your Product"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder-gray-300 font-medium text-lg"
              />
              <button 
                type="submit"
                disabled={isSearching}
                className="bg-primary hover:bg-[#ffb336] text-white text-sm font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
              >
                {isSearching ? '...' : 'SEARCH'}
                {!isSearching && <Search className="w-4 h-4" />}
              </button>
            </div>
            {isSearching && (
              <div className="absolute -bottom-8 left-6 text-xs text-primary/90 animate-pulse font-medium">
                AI is searching the wilderness for you...
              </div>
            )}
          </form>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer animate-bounce z-20">
        <span className="text-[10px] uppercase tracking-widest writing-vertical-rl rotate-180 font-medium">Scroll down to explore</span>
        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;