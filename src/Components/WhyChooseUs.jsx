import React from 'react';
import { 
  CheckCircle2, 
  Users, 
  ShieldCheck, 
  Zap, 
  BadgeDollarSign, 
  Code2 
} from 'lucide-react';

const WhyChooseUs = () => {

  const features = [
    {
      id: 1,
      title: "Experienced & Reliable",
      description: "This is the primary consideration you should have while selecting a business. Our team provides highly reliable web development and design services for both domestic and international projects.",
      icon: <CheckCircle2 size={28} />,
      colorClass: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Expert & Knowledgeable Team",
      description: "Our expert team is dedicated, experienced and certified, managing an excellent knowledge about the programming languages, database management systems, UX & UI, and latest technologies.",
      icon: <Users size={28} />,
      colorClass: "bg-cyan-100 text-cyan-600"
    },
    {
      id: 3,
      title: "Best Client Support System",
      description: "Many of our clients are associated with us for a long time as we always meet their expectations by delivering quality work. Our experts always respond to client queries on time.",
      icon: <ShieldCheck size={28} />,
      colorClass: "bg-green-100 text-green-600"
    },
    {
      id: 4,
      title: "Result-Driven Approach",
      description: "From ideation to final delivery, our experts work with a positive approach that fulfills the client's requirements, ensuring every project is delivered with measurable success.",
      icon: <Zap size={28} />,
      colorClass: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 5,
      title: "Cost-Effective Services",
      description: "We don't believe in expensive services packages as we understand that every business owner has their own targets, requirements and budget so we offer cost-effective customized solutions.",
      icon: <BadgeDollarSign size={28} />,
      colorClass: "bg-emerald-100 text-emerald-600"
    },
    {
      id: 6,
      title: "Cutting-Edge Technology",
      description: "One more major reason to choose us as your technology partner is our team's excellent knowledge & expertise in HTML5, CSS, Core PHP, Laravel, React, Node.js and advanced database systems.",
      icon: <Code2 size={28} />,
      colorClass: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-bold text-xs tracking-widest uppercase mb-2">
            WHY VISIONEDGE TECH SOLUTIONS
          </h4>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Why <span className="text-blue-600">Choose us</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            What Makes us the Best Choice for Web Development and Technology Solutions
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-5">
              
              {/* Icon Container */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${feature.colorClass}`}>
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;