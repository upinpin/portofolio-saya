import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import fotoGede from '../assets/foto-gede.jpg';

export default function Hero({ handleExploreClick }) {
  const boardRef = useRef(null);
  const boardBoundsRef = useRef(null);
  const [runnerX, setRunnerX] = useState(0);
  const [isChasing, setIsChasing] = useState(false);

  const handleDragStart = () => {
    setIsChasing(true);
    if (boardRef.current) {
      boardBoundsRef.current = boardRef.current.getBoundingClientRect();
    }
  };

  const handleDragEnd = () => {
    setIsChasing(false);
  };

  const chaseName = (event, info) => {
    const bounds = boardBoundsRef.current;
    if (!bounds) return;
    const nextX = Math.min(Math.max(info.point.x - bounds.left - 36, 0), bounds.width - 92);
    setRunnerX(nextX);
  };

  return (
    <header className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-10 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] z-10">
      {/* Left Column: Draggable Graffiti Board & Copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="order-2 max-w-4xl space-y-6 text-left lg:order-1"
      >
        {/* TOP ACTION BAR & BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-black/20 dark:border-white/20 bg-white/80 dark:bg-black/40 backdrop-blur-md font-mono text-[11px] uppercase tracking-wider font-bold text-[#e4572e] shadow-[3px_3px_0px_#171816] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.2)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e4572e] animate-ping" />
            <span>Available for Hire</span>
          </div>

          {/* Button 01: Mulai Jelajahi (Primary) */}
          <button
            onClick={handleExploreClick}
            type="button"
            className="btn-brutalist btn-primary group px-4 py-2.5 text-base sm:text-lg flex items-center gap-2 shadow-[5px_5px_0px_#171816] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#171816]"
          >
            <span className="font-mono text-[11px] bg-black/25 px-2 py-0.5 rounded text-white font-bold">01</span>
            <span>Mulai Jelajahi</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Button 02: Lihat Karya (Secondary) */}
          <Link
            to="/work"
            className="btn-brutalist btn-secondary group px-4 py-2.5 text-base sm:text-lg flex items-center gap-2 bg-[#f5d77d] hover:bg-[#ffe599] text-black shadow-[5px_5px_0px_#171816] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#171816]"
          >
            <span className="font-mono text-[11px] bg-black/15 px-2 py-0.5 rounded font-bold">02</span>
            <span>Lihat Karya (10+)</span>
            <ArrowDown size={17} className="group-hover:translate-y-1 transition-transform" />
          </Link>

          {/* Button 03: Kontak Cepat */}
          <Link
            to="/contact"
            className="btn-brutalist group px-3.5 py-2.5 text-sm sm:text-base flex items-center gap-1.5 bg-[#2f7f82] text-white hover:bg-[#389498] shadow-[5px_5px_0px_#171816] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#171816]"
          >
            <span className="font-mono text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-bold">03</span>
            <span>Hubungi</span>
          </Link>
        </div>

        {/* DRAGGABLE GRAFFITI BOARD */}
        <div
          ref={boardRef}
          className="graffiti-board pt-2"
          aria-label="Nama I Gede Gaga Pratama, tiap kata dapat digeser interaktif"
        >
          <motion.span
            drag
            dragElastic={0.15}
            onDragStart={handleDragStart}
            onDrag={chaseName}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.05 }}
            className="graffiti-word graffiti-word-one"
          >
            I
          </motion.span>
          <motion.span
            drag
            dragElastic={0.15}
            onDragStart={handleDragStart}
            onDrag={chaseName}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.05 }}
            className="graffiti-word graffiti-word-two"
          >
            GEDE
          </motion.span>
          <motion.span
            drag
            dragElastic={0.15}
            onDragStart={handleDragStart}
            onDrag={chaseName}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.05 }}
            className="graffiti-word graffiti-word-three"
          >
            GAGA
          </motion.span>
          <motion.span
            drag
            dragElastic={0.15}
            onDragStart={handleDragStart}
            onDrag={chaseName}
            onDragEnd={handleDragEnd}
            whileHover={{ scale: 1.05 }}
            className="graffiti-word graffiti-word-four"
          >
            PRATAMA
          </motion.span>
        </div>

        {/* CHASER RUNNER WITH PAINT STROKES */}
        <motion.div
          className={`graffiti-motion ${isChasing ? 'graffiti-motion-active' : ''}`}
          animate={{ left: runnerX, opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          transition={{ delay: 0.3, duration: 0.5, left: { type: 'spring', stiffness: 240, damping: 22 } }}
          aria-hidden="true"
        >
          <span className="paint-stroke paint-stroke-one" />
          <span className="paint-stroke paint-stroke-two" />
          <span className="paint-stroke paint-stroke-three" />
          <i className="paint-dot paint-dot-one" />
          <i className="paint-dot paint-dot-two" />
        </motion.div>

        {/* Editorial Subhead Callout */}
        <div className="p-4 sm:p-5 rounded-2xl border-2 border-black/20 dark:border-white/20 bg-amber-200/40 dark:bg-amber-500/15 backdrop-blur-md shadow-[4px_4px_0px_rgba(23,24,22,0.2)]">
          <p className="text-sm sm:text-base leading-relaxed font-medium text-slate-800 dark:text-slate-100">
            Saya adalah mahasiswa <strong className="text-[#2f7f82] dark:text-[#70d085]">TRPL Politeknik Negeri Lampung</strong> yang pernah menjabat sebagai <strong className="text-[#e4572e]">Wakil Ketua ASTECH</strong>, merangkai web modern, mobile Flutter, automasi, dan UI/UX menjadi pengalaman yang solutif.
          </p>
        </div>
      </motion.div>

      {/* Right Column: Hero Visual Frame (Polygonal Portrait with Polaroid Tag) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="order-1 flex justify-center lg:justify-end lg:order-2"
      >
        <div className="hero-portrait-frame relative flex items-center justify-center">
          {/* Subtle Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-[#e4572e]/25 blur-3xl opacity-60" />

          {/* Polygonal Cropped Portrait */}
          <div className="hero-portrait relative w-56 h-56 sm:w-72 sm:h-72 overflow-hidden cursor-pointer">
            <img
              src={fotoGede}
              alt="I Gede Gaga Pratama"
              fetchPriority="high"
              className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0"
            />
          </div>

          {/* Polaroid Street Tag */}
          <div className="polaroid-badge">
            <span className="text-[#e4572e] mr-1">●</span>
            @gaga.dev
          </div>
        </div>
      </motion.div>
    </header>
  );
}