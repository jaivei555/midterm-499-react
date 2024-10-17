import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto h-full flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white text-center">Time to Coffee</h2>
      </div>
    </div>
  );
};

export default Hero;