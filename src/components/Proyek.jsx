import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';

export default function Proyek({ darkMode, fadeInUpVariants }) {
  return (
    <motion.section 
      id="proyek" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}
      className="py-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-20"
    >
      <div className="space-y-2">
        <h2 data-section="03" className="text-2xl sm:text-3xl font-extrabold tracking-tight border-b-4 border-[#e4572e] inline-block pb-2">Proyek Pilihan</h2>
        <p className="text-sm text-slate-400">Koleksi produk digital dan fitur interaktif yang saya kembangkan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* FEATURED: NEXAPLAN */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className={`p-6 md:col-span-3 rounded-2xl border flex flex-col md:flex-row justify-between gap-6 transition-all relative overflow-hidden group ${darkMode ? 'bg-gradient-to-br from-purple-900/20 via-slate-800/20 to-slate-900 border-purple-500/30' : 'bg-purple-50/50 border-purple-200 shadow-sm'}`}
        >
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] bg-purple-500 text-white font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">Featured Project</span>
            <h3 className="text-2xl font-black group-hover:text-purple-400 transition-colors flex items-center gap-2">
              UI/UX NexaPlan <ArrowUpRight size={18} />
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Riset antarmuka (UI/UX) untuk aplikasi manajemen proyek skala enterprise modern. Memecahkan masalah delegasi tugas tim secara transparan dan pelacakan lini masa progres kerja.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 font-mono text-3xl font-bold">NP</div>
          </div>
        </motion.div>

        {/* SOLUSITANI */}
        <motion.div 
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${darkMode ? 'bg-slate-800/20 border-slate-700/60 hover:border-blue-500/40' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-blue-400 tracking-wider">Mobile Application</span>
            <h4 className="text-lg font-bold">solusiTani App</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Platform e-commerce agribisnis dilengkapi AI pemindai penyakit tanaman lewat kamera serta pemetaan lokasi toko pupuk.
            </p>
          </div>
        </motion.div>

        {/* ISYARATKITA */}
        <motion.div 
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${darkMode ? 'bg-slate-800/20 border-slate-700/60 hover:border-teal-500/40' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-teal-400 tracking-wider">Mobile Application</span>
            <h4 className="text-lg font-bold">IsyaratKita</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aplikasi inklusif penerjemah gerakan bahasa isyarat menjadi teks secara realtime demi mempermudah komunikasi disabilitas.
            </p>
          </div>
        </motion.div>

        {/* PRESTASI */}
        <motion.div 
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${darkMode ? 'bg-gradient-to-br from-slate-900 to-yellow-950/10 border-yellow-500/20' : 'bg-yellow-50/20 border-yellow-200 shadow-sm'}`}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold text-yellow-500 tracking-wider">Achievement</span>
              <Award size={16} className="text-yellow-500" />
            </div>
            <h4 className="text-lg font-bold">Juara 2 UI/UX</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pemenang ke-2 dalam Kompetisi Desain Inovasi Aplikasi Manajemen Delegasi Tugas Karyawan Perusahaan.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}