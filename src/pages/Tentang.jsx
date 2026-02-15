import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiMysql, 
  SiJavascript, SiLaravel, SiDart, SiExpress,
  SiHtml5, SiCss3, SiFlutter
} from 'react-icons/si';
import { GraduationCap, Code2, Sparkles, Cpu, Layers, Terminal, BookOpen, User } from 'lucide-react';

const Tentang = () => {
  const skills = [
    { name: "React JS", level: "90%", icon: <SiReact />, color: "text-cyan-500" },
    { name: "Laravel", level: "88%", icon: <SiLaravel />, color: "text-red-600" },
    { name: "Express.js", level: "85%", icon: <SiExpress />, color: "text-slate-800" },
    { name: "MySQL", level: "85%", icon: <SiMysql />, color: "text-blue-600" },
    { name: "Dart", level: "80%", icon: <SiDart />, color: "text-sky-500" },
    { name: "Tailwind", level: "95%", icon: <SiTailwindcss />, color: "text-teal-500" },
    { name: "JavaScript", level: "92%", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "HTML & CSS", level: "98%", icon: <div className="flex gap-1"><SiHtml5 /><SiCss3 /></div>, color: "text-orange-600" },
  ];

  const education = [
    { school: "SDN Karya Baru", year: "Sekolah Dasar", desc: "Awal mula menempuh jenjang pendidikan formal." },
    { school: "SMPN 10 Bau Bau", year: "Sekolah Menengah Pertama", desc: "Mulai mengenal dasar-dasar teknologi informasi." },
    { school: "SMAN 6 Bau Bau", year: "Sekolah Menengah Atas", desc: "Mengembangkan minat mendalam di bidang sains dan logika." },
    { school: "International Women University", year: "S1 - Teknik Informatika", desc: "Fokus pada Software Architecture, Fullstack Development, dan Cloud Computing." },
  ];

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-24 px-6 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 overflow-hidden">
      
      {/* --- DYNAMIC AMBIENT GLOW --- */}
      <div className="absolute top-[-10%] right-[-10%] w-[60rem] h-[60rem] bg-orange-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60rem] h-[60rem] bg-white/40 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER TITLE --- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-20 gap-8">
          <div className="text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-4"
            >
              <div className="h-[3px] w-12 bg-orange-600"></div>
              <span className="text-sm font-black uppercase tracking-[0.5em] text-orange-600">Discover Me</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-6xl md:text-8xl font-[1000] text-slate-900 leading-[0.85] uppercase italic"
            >
              Beyond The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Source Code.</span>
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT SIDE: BIO & EDUCATION --- */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* BIO CARD WITH EMBEDDED PHOTO */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[3.5rem] border border-white/80 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                
                {/* Embedded Photo in Bio */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative flex-shrink-0"
                >
                  <div className="absolute -inset-2 bg-orange-600 rounded-[2.5rem] blur-md opacity-20 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[2rem] border-[6px] border-white overflow-hidden shadow-xl shadow-orange-900/10">
                    <img 
                      src="/Ainan.jpeg" 
                      alt="Ainan Hammal" 
                      className="w-full h-full object-cover"
                    />
                    {/* Orange Luxury Overlay on Hover */}
                    <motion.div 
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-orange-600/20 opacity-0 transition-opacity duration-300 flex items-center justify-center"
                    >
                      <Sparkles className="text-white drop-shadow-lg" size={32} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Text Side */}
                <div className="space-y-4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <div className="p-2.5 bg-orange-600 rounded-xl shadow-lg shadow-orange-600/30">
                      <User className="text-white" size={20} />
                    </div>
                    <h3 className="text-2xl font-[1000] text-slate-900 uppercase italic tracking-tight">The Architect</h3>
                  </div>
                  <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium">
                    Saya <span className="text-orange-600 font-black underline decoration-2 underline-offset-4 uppercase">Ainan Hammal Ba'da Samirun</span>. 
                    Seorang pengembang sistem yang menggabungkan presisi logika dengan estetika visual. 
                    Dengan spesialisasi <span className="text-slate-900 font-bold">Fullstack Development</span>, 
                    saya berfokus menciptakan infrastruktur digital yang tangguh dan pengalaman pengguna yang luar biasa.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-6 -right-6 text-slate-200/50">
                <Terminal size={120} />
              </div>
            </motion.div>

            {/* EDUCATION TIMELINE */}
            <div className="px-4">
              <h3 className="text-2xl font-black text-slate-900 italic uppercase mb-10 flex items-center gap-4">
                <BookOpen className="text-orange-600" /> Academic Journey
              </h3>
              <div className="relative border-l-4 border-white ml-2 pl-10 space-y-12">
                {education.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[54px] top-0 w-6 h-6 rounded-full bg-orange-600 border-4 border-slate-200 group-hover:scale-125 transition-all shadow-lg shadow-orange-600/40"></div>
                    <h4 className="text-xl font-black text-slate-900 uppercase">{item.school}</h4>
                    <span className="text-orange-600 font-black text-[10px] tracking-[0.2em] uppercase">{item.year}</span>
                    <p className="text-slate-600 mt-2 font-medium italic">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: TECH ARSENAL --- */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-800 p-8 md:p-12 rounded-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-8 border-orange-600 relative overflow-hidden"
            >
              {/* Floating Icons Background */}
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Code2 size={200} className="text-white" />
              </div>

              <div className="flex items-center gap-4 mb-12 relative z-10">
                <Cpu className="text-orange-500 animate-pulse" size={32} />
                <h4 className="text-white font-black text-2xl uppercase italic tracking-tighter">Tech Arsenal</h4>
              </div>

              <div className="space-y-8 relative z-10">
                {skills.map((skill, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-4">
                        <span className={`text-3xl ${skill.color} filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`}>
                          {skill.icon}
                        </span>
                        <span className="text-white font-black text-xs uppercase tracking-widest">{skill.name}</span>
                      </div>
                      <span className="text-orange-500 font-mono text-xs font-bold">{skill.level}</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-950/50 rounded-full overflow-hidden p-[2px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 flex items-center justify-center gap-3 py-5 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <Sparkles className="text-orange-500" size={18} />
                <span className="text-white text-[11px] font-black uppercase tracking-[0.3em]">Scalable & Robust Systems</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tentang;