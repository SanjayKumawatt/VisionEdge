import React from 'react';
import approachImage from '../assets/about/img2.png'; // Apni image ka path yahan lagana

const PersonalizedApproach = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            {/* Yahan wo Rocket/Globe wali illustration lagana */}
            <img 
              src={approachImage} 
              alt="Personalized Approach Illustration" 
              className="w-full max-w-md lg:max-w-lg h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="w-full md:w-1/2 text-left">
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                We also understand that each project is unique, which is why we take a personalized approach to each and every project we work on. Our team will work closely with you to understand your goals, and we'll use this information to create a customized solution that meets your needs and exceeds your expectations.
              </p>

              <p>
                At <strong>VISIONEDGE</strong>, we are committed to providing our clients with the highest level of customer service. Our team is always available to answer questions, offer support, and provide guidance, and we believe that clear and open communication is key to delivering outstanding results.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalizedApproach;