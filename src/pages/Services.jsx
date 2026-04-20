import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'UI/UX Design',
    desc: 'Pixel-perfect interfaces engineered around how users actually behave. We combine information architecture, interaction design, and visual craft to create products people love to use.',
    color: '#3b82f6',
    details: ['User Research', 'Wireframing', 'Interactive Prototypes', 'Design Systems', 'Accessibility Review', 'Usability Testing'],
    span: 'lg:col-span-2',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Clean, maintainable code that performs. From fast-loading marketing sites to complex SaaS platforms — we architect and build for scale.',
    color: '#10b981',
    details: ['React / Next.js', 'TypeScript', 'REST & GraphQL APIs', 'Performance Optimization', 'CI/CD Setup'],
    span: '',
  },
  {
    num: '03',
    title: 'Brand Identity',
    desc: 'A distinct visual language that makes your brand unmistakable. We build identities built to work everywhere — from app icons to out-of-home.',
    color: '#f59e0b',
    details: ['Logo Design', 'Visual Language', 'Brand Guidelines', 'Typography System', 'Color Strategy'],
    span: '',
  },
  {
    num: '04',
    title: 'Digital Strategy',
    desc: 'Before we design a single screen, we make sure we understand your users, competitors, and business goals. Strategy is the multiplier on every other service.',
    color: '#8b5cf6',
    details: ['Market Research', 'Competitive Analysis', 'User Personas', 'Growth Roadmap', 'KPI Framework'],
    span: 'lg:col-span-2',
  },
  {
    num: '05',
    title: 'Motion Design',
    desc: 'Purposeful animation that guides attention, reduces cognitive load, and makes your product feel premium — not gimmicky.',
    color: '#ec4899',
    details: ['Micro-interactions', 'Lottie Animations', 'Page Transitions', 'Loading States', 'Video Production'],
    span: '',
  },
  {
    num: '06',
    title: 'Conversion Optimization',
    desc: 'Systematic A/B testing, funnel analysis, and data-driven iteration that compounds returns after launch.',
    color: '#06b6d4',
    details: ['A/B Testing', 'Heatmap Analysis', 'Funnel Optimization', 'Copy Refinement', 'Analytics Dashboards'],
    span: '',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="section-tag mb-5"
            >
              Full-Cycle Agency
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-5"
            >
              Our Capabilities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-xl leading-relaxed"
            >
              A comprehensive suite of digital services designed to take your product from zero to one — and beyond.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: '#3b82f6', boxShadow: '0 6px 20px rgba(59,130,246,0.35)' }}
            >
              Start a Project
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`p-8 rounded-2xl group cursor-default transition-all duration-300 flex flex-col ${s.span}`}
              style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${s.color}30`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black"
                  style={{ background: `${s.color}18`, color: s.color, border: `1px solid ${s.color}25` }}
                >
                  {s.num}
                </div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: `${s.color}18`, color: s.color }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>

              <div className="flex flex-wrap gap-2">
                {s.details.map((d) => (
                  <span
                    key={d}
                    className="text-xs font-medium px-2.5 py-1.5 rounded-lg text-neutral-500"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process CTA */}
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Curious how we execute?</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
              See the five-phase process we use on every engagement — from discovery through to post-launch optimization.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.08]"
              style={{ border: '1px solid rgba(255,255,255,0.12)' }}
            >
              Our Process
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#3b82f6', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }}
            >
              See Pricing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
