import React from 'react';
import { Terminal, Database, Globe, ArrowRight, Code, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Coding/Dev Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Cyan/Green Glow for Coding Vibe */}
        <div className="absolute top-0 left-1/3 w-[35rem] h-[35rem] bg-cyan-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[35rem] h-[35rem] bg-emerald-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. FLOATING TECH ICONS */}
      <div className="absolute top-20 left-[10%] opacity-20 animate-bounce-slow hidden lg:block">
        <Terminal className="w-16 h-16 text-cyan-400" />
      </div>
      <div className="absolute bottom-24 right-[10%] opacity-20 animate-pulse hidden lg:block">
        <Database className="w-16 h-16 text-emerald-400" />
      </div>
      <div className="absolute top-1/3 right-[5%] opacity-10 hidden lg:block">
        <span className="text-6xl font-mono text-slate-500">{`</>`}</span>
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
          <Globe className="w-3 h-3" />
          Full-Stack Web Solutions
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Building Scalable & Robust <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400">
            Web Applications
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          At <strong>VISIONEDGE</strong>, we engineer high-performance websites using the latest technologies. From complex enterprise platforms to dynamic single-page applications, we code your vision into reality.
        </p>

        {/* Tech Stack Pills (Optional Visual) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 opacity-70">
           {['React', 'Node.js', 'Laravel', 'Python', 'MongoDB', 'AWS'].map((tech) => (
             <span key={tech} className="text-xs font-mono text-slate-500 border border-slate-800 bg-slate-900/50 px-3 py-1 rounded">
               {tech}
             </span>
           ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>

      </div>
    </section>
  );
};

export default WebDevHero;