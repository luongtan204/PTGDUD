import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-500">Cheffify</h1>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-700 font-medium">Home</a>
          <a href="#" className="text-gray-700 font-medium">Recipes</a>
          <a href="#" className="text-gray-700 font-medium">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;