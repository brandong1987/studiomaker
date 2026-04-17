import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="h-screen flex items-center justify-center text-white">Project not found.</div>;
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/portfolio" className="text-blue-600 font-bold mb-12 inline-block hover:underline">← Back to Portfolio</Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">{project.title}</h1>
            <p className="text-blue-600 font-bold text-xl mb-12 uppercase tracking-widest">{project.cat}</p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-white font-bold text-2xl mb-4">The Challenge</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{project.fullDesc}</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-4">The Result</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{project.results}</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
