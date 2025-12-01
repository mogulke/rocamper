import React from 'react';
import Rental from '../components/Rental';
import { CheckCircle2 } from 'lucide-react';

const Packages: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Packages Hero */}
      <section className="bg-dark text-white py-20 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
            Rental <span className="text-primary">Packages</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Everything you need for your adventure, bundled together for convenience and value. 
            Choose the package that fits your group size.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {['Flexible Dates', 'Clean & Sanitized', 'Premium Brands', '24/7 Support'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse Rental Component */}
      <div className="-mt-20">
        <Rental />
      </div>

      {/* Additional Info */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-dark mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-50">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">1</div>
              <h3 className="font-bold text-dark mb-2">Select Gear</h3>
              <p className="text-sm text-gray-500">Choose your package or customize your gear list online.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">2</div>
              <h3 className="font-bold text-dark mb-2">Pick Up or Delivery</h3>
              <p className="text-sm text-gray-500">Collect from our store or get it delivered to your campsite.</p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">3</div>
              <h3 className="font-bold text-dark mb-2">Enjoy & Return</h3>
              <p className="text-sm text-gray-500">Have a blast! Simply return the gear when you're done.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;