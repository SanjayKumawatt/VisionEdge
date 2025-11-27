import React from 'react';
import { ShoppingCart, CreditCard, TrendingUp, Store, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const EcommerceHero = () => {
  return (
    <section className="relative bg-[#0B1121] py-24 md:py-32 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND EFFECTS (Sales & Growth Theme) */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Green/Gold Glow for Money & Conversion */}
        <div className="absolute top-0 left-1/4 w-[35rem] h-[35rem] bg-emerald-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* 2. FLOATING E-COMMERCE ICONS */}
      <div className="absolute top-24 left-[10%] opacity-20 animate-bounce-slow hidden lg:block">
        <ShoppingCart className="w-16 h-16 text-emerald-400" />
      </div>
      <div className="absolute bottom-28 right-[10%] opacity-20 animate-float delay-700 hidden lg:block">
        <CreditCard className="w-16 h-16 text-amber-400" />
      </div>
      <div className="absolute top-1/3 right-[20%] opacity-20 animate-pulse delay-1000 hidden lg:block">
        <TrendingUp className="w-14 h-14 text-teal-300" />
      </div>

      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
          <Store className="w-3 h-3" />
          Retail & Online Stores
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          Transform Your Business into a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400">
            Global Digital Marketplace
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          At <strong>VISIONEDGE</strong>, we build high-converting e-commerce stores that are secure, scalable, and designed to sell. From custom Shopify themes to complex multi-vendor marketplaces, we power your online growth.
        </p>

        {/* Platform Tags (Visual Trust) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 opacity-80">
           {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe Integration', 'Custom Cart'].map((tech) => (
             <span key={tech} className="flex items-center gap-1.5 text-xs font-medium text-slate-300 border border-slate-700 bg-slate-800/50 px-3 py-1.5 rounded-full hover:border-emerald-500 transition-colors cursor-default">
               <Tag className="w-3 h-3 text-emerald-500" /> {tech}
             </span>
           ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
          >
            Launch Your Store
            <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>

      </div>
    </section>
  );
};

export default EcommerceHero;