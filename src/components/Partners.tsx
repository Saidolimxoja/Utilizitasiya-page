import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Partners: React.FC = () => {
  const { t } = useLanguage();

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partners" className="py-20 sm:py-28 relative bg-[#F7FAF8] scroll-mt-20 overflow-hidden">
      {/* Subtle organic background blur spheres */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#E3EFE5]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#EAF5EC]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2E5] border border-[#CDE5CD] text-[#2F6136] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-[#38A13D]" />
            <span>{t.partners.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-eco-dark tracking-tight mb-4 leading-tight">
            {t.partners.title}
          </h2>

          <p className="text-sm sm:text-base text-eco-slate/85 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        {/* 6-Card Trust Bento Grid (Symmetric 3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-14">
          {t.partners.items.map((partner, index) => {
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_35px_-10px_rgba(30,41,34,0.08)] border border-brand-olive/10 hover:border-[#38A13D]/40 hover:shadow-[0_20px_45px_-15px_rgba(56,161,61,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38A13D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Logo & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    {/* Logo container */}
                    <div className="w-20 h-20 rounded-2xl bg-[#F7FAF8] border border-eco-border/80 flex items-center justify-center p-2.5 shadow-inner group-hover:scale-105 group-hover:border-[#38A13D]/30 transition-all duration-300">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-14 max-w-full object-contain filter drop-shadow-xs"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                        loading="lazy"
                      />
                    </div>

                    {/* Category pill */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2F6136] bg-[#E5F2E5] px-2.5 py-1 rounded-full border border-[#CDE5CD]/80 shadow-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#38A13D]" />
                        <span>{partner.badge}</span>
                      </span>
                    </div>
                  </div>

                  {/* Partner Name */}
                  <h3 className="text-lg sm:text-xl font-black text-eco-dark group-hover:text-[#2E8B34] transition-colors mb-1.5 leading-snug">
                    {partner.name}
                  </h3>

                  {/* Sub-label / Department category */}
                  <p className="text-xs font-bold text-[#38A13D] mb-3">
                    {partner.category}
                  </p>

                  {/* Scope of partnership description */}
                  <p className="text-xs sm:text-sm text-eco-slate/85 leading-relaxed mb-6 font-normal">
                    {partner.description}
                  </p>
                </div>

                {/* Footer of Card: Official Contract Verification Badge */}
                <div className="pt-4 border-t border-eco-border/70 flex items-center justify-between text-xs text-eco-muted font-medium">
                  <div className="flex items-center gap-1.5 text-[#2F6136]">
                    <ShieldCheck className="w-4 h-4 text-[#38A13D] shrink-0" />
                    <span className="text-[11px] font-semibold">{t.partners.verifiedPartner}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Call-To-Action Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-eco-dark via-[#213526] to-[#1b2b1f] text-white shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle light effect in background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38A13D]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl text-center md:text-left relative z-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-300 block mb-1">
              {t.partners.bannerTag}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
              {t.partners.bannerTitle}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {t.partners.bannerDesc}
            </p>
          </div>

          <button
            onClick={scrollToLeadForm}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-extrabold text-xs sm:text-sm bg-[#38A13D] hover:bg-[#2E8B34] text-white shadow-lg shadow-[#38A13D]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 relative z-10"
          >
            <span>{t.hero.btnSubmitLead}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
