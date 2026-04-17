import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-white"
          >
            Designing the <span className="text-blue-600">future</span> of digital products.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We are a premium design and development studio that transforms bold ideas into high-converting digital experiences.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all text-center">
              Work with us
            </Link>
            <Link to="/portfolio" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all text-center">
              Our Work
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Quick Teaser for Services */}
      <section className="py-24 px-6 bg-brand-gray/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 text-white">We blend art with engineering.</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From conceptual UI/UX to scalable full-stack development, we provide the technical muscle and creative vision to launch your product.
            </p>
            <Link to="/services" className="text-blue-600 font-bold hover:underline">Explore our expertise &rarr;</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-brand-black border border-white/10 rounded-2xl">
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-bold text-white">Fast Launch</div>
            </div>
            <div className="p-6 bg-brand-black border border-white/10 rounded-2xl">
              <div className="text-3xl mb-2">💎</div>
              <div className="font-bold text-white">Premium Quality</div>
            </div>
            <div className="p-6 bg-brand-black border border-white/10 rounded-2xl">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-bold text-white">Growth Focused</div>
            </div>
            <div className="p-6 bg-brand-black border border-white/10 rounded-2xl">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-bold text-white">Mobile First</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
