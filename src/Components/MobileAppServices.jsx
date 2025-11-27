import React from 'react';
import { 
  Smartphone, 
  Bot, 
  Code2, 
  Target, 
  Zap, 
  Wrench, 
  Check 
} from 'lucide-react';

const MobileAppServices = () => {

  const services = [
    {
      id: 1,
      title: "Dedicated iOS App Development",
      description: "We build native, high-performance applications exclusively for the Apple ecosystem. Our apps guarantee a premium user experience and seamless compliance with App Store guidelines.",
      deliverables: [
        "Swift/Objective-C Development",
        "Intuitive UI/UX Design for iOS",
        "Seamless Integration with Apple Services"
      ],
      icon: <Smartphone className="w-8 h-8" /> // Representing iOS
    },
    {
      id: 2,
      title: "Robust Android App Development",
      description: "Reach the largest mobile audience with custom Android applications. We focus on compatibility across a wide range of devices and deliver secure, scalable, and powerful apps.",
      deliverables: [
        "Kotlin/Java Development Standards",
        "Optimized for Google Play Store",
        "Wide Device and OS Version Compatibility"
      ],
      icon: <Bot className="w-8 h-8" /> // Representing Android
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      description: "For rapid deployment and reduced costs, choose our hybrid solutions. Get near-native performance with a single codebase for both iOS and Android.",
      deliverables: [
        "React Native / Flutter Expertise",
        "Single Codebase Efficiency",
        "Faster Time-to-Market & Cost Savings"
      ],
      icon: <Code2 className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Mobile UX/UI Design & Strategy",
      description: "We craft interfaces designed specifically for mobile use, focusing on touch targets, accessibility, and high visual appeal to maximize user retention and app store ratings.",
      deliverables: [
        "User Research & Persona Mapping",
        "Wireframing & Prototyping",
        "A/B Testing and Usability Reports"
      ],
      icon: <Target className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Backend Development & APIs",
      description: "We build the robust and scalable backend infrastructure your app needs, ensuring fast data synchronization, user authentication, and reliable third-party API integrations.",
      deliverables: [
        "Cloud Infrastructure Setup (AWS, Azure)",
        "Custom API Development",
        "Real-Time Database Solutions"
      ],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 6,
      title: "App Maintenance & Support",
      description: "Ensure your application remains flawless post-launch. Our services include continuous monitoring, security updates, bag fixes, and feature enhancements to meet evolving market demands.",
      deliverables: [
        "24/7 Monitoring & Technical Support",
        "OS Version Compatibility Updates",
        "Performance Optimization"
      ],
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP INTRO TEXT */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            In a mobile-first world, your application is your most personal customer touchpoint. At <strong>VISIONEDGE TECH SOLUTIONS PRIVATE LIMITED</strong>, we deliver native and cross-platform mobile applications that are secure, scalable, and provide a flawless user experience on any device.
            <br /><br />
            We cover the full development lifecycle, from conceptualization and design to store deployment and maintenance.
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Our <span className="text-blue-600">Mobile Development Services</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Comprehensive solutions for iOS, Android, and cross-platform applications.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl border border-blue-600 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
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
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <p className="text-sm font-bold text-gray-800 mb-3">
                  Key Deliverables:
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
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

export default MobileAppServices;