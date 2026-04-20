import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { insights } from '../data/insights';

const categories = ['All', 'Design', 'UX', 'Engineering', 'Branding', 'AI & Design', 'Motion'];

const categoryColors = {
  Design: '#3b82f6',
  UX: '#8b5cf6',
  Engineering: '#10b981',
  Branding: '#f59e0b',
  'AI & Design': '#ec4899',
  Motion: '#06b6d4',
};

const InitialsAvatar = ({ initials, size = 32 }) => (
  <div
    className="rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
    style={{ width: size, height: size, background: 'rgba(59,130,246,0.2)', fontSize: size * 0.35, border: '1px solid rgba(59,130,246,0.3)' }}
  >
    {initials}
  </div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featured = insights.find((i) => i.featured);
  const rest = insights.filter((i) => !i.featured);
  const filtered = activeCategory === 'All' ? rest : rest.filter((i) => i.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 text-[#3b82f6] text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            Insights & Ideas
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight"
          >
            Thinking Out <span className="text-[#3b82f6]">Loud.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-xl leading-relaxed"
          >
            Design thinking, engineering deep-dives, and opinions on building digital products that actually work.
          </motion.p>
        </div>

        {/* Featured Article */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden cursor-pointer group"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.05) 100%)',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `rgba(59,130,246,0.15)`, color: '#3b82f6', border: '1px solid rgba(59,130,246,0.25)' }}
                  >
                    Featured
                  </span>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ background: `rgba(59,130,246,0.08)`, color: '#60a5fa' }}
                  >
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-[#60a5fa] transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <InitialsAvatar initials={featured.author.initials} size={38} />
                  <div>
                    <div className="text-white font-semibold text-sm">{featured.author.name}</div>
                    <div className="text-neutral-500 text-xs">{featured.author.role}</div>
                  </div>
                  <div className="h-4 w-px bg-white/10 mx-2" />
                  <span className="text-neutral-500 text-xs">{featured.date}</span>
                  <span className="text-neutral-500 text-xs">·</span>
                  <span className="text-neutral-500 text-xs">{featured.readTime}</span>
                </div>
              </div>
              <div
                className="flex-shrink-0 w-full lg:w-48 h-32 lg:h-40 rounded-xl flex items-center justify-center text-5xl font-black"
                style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.15)', color: 'rgba(59,130,246,0.4)' }}
              >
                DS
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)' }
                  : { background: 'transparent', color: '#737373', border: '1px solid rgba(255,255,255,0.07)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((article, i) => {
            const accentColor = categoryColors[article.category] || '#3b82f6';
            return (
              <motion.article
                key={article.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl p-6 flex flex-col cursor-pointer group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#0f0f0f',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${accentColor}33`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div
                  className="w-full h-36 rounded-xl mb-5 flex items-center justify-center text-3xl font-black"
                  style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}20`, color: `${accentColor}50` }}
                >
                  {article.author.initials}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-lg"
                    style={{ background: `${accentColor}15`, color: accentColor }}
                  >
                    {article.category}
                  </span>
                  <span className="text-neutral-600 text-xs">{article.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#60a5fa] transition-colors duration-200 flex-1">
                  {article.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <InitialsAvatar initials={article.author.initials} size={28} />
                  <div className="flex-1">
                    <span className="text-neutral-300 text-xs font-medium">{article.author.name}</span>
                  </div>
                  <span className="text-neutral-600 text-xs">{article.date}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#3b82f6]"
              style={{ background: 'rgba(59,130,246,0.1)' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 8l7 5 7-5M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Stay in the loop</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              New articles every two weeks. No spam, unsubscribe any time.
            </p>
            {subscribed ? (
              <div
                className="flex items-center justify-center gap-2 text-sm font-medium py-3 px-6 rounded-xl"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You're subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                  style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                  onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2563eb] whitespace-nowrap"
                  style={{ background: '#3b82f6', boxShadow: '0 4px 14px rgba(59,130,246,0.3)' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
