import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Terminal } from 'lucide-react';

export default function Tentang({ fadeInUpVariants }) {
  return (
    <motion.section 
      id="tentang"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUpVariants}
      className="py-24 px-6 sm:px-10 max-w-5xl mx-auto space-y-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="space-y-2 border-b-2 border-black/15 pb-4">
        <div className="font-mono text-xs text-[#e4572e] uppercase tracking-widest font-bold">
          Biography / 01
        </div>
        <h2 className="font-graffiti text-3xl sm:text-5xl tracking-tight text-inherit">
          Tentang Saya
        </h2>
      </div>

      {/* Main Intro Callout */}
      <div className="craft-card p-6 sm:p-8 bg-amber-100/40 dark:bg-amber-500/10 border-l-[6px] border-l-[#e4572e] space-y-4">
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 font-medium">
          Saya adalah mahasiswa aktif program studi <strong className="text-[#2f7f82] dark:text-[#70d085] font-bold">Teknologi Rekayasa Perangkat Lunak (TRPL) di Politeknik Negeri Lampung</strong>. Memiliki antusiasme tinggi pada rekayasa perangkat lunak, khususnya pengembangan aplikasi berbasis web dan mobile.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 font-medium">
          Saya selalu menerapkan alur kerja modern berbasis Git & <strong className="text-[#e4572e] font-bold">GitHub</strong> di setiap proyek demi menjaga kolaborasi kode yang rapi, transparan, dan terukur.
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100 font-medium">
          Di luar pengembangan teknis, saya memiliki pengalaman kepemimpinan dan pernah menjabat sebagai <strong className="text-[#e4572e] font-bold">Wakil Ketua Himpunan Mahasiswa Program Studi Teknologi Rekayasa Perangkat Lunak (ASTECH)</strong>. Pengalaman ini mengasah kemampuan saya dalam memimpin, berkomunikasi, dan mengoordinasikan program kerja bersama tim.
        </p>
      </div>

      {/* 3 Snapshot Stat Cards (Restored from initial version, elevated) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="craft-card p-6 flex flex-col justify-between space-y-4 bg-white/80 dark:bg-black/20">
          <div className="w-10 h-10 rounded-xl bg-[#2f7f82]/20 border border-[#2f7f82]/40 flex items-center justify-center text-[#2f7f82]">
            <GraduationCap size={22} />
          </div>
          <div>
            <strong className="font-graffiti text-2xl text-[#e4572e] block">TRPL POLINELA</strong>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-300">Politeknik Negeri Lampung</span>
          </div>
        </div>

        <div className="craft-card p-6 flex flex-col justify-between space-y-4 bg-white/80 dark:bg-black/20">
          <div className="w-10 h-10 rounded-xl bg-[#e4572e]/20 border border-[#e4572e]/40 flex items-center justify-center text-[#e4572e]">
            <Terminal size={22} />
          </div>
          <div>
            <strong className="font-graffiti text-2xl text-[#e4572e] block">WEB + MOBILE</strong>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-300">Produk yang bisa dipakai, bukan hanya dilihat</span>
          </div>
        </div>

        <div className="craft-card p-6 flex flex-col justify-between space-y-4 bg-white/80 dark:bg-black/20">
          <div className="w-10 h-10 rounded-xl bg-[#c48745]/20 border border-[#c48745]/40 flex items-center justify-center text-[#c48745]">
            <Users size={22} />
          </div>
          <div>
            <strong className="font-graffiti text-2xl text-[#e4572e] block">ASTECH</strong>
            <span className="text-xs font-mono text-slate-600 dark:text-slate-300">Pernah Menjabat Wakil Ketua TRPL</span>
          </div>
        </div>
      </div>

      {/* 3 Step Editorial Timeline */}
      <div className="pt-4 border-t-2 border-black/15 dark:border-white/15">
        <h3 className="font-graffiti text-2xl mb-6 text-inherit">Perjalanan & Pendekatan Kerja</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="craft-card p-6 space-y-2">
            <span className="font-mono text-xs font-bold text-[#e4572e]">FASE 01</span>
            <h4 className="font-graffiti text-xl text-inherit">Memahami</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Menguatkan fondasi rekayasa perangkat lunak sambil memahami kebutuhan nyata pengguna sebelum menulis baris kode.
            </p>
          </div>

          <div className="craft-card p-6 space-y-2">
            <span className="font-mono text-xs font-bold text-[#2f7f82]">FASE 02</span>
            <h4 className="font-graffiti text-xl text-inherit">Membangun</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Mengubah masalah dan ide menjadi aplikasi web atau mobile Flutter yang tangguh, responsif, dan siap produksi.
            </p>
          </div>

          <div className="craft-card p-6 space-y-2">
            <span className="font-mono text-xs font-bold text-[#c48745]">FASE 03</span>
            <h4 className="font-graffiti text-xl text-inherit">Memimpin</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Mengoordinasikan tim lintas divisi dan program kerja nyata melalui pengalaman kepemimpinan saat menjabat di ASTECH.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}