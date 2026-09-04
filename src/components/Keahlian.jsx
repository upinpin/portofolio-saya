import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Database } from 'lucide-react';

export default function Keahlian({ darkMode, fadeInUpVariants }) {
  return (
    <motion.section 
      id="keahlian" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}
      className="py-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-20"
    >
      <h2 data-section="02" className="text-2xl sm:text-3xl font-extrabold tracking-tight border-b-4 border-[#e4572e] inline-block pb-2">Keahlian Teknis</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <motion.div whileHover={{ y: -6, rotateX: 4, rotateY: -3 }}
          data-shape="circle"
          className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800/40 border-slate-700/60 hover:border-blue-500/50' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="text-[#e4572e] mb-4 inline-block"><Smartphone size={32} /></div>
          <h3 className="text-lg font-bold mb-2">Mobile Dev</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Menguasai pembuatan aplikasi Android Studio menggunakan Flutter SDK dan bahasa Dart.</p>
        </motion.div>

        <motion.div whileHover={{ y: -6, rotateX: 4, rotateY: 3 }}
          data-shape="triangle"
          className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800/40 border-slate-700/60 hover:border-teal-500/50' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="text-[#2f7f82] mb-4 inline-block"><Code size={32} /></div>
          <h3 className="text-lg font-bold mb-2">Web Dev</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Pengembangan arsitektur web tangguh berbasis PHP, HTML5, serta framework Tailwind CSS.</p>
        </motion.div>

        <motion.div whileHover={{ y: -6, rotateX: 4, rotateY: -2 }}
          data-shape="cube"
          className={`p-6 rounded-2xl border transition-all sm:col-span-2 md:col-span-1 ${darkMode ? 'bg-slate-800/40 border-slate-700/60 hover:border-purple-500/50' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="text-[#c48745] mb-4 inline-block"><Database size={32} /></div>
          <h3 className="text-lg font-bold mb-2">Database</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Manajemen basis data MySQL, perancangan ERD, skema relasi, dan optimalisasi CRUD.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}