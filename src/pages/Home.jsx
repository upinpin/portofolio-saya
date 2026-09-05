import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';

const capabilities = [
  ['01', 'Memahami masalah', 'Menggali kebutuhan pengguna dan menyusun solusi yang jelas sebelum mulai membangun.'],
  ['02', 'Membangun solusi', 'Mengubah kebutuhan menjadi produk web, mobile, atau automation yang benar-benar bisa digunakan.'],
  ['03', 'Memimpin kolaborasi', 'Sebagai Wakil Ketua ASTECH, saya terbiasa mengoordinasikan tim dan menjaga ide tetap bergerak menjadi aksi.'],
];

export default function Home({ handleExploreClick }) {
  return (
    <>
      <Hero handleExploreClick={handleExploreClick} />
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-black/15 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e4572e]">What I bring</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Built around the problem.</h2>
          </div>
          <ArrowUpRight className="hidden text-[#e4572e] sm:block" size={28} />
        </div>
        <motion.div
          className="home-capability-grid grid gap-px overflow-hidden border border-black/15 bg-black/15 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {capabilities.map(([number, title, description], index) => (
            <motion.article
              key={number}
              variants={{ hidden: { opacity: 0, y: 30, rotate: index % 2 ? 2 : -2 }, visible: { opacity: 1, y: 0, rotate: 0 } }}
              whileHover={{ y: -10, rotateX: 4, rotateY: index === 1 ? 0 : index ? -3 : 3 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
              className="home-capability-card bg-[#f3f0e9] p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-[#e4572e]">{number}</span>
              <h3 className="mt-16 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              <span className="capability-mark" aria-hidden="true">↗</span>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  );
}
