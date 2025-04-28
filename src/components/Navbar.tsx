import React, { useState } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';
import logo from "../assets/logo.svg"
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} width={150} className='rounded-lg p-5'/>
              
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#home" className="border-transparent text-gray-700 hover:text-[#327fd1] hover:border-[#327fd1] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#services" className="border-transparent text-gray-700 hover:text-[#327fd1] hover:border-[#327fd1] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Services
              </a>
              <a href="#about" className="border-transparent text-gray-700 hover:text-[#327fd1] hover:border-[#327fd1] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About Us
              </a>
              <a href="#process" className="border-transparent text-gray-700 hover:text-[#327fd1] hover:border-[#327fd1] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Process
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#327fd1] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Contact Us
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#home" className="bg-white text-blue-800 block pl-3 pr-4 py-2 border-l-4 border-blue-800 text-base font-medium" onClick={toggleMenu}>
              Home
            </a>
            <a href="#services" className="border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={toggleMenu}>
              Services
            </a>
            <a href="#about" className="border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#process" className="border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={toggleMenu}>
              Process
            </a>
            <a href="#testimonials" className="border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="#faq" className="border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={toggleMenu}>
              FAQ
            </a>
            <a href="#contact" className="border-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium" onClick={toggleMenu}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;