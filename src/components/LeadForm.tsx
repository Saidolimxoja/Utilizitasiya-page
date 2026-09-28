import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  User, 
  Phone, 
  Layers, 
  Scale, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Lock,
  Sparkles,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { submitLeadForm } from '../services/api';

interface LeadFormProps {
  initialService?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ initialService }) => {
  const { t } = useLanguage();

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [service, setService] = useState('');
  const [volume, setVolume] = useState('');
  const [notes, setNotes] = useState('');

  // Honeypot field for bot protection (invisible to genuine users)
  const [honeypot, setHoneypot] = useState('');

  // State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      const timer = setTimeout(() => {
        setService(initialService);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [initialService]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam trap: if bot filled this invisible field, pretend success but drop
    if (honeypot.trim() !== '') {
      console.warn('Bot detected via honeypot trap.');
      setShowSuccessModal(true);
      return;
    }

    if (!name.trim() || !phone.trim() || phone.length < 9) {
      setErrorMessage("Iltimos, ismingiz va telefon raqamingizni to'liq kiriting");
      setShowErrorModal(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const response = await submitLeadForm({
      company: company || 'Kompaniya nomi ko\'rsatilmadi',
      name,
      phone,
      wasteType: service || 'Umumiy utilizatsiya maslahati',
      volume: volume || 'Aniqlanmagan hajm',
      notes,
      source: 'Main Page Contact Form',
    });

    setIsSubmitting(false);

    if (response.success) {
      setShowSuccessModal(true);
      // Trigger festive confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#4D6A28', '#48A02C', '#68BA38', '#75CE3E'],
        });
      } catch {
        // fallback
      }
      // Reset form
      setCompany('');
      setName('');
      setPhone('+998 ');
      setService('');
      setVolume('');
      setNotes('');
    } else {
      setErrorMessage(response.message || 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
      setShowErrorModal(true);
    }
  };

  return (
    <section id="lead-form" className="py-24 sm:py-32 relative bg-gradient-to-b from-white via-[#EBF6EE]/60 to-[#DCF0DF]/40 scroll-mt-20 overflow-hidden">
      {/* Organic Curved Green Background Blobs */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#D8EDD8]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#CDE5CD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-olive/10 text-brand-olive text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.leadForm.sectionTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-eco-dark tracking-tight leading-tight mb-4">
              {t.leadForm.title}
            </h2>

            <p className="text-base text-eco-slate/85 mb-8 leading-relaxed">
              {t.leadForm.subtitle}
            </p>

            {/* 3 Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-brand-olive/15 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-brand-olive/10 text-brand-olive flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-olive" />
                </div>
                <div>
                  <span className="text-sm font-bold text-eco-dark block">
                    {t.leadForm.benefit1}
                  </span>
                  <span className="text-xs text-eco-muted">
                    Barcha buxgalteriya va soliq hujjatlari elektron shaklda tasdiqlanadi.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-brand-leaf/20 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-brand-leaf/10 text-brand-leaf flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-brand-leaf" />
                </div>
                <div>
                  <span className="text-sm font-bold text-eco-dark block">
                    {t.leadForm.benefit2}
                  </span>
                  <span className="text-xs text-eco-muted">
                    Ekologik nazorat inspeksiyasi talablariga 100% muvofiq rasmiy aktlar.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-emerald-500/20 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-sm font-bold text-eco-dark block">
                    {t.leadForm.benefit3}
                  </span>
                  <span className="text-xs text-eco-muted">
                    Maxsus germetik idishlar va xavfli yuk tashish litsenziyasi (ADR).
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-eco-muted">
              <Lock className="w-4 h-4 text-brand-leaf" />
              <span>{t.leadForm.privacyNote}</span>
            </div>
          </div>

          {/* Right Column: High Converting Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-brand-olive/20 shadow-levitate relative overflow-hidden"
            >
              {/* Background ambient blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-leaf/10 rounded-full blur-3xl pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                {/* Honeypot hidden input for anti-spam */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_hp">Leave empty</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-eco-dark mb-1.5">
                      Kompaniya / Korxona nomi
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={t.leadForm.companyPlaceholder}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-olive/20 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                      />
                    </div>
                  </div>

                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-xs font-bold text-eco-dark mb-1.5">
                      Mas'ul shaxs ismi *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.leadForm.namePlaceholder}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-olive/20 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-eco-dark mb-1.5">
                      Telefon raqami *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder={t.leadForm.phonePlaceholder}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-olive/20 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf font-medium"
                      />
                    </div>
                  </div>

                  {/* Waste Category Selection */}
                  <div>
                    <label className="block text-xs font-bold text-eco-dark mb-1.5">
                      {t.leadForm.categoryLabel}
                    </label>
                    <div className="relative">
                      <Layers className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full pl-10 pr-8 py-3 rounded-xl border border-brand-olive/20 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf text-eco-dark appearance-none cursor-pointer"
                      >
                        <option value="">{t.leadForm.serviceSelectPlaceholder}</option>
                        {t.leadForm.categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Estimated Volume */}
                <div>
                  <label className="block text-xs font-bold text-eco-dark mb-1.5">
                    Taxminiy hajm yoki og'irlik
                  </label>
                  <div className="relative">
                    <Scale className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder={t.leadForm.volumePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-olive/20 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-eco-dark mb-1.5">
                    Qo'shimcha izohlar
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-eco-muted absolute left-3.5 top-3.5" />
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t.leadForm.notesPlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-olive/20 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#38A13D] hover:bg-[#2E8B34] text-white font-extrabold text-base shadow-[0_12px_28px_-6px_rgba(56,161,61,0.45)] hover:shadow-[0_16px_36px_-6px_rgba(56,161,61,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t.leadForm.btnSubmitting}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.leadForm.btnSubmit}</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-eco-dark/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-brand-olive/20 text-center relative"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-eco-surface hover:bg-eco-border text-eco-slate flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-brand-leaf/15 text-brand-leaf flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-eco-dark mb-2">
                {t.leadForm.successModal.title}
              </h3>

              <p className="text-sm text-eco-muted leading-relaxed mb-4">
                {t.leadForm.successModal.desc}
              </p>

              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-800 font-medium mb-6">
                {t.leadForm.successModal.telegramNotifyNote}
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3.5 rounded-xl bg-brand-olive text-white font-bold text-sm hover:bg-brand-olive-dark transition-colors shadow-md"
              >
                {t.leadForm.successModal.buttonClose}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Error Fallback Modal */}
      <AnimatePresence>
        {showErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-eco-dark/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-rose-200 text-center relative"
            >
              <button
                onClick={() => setShowErrorModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-eco-surface hover:bg-eco-border text-eco-slate flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-10 h-10" />
              </div>

              <h3 className="text-xl font-extrabold text-eco-dark mb-2">
                {t.leadForm.errorModal.title}
              </h3>

              <p className="text-sm text-eco-muted leading-relaxed mb-6">
                {errorMessage || t.leadForm.errorModal.desc}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowErrorModal(false)}
                  className="flex-1 py-3 rounded-xl bg-eco-surface font-bold text-xs text-eco-dark hover:bg-eco-border"
                >
                  Yopish
                </button>
                <button
                  onClick={() => {
                    setShowErrorModal(false);
                    const el = document.getElementById('lead-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 py-3 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700"
                >
                  {t.leadForm.errorModal.buttonRetry}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
