import React from 'react';
import { Zap, Target, Briefcase } from 'lucide-react';

const WhyChooseDesign = () => {
  
  const features = [
    {
      id: 1,
      title: "Design-to-Conversion Focus",
      description: "We don't just create beautiful designs; we engineer them to maximize user engagement and drive sales conversion for your business.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Cutting-Edge & Modern",
      description: "We use the latest tools and follow global design trends to ensure your website is modern, future-proof, and stands out from the competition.",
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Collaborative & Clear Process",
      description: "You are involved every step of the way. Our transparent process ensures your vision and feedback are integrated from wireframes to final mockups.",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">VISIONEDGE</span> for Design?
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border-2 border-gray-900 rounded-lg p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseDesign;