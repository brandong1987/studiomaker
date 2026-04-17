import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: 'Nova Bank', 
    cat: 'Fintech', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38a70?auto=format&fit=crop&q=80&w=800',
    desc: 'A complete redesign of the mobile banking experience focusing on accessibility and rapid transactions.'
  },
  { 
    title: 'Luxe Stay', 
    cat: 'Hospitality', 
    img: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
    desc: 'A high-end booking platform for luxury villas with a focus on immersive visual storytelling.'
  },
  { 
    title: 'Aero AI', 
    cat: 'SaaS', 
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    desc: 'Complex data visualization dashboard for AI-driven aeronautics analytics.'
  },
  { 
    title: 'Zenith Health', 
    cat: 'Health', 
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    desc: 'A patient-first wellness platform integrating real-time telemetry and scheduling.'
  },
];

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-end mb-20"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Selected Works</h1>
            <p className="text-gray-400 text-xl">A showcase of our commitment to quality and innovation.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-video mb-6">
                <img src={p.img} alt={p.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-white">{p.title}</h3>
                  <p className="text-blue-600 font-medium">{p.cat}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">{p.desc}</p>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                <span className="text-white">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
