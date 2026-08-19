// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;