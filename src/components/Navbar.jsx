import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, User, Cpu, Briefcase, MessageSquare } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <nav className={`fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between border-b px-6 py-5 backdrop-blur-xl sm:px-10 ${darkMode ? 'border-white/10 bg-[#20211f]/90' : 'border-black/10 bg-[#e9e5dc]/90'}`}>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-base font-extrabold tracking-tight ${darkMode ? 'text-[#e4572e]' : 'text-[#171816]'}`}
        >
          GAGA <span className="font-mono text-xs font-normal text-slate-500">/ 2026</span>
        </motion.h1>
        
        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 text-xs font-semibold tracking-wide text-slate-400 md:flex">
          <a href="https://github.com/IrfanSabrian" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#e4572e]">GitHub</a>
          <a href="https://www.linkedin.com/in/gede-gaga-311643388?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#e4572e]">LinkedIn</a>
          <a href="https://www.instagram.com/igede_gaga?igsi=ZjFycmttcmhrbDRq&utm_source=qr" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#e4572e]">Instagram</a>

          <div className="h-5 w-[1px] bg-slate-700/40 mx-1" />

          <button 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Ganti tema"
            className={`p-2 transition-all ${darkMode ? 'text-[#e4572e]' : 'text-slate-900'}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Ganti tema"
            className={`p-2 ${darkMode ? 'text-[#e4572e]' : 'text-slate-900'}`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka menu" className="p-2 text-slate-400 hover:text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <aside className="fixed bottom-8 left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col justify-center gap-5 border-l border-white/10 pl-4 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-500 lg:flex">
        <a href="/about" className="transition-colors hover:text-[#e4572e]">01 / About</a>
        <a href="/skills" className="transition-colors hover:text-[#e4572e]">02 / Skills</a>
        <a href="/work" className="transition-colors hover:text-[#e4572e]">03 / Work</a>
        <a href="/contact" className="transition-colors hover:text-[#e4572e]">04 / Contact</a>
      </aside>

      <nav className="quick-nav" aria-label="Navigasi cepat">
        <a href="/" className="quick-nav-link">Home</a>
        <a href="/about" className="quick-nav-link">About</a>
        <a href="/skills" className="quick-nav-link">Skills</a>
        <a href="/work" className="quick-nav-link">Work</a>
        <a href="/contact" className="quick-nav-link">Contact</a>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-[65px] left-4 right-4 rounded-2xl z-40 p-6 flex flex-col gap-4 border border-slate-700/30 shadow-2xl md:hidden backdrop-blur-2xl ${darkMode ? 'bg-slate-950/95 text-white' : 'bg-white/95 text-slate-900'}`}
          >
            <a href="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2 border-b border-slate-500/10"><User size={18} /> Tentang Saya</a>
            <a href="/skills" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2 border-b border-slate-500/10"><Cpu size={18} /> Keahlian</a>
            <a href="/work" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2 border-b border-slate-500/10"><Briefcase size={18} /> Proyek</a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2"><MessageSquare size={18} /> Kontak</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}