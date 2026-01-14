import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ title, description, link, tags, image }) => {
  return (
    <div 
      onClick={() => window.open(link, "_blank")}
      className="group cursor-pointer bg-[#0c0c0e]/60 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 flex flex-col h-full"
    >
      {/* Terminal-style Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <Code2 size={14} className="text-zinc-500" />
          <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
            {title.replace(/\s+/g, '_').toLowerCase()}.sh
          </span>
        </div>
        <ExternalLink size={14} className="text-zinc-500 group-hover:text-orange-400 transition-colors" />
      </div>

      {/* Project Image Container */}
      <div className="relative aspect-video overflow-hidden border-b border-zinc-800">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="p-6 font-mono flex flex-col flex-grow">
        <h3 className="text-xl text-white mb-3 tracking-tight font-bold group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] border border-zinc-700 px-2 py-1 rounded text-zinc-500 bg-zinc-900/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;