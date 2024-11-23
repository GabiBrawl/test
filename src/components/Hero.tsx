import React from 'react';
import { Languages, Cpu, Palette, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#12314a]/10 to-[#566c8b]/10"></div>
      <div className="text-center z-10 px-4">
        <div className="relative inline-block mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/10 relative">
            <img 
              src="https://pbs.twimg.com/profile_images/1853876826860376064/s1qQ0iMH_400x400.jpg" 
              alt="𝕲𝖆𝖇𝖎𝕭𝖗𝖆𝖜𝖑 ✨" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#12314a]/20 to-[#566c8b]/20"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 flex gap-2">
            <span className="skill-bubble p-2 bg-white/5 backdrop-blur-sm rounded-full">
              <Languages className="w-6 h-6 text-blue-400" />
              <span className="tooltip">Multilingual Developer</span>
            </span>
            <span className="skill-bubble p-2 bg-white/5 backdrop-blur-sm rounded-full">
              <Cpu className="w-6 h-6 text-green-400" />
              <span className="tooltip">Hardware Expert</span>
            </span>
            <span className="skill-bubble p-2 bg-white/5 backdrop-blur-sm rounded-full">
              <Palette className="w-6 h-6 text-purple-400" />
              <span className="tooltip">Design Enthusiast</span>
            </span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#c842c0] to-[#7f3b84]">
          𝕲𝖆𝖇𝖎𝕭𝖗𝖆𝖜𝖑 ✨
        </h1>
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-xl md:text-2xl text-gray-300">
            Full Stack Developer & Open Source Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span className="px-3 py-1 bg-white/5 rounded-full">🇩🇪 German (Learning)</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">🇷🇺 Russian (Learning)</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">🇫🇷 French</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">🇬🇧 English</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">🇵🇹 Portuguese</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span className="px-3 py-1 bg-white/5 rounded-full">PC Building</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Device Repair</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Vector Art</span>
            <span className="px-3 py-1 bg-white/5 rounded-full">Inkscape</span>
          </div>
        </div>
        <a href="#companies" 
           className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full
                    hover:bg-white/10 transition-all duration-300 text-white">
          Explore My Work
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}