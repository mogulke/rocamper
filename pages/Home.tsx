import React, { useState } from 'react';
import Hero from '../components/Hero';
import TopPicks from '../components/TopPicks';
import About from '../components/About';
import Rental from '../components/Rental';
import WhyChooseUs from '../components/WhyChooseUs';
import SearchResultModal from '../components/SearchResultModal';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearchResults = (results: Product[], message: string) => {
    setSearchResults(results);
    setSearchMessage(message);
    setIsSearchOpen(true);
  };

  return (
    <>
      <Hero onSearchResults={handleSearchResults} />
      <TopPicks products={PRODUCTS.slice(0, 3)} />
      <About />
      <Rental />
      <WhyChooseUs />
      
      <SearchResultModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        results={searchResults}
        message={searchMessage}
      />
    </>
  );
};

export default Home;