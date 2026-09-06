// src/components/AboutSection.jsx
import React from 'react';
import { Code2, Layout, Cpu, GitBranch, Globe, Terminal } from 'lucide-react';

function AboutSection() {
  const skills = [
    { name: "React", category: "Frontend Framework", icon: Code2 },
    { name: "JavaScript (ES6+)", category: "Core Language", icon: Terminal },
    { name: "Tailwind CSS", category: "Styling", icon: Layout },
    { name: "Bootstrap", category: "Styling", icon: Layout },
    { name: "HTML5 & CSS3", category: "Web Fundamentals", icon: Globe },
    { name: "Git & GitHub", category: "Version Control", icon: GitBranch },
    { name: "Vite", category: "Build Tool", icon: Cpu },
    { name: "Vercel", category: "Deployment", icon: Globe },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          About <span className="text-emerald-400">Me</span> & Skills
        </h2>
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          I am a dedicated Frontend Developer passionate about building clean, performant, and responsive web applications. I specialize in React, modern JavaScript, and intuitive user interfaces that solve real-world problems—ranging from inventory and logistics dashboards to interactive service platforms.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl flex items-center space-x-3.5 hover:border-emerald-500/40 transition-colors"
            >
              <div className="p-2 bg-emerald-950/60 text-emerald-400 rounded-lg">
                <IconComponent size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                <p className="text-xs text-slate-400">{skill.category}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default AboutSection;