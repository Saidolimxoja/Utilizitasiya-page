import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck, 
  FileText, 
  Truck, 
  FileCheck2, 
  Clock, 
  CheckCircle 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProcessFlow: React.FC = () => {
  const { t } = useLanguage();

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardCheck className="w-6 h-6 text-brand-olive" />;
      case 1:
        return <FileText className="w-6 h-6 text-brand-leaf" />;
      case 2:
        return <Truck className="w-6 h-6 text-emerald-600" />;
      case 3:
        return <FileCheck2 className="w-6 h-6 text-teal-600" />;
      default:
        return <CheckCircle className="w-6 h-6 text-brand-olive" />;
    }
  };

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-gradient-to-b from-white via-[#EAF5EC]/60 to-[#F4F9F5] scroll-mt-20 overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-80 bg-[#D8EDD8]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-leaf/10 text-brand-leaf text-xs font-extrabold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.process.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-eco-dark tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-base sm:text-lg text-eco-slate/80 leading-relaxed font-normal">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.process.steps.map((step, index) => (
            <motion.div
              key={step.step}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-eco-bg rounded-3xl p-6 sm:p-7 border border-brand-olive/15 shadow-[0_15px_35px_-12px_rgba(77,106,40,0.1)] hover:shadow-levitate-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step indicator and Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-brand-olive/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(index)}
                  </div>
                  <span className="text-2xl font-black text-brand-olive/30 group-hover:text-brand-olive transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-eco-dark text-[11px] font-bold border border-brand-olive/15 mb-4">
                  <Clock className="w-3 h-3 text-brand-leaf" />
                  <span>{step.duration}</span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-extrabold text-eco-dark mb-2.5 group-hover:text-brand-olive transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-eco-muted leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Highlight */}
              <div className="pt-4 border-t border-eco-border mt-auto">
                <span className="text-xs font-bold text-brand-leaf flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{step.highlight}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Banner at bottom */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-olive to-brand-olive-dark text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-levitate">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold mb-1">
              Didox orqali 24 soat ichida rasmiy hujjatlar taqdim etiladi
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              Qonuniy talablarga 100% muvofiqlik va davlat ekonazorati oldidagi to'liq xavfsizlik kafolati.
            </p>
          </div>
          <a
            href="#lead-form"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-white text-brand-olive font-extrabold text-xs sm:text-sm hover:bg-brand-leaf-light hover:text-white transition-all shadow-md"
          >
            Arizani rasmiylashtirish
          </a>
        </div>

      </div>
    </section>
  );
};
