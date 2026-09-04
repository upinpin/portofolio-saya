import React from 'react';
import { motion } from 'framer-motion';

export default function Tentang({ darkMode, fadeInUpVariants }) {
  return (
    <motion.section 
      id="tentang" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}
      className="py-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-6 scroll-mt-20"
    >
      <h2 data-section="01" className="text-2xl sm:text-3xl font-extrabold tracking-tight border-b-4 border-blue-500 inline-block pb-2">Tentang Saya</h2>
      <div className="about-intro leading-relaxed text-sm sm:text-base space-y-4">
        <p>
          Saya adalah mahasiswa aktif program studi <strong className="text-[#2f7f82] font-semibold">Teknologi Rekayasa Perangkat Lunak (TRPL) di Politeknik Negeri Lampung</strong>. Memiliki antusiasme tinggi pada rekayasa perangkat lunak, khususnya pengembangan aplikasi berbasis web dan mobile.
        </p>
        <p>
          Saya selalu menerapkan alur kerja modern berbasis Git & <strong className="text-[#e4572e] font-semibold">GitHub</strong> di setiap proyek demi menjaga kolaborasi kode yang rapi, transparan, dan terukur.
        </p>
      </div>
      <div className="about-snapshot">
        <div className="about-stat about-stat-stick"><i className="about-stick" /><strong>TRPL</strong><span>Politeknik Negeri Lampung</span></div>
        <div className="about-stat about-stat-cube"><i className="about-cube" /><strong>WEB + MOBILE</strong><span>Produk yang bisa dipakai, bukan hanya dilihat</span></div>
        <div className="about-stat about-stat-ring"><i className="about-ring" /><strong>GIT / GITHUB</strong><span>Alur kerja rapi dan kolaboratif</span></div>
      </div>
      <div className="about-timeline">
        <div><span>01</span><strong>Belajar</strong><p>Menguatkan fondasi rekayasa perangkat lunak, UI, dan database.</p></div>
        <div><span>02</span><strong>Membangun</strong><p>Mengubah ide menjadi aplikasi web dan mobile yang nyata.</p></div>
        <div><span>03</span><strong>Mengembangkan</strong><p>Menambahkan automation, AI, dan GIS ketika masalah membutuhkannya.</p></div>
      </div>
    </motion.section>
  );
}