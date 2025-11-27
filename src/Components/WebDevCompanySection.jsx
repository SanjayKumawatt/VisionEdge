

import React from 'react';
import { Laptop, Users, Lightbulb } from 'lucide-react';

const WebDevCompanySection = () => {
  
  const cards = [
    {
      id: 1,
      title: "Website Developers",
      description: "Our skilled website developers bring innovation and expertise to craft dynamic and user-friendly websites tailored to elevate your online presence.",
      icon: <Laptop className="w-10 h-10" />
    },
    {
      id: 2,
      title: "Graphic Designers",
      description: "Our Graphic Designers blend creativity and expertise to deliver visually stunning and impactful designs for your brand.",
      icon: <Users className="w-10 h-10" />
    },
    {
      id: 3,
      title: "Web Experts",
      description: "Our Web Experts create customized solutions for a dynamic and powerful online presence by utilizing cutting edge technology and knowledge.",
      icon: <Lightbulb className="w-10 h-10" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Website Development Company in <span className="text-blue-600">Jaipur</span>. VISIONEDGE PRIVATE LIMITED provide best <br className="hidden md:block" />
            responsive websites for all businesses.
          </h2>
          
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
            VISIONEDGE PRIVATE LIMITED, Plot No. 12, Durgesh Nagar, Jagatpura, Jaipur, Rajasthan, 302033.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-blue-600">
                  {card.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebDevCompanySection;