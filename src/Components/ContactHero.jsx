import React from 'react';
import { MessageSquare, Mail, Phone, ArrowDown } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-20 md:py-28 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Consistent with About Page) */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Glowing Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[80px]"></div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Floating Icon Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 border border-blue-500/30 rounded-2xl mb-8 shadow-[0_0_15px_rgba(59,130,246,0.5)] backdrop-blur-sm animate-bounce-slow">
          <MessageSquare className="w-8 h-8 text-blue-400" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Let’s Build Something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
            Extraordinary Together
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? We at <strong>VISIONEDGE</strong> are ready to turn your digital dreams into reality. Reach out to us today.
        </p>

        {/* Quick Contact Cards (Floating) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8">
          
          {/* Mail Card */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition duration-300 backdrop-blur-md cursor-pointer group">
            <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 text-sm font-medium">support@visionedge.in</span>
          </div>


        </div>

      </div>

      {/* Optional: Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce">
        <ArrowDown size={24} />
      </div>

    </section>
  );
};

export default ContactHero;