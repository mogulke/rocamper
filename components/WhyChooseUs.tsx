import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div className="animate-fade-in-up">
           <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Promise</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-16 leading-tight">
             Why Outdoor Lovers <br /> Choose <span className="text-primary">Rocamper</span>?
           </h2>
           
           <div className="space-y-12">
             <div className="flex gap-8 group">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <Truck className="w-7 h-7" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-dark mb-3">Free Shipping</h4>
                 <p className="text-gray-500 leading-relaxed max-w-sm">
                   Enjoy free shipping on orders above $400. We handle the logistics so you can focus on the adventure map.
                 </p>
               </div>
             </div>

             <div className="flex gap-8 group">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <ShieldCheck className="w-7 h-7" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-dark mb-3">Unmatched Quality</h4>
                 <p className="text-gray-500 leading-relaxed max-w-sm">
                   We partner with top-tier brands and conduct rigorous quality checks. No compromise on safety.
                 </p>
               </div>
             </div>

             <div className="flex gap-8 group">
               <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <RefreshCw className="w-7 h-7" />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-dark mb-3">Easy Returns</h4>
                 <p className="text-gray-500 leading-relaxed max-w-sm">
                   Not satisfied? Return it within 30 days. No questions asked. We want you to be 100% happy with your gear.
                 </p>
               </div>
             </div>
           </div>
        </div>

        {/* Right Content - Images */}
        <div className="relative h-[600px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
           <div className="grid grid-cols-2 gap-6 h-full">
             <div className="space-y-6 pt-16">
               <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="Hiker" />
               <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1974&auto=format&fit=crop" className="w-full h-72 object-cover rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="Hiker" />
             </div>
             <div className="space-y-6">
               <img src="https://images.unsplash.com/photo-1496545672479-7ac37b969871?q=80&w=1974&auto=format&fit=crop" className="w-full h-72 object-cover rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="Camp" />
               <img src="https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=2070&auto=format&fit=crop" className="w-full h-56 object-cover rounded-[2rem] shadow-lg hover:scale-[1.02] transition-transform duration-500" alt="Camp" />
             </div>
           </div>
           
           {/* Review Card Overlay */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-5 min-w-[280px] border border-white/50 animate-bounce" style={{ animationDuration: '3s' }}>
             <div className="flex -space-x-3">
               <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-[3px] border-white" alt="User" />
               <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-[3px] border-white" alt="User" />
               <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full border-[3px] border-white" alt="User" />
             </div>
             <div>
               <div className="flex text-primary text-xs mb-1">
                 <Star className="w-3.5 h-3.5 fill-current" />
                 <Star className="w-3.5 h-3.5 fill-current" />
                 <Star className="w-3.5 h-3.5 fill-current" />
                 <Star className="w-3.5 h-3.5 fill-current" />
                 <Star className="w-3.5 h-3.5 fill-current" />
               </div>
               <p className="text-sm font-bold text-dark">4.9/5 Average Rating</p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;