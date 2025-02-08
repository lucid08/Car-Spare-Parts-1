import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import brakeLogo from "./images/brake.png"; // Ensure the path is correct
import cartIcon from "./images/shopping-cart.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to control category dropdown
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="bg-gray-800 shadow-lg fixed w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={brakeLogo} className="h-10 sm:h-12" alt="Logo" />
          <span className="text-xl sm:text-3xl font-bold text-orange-500">SpareSphere</span>
        </a>

        {/* Mobile Menu & Cart */}
        <div className="flex items-center sm:hidden space-x-4">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
          <a href="/cart" className="text-sm text-white hover:text-orange-500">
            <img src={cartIcon} alt="Cart" className="w-5 h-5" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col sm:flex-row sm:flex ${menuOpen ? 'flex' : 'hidden'} sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:relative bg-gray-800 sm:bg-transparent w-full sm:w-auto left-0 top-16 sm:top-auto shadow-lg sm:shadow-none p-4 sm:p-0`}>
          <a href="/" className="block px-4 py-2 text-white hover:text-orange-500 text-base font-medium transition duration-300">Home</a>
          <a href="/about" className="block px-4 py-2 text-white hover:text-orange-500 text-base font-medium transition duration-300">About</a>
          <a href="/dashboard" className={`block px-4 py-2 text-white hover:text-orange-500 text-base font-medium transition duration-300 ${!isLoggedIn && 'hidden'}`}>Dashboard</a>

         {/* Categories Dropdown with Hover Delay */}
<div className="relative group">
  <button className="text-white hover:text-orange-500 text-base font-medium transition duration-300">
    Categories
  </button>
  <ul className="absolute hidden group-hover:block bg-gray-700 border border-gray-500 rounded-lg shadow-lg mt-2 top-[-100%] z-10">
    <li>
      <button
        onClick={() => handleCategoryClick('engine')}
        className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
      >
        <a href="/category/Engine">Engine</a>
      </button>
    </li>
    <li>
      <button
        onClick={() => handleCategoryClick('tires')}
        className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
      >
        <a href="/category/Tires">Tires</a>
      </button>
    </li>
    <li>
      <button
        onClick={() => handleCategoryClick('electronics')}
        className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
      >
        <a href="/category/Electronics">Electronics</a>
      </button>
    </li>
    <li>
      <button
        onClick={() => handleCategoryClick('brakes')}
        className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
      >
        <a href="/category/Brakes">Brakes</a>
      </button>
    </li>
    <li>
      <button
        onClick={() => handleCategoryClick('accessories')}
        className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-orange-500 transition duration-300"
      >
        <a href="/category/Accessories">Accessories</a>
      </button>
    </li>
  </ul>
</div>
          
          {/* Login/Signup */}
          {!isLoggedIn && (
            <>
              <a href="/login" className="block px-4 py-2 text-white hover:text-orange-500 text-base font-medium transition duration-300">Login</a>
              <a href="/signup" className="block px-4 py-2 text-white hover:text-orange-500 text-base font-medium transition duration-300">Signup</a>
            </>
          )}
        </div>

        {/* Search & Cart */}
        <div className="hidden sm:flex items-center space-x-4">
          {isLoggedIn && (
            <button onClick={handleLogout} className="text-white hover:text-orange-500 text-base font-medium transition duration-300">Logout</button>
          )}
          <a href="/cart" className="text-sm text-white hover:text-orange-500">
            <img src={cartIcon} alt="Cart" className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Mobile Menu with Logout Button */}
      {menuOpen && isLoggedIn && (
        <div className="flex flex-col px-4 bg-gray-800">
          <button onClick={handleLogout} className="text-white hover:text-orange-500 text-base font-medium transition duration-300">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


