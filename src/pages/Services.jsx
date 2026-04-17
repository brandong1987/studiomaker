import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Digital Strategy', 
    desc: 'Scaling your business with data-driven design and market analysis.', 
    size: 'md:col-span-2', 
    color: 'bg-blue-600',
    details: ['Market Research', 'Competitor Analysis', 'User Personas', 'Growth Roadmap']
  },
  { 
    title: 'UI/UX Design', 
    desc: 'Pixel-perfect interfaces that users love.', 
    size: 'md:col-span-1', 
    color: 'bg-gray-800',
    details: ['Wireframing', 'Interaction Design', 'Prototyping']
  },
  { 
    title: 'Development', 
    desc: 'Clean, scalable code built for performance.', 
    size: 'md:col-span-1', 
    color: 'bg-gray-800',
    details: ['Next.js', 'TypeScript', 'API Design']
  },
  { 
    title: 'Branding', 
    desc: 'Distinct visual identities that command attention.', 
    size: 'md:col-span-2', 
    color: 'bg-gray-800',
    details: ['Logo Design', 'Visual Language', 'Brand Guidelines']
  },
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Our Capabilities</h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              A comprehensive suite of digital services designed to take your product from zero to one and beyond.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Full Cycle Agency</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-3xl border border-white/10 group hover:border-blue-600/50 transition-all cursor-default ${s.size} glass`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center text-white font-bold`}>
                  0{i+1}
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <span className="text-white">→</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">{s.desc}</p>
              <div className="flex flex-wrap gap-3">
                {s.details.map((d, idx) => (
                  <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-500 border border-white/10">
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
