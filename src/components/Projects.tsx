import React from 'react';
import { Github, ExternalLink, ArrowDown } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "A revolutionary open-source project that showcases modern development practices.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/GabiBrawl/project1",
    live: "https://project1.demo",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450"
  },
  {
    title: "Project 2",
    description: "An innovative solution for modern development challenges.",
    tech: ["Next.js", "TailwindCSS", "MongoDB"],
    github: "https://github.com/GabiBrawl/project2",
    live: "https://project2.demo",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=450"
  },
  {
    title: "Project 3",
    description: "A cutting-edge application showcasing full-stack development expertise.",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    github: "https://github.com/GabiBrawl/project3",
    live: "https://project3.demo",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800&h=450"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="#skills" 
             className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full
                      hover:bg-white/10 transition-all duration-300 text-white">
            View Skills & Expertise
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}