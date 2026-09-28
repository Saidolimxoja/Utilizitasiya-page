import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Laptop, 
  Monitor, 
  Printer, 
  Server, 
  Cpu, 
  ArrowUpRight, 
  ShieldCheck,
  Check, 
  X,
  FileSpreadsheet
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { ServiceItem } from '../translations';

interface ServicesBentoProps {
  onSelectServiceForLead?: (serviceName: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectServiceForLead }) => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'it-equipment':
        return <Laptop className="w-6 h-6 text-emerald-600" />;
      case 'monitors-displays':
        return <Monitor className="w-6 h-6 text-blue-600" />;
      case 'printing-copying':
        return <Printer className="w-6 h-6 text-amber-600" />;
      case 'network-power-furniture':
        return <Server className="w-6 h-6 text-indigo-600" />;
      case 'special-tech-waste':
        return <Cpu className="w-6 h-6 text-teal-600" />;
      default:
        return <Laptop className="w-6 h-6 text-brand-leaf" />;
    }
  };

  const getCardLayoutClass = (index: number) => {
    // Bento grid layout distribution for 5 items:
    // First row: 2 items (span 7 and span 5)
    // Second row: 3 items (span 4, span 4, span 4)
    switch (index) {
      case 0:
        return 'lg:col-span-7 bg-gradient-to-br from-white via-white to-emerald-50/40';
      case 1:
        return 'lg:col-span-5 bg-gradient-to-br from-white via-white to-blue-50/40';
      case 2:
        return 'lg:col-span-4 bg-gradient-to-br from-white via-white to-amber-50/40';
      case 3:
        return 'lg:col-span-4 bg-gradient-to-br from-white via-white to-indigo-50/40';
      case 4:
        return 'lg:col-span-4 bg-gradient-to-br from-white via-white to-teal-50/40';
      default:
        return 'lg:col-span-6 bg-white';
    }
  };

  const handleServiceOrder = (service: ServiceItem) => {
    if (onSelectServiceForLead) {
      onSelectServiceForLead(service.title);
    }
    setSelectedService(null);
    const element = document.getElementById('lead-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-gradient-to-b from-[#F4F9F5] via-white to-[#F4F9F5] scroll-mt-20 overflow-hidden">
      {/* Organic Curved Green Accent Blobs in Background */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#D8EDD8]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-[#DCF0DF]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-leaf/10 text-brand-leaf text-xs font-extrabold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.services.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-eco-dark tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-eco-slate/80 leading-relaxed font-normal">
            {t.services.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {t.services.items.map((service, index) => {
            const layoutClass = getCardLayoutClass(index);
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`${layoutClass} rounded-3xl p-6 sm:p-8 border border-brand-olive/15 shadow-[0_20px_50px_-15px_rgba(77,106,40,0.12)] hover:shadow-levitate-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
                onClick={() => setSelectedService(service)}
              >
                {/* Decorative Subtle Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-leaf/5 rounded-full blur-2xl group-hover:bg-brand-leaf/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Hazard Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-brand-olive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-eco-surface text-eco-slate border border-brand-olive/15">
                      {service.hazardClass}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-eco-dark mb-3 group-hover:text-brand-olive transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-eco-muted leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-white/80 border border-brand-olive/10 text-eco-slate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Action link & detail prompt */}
                <div className="pt-4 border-t border-eco-border/80 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-brand-olive group-hover:text-brand-leaf flex items-center gap-1 transition-colors">
                    {t.services.viewDetails}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-olive/10 text-brand-olive group-hover:bg-brand-olive group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-eco-dark/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brand-olive/20 max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-eco-surface hover:bg-eco-border text-eco-slate flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3.5 mb-4 pr-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-olive/10 flex items-center justify-center flex-shrink-0">
                  {getServiceIcon(selectedService.id)}
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-leaf uppercase tracking-wider block">
                    {t.services.hazardBadge}: {selectedService.hazardClass}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-eco-dark">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 text-sm text-eco-slate leading-relaxed border-t border-b border-eco-border py-4">
                <p className="mb-3 font-medium text-eco-dark">{selectedService.shortDesc}</p>
                <p className="text-eco-muted">{selectedService.fullDesc}</p>
              </div>

              {/* Key Features & Protocols */}
              <div className="mb-6">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-eco-dark mb-3 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-brand-olive" />
                  <span>Xizmat doirasidagi kafolatlar va texnologiyalar:</span>
                </h4>
                <div className="space-y-2">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-eco-slate">
                      <div className="w-5 h-5 rounded-full bg-brand-leaf/10 text-brand-leaf flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Organizations */}
              <div className="bg-eco-surface/70 rounded-2xl p-4 mb-6 text-xs text-eco-slate">
                <span className="font-bold text-eco-dark block mb-1">Tavsiya etiladi:</span>
                <span>{selectedService.recommendedFor}</span>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleServiceOrder(selectedService)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-olive to-brand-leaf text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  {t.services.requestForService}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-eco-surface text-eco-dark font-bold text-sm hover:bg-eco-border transition-colors"
                >
                  Yopish
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
