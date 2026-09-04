import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import fotoGede from '../assets/foto-gede.jpg';

export default function Hero({ rocketControls, handleExploreClick }) {
  const boardRef = useRef(null);
  const [runnerX, setRunnerX] = useState(0);
  const [isChasing, setIsChasing] = useState(false);

  const chaseName = (event, info) => {
    const board = boardRef.current;
    if (!board) return;
    const bounds = board.getBoundingClientRect();
    const nextX = Math.min(Math.max(info.point.x - bounds.left - 36, 0), bounds.width - 92);
    setRunnerX(nextX);
  };

  return (
    <header className="hero-layout relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-copy order-2 max-w-4xl space-y-7 text-left md:order-1"
      >
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e4572e] sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#e4572e]" /> Available for new projects
        </div>
        <div ref={boardRef} className="graffiti-board" aria-label="Nama I Gede Gaga Pratama, tiap kata dapat dipindahkan">
          <motion.span drag dragElastic={0.15} onDragStart={() => setIsChasing(true)} onDrag={chaseName} onDragEnd={() => setIsChasing(false)} className="graffiti-word graffiti-word-one">I</motion.span>
          <motion.span drag dragElastic={0.15} onDragStart={() => setIsChasing(true)} onDrag={chaseName} onDragEnd={() => setIsChasing(false)} className="graffiti-word graffiti-word-two">GEDE</motion.span>
          <motion.span drag dragElastic={0.15} onDragStart={() => setIsChasing(true)} onDrag={chaseName} onDragEnd={() => setIsChasing(false)} className="graffiti-word graffiti-word-three">GAGA</motion.span>
          <motion.span drag dragElastic={0.15} onDragStart={() => setIsChasing(true)} onDrag={chaseName} onDragEnd={() => setIsChasing(false)} className="graffiti-word graffiti-word-four">PRATAMA</motion.span>
        </div>
        <motion.div
          className={`graffiti-motion ${isChasing ? 'graffiti-motion-active' : ''}`}
          animate={{ left: runnerX, opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          transition={{ delay: 0.5, duration: 0.7, left: { type: 'spring', stiffness: 220, damping: 20 } }}
          aria-hidden="true"
        >
          <motion.span className="paint-stroke paint-stroke-one" animate={{ scaleX: [0.35, 1, 0.35], opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} />
          <motion.span className="paint-stroke paint-stroke-two" animate={{ scaleX: [0.2, 1, 0.2], opacity: [0.2, 0.9, 0.2] }} transition={{ repeat: Infinity, duration: 1.3, delay: 0.2, ease: 'easeInOut' }} />
          <motion.span className="paint-stroke paint-stroke-three" animate={{ scaleX: [0.1, 0.8, 0.1], opacity: [0.1, 0.7, 0.1] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.4, ease: 'easeInOut' }} />
          <motion.i className="paint-dot paint-dot-one" animate={{ x: [0, 28], y: [0, -12], opacity: [1, 0], scale: [1, 0.4] }} transition={{ repeat: Infinity, duration: 1.1 }} />
          <motion.i className="paint-dot paint-dot-two" animate={{ x: [0, 20], y: [0, 9], opacity: [1, 0], scale: [1, 0.3] }} transition={{ repeat: Infinity, duration: 0.9, delay: 0.15 }} />
        </motion.div>
        <p className="hero-description max-w-xl text-base leading-relaxed sm:text-lg">
          Saya adalah mahasiswa TRPL Politeknik Negeri Lampung yang merangkai web, mobile, automation, dan UI/UX menjadi pengalaman yang solutif.
        </p>
        
        <div className="hero-actions flex flex-wrap items-center gap-3 pt-2">
          <motion.button 
            onClick={handleExploreClick}
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hero-cta hero-cta-primary group flex items-center gap-3 bg-[#e4572e] px-6 py-3.5 text-sm font-extrabold text-[#fff8f3] transition-transform hover:-translate-y-1"
          >
            <span><small>01 / ABOUT</small>Mulai jelajahi</span>
            <motion.div animate={rocketControls}><ArrowUpRight size={18} /></motion.div>
          </motion.button>
          <a href="/work" className="hero-cta hero-cta-secondary flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-1">
            <span><small>02 / WORK</small>Lihat karya</span>
            <ArrowDown size={17} />
          </a>
        </div>
      </motion.div>

      {/* Frame Foto Profil - VERSI AWAL (Glow Statis/Hover Effect) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-visual order-1 flex w-full justify-end md:order-2"
      >
        <div className="group relative h-40 w-40 cursor-pointer sm:h-52 sm:w-52 md:absolute md:right-10 md:top-36 md:h-64 md:w-64">
          {/* Efek Glow Awal yang bereaksi saat group di-hover */}
          <div className="absolute inset-0 rounded-full bg-[#e4572e]/30 blur-2xl opacity-40 transition-all duration-500 group-hover:opacity-70" />
          
          <div className="hero-portrait absolute inset-2 overflow-hidden border border-[#e4572e]/60 bg-slate-900">
            <img 
              src={fotoGede} 
              alt="I Gede Gaga Pratama" 
              className="h-full w-full object-cover object-center grayscale-[20%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </div>
          <div className="absolute -bottom-3 -left-8 hidden border border-black/20 bg-[#f3f0e9] px-3 py-2 font-mono text-[10px] text-[#171816] shadow-xl sm:block">
            @gaga.dev
          </div>
        </div>
      </motion.div>
    </header>
  );
}