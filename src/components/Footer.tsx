import React from 'react';
import { CreditCard, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Dhanmitra</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your trusted partner for debt relief and financial freedom. We help you overcome debt and build a secure financial future.
            </p>
         
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors duration-300">Our Process</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-blue-400 mr-3">Address:</span>
                <span className="text-gray-400">Assotech Business Cresterra,  Upper Ground Floor, Tower 2 Plot 2 Sector 135, Noida, 201301</span>
                <span>Duru House Juhu Tara Road Mumbai 400 059</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">Phone:</span>
                <span className="text-gray-400">+91 01206262311</span>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Dhanmitra. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;