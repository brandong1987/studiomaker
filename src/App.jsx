import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Process from './pages/Process';
import Pricing from './pages/Pricing';
import Insights from './pages/Insights';
import CustomCursor from './components/CustomCursor';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-[#3b82f6]"
      style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 12v6M16 22h.01M8 28h16a2 2 0 002-2V10L20 4H8a2 2 0 00-2 2v20a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h1 className="text-8xl font-black text-white/10 mb-3 leading-none">404</h1>
    <h2 className="text-2xl font-bold text-white mb-4">Page not found</h2>
    <p className="text-neutral-500 mb-8 max-w-sm leading-relaxed">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
      style={{ background: '#3b82f6', boxShadow: '0 6px 20px rgba(59,130,246,0.35)' }}
    >
      Back to Home
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M2.5 6.5h8M7.5 4l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  </div>
);

export default function App() {
  return (
    <Router basename="/studiomaker">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<ProjectDetail />} />
          <Route path="process" element={<Process />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="insights" element={<Insights />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
