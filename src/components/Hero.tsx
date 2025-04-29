import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const phrases = ["Debt Solutions?", "Unsecured Debt?", "Non Dilutive Capital?", "Alternative Finance?"];
  const secphrases = ["Cloud Kitchens", "Local Businesses", "E-commerce Merchants.", "SAS Companies", "D2C Businesses"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [secPhraseIndex, setsecPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setsecPhraseIndex((prevIndex) => (prevIndex + 1) % secphrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative text-white min-h-screen flex items-center bg-gray-900"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.3) 0%, rgba(30, 58, 138, 0.6) 100%)',
          }}
        ></div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center">
            <h1
              className="animate-slide-up text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              Looking for{" "}
              <span
                key={phrases[currentPhraseIndex]}
                className="animate-name inline-block text-blue-500"
              >
                {phrases[currentPhraseIndex]}
              </span>
            </h1>
            <h1
              className="animate-slide-up text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white mb-12"
              style={{ animationDelay: '0.4s' }}
            >
              We Fund{" "}
              <span
                key={secphrases[secPhraseIndex]}
                className="animate-name inline-block text-blue-500"
              >
                {secphrases[secPhraseIndex]}
              </span>
            </h1>
            <div
              className="animate-slide-up mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="#contact"
                className="rounded-md bg-yellow-500 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 hover:transform hover:scale-105 transition-all duration-300"
              >
                Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-md bg-transparent border border-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-blue-900 hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-6">
              <div
                className="animate-float bg-[#327fd1] bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '0.4s' }}
              ></div>
              <div
                className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '0.6s' }}
              ></div>
              <div
                className="animate-float bg-blue-800 bg-opacity-70 p-4 rounded-lg transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '0.8s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-32">
        <svg
          className="waves w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 20 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
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