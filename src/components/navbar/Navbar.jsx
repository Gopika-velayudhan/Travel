import React, { useState } from 'react';
import logo from '../assets/Vector.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b shadow-lg p-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Travlog Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Travlog</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/landing" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/destination" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
            Discover
          </Link>
          <Link to="/deals" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
            Special Deals
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-600 hover:text-gray-800">Log In</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Sign Up</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg mt-2">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/landing" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/destination" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
              Discover
            </Link>
            <Link to="/deals" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
              Special Deals
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-800" onClick={closeMenu}>
              Contact
            </Link>
            <button className="text-gray-600 hover:text-gray-800">Log In</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
