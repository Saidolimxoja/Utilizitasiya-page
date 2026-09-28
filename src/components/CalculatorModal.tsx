import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  User, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { submitLeadForm } from '../services/api';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  isInlineSection?: boolean;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({ 
  isOpen, 
  onClose,
  isInlineSection = false 
}) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form state
  const [selectedType, setSelectedType] = useState<string>('industrial');
  const [volume, setVolume] = useState<number>(500);
  const [unit, setUnit] = useState<'kg' | 'tons' | 'm3'>('kg');
  const [frequency, setFrequency] = useState<'oneTime' | 'monthly' | 'contract'>('oneTime');

  // Contact details
  const [company, setCompany] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('+998 ');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const wasteOptions = [
    { id: 'medical', label: t.calculator.wasteTypes.medical, baseRate: 14000 },
    { id: 'industrial', label: t.calculator.wasteTypes.industrial, baseRate: 6500 },
    { id: 'chemical', label: t.calculator.wasteTypes.chemical, baseRate: 18000 },
    { id: 'expired', label: t.calculator.wasteTypes.expired, baseRate: 8500 },
    { id: 'mercury', label: t.calculator.wasteTypes.mercury, baseRate: 22000 },
    { id: 'construction', label: t.calculator.wasteTypes.construction, baseRate: 4500 },
  ];

  // Price estimate algorithm
  const calculateEstimatedPrice = () => {
    const selected = wasteOptions.find(w => w.id === selectedType) || wasteOptions[0];
    let multiplier = 1;
    if (unit === 'tons') multiplier = 1000;
    if (unit === 'm3') multiplier = 600; // estimated bulk density conversion

    const totalWeightKg = volume * multiplier;
    let base = totalWeightKg * selected.baseRate;

    // Volume discount
    if (totalWeightKg > 5000) base *= 0.85;
    else if (totalWeightKg > 1500) base *= 0.92;

    // Frequency discount
    if (frequency === 'monthly') base *= 0.90;
    if (frequency === 'contract') base *= 0.80;

    const minPrice = Math.round((base * 0.9) / 50000) * 50000;
    const maxPrice = Math.round((base * 1.15) / 50000) * 50000;

    return {
      formattedMin: minPrice.toLocaleString('uz-UZ'),
      formattedMax: maxPrice.toLocaleString('uz-UZ'),
    };
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith('+998')) {
      val = '+998 ';
    }
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || phone.length < 9) {
      setErrorMessage("Iltimos, ismingiz va telefon raqamingizni to'liq kiriting");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const typeObj = wasteOptions.find(w => w.id === selectedType);
    const estimate = calculateEstimatedPrice();

    const response = await submitLeadForm({
      name,
      company: company || 'Kompaniya ko\'rsatilmadi',
      phone,
      wasteType: typeObj ? typeObj.label : selectedType,
      volume: `${volume} ${unit} (${frequency})`,
      notes: `Kalkulyator orqali hisoblangan byudjet: ${estimate.formattedMin} - ${estimate.formattedMax} UZS`,
      source: 'Interactive Calculator Quiz',
    });

    setIsSubmitting(false);

    if (response.success) {
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4D6A28', '#48A02C', '#68BA38', '#75CE3E'],
        });
      } catch {
        // confetti fallback
      }
    } else {
      setErrorMessage(response.message || 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
    }
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  const renderContent = () => (
    <div className="flex flex-col h-full">
      {/* Quiz Progress Stepper */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-eco-muted uppercase tracking-wider">
            {step === 1 && t.calculator.step1Title}
            {step === 2 && t.calculator.step2Title}
            {step === 3 && t.calculator.step3Title}
          </span>
          <span className="text-xs font-extrabold text-brand-olive bg-brand-olive/10 px-2.5 py-0.5 rounded-full">
            {step} / 3
          </span>
        </div>
        <div className="w-full bg-eco-surface rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-brand-olive to-brand-leaf h-2 transition-all duration-300 rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Submitted Success Screen */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 px-4 flex flex-col items-center justify-center my-auto"
        >
          <div className="w-16 h-16 rounded-full bg-brand-leaf/15 text-brand-leaf flex items-center justify-center mb-5">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-extrabold text-eco-dark mb-2">
            {t.leadForm.successModal.title}
          </h3>
          <p className="text-sm text-eco-muted max-w-md mb-6 leading-relaxed">
            {t.leadForm.successModal.desc}
          </p>
          <div className="p-4 rounded-2xl bg-eco-surface border border-brand-olive/15 mb-6 text-xs text-eco-slate max-w-sm text-left">
            <div className="font-bold text-eco-dark mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-leaf" />
              <span>{t.calculator.calculatedEstimate}</span>
            </div>
            <div className="text-base font-extrabold text-brand-olive">
              {calculateEstimatedPrice().formattedMin} – {calculateEstimatedPrice().formattedMax} UZS
            </div>
          </div>
          <button
            onClick={resetForm}
            className="px-8 py-3.5 rounded-xl bg-brand-olive text-white font-bold text-sm shadow-md hover:bg-brand-olive-dark transition-colors"
          >
            {t.leadForm.successModal.buttonClose}
          </button>
        </motion.div>
      ) : (
        <div className="flex-1 flex flex-col justify-between">
          {/* STEP 1: Select Waste Category */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <p className="text-xs sm:text-sm text-eco-muted">
                {t.calculator.step1Desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {wasteOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedType(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      selectedType === opt.id
                        ? 'border-brand-leaf bg-brand-leaf/10 shadow-sm ring-2 ring-brand-leaf/30'
                        : 'border-brand-olive/15 bg-white hover:bg-eco-surface'
                    }`}
                  >
                    <span className="text-sm font-bold text-eco-dark mb-2">
                      {opt.label}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-olive">
                      I-IV toifalar doirasida
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Volume & Frequency */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <p className="text-xs sm:text-sm text-eco-muted">
                {t.calculator.step2Desc}
              </p>

              {/* Unit Selector */}
              <div>
                <label className="text-xs font-bold text-eco-dark block mb-2">
                  O'lchov birligi:
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'kg', label: t.calculator.unitKg },
                    { id: 'tons', label: t.calculator.unitTons },
                    { id: 'm3', label: t.calculator.unitCubic },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUnit(u.id as any)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                        unit === u.id
                          ? 'bg-brand-olive text-white border-brand-olive'
                          : 'bg-white text-eco-slate border-brand-olive/20 hover:bg-eco-surface'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for volume */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-eco-dark">
                    {t.calculator.volumeLabel}
                  </label>
                  <span className="text-base font-extrabold text-brand-olive">
                    {volume} {unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={unit === 'tons' ? 1 : 50}
                  max={unit === 'tons' ? 100 : 5000}
                  step={unit === 'tons' ? 1 : 50}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-brand-leaf cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-eco-muted mt-1">
                  <span>{unit === 'tons' ? '1 t' : '50 kg'}</span>
                  <span>{unit === 'tons' ? '50 t' : '2 500 kg'}</span>
                  <span>{unit === 'tons' ? '100 t' : '5 000 kg'}</span>
                </div>
              </div>

              {/* Frequency selection */}
              <div>
                <label className="text-xs font-bold text-eco-dark block mb-2">
                  Chiqindi olib ketish davriyligi:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'oneTime', label: t.calculator.frequencyOneTime },
                    { id: 'monthly', label: t.calculator.frequencyMonthly },
                    { id: 'contract', label: t.calculator.frequencyContract },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFrequency(f.id as any)}
                      className={`p-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                        frequency === f.id
                          ? 'bg-brand-leaf/15 border-brand-leaf text-brand-olive font-bold'
                          : 'bg-white border-brand-olive/15 text-eco-slate hover:bg-eco-surface'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Estimate Preview */}
              <div className="p-4 rounded-2xl bg-eco-surface/90 border border-brand-olive/15">
                <span className="text-xs font-semibold text-eco-muted block mb-1">
                  {t.calculator.calculatedEstimate}
                </span>
                <span className="text-xl font-extrabold text-brand-olive">
                  {calculateEstimatedPrice().formattedMin} – {calculateEstimatedPrice().formattedMax} UZS
                </span>
                <p className="text-[10px] text-eco-muted mt-1 leading-normal">
                  {t.calculator.estimateNote}
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Company Details & Submit */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <p className="text-xs sm:text-sm text-eco-muted">
                {t.calculator.step3Desc}
              </p>

              {/* Summary Pill */}
              <div className="p-3.5 rounded-2xl bg-brand-olive/5 border border-brand-olive/15 flex items-center justify-between text-xs">
                <div>
                  <span className="text-eco-muted block">{t.calculator.quickSummary}</span>
                  <span className="font-bold text-eco-dark">
                    {volume} {unit} • {wasteOptions.find(w => w.id === selectedType)?.label.split('(')[0]}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-eco-muted block">Taxminiy smeta:</span>
                  <span className="font-extrabold text-brand-olive text-sm">
                    {calculateEstimatedPrice().formattedMin} UZS
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-eco-dark block mb-1">
                    {t.calculator.companyLabel}
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Masalan: 'Toshkent Farm Zavodi' MChJ"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-olive/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-eco-dark block mb-1">
                    {t.calculator.nameLabel} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ismingiz va lavozimingiz"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-olive/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-eco-dark block mb-1">
                    {t.calculator.phoneLabel} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-eco-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="+998 (90) 123-45-67"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-olive/20 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-leaf"
                    />
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-olive to-brand-leaf text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.calculator.btnCalculating}</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>{t.calculator.btnSubmit}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="pt-6 mt-6 border-t border-eco-border flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => (s - 1) as any)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-eco-slate hover:bg-eco-surface flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.calculator.btnBack}</span>
              </button>
            ) : <div />}

            {step < 3 && (
              <button
                type="button"
                onClick={() => setStep((s) => (s + 1) as any)}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-olive text-white hover:bg-brand-olive-dark flex items-center gap-1.5 transition-colors shadow-sm ml-auto"
              >
                <span>{t.calculator.btnNext}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // If used as an embedded inline section on page
  if (isInlineSection) {
    return (
      <section id="calculator" className="py-24 sm:py-32 relative bg-gradient-to-b from-[#F4F9F5] via-[#EAF5EC] to-white scroll-mt-20 overflow-hidden">
        {/* Soft Organic Green Ambient Glows */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#D8EDD8]/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#CDE5CD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F2E5] border border-[#CDE5CD] text-[#2F6136] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
              <Calculator className="w-3.5 h-3.5 text-[#38A13D]" />
              <span>{t.calculator.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-eco-dark tracking-tight mb-4">
              {t.calculator.title}
            </h2>
            <p className="text-base text-eco-slate/85 max-w-2xl mx-auto leading-relaxed">
              {t.calculator.subtitle}
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-6 sm:p-10 border border-[#D5E5D8] shadow-[0_25px_60px_-15px_rgba(72,160,44,0.18)]">
            {renderContent()}
          </div>
        </div>
      </section>
    );
  }

  // If used as a popup Modal
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-eco-dark/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brand-olive/20 max-h-[92vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-eco-surface hover:bg-eco-border text-eco-slate flex items-center justify-center transition-colors"
              aria-label="Close calculator"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 pr-8">
              <div className="w-10 h-10 rounded-xl bg-brand-olive/10 text-brand-olive flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-eco-dark">
                  {t.calculator.modalTitle}
                </h3>
                <p className="text-xs text-eco-muted">
                  {t.calculator.subtitle}
                </p>
              </div>
            </div>

            {renderContent()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
