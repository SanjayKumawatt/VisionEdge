import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ProcessAndFaq = () => {
  // --- FAQ LOGIC ---
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- DATA: PROCESS STEPS ---
  const processes = [
    {
      id: "01",
      title: "Discussion",
      desc: "We always prioritise your suggestions and needs, and we'll create a plan of action around them."
    },
    {
      id: "02",
      title: "Designing",
      desc: "Our design team will create the greatest and most appropriate design that embodies your concept based on the planning."
    },
    {
      id: "03",
      title: "Development",
      desc: "Our team of highly skilled developers will create the website or app in a way that ensures it is finished on schedule."
    },
    {
      id: "04",
      title: "Launch",
      desc: "We host your website or app after thorough testing. Moreover, our staff will teach you website management techniques."
    }
  ];

  // --- DATA: FAQs ---
  const faqs = [
    {
      question: "Q.1: What services do you offer?",
      answer: "We offer a comprehensive range of digital services including Web Development, Web Design, Logo Design, CMS Solutions, E-commerce Development, and Mobile App Development."
    },
    {
      question: "Q.2: How can I get started with VISIONEDGE?",
      answer: "Getting started is easy! Simply click on the 'Get in Touch' button, fill out the form, or give us a call. Our team will schedule a discussion to understand your project needs."
    },
    {
      question: "Q.3: How much will it cost to develop my website?",
      answer: "The cost depends on the complexity, features, and size of the website. We offer customized packages to fit various budgets. Contact us for a free quote tailored to your requirements."
    },
    {
      question: "Q.4: What makes VISIONEDGE different from other agencies?",
      answer: "We combine creativity with technical expertise. Our result-driven approach, transparent communication, and post-launch support set us apart from the competition."
    },
    {
      question: "Q.5: How long does it take to complete a website project?",
      answer: "A basic business website typically takes 2-4 weeks, while more complex e-commerce or custom web applications may take 6-10 weeks depending on the scope."
    },
    {
      question: "Q.6: Do you provide ongoing support after my website is launched?",
      answer: "Yes, absolutely! We provide ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and runs smoothly."
    }
  ];

  return (
    <div className="bg-white font-sans pb-20">
      
      {/* ================= PROCESS SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              HOW TO GET STARTED
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Our <span className="text-blue-600">Process</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Visible only on Desktop) */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gray-100 -z-0 translate-y-8 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processes.map((step) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                  {/* Number Circle */}
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white mb-6">
                    {step.id}
                  </div>
                  
                  {/* Card Content */}
                  <div className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 w-full h-full hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-0 pb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
              >
                <span className={`text-base md:text-lg font-medium transition-colors duration-200 ${openFaqIndex === index ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-600'}`}>
                  {faq.question}
                </span>
                <span className="ml-4 text-gray-400">
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 group-hover:text-blue-600" />
                  )}
                </span>
              </button>
              
              {/* Answer Dropdown */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-500 text-sm md:text-base leading-relaxed pb-4 pl-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ProcessAndFaq;