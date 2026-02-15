import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Rocket, Phone, MessageSquare, Terminal, Cpu, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzbadap";

  // State untuk menangani status pengiriman
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        form.reset();
      } else {
        const errorData = await response.json();
        setStatus({ submitting: false, submitted: false, error: errorData.error });
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: "Terjadi kesalahan koneksi." });
    }
  };

  const BackgroundRocket = ({ delay, x, duration }) => (
    <motion.div
      initial={{ y: "110vh", opacity: 0, x: x }}
      animate={{ 
        y: "-10vh", 
        opacity: [0, 0.6, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "linear" }}
      className="absolute text-orange-500/40 pointer-events-none z-0"
    >
      <Rocket size={28} className="-rotate-45" />
    </motion.div>
  );

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#1e293b] pt-32 font-sans">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#475569_0%,_#1e293b_100%)] opacity-95"></div>
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <BackgroundRocket key={i} x={`${Math.random() * 100}%`} delay={Math.random() * 5} duration={7 + Math.random() * 7} />
        ))}
        <div className="absolute top-[-10%] left-[-5%] w-[50rem] h-[50rem] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[5%] w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex-grow mb-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-orange-500">Secure Protocol</span>
            <div className="h-[1px] w-12 bg-orange-500"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-[1000] text-white uppercase italic leading-none"
          >
            Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 font-black">Portal.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: INFO CARDS */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { name: "WhatsApp", value: "085241259991", icon: <Phone size={24} />, link: "https://wa.me/6285241259991" },
              { name: "Official Email", value: "ainanhammal@gmail.com", icon: <Mail size={24} />, link: "mailto:ainanhammal@gmail.com" },
              { name: "System Status", value: "Ready for Inquiry", icon: <Terminal size={24} />, link: "#" }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-6 p-6 bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-3xl hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="p-4 bg-slate-900 rounded-2xl text-slate-400 group-hover:text-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-orange-500 mb-1">{item.name}</h4>
                  <p className="text-white font-bold text-base">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT: FORM WITH AJAX SUBMISSION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode='wait'>
              {!status.submitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleFormSubmit}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="space-y-5 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-tighter text-slate-400 ml-2">Sender Name</label>
                      <input name="name" type="text" required className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-bold" placeholder="Your Name" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-tighter text-slate-400 ml-2">Return Path (Email)</label>
                      <input name="email" type="email" required className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-bold" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-tighter text-slate-400 ml-2">Encrypted Message</label>
                    <textarea name="message" rows="4" required className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-bold resize-none" placeholder="What's the project about?"></textarea>
                  </div>
                  
                  {status.error && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-2">{status.error}</p>}

                  <motion.button 
                    disabled={status.submitting}
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.5em] rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-xl shadow-orange-500/10 disabled:opacity-50"
                  >
                    {status.submitting ? "Transmitting..." : "Launch Message"} 
                    <Rocket size={18} className={`text-orange-500 ${status.submitting ? 'animate-bounce' : 'group-hover:translate-x-2 group-hover:-translate-y-2'} transition-transform`} />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-6"
                >
                  <div className="w-24 h-24 bg-orange-500/10 rounded-full flex items-center justify-center border border-orange-500/20">
                    <CheckCircle2 size={48} className="text-orange-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">Transmission Success!</h3>
                    <p className="text-slate-500 font-medium text-sm mt-2">Pesan kamu sudah berhasil menembus atmosfer inbox saya.<br/>Tunggu balasan segera ya!</p>
                  </div>
                  <motion.button 
                    onClick={() => setStatus({ ...status, submitted: false })}
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-6 right-10 opacity-[0.03] pointer-events-none">
              <MessageSquare size={120} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- FOOTER CARD SECTION --- */}
      <div className="relative z-20 px-6 pb-12 mt-10">
        <motion.footer 
          initial={{ opacity: 0, y: 30, borderColor: "rgba(255,255,255,0.1)" }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            borderColor: "rgba(249,115,22,0.5)", 
            boxShadow: "0 0 30px rgba(249,115,22,0.15)", 
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
          className="max-w-7xl mx-auto bg-slate-900/60 backdrop-blur-2xl border p-10 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 group"
        >
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_12px_rgba(249,115,22,1)]"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white italic">Ainan Hammal</span>
            </div>
            <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">
              Informatics Engineering Student & Tech Enthusiast
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-4 bg-slate-800/50 px-5 py-3 rounded-2xl border border-white/5">
              <Cpu size={16} className="text-orange-500 animate-spin-slow" />
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">v2.0 Deploy</span>
            </div>
            
            <div className="flex items-center gap-4 bg-orange-500/10 px-5 py-3 rounded-2xl border border-orange-500/20">
              <Zap size={16} className="text-orange-500" />
              <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest">Active Server</span>
            </div>

            <div className="flex items-center gap-4 bg-slate-800/50 px-5 py-3 rounded-2xl border border-white/5">
              <ShieldCheck size={16} className="text-green-500" />
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Secure Data</span>
            </div>
          </div>
        </motion.footer>
        
        <p className="text-center mt-6 text-[8px] text-slate-600 font-bold uppercase tracking-[0.5em]">
          © 2026 Designed & Built by Ainan Hammal
        </p>
      </div>
    </div>
  );
};

export default Contact;