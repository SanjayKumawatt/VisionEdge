import React from 'react';
import { Palette, LayoutTemplate, Monitor, MousePointer2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesignHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Creative Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>
        
        {/* Pink/Purple Glow for Creativity */}
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-pink-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. FLOATING DESIGN ELEMENTS */}
      <div className="absolute top-24 left-[15%] opacity-30 animate-float hidden lg:block">
        <LayoutTemplate className="w-14 h-14 text-pink-400" />
      </div>
      <div className="absolute bottom-32 right-[15%] opacity-30 animate-float-delayed hidden lg:block">
        <Palette className="w-14 h-14 text-purple-400" />
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-900/20 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
          <Monitor className="w-3 h-3" />
          UI/UX & Web Design
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Designing Experiences That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Captivate & Convert
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Your website is your digital storefront. At <strong>VISIONEDGE</strong>, we blend artistic creativity with user-centric strategy to craft pixel-perfect designs that engage visitors and drive results.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            Start Your Design
            <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>

      </div>
    </section>
  );
};

export default WebDesignHero;