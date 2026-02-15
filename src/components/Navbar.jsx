import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'about', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // Tutup menu jika di mobile
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <div className={`fixed w-full z-[100] left-0 transition-all duration-500 px-4 md:px-10 ${
        isScrolled ? 'pt-3' : 'pt-6 md:pt-8'
      }`}>
        <nav 
          className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] relative flex items-center rounded-[1.8rem] md:rounded-[2.5rem] border ${
            isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-2xl border-orange-500/30 shadow-[0_20px_50px_-15px_rgba(249,115,22,0.3)] max-w-3xl py-2 px-3' 
            : 'bg-white/5 backdrop-blur-md border-white/10 max-w-6xl py-3 px-5 md:py-4 md:px-8'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            
            {/* --- Logo Luxury --- */}
            <div 
              onClick={() => scrollToSection('home')}
              className="cursor-pointer group flex items-center gap-2 md:gap-3"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg md:rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative w-8 h-8 md:w-10 md:h-10 bg-white border border-orange-500/20 rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden">
                  <span className="text-slate-900 font-[1000] text-lg md:text-xl italic group-hover:scale-125 transition-transform duration-500">A</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-orange-500">Informatics</span>
                <span className="font-black tracking-tighter text-[10px] md:text-sm uppercase text-white">
                  Ainan <span className="text-orange-500">Hammal</span>
                </span>
              </div>
            </div>

            {/* --- Desktop Navigation (Hidden on Mobile) --- */}
            <div className="hidden lg:flex items-center gap-1 p-1 rounded-full border bg-slate-900/20 border-white/5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 ${
                    activeSection === item.id 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-orange-400'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-orange-600 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>

            {/* --- Desktop Hire Button & Mobile Toggle --- */}
            <div className="flex items-center gap-3">
              {/* Desktop Hire Me */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex group relative px-6 py-2.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500"
              >
                <span className="absolute inset-0 bg-orange-600 transition-all duration-500 group-hover:bg-white"></span>
                <span className="relative z-10 text-white group-hover:text-orange-600 flex items-center gap-2">
                  Hire Me <div className="w-1.5 h-1.5 bg-white group-hover:bg-orange-600 rounded-full animate-pulse"></div>
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500 transition-all"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </nav>
      </div>

      {/* --- Mobile Fullscreen Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-slate-950 flex flex-col p-8 lg:hidden"
          >
            {/* Header di dalam Menu */}
            <div className="flex justify-between items-center mb-16">
               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-slate-900">A</div>
               <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/5 rounded-full text-white">
                 <X size={24} />
               </button>
            </div>

            {/* Nav Links Mobile */}
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center justify-between py-4 border-b border-white/5"
                >
                  <span className={`text-4xl font-black italic uppercase tracking-tighter ${activeSection === item.id ? 'text-orange-500' : 'text-slate-600'}`}>
                    {item.name}
                  </span>
                  <ArrowRight className={`transition-all ${activeSection === item.id ? 'text-orange-500 translate-x-0' : 'text-slate-800 -translate-x-4 opacity-0'}`} />
                </motion.div>
              ))}
            </div>

            {/* Footer Menu Mobile */}
            <div className="mt-auto">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-5 bg-orange-600 rounded-2xl text-white font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-3"
              >
                Launch Protocol <Rocket size={18} />
              </button>
              <p className="text-center mt-6 text-[8px] text-slate-500 font-mono tracking-widest uppercase italic">
                System Status: Ready to Deploy
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;