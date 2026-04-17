import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              We blend <span className="text-blue-600">art</span> with <span className="text-blue-600">engineering</span>.
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              studiomaker is not just a design studio; it's a digital lab where we experiment with the boundaries of the web. We believe that the most successful products are those that feel invisible—where the design serves the user perfectly without getting in the way.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed mb-12">
              Founded on the principle of "Precision over Hype," we partner with ambitious brands to translate complex visions into high-performance digital products that drive growth and increase loyalty.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-5xl font-black text-white mb-2">50+</div>
                <div className="text-gray-500 font-medium">Clients Worldwide</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">12</div>
                <div className="text-gray-500 font-medium">Industry Awards</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-brand-gray">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover opacity-80" 
                alt="Our Studio"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-white font-bold text-xl">Design-first approach.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
