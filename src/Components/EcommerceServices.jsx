import React from 'react';
import { 
  ShoppingCart, 
  Layers, 
  Zap, 
  CreditCard, 
  Package, 
  Code, 
  Check 
} from 'lucide-react';

const EcommerceServices = () => {

  const services = [
    {
      id: 1,
      title: "Custom E-commerce Development",
      description: "From concept to conversion, we build seamless, scalable e-commerce solutions from scratch, tailored to your unique business model and large inventory needs.",
      deliverables: [
        "Full-Cycle Custom Platform Development",
        "Database & Inventory Management",
        "Advanced Conversion Optimization"
      ],
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      id: 2,
      title: "WooCommerce Website Development",
      description: "For businesses needing a customizable, open-source solution, we specialize in creating secure, robust, and highly scalable WooCommerce sites based on WordPress.",
      deliverables: [
        "Custom Theme Design & Plugin Development",
        "Scalable Infrastructure for Growth",
        "Integrated SEO and Marketing Tools"
      ],
      icon: <Layers className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Shopify Website Development",
      description: "Custom-built for the modern retailer, we focus on creating visually appealing and highly functional online stores that ensure smooth operations and easy growth.",
      deliverables: [
        "Tailored Themes & UX Enhancement",
        "Seamless Payment Gateway Integration",
        "App and Inventory Management Integration"
      ],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Payment Gateway Integration",
      description: "We integrate multiple secure payment options (cards, UPI, wallets) to provide a smooth checkout experience, minimizing cart abandonment and maximizing transactions.",
      deliverables: [
        "Security Compliance (PCI DSS)",
        "Multi-Currency & Regional Setup",
        "Fraud Detection Implementation"
      ],
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Logistics & Shipping Management",
      description: "Efficiently manage your fulfillment process. We integrate with major shipping carriers and logistics software for automated order processing and real-time tracking.",
      deliverables: [
        "Carrier Integration (e.g., FedEx, Delhivery)",
        "Automated Label Generation",
        "Real-time Tracking for Customers"
      ],
      icon: <Package className="w-8 h-8" />
    },
    {
      id: 6,
      title: "E-commerce Maintenance & Support",
      description: "Ensure your store runs perfectly 24/7. Our maintenance services cover security patches, bug fixes, performance tuning, and feature updates to handle peak traffic.",
      deliverables: [
        "24/7 Monitoring & Technical Support",
        "Security Audits & Patching",
        "Performance Optimization (Speed)"
      ],
      icon: <Code className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Comprehensive <span className="text-blue-600">E-commerce Services</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            End-to-end solutions covering development, logistics, and ongoing maintenance.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl border border-blue-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 flex flex-col h-full"
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

              {/* Divider & List Header */}
              <div className="pt-5 border-t border-gray-100 mt-auto">
                <p className="text-sm font-bold text-gray-800 mb-3">
                  Key Deliverables:
                </p>
                
                {/* Points List */}
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

export default EcommerceServices;