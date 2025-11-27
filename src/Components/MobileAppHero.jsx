import React from 'react';
import { Smartphone, AppWindow, Layers, ArrowRight, Code2, Tablet } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileAppHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Mobile/Speed Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Circuit Pattern for Tech Vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Blue/Cyan Glow for Speed & Modernity */}
        <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. FLOATING MOBILE ICONS */}
      {/* Phone Floating */}
      <div className="absolute top-24 left-[15%] opacity-20 animate-bounce-slow hidden lg:block">
        <Smartphone className="w-16 h-16 text-blue-400" />
      </div>
      {/* App Window Floating */}
      <div className="absolute bottom-28 right-[15%] opacity-20 animate-float delay-700 hidden lg:block">
        <AppWindow className="w-16 h-16 text-cyan-400" />
      </div>
      {/* Tablet Floating */}
      <div className="absolute top-1/3 right-[25%] opacity-20 animate-pulse delay-1000 hidden lg:block">
        <Tablet className="w-14 h-14 text-indigo-300" />
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
          <Code2 className="w-3 h-3" />
          iOS & Android Solutions
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Building Next-Gen Mobile <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            Experiences That Connect
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          At <strong>VISIONEDGE</strong>, we turn ideas into powerful mobile applications. Whether it's a native iOS/Android app or a high-performance cross-platform solution, we build apps that users love and businesses rely on.
        </p>

        {/* Tech Stack Pills (Visual Expertise) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-80">
           {['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Firebase', 'App Store Optimization'].map((tech) => (
             <span key={tech} className="flex items-center gap-1.5 text-xs font-medium text-slate-300 border border-slate-700 bg-slate-800/50 px-3 py-1.5 rounded-full hover:border-blue-500 transition-colors cursor-default">
               <Layers className="w-3 h-3 text-blue-500" /> {tech}
             </span>
           ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Let's Discuss Your App Idea
            <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>

      </div>
    </section>
  );
};

export default MobileAppHero;