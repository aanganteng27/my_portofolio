import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Zap } from 'lucide-react';

const Animasi = ({ setSelesai }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1.4, delay: 5, ease: [0.8, 0, 0.1, 1] }}
      onAnimationComplete={() => setSelesai(true)}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* --- BACKGROUND: METALLIC TEXTURE & GRAIN --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Carbon Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_100%)]" />
        
        {/* Metallic Grain / Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Animated Silver Beam (Pantulan Cahaya Metal) */}
        <motion.div 
          animate={{ 
            x: ['-100%', '200%'],
            rotate: [-45, -45]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12"
        />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl px-6">
        
        {/* Industrial Tech Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-10 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full"
        >
          <Cpu size={14} className="text-slate-400" />
          <span className="text-[8px] font-black tracking-[0.4em] text-slate-300 uppercase">System Initialize</span>
          <div className="h-1 w-1 rounded-full bg-orange-500 animate-ping" />
        </motion.div>

        {/* NAMA LENGKAP: BRUSHED SILVER METALLIC EFFECT */}
        <div className="overflow-hidden text-center relative">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight italic"
          >
            {/* Layer 1: Base Silver */}
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-slate-100 via-slate-400 to-slate-600 drop-shadow-2xl">
              AINAN 
            </span>
            {" "}
            {/* Layer 2: Glossy Steel */}
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-300 to-slate-500">
              HAMMAL
              {/* Shimmer Effect on Text */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-20 mix-blend-overlay"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-3xl font-thin text-slate-500 tracking-[0.3em] mt-4 italic uppercase"
          >
            Ba'da Samirun
          </motion.p>
        </div>

        {/* DATA STREAM LINE */}
        <div className="mt-12 flex items-center gap-8">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 80 }} 
            transition={{ delay: 1.5, duration: 1 }}
            className="h-[1px] bg-gradient-to-r from-transparent to-slate-500" 
          />
          <div className="flex gap-4">
             <Shield size={18} className="text-slate-600" />
             <Zap size={18} className="text-orange-500" />
          </div>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: 80 }} 
            transition={{ delay: 1.5, duration: 1 }}
            className="h-[1px] bg-gradient-to-l from-transparent to-slate-500" 
          />
        </div>

        {/* ROLE: METALLIC SUBTITLE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-6 text-center"
        >
          <p className="text-slate-400 font-bold text-xs md:text-sm tracking-[0.6em] uppercase">
            Backend Architecture Specialist
          </p>
        </motion.div>
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="absolute bottom-10 inset-x-10 flex justify-between items-end">
        <div className="flex flex-col gap-1 font-mono text-[8px] text-slate-600">
          <p className="">ENCRYPTION: AES-256</p>
          <p className="">CORE: REACT_ENGINE_V3</p>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex flex-col items-end font-mono text-[9px] text-slate-500">
            <p className="font-bold text-slate-400">STATUS: DEPLOYED</p>
            <p className="opacity-50">© 2026.AINAN_ARCHIVE</p>
          </div>
          <div className="w-12 h-12 border border-white/10 flex items-center justify-center rounded-lg">
             <div className="w-6 h-6 border-2 border-orange-500/50 rounded-sm animate-spin" />
          </div>
        </div>
      </div>

      {/* Side Decorative Bars */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
};

export default Animasi;