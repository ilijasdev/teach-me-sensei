import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { ArrowRightIcon, SparkleIcon } from "@/icons";

const floatingChars = ["学", "说", "听", "读", "写", "你好", "谢谢", "中文"];

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cinnabar-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-imperial-500/6 rounded-full blur-[100px]" />
        {floatingChars.map((char, i) => (
          <motion.span
            key={i}
            className="absolute font-chinese text-ink-800/30 select-none pointer-events-none"
            style={{ fontSize: `${Math.random() * 40 + 30}px`, left: `${10 + (i * 12) % 80}%`, top: `${10 + ((i * 17) % 70)}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15], rotate: [0, i % 2 === 0 ? 5 : -5, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            {char}
          </motion.span>
        ))}
        <svg className="absolute top-20 right-10 w-64 h-64 text-cinnabar-500/5" viewBox="0 0 200 200" fill="none">
          <motion.path d="M30 170 C50 140, 80 60, 100 40 S140 20, 170 30" stroke="currentColor" strokeWidth="8" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut", delay: 1 }} />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-imperial-500/20 bg-imperial-500/5 mb-8">
          <SparkleIcon size={14} className="text-imperial-400" />
          <span className="text-xs font-medium text-imperial-300 tracking-wide">{t.hero.badge}</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">{t.hero.title1}</span><br />
          <span className="bg-gradient-to-r from-cinnabar-400 via-imperial-400 to-imperial-300 bg-clip-text text-transparent">{t.hero.title2}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-base sm:text-lg lg:text-xl text-ink-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          {t.hero.subtitle}{" "}<span className="font-chinese text-cinnabar-400">你好</span>{" "}{t.hero.subtitleEnd}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register">
            <motion.div className="group relative px-8 py-4 bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white font-semibold rounded-2xl flex items-center gap-3 overflow-hidden" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <motion.span className="absolute inset-0 bg-gradient-to-r from-imperial-500 to-cinnabar-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">{t.hero.cta}</span>
              <motion.span className="relative" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRightIcon size={18} />
              </motion.span>
            </motion.div>
          </Link>
          <motion.a href="#features" className="px-8 py-4 text-ink-200 font-medium rounded-2xl border border-ink-700/50 hover:border-ink-600 hover:text-white transition-all" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            {t.hero.ctaSecondary}
          </motion.a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-14">
          {[
            { value: "5,400+", label: t.hero.statWords },
            { value: "3", label: t.hero.statLevels },
            { value: "HSK 3.0", label: t.hero.statHsk },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cinnabar-400 to-imperial-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs text-ink-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}
