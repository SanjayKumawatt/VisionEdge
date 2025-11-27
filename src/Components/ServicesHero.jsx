import React from 'react';
import { Layers, Code2, Smartphone, Cpu, Sparkles } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Gradient Blobs */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-cyan-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. FLOATING DECORATIVE ICONS (Background Elements) */}
      <div className="absolute top-20 left-[10%] opacity-20 animate-bounce-slow hidden lg:block">
        <Code2 className="w-16 h-16 text-blue-400" />
      </div>
      <div className="absolute bottom-20 right-[10%] opacity-20 animate-bounce-slow delay-700 hidden lg:block">
        <Smartphone className="w-16 h-16 text-cyan-400" />
      </div>
      <div className="absolute top-32 right-[20%] opacity-20 animate-pulse delay-1000 hidden lg:block">
        <Cpu className="w-12 h-12 text-purple-400" />
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
          <Layers className="w-3 h-3" />
          Our Expertise
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          High-Impact Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            Solutions for Growth
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          At <strong>VISIONEDGE</strong>, we don't just write code; we build digital ecosystems. 
          From cutting-edge web development to seamless mobile apps, we provide the technology 
          stack you need to scale your business.
        </p>

        {/* Service Tags (Pills) */}
        <div className="flex flex-wrap justify-center gap-3 opacity-80">
          {['Web Development', 'UI/UX Design', 'Mobile Apps', 'E-commerce', 'Cloud Solutions'].map((tag, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;