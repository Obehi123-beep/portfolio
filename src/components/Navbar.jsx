// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Code2, Mail, ExternalLink, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="p-2 bg-slate-800/80 border border-slate-700/60 rounded-xl group-hover:border-emerald-500/50 transition-colors">
            <Code2 className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            Obehi<span className="text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-slate-300 font-medium">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center space-x-4 text-slate-300">
          <a 
            href="https://github.com/Obehi123-beep" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-xs font-mono border border-slate-700 flex items-center gap-1"
          >
            GitHub <ExternalLink size={14} />
          </a>
          <a 
            href="mailto:obehibella33@gmail.com" 
            className="p-2 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
            title="Send Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-800 flex flex-col space-y-4 text-slate-300 font-medium text-base">
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-emerald-400 transition-colors py-1"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-emerald-400 transition-colors py-1"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-emerald-400 transition-colors py-1"
          >
            Contact
          </a>

          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-4">
            <a 
              href="https://github.com/Obehi123-beep" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-mono border border-slate-700 flex items-center gap-1"
            >
              GitHub <ExternalLink size={14} />
            </a>
            <a 
              href="mailto:obehibella33@gmail.com" 
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;