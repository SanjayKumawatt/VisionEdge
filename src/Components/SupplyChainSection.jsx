import React from 'react';
import { Link } from 'react-router-dom'; // Agar button ko link banana ho

const SupplyChainSection = () => {

  // Card ka data aur unki specific styling taaki wo staggered dikhein
  const cards = [
    {
      id: 1,
      label: 'Cloud',
      title: 'Cloud solutions & management',
      wrapperClasses: 'w-full md:w-[90%] shadow-lg' // Top card sits normally
    },
    {
      id: 2,
      label: 'Software',
      title: 'Software solutions & services',
      wrapperClasses: 'w-full md:w-[85%] md:ml-8 shadow-md' // Middle card slightly narrower and shifted right
    },
    {
      id: 3,
      label: 'Product',
      title: 'Product lifecycle services',
      wrapperClasses: 'w-full md:w-[80%] md:ml-16 shadow-sm' // Bottom card narrowest and shifted most right
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* === LEFT COLUMN: FLOATING CARDS === */}
          <div className="relative">
            {/* The Beige Background Blob Shape */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/3 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FFF8E7] rounded-full -z-10 pointer-events-none"></div>

            {/* Cards Container */}
            <div className="flex flex-col gap-6 relative z-10 py-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-white rounded-2xl p-6 border border-gray-50 transition-transform hover:-translate-y-1 duration-300 ${card.wrapperClasses}`}
                >
                  <span className="block text-xs font-medium text-gray-400 mb-2">
                    {card.label}
                  </span>
                  <div className="flex items-center gap-3">
                    {/* Blue Dot */}
                    <span className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT COLUMN: TEXT CONTENT === */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Supply Chain Optimization
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We simplify the procurement process for hardware and software through powerful tools and dedicated consultants. Our comprehensive support spans the entire IT lifecycle, ensuring seamless management for your business needs.
            </p>

            <Link to={"/services"}>
              <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-md shadow-lg hover:bg-blue-700 cursor-pointer hover:shadow-xl transition-all duration-300">
                READ MORE
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;