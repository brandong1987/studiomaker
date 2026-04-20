import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4l6 5 6-5M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@studiomaker.io',
    href: 'mailto:hello@studiomaker.io',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1a4.5 4.5 0 014.5 4.5c0 3.5-4.5 9.5-4.5 9.5S3.5 9 3.5 5.5A4.5 4.5 0 018 1zm0 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
];

const scopeOptions = [
  'UI/UX Design',
  'Web Development',
  'Brand Identity',
  'Digital Strategy',
  'Full Product Build',
  'Design System',
  'Other',
];

const budgetOptions = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  "I'm not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', scope: '', budget: '', brief: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.brief.trim()) e.brief = 'Tell us about your project';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="section-tag mb-6"
            >
              Get In Touch
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.92] mb-6"
            >
              Let's Build Something Great.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 leading-relaxed mb-10"
            >
              We're currently accepting new projects for Q3 2026. Fill out the brief and we'll get back to you within 24 hours.
            </motion.p>

            {/* Contact info cards */}
            <div className="space-y-3 mb-10">
              {contactInfo.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[#3b82f6]"
                    style={{ background: 'rgba(59,130,246,0.1)' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-neutral-500 text-xs font-medium uppercase tracking-wide">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-white text-sm font-medium hover:text-[#60a5fa] transition-colors">{c.value}</a>
                    ) : (
                      <span className="text-white text-sm font-medium">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse flex-shrink-0" />
              Currently accepting new clients for Q3 2026
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                style={{ background: '#0f0f0f', border: '1px solid rgba(59,130,246,0.2)', minHeight: 480 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#10b981]"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l6 6 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Message received!</h2>
                <p className="text-neutral-400 max-w-sm leading-relaxed">
                  Thanks for reaching out. We'll review your project brief and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                onSubmit={handleSubmit}
                className="space-y-5 p-8 md:p-10 rounded-2xl"
                style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
                noValidate
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { field: 'name', label: 'Name *', placeholder: 'Your name', type: 'text' },
                    { field: 'email', label: 'Email *', placeholder: 'you@company.com', type: 'email' },
                  ].map(({ field, label, placeholder, type }) => (
                    <div key={field} className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{label}</label>
                      <input
                        type={type}
                        value={form[field]}
                        onChange={(e) => handleChange(field, e.target.value)}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                        style={{
                          background: '#161616',
                          border: errors[field] ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.09)',
                        }}
                        onFocus={(e) => { if (!errors[field]) e.target.style.borderColor = '#3b82f6'; }}
                        onBlur={(e) => { if (!errors[field]) e.target.style.borderColor = 'rgba(255,255,255,0.09)'; }}
                      />
                      {errors[field] && <p className="text-red-400 text-xs">{errors[field]}</p>}
                    </div>
                  ))}
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Company name (optional)"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                    style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.09)' }}
                    onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; }}
                  />
                </div>

                {/* Scope + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { field: 'scope', label: 'Project Scope', opts: scopeOptions, placeholder: 'Select scope' },
                    { field: 'budget', label: 'Budget Range', opts: budgetOptions, placeholder: 'Select budget' },
                  ].map(({ field, label, opts, placeholder }) => (
                    <div key={field} className="space-y-2">
                      <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{label}</label>
                      <div className="relative">
                        <select
                          value={form[field]}
                          onChange={(e) => handleChange(field, e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none pr-10"
                          style={{
                            background: '#161616',
                            border: '1px solid rgba(255,255,255,0.09)',
                            color: form[field] ? 'white' : '#737373',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = '#3b82f6'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.09)'; }}
                        >
                          <option value="" style={{ background: '#111', color: '#737373' }}>{placeholder}</option>
                          {opts.map((o) => (
                            <option key={o} value={o} style={{ background: '#111', color: 'white' }}>{o}</option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500"
                          width="12" height="12" viewBox="0 0 12 12" fill="none"
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Brief */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Project Brief *</label>
                  <textarea
                    rows={5}
                    value={form.brief}
                    onChange={(e) => handleChange('brief', e.target.value)}
                    placeholder="Tell us about your project — what you're building, what problem you're solving, and what success looks like..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200 resize-none"
                    style={{
                      background: '#161616',
                      border: errors.brief ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(255,255,255,0.09)',
                    }}
                    onFocus={(e) => { if (!errors.brief) e.target.style.borderColor = '#3b82f6'; }}
                    onBlur={(e) => { if (!errors.brief) e.target.style.borderColor = 'rgba(255,255,255,0.09)'; }}
                  />
                  {errors.brief && <p className="text-red-400 text-xs">{errors.brief}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: '#3b82f6', boxShadow: '0 6px 20px rgba(59,130,246,0.35)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#2563eb'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#3b82f6'; }}
                >
                  Submit Request
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-neutral-600 text-xs text-center">
                  We typically respond within 24 hours. No sales calls unless you want one.
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
