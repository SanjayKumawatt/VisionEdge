import React from 'react';
import { 
  Lightbulb, 
  Search, 
  Heart, 
  ShieldCheck, 
  Briefcase, 
  Eye, 
  Users, 
  Star 
} from 'lucide-react';

// Apni phone wali image ka path yahan lagana
import mobileImage from '../assets/phone.webp'; 

const LogoReasons = () => {

  const leftFeatures = [
    {
      id: 1,
      title: "First Impressions",
      description: "Your logo is the first impression of your company, and it should look great to attract more customers.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Easy to Recognize",
      description: "Your business logo should be easy to recognize even if it is small or large.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Create Brand Loyalty",
      description: "Your logo should be effective enough to create brand loyalty among the customers.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Trust Building",
      description: "Your logo should look positive to build trust between your business and customer.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const rightFeatures = [
    {
      id: 5,
      title: "Look Professional",
      description: "If you have a Logo for your business then you have a chance to stand out from most businesses.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Easy to Identify",
      description: "Your logo should be unique and simple for everyone to identify easily.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 7,
      title: "Attracts Potential Customers",
      description: "Your business logo has the potential ability to attract more potential customers.",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 8,
      title: "Logo Grabs Attention",
      description: "Logo Communicate your values and objectives with your customers and grabs more attention.",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Reasons for having an <span className="text-blue-600">Impactful Logo Design</span>
          </h2>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* === LEFT COLUMN === */}
          <div className="space-y-10">
            {leftFeatures.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4 group">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* === CENTER IMAGE (PHONE) === */}
          <div className="flex justify-center py-8 lg:py-0 relative">
            {/* Background Blob for effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
            
            <img 
              src={mobileImage} 
              alt="Logo Design Showcase on Mobile" 
              className="w-full max-w-[280px] md:max-w-xs drop-shadow-2xl"
            />
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="space-y-10">
            {rightFeatures.map((feature) => (
              // Note: flex-row-reverse on large screens to keep icon on the outside right
              <div key={feature.id} className="flex items-start gap-4 lg:flex-row-reverse lg:text-right group">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoReasons;