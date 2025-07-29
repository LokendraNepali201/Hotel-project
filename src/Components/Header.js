import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo4 from '../images/logo4.png.jpg'
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="bg-black shadow-lg fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo4}
              alt="Royal Hotel Logo"
              className="h-16 w-auto object-contain scale-125 -my-1"
            />
          </NavLink>

          {/* Navigation Links */}
          <div className="space-x-6 hidden md:flex items-center relative z-50">
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
                className="text-white hover:text-yellow-400 font-medium focus:outline-none flex items-center gap-1"
              >
                Foods
                <span className="text-sm">▾</span> 
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 top-full bg-white text-gray-900 mt-2 rounded shadow-lg min-w-[140px] z-50">
                  <NavLink to="/foods/nepali" className="block px-4 py-2 hover:bg-yellow-100" onClick={() => setIsDropdownOpen(false)}>
                    Nepali
                  </NavLink>
                  <NavLink to="/foods/indian" className="block px-4 py-2 hover:bg-yellow-100" onClick={() => setIsDropdownOpen(false)}>
                    Indian
                  </NavLink>
                  <NavLink to="/foods/chinese" className="block px-4 py-2 hover:bg-yellow-100" onClick={() => setIsDropdownOpen(false)}>
                    Chinese
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact" className="text-white hover:text-yellow-400 font-medium">
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
