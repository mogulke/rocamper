import React from 'react';
import { Tent, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Tent className="w-8 h-8 text-primary" />
            <span className="text-2xl font-display font-bold">ROCAMPER</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Your ultimate companion for outdoor adventures. Quality gear for quality times.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Shop</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="hover:text-primary cursor-pointer">Tents</li>
            <li className="hover:text-primary cursor-pointer">Sleeping Bags</li>
            <li className="hover:text-primary cursor-pointer">Camping Furniture</li>
            <li className="hover:text-primary cursor-pointer">Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Sustainability</li>
            <li className="hover:text-primary cursor-pointer">Careers</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-gray-500 text-sm mb-4">Subscribe to get special offers and news.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-lg outline-none text-sm text-white w-full" />
            <button className="bg-primary px-4 py-2 rounded-r-lg font-bold text-sm hover:bg-orange-500">Join</button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Rocamper Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;