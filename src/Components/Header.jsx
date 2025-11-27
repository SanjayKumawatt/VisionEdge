import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, BrainCircuit } from 'lucide-react';
import logo from "../assets/logo.png";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  // Dropdown Items jo image mein hain
  const serviceItems = [
    "Web Design",
    "Logo Design Services",
    "Web Development",
    "Content Management System",
    "Ecommerce Development",
    "Mobile Application Development"
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO SECTION */}
          <Link to={"/"}>
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="logo" className='h-16' />
            </div>
          </Link>
          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 font-semibold hover:text-blue-700 transition">
              HOME
            </Link>

            <Link to="/about" className="text-gray-600 font-medium hover:text-blue-600 transition">
              ABOUT US
            </Link>

            {/* Services Dropdown (Desktop Hover) */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-600 font-semibold hover:text-blue-700 focus:outline-none transition"
              >
                SERVICES
                <ChevronDown className="w-4 h-4 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-b border-gray-50 last:border-0 transition"
                    >
                      {item.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-gray-600 font-medium hover:text-blue-600 transition">
              CONTACT US
            </Link>
          </div>

          {/* CTA BUTTON (Desktop) */}
          <div className="hidden md:block">
            <Link to={"/contact"}>
              <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-bold shadow-md transition-colors duration-300">
                GET IN TOUCH NOW
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Slide down) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              to="/"
              className="block px-3 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>

            <Link
              to="/about"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                className="flex justify-between items-center w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                SERVICES
                <ChevronDown className={`w-5 h-5 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServiceDropdownOpen && (
                <div className="pl-6 space-y-1 mt-1 bg-gray-50 rounded-md">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>

            <div className="pt-4">
              <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-md font-bold hover:bg-blue-700 transition">
                GET IN TOUCH NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;