import React from 'react';
import { Database, FileText, Blocks, ArrowRight, Settings2, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const CMSHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Structured Data Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Square Grid Pattern for 'Structure' */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Indigo/Pink Glow for Modern Tech vibe */}
        <div className="absolute top-0 right-1/3 w-[35rem] h-[35rem] bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[35rem] h-[35rem] bg-pink-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. FLOATING CMS ICONS */}
      {/* Database floating */}
      <div className="absolute top-24 left-[12%] opacity-20 animate-bounce-slow hidden lg:block">
        <Database className="w-16 h-16 text-indigo-400" />
      </div>
      {/* Content Block floating */}
      <div className="absolute bottom-32 right-[12%] opacity-20 animate-pulse delay-700 hidden lg:block">
        <Blocks className="w-16 h-16 text-pink-400" />
      </div>
      {/* File/Content floating */}
      <div className="absolute top-1/3 right-[20%] opacity-15 animate-float delay-1000 hidden lg:block">
        <FileText className="w-14 h-14 text-purple-300" />
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
          <Settings2 className="w-3 h-3" />
          Powerful Content Orchestration
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Master Your Digital <br className="hidden md:block" /> Narrative with 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            <span> </span> Scalable CMS Architectures
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Stop relying on developers for every small update. At <strong>VISIONEDGE</strong>, we engineer custom CMS platforms and integrate powerful solutions like WordPress and Drupal, empowering your team to publish faster and manage content smarter.
        </p>

        {/* Platform Pills (Visual cue of supported tech) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-70">
           {['WordPress', 'Drupal', 'Headless CMS', 'Contentful', 'Strapi', 'Custom Solutions'].map((tech) => (
             <span key={tech} className="flex items-center gap-1.5 text-xs font-medium text-slate-400 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-full">
               <Layers className="w-3 h-3" /> {tech}
             </span>
           ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            Lets Discuss Your CMS
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          
        </div>

      </div>
    </section>
  );
};

export default CMSHero;