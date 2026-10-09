import React from 'react';
import { m } from 'motion/react';
import { masterProcess } from '../../data/process';
import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {masterProcess.map((item, index) => (
        <m.div
          key={item.step}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="liquid-glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d2ff]/20 to-[#3ecf8e]/10 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff] font-mono text-sm font-bold shrink-0">
              {item.step}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-white text-lg font-bold">
                  {item.title}
                </h4>
                <span className="text-[11px] text-[#00d2ff] font-medium hidden md:inline">
                  • {item.subtitle}
                </span>
              </div>
              <p className="text-white/60 text-xs sm:text-sm font-light mt-1 max-w-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          <div className="sm:text-right border-t sm:border-t-0 border-white/10 pt-3 sm:pt-0 w-full sm:w-auto shrink-0">
            <span className="text-[10px] uppercase font-semibold text-white/40 block">Entregable</span>
            <div className="flex items-center sm:justify-end gap-1.5 text-xs text-[#3ecf8e] font-medium mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{item.deliverable}</span>
            </div>
          </div>
        </m.div>
      ))}
    </div>
  );
};
