import React from 'react';
import { Link } from 'react-router-dom'; // Link import kiya
import { 
  AppWindow, 
  Cpu, 
  PenTool, 
  Server, 
  ShoppingCart, 
  Smartphone 
} from 'lucide-react';

const ServicesSection = () => {
  
  const services = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description: "We offer end-to-end web solutions that help your business to grow effectively and sustainably.",
      icon: <AppWindow size={32} />,
      path: "/services/web-development" // Yahan path add kiya
    },
    {
      id: 2,
      title: "WEB DESIGN",
      description: "We craft user-friendly website designs that prioritize quality content, visual appeal, and conversion rate optimization.",
      icon: <Cpu size={32} />,
      path: "/services/web-design"
    },
    {
      id: 3,
      title: "LOGO DESIGN SERVICES",
      description: "We create unique and scalable logos that establish a strong brand identity and memorable visual presence for your business.",
      icon: <PenTool size={32} />,
      path: "/services/logo-design-services"
    },
    {
      id: 4,
      title: "CONTENT MANAGEMENT SYSTEM",
      description: "Get full control over your website content with custom CMS development, migration, and integration services (e.g., WordPress, Drupal).",
      icon: <Server size={32} />,
      path: "/services/content-management-system"
    },
    {
      id: 5,
      title: "ECOMMERCE DEVELOPMENT",
      description: "Boost your business profits and sell your products easily with secure, scalable platforms, and seamless management ease.",
      icon: <ShoppingCart size={32} />,
      path: "/services/ecommerce-development"
    },
    {
      id: 6,
      title: "MOBILE APPLICATION DEVELOPMENT",
      description: "We develop robust mobile applications for the users for the best product experience across both Android and iOS platforms.",
      icon: <Smartphone size={32} />,
      path: "/services/mobile-application-development"
    }
  ];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We are a trusted company for cutting-edge web development and innovative digital solutions.
            <br className="hidden md:block" />
            Know about our major services.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-xl border border-red-50 hover:shadow-xl hover:border-transparent transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Read More Link (Ab ye button nahi, Link hai) */}
              <Link 
                to={service.path}
                className="bg-blue-600 text-white text-xs font-bold px-8 py-3 rounded uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md inline-block"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;