import React, { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// Import semua sub-komponen yang rapi
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rocketControls = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handlePointerMove = (event) => setCursorPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('mousemove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);
  
  // Fungsi navigasi mulus saat tombol roket jelajahi di-klik
  const handleExploreClick = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  // Varian animasi kemunculan section (fade-in-up)
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className={`${darkMode ? 'bg-[#20211f] text-[#f1eee7]' : 'bg-[#e9e5dc] text-[#171816]'} min-h-screen transition-colors duration-500 pb-12 overflow-x-hidden relative paper-surface ${location.pathname === '/' ? 'home-stage' : 'inner-stage'}`}>
      <div className="paper-grain pointer-events-none absolute inset-0" />
      <div className="world-3d" aria-hidden="true">
        <span className="world-ring world-ring-one" />
        <span className="world-ring world-ring-two" />
        <span className="world-block world-block-one" />
        <span className="world-block world-block-two" />
        <span className="stage-panel" />
        <span className="stage-sticker stage-sticker-burst">2026</span>
        <span className="stage-sticker stage-sticker-tag">CREATE<br />LOUD</span>
        <span className="stage-note">ideas<br />in motion</span>
        <span className="stage-pin" />
      </div>
      <div className="bullet-cursor" style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }} />

      <Navbar 
        darkMode={darkMode} setDarkMode={setDarkMode} 
        isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} 
      />

      <Routes>
        <Route path="/" element={<Home rocketControls={rocketControls} handleExploreClick={handleExploreClick} />} />
        <Route path="/about" element={<About darkMode={darkMode} fadeInUpVariants={fadeInUpVariants} />} />
        <Route path="/skills" element={<Skills darkMode={darkMode} fadeInUpVariants={fadeInUpVariants} />} />
        <Route path="/work" element={<Work darkMode={darkMode} fadeInUpVariants={fadeInUpVariants} />} />
        <Route path="/contact" element={<Contact fadeInUpVariants={fadeInUpVariants} />} />
      </Routes>

      <footer className="site-footer relative mx-auto max-w-6xl px-6 py-10 sm:px-10">
        <div className="footer-inner">
          <div>
            <span className="footer-kicker">Portfolio / 2026</span>
            <strong>I GEDE GAGA PRATAMA</strong>
          </div>
          <div className="footer-meta">
            <span>Web · Mobile · Creative Tech</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}