import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Techy Grid & Glow) */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Blue Gradient Blob in Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
          <Sparkles className="w-3 h-3" />
          Who We Are
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          We Are The Architects of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Digital Innovation
          </span>
        </h1>

        {/* Description with Company Name */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          <strong className="text-white">VISIONEDGE TECH SOLUTIONS PRIVATE LIMITED</strong> is not just a company; 
          we are a collective of visionaries. We bridge the gap between imagination and reality, 
          crafting bespoke digital experiences that propel businesses into the future.
        </p>

        

      </div>
    </section>
  );
};

export default AboutHero;