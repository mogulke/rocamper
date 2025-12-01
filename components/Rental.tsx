import React from 'react';
import { ArrowLeft, ArrowRight, ArrowRightCircle, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../constants';
import Tooltip from './Tooltip';

const Rental: React.FC = () => {
  const rentalProducts = PRODUCTS.filter(p => p.category === 'Rental');

  return (
    <section id="packages" className="bg-[#FAFAFA] py-28 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark w-full md:w-2/3 leading-tight">
            Explore Our <span className="text-gray-400">Camping Gear</span> Rental Service
          </h2>
          <div className="hidden md:flex gap-4">
            <Tooltip text="Previous">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-dark hover:border-dark hover:bg-white transition-all shadow-sm hover:shadow-md">
               <ArrowLeft className="w-5 h-5" />
             </button>
            </Tooltip>
            <Tooltip text="Next">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-dark hover:border-dark hover:bg-white transition-all shadow-sm hover:shadow-md">
               <ArrowRight className="w-5 h-5" />
             </button>
            </Tooltip>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {rentalProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white p-5 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-72 rounded-[1.5rem] overflow-hidden mb-6 relative bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-dark flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Popular
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-baseline gap-1.5 mb-3">
                   <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Starting from</span>
                   <span className="text-2xl font-display font-bold text-primary">${product.rentalPrice}</span>
                   <span className="text-xs text-gray-400">/day</span>
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags?.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-dark group-hover:text-primary text-sm font-bold flex items-center gap-2 transition-all group-hover:translate-x-1">
                  See More Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-dark text-white px-10 py-4 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Browse to All <ArrowRightCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rental;