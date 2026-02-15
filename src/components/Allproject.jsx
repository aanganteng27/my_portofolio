import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code2 } from 'lucide-react';

// Import gambar dari folder assets
import himaifImg from '../assets/project/himaif.png';
import smartbinImg from '../assets/project/smartbin.png';
import flutterImg from '../assets/project/Flutter.png';

const projects = [
  { 
    id: 1, 
    title: "E-Voting Himaif", 
    desc: "Platform pemungutan suara digital terintegrasi untuk organisasi mahasiswa dengan sistem keamanan data real-time dan enkripsi hasil suara.", 
    tech: ["React", "Express", "Tailwind CSS", "Javascript" , "MySQL"],
    link: "https://evotting.himaif-iwu.com/",
    github: "https://github.com/", 
    image: himaifImg,
    isMobile: false
  },
  { 
    id: 2, 
    title: "SmartBin IoT", 
    desc: "Sistem monitoring tempat sampah pintar berbasis IoT menggunakan sensor untuk manajemen limbah yang lebih efisien dan terstruktur.", 
    tech: ["React JS", "Tailwind CSS", "Javascript", "Express", "MySQL"],
    link: "https://smartbiniot.netlify.app/",
    github: "https://github.com/aanganteng27/SmartBin", 
    image: smartbinImg,
    isMobile: false
  },
  { 
    id: 3, 
    title: "Perpustakaan Mobile", 
    desc: "Aplikasi manajemen perpustakaan digital berbasis mobile. Terintegrasi dengan backend Laravel untuk pengelolaan data buku dan peminjaman.", 
    tech: ["Flutter", "Dart", "Laravel", "MySQL", "REST API"],
    link: "https://drive.google.com/drive/folders/1DXtD5LYVZORBSS9pOSf7aKpHgvzpJ_mD", 
    github: "https://github.com/aanganteng27/Perpustakaan_Mobile", 
    image: flutterImg,
    isMobile: true 
  },
];

const Allproject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-2 md:p-4">
      {projects.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="group relative rounded-[2.5rem] md:rounded-[3rem] bg-white/40 border border-white/60 overflow-hidden backdrop-blur-xl hover:border-orange-500/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(249,115,22,0.1)]"
        >
          {/* --- BAGIAN GAMBAR --- */}
          <div className="relative h-60 md:h-72 overflow-hidden">
            {/* Overlay Gradient Luxury */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#cbd5e1] via-transparent to-transparent z-10 opacity-60" />
            
            <motion.img 
              src={item.image} 
              alt={item.title}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`w-full h-full ${item.isMobile ? "object-contain py-4 md:py-6" : "object-cover"}`}
            />
            
            {/* Tag Status Oranye */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
              <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-500 backdrop-blur-md shadow-lg shadow-orange-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-[0.2em]">
                  {item.isMobile ? "Mobile App" : "Web System"}
                </span>
              </div>
            </div>
          </div>

          {/* --- BAGIAN KONTEN --- */}
          <div className="p-6 md:p-10 relative">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter group-hover:text-orange-600 transition-colors duration-300 uppercase leading-none">
                  {item.title}
                </h3>
              </div>
              
              {/* Action Icons */}
              <div className="flex gap-2 md:gap-3">
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={item.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-white/80 border border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-500/30 transition-all shadow-sm"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2.5 md:p-3 rounded-xl md:rounded-2xl bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>

            <p className="text-slate-600 text-xs md:text-sm lg:text-base leading-relaxed mb-6 md:mb-8 font-medium">
              {item.desc}
            </p>

            {/* --- TECH STACK --- */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-8 md:mb-10">
              {item.tech.map((t, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl bg-white/60 border border-white shadow-sm text-slate-700 group-hover:border-orange-200 transition-colors"
                >
                  <Code2 size={10} className="text-orange-500" />
                  <span className="text-[8px] md:text-[10px] font-extrabold uppercase tracking-widest">{t}</span>
                </div>
              ))}
            </div>

            {/* Tombol Utama */}
            <motion.a 
              href={item.link} 
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-3 w-full py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] overflow-hidden group/btn transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
              
              <span className="relative z-10 flex items-center gap-3">
                {item.isMobile ? "Download APK" : "Live Preview"}
                <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform duration-500" />
              </span>
            </motion.a>
          </div>

          {/* Animasi Garis Bawah */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
        </motion.div>
      ))}
    </div>
  );
};

export default Allproject;