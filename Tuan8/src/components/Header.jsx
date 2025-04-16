import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="img/chefify.png" alt="Logo" className="h-8" />
          
        </div>

        {/* Search Bar */}
        <div className="relative w-[374px]">
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full h-11 pl-10 pr-4 text-gray-700 text-sm rounded-lg bg-gray-100 border-none outline-none focus:ring-2 focus:ring-pink-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <a href="#" className="text-gray-700 font-medium hover:text-pink-500">
            What to cook
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-pink-500">
            Recipes
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-pink-500">
            Ingredients
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-pink-500">
            Occasions
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-pink-500">
            About Us
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-4 py-2 text-pink-500 bg-pink-100 rounded-lg hover:bg-pink-200">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;