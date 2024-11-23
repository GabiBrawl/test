import React from 'react';
import { Keyboard, Music } from 'lucide-react';

export default function Companies() {
  return (
    <section id="companies" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Current Ventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#12314a] to-[#566c8b] rounded-xl flex items-center justify-center">
                <Keyboard className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">PsychoDuck Tech</h3>
                <p className="text-gray-400">Co-founder & Hardware Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionizing PC hardware, starting with an innovative keyboard design that challenges
              traditional typing experiences. Built with precision and passion for tech enthusiasts.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Hardware Design</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Manufacturing</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Innovation</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c842c0] to-[#7f3b84] rounded-xl flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">LePlayer Music</h3>
                <p className="text-gray-400">Founder & Lead Developer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              A next-generation music streaming service designed to deliver exceptional audio quality
              and a unique listening experience. Currently in development as a solo project.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Streaming</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Full Stack</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">Audio Tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}