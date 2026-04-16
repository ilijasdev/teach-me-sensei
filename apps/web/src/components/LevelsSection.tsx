import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { CheckCircleIcon, FlameIcon, ChevronDownIcon } from "@/icons";

const colorMap = {
  jade: { badge: "bg-jade-500/15 text-jade-400 border-jade-500/25", number: "text-jade-400", border: "border-jade-500/20 hover:border-jade-500/40", glow: "hover:shadow-jade-500/5", accent: "bg-jade-500", bar: "from-jade-600 to-jade-400", check: "text-jade-400" },
  imperial: { badge: "bg-imperial-500/15 text-imperial-400 border-imperial-500/25", number: "text-imperial-400", border: "border-imperial-500/20 hover:border-imperial-500/40", glow: "hover:shadow-imperial-500/5", accent: "bg-imperial-500", bar: "from-imperial-600 to-imperial-400", check: "text-imperial-400" },
  cinnabar: { badge: "bg-cinnabar-500/15 text-cinnabar-400 border-cinnabar-500/25", number: "text-cinnabar-400", border: "border-cinnabar-500/20 hover:border-cinnabar-500/40", glow: "hover:shadow-cinnabar-500/5", accent: "bg-cinnabar-500", bar: "from-cinnabar-600 to-cinnabar-400", check: "text-cinnabar-400" },
};

export function LevelsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const { t } = useI18n();

  const levels = [
    { number: 1, chinese: "初学者", hsk: "HSK 1-2", cefr: "A1-A2", words: "300 → 500", chars: "150 → 300", color: "jade" as const, tKey: "level1" as const },
    { number: 2, chinese: "中级", hsk: "HSK 3-4", cefr: "B1-B2", words: "1,000 → 2,000", chars: "500 → 800", color: "imperial" as const, tKey: "level2" as const },
    { number: 3, chinese: "高级", hsk: "HSK 5-6", cefr: "C1-C2", words: "3,600 → 5,400", chars: "1,200 → 1,800", color: "cinnabar" as const, tKey: "level3" as const },
  ];

  return (
    <section id="levels" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cinnabar-600/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-imperial-500/4 rounded-full blur-[130px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={titleRef} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} className="text-xs font-medium tracking-widest uppercase text-imperial-400 mb-3 block">{t.levels.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.levels.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-ink-300 max-w-xl mx-auto">{t.levels.subtitle}</motion.p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {levels.map((level, i) => {
            const lt = t.levels[level.tKey];
            return <LevelCard key={level.number} level={level} lt={lt} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

function LevelCard({ level, lt, index }: {
  level: { number: number; chinese: string; hsk: string; cefr: string; words: string; chars: string; color: keyof typeof colorMap };
  lt: { name: string; desc: string; time: string; modules: readonly string[]; checkpoints: readonly string[] };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);
  const { t } = useI18n();
  const colors = colorMap[level.color];

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }} className={`relative rounded-2xl border ${colors.border} bg-ink-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl ${colors.glow}`}>
      <div className={`h-1 bg-gradient-to-r ${colors.bar}`} />
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-3xl font-black ${colors.number}`}>{level.number}</span>
              <div>
                <h3 className="text-xl font-bold text-white">{lt.name}</h3>
                <span className="font-chinese text-sm text-ink-400">{level.chinese}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <span className={`text-xs px-2.5 py-1 rounded-full border ${colors.badge}`}>{level.hsk}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full border ${colors.badge}`}>{level.cefr}</span>
            </div>
          </div>
          <FlameIcon size={28} className={`${colors.number} opacity-40`} />
        </div>
        <p className="text-sm text-ink-300 leading-relaxed mb-5">{lt.desc}</p>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: t.levels.words, value: level.words },
            { label: t.levels.characters, value: level.chars },
            { label: t.levels.duration, value: lt.time },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-2.5 rounded-xl bg-ink-800/60 border border-ink-700/30">
              <div className="text-sm font-semibold text-white">{stat.value}</div>
              <div className="text-[10px] text-ink-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
        <motion.button className="w-full flex items-center justify-between py-3 text-sm text-ink-300 hover:text-white transition-colors" onClick={() => setExpanded(!expanded)} whileTap={{ scale: 0.98 }}>
          <span className="font-medium">{expanded ? t.levels.hideModules : t.levels.showModules}</span>
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDownIcon size={18} /></motion.span>
        </motion.button>
        <motion.div initial={false} animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
          <div className="mb-4">
            <h4 className="text-xs uppercase tracking-wider text-ink-400 mb-2">{t.levels.modules}</h4>
            <ul className="space-y-1.5">
              {lt.modules.map((mod, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={expanded ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.05 }} className="flex items-start gap-2 text-sm text-ink-200">
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.accent} mt-1.5 shrink-0`} />{mod}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-ink-400 mb-2">{t.levels.checkpoints}</h4>
            <ul className="space-y-1.5">
              {lt.checkpoints.map((cp, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={expanded ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.05 }} className="flex items-start gap-2 text-sm text-ink-200">
                  <CheckCircleIcon size={16} className={`${colors.check} mt-0.5 shrink-0`} />{cp}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
