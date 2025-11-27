import React from 'react';
import { 
  Palette, 
  Feather, 
  Layers, 
  LayoutTemplate, 
  ShieldCheck, 
  Tag, 
  Check 
} from 'lucide-react';

const BrandIdentityServices = () => {

  const services = [
    {
      id: 1,
      title: "Custom Brand Identity Design",
      description: "Your logo is the foundation of your brand. We create unique, original, and scalable logo concepts that visually represent your company's core values and mission.",
      points: [
        "In-depth Brand Consultation",
        "Multiple Initial Design Concepts",
        "Unlimited Revisions (until satisfied)"
      ],
      icon: <Palette className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Minimalist & Timeless Logos",
      description: "We focus on clean, simple designs that stand the test of time. Our minimalist approach ensures your logo remains relevant and easily recognizable in any format or size.",
      points: [
        "Focus on Simplicity and Clarity",
        "Modern and Evergreen Aesthetics",
        "Suitable for All Digital and Print Media"
      ],
      icon: <Feather className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Comprehensive File Delivery",
      description: "You receive a complete package of high-resolution files, including vector formats (AI, EPS, SVG) essential for printing and large scale use, ensuring quality retention.",
      points: [
        "Full Vector Source Files (AI/EPS)",
        "High-Resolution PNGs (Transparent)",
        "Print-Ready PDF Formats"
      ],
      icon: <Layers className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Logo Usage Guidelines",
      description: "We provide a small style guide defining color palettes (CMYK/RGB/Hex), typography, and rules for logo usage to ensure brand consistency across all your marketing materials.",
      points: [
        "Detailed Color Codes and Fonts",
        "Clear Do's and Don'ts for Placement",
        "Consistency Across All Media"
      ],
      icon: <LayoutTemplate className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Original & Trademark Ready",
      description: "All our designs are 100% original and custom made for you. We ensure the design process minimizes intellectual property risks, preparing you for trademark registration.",
      points: [
        "100% Custom and Unique Concepts",
        "Full Copyright Ownership Transfer",
        "Trademark Viability Assessment"
      ],
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Cost-Effective Packages",
      description: "We offer tailored logo design packages that fit your budget and requirements, delivering premium quality branding without the high cost associated with large agencies.",
      points: [
        "Transparent Pricing Structure",
        "No Hidden Fees Guarantee",
        "Packages for Startups and Enterprises"
      ],
      icon: <Tag className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-blue-600">Brand Identity Services</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive design steps from initial concept to final style guide delivery.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl border-2 border-blue-600 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              
              {/* Icon */}
              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Divider & List Header */}
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <p className="text-sm font-bold text-gray-800 mb-3">
                  What's Included:
                </p>
                
                {/* Points List */}
                <ul className="space-y-2">
                  {service.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandIdentityServices;