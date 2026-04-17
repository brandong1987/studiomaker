import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 mb-8 rounded-full glass text-xs font-bold text-blue-400 tracking-wide uppercase"
            >
              Digital Design Studio
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-gradient"
            >
              Precision <br /> Engineering.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
            >
              We build high-performance digital experiences for brands that refuse to settle for average.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link to="/contact" className="px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all text-center shadow-2xl shadow-blue-500/20">
                Start a Project
              </Link>
              <Link to="/portfolio" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[150px]"></div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-12">Trusted by innovators worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale contrast-125">
             <div className="text-2xl font-black text-white">SaaSly</div>
             <div className="text-2xl font-black text-white">VELOCITY</div>
             <div className="text-2xl font-black text-white">NEXUS</div>
             <div className="text-2xl font-black text-white">QUANTUM</div>
             <div className="text-2xl font-black text-white">PRISM</div>
          </div>
        </div>
      </section>

      {/* Feature Section - The "Sizzle" */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Design Process" />
              </div>
              <div className="absolute -bottom-8 -right-8 p-8 glass rounded-3xl shadow-2xl hidden md:block">
                <div className="text-4xl font-black text-white mb-1">99%</div>
                <div className="text-gray-400 text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                We don't just build websites. <span className="text-blue-600">We build growth.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Most agencies focus on how it looks. We focus on how it works. By combining deep behavioral psychology with cutting-edge engineering, we create digital products that convert visitors into loyal customers.
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Conversion-Centric Design', d: 'Every element is placed to drive a specific action.' },
                  { t: 'Extreme Performance', d: 'Sub-second load times to reduce bounce rates.' },
                  { t: 'Scalable Architecture', d: 'Built to handle 100 users or 100 million.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.t}</h4>
                      <p className="text-gray-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
