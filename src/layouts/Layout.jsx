import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-brand-black/80 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <Link to="/" className="text-2xl font-black tracking-tighter text-white">
        studiomaker<span className="text-blue-600">.</span>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</Link>
        <Link to="/portfolio" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Portfolio</Link>
        <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</Link>
        <Link to="/contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">Start Project</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xl font-black tracking-tighter text-white">studiomaker<span className="text-blue-600">.</span></div>
      <div className="text-gray-500 text-sm">© {new Date().getFullYear()} studiomaker. Built for the bold.</div>
      <div className="flex gap-6 text-gray-400 text-sm">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-blue-600 selection:text-white">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
