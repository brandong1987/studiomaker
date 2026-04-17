import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Our Philosophy</div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight tracking-tighter">
              Precision Over <span className="text-blue-600">Hype.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-12">
              In an industry filled with noise, studiomaker focuses on the signal. We believe that the most impressive websites aren't the ones with the most flashy effects, but the ones that solve a problem perfectly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass p-8 rounded-3xl">
                <h4 className="text-white font-bold mb-2">The Vision</h4>
                <p className="text-gray-500 text-sm">To redefine the standard of the modern web through technical excellence.</p>
              </div>
              <div className="glass p-8 rounded-3xl">
                <h4 className="text-white font-bold mb-2">The Method</h4>
                <p className="text-gray-500 text-sm">A lean, iterative approach driven by user data and design logic.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                alt="Our Studio"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 p-10 glass rounded-3xl shadow-2xl hidden md:block border-blue-600/30">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-1">12+</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest font-bold">Global Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
