import React from 'react';
import { 
  Lightbulb, 
  PenTool, 
  Code, 
  Bug, 
  Rocket, 
  RefreshCw 
} from 'lucide-react';

const MobileAppProcess = () => {

  const steps = [
    {
      id: "01",
      title: "Strategy & Discovery",
      description: "We start by understanding your idea, market, and users to create a solid roadmap.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: "02",
      title: "UI/UX Design",
      description: "Our designers craft intuitive wireframes and stunning prototypes for the best user journey.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Development",
      description: "Our coders bring the design to life using clean, scalable, and secure code architecture.",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: "04",
      title: "QA & Testing",
      description: "We rigorously test on multiple devices to ensure a bug-free and smooth experience.",
      icon: <Bug className="w-6 h-6" />
    },
    {
      id: "05",
      title: "Launch & Deployment",
      description: "We handle the complex process of publishing your app to the App Store and Play Store.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: "06",
      title: "Maintenance & Updates",
      description: "We provide ongoing support to keep your app updated with OS changes and new features.",
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            How We Bring Your <span className="text-blue-600">App to Life</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Our proven development lifecycle ensures transparency, speed, and quality at every step.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
            >
              {/* Background Number (Watermark) */}
              <span className="absolute -right-4 -top-4 text-9xl font-bold text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                {step.id}
              </span>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Bottom Progress Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MobileAppProcess;