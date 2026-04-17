import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Let's <span className="text-blue-600">Scale.</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We're currently accepting new partners for Q3 2026.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl"
        >
          <form className="grid grid-cols-1 gap-8" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                <input className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white placeholder:text-gray-700" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                <input className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white placeholder:text-gray-700" placeholder="email@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Project Scope</label>
              <select className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white appearance-none">
                <option className="bg-brand-black">UI/UX Design</option>
                <option className="bg-brand-black">Full-Stack Development</option>
                <option className="bg-brand-black">Brand Identity</option>
                <option className="bg-brand-black">Enterprise Solution</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Brief</label>
              <textarea rows={6} className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white placeholder:text-gray-700" placeholder="Tell us about your goals..."></textarea>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-[0.98]">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
