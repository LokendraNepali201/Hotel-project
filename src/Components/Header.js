import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo4 from '../images/logo4.png.jpg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenus = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={closeMenus}>
          <img
            src={logo4}
            alt="Royal Hotel Logo"
            className="h-16 w-auto object-contain scale-125 -my-1"
          />
        </NavLink>

        {/* Hamburger Icon */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex items-center">
          <NavLink to="/" className="text-white hover:text-yellow-400 font-medium">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-yellow-400 font-medium">
            About Us
          </NavLink>
          <NavLink to="/rooms" className="text-white hover:text-yellow-400 font-medium">
            Rooms
          </NavLink>

          {/* Foods Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-yellow-400 font-medium flex items-center gap-1"
            >
              Foods <span className="text-sm">▾</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white text-gray-900 mt-2 rounded shadow-lg min-w-[140px] z-50">
                <NavLink to="/foods/nepali" className="block px-4 py-2 hover:bg-yellow-100" onClick={closeMenus}>Nepali</NavLink>
                <NavLink to="/foods/indian" className="block px-4 py-2 hover:bg-yellow-100" onClick={closeMenus}>Indian</NavLink>
                <NavLink to="/foods/chinese" className="block px-4 py-2 hover:bg-yellow-100" onClick={closeMenus}>Chinese</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="text-white hover:text-yellow-400 font-medium">
            Contact Us
          </NavLink>

          <NavLink to="/signup" className="text-white hover:text-yellow-400 font-medium">
            Signup
          </NavLink>
          

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-black">
          <NavLink to="/" onClick={closeMenus} className="block text-white hover:text-yellow-400 font-medium">Home</NavLink>
          <NavLink to="/about" onClick={closeMenus} className="block text-white hover:text-yellow-400 font-medium">About Us</NavLink>
          <NavLink to="/rooms" onClick={closeMenus} className="block text-white hover:text-yellow-400 font-medium">Rooms</NavLink>
          
          {/* Mobile Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white hover:text-yellow-400 font-medium flex items-center gap-1">
              Foods <span className="text-sm">▾</span>
            </button>
            {isDropdownOpen && (
              <div className="bg-white text-gray-900 mt-2 rounded shadow-lg z-50">
                <NavLink to="/foods/nepali" className="block px-4 py-2 hover:bg-yellow-100" onClick={closeMenus}>Nepali</NavLink>
                <NavLink to="/foods/indian" className="block px-4 py-2 hover:bg-yellow-100" onClick={closeMenus}>Indian</NavLink>
                <NavLink to="/foods/chinese" className="block px-4 py-2 hover:bg-yellow-100" onClick={closeMenus}>Chinese</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" onClick={closeMenus} className="block text-white hover:text-yellow-400 font-medium">Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
