import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CoffeeGallery from './components/CoffeeGallery';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <CoffeeGallery />
      </main>
    </div>
  );
};

export default App;