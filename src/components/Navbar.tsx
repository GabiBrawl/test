import React from 'react';
import { Github, Twitter, Mail, MessageCircle, Figma } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full z-[60] px-6 py-3">
      <div className="flex items-center justify-center space-x-8">
        <a href="#home" 
           className={`nav-link text-gray-300 hover:text-white transition-colors ${activeSection === 'home' ? 'text-white' : ''}`}>
          Home
        </a>
        <a href="#companies" 
           className={`nav-link text-gray-300 hover:text-white transition-colors ${activeSection === 'companies' ? 'text-white' : ''}`}>
          Companies
        </a>
        <a href="#projects" 
           className={`nav-link text-gray-300 hover:text-white transition-colors ${activeSection === 'projects' ? 'text-white' : ''}`}>
          Projects
        </a>
        <a href="#skills" 
           className={`nav-link text-gray-300 hover:text-white transition-colors ${activeSection === 'skills' ? 'text-white' : ''}`}>
          Skills
        </a>
        <div className="h-4 w-px bg-gray-700" />
        <a href="https://github.com/GabiBrawl" 
           target="_blank" 
           rel="noopener noreferrer"
           className="nav-link text-gray-300 hover:text-white">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://x.com/GabiBrawl"
           target="_blank"
           rel="noopener noreferrer"
           className="nav-link text-gray-300 hover:text-white">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="https://figma.com/@SmolGabi"
           target="_blank"
           rel="noopener noreferrer"
           className="nav-link text-gray-300 hover:text-white">
          <Figma className="w-5 h-5" />
        </a>
        <a href="https://discord.com/users/gabibrawl"
           target="_blank"
           rel="noopener noreferrer"
           className="nav-link text-gray-300 hover:text-white">
          <MessageCircle className="w-5 h-5" />
        </a>
        <a href="mailto:gabiya219@proton.me"
           className="nav-link text-gray-300 hover:text-white">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}