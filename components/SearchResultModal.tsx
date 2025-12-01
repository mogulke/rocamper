import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface SearchResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: Product[];
  message: string;
}

const SearchResultModal: React.FC<SearchResultModalProps> = ({ isOpen, onClose, results, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-dark" />
        </button>

        <div className="flex items-center gap-2 mb-6 text-primary">
          <Sparkles className="w-5 h-5" />
          <span className="font-bold text-sm tracking-wide uppercase">AI Recommendations</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-2">
          We found these for you
        </h2>
        <p className="text-gray-500 mb-8 text-lg">{message}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <div key={product.id} className="border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition-shadow">
              <div className="h-48 rounded-xl overflow-hidden mb-4 bg-gray-50">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-dark mb-1">{product.name}</h3>
              <p className="text-primary font-bold">${product.price}</p>
              <button className="mt-4 w-full py-2 bg-dark text-white rounded-lg text-sm font-medium hover:bg-primary transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
        
        {results.length === 0 && (
           <div className="text-center py-20 text-gray-400">
             <p>No matching products found. Try a different search!</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultModal;