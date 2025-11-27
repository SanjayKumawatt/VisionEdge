import React from 'react';
import { Code, ShoppingCart, Globe, Check } from 'lucide-react';

const WebDevServicesAndProcess = () => {

  // --- DATA: SERVICES ---
  const services = [
    {
      id: 1,
      title: "Custom Web Solutions",
      description: "We develop bespoke web applications and platforms from scratch, perfectly aligned with your business logic and operational needs.",
      icon: <Code className="w-8 h-8" />,
      deliverables: [
        "Scalable & Future-Proof Architectures",
        "Robust Backend Development",
        "Intuitive Frontend Interfaces"
      ]
    },
    {
      id: 2,
      title: "E-commerce Platform Development",
      description: "Launch or upgrade your online store with our powerful e-commerce solutions. We integrate secure payment gateways and inventory management.",
      icon: <ShoppingCart className="w-8 h-8" />,
      deliverables: [
        "Shopify & WooCommerce Expertise",
        "Secure Payment Gateway Integration",
        "Product Information Management (PIM)"
      ]
    },
    {
      id: 3,
      title: "CMS Development & Integration",
      description: "Take control of your content with our flexible CMS solutions. We build and customize platforms like WordPress, Joomla, and Drupal.",
      icon: <Globe className="w-8 h-8" />,
      deliverables: [
        "User-Friendly Content Management",
        "Custom Theme & Plugin Development",
        "Seamless Data Migration Services"
      ]
    }
  ];

  // --- DATA: PROCESS ---
  const processSteps = [
    {
      id: "01",
      title: "Discovery",
      desc: "Understanding your vision and requirements."
    },
    {
      id: "02",
      title: "Planning",
      desc: "Defining project scope, timeline, and strategy."
    },
    {
      id: "03",
      title: "Development",
      desc: "Building and coding your custom solution."
    },
    {
      id: "04",
      title: "Launch & Support",
      desc: "Deployment, testing, and ongoing maintenance."
    }
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* ================= SECTION 1: KEY SERVICES ================= */}
      <section className="py-20 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Key <span className="text-blue-600">Development Services</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              Building the digital tools you need to succeed with modern, scalable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="text-blue-600 mb-6">
                  {service.icon}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  {service.description}
                </p>

                {/* Checklist Section */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-4">
                    What We Deliver:
                  </h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
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


      {/* ================= SECTION 2: DEVELOPMENT PROCESS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Streamlined <span className="text-blue-600">Development Process</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
              We follow a clear, collaborative process to ensure your project is delivered on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="bg-white rounded-lg p-8 text-center shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                {/* Number Circle */}
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-6 shadow-md">
                  {step.id}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default WebDevServicesAndProcess;