import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

const logos = ['Nova Bank', 'Aero AI', 'Luxe Stay', 'Zenith Health', 'Quantum', 'Prism', 'Velocity', 'Nexus'];

const stats = [
  { value: '80+', label: 'Projects Shipped' },
  { value: '99%', label: 'Satisfaction Rate' },
  { value: '12+', label: 'Industry Awards' },
  { value: '3.4×', label: 'Avg. ROI Uplift' },
];

const services = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Interfaces shaped by user psychology. Beautiful, purposeful, and built to convert.',
    color: '#3b82f6',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 6l-3 3 3 3M14 6l3 3-3 3M10 3l-2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Development',
    desc: 'Clean, scalable code. Performant apps that handle 100 users or 100 million.',
    color: '#10b981',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.2 4.2l1.4 1.4M12.4 12.4l1.4 1.4M4.2 13.8l1.4-1.4M12.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Brand Identity',
    desc: 'Visual systems that command attention and make your brand unforgettable.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13l4-4 3 3 4-5 3 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Digital Strategy',
    desc: 'Data-driven roadmaps that align your product goals with real business outcomes.',
    color: '#8b5cf6',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
          <path d="M6 1l1.3 2.6L10 4l-2 1.9.5 2.7L6 7.4 3.5 8.6 4 5.9 2 4l2.7-.4L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-15%] left-[10%] w-[500px] h-[500px] rounded-full" style={{ background: 'rgba(59,130,246,0.12)', filter: 'blur(120px)' }} />
          <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full" style={{ background: 'rgba(139,92,246,0.1)', filter: 'blur(120px)' }} />
          <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] rounded-full" style={{ background: 'rgba(59,130,246,0.06)', filter: 'blur(80px)' }} />
          {/* dot grid */}
          <div className="absolute inset-0 dot-grid opacity-40" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="section-tag mx-auto mb-7"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="rounded-full">
              <circle cx="4" cy="4" r="4" />
            </svg>
            Award-winning digital studio — est. 2019
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tighter leading-[0.92] text-white mb-8"
          >
            We Build Digital<br />
            <span className="text-gradient-blue">Products That</span><br />
            Last.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            StudioMaker is a boutique design and engineering studio that turns ambitious ideas into
            high-performance digital experiences — without compromising on craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 text-white font-semibold px-7 py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#3b82f6', boxShadow: '0 8px 30px rgba(59,130,246,0.4)' }}
            >
              Start a Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.08]"
              style={{ border: '1px solid rgba(255,255,255,0.12)' }}
            >
              View Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="inline-flex items-center gap-3 mt-12 px-4 py-2.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex -space-x-2">
              {['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'].map((c, i) => (
                <div key={i} className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: c, border: '1.5px solid #050505' }}>
                  {['SC', 'MW', 'PS', 'JO'][i]}
                </div>
              ))}
            </div>
            <span className="text-neutral-400 text-xs font-medium">Trusted by 80+ happy clients worldwide</span>
            <StarRating count={5} />
          </motion.div>
        </div>
      </section>

      {/* ── Trusted By Marquee ── */}
      <section className="py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
        <p className="text-center text-neutral-600 text-xs font-semibold uppercase tracking-[0.15em] mb-8">Trusted by teams at</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 text-xl font-black tracking-tight opacity-25 grayscale contrast-150 hover:opacity-50 transition-opacity duration-300"
                style={{ color: '#fff', userSelect: 'none' }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6 rounded-2xl"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{s.value}</div>
                <div className="text-neutral-500 text-xs uppercase tracking-widest font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-tag mb-4">Selected Work</div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Proof of Concept.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors duration-200 flex-shrink-0"
            >
              View all work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={`/portfolio/${p.id}`} className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)' }}>
                      <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                        View Project
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest">{p.cat}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1.5">{p.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Full-Cycle Digital Studio</h2>
            <p className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
              From the first wireframe to post-launch optimization, we cover every layer of the digital stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-2xl group cursor-default transition-all duration-300 hover:-translate-y-1"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${s.color}33`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: `${s.color}18`, color: s.color }}
                >
                  {s.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Explore all services
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How We Work (process teaser) ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">How We Work</div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                A Process Built for <span className="text-gradient-blue">Results.</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                No guesswork. Every engagement follows a proven five-phase methodology that goes from discovery to launch — with clear milestones and zero surprises.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { n: '01', label: 'Discovery & Research', color: '#3b82f6' },
                  { n: '02', label: 'Strategy & Architecture', color: '#8b5cf6' },
                  { n: '03', label: 'Design & Prototyping', color: '#10b981' },
                  { n: '04', label: 'Development & QA', color: '#f59e0b' },
                  { n: '05', label: 'Launch & Growth', color: '#ec4899' },
                ].map((step) => (
                  <div key={step.n} className="flex items-center gap-4">
                    <span className="text-xs font-bold w-6 flex-shrink-0" style={{ color: step.color }}>{step.n}</span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    <span className="text-neutral-300 text-sm font-medium">{step.label}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white px-6 py-3 rounded-xl transition-all duration-200 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                See the full process
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Transparent Communication', icon: '💬', desc: 'Weekly syncs and a shared board — you always know what we\'re on.' },
                { label: 'Data-Driven', icon: '📊', desc: 'Every decision backed by research or proven best practice.' },
                { label: 'Iterative by Default', icon: '🔁', desc: 'Small releases, fast feedback, zero expensive surprises.' },
                { label: 'Built to Last', icon: '🏗️', desc: 'Clean code and documented systems your team can own.' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-5 rounded-2xl"
                  style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">{item.label}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-tag mx-auto mb-4">Client Stories</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Don't Take Our Word for It.</h2>
            <p className="text-neutral-400 max-w-lg mx-auto leading-relaxed">Real results from real clients who decided to build something great.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t, i) => (
              <motion.div
                key={t.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-7 rounded-2xl flex flex-col"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <StarRating />
                <blockquote className="text-neutral-300 text-sm leading-relaxed mt-4 mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-neutral-500 text-xs">{t.role}, {t.company}</div>
                  </div>
                  <span
                    className="ml-auto text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#737373' }}
                  >
                    {t.industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.14) 0%, rgba(139,92,246,0.08) 100%)',
              border: '1px solid rgba(59,130,246,0.25)',
              boxShadow: '0 0 80px rgba(59,130,246,0.1)',
            }}
          >
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
            <div className="relative z-10">
              <div className="section-tag mx-auto mb-6">Currently Accepting Clients</div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                Ready to build something<br />
                <span className="text-gradient-blue">remarkable?</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                We take on a limited number of projects each quarter to ensure every client gets our full attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#3b82f6', boxShadow: '0 8px 30px rgba(59,130,246,0.4)' }}
                >
                  Start a Project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.08]"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
