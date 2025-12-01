import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import Tooltip from './Tooltip';

interface TopPicksProps {
  products: Product[];
  title?: string;
}

const TopPicks: React.FC<TopPicksProps> = ({ products, title = "Explore Our Top Picks" }) => {
  return (
    <section id="shop" className="bg-white w-full py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark leading-[1.1]">
              {title.split(' ').slice(0, 2).join(' ')} <br />
              <span className="text-gray-800">{title.split(' ').slice(2).join(' ')}</span>
            </h2>
          </div>
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Tooltip text="Previous">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-dark hover:text-white transition-all hover:scale-110 active:scale-95">
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Tooltip>
            <Tooltip text="Next">
              <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-dark hover:text-white transition-all hover:scale-110 active:scale-95">
                <ArrowRight className="w-5 h-5" />
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product, index) => (
            <div 
              key={product.id} 
              className="group cursor-pointer animate-fade-in-up" 
              style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
            >
              <div className="bg-[#F8F8F8] rounded-[2rem] p-8 mb-6 relative overflow-hidden h-[400px] flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/5">
                 {/* Circle Background */}
                 <div className="absolute w-[80%] h-[80%] bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl transform scale-75 group-hover:scale-100"></div>
                 
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="relative z-10 w-full h-full object-contain drop-shadow-lg transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                 />
                 
                 {/* Quick Action Overlay */}
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-20">
                    <button className="bg-white text-dark font-bold px-6 py-2 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors text-sm">
                      Quick View
                    </button>
                 </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                {product.description && <p className="text-gray-500 text-sm mb-3 line-clamp-1">{product.description}</p>}
                <div className="flex items-center gap-3">
                   <span className="text-lg font-bold text-dark">${product.price}</span>
                   {product.rentalPrice && <span className="text-gray-400 text-xs font-medium px-2 py-1 bg-gray-100 rounded-md">Rent: ${product.rentalPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 w-full h-[2px] bg-gray-100 relative overflow-hidden rounded-full">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-dark rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;