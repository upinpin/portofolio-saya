import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code, Database } from 'lucide-react';

export default function Keahlian({ fadeInUpVariants }) {
  const categories = [
    {
      title: 'Mobile Dev',
      icon: Smartphone,
      accentColor: 'text-[#e4572e]',
      borderColor: 'border-[#e4572e]',
      shadowColor: 'hover:shadow-[8px_8px_0px_#e4572e]',
      description: 'Menguasai pembuatan aplikasi Android Studio modern menggunakan Flutter SDK dan bahasa pemrograman Dart.',
      skills: ['Flutter SDK', 'Dart', 'Android Studio', 'State Management', 'REST API Integration'],
    },
    {
      title: 'Web Dev',
      icon: Code,
      accentColor: 'text-[#2f7f82]',
      borderColor: 'border-[#2f7f82]',
      shadowColor: 'hover:shadow-[8px_8px_0px_#2f7f82]',
      description: 'Pengembangan arsitektur web tangguh berbasis PHP, React.js, HTML5, serta framework modern Tailwind CSS.',
      skills: ['PHP', 'React.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Component Architecture'],
    },
    {
      title: 'Database & Backend',
      icon: Database,
      accentColor: 'text-[#c48745]',
      borderColor: 'border-[#c48745]',
      shadowColor: 'hover:shadow-[8px_8px_0px_#c48745]',
      description: 'Manajemen basis data relasional MySQL, perancangan ERD, skema tabel terstruktur, dan optimalisasi query CRUD.',
      skills: ['MySQL', 'Relational Schema', 'ERD Design', 'CRUD Operations', 'Git Workflow'],
    },
  ];

  return (
    <motion.section 
      id="keahlian"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUpVariants}
      className="py-24 px-6 sm:px-10 max-w-5xl mx-auto space-y-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="space-y-2 border-b-2 border-black/15 pb-4">
        <div className="font-mono text-xs text-[#e4572e] uppercase tracking-widest font-bold">
          Technical Stack / 02
        </div>
        <h2 className="font-graffiti text-3xl sm:text-5xl tracking-tight text-inherit">
          Keahlian Teknis
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-xl">
          Kemampuan rekayasa perangkat lunak multiplatform: dari logika logika antarmuka mobile, web full-cycle, hingga basis data.
        </p>
      </div>

      {/* 3 Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              whileHover={{ y: -6, rotate: idx % 2 === 0 ? -1.5 : 1.5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className={`craft-card p-6 sm:p-7 flex flex-col justify-between space-y-6 ${cat.shadowColor} transition-all`}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/10 border-2 border-black/15 flex items-center justify-center ${cat.accentColor} shadow-[3px_3px_0px_#171816]`}>
                  <Icon size={30} />
                </div>
                <div>
                  <h3 className="font-graffiti text-2xl text-inherit">{cat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mt-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill chips */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 space-y-1.5">
                <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-semibold bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}