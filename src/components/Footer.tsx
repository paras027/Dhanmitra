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
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors duration-300">Our Process</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Debt Settlement</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Credit Counseling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Legal Protection</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Financial Planning</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Debt Consolidation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Credit Repair</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-blue-400 mr-3">Address:</span>
                <span className="text-gray-400">504, Pinnacle Business Park, BKC, Mumbai 400051</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">Phone:</span>
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-3">Email:</span>
                <span className="text-gray-400">info@dhanmitra.com</span>
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