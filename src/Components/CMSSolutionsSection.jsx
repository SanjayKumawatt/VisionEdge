import React from 'react';
import { Zap, Search, Share2, ShieldCheck } from 'lucide-react';

// Yahan wo Laptop/CMS wali image lagana
import cmsLaptopImage from '../assets/laptop.webp'; 

const CMSSolutionsSection = () => {

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Award-Winning <span className="text-blue-600">VISIONEDGE Custom CMS Solutions</span>
          </h2>
        </div>

        {/* MAIN LAYOUT (3 Columns: Left Text - Image - Right Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* === LEFT COLUMN (Text aligns towards image) === */}
          <div className="space-y-12 order-2 lg:order-1">
            
            {/* Item 1: Enterprise CMS */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 text-center lg:text-right group">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Zap className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Enterprise CMS Solutions
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We improve your existing CMS workflows via our Enterprise CMS development service. We have a team of expert CMS developers who can efficiently design and customize systems tailored to your specific needs.
                </p>
              </div>
            </div>

            {/* Item 2: CMS Integration */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-4 text-center lg:text-right group">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Share2 className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  CMS Integration Services
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We will create APIs and connect APIs to your ECMS solution, thus helping your business to grow. This includes programs for CRM, sales marketing automation, and digital asset management.
                </p>
              </div>
            </div>

          </div>


          {/* === CENTER COLUMN (Image) === */}
          <div className="flex justify-center order-1 lg:order-2 py-8 lg:py-0">
             {/* Background Decoration Blob */}
            <div className="relative">
                <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                <img 
                src={cmsLaptopImage} 
                alt="CMS Development Illustration" 
                className="w-full max-w-[350px] md:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>


          {/* === RIGHT COLUMN (Text aligns away from image) === */}
          <div className="space-y-12 order-3 lg:order-3">
            
            {/* Item 3: SEO Tools */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left group">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Search className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  CMS Platform with SEO tools
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Still using messy SEO plug ins? Let's Network with VISIONEDGE as we program friendly SEO tools for your traditional CMS. We make it easy for you to create SEO URLs, manage Meta tags, and analyze performance.
                </p>
              </div>
            </div>

            {/* Item 4: Custom CMS */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left group">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Custom CMS Development Solutions
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We program advanced security features to ensure the integrity of your data according to your industry specific requirements tailored to your unique business workflow.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CMSSolutionsSection;