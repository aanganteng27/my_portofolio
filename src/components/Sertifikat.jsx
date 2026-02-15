import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Download, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

// Import 6 PDF Sertifikat dari folder assets
import cert1 from '../assets/certificates/sertifikat1.pdf';
import cert2 from '../assets/certificates/sertifikat2.pdf';
import cert3 from '../assets/certificates/sertifikat3.pdf';
import cert4 from '../assets/certificates/sertifikat4.pdf';
import cert5 from '../assets/certificates/sertifikat5.pdf';
import cert6 from '../assets/certificates/sertifikat6.pdf';

const certs = [
  { 
    id: 1, 
    name: "Panitia Insploration 2025", 
    issuer: "HIMAIF - Informatika IWU", 
    year: "2025", 
    file: cert1, 
    category: "Organization",
    desc: "Kontribusi aktif dalam pelaksanaan PKKMB Informatika (Insploration) 2025."
  },
  { 
    id: 2, 
    name: "Launching ITR Hub: Inovasi Digital", 
    issuer: "ITR Hub - Lab Teknologi", 
    year: "2025", 
    file: cert2, 
    category: "Technology",
    desc: "Partisipasi dalam pengembangan ekosistem inovasi digital era Teknologi 5.0."
  },
  { 
    id: 3, 
    name: "Webinar Mental Health & Productivity", 
    issuer: "Deepublish Publisher", 
    year: "2025", 
    file: cert3, 
    category: "Soft Skills",
    desc: "Edukasi pengelolaan mental dan strategi produktivitas akademik mahasiswa."
  },
  { 
    id: 4, 
    name: "Panitia One Fun Day with Science", 
    issuer: "HIMAFI - Himpunan Fisika", 
    year: "2025", 
    file: cert4, 
    category: "Science",
    desc: "Manajemen kegiatan edukatif untuk meningkatkan minat ilmu pengetahuan."
  },
  { 
    id: 5, 
    name: "AI & Blockchain Analytic Specialist", 
    issuer: "BRAIN IPB University", 
    year: "2025", 
    file: cert5, 
    category: "Emerging Tech",
    desc: "Analisis teknologi Blockchain dan AI untuk National Strategic Decision Making."
  },
  { 
    id: 6, 
    name: "Certified Alibaba Cloud Developer", 
    issuer: "Alibaba Cloud Certification", 
    year: "2025", 
    file: cert6, 
    category: "Cloud Computing",
    desc: "Sertifikasi keahlian dalam pengembangan aplikasi menggunakan layanan Alibaba Cloud."
  },
];

const Sertifikat = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
      {certs.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/60 overflow-hidden shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/40 transition-all duration-500"
        >
          {/* --- PREVIEW PDF (AS COVER) --- */}
          <div className="relative h-48 overflow-hidden bg-slate-100/50">
            <iframe 
              src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`} 
              className="w-full h-full pointer-events-none border-none scale-110 origin-top opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              title={cert.name}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-200/90 via-transparent to-transparent z-10" />
            
            {/* Badge Kategori Luxury */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-orange-600/10 border border-orange-500/20 backdrop-blur-md rounded-full text-[8px] font-black text-orange-700 uppercase tracking-[0.2em]">
                {cert.category}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20">
              <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/40 group-hover:rotate-12 transition-transform">
                <Award size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* --- DETAIL KONTEN --- */}
          <div className="p-6">
            <div className="mb-4">
              <h4 className="text-lg font-black text-slate-900 leading-tight group-hover:text-orange-600 transition-colors uppercase italic min-h-[3.5rem] flex items-center">
                {cert.name}
              </h4>
              <div className="flex items-center gap-2 mt-3">
                <ShieldCheck size={14} className="text-orange-500" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  {cert.issuer}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-medium mb-6 line-clamp-2">
              {cert.desc}
            </p>

            <div className="flex items-center gap-3 mb-6 text-slate-400 font-mono text-[10px] font-bold uppercase">
              <div className="flex items-center gap-1.5">
                <Calendar size={12} className="text-orange-500" />
                {cert.year}
              </div>
              <span className="opacity-30">|</span>
              <span className="text-orange-600/70">Authentic Document</span>
            </div>

            {/* --- ACTION BUTTONS --- */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-md"
              >
                <ExternalLink size={14} />
                Preview
              </motion.a>
              
              <motion.a
                href={cert.file}
                download={`Sertifikat_${cert.name}.pdf`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 text-[9px] font-black uppercase tracking-widest hover:border-orange-500/50 hover:text-orange-600 transition-all shadow-sm"
              >
                <Download size={14} />
                Get PDF
              </motion.a>
            </div>
          </div>

          {/* Luxury Animated Underline */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-orange-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </motion.div>
      ))}
    </div>
  );
};

export default Sertifikat;