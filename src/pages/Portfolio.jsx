import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { 
    title: 'Nova Bank', 
    cat: 'Fintech / Product Design', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38a70?auto=format&fit=crop&q=80&w=800',
    desc: 'Revolutionizing digital banking with a friction-less interface.'
  },
  { 
    title: 'Luxe Stay', 
    cat: 'Hospitality / E-commerce', 
    img: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800',
    desc: 'An immersive booking experience for high-end vacation rentals.'
  },
  { 
    title: 'Aero AI', 
    cat: 'SaaS / Dashboard', 
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    desc: 'Translating complex AI data into actionable business insights.'
  },
  { 
    title: 'Zenith Health', 
    cat: 'Health / Platform', 
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    desc: 'A patient-first wellness ecosystem with real-time telemetry.'
  },
];

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Proof of <span className="text-blue-600">Concept.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            We build products that don't just look great—they perform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-8">
                <img src={p.img} alt={p.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <div className="text-white font-bold text-lg">View Project &rarr;</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-4">{p.cat}</p>
                  <p className="text-gray-500 leading-relaxed max-w-md">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
