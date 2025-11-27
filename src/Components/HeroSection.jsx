import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png'; 
const HeroSection = () => {
  return (
    <section className="bg-white">
      {/* Container for centering and max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Flex container for layout: Stacked on mobile, side-by-side on larger screens */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 leading-tight tracking-tight">
              Innovating Digital<br className="hidden md:block" /> 
              <span className="text-blue-600"> Excellence</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              We deliver superior web design and development services that are both high-quality and budget-friendly. We build user-centric, impactful websites customized to achieve your goals.
            </p>

            {/* Buttons Container */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                to="/services"
                className="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300 text-center"
              >
                OUR SERVICES
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 shadow-md transition-colors duration-300 text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Right Column: Illustration Image */}
          <div className="flex-1 w-full md:w-auto flex justify-center">
            <img
              src={heroImage}
              alt="Creative Web Solutions Illustration"
              className="w-full max-w-md lg:max-w-xl h-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;