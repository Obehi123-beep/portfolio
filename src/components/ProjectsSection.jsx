// src/components/ProjectsSection.jsx

import React from "react";
import { ExternalLink, Folder, Code } from "lucide-react";
import projects from "../data/projectsData";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Featured{" "}
          <span className="text-emerald-400">
            Projects
          </span>
        </h2>

        <p className="text-slate-400 max-w-xl text-base">
          A showcase of responsive web applications,
          interactive interfaces, and frontend development
          projects built with modern web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 group"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 bg-slate-800/80 rounded-xl text-emerald-400 group-hover:bg-emerald-950/60 transition-colors">
                  <Folder size={22} />
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  {/* GitHub */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1 text-xs font-mono bg-slate-800 px-2.5 py-1.5 rounded"
                    title="View Source Code"
                  >
                    <Code size={14} />
                    Code
                  </a>

                  {/* Live Website */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-emerald-400 transition-colors"
                      title="Visit Live Site"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Category */}
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                {project.category}
              </span>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Technology Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              {project.techStack.map((tech, index) => (
                <span
                  key={`${project.id}-${index}`}
                  className="text-xs font-mono bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;