import React from 'react';
import AboutSection from '../components/About';
import { Users, Target, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <AboutSection />
      
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">Our Core Values</h2>
            <p className="text-gray-500">The principles that guide us into the wild.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Community First</h3>
              <p className="text-gray-500 leading-relaxed">We believe in building a community of explorers who support and inspire each other.</p>
            </div>
            
            <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Quality Driven</h3>
              <p className="text-gray-500 leading-relaxed">We only stock gear that we would trust with our own lives in the wilderness.</p>
            </div>

            <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">Eco Conscious</h3>
              <p className="text-gray-500 leading-relaxed">Preserving nature is our priority. We support sustainable brands and practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-dark text-white text-center">
        <h2 className="text-3xl font-display font-bold mb-8">Ready to start your adventure?</h2>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;