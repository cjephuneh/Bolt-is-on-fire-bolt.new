import React from 'react';
import { DollarSign, ShieldCheck, Truck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <DollarSign size={48} className="text-blue-500" />,
      title: 'Fair Prices',
      description: 'Get the best prices for your catch or purchase.',
    },
    {
      icon: <ShieldCheck size={48} className="text-blue-500" />,
      title: 'Quality Assurance',
      description: 'We ensure the highest quality of seafood for all transactions.',
    },
    {
      icon: <Truck size={48} className="text-blue-500" />,
      title: 'Efficient Delivery',
      description: 'Fast and reliable delivery from boat to market.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose FishNet?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;