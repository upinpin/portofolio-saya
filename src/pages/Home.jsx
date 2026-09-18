import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';

const capabilities = [
  ['01', 'Memahami masalah', 'Menggali kebutuhan pengguna dan menyusun solusi yang jelas sebelum mulai membangun.'],
  ['02', 'Membangun solusi', 'Mengubah kebutuhan menjadi produk web, mobile Flutter, atau automasi yang benar-benar bisa digunakan.'],
  ['03', 'Memimpin kolaborasi', 'Melalui pengalaman pernah menjabat Wakil Ketua ASTECH, saya terbiasa mengoordinasikan tim dan menjaga ide tetap bergerak menjadi aksi.'],
];

export default function Home({ handleExploreClick }) {
  return (
    <>
      <Hero handleExploreClick={handleExploreClick} />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="mb-10 flex items-end justify-between gap-6 border-b-2 border-black/15 pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e4572e] font-bold">What I bring</p>
            <h2 className="mt-2 font-graffiti text-3xl sm:text-5xl tracking-tight text-inherit">
              Built around the problem.
            </h2>
          </div>
          <ArrowUpRight className="hidden text-[#e4572e] sm:block" size={32} />
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {capabilities.map(([number, title, description], index) => (
            <motion.article
              key={number}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, rotate: index === 1 ? 0 : index === 0 ? -1.5 : 1.5 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="craft-card p-6 sm:p-8 flex flex-col justify-between space-y-8 relative overflow-hidden"
            >
              <div className="washi-tape" />
              <div>
                <span className="font-mono text-sm font-bold text-[#e4572e] bg-[#e4572e]/10 px-2 py-0.5 rounded-md">
                  {number}
                </span>
                <h3 className="mt-10 font-graffiti text-2xl text-inherit">{title}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  {description}
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex justify-end">
                <span className="font-graffiti text-2xl text-[#e4572e]" aria-hidden="true">↗</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  );
}
