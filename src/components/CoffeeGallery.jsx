import React from 'react';

const coffeeShops = [
  { id: 1, name: 'พลช อมรธรรมสถิต 6403563', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 2, name: '', image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 3, name: '', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const CoffeeGallery = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeShops.map((shop) => (
            <div key={shop.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={shop.image} alt={shop.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{shop.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeGallery;