import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, RotateCcw, Target } from 'lucide-react';

export default function Proyek({ darkMode, fadeInUpVariants }) {
  const boardRef = useRef(null);
  const playerRef = useRef({ top: 50, left: 50 });
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [kills, setKills] = useState(0);
  const [ammo, setAmmo] = useState(8);
  const [shot, setShot] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [player, setPlayer] = useState({ top: 50, left: 50 });
  const [hazards, setHazards] = useState([]);
  const [bonus, setBonus] = useState({ top: 25, left: 75, visible: true });

  useEffect(() => {
    if (!gameStarted || gameFinished) return undefined;
    const timer = window.setInterval(() => {
      setTimeLeft((currentTime) => {
        if (currentTime <= 1) {
          setGameFinished(true);
          setGameStarted(false);
          return 0;
        }
        return currentTime - 1;
      });
      setScore((currentScore) => currentScore + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [gameStarted, gameFinished]);

  useEffect(() => {
    if (!gameStarted || gameFinished) return undefined;
    const motionLoop = window.setInterval(() => {
      setHazards((currentHazards) => {
        const nextHazards = currentHazards.map((hazard) => {
          const next = { ...hazard, top: hazard.top + hazard.velocityY, left: hazard.left + hazard.velocityX };
          if (next.top < 5 || next.top > 92) next.velocityY *= -1;
          if (next.left < 5 || next.left > 92) next.velocityX *= -1;
          return next;
        });
        const hit = nextHazards.some((hazard) => Math.hypot(hazard.top - playerRef.current.top, hazard.left - playerRef.current.left) < 9);
        if (hit) {
          setGameFinished(true);
          setGameStarted(false);
        }
        return nextHazards;
      });
    }, 90);
    return () => window.clearInterval(motionLoop);
  }, [gameStarted, gameFinished]);

  const startGame = () => {
    setScore(0);
    setKills(0);
    setAmmo(8);
    setShot(null);
    setTimeLeft(30);
    setPlayer({ top: 50, left: 50 });
    playerRef.current = { top: 50, left: 50 };
    setHazards([
      { top: 18, left: 18, velocityX: 0.34, velocityY: 0.25, color: 'red' },
      { top: 78, left: 72, velocityX: -0.28, velocityY: 0.34, color: 'ochre' },
      { top: 64, left: 30, velocityX: 0.4, velocityY: -0.2, color: 'red' },
    ]);
    setBonus({ top: 25, left: 75, visible: true });
    setGameFinished(false);
    setGameStarted(true);
  };
  const shootAt = (event) => {
    if (!gameStarted || !boardRef.current || ammo <= 0) return;
    const bounds = boardRef.current.getBoundingClientRect();
    const shot = {
      top: ((event.clientY - bounds.top) / bounds.height) * 100,
      left: ((event.clientX - bounds.left) / bounds.width) * 100,
    };
    setShot(shot);
    window.setTimeout(() => setShot(null), 180);
    const hitIndex = hazards.findIndex((hazard) => Math.hypot(hazard.top - shot.top, hazard.left - shot.left) < 12);
    setAmmo((currentAmmo) => currentAmmo - 1);
    if (hitIndex >= 0) {
      setHazards((currentHazards) => currentHazards.filter((_, index) => index !== hitIndex));
      setKills((currentKills) => currentKills + 1);
      setScore((currentScore) => currentScore + 20);
    }
  };
  const reload = () => setAmmo(8);
  const movePlayer = (event) => {
    if (!gameStarted || !boardRef.current) return;
    const bounds = boardRef.current.getBoundingClientRect();
    const nextPlayer = {
      top: Math.min(Math.max(((event.clientY - bounds.top) / bounds.height) * 100, 7), 93),
      left: Math.min(Math.max(((event.clientX - bounds.left) / bounds.width) * 100, 7), 93),
    };
    playerRef.current = nextPlayer;
    setPlayer(nextPlayer);
    if (bonus.visible && Math.hypot(nextPlayer.top - bonus.top, nextPlayer.left - bonus.left) < 9) {
      setTimeLeft((currentTime) => currentTime + 5);
      setScore((currentScore) => currentScore + 25);
      setBonus((currentBonus) => ({ ...currentBonus, visible: false }));
      window.setTimeout(() => setBonus({ top: 12 + Math.random() * 76, left: 12 + Math.random() * 76, visible: true }), 2500);
    }
  };

  return (
    <motion.section 
      id="proyek" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}
      className="py-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 scroll-mt-20"
    >
      <div className="space-y-2">
        <h2 data-section="03" className="text-2xl sm:text-3xl font-extrabold tracking-tight border-b-4 border-[#e4572e] inline-block pb-2">Proyek Pilihan</h2>
        <p className="text-sm text-slate-400">Koleksi produk digital dan fitur interaktif yang saya kembangkan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* FEATURED: NEXAPLAN */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className={`p-6 md:col-span-3 rounded-2xl border flex flex-col md:flex-row justify-between gap-6 transition-all relative overflow-hidden group ${darkMode ? 'bg-gradient-to-br from-purple-900/20 via-slate-800/20 to-slate-900 border-purple-500/30' : 'bg-purple-50/50 border-purple-200 shadow-sm'}`}
        >
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] bg-purple-500 text-white font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">Featured Project</span>
            <h3 className="text-2xl font-black group-hover:text-purple-400 transition-colors flex items-center gap-2">
              UI/UX NexaPlan <ArrowUpRight size={18} />
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Riset antarmuka (UI/UX) untuk aplikasi manajemen proyek skala enterprise modern. Memecahkan masalah delegasi tugas tim secara transparan dan pelacakan lini masa progres kerja.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 font-mono text-3xl font-bold">NP</div>
          </div>
        </motion.div>

        {/* SOLUSITANI */}
        <motion.div 
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${darkMode ? 'bg-slate-800/20 border-slate-700/60 hover:border-blue-500/40' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-blue-400 tracking-wider">Mobile Application</span>
            <h4 className="text-lg font-bold">solusiTani App</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Platform e-commerce agribisnis dilengkapi AI pemindai penyakit tanaman lewat kamera serta pemetaan lokasi toko pupuk.
            </p>
          </div>
        </motion.div>

        {/* ISYARATKITA */}
        <motion.div 
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${darkMode ? 'bg-slate-800/20 border-slate-700/60 hover:border-teal-500/40' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-teal-400 tracking-wider">Mobile Application</span>
            <h4 className="text-lg font-bold">IsyaratKita</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aplikasi inklusif penerjemah gerakan bahasa isyarat menjadi teks secara realtime demi mempermudah komunikasi disabilitas.
            </p>
          </div>
        </motion.div>

        {/* PRESTASI */}
        <motion.div 
          whileHover={{ y: -4 }}
          className={`p-6 rounded-2xl border flex flex-col justify-between gap-4 transition-all ${darkMode ? 'bg-gradient-to-br from-slate-900 to-yellow-950/10 border-yellow-500/20' : 'bg-yellow-50/20 border-yellow-200 shadow-sm'}`}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold text-yellow-500 tracking-wider">Achievement</span>
              <Award size={16} className="text-yellow-500" />
            </div>
            <h4 className="text-lg font-bold">Juara 2 UI/UX</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pemenang ke-2 dalam Kompetisi Desain Inovasi Aplikasi Manajemen Delegasi Tugas Karyawan Perusahaan.
            </p>
          </div>
        </motion.div>

        {/* MINI GAME: GRAFFITI SURVIVAL */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className={`p-6 md:col-span-3 rounded-2xl border flex flex-col lg:flex-row items-stretch justify-between gap-8 transition-all ${darkMode ? 'bg-gradient-to-tr from-slate-900 via-slate-900 to-blue-950/20 border-blue-500/30 shadow-xl' : 'bg-blue-50/40 border-blue-200 shadow-md'}`}
        >
          {/* Sisi Kiri Game */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] bg-[#e4572e] text-white font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md">Mini game</span>
              <h3 className="text-xl font-black text-white pt-1">Graffiti Survival</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Gerakkan tag, arahkan pointer, lalu klik untuk menembak musuh. Hindari tabrakan dan isi ulang peluru saat perlu.
              </p>
            </div>
            
            {/* Skor Sementara */}
            <div className="game-stats text-xs font-mono px-3 py-2 w-fit">
              Waktu: <span className="text-[#e4572e] font-bold">{timeLeft}s</span> | Skor: <span className="text-[#2f7f82] font-bold">{score}</span> | Kill: <span className="text-[#c48745] font-bold">{kills}</span> | Peluru: <span className="text-[#e4572e] font-bold">{ammo}</span>
            </div>
          </div>

          <div ref={boardRef} className="graffiti-game-board" onPointerMove={movePlayer} onPointerDown={shootAt}>
            {!gameStarted && !gameFinished && <div className="game-intro"><Target size={30} /><span>Siap bertahan?</span><button onClick={startGame}>Mulai</button></div>}
            {gameFinished && <div className="game-intro"><Award size={30} /><span>Tag tertabrak. Skor: {score}</span><button onClick={startGame}><RotateCcw size={14} /> Main lagi</button></div>}
            {gameStarted && <>
              <motion.div className="survival-player" animate={{ top: `${player.top}%`, left: `${player.left}%` }} transition={{ type: 'spring', stiffness: 420, damping: 28 }}><span className="player-head" /><span className="player-body">G</span><span className="player-arm" /><span className="player-blaster" /></motion.div>
              {shot && <motion.span className="bullet-trail" initial={{ top: `${player.top}%`, left: `${player.left}%`, opacity: 1 }} animate={{ top: `${shot.top}%`, left: `${shot.left}%`, opacity: 0 }} transition={{ duration: 0.18, ease: 'easeOut' }} />}
              {hazards.map((hazard, index) => <motion.div key={index} className={`survival-hazard ${hazard.color}`} animate={{ top: `${hazard.top}%`, left: `${hazard.left}%` }} transition={{ duration: 0.09, ease: 'linear' }}><span className="enemy-eye enemy-eye-one" /><span className="enemy-eye enemy-eye-two" /><b>!</b></motion.div>)}
              {bonus.visible && <motion.button aria-label="Bonus waktu" className="survival-bonus" style={{ top: `${bonus.top}%`, left: `${bonus.left}%` }} animate={{ rotate: [0, 90, 180], scale: [0.9, 1.1, 0.9] }} transition={{ repeat: Infinity, duration: 2 }}><span>+</span></motion.button>}
              <button className="reload-button" onClick={(event) => { event.stopPropagation(); reload(); }}>RELOAD</button>
              <span className="survival-help">MOVE / AIM / FIRE</span>
            </>}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}