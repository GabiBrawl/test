import React from 'react';
import { Code2, Database, Globe, Palette, Languages, Cpu, Wrench } from 'lucide-react';

const skills = {
  "Frontend": {
    icon: <Globe className="w-6 h-6" />,
    items: ["React", "TypeScript", "TailwindCSS", "Next.js"]
  },
  "Backend": {
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
  },
  "Languages": {
    icon: <Languages className="w-6 h-6" />,
    items: ["🇩🇪 German", "🇷🇺 Russian", "🇫🇷 French", "🇬🇧 English", "🇵🇹 Portuguese"]
  },
  "Hardware": {
    icon: <Cpu className="w-6 h-6" />,
    items: ["PC Building", "Smartphone Repair", "Device Troubleshooting", "Hardware Diagnostics"]
  },
  "Design": {
    icon: <Palette className="w-6 h-6" />,
    items: ["Vector Art", "Inkscape", "UI/UX", "Responsive Design"]
  },
  "Programming": {
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "Python", "Java", "C++"]
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon, items }]) => (
            <div key={category} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}