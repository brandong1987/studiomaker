import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'UI/UX Design', 
    desc: 'We create intuitive, user-centric interfaces that remove friction and guide your customers toward conversion. Every pixel has a purpose.',
    details: ['User Research', 'Wireframing', 'High-Fidelity Prototyping', 'Usability Testing'],
    icon: '🎨'
  },
  { 
    title: 'Full-Stack Development', 
    desc: 'Scalable, lightning-fast web applications built with modern stacks (React, Node, Next.js) to ensure your product grows with your user base.',
    details: ['Frontend Engineering', 'Backend Architecture', 'API Integration', 'Performance Optimization'],
    icon: '💻'
  },
  { 
    title: 'Brand Identity', 
    desc: 'More than just a logo. We build cohesive visual systems that communicate your values and command authority in your market.',
    details: ['Logo Design', 'Style Guides', 'Brand Voice', 'Visual Assets'],
    icon: '🚀'
  },
  { 
    title: 'E-commerce Solutions', 
    desc: 'Conversion-optimized online stores designed to maximize AOV and LTV while providing a seamless shopping experience.',
    details: ['Shopify/Custom Stores', 'Checkout Optimization', 'Payment Integration', 'Inventory Systems'],
    icon: '🛍️'
  },
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">Our Expertise</h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            We provide a full-spectrum digital agency service, combining strategic thinking with technical precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-brand-gray border border-white/10 rounded-3xl hover:border-blue-600/50 transition-all group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{s.title}</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-3">
                {s.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
