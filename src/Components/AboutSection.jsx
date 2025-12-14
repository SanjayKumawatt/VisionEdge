import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/about.svg'; // Apni image ka path yahan lagana

const AboutSection = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Is image tag mein apni illustration lagana */}
            <img 
              src={aboutImage} 
              alt="Team working together" 
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              About us
            </h2>
            
            <h3 className="text-blue-600 font-semibold text-lg mb-6">
              Result-Oriented Web & E-commerce Solutions - VISIONEDGE PRIVATE LIMITED
            </h3>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                Our company, <strong>VISIONEDGE TECH SOLUTIONS PRIVATE LIMITED</strong>, has a team of experienced and certified website developers, graphic designers, digital marketers, and managers that provides desired results by using well-planned working strategies and meets the expectations of every client for both domestic and international businesses.
              </p>

              <p>
                We are an early-stage startup focused on building our own cloud-native product to solve real-world digital infrastructure challenges.
              </p>

              <p>
                Our expertise helps us for complete end-to-end management of a website development project in areas like Logo Design Services, Ecommerce web development, prototype, SQL, Ajax, jQuery, Content Management System implementation, OOP, software design, and testing. Our research-based planning and top-quality work makes us a one-stop solution for hundreds of our clients.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold shadow-md transition-colors duration-300">
                  GET IN TOUCH
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;