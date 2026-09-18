import React from 'react';
import { Sun, Moon, Menu, X, User, Cpu, Briefcase, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Navbar({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about', number: '01' },
    { name: 'Skills', path: '/skills', number: '02' },
    { name: 'Work', path: '/work', number: '03' },
    { name: 'Contact', path: '/contact', number: '04' },
  ];

  return (
    <>
      <nav className={`fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between border-b-2 border-black/15 px-6 py-4 backdrop-blur-xl sm:px-10 transition-colors ${
        darkMode ? 'bg-[#0c5640]/90 text-[#fbf9f4] border-white/10' : 'bg-[#faf8f4]/90 text-[#171816]'
      }`}>
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-graffiti text-2xl sm:text-3xl tracking-wide text-inherit group-hover:text-[#e4572e] transition-colors">
            GAGA
          </span>
          <span className="font-mono text-xs font-normal text-slate-500 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-md">
            / 2026
          </span>
        </Link>

        {/* Desktop Navigation Buttons */}
        <div className="hidden items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase md:flex">
          <div className="flex items-center gap-2">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-xl border-2 transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#e4572e] text-white border-black dark:border-white shadow-[3px_3px_0px_#171816] -rotate-1 scale-105 font-extrabold'
                      : 'bg-white/80 dark:bg-black/30 border-black/20 dark:border-white/20 text-inherit hover:border-black hover:shadow-[3px_3px_0px_#171816] hover:-translate-y-0.5'
                  }`}
                >
                  <span className={`text-[10px] px-1 rounded font-bold ${isActive ? 'bg-black/25 text-white' : 'bg-black/10 dark:bg-white/10 text-slate-600 dark:text-slate-300'}`}>
                    {item.number}
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-[1.5px] bg-black/20 dark:bg-white/20 mx-1" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/IrfanSabrian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded-lg hover:text-[#e4572e] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/gede-gaga-311643388"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 rounded-lg hover:text-[#2f7f82] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://www.instagram.com/igede_gaga"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-1.5 rounded-lg hover:text-[#e4572e] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              <InstagramIcon size={16} />
            </a>
          </div>

          <div className="h-4 w-[1.5px] bg-black/20 dark:bg-white/20 mx-1" />

          {/* Theme Switcher Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Ganti tema warna"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-black/20 dark:border-white/20 bg-white/50 dark:bg-black/20 hover:scale-105 active:scale-95 transition-all text-xs font-mono"
            title={darkMode ? 'Ubah ke Paper Craft White' : 'Ubah ke Emerald Green'}
          >
            {darkMode ? <Sun size={15} className="text-amber-300" /> : <Moon size={15} className="text-[#2f7f82]" />}
            <span className="hidden lg:inline">{darkMode ? 'Paper Mode' : 'Green Mode'}</span>
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Ganti tema"
            className="p-2 rounded-lg border border-black/20 dark:border-white/20"
          >
            {darkMode ? <Sun size={17} className="text-amber-300" /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            className="p-2 rounded-lg border border-black/20 dark:border-white/20"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className={`fixed top-20 inset-x-4 z-50 p-6 rounded-2xl border-2 border-black/20 shadow-2xl md:hidden backdrop-blur-2xl ${
          darkMode ? 'bg-[#0f523e]/95 text-white' : 'bg-white/95 text-slate-900'
        }`}>
          <div className="flex flex-col gap-3 font-graffiti text-xl">
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2 border-b border-black/10 dark:border-white/10">
              <User size={18} className="text-[#e4572e]" /> 01 / Tentang Saya
            </Link>
            <Link to="/skills" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2 border-b border-black/10 dark:border-white/10">
              <Cpu size={18} className="text-[#2f7f82]" /> 02 / Keahlian
            </Link>
            <Link to="/work" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2 border-b border-black/10 dark:border-white/10">
              <Briefcase size={18} className="text-[#c48745]" /> 03 / Proyek
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2">
              <MessageSquare size={18} className="text-[#e4572e]" /> 04 / Kontak
            </Link>
          </div>
        </div>
      )}
    </>
  );
}