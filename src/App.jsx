import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// Sub-komponen halaman
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to signature warm paper craft, toggleable to emerald green
  const cursorRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let frameId = 0;
    let latestX = -100;
    let latestY = -100;

    const handlePointerMove = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;
      if (!frameId) {
        frameId = window.requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${latestX}px, ${latestY}px, 0)`;
          }
          frameId = 0;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleExploreClick = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className={`${darkMode ? 'theme-green' : 'theme-light'} min-h-screen relative paper-surface pb-16 overflow-x-hidden`}>
      {/* Tactile Craft Paper Grain Overlay */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Stage Backdrop Elements (Home Stage Decoration) */}
      {location.pathname === '/' && (
        <div className="world-3d" aria-hidden="true">
          <span className="stage-panel" />
          <span className="stage-sticker-burst">2024</span>
          <span className="stage-sticker-tag">CREATE<br />LOUD</span>
          <span className="stage-note">ideas<br />in motion</span>
          <span className="stage-pin" />
        </div>
      )}

      {/* Micro Smooth Bullet Cursor Follower */}
      <div ref={cursorRef} className="bullet-cursor" aria-hidden="true" />

      {/* Top Navbar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      {/* Main Content Router */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home handleExploreClick={handleExploreClick} />} />
          <Route path="/about" element={<About darkMode={darkMode} fadeInUpVariants={fadeInUpVariants} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} fadeInUpVariants={fadeInUpVariants} />} />
          <Route path="/work" element={<Work darkMode={darkMode} fadeInUpVariants={fadeInUpVariants} />} />
          <Route path="/contact" element={<Contact fadeInUpVariants={fadeInUpVariants} />} />
        </Routes>
      </main>

      {/* Signature Brutalist Editorial Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-12 sm:px-10 border-t-2 border-black/15 dark:border-white/15 mt-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-6">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#e4572e] font-bold">
              Portfolio / 2026
            </span>
            <h4 className="font-graffiti text-2xl sm:text-4xl text-inherit tracking-wide">
              I GEDE GAGA PRATAMA
            </h4>
          </div>
          <div className="text-left sm:text-right font-mono text-xs text-slate-500 space-y-1">
            <div>Web · Mobile · Creative Tech</div>
            <div className="text-[#e4572e] font-bold">© {new Date().getFullYear()} All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}