// src/components/ContactSection.jsx
import React from 'react';
import { Mail, Phone, MessageSquare, ArrowUpRight, Globe, FileText } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80 text-center">
      
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        
        {/* Availability & Location Badge */}
        <div className="inline-flex items-center space-x-2 bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs px-3.5 py-1.5 rounded-full mb-6 font-mono">
          <Globe size={14} />
          <span>Available for Remote & Local Opportunities</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let's Build Something Together
        </h2>
        
        <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto leading-relaxed">
          I'm currently open to frontend engineering roles, web development projects, and technical collaborations. Reach out via email, phone, or WhatsApp!
        </p>

        {/* Primary Contact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          
          {/* Email Button */}
          <a 
            href="mailto:obehibella33@gmail.com" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
          >
            <Mail size={18} className="mr-2" />
            obehibella33@gmail.com
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/2348092294328" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-6 py-3.5 rounded-xl transition-all"
          >
            <MessageSquare size={18} className="mr-2 text-emerald-400" />
            WhatsApp
          </a>

          {/* Direct Call Button */}
          <a 
            href="tel:+2348092294328" 
            className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-6 py-3.5 rounded-xl transition-all"
          >
            <Phone size={18} className="mr-2 text-emerald-400" />
            +234 809 229 4328
          </a>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 text-slate-500 text-sm font-mono flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Obehi. All rights reserved.</p>
        <p className="text-xs">Built with React & Tailwind CSS</p>
      </footer>

    </section>
  );
}

export default ContactSection;