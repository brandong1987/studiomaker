import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import { testimonials } from '../data/testimonials';

const values = [
  {
    title: 'Precision over hype',
    desc: 'We skip trendy effects that don\'t serve users. Every design decision earns its place.',
    icon: '🎯',
  },
  {
    title: 'Radical transparency',
    desc: 'No surprises. You see everything — the reasoning, the trade-offs, the roadblocks.',
    icon: '🔭',
  },
  {
    title: 'Craft at every layer',
    desc: 'From the copy on a button to the way the API is structured. Details compound.',
    icon: '⚡',
  },
  {
    title: 'Outcomes over outputs',
    desc: 'We measure success in your metrics, not ours. Shipped is not the same as successful.',
    icon: '📈',
  },
];

const awards = [
  { title: 'Awwwards SOTD', year: '2024', category: 'Best Portfolio' },
  { title: 'CSS Design Awards', year: '2024', category: 'UI Design' },
  { title: 'Webby Award', year: '2023', category: 'Best B2B Site' },
  { title: 'FWA of the Month', year: '2023', category: 'Innovation' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] } }),
};

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-tag mb-6"
          >
            About StudioMaker
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.92] mb-8"
          >
            Precision Over <span className="text-gradient-blue">Hype.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-xl text-neutral-400 leading-relaxed max-w-3xl"
          >
            StudioMaker is a boutique digital studio founded in 2019. We work with a small number of clients at a time — not because we can't scale, but because we believe that full attention is what drives exceptional results.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24"
        >
          {[
            { value: '2019', label: 'Founded' },
            { value: '80+', label: 'Projects Shipped' },
            { value: '6', label: 'Core Team' },
            { value: '12+', label: 'Awards Won' },
          ].map((s, i) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl text-center"
              style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest font-semibold">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="mb-24">
          <div className="mb-12">
            <div className="section-tag mb-4">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What drives every decision.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4 className="text-white font-bold mb-2 capitalize">{v.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <div className="section-tag mb-4">The Team</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Small team. Big output.</h2>
            </div>
            <p className="text-neutral-500 text-sm max-w-xs text-right hidden md:block">
              We stay intentionally lean — six specialists who work together on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${member.color}33`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: `${member.color}25`, border: `1px solid ${member.color}35`, color: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{member.name}</div>
                    <div className="text-neutral-500 text-xs mt-0.5">{member.role}</div>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-24">
          <div className="section-tag mb-8">Recognition</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-[#f59e0b] text-lg mb-3">★</div>
                <div className="text-white font-bold text-sm mb-1">{a.title}</div>
                <div className="text-neutral-500 text-xs">{a.category} · {a.year}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.06) 100%)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Let's build something together.</h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto leading-relaxed">
              We're selective about the projects we take on. If you're building something worth caring about, we'd love to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#3b82f6', boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }}
              >
                Start a Conversation
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.07]"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
