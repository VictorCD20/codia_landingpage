import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { defaultComingSoonFAQs, type ComingSoonFAQItem } from './comingSoon.config';

interface ComingSoonFAQProps {
  customFaqs?: ComingSoonFAQItem[];
}

export const ComingSoonFAQ: React.FC<ComingSoonFAQProps> = ({ customFaqs }) => {
  const faqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultComingSoonFAQs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-6 relative bg-white/[0.015] border-t border-white/5" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Respuestas Rápidas</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-white/70 leading-relaxed"
          >
            Resolvemos tus dudas sobre el lanzamiento y la disponibilidad del ecosistema CODIA.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faqItem: ComingSoonFAQItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faqItem.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faqItem.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-blue-500/20 text-blue-300 border-blue-500/40' : 'text-white/60'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4">
                        {faqItem.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
