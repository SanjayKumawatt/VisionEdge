import React from 'react';
import { 
  Truck, 
  Diamond, 
  Smile, 
  ClipboardList, 
  Zap, 
  DollarSign 
} from 'lucide-react';

const LogoAdvantages = () => {

  const advantages = [
    {
      id: 1,
      title: "On Time Delivery",
      description: "We always provide on-time delivery for all our services. Our goal is to deliver work punctually for everyone.",
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 2,
      title: "Unique Design",
      description: "All our designs are unique and different from others. You will never be disappointed by our design quality.",
      icon: <Diamond className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Satisfaction Guaranteed",
      description: "Give us a chance to build your logo — customer satisfaction is guaranteed.",
      icon: <Smile className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Sufficient No. of Revisions",
      description: "While working with us, you'll get a sufficient number of revisions for design changes.",
      icon: <ClipboardList className="w-8 h-8" />
    },
    {
      id: 5,
      title: "Experienced Team",
      description: "We have skilled and experienced designers dedicated to providing the best logo designs.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 6,
      title: "Affordable Price",
      description: "We provide the best logo design services at an affordable price for all our customers.",
      icon: <DollarSign className="w-8 h-8" />
    }
  ];

  return (
    // Hex code matches the Royal Blue in the image
    <section className="py-20 bg-[#1a45b8] font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Advantages of Using Logo Design Service
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {advantages.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group">
              
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-gray-900 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LogoAdvantages;