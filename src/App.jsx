import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './pages/Projects';
import Tentang from './pages/Tentang';
import Contact from './pages/Contact';
import Animasi from './components/Animasi';

function App() {
  // State untuk melacak apakah animasi preloader sudah selesai
  const [isSelesai, setIsSelesai] = useState(false);

  useEffect(() => {
    // Logic Lock Scroll
    if (!isSelesai) {
      // Kunci scroll saat animasi jalan
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh'; // Memastikan layar tidak bisa bergeser
    } else {
      // Lepas kunci scroll saat animasi selesai
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }

    // Cleanup Function: Supaya kalau komponen di-unmount, scroll balik normal
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
  }, [isSelesai]);

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-slate-200 selection:bg-orange-500/30">
      
      {/* 1. Preloader Animasi (Metallic Silver Versi Terbaru) */}
      <AnimatePresence mode="wait">
        {!isSelesai && (
          <div className="fixed inset-0 z-[9999]">
            <Animasi setSelesai={setIsSelesai} />
          </div>
        )}
      </AnimatePresence>

      {/* 2. Main Content Wrapper */}
      {/* Animasi ini akan berjalan otomatis setelah preloader selesai */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isSelesai ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Navbar */}
        <Navbar />
        
        {/* 3. Main Content dengan ID yang konsisten untuk scrolling */}
        <main className="relative">
          <section id="home" className="scroll-mt-20">
            <Hero />
          </section>

          <section id="projects" className="min-h-screen bg-slate-900/50 scroll-mt-20">
            <Projects />
          </section>

          <section id="about" className="min-h-screen scroll-mt-20">
            <Tentang />
          </section>

          <section id="contact" className="min-h-screen bg-slate-900/50 scroll-mt-20">
            {/* Footer sudah menyatu di dalam komponen Contact ini */}
            <Contact />
          </section>
        </main>

        {/* --- FOOTER LAMA SUDAH DIHAPUS AGAR TIDAK DOUBLE --- */}
      </motion.div>

      {/* Background Glow Effect tambahan agar transisi antar section halus */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

    </div>
  );
}

export default App;