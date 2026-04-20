import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.cat)))];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.cat === active);

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-tag mx-auto mb-5"
          >
            Selected Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight"
          >
            Proof of Concept.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-xl"
          >
            We build products that don't just look great — they perform.
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 flex-wrap justify-center mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                active === cat
                  ? { background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)' }
                  : { background: 'transparent', color: '#737373', border: '1px solid rgba(255,255,255,0.07)' }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
                to={`/portfolio/${p.id}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}
                  >
                    <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                      View Case Study
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">{p.cat}</span>
                    <svg
                      className="text-neutral-700 group-hover:text-[#3b82f6] transition-colors duration-300"
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-neutral-500 mb-6">Ready to add your project to this list?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#3b82f6', boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }}
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
