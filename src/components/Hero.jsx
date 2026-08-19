// src/components/Hero.jsx
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
      
      {/* Badge */}
      <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs px-3.5 py-1.5 rounded-full mb-8 font-mono">
        <Sparkles size={14} className="animate-pulse" />
        <span>Frontend Web Developer</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
        Crafting fast, responsive, and modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">web applications</span>
      </h1>

      {/* Subtitle */}
      <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
        Frontend Engineer specializing in React, Tailwind CSS, JavaScript, and responsive layout architecture.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <a 
          href="#projects" 
          className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
        >
          Explore Projects <ArrowRight size={18} className="ml-2" />
        </a>
        <a 
          href="#contact" 
          className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-medium px-6 py-3.5 rounded-xl transition-all"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
}

// Exported cleanly at the bottom
export default Hero;