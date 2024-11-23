import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        <div className="flex flex-col items-center">
          <p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/GabiBrawl" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full
                        hover:bg-white/20 transition-all duration-300 text-white">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full
                        hover:bg-white/20 transition-all duration-300 text-white">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="mailto:contact@example.com"
               className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full
                        hover:bg-white/20 transition-all duration-300 text-white">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}