import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative animated-bg text-white min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.3) 0%, rgba(30, 58, 138, 0.6) 100%)',
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
          <div className="text-center md:text-left md:max-w-3xl">
            <h1 className="animate-slide-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ animationDelay: '0.2s' }}>
              <span className="block">Your Financial Freedom</span>
              <span className="block text-yellow-400 mt-2">Our Responsibility</span>
            </h1>
            <p className="animate-slide-up mt-6 text-lg md:text-xl leading-8 text-gray-100" style={{ animationDelay: '0.4s' }}>
              At Dhanmitra, we help you manage debt, rebuild credit, and regain financial stability 
              through personalized debt relief solutions tailored to your unique situation.
            </p>
            <div className="animate-slide-up mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ animationDelay: '0.6s' }}>
              <a
                href="#contact"
                className="rounded-md bg-yellow-500 px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 hover:transform hover:scale-105 transition-all duration-300"
              >
                Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-md bg-transparent border border-white px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-blue-900 hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <p className="text-3xl font-bold">₹10Cr+</p>
                <p className="text-sm mt-1">Debt Resolved</p>
              </div>
              <div className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm mt-1">Happy Clients</p>
              </div>
              <div className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.6s' }}>
                <p className="text-3xl font-bold">94%</p>
                <p className="text-sm mt-1">Success Rate</p>
              </div>
              <div className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.8s' }}>
                <p className="text-3xl font-bold">4.9/5</p>
                <p className="text-sm mt-1">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="animate-float">
            <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#wave" x="48" y="7" fill="rgba(255,255,255,0.1)" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;