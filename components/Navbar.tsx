import React from 'react';
import { ShoppingBag, Heart, User, Tent } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import Tooltip from './Tooltip';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between text-white animate-fade-in">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer group">
        <Tent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
        <span className="text-2xl font-display font-bold tracking-wide">ROCAMPER</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full hover:text-primary ${isActive ? 'text-primary after:w-full opacity-100' : 'opacity-70 hover:opacity-100'}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <Tooltip text="Favorites">
          <button className="hover:text-primary transition-colors p-1">
            <Heart className="w-5 h-5" />
          </button>
        </Tooltip>
        
        <Tooltip text="View Cart">
          <button className="relative hover:text-primary transition-colors p-1">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white rounded-full text-[10px] flex items-center justify-center font-bold shadow-sm">
              2
            </span>
          </button>
        </Tooltip>

        <Tooltip text="My Profile">
          <button className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden border-2 border-transparent hover:border-primary transition-all ring-2 ring-white/10">
            <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-full h-full object-cover" />
          </button>
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;