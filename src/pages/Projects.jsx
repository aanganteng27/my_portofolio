import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, LayoutGrid, Award, ShieldCheck, Zap, Database } from 'lucide-react';
import Allproject from '../components/Allproject';
import Sertifikat from '../components/Sertifikat';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    // BACKGROUND: Silver Metallic (#e2e8f0 ke #cbd5e1)
    <div className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] text-slate-900">
      
      {/* --- BACKGROUND ANIMASI FUTURISTIK --- */}
      <div className="absolute inset-0 z-0">
        {/* Grid Industrial: Warna grid dibuat gelap (Slate) agar terlihat di atas Silver */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_2px,transparent_2px),linear-gradient(to_bottom,#cbd5e1_2px,transparent_2px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-50" />
        
        {/* Garis Bergerak Sinyal Oranye - Dibuat lebih tebal & kontras */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <pattern id="industrial-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 200 0 L 0 0 0 200"
              fill="none"
              stroke="#f97316" 
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#industrial-pattern)" />
        </svg>

        {/* Cahaya Glow Oranye (Vibrant Orange di atas Silver) */}
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/40 border border-orange-500/30 text-orange-600 mb-8 backdrop-blur-md shadow-xl"
          >
            <Zap size={14} className="fill-orange-500" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase">Premium Tech Suite</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none text-slate-900"
          >
            KARYA <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 drop-shadow-sm">
              DIGITAL
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 max-w-2xl text-sm md:text-lg font-semibold tracking-wide leading-relaxed"
          >
            "Eksplorasi mahakarya digital dengan presisi tinggi dan teknologi mutakhir dalam balutan estetika silver metallic."
          </motion.p>
        </div>

        {/* --- NAVIGASI TAB (ORANGE LUXURY ON SILVER) --- */}
        <div className="flex justify-center mb-20">
          <div className="flex flex-col md:flex-row p-2 bg-white/30 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full md:w-auto overflow-hidden">
            {[
              { id: 'projects', label: 'Proyek Utama', icon: LayoutGrid },
              { id: 'certificates', label: 'Sertifikasi', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center justify-center gap-4 px-12 py-5 rounded-[1.8rem] text-sm font-black transition-all duration-700 group
                  ${activeTab === tab.id ? 'text-white' : 'text-slate-500 hover:text-orange-600'}
                `}
              >
                <tab.icon size={20} className={`relative z-10 transition-transform duration-500 ${activeTab === tab.id ? 'scale-110' : 'group-hover:rotate-12'}`} />
                <span className="relative z-10 uppercase tracking-[0.2em] text-[11px]">{tab.label}</span>
                
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="silver-luxury-active" 
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-[1.8rem] shadow-[0_10px_30px_rgba(249,115,22,0.4)]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.7 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- AREA KONTEN --- */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-[3rem] p-4 border border-white/40 shadow-inner">
                {activeTab === 'projects' ? <Allproject /> : <Sertifikat />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- FLOATING STATUS (Sleek Dark on Silver) --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 pointer-events-none">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 bg-slate-900/90 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/20 shadow-2xl"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-ping absolute" />
            <div className="w-3 h-3 rounded-full bg-orange-500 relative shadow-[0_0_15px_rgba(249,115,22,1)]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] font-black uppercase text-orange-400 tracking-[0.2em]">Sistem Online</span>
            <span className="text-[9px] text-slate-300 font-mono mt-1">METALLIC ENGINE v2.0</span>
          </div>
        </motion.div>
      </div>

      {/* Ornament Garis Sudut Silver Chrome */}
      <div className="fixed top-0 left-0 w-40 h-40 border-l-4 border-t-4 border-white m-8 hidden lg:block rounded-tl-[3rem] opacity-50" />
      <div className="fixed bottom-0 right-0 w-40 h-40 border-r-4 border-b-4 border-white m-8 hidden lg:block rounded-br-[3rem] opacity-50" />
    </div>
  );
};

export default Projects;