import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ArrowRight, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../translations';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'EN' },
  ];

  const navLinks = [
    { href: '#services', label: t.nav.services, hasTruck: true },
    { href: '#partners', label: t.nav.partners },
    { href: '#process', label: t.nav.process },
    { href: '#licenses', label: t.nav.licenses },
    { href: '#contacts', label: t.nav.contacts },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-2xl lg:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
            isScrolled
              ? 'bg-white/95 shadow-[0_16px_35px_-10px_rgba(77,106,40,0.18)] border border-brand-olive/15 backdrop-blur-xl'
              : 'bg-white/90 shadow-[0_10px_25px_-10px_rgba(77,106,40,0.12)] border border-brand-olive/10 backdrop-blur-md'
          }`}
        >
          {/* Official Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="EKO-PARTNER"
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] font-extrabold tracking-widest text-[#2F6136] bg-[#E5F2E5] px-2 py-0.5 rounded-md border border-[#CDE5CD]">
                TASHKENT · UZBEKISTAN
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="relative px-3.5 py-2 rounded-full text-xs xl:text-sm font-bold text-eco-slate hover:text-[#38A13D] hover:bg-emerald-50/60 transition-all duration-200 flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.hasTruck && (
                  <span className="text-[#38A13D] inline-flex items-center" title="ADR Fleet">
                    <Truck className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Right Action Elements: Segmented Language Switcher + CTA Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Language Switcher Pill (Matching Reference Design) */}
            <div className="flex items-center bg-[#F1F5F2] rounded-full p-1 border border-brand-olive/10 shadow-inner">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-black rounded-full transition-all duration-200 ${
                    lang === l.code
                      ? 'bg-[#38A13D] text-white shadow-xs'
                      : 'text-eco-muted hover:text-eco-dark hover:bg-black/5'
                  }`}
                  aria-label={`Switch language to ${l.label}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Direct Phone Call Button (Desktop) */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/70 border border-emerald-100/80">
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-[#38A13D] shrink-0">
                <Phone className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col text-[11px] leading-tight font-extrabold">
                <a
                  href="tel:+998994085111"
                  className="text-eco-dark hover:text-[#38A13D] transition-colors whitespace-nowrap"
                  title="Qo'ng'iroq qilish: +998 99 408-51-11"
                >
                  {t.nav.callNow}
                </a>
                <a
                  href="tel:+998977014466"
                  className="text-eco-muted hover:text-[#38A13D] transition-colors whitespace-nowrap text-[10px]"
                  title="Qo'ng'iroq qilish: +998 97 701-44-66"
                >
                  {t.nav.callNow2}
                </a>
              </div>
            </div>

            {/* Green Pill CTA Button: "Оставить заявку →" (Matching Reference Design) */}
            <button
              onClick={scrollToLeadForm}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#38A13D] hover:bg-[#2E8B34] text-white shadow-md shadow-[#38A13D]/25 hover:shadow-lg hover:shadow-[#38A13D]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>{t.hero.btnSubmitLead}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-eco-dark hover:bg-emerald-50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 p-5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-brand-olive/15 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="px-4 py-2.5 rounded-xl text-sm font-bold text-eco-dark hover:bg-emerald-50 hover:text-[#38A13D] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}

                <div className="pt-3 border-t border-eco-border flex flex-col gap-2">
                  <a
                    href="tel:+998994085111"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-eco-surface hover:bg-emerald-50 hover:text-[#38A13D] font-bold text-sm text-eco-dark transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#38A13D]" />
                    <span>{t.nav.callNow}</span>
                  </a>

                  <a
                    href="tel:+998977014466"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-eco-surface hover:bg-emerald-50 hover:text-[#38A13D] font-bold text-sm text-eco-dark transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#38A13D]" />
                    <span>{t.nav.callNow2}</span>
                  </a>

                  <button
                    onClick={scrollToLeadForm}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#38A13D] text-white font-bold text-sm shadow-md"
                  >
                    <span>{t.hero.btnSubmitLead}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
