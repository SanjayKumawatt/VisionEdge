import React from 'react';
import { 
  Globe, 
  Code, 
  Database, 
  Cpu, 
  Zap, 
  Server, 
  Check 
} from 'lucide-react';

const CMSExpertiseSection = () => {

  const expertiseData = [
    {
      id: 1,
      title: "CMS Setup & Customization",
      description: "We handle the complete setup of major CMS platforms like WordPress, Drupal, and Joomla, including server configuration, theme installation, and initial data migration.",
      points: [
        "Initial CMS Installation & Setup",
        "Custom Theme/Template Integration",
        "Secure Server Environment Configuration"
      ],
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Custom Module & Plugin Development",
      description: "When standard features aren't enough, our developers create custom modules, plugins, and extensions tailored to your unique business logic and functional requirements.",
      points: [
        "Bespoke Plugin Development",
        "Third-Party API Integrations",
        "Optimizing Existing Module Performance"
      ],
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 3,
      title: "CMS Migration & Upgrades",
      description: "We seamlessly migrate your existing website or data to a new, more powerful CMS platform with zero downtime, ensuring data integrity throughout the process.",
      points: [
        "Zero-Downtime Migration Strategy",
        "Data Integrity Assurance",
        "Version Upgrades and Security Patches"
      ],
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Headless CMS Implementation",
      description: "For highly scalable and flexible projects, we implement Headless CMS architectures, decoupling the backend content management from the frontend presentation.",
      points: [
        "API-First Content Delivery",
        "Frontend Framework Integration (e.g., React)",
        "Enhanced Speed and Security"
      ],
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "We optimize your CMS installation for speed, caching, and database efficiency, ensuring rapid load times and a smooth experience for both users and administrators.",
      points: [
        "Speed and Page Load Time Tuning",
        "Advanced Caching Mechanisms",
        "Database Query Optimization"
      ],
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Maintenance & Security",
      description: "Ongoing support is crucial for CMS stability. We provide continuous monitoring, security updates, vulnerability patching, and technical support to keep your site safe.",
      points: [
        "24/7 Monitoring and Support",
        "Regular Security Audits",
        "Managed Hosting and Backup Solutions"
      ],
      icon: <Server className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-blue-600">CMS Development Expertise</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Solutions for full content control, scalability, and seamless integration.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl border border-blue-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 flex flex-col h-full"
            >
              
              {/* Icon */}
              <div className="text-blue-600 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Divider & List Header */}
              <div className="pt-5 border-t border-gray-100 mt-auto">
                <p className="text-sm font-bold text-gray-800 mb-3">
                  What's Included:
                </p>
                
                {/* Points List */}
                <ul className="space-y-2">
                  {item.points.map((point, index) => (
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

export default CMSExpertiseSection;