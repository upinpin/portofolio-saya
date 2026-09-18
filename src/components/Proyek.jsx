import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Hand, Volume2 } from 'lucide-react';
import nexaplanReal from '../assets/nexaplan_real.png';
import solusitaniReal from '../assets/solusitani_real.png';

export default function Proyek({ fadeInUpVariants }) {
  const projects = [
    {
      id: 'nexaplan',
      title: 'UI/UX NexaPlan Enterprise Platform',
      badge: 'Featured Project',
      badgeColor: 'bg-[#e4572e] text-white',
      category: 'UI/UX Research & Mobile Enterprise',
      description:
        'Riset antarmuka komprehensif untuk aplikasi manajemen proyek skala enterprise modern. Memecahkan masalah delegasi tugas tim secara transparan, kalender jadwal terpadu, dan pelacakan lini masa progres kerja.',
      image: nexaplanReal,
      techs: ['Figma Design System', 'Kanban Task Board', 'Schedule Calendar', 'Team Collaboration UI'],
      hasImage: true,
      featured: true,
    },
    {
      id: 'solusitani',
      title: 'solusiTani Mobile App',
      badge: 'Mobile Application',
      badgeColor: 'bg-[#2f7f82] text-white',
      category: 'Mobile Dev & Agri-Tech',
      description:
        'Platform agribisnis digital yang dilengkapi kecerdasan buatan (AI) pemindai penyakit tanaman lewat kamera smartphone, edukasi ekonomi hijau, serta pemetaan produk nutrisi tanaman.',
      image: solusitaniReal,
      techs: ['Flutter', 'Dart', 'AI Plant Scanner', 'Green Economy', 'REST API'],
      hasImage: true,
      featured: false,
    },
    {
      id: 'isyaratkita',
      title: 'IsyaratKita Inclusive App',
      badge: 'Mobile Application',
      badgeColor: 'bg-[#c48745] text-white',
      category: 'Accessibility Technology',
      description:
        'Aplikasi inklusif penerjemah gerakan bahasa isyarat menjadi teks dan suara secara realtime demi mempermudah komunikasi rekan disabilitas dengan masyarakat luas tanpa hambatan.',
      hasImage: false,
      techs: ['Flutter', 'Dart', 'Gesture Recognition AI', 'Speech Synthesis', 'Accessible UI'],
      featured: false,
    },
  ];

  return (
    <motion.section 
      id="proyek"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUpVariants}
      className="py-24 px-6 sm:px-10 max-w-5xl mx-auto space-y-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="space-y-2 border-b-2 border-black/15 pb-4">
        <div className="font-mono text-xs text-[#e4572e] uppercase tracking-widest font-bold">
          Selected Works / 03
        </div>
        <h2 className="font-graffiti text-3xl sm:text-5xl tracking-tight text-inherit">
          Proyek Pilihan & Karya Nyata
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-xl">
          Koleksi produk digital, arsitektur aplikasi mobile, dan fitur interaktif yang saya kembangkan dengan solusi teruji.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1. FEATURED: NEXAPLAN (Full width card with user's real Figma design) */}
        <div className="md:col-span-2 craft-card relative p-6 sm:p-8 overflow-hidden group">
          <div className="washi-tape" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Real Project Image Preview */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-black/20 dark:border-white/20 shadow-md bg-[#e9edf4] flex items-center justify-center p-2">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-auto max-h-[320px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Content */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider ${projects[0].badgeColor}`}>
                {projects[0].badge}
              </span>
              <h3 className="font-graffiti text-2xl sm:text-3xl text-inherit flex items-center justify-between">
                <span>{projects[0].title}</span>
                <ArrowUpRight size={22} className="text-[#e4572e] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {projects[0].techs.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-black/5 dark:bg-white/10 border border-black/10 text-slate-700 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. SOLUSITANI APP (With user's real SolusiTani screens) */}
        <div className="craft-card relative p-6 sm:p-7 flex flex-col justify-between space-y-6 group">
          <div className="washi-tape" />
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-black/20 dark:border-white/20 shadow-md bg-[#eef7f2] flex items-center justify-center p-2">
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-auto max-h-[220px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${projects[1].badgeColor}`}>
              {projects[1].badge}
            </span>
            <h4 className="font-graffiti text-xl sm:text-2xl text-inherit flex items-center justify-between">
              <span>{projects[1].title}</span>
              <ArrowUpRight size={20} className="text-[#2f7f82] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {projects[1].description}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10 dark:border-white/10">
            {projects[1].techs.map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-semibold bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 3. ISYARATKITA APP (Clean card WITHOUT image as requested by user) */}
        <div className="craft-card relative p-6 sm:p-7 flex flex-col justify-between space-y-6 group">
          <div className="washi-tape" />
          <div className="space-y-4">
            {/* Visual Icon Header (No image) */}
            <div className="p-5 rounded-2xl border-2 border-black/15 dark:border-white/15 bg-amber-500/10 dark:bg-amber-500/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#c48745] text-white flex items-center justify-center shadow-[3px_3px_0px_#171816]">
                  <Hand size={24} />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold text-[#c48745] uppercase">Realtime AI Translator</div>
                  <div className="font-graffiti text-lg text-inherit">Gesture to Voice</div>
                </div>
              </div>
              <Volume2 size={24} className="text-[#c48745]" />
            </div>

            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${projects[2].badgeColor}`}>
              {projects[2].badge}
            </span>
            <h4 className="font-graffiti text-xl sm:text-2xl text-inherit flex items-center justify-between">
              <span>{projects[2].title}</span>
              <ArrowUpRight size={20} className="text-[#c48745] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {projects[2].description}
            </p>

            {/* Feature highlights without image */}
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px] text-slate-600 dark:text-slate-300 font-semibold">
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10">
                <span>🤟 Deteksi Isyarat</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10">
                <span>🗣️ Konversi Suara</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10 dark:border-white/10">
            {projects[2].techs.map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-semibold bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* PRESTASI: JUARA 2 UI/UX TAHUN 2024 */}
        <div className="md:col-span-2 craft-card relative p-6 sm:p-8 bg-[#f5d77d]/35 border-amber-500/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 border-2 border-black/30 flex items-center justify-center text-black shrink-0 shadow-[4px_4px_0px_#171816]">
              <Award size={34} />
            </div>
            <div className="space-y-1">
              <div className="font-mono text-xs uppercase font-bold tracking-wider text-[#e4572e]">
                Penghargaan Prestasi Nasional (2024)
              </div>
              <h4 className="font-graffiti text-2xl sm:text-3xl text-slate-900 dark:text-slate-100">
                Juara 2 Kompetisi Inovasi UI/UX Tingkat Nasional
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                Pemenang ke-2 pada tahun 2024 dalam Kompetisi Desain Inovasi Aplikasi Manajemen Delegasi Tugas Karyawan Perusahaan.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs font-bold px-4 py-2 rounded-xl bg-black text-white shadow-[3px_3px_0px_#e4572e]">
            JUARA 2024
          </div>
        </div>
      </div>
    </motion.section>
  );
}