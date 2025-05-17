import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Xhale City"
            className="h-12"
          />
          <span className="font-bold text-xl">SMOKE RHYTHM</span>
        </a>
        <nav className="hidden md:flex space-x-6">
        </nav>
        <div className="md:hidden">
          <button aria-label="Open menu" className="text-gray-700 focus:outline-none">
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
