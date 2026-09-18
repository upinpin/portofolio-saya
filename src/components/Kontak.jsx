import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Kontak({ fadeInUpVariants }) {
  const [copiedType, setCopiedType] = useState(null);
  const [messageText, setMessageText] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(messageText || 'Halo Gaga, saya tertarik untuk mendiskusikan peluang proyek / kolaborasi.');
    window.open(`https://wa.me/6282184633934?text=${encoded}`, '_blank');
  };

  return (
    <motion.section 
      id="kontak"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUpVariants}
      className="py-24 px-6 sm:px-10 max-w-5xl mx-auto space-y-10 scroll-mt-24"
    >
      {/* Section Header */}
      <div className="space-y-2 border-b-2 border-black/15 pb-4">
        <div className="font-mono text-xs text-[#e4572e] uppercase tracking-widest font-bold">
          Connect / 04
        </div>
        <h2 className="font-graffiti text-3xl sm:text-5xl tracking-tight text-inherit">
          Mari Terhubung
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium max-w-xl">
          Saya terbuka untuk program magang koding, kerja sama tim, ataupun diskusi proyek baru. Silakan hubungi saya melalui:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Direct Contact Options */}
        <div className="craft-card p-6 sm:p-8 space-y-6">
          <h3 className="font-graffiti text-2xl text-inherit">Kontak Langsung</h3>
          
          <div className="space-y-4">
            {/* Email */}
            <div className="p-4 rounded-xl border-2 border-black/15 bg-black/5 dark:bg-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#e4572e]/20 border border-[#e4572e]/40 flex items-center justify-center text-[#e4572e] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase text-slate-500 font-bold">Email</div>
                  <a href="mailto:gedegaga28@gmail.com" className="text-xs sm:text-sm font-bold text-inherit truncate block hover:underline">
                    gedegaga28@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard('gedegaga28@gmail.com', 'email')}
                className="p-2 rounded-lg border-2 border-black/20 bg-white dark:bg-slate-900 hover:scale-105 transition-all text-xs font-mono font-bold shrink-0 flex items-center gap-1"
                title="Salin Email"
              >
                {copiedType === 'email' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{copiedType === 'email' ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl border-2 border-black/15 bg-black/5 dark:bg-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#2f7f82]/20 border border-[#2f7f82]/40 flex items-center justify-center text-[#2f7f82] shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase text-slate-500 font-bold">WhatsApp</div>
                  <a href="https://wa.me/6282184633934" target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-bold text-inherit truncate block hover:underline">
                    0821-8463-3934
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => copyToClipboard('082184633934', 'phone')}
                  className="p-2 rounded-lg border-2 border-black/20 bg-white dark:bg-slate-900 hover:scale-105 transition-all text-xs font-mono font-bold flex items-center gap-1"
                  title="Salin Nomor"
                >
                  {copiedType === 'phone' ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span className="hidden sm:inline">{copiedType === 'phone' ? 'Tersalin' : 'Salin'}</span>
                </button>
                <a
                  href="https://wa.me/6282184633934"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg border-2 border-black/20 bg-[#2f7f82] text-white hover:scale-105 transition-all text-xs font-mono font-bold flex items-center gap-0.5"
                >
                  <span>Chat</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl border-2 border-black/15 bg-black/5 dark:bg-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#c48745]/20 border border-[#c48745]/40 flex items-center justify-center text-[#c48745] shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-slate-500 font-bold">Domisili</div>
                <div className="text-xs sm:text-sm font-bold text-inherit">Bandar Lampung, Lampung, Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Message Box & Map Embed */}
        <div className="space-y-6">
          <form
            onSubmit={handleSendWhatsApp}
            className="craft-card p-6 sm:p-7 space-y-4"
          >
            <h4 className="font-graffiti text-xl text-inherit">Tinggalkan Pesan</h4>
            <textarea
              rows={3}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Tuliskan pesan Anda di sini untuk langsung terhubung ke WhatsApp..."
              className="w-full p-3.5 rounded-xl border-2 border-black/20 bg-white dark:bg-black/30 text-sm font-medium focus:outline-none focus:border-[#e4572e] transition-all resize-none"
            />
            <button
              type="submit"
              className="btn-brutalist btn-primary w-full justify-center py-2.5 text-base"
            >
              <Send size={16} />
              <span>Kirim ke WhatsApp</span>
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden craft-card relative">
            <iframe 
              title="Lokasi Bandar Lampung"
              src="https://maps.google.com/maps?q=Bandar%20Lampung&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}