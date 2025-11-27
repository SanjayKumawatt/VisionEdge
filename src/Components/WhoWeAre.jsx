import React from 'react';
import whoWeAreImage from '../assets/about/img1.png'; // Apni image ka path yahan lagana

const WhoWeAre = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN HEADING (Centered) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Who <span className="text-blue-600">We Are</span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: TEXT */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-blue-950 mb-6">
              Our Vision and Expertise
            </h3>

            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                <strong>VISIONEDGE TECH SOLUTIONS PRIVATE LIMITED</strong> is a leading web development company that offers a range of innovative and creative digital solutions to its clients. We are a team of experienced and skilled developers who are passionate about delivering outstanding results and creating a lasting impact for our clients.
              </p>

              <p>
                At <strong>VISIONEDGE</strong>, we believe that technology should be accessible and easy to use. Which is why we use cutting-edge technologies and the latest trends to create websites that are both functional and visually appealing. Our developers are experts in a range of technologies, including HTML, CSS, JavaScript, React, and more, and they use this expertise to create custom, scalable web solutions that deliver real results.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {/* Yahan wo laptop/SEO wali illustration lagana */}
            <img 
              src={whoWeAreImage} 
              alt="SEO and Web Development Illustration" 
              className="w-full max-w-md lg:max-w-lg h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;