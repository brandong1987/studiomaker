import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery & Research',
    desc: 'We start by deeply understanding your business, your users, and the competitive landscape. This phase defines what success actually looks like for your project.',
    details: ['Stakeholder interviews', 'User research & personas', 'Competitive analysis', 'Technical audit', 'Goal alignment workshop'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Strategy & Architecture',
    desc: 'Armed with insights, we craft a blueprint — mapping out information architecture, user flows, and the technical approach before a single pixel is designed.',
    details: ['Information architecture', 'User flow mapping', 'Tech stack recommendation', 'Content strategy', 'KPI definition'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'Design & Prototyping',
    desc: 'Our design phase is iterative and collaborative. You see the work evolve in real time, giving feedback at every milestone — nothing ships without your sign-off.',
    details: ['Wireframes & low-fi', 'High-fidelity UI design', 'Interactive prototype', 'Design system creation', 'Accessibility review'],
    duration: '2–4 weeks',
  },
  {
    num: '04',
    title: 'Development & QA',
    desc: 'We build with performance and scalability in mind. Every component is tested across devices, browsers, and edge cases before it reaches production.',
    details: ['Component-driven development', 'Cross-browser testing', 'Performance optimization', 'Accessibility compliance', 'Security hardening'],
    duration: '3–6 weeks',
  },
  {
    num: '05',
    title: 'Launch & Growth',
    desc: 'Launch day is the beginning, not the end. We monitor post-launch metrics, run A/B tests, and iterate continuously to compound your results over time.',
    details: ['Staged rollout', 'Analytics setup', 'A/B testing framework', 'Performance monitoring', 'Ongoing retainer support'],
    duration: 'Ongoing',
  },
];

const principles = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7l8 5 8-5-8-5zM2 13l8 5 8-5M2 10l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Transparent Communication',
    desc: 'Weekly syncs, a shared project board, and zero surprises. You always know what we\'re working on.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9 11l3 3 6-6M5 10a5 5 0 1010 0 5 5 0 00-10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Data-Driven Decisions',
    desc: 'Every design choice is backed by research, user data, or proven best practice — never gut feel alone.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13 10H7m0 0l3-3m-3 3l3 3M10 18a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Iterative by Default',
    desc: 'We release in small, testable increments. Fast feedback loops mean we fix problems before they become expensive.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 2l2 4 4.5 1-3.25 3 .75 4.5L12 12l-4 2.5.75-4.5L5.5 7 10 6l2-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Built to Last',
    desc: 'Clean code, documented design systems, and handoff packages that make your team self-sufficient.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Process() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 text-[#3b82f6] text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            How We Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight"
          >
            A Process Built for <span className="text-[#3b82f6]">Results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-neutral-400 text-xl leading-relaxed"
          >
            Five proven phases, zero guesswork. Here's exactly how we take a project from brief to launch.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative mb-32">
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative md:pl-24"
              >
                <div
                  className="absolute left-0 top-8 w-[4.5rem] h-[4.5rem] rounded-2xl hidden md:flex items-center justify-center font-black text-sm"
                  style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', color: '#3b82f6' }}
                >
                  {step.num}
                </div>
                <div
                  className="rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-[rgba(59,130,246,0.2)] group"
                  style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[#3b82f6] font-bold text-sm md:hidden">{step.num}</span>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-neutral-400 leading-relaxed mb-6 max-w-2xl">{step.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((d) => (
                          <span
                            key={d}
                            className="text-xs font-medium px-3 py-1.5 rounded-lg text-neutral-400"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 md:text-right">
                      <div
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <circle cx="5" cy="5" r="3" fill="currentColor" />
                        </svg>
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Principles We Never Compromise On</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Every engagement is different. These four things are always the same.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[#3b82f6] mb-4"
                  style={{ background: 'rgba(59,130,246,0.1)' }}
                >
                  {p.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{p.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.08) 100%)', border: '1px solid rgba(59,130,246,0.2)' }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Ready to start your project?</h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              Now that you know how we work, let's talk about what we can build together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-[#2563eb] transition-all duration-200 hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }}
              >
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
