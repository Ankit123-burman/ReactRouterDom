import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive}) =>`text-white ${isActive ? "bg-blue-700" : "hover:bg-blue-500"} hover:text-gray-400`}>
            Home
          </NavLink>
          <NavLink to="/logout" className={({ isActive}) =>`text-white ${isActive ? "bg-blue-700" : "hover:bg-blue-500"} hover:text-gray-400`}>
            logOut
          </NavLink>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="/" className="block text-white bg-gray-700 p-2 rounded">
            Home
          </a>
          <a href="/about" className="block text-white bg-gray-700 p-2 rounded">
            About
          </a>
          <a href="/services" className="block text-white bg-gray-700 p-2 rounded">
            Services
          </a>
          <a href="/contact" className="block text-white bg-gray-700 p-2 rounded">
            LogOut
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
