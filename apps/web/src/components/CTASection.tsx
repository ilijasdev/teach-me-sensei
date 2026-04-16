import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { ArrowRightIcon } from "@/icons";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useI18n();

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cinnabar-900/80 via-ink-900 to-ink-950" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cinnabar-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-imperial-500/10 rounded-full blur-[80px]" />
          {["学", "习", "中", "文"].map((char, i) => (
            <motion.span key={i} className="absolute font-chinese text-white/5 text-6xl select-none pointer-events-none" style={{ right: `${10 + i * 20}%`, top: `${15 + i * 18}%` }} animate={{ y: [0, -10, 0], rotate: [0, i % 2 ? 3 : -3, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}>{char}</motion.span>
          ))}
          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {t.cta.title1}<br /><span className="bg-gradient-to-r from-imperial-300 to-imperial-400 bg-clip-text text-transparent">{t.cta.title2}</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.6 }} className="text-ink-300 max-w-lg mx-auto mb-8 text-lg">{t.cta.subtitle}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5, duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <motion.div className="group relative px-10 py-4 bg-white text-ink-900 font-semibold rounded-2xl flex items-center gap-3 overflow-hidden" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <motion.span className="absolute inset-0 bg-gradient-to-r from-imperial-200 to-imperial-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">{t.cta.button}</span>
                  <motion.span className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRightIcon size={18} /></motion.span>
                </motion.div>
              </Link>
              <span className="text-sm text-ink-400">{t.cta.noCard}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
