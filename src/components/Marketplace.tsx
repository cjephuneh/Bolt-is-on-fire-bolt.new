import React from 'react';
import { useNavigate } from 'react-router-dom';

const fishData = [
  { name: 'Fresh Salmon', price: 12.99, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Wild Tuna', price: 15.99, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Cod Fillet', price: 9.99, image: 'https://images.unsplash.com/photo-1519708042361-0780f4caa7e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Fresh Shrimp', price: 14.99, image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const Marketplace: React.FC = () => {
  const navigate = useNavigate();

  const handleAddToCart = (fish: { name: string; price: number }) => {
    // In a real application, you'd add the item to the cart here
    // For now, we'll just navigate to the payment page with the item details
    navigate('/payment', { state: { item: fish } });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Today's Catch</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fishData.map((fish, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={fish.image} alt={fish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{fish.name}</h3>
                <p className="text-gray-600 mb-4">${fish.price.toFixed(2)} / lb</p>
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  onClick={() => handleAddToCart(fish)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;