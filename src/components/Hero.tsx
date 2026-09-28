import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown, 
  Check, 
  FileText, 
  Truck, 
  RefreshCw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const heroImages = ['/eko-black.jpg', '/eko-white.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 15000); // 15 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden bg-white">
      
      {/* ========================================================================= */}
      {/* DYNAMIC ASYMMETRICAL ORGANIC GREEN BACKGROUND CANVAS (from reference)     */}
      {/* ========================================================================= */}
      {/* Sweeping organic soft green curve occupying the right half and behind hero card */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[48%] h-full bg-[#DCF0DF] rounded-bl-[100px] sm:rounded-bl-[160px] pointer-events-none -z-10 transition-all duration-700"
        style={{
          boxShadow: 'inset 40px -40px 100px rgba(72, 160, 44, 0.06)'
        }}
      />

      {/* Gentle radiant green glow in bottom-left */}
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-gradient-to-tr from-brand-leaf/15 via-emerald-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Animated Floating Organic Green Vector Recycling Arrows in Background */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-16 sm:right-28 w-80 h-80 sm:w-[420px] sm:h-[420px] pointer-events-none -z-10 opacity-[0.22] text-brand-leaf"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current stroke-[3]">
          <path d="M100 20 C135 20 168 45 175 80 L185 70 M175 80 L185 90" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M180 120 C165 160 130 180 90 180 L95 190 M90 180 L100 170" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 140 C15 105 30 55 65 30 L60 18 M65 30 L55 35" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Second Floating Animated Eco Arrow loop */}
      <motion.div
        animate={{ 
          rotate: [360, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          rotate: { duration: 45, repeat: Infinity, ease: 'linear' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute -top-10 right-1/4 w-48 h-48 pointer-events-none -z-10 opacity-[0.18] text-[#38A13D]"
      >
        <RefreshCw className="w-full h-full" strokeWidth={1.5} />
      </motion.div>

      {/* Floating Decorative Green Eco Dot */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 left-[48%] hidden lg:flex w-9 h-9 rounded-full bg-white/90 border border-brand-leaf/30 shadow-md items-center justify-center pointer-events-none -z-10"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-[#38A13D]" />
      </motion.div>

      {/* ========================================================================= */}
      {/* MAIN HERO CONTENT CONTAINER                                               */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: PUNCHY B2B HEADLINE, SUBTITLE & TRUST PILLS              */}
          {/* ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left z-10"
          >
            {/* Top Tag: Location & Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5F2E5] border border-[#CDE5CD] text-[#2F6136] text-xs font-extrabold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#38A13D] animate-ping" />
              <span>{t.hero.locationBadge}</span>
            </div>

            {/* Giant Punchy Headline matching Reference Screenshot */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] font-black text-eco-dark tracking-tight leading-[1.06] mb-6">
              {t.hero.headlineTop}
              <br />
              <span className="text-[#38A13D] block font-black uppercase tracking-tight">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Explanatory B2B Value Proposition */}
            <p className="text-base sm:text-lg text-eco-slate/90 leading-relaxed font-normal mb-8 max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full mb-10">
              {/* Primary Green Pill Button */}
              <button
                onClick={scrollToLeadForm}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-[#38A13D] hover:bg-[#2E8B34] text-white shadow-[0_12px_28px_-6px_rgba(56,161,61,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(56,161,61,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>{t.hero.btnSubmitLead}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button: "Как мы работаем ↓" */}
              <button
                onClick={scrollToProcess}
                className="group inline-flex items-center gap-3 text-eco-dark hover:text-[#38A13D] font-bold text-sm sm:text-base transition-colors py-2"
              >
                <span>{t.hero.btnHowWeWork}</span>
                <div className="w-8 h-8 rounded-full bg-white border border-[#D5E5D8] flex items-center justify-center text-eco-dark group-hover:border-[#38A13D] group-hover:text-[#38A13D] shadow-xs group-hover:translate-y-0.5 transition-all">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </button>
            </div>

            {/* 3 Trust Pills matching Reference Screenshot */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full">
              {/* Pill 1: Все классы опасности */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 border border-[#D5E5D8] text-eco-dark text-xs sm:text-sm font-bold shadow-xs hover:border-[#38A13D] transition-colors">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#38A13D] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span>{t.hero.pillClasses}</span>
              </div>

              {/* Pill 2: Акты утилизации */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 border border-[#D5E5D8] text-eco-dark text-xs sm:text-sm font-bold shadow-xs hover:border-[#38A13D] transition-colors">
                <FileText className="w-4 h-4 text-[#38A13D]" />
                <span>{t.hero.pillActs}</span>
              </div>

              {/* Pill 3: Свой спецтранспорт */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 border border-[#D5E5D8] text-eco-dark text-xs sm:text-sm font-bold shadow-xs hover:border-[#38A13D] transition-colors">
                <Truck className="w-4 h-4 text-[#38A13D]" />
                <span>{t.hero.pillFleet}</span>
              </div>
            </div>
          </motion.div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: BRAND SHOWCASE IMAGE SLIDER (15 SEC ROTATION)           */}
          {/* ===================================================================== */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* The Main Brand Showcase Image Card with 15-second rotation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[540px] aspect-square rounded-[36px] overflow-hidden shadow-[0_30px_70px_-15px_rgba(30,41,34,0.28)] border-4 border-white group bg-[#1E2922]"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroImages[currentImageIndex]}
                  src={heroImages[currentImageIndex]}
                  alt="EKO-PARTNER"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Subtle gradient vignette at bottom of image for cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

              {/* Minimalist interactive indicators for the 15-sec slider */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentImageIndex === idx
                        ? 'w-6 bg-[#38A13D]'
                        : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ===================================================================== */}
        {/* METRICS / STATS COUNTER STRIP                                         */}
        {/* ===================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center shadow-[0_12px_30px_-10px_rgba(77,106,40,0.12)] border border-[#D5E5D8] hover:border-[#38A13D] transition-all duration-300">
            <div className="text-2xl sm:text-4xl font-black text-[#2F6136] tracking-tight mb-1">
              {t.hero.stats.tons.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-eco-muted">
              {t.hero.stats.tons.label}
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center shadow-[0_12px_30px_-10px_rgba(77,106,40,0.12)] border border-[#D5E5D8] hover:border-[#38A13D] transition-all duration-300">
            <div className="text-2xl sm:text-4xl font-black text-[#38A13D] tracking-tight mb-1">
              {t.hero.stats.clients.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-eco-muted">
              {t.hero.stats.clients.label}
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center shadow-[0_12px_30px_-10px_rgba(77,106,40,0.12)] border border-[#D5E5D8] hover:border-[#38A13D] transition-all duration-300">
            <div className="text-2xl sm:text-4xl font-black text-[#2F6136] tracking-tight mb-1">
              {t.hero.stats.speed.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-eco-muted">
              {t.hero.stats.speed.label}
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 text-center shadow-[0_12px_30px_-10px_rgba(77,106,40,0.12)] border border-[#D5E5D8] hover:border-[#38A13D] transition-all duration-300">
            <div className="text-2xl sm:text-4xl font-black text-[#38A13D] tracking-tight mb-1">
              {t.hero.stats.compliance.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-eco-muted">
              {t.hero.stats.compliance.label}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
