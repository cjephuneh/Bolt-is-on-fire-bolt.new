import React from 'react';
import { Anchor } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to FishNet</h1>
        <p className="text-xl mb-8">Connecting Fishermen and Fishmongers in a Sea of Opportunity</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            I'm a Fisherman
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
            I'm a Fishmonger
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;