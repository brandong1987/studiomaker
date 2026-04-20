import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

const navLinks = [
  { to: '/portfolio', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed w-full z-50 px-5 py-4 transition-all duration-300"
        style={scrolled ? { background: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' } : {}}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L2 5.5l5 5.5 5-5.5L7 1z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-lg font-extrabold tracking-tighter text-white">
              studio<span style={{ color: '#3b82f6' }}>maker</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{ color: active ? '#fff' : '#737373', background: active ? 'rgba(255,255,255,0.07)' : 'transparent' }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = '#d4d4d4'; }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = '#737373'; }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-px"
              style={{ background: '#3b82f6', boxShadow: '0 4px 20px rgba(59,130,246,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#3b82f6'; }}
            >
              Let's Talk
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px] transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Toggle menu"
            >
              <span
                className="w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : '' }}
              />
              <span
                className="w-5 h-[1.5px] bg-white rounded-full transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center"
                style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : '' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col p-6 lg:hidden"
              style={{ background: '#0a0a0a', borderLeft: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center justify-between mb-10">
                <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1L2 5.5l5 5.5 5-5.5L7 1z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-extrabold tracking-tighter text-white text-base">studio<span style={{ color: '#3b82f6' }}>maker</span></span>
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        to={link.to}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
                        style={{ color: active ? '#fff' : '#a3a3a3', background: active ? 'rgba(59,130,246,0.1)' : 'transparent' }}
                      >
                        {link.label}
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ color: active ? '#3b82f6' : '#525252' }}>
                          <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{ background: '#3b82f6', boxShadow: '0 4px 16px rgba(59,130,246,0.35)' }}
                >
                  Let's Talk
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="px-6 pt-20 pb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L2 5.5l5 5.5 5-5.5L7 1z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-lg font-extrabold tracking-tighter text-white">studio<span style={{ color: '#3b82f6' }}>maker</span></span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mb-6">
              A boutique digital studio crafting high-performance products for brands that refuse to blend in.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: 'Twitter', href: '#', icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M13.5 2.5L8.5 8l5.5 6H11L7.5 10 4 14H1.5L6.5 8 1 2.5h3L8 6l3.5-3.5h2z" /></svg> },
                { label: 'LinkedIn', href: '#', icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M2 3a1 1 0 102 0A1 1 0 002 3zm.5 2.5h1v7h-1v-7zm3 0h1v1h.02C6.73 6.03 7.4 5.4 8.5 5.4c1.6 0 2.5.9 2.5 2.6V12.5h-1V8.2c0-1.1-.4-1.8-1.3-1.8-.7 0-1.2.5-1.4 1v5.1h-1v-7z" /></svg> },
                { label: 'Dribbble', href: '#', icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M7.5 1a6.5 6.5 0 100 13A6.5 6.5 0 007.5 1zm4.4 3.1c.8 1 1.3 2.2 1.3 3.6-.3-.1-2.7-.5-4.2-.3-.1-.2-.1-.4-.2-.6.2-.1.3-.1.4-.2 1.7-.6 3-.7 2.7-2.5zm-4.4-2.3c1.1 0 2.1.4 2.8 1-.2.2-.7.7-2.1 1.2a30.5 30.5 0 00-1.7-2.1c.3-.1.7-.1 1-.1zM5.6 3c.5.7 1.1 1.5 1.6 2.1-2 .5-3.7.5-3.9.5.4-1.2 1.2-2.1 2.3-2.6zM2.3 7.5v-.2c.2 0 2.3.1 4.5-.5.1.2.2.5.3.8-2.4.7-3.7 2.5-3.7 2.5A5.6 5.6 0 012.3 7.5zm2.4 3.6c.1-.1 1.3-1.7 3.3-2.4.7 1.7 1 3.1 1 3.4A5.5 5.5 0 014.7 11zm4.3.8c0-.3-.3-1.6-.9-3.2 1.4-.2 2.6.1 2.8.2-.3 1.3-1 2.3-1.9 3z" /></svg> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-500 transition-all duration-200 hover:text-white hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/process', label: 'Our Process' },
                { to: '/insights', label: 'Insights' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-neutral-500 text-sm hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-3">
              {['UI/UX Design', 'Web Development', 'Brand Identity', 'Digital Strategy', 'Motion Design'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-neutral-500 text-sm hover:text-white transition-colors duration-200">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Newsletter</h4>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">Design and product insights, twice a month.</p>
            {subscribed ? (
              <div className="text-xs font-medium py-2 px-3 rounded-lg" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full text-sm text-white px-3 py-2.5 rounded-xl outline-none transition-all duration-200"
                  style={{ background: '#111', border: '1px solid rgba(255,255,255,0.09)' }}
                  onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; }}
                />
                <button
                  type="submit"
                  className="w-full text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:bg-[#2563eb]"
                  style={{ background: '#3b82f6' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} StudioMaker. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#" className="text-neutral-600 text-xs hover:text-neutral-400 transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ background: '#050505' }}>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  );
}
