import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed w-full z-50 px-6 py-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3">
      <Link to="/" className="text-xl font-extrabold tracking-tighter text-white flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
        studiomaker<span className="text-blue-600">.</span>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/services" className="text-sm font-medium text-gray-400 hover:text-white transition-all">Services</Link>
        <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-white transition-all">Portfolio</Link>
        <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-all">About</Link>
        <Link to="/contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">Start Project</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="text-2xl font-black tracking-tighter text-white mb-6">
          studiomaker<span className="text-blue-600">.</span>
        </div>
        <p className="text-gray-500 max-w-sm leading-relaxed">
          A boutique design studio crafting high-performance digital experiences for the next generation of brands.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-white font-bold mb-2">Navigation</h4>
        <Link to="/services" className="text-gray-500 hover:text-white transition-colors text-sm">Services</Link>
        <Link to="/portfolio" className="text-gray-500 hover:text-white transition-colors text-sm">Portfolio</Link>
        <Link to="/about" className="text-gray-500 hover:text-white transition-colors text-sm">About</Link>
        <Link to="/contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</Link>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-white font-bold mb-2">Social</h4>
        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Dribbble</a>
        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-gray-600">
      <p>© {new Date().getFullYear()} studiomaker. All rights reserved.</p>
      <p>Designed for Excellence.</p>
    </div>
  </footer>
);

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-600 selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={window.location.pathname}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
