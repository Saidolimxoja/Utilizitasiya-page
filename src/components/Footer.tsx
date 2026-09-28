import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  FileCheck2,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="relative bg-eco-dark text-white pt-20 pb-12 overflow-hidden">
      {/* Decorative gradient light in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-olive/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">

          {/* Col 1: Brand & Identity (span 4) */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-4 group focus:outline-none">
              <div className="bg-white/95 rounded-2xl p-1.5 shadow-md flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="EKO-PARTNER"
                  className="h-11 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold tracking-widest text-emerald-300 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  TASHKENT · UZBEKISTAN
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 max-w-sm">
              {t.footer.about}
            </p>

            {/* License Pill */}
          </div>

          {/* Col 2: Quick Links (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li>
                <a href="#services" className="hover:text-brand-leaf-light transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-brand-leaf-light transition-colors">
                  {t.nav.partners}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-leaf-light transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#licenses" className="hover:text-brand-leaf-light transition-colors">
                  {t.nav.licenses}
                </a>
              </li>
              <li>
                <a href="#lead-form" className="hover:text-brand-leaf-light transition-colors">
                  {t.nav.requestOffer}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts & Address (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-300">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-leaf-light flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-stone-400 block">{t.footer.addressLabel}</span>
                  <a
                    href="https://maps.google.com/?q=Tashkent,+Yashnabad,+Muynakskaya+241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {t.footer.addressVal}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-leaf-light flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-stone-400 block">{t.footer.phoneLabel}</span>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a href="tel:+998994085111" className="font-bold text-white hover:text-brand-leaf-light transition-colors">
                      +998 99 408-51-11
                    </a>
                    <a href="tel:+998977014466" className="font-bold text-white hover:text-brand-leaf-light transition-colors">
                      +998 97 701-44-66
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-leaf-light flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-stone-400 block">{t.footer.emailLabel}</span>
                  <a href="mailto:ekopartner.uz@gmail.com" className="hover:text-white transition-colors">
                    ekopartner.uz@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Telegram & Working Schedule (span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white mb-4">
              {t.footer.workingHoursLabel}
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-stone-300 mb-5">
              <Clock className="w-4 h-4 text-brand-leaf-light flex-shrink-0 mt-0.5" />
              <span>{t.footer.workingHoursVal}</span>
            </div>

            {/* Telegram Direct Action Button */}
            <a
              href="https://t.me/Saidkhoja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30 hover:bg-sky-500 hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm mb-4"
            >
              <Send className="w-4 h-4" />
              <span>Telegram: Saidkhoja</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto" />
            </a>

            {/* Didox Badge */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-[11px] text-stone-300">
              <FileCheck2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{t.footer.didoxNotice}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© 2026 EKO-PARTNER LLC. {t.footer.allRightsReserved}</span>
          </div>

          <div className="text-center sm:text-right text-[11px]">
            {t.footer.uzbekistanEcoRegistry}
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-olive text-white flex items-center justify-center transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
