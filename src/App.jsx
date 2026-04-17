import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';

const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-9xl font-black text-white opacity-20 mb-4">404</h1>
    <h2 className="text-3xl font-bold text-white mb-6">Page not found</h2>
    <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
    <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
      Back to Home
    </a>
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
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
