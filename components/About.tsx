import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-dark text-white py-32 px-6 md:px-20 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content - Image Collage */}
        <div className="relative animate-fade-in-up">
          <div className="rounded-[3rem] overflow-hidden w-full h-[550px] relative z-10 border border-white/10 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop" alt="Camper" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          {/* Floating Small Image */}
          <div className="absolute -bottom-12 -right-12 w-56 h-40 rounded-[2rem] overflow-hidden border-8 border-dark z-20 hidden md:block shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop" alt="Tent" className="w-full h-full object-cover" />
          </div>

          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-32 h-32 border border-white/10 rounded-full z-0"></div>
        </div>

        {/* Right Content - Text */}
        <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-8">
            Empowering Outdoor <br />
            Adventures <span className="text-gray-500">Where</span> <br />
            <span className="text-primary">Quality</span> Meets Nature
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed max-w-lg text-lg">
            At Rocamper, we understand the importance of reliable gear when exploring the great outdoors. Our carefully curated selection includes cutting-edge tents engineered for durability.
          </p>
          
          <button className="w-fit px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-dark transition-all flex items-center gap-3 mb-16 font-bold tracking-wide group">
            About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <h4 className="text-4xl font-display font-bold text-white mb-2">20k</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Products</p>
            </div>
            <div>
              <h4 className="text-4xl font-display font-bold text-white mb-2">95%</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Satisfaction</p>
            </div>
            <div>
              <h4 className="text-4xl font-display font-bold text-white mb-2">45k</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Customers</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;