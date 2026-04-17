import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-brand-black/80 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter">
        studiomaker<span className="text-blue-600">.</span>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
        <a href="#portfolio" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Portfolio</a>
        <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">Start Project</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
        Designing the <span className="text-blue-600">future</span> of digital products.
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
        We are a premium design and development studio that transforms bold ideas into high-converting digital experiences.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all text-center">
          Work with us
        </a>
        <a href="#portfolio" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all text-center">
          Our Work
        </a>
      </div>
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Digital Strategy', desc: 'Scaling your business with data-driven design and market analysis.', size: 'md:col-span-2' },
    { title: 'UI/UX Design', desc: 'Pixel-perfect interfaces that users love.', size: 'md:col-span-1' },
    { title: 'Development', desc: 'Clean, scalable code built for performance.', size: 'md:col-span-1' },
    { title: 'Branding', desc: 'Distinct visual identities that command attention.', size: 'md:col-span-2' },
  ];
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className={\`p-10 bg-brand-gray border border-white/10 rounded-3xl hover:border-blue-600/50 transition-all \${s.size}\`}>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: 'Nova Bank', cat: 'Fintech', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38a70?auto=format&fit=crop&q=80&w=800' },
    { title: 'Luxe Stay', cat: 'Hospitality', img: 'https://images.unsplash.com/photo-1460925895917-afbe65ae8364?auto=format&fit=crop&q=80&w=800' },
    { title: 'Aero AI', cat: 'SaaS', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800' },
    { title: 'Zenith', cat: 'Health', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
  ];
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-black">Selected Works</h2>
          <a href="#contact" className="text-blue-600 font-bold hover:underline">All Projects &rarr;</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl aspect-video mb-6">
                <img src={p.img} alt={p.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
              </div>
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-500">{p.cat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6 bg-white text-black">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-5xl font-black mb-8 tracking-tight">We blend art with engineering.</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          studiomaker is not just a studio; it's a lab where we experiment with the boundaries of the web. We don't follow trends—we set them.
        </p>
        <div className="flex gap-12">
          <div><div className="text-4xl font-black">50+</div><div className="text-gray-500">Clients</div></div>
          <div><div className="text-4xl font-black">12</div><div className="text-gray-500">Awards</div></div>
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden aspect-square">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-5xl md:text-7xl font-black mb-8">Ready to <span className="text-blue-600">launch?</span></h2>
      <p className="text-gray-400 text-xl mb-12">Let's discuss your project and see how we can scale your vision together.</p>
      <form className="grid grid-cols-1 gap-4 text-left" onSubmit={e => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="bg-brand-gray border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all" placeholder="Name" />
          <input className="bg-brand-gray border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all" placeholder="Email" />
        </div>
        <textarea rows={4} className="bg-brand-gray border border-white/10 p-4 rounded-2xl outline-none focus:border-blue-600 transition-all" placeholder="Project details..."></textarea>
        <button className="bg-white text-black py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all">Send Message</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-xl font-black tracking-tighter">studiomaker<span className="text-blue-600">.</span></div>
      <div className="text-gray-500 text-sm">© {new Date().getFullYear()} studiomaker. Built for the bold.</div>
      <div className="flex gap-6 text-gray-400 text-sm">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
