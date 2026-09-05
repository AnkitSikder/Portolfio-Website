import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projectsData';

export default function NextProjectNav({ currentPath }) {
  // Find current index
  const currentIndex = projects.findIndex(p => p.pageLink === currentPath);
  
  if (currentIndex === -1) return null;

  // Calculate next index (loop back to 0 if at the end)
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <Link 
      to={nextProject.pageLink}
      onClick={() => window.scrollTo(0, 0)}
      className="block w-full h-[350px] md:h-[450px] relative group overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${nextProject.link})` }}
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 pointer-events-none">
        <span className="font-clash text-lg md:text-xl text-white/80 uppercase tracking-[0.2em] mb-4">
          Next Project
        </span>
        <div className="flex items-center gap-4 md:gap-8 transition-transform duration-500 group-hover:-translate-y-2">
          <h2 className="font-clash font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-wide">
            {nextProject.title}
          </h2>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:scale-110 shadow-lg">
            <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
