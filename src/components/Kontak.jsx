import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Kontak({ fadeInUpVariants }) {
  return (
    <motion.section 
      id="kontak" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUpVariants}
      className="py-20 px-4 sm:px-8 max-w-4xl mx-auto border-t border-slate-700/20 scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 data-section="04" className="text-2xl sm:text-3xl font-extrabold tracking-tight border-b-4 border-[#e4572e] inline-block pb-2">Mari Terhubung</h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Saya terbuka untuk program magang koding, kerja sama tim, ataupun diskusi proyek baru. Silakan hubungi saya melalui:
          </p>
          
          <div className="space-y-3 pt-2">
            <a href="mailto:gedegaga28@gmail.com" className="flex items-center gap-4 transition-colors w-fit p-2 rounded-xl text-slate-300 hover:text-blue-400 hover:bg-slate-800/50">
              <Mail className="text-blue-500 shrink-0" size={20} /> <span className="text-xs sm:text-sm md:text-base font-medium break-all">gedegaga28@gmail.com</span>
            </a>
            <a href="https://wa.me/6282184633934" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 transition-colors w-fit p-2 rounded-xl text-slate-300 hover:text-green-400 hover:bg-slate-800/50">
              <Phone className="text-blue-500 shrink-0" size={20} /> <span className="text-xs sm:text-sm md:text-base font-medium">0821-8463-3934</span>
            </a>
            <div className="flex items-center gap-4 p-2 text-slate-400">
              <MapPin className="text-blue-500 shrink-0" size={20} /> <span className="text-xs sm:text-sm md:text-base font-medium">Bandar Lampung, Lampung</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/20">
          <iframe 
            title="Lokasi Bandar Lampung"
            src="https://maps.google.com/maps?q=Bandar%20Lampung&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
}