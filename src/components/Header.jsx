import React from 'react';
import { Coffee } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee size={24} />
          <h1 className="text-2xl font-bold">cafe</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About us</a></li>
            <li><a href="#" className="hover:text-gray-300">Product</a></li>
            <li><a href="#" className="hover:text-gray-300">Location</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;