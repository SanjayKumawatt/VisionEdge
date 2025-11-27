import React from 'react';
import { 
  Layout, 
  PenTool, 
  Image as ImageIcon, 
  CheckCircle2 
} from 'lucide-react';

// Images import kar lena, abhi ke liye placeholder paths hain
import uiUxImage from '../assets/services/img5.png';
import brandingImage from '../assets/services/img7.png';
import mockupsImage from '../assets/services/img8.png';

const DesignExpertise = () => {

  const expertiseData = [
    {
      id: 1,
      title: "UI/UX Strategy & Design",
      description: "We design interfaces that are intuitive and engaging. Our User Experience (UX) planning ensures smooth navigation, while our User Interface (UI) design delivers visual appeal and brand consistency across all devices.",
      points: [
        "User Research & Persona Mapping",
        "Mobile First and Responsive Design",
        "Wireframing, Prototyping, and Usability Testing"
      ],
      icon: <Layout className="w-6 h-6" />,
      image: uiUxImage,
    },
    {
      id: 2,
      title: "Custom Logo & Branding",
      description: "Your logo is the face of your business. We create original, memorable, and scalable logos that form the solid foundation of your entire digital and physical brand identity.",
      points: [
        "Comprehensive Brand Identity Consultation",
        "Multiple Design Concepts and Iterations",
        "Full Vector & High Resolution Asset Delivery"
      ],
      icon: <PenTool className="w-6 h-6" />,
      image: brandingImage,
    },
    {
      id: 3,
      title: "Mockups, Assets & Style Guides",
      description: "We bridge the gap between design and development by providing detailed style guides and finalized mockups. This ensures a flawless transition from concept to coded website.",
      points: [
        "High Fidelity Interactive Mockups",
        "Style Guide Documentation",
        "Optimized Assets for Faster Loading Times"
      ],
      icon: <ImageIcon className="w-6 h-6" />,
      image: mockupsImage,
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Core <span className="text-blue-600">Design Expertise</span>
          </h2>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex flex-col gap-12">
          {expertiseData.map((item, index) => (
            <div 
              key={item.id} 
              // Even index (0, 2) = Normal Row | Odd index (1) = Reverse Row
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300`}
            >
              
              {/* TEXT CONTENT SIDE */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-full md:w-1/2 bg-blue-50/30 h-full min-h-[300px] flex items-center justify-center p-8">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full max-w-sm h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignExpertise;