import React, { useState } from 'react';
import {
  FaHome,
  FaServicestack,
  FaUsers,
  FaCog,
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Menubar = ({ onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sidebarClasses = `
    fixed top-0 left-0 h-full w-64
    transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
    transition-transform duration-300 ease-in-out
    bg-white text-black
    z-50 shadow-lg
  `;

  const menuItemStyle =
    'flex items-center justify-between gap-3 py-3 px-4 rounded cursor-pointer hover:bg-red-500 hover:text-white transition-all';

  const dropdownItemStyle =
    'block py-2 px-6 text-sm hover:bg-red-500 hover:text-white cursor-pointer rounded';

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold"> Admin Panel</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={sidebarClasses}>
        <h2 className="text-2xl font-bold mb-6 px-4 py-2 hidden md:block">
         Admin Panel
        </h2>
        <nav className="space-y-2">
          {/* Dashboard */}
          <div
            className={menuItemStyle}
            onClick={() => {
              onNavigate('dashboard');
              setIsOpen(false);
            }}
          >
            <span className="flex items-center gap-3">
              <FaHome /> Dashboard
            </span>
          </div>

          {/* Manage Services Dropdown */}
          <div
            className={menuItemStyle}
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <span className="flex items-center gap-3">
              <FaServicestack /> Manage Services
            </span>
            {openDropdown ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {openDropdown && (
            <div className="ml-4">
              <div
                className={dropdownItemStyle}
                onClick={() => {
                  onNavigate('Service');
                  setIsOpen(false);
                }}
              >
                ➕ Add Service
              </div>
              <div
                className={dropdownItemStyle}
                onClick={() => {
                  onNavigate('Product');
                  setIsOpen(false);
                }}
              >
                ➕ Add Product
              </div>
              <div
                className={dropdownItemStyle}
                onClick={() => {
                  onNavigate('EditProduct');
                  setIsOpen(false);
                }}
              >
                ✏️ Edit Product
              </div>
              <div
                className={dropdownItemStyle}
                onClick={() => {
                  onNavigate('Product');
                  setIsOpen(false);
                }}
              >
                ➕ Admin Add Product
              </div>
            </div>
          )}

          {/* Members */}
          <div
            className={menuItemStyle}
            onClick={() => {
              onNavigate('members');
              setIsOpen(false);
            }}
          >
            <span className="flex items-center gap-3">
              <FaUsers /> Members
            </span>
          </div>

          {/* Settings */}
          <div
            className={menuItemStyle}
            onClick={() => {
              onNavigate('settings');
              setIsOpen(false);
            }}
          >
            <span className="flex items-center gap-3">
              <FaCog /> Settings
            </span>
          </div>
        </nav>
      </div>

      {/* Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Menubar;
