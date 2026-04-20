import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 4900, yearly: 3900 },
    desc: 'Perfect for early-stage startups and founders who need to establish a strong digital presence fast.',
    color: '#10b981',
    features: [
      'Up to 5-page website or app',
      'Custom UI/UX design',
      'Responsive development',
      'Basic SEO setup',
      'Google Analytics integration',
      '1 round of revisions',
      '30-day post-launch support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: { monthly: 9900, yearly: 7900 },
    desc: 'Our most popular tier. Comprehensive design and development for scaling companies serious about their digital experience.',
    color: '#3b82f6',
    features: [
      'Up to 15-page website or app',
      'Full UI/UX design system',
      'Full-stack development',
      'Advanced SEO & performance',
      'CMS integration',
      'A/B testing setup',
      '3 rounds of revisions',
      '90-day post-launch support',
      'Analytics dashboard',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, yearly: null },
    desc: 'Fully custom engagements for established businesses with complex requirements, dedicated team, and ongoing partnership.',
    color: '#8b5cf6',
    features: [
      'Unlimited scope',
      'Dedicated design + dev team',
      'Custom design system',
      'Full-stack architecture',
      'Advanced integrations & APIs',
      'Unlimited revisions',
      'Priority 24/7 support',
      'Quarterly strategy reviews',
      'White-glove onboarding',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We typically structure projects as 50% upfront and 50% on delivery. For larger engagements, we offer milestone-based payment schedules. Contact us to discuss what works for your situation.',
  },
  {
    q: 'What\'s included in "post-launch support"?',
    a: 'Bug fixes, minor content updates, performance monitoring, and technical support during the support window. Extended support retainers are available after the included period.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Starter projects typically take 4–6 weeks. Growth tier projects run 8–12 weeks. Enterprise engagements vary based on scope. We\'ll give you a detailed timeline during the discovery phase.',
  },
  {
    q: 'Can I upgrade from Starter to Growth mid-project?',
    a: 'Absolutely. We can scope-expand at any milestone. We\'ll simply pro-rate the difference and extend the timeline accordingly.',
  },
  {
    q: 'Do you work with clients outside the US?',
    a: 'Yes — our team is fully remote and distributed globally. We\'ve delivered projects for clients across North America, Europe, Asia, and the Middle East.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#0f0f0f' }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium text-sm md:text-base">{q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
          style={{ background: open ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.05)', color: open ? '#3b82f6' : '#737373' }}
        >
          <motion.svg
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            width="12" height="12" viewBox="0 0 12 12" fill="none"
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

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
            Transparent Pricing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight"
          >
            Invest in Work That <span className="text-[#3b82f6]">Pays Back.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-xl leading-relaxed"
          >
            No vague estimates. No surprise invoices. Clear scope, clear price, clear results.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-8 p-1.5 rounded-xl"
            style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <button
              onClick={() => setYearly(false)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: !yearly ? '#1a1a1a' : 'transparent', color: !yearly ? 'white' : '#737373', border: !yearly ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent' }}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2"
              style={{ background: yearly ? '#1a1a1a' : 'transparent', color: yearly ? 'white' : '#737373', border: yearly ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent' }}
            >
              Annual
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative flex flex-col rounded-2xl p-8 transition-all duration-300"
              style={{
                background: plan.popular ? 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.05) 100%)' : '#0f0f0f',
                border: plan.popular ? '1px solid rgba(59,130,246,0.35)' : '1px solid rgba(255,255,255,0.07)',
                boxShadow: plan.popular ? '0 0 60px rgba(59,130,246,0.12)' : 'none',
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', color: 'white' }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: plan.color }} />
                  <span className="text-sm font-semibold text-neutral-300">{plan.name}</span>
                </div>
                <div className="mb-3">
                  {plan.price.monthly ? (
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black text-white">
                        ${(yearly ? plan.price.yearly : plan.price.monthly).toLocaleString()}
                      </span>
                      <span className="text-neutral-500 text-sm mb-1.5">/ project</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-black text-white">Custom</span>
                  )}
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="flex-1 mb-8">
                <div className="h-px bg-white/[0.06] mb-6" />
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" style={{ color: plan.color }}>
                        <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={
                  plan.popular
                    ? { background: '#3b82f6', color: 'white', boxShadow: '0 8px 24px rgba(59,130,246,0.35)' }
                    : { background: 'rgba(255,255,255,0.06)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }
                }
              >
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Social proof strip */}
        <div
          className="rounded-2xl px-8 py-6 mb-24 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            { label: 'Projects Delivered', value: '80+' },
            { label: 'Client Satisfaction', value: '99%' },
            { label: 'Avg. ROI Increase', value: '3.4×' },
            { label: 'Industries Served', value: '12+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center flex-1">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-neutral-500 text-xs uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked</h2>
            <p className="text-neutral-400">Everything you need to know before starting a project with us.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
