import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ZoomIn, 
  X, 
  Award, 
  Lock, 
  CheckCircle2, 
  Calendar, 
  Building,
  Download,
  ExternalLink,
  FileCheck2,
  QrCode
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { LicenseItem } from '../translations';

export const Licenses: React.FC = () => {
  const { t } = useLanguage();
  const [activeCert, setActiveCert] = useState<LicenseItem | null>(null);

  return (
    <section id="licenses" className="py-20 sm:py-28 relative bg-eco-surface/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-olive/10 text-brand-olive text-xs font-extrabold uppercase tracking-wider mb-3.5 shadow-xs">
            <Award className="w-4 h-4 text-[#38A13D]" />
            <span>{t.licenses.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-eco-dark tracking-tight mb-4 leading-tight">
            {t.licenses.title}
          </h2>

          <p className="text-sm sm:text-base text-eco-slate/85 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.licenses.subtitle}
          </p>
        </div>

        {/* Security / Watermark Notice Pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 border border-brand-olive/20 text-xs font-semibold text-eco-slate shadow-sm">
            <Lock className="w-4 h-4 text-[#38A13D]" />
            <span>{t.licenses.antiTheftProtected}</span>
          </div>
        </div>

        {/* 3 Real Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {t.licenses.items.map((license, idx) => (
            <motion.div
              key={license.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl p-5 sm:p-6 border border-brand-olive/15 shadow-[0_12px_35px_-10px_rgba(77,106,40,0.12)] hover:border-[#38A13D]/40 hover:shadow-[0_20px_45px_-15px_rgba(56,161,61,0.2)] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              onClick={() => setActiveCert(license)}
            >
              <div>
                {/* Visual Real Document Preview Frame */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border-2 border-stone-200/90 group-hover:border-[#38A13D]/50 transition-colors shadow-md mb-5">
                  {/* Real Scanned Document Image */}
                  <img
                    src={license.image}
                    alt={license.title}
                    className="w-full h-full object-cover object-top filter contrast-[1.01] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Anti-Theft Watermark Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.18] rotate-[-30deg] select-none text-center px-4">
                    <span className="text-xs sm:text-sm font-black text-brand-olive tracking-widest uppercase">
                      {t.licenses.watermarkText}
                    </span>
                  </div>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-extrabold text-[#2F6136] shadow-sm border border-emerald-100">
                      <ShieldCheck className="w-3 h-3 text-[#38A13D]" />
                      <span>{license.badge}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-eco-dark/80 backdrop-blur-md text-[10px] font-bold text-white shadow-sm">
                      <QrCode className="w-3 h-3 text-emerald-400" />
                      <span>QR</span>
                    </span>
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-brand-olive/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-extrabold text-xs backdrop-blur-[2px] z-20">
                    <div className="w-11 h-11 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <span>{t.licenses.clickToZoom}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-black text-eco-dark mb-1.5 group-hover:text-[#2E8B34] transition-colors leading-snug">
                  {license.title}
                </h3>

                {/* Issuing Authority */}
                <div className="flex items-center gap-1.5 text-xs text-eco-slate/90 font-medium mb-3">
                  <Building className="w-3.5 h-3.5 text-[#38A13D] shrink-0" />
                  <span className="line-clamp-1">{license.authority}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-eco-muted leading-relaxed line-clamp-3 mb-4 font-normal">
                  {license.description}
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="border-t border-eco-border/80 pt-3 mt-auto flex items-center justify-between text-xs">
                <span className="font-mono text-[#2F6136] font-extrabold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  {license.regNumber}
                </span>
                <span className="text-[11px] font-bold text-[#38A13D]">
                  {license.validity}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* High-Resolution Document Inspection Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-eco-dark/80 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl border border-brand-olive/20 max-h-[92vh] flex flex-col overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="px-6 py-4 border-b border-eco-border flex items-center justify-between bg-stone-50/70">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#2F6136] uppercase tracking-wider flex items-center gap-1.5 bg-[#E5F2E5] px-3 py-1 rounded-full border border-[#CDE5CD]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38A13D]" />
                    {t.licenses.verifiedDocument}
                  </span>
                  <span className="hidden sm:inline-block font-mono text-xs font-bold text-eco-slate bg-white px-2.5 py-1 rounded-full border border-eco-border">
                    {activeCert.regNumber}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-stone-200 text-eco-slate flex items-center justify-center transition-colors border border-eco-border shadow-xs"
                  aria-label="Close document inspection"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: 2 Columns on Large Screens */}
              <div className="p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left: High-Resolution Document Canvas (Col span 7) */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-white border-4 border-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)]">
                    
                    {/* The Full Scanned Document */}
                    <img
                      src={activeCert.image}
                      alt={activeCert.title}
                      className="w-full h-auto max-h-[68vh] object-contain mx-auto select-none"
                    />

                    {/* Translucent Anti-Theft Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.14] rotate-[-30deg] select-none text-center px-4">
                      <span className="text-base sm:text-xl font-black text-brand-olive tracking-widest uppercase">
                        {t.licenses.watermarkText}
                      </span>
                    </div>
                  </div>

                  {/* Actions under image */}
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-4 w-full">
                    <a
                      href={activeCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 text-eco-dark transition-colors border border-stone-300/70 shadow-2xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.licenses.viewOriginal}</span>
                    </a>

                    {activeCert.pdfDownload && (
                      <a
                        href={activeCert.pdfDownload}
                        download="Litsenziya-Eko-Partner-2025.pdf"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-[#38A13D] hover:bg-[#2E8B34] text-white shadow-md shadow-[#38A13D]/25 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{t.licenses.downloadPdf}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Verified Metadata & Details Panel (Col span 5) */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#F7FAF8] rounded-2xl p-5 sm:p-6 border border-brand-olive/15">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E5F2E5] text-[#2F6136] text-[11px] font-extrabold uppercase tracking-wide mb-3">
                      <Award className="w-3.5 h-3.5 text-[#38A13D]" />
                      <span>{activeCert.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-eco-dark mb-3 leading-snug">
                      {activeCert.title}
                    </h3>

                    {/* Registration Tag */}
                    <div className="font-mono text-xs font-black text-[#2F6136] bg-white px-3 py-1.5 rounded-lg border border-emerald-200 inline-block mb-4 shadow-2xs">
                      {activeCert.regNumber}
                    </div>

                    {/* Authority */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-eco-muted block mb-1">
                        Bergan davlat organi / Tashkilot
                      </span>
                      <div className="flex items-start gap-2 text-xs font-semibold text-eco-slate">
                        <Building className="w-4 h-4 text-[#38A13D] shrink-0 mt-0.5" />
                        <span>{activeCert.authority}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-eco-muted block mb-1">
                        Hujjat mazmuni va vakolati
                      </span>
                      <p className="text-xs sm:text-sm text-eco-slate/90 leading-relaxed font-normal bg-white p-3.5 rounded-xl border border-eco-border">
                        {activeCert.description}
                      </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-olive/15 mb-4 text-xs">
                      <div className="bg-white p-2.5 rounded-lg border border-eco-border">
                        <span className="text-[10px] text-eco-muted block font-medium">Sana:</span>
                        <div className="flex items-center gap-1 font-bold text-eco-dark mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-[#38A13D]" />
                          <span>{activeCert.issueDate}</span>
                        </div>
                      </div>

                      <div className="bg-white p-2.5 rounded-lg border border-eco-border">
                        <span className="text-[10px] text-eco-muted block font-medium">Amal qilish:</span>
                        <div className="flex items-center gap-1 font-bold text-[#2F6136] mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38A13D]" />
                          <span>{activeCert.validity}</span>
                        </div>
                      </div>
                    </div>

                    {/* Trust notice */}
                    <div className="p-3 rounded-xl bg-emerald-100/50 border border-emerald-200/80 text-[11px] text-[#2F6136] flex items-start gap-2">
                      <FileCheck2 className="w-4 h-4 text-[#38A13D] shrink-0 mt-0.5" />
                      <span>
                        Hujjat haqiqiyligi davlat organlari va QR-kod orqali tasdiqlangan. Barcha shartnomalar Didox orqali tuziladi.
                      </span>
                    </div>
                  </div>

                  {/* Modal Footer Buttons */}
                  <div className="pt-5 mt-4 border-t border-brand-olive/15 flex items-center justify-end gap-3">
                    <button
                      onClick={() => setActiveCert(null)}
                      className="px-5 py-2.5 rounded-xl bg-eco-dark hover:bg-black text-white font-extrabold text-xs transition-colors"
                    >
                      {t.licenses.closeModal}
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
