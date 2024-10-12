import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">FishNet</h3>
            <p className="text-blue-200">Connecting the seafood industry, one catch at a time.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Marketplace</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-blue-200">123 Seaside Avenue<br />Fishtown, Ocean State 12345</p>
            <p className="text-blue-200 mt-2">Phone: (123) 456-7890<br />Email: info@fishnet.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white"><Facebook /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Twitter /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-200">
          <p>&copy; 2024 FishNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;