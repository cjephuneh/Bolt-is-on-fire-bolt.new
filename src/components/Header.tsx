import React from 'react';
import { Fish, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Fish size={32} />
          <span className="text-2xl font-bold">FishNet</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">Marketplace</a>
          <a href="#" className="hover:text-blue-200">About</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;