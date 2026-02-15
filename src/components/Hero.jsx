import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, Mail, Terminal, Rocket, Cpu, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Komponen Roket Background (Simbol Karir Naik)
  const BackgroundRocket = ({ delay, x, duration }) => (
    <motion.div
      initial={{ y: "110vh", opacity: 0, x: x }}
      animate={{ 
        y: "-10vh", 
        opacity: [0, 0.5, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear" 
      }}
      className="absolute text-orange-500/30 pointer-events-none z-0"
    >
      <Rocket size={35} className="-rotate-45" />
    </motion.div>
  );

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#1e293b] pt-24 pb-20 lg:pt-20 lg:pb-0">
      
      {/* --- METALLIC SILVER OVERLAY --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#475569_0%,_#1e293b_100%)] opacity-80"></div>
      
      {/* --- DYNAMIC ROCKET BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <BackgroundRocket x="5%" delay={0} duration={10} />
        <BackgroundRocket x="25%" delay={3} duration={14} />
        <BackgroundRocket x="50%" delay={1} duration={12} />
        <BackgroundRocket x="75%" delay={5} duration={16} />
        <BackgroundRocket x="90%" delay={2} duration={11} />
        
        <div className="absolute top-[-10%] left-[-5%] w-[30rem] md:w-[50rem] h-[30rem] md:h-[50rem] bg-orange-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[25rem] md:w-[40rem] h-[25rem] md:h-[40rem] bg-orange-500/10 rounded-full blur-[140px]"></div>
        
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700 shadow-xl mb-6 lg:mb-8"
            >
              <Terminal size={12} className="text-orange-500" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                Future Tech Architect
              </span>
            </motion.div>

            <div className="relative mb-6 lg:mb-8">
              <motion.h2 
                className="text-orange-500 font-black text-[10px] tracking-[0.6em] md:tracking-[0.8em] uppercase mb-3"
              >
                Informatics Student
              </motion.h2>
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-[8.5rem] font-[1000] tracking-[-0.05em] leading-[0.9] lg:leading-[0.8] text-white uppercase italic"
              >
                AINAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500">
                  HAMMAL
                </span>
              </motion.h1>
            </div>

            <motion.p 
              className="max-w-xl text-slate-300 text-base md:text-xl font-medium leading-relaxed mb-10 border-l-4 border-orange-500 pl-6 lg:pl-8 italic"
            >
              "Berdedikasi dalam mengeksplorasi cakrawala <span className="text-white font-bold underline decoration-orange-500/50">Informatika</span>. Fokus pada pengembangan sistem cerdas dan solusi digital inovatif."
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button 
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 lg:px-10 lg:py-5 rounded-2xl bg-white text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  Explore Journey <ArrowRight size={16} />
                </span>
              </motion.button>
              
              <motion.a 
                href="https://www.instagram.com/armn2.7/" 
                target="_blank"
                className="px-8 py-4 lg:px-10 lg:py-5 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700 text-white font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:border-orange-500 transition-all"
              >
                <Instagram size={16} className="text-orange-500" /> Instagram
              </motion.a>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: 3D TECH ICON --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2 py-10 lg:py-0"
          >
            <div className="relative group scale-75 md:scale-90 lg:scale-100">
              {/* Spinning Tech Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-0 border-[2px] border-dashed border-orange-500/30 rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] -ml-[35px] -mt-[35px] md:-ml-[75px] md:-mt-[75px]"
              />
              
              {/* Central Rocket Display */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [-1, 1, -1]
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-20 bg-slate-800/80 backdrop-blur-xl p-10 md:p-16 rounded-[30px] md:rounded-[40px] shadow-2xl border border-slate-700 group-hover:border-orange-500 transition-colors duration-500"
              >
                <Rocket size={120} className="md:size-[180px] text-slate-200 group-hover:text-orange-500 transition-colors duration-500" />
                
                {/* Engine Flame Effect */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 md:w-16 h-16 md:h-24 bg-gradient-to-t from-orange-600/0 via-orange-500/60 to-orange-400 blur-2xl animate-pulse"></div>
              </motion.div>

              {/* Orbiting Icons - Adjusted for scale */}
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute inset-0 w-full h-full">
                <div className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 bg-slate-800 p-3 md:p-4 rounded-xl border border-slate-700 text-orange-500"><Cpu size={24} /></div>
              </motion.div>
              <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute inset-0 w-full h-full">
                <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 p-3 md:p-4 rounded-xl border border-slate-700 text-blue-400"><Globe size={24} /></div>
              </motion.div>
              <motion.div animate={{ rotate: 180 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }} className="absolute inset-0 w-full h-full">
                <div className="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 bg-slate-800 p-3 md:p-4 rounded-xl border border-slate-700 text-yellow-400"><Zap size={24} /></div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- FOOTER INFO --- */}
      <div className="absolute bottom-6 md:bottom-10 left-0 w-full px-6 lg:px-12 flex justify-between items-center text-slate-500">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="w-8 md:w-12 h-[1px] bg-orange-600"></div>
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-300">Informatics Excellence</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 lg:gap-8">
          <Mail size={12} className="text-orange-500" />
          <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-200">AINANHAMMAL@GMAIL.COM</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;