import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-white">Ready to <span className="text-blue-600">launch?</span></h1>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed">
            Whether you have a fully fleshed-out brief or just a spark of an idea, we're ready to help you build it.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 gap-4 text-left bg-brand-gray border border-white/10 p-8 rounded-3xl"
          onSubmit={e => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2 ml-1">Full Name</label>
              <input className="w-full bg-brand-black border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2 ml-1">Email Address</label>
              <input className="w-full bg-brand-black border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2 ml-1">Project Type</label>
            <select className="w-full bg-brand-black border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white appearance-none">
              <option>UI/UX Design</option>
              <option>Full-Stack Development</option>
              <option>Branding</option>
              <option>E-commerce</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2 ml-1">Project Brief</label>
            <textarea rows={5} className="w-full bg-brand-black border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all text-white" placeholder="Tell us about your vision..."></textarea>
          </div>
          <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all shadow-xl">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
