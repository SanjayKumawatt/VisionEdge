import React from 'react';

const CMSProcessSection = () => {

  const processSteps = [
    {
      id: 1,
      title: "Requirements Gathering",
      description: "The first step in developing a custom content management system (CMS) solution is gathering client requirements."
    },
    {
      id: 2,
      title: "Design and Development",
      description: "Once the requirements are gathered, the design and development phase begins."
    },
    {
      id: 3,
      title: "Testing and Quality Assurance",
      description: "After the CMS solution is developed, it undergoes rigorous testing and quality assurance (QA) processes."
    },
    {
      id: 4,
      title: "Deployment and Maintenance",
      description: "Once the CMS solution passes testing and QA, it is ready for deployment."
    }
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            VISIONEDGE CMS Development <span className="text-blue-600">Process</span>
          </h2>
        </div>

        {/* PROCESS GRID (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {processSteps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white border-2 border-blue-400 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM DESCRIPTION TEXT */}
        <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify md:text-left border-t border-gray-100 pt-10">
          <p>
            It is a monitoring system that allows the admin the rights to manage content which may be in the form of text, embedded graphics, photos, video, audio, and code (e.g. for applications). It is used to create, manage, store and deploy content on website pages. CMS even allows the administrator to manage the content of the website during runtime. The content can be in the form of text, images, products, videos etc. in different languages.
          </p>

          <p>
            The content management system (CMS) facilitates your business with the ability to manage your website or a part of it on your own in a straightforward manner or with the help of your stakeholders. This finally tags for a smart decision of CMS development services solutions and one-time investment for the production of a functional rich website and modify it as and when needed according to the business need. Award-winning <strong>VISIONEDGE</strong> specializes in offering user-friendly and powerful custom CMS development services to help you manage the entire workflow of your organization or business in an effortless manner. We are having Expert developers for the following CMS: WordPress, WooCommerce, ExpressionEngine, Magento, Shopify, OpenCart, CraftCMS, Joomla & Drupal.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CMSProcessSection;