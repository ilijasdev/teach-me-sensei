import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useI18n } from "@/i18n";
import {
  BrainIcon,
  ToneWaveIcon,
  CharacterIcon,
  SpeakIcon,
  UsersIcon,
  BookOpenIcon,
} from "@/icons";

const colorMap = {
  cinnabar: { bg: "bg-cinnabar-500/10", border: "border-cinnabar-500/20", icon: "text-cinnabar-400", glow: "group-hover:shadow-cinnabar-500/10", chinese: "text-cinnabar-500/10" },
  imperial: { bg: "bg-imperial-500/10", border: "border-imperial-500/20", icon: "text-imperial-400", glow: "group-hover:shadow-imperial-500/10", chinese: "text-imperial-500/10" },
  jade: { bg: "bg-jade-500/10", border: "border-jade-500/20", icon: "text-jade-400", glow: "group-hover:shadow-jade-500/10", chinese: "text-jade-500/10" },
};

interface FeatureData {
  icon: typeof BrainIcon;
  titleKey: string;
  descKey: string;
  color: keyof typeof colorMap;
  chinese: string;
}

export function FeaturesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const { t } = useI18n();

  const features: FeatureData[] = [
    { icon: BrainIcon, titleKey: "aiTutor", descKey: "aiTutor", color: "cinnabar", chinese: "智能" },
    { icon: ToneWaveIcon, titleKey: "tones", descKey: "tones", color: "imperial", chinese: "声调" },
    { icon: CharacterIcon, titleKey: "characters", descKey: "characters", color: "jade", chinese: "汉字" },
    { icon: SpeakIcon, titleKey: "voice", descKey: "voice", color: "cinnabar", chinese: "口语" },
    { icon: UsersIcon, titleKey: "speakers", descKey: "speakers", color: "imperial", chinese: "对话" },
    { icon: BookOpenIcon, titleKey: "input", descKey: "input", color: "jade", chinese: "输入" },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }} className="text-xs font-medium tracking-widest uppercase text-cinnabar-400 mb-3 block">{t.features.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.features.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-ink-300 max-w-xl mx-auto">{t.features.subtitle}</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const featureT = t.features[f.titleKey as keyof typeof t.features] as { title: string; desc: string };
            return <FeatureCard key={f.titleKey} feature={{ ...f, title: featureT.title, desc: featureT.desc }} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: FeatureData & { title: string; desc: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const colors = colorMap[feature.color];
  const Icon = feature.icon;

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} className={`group relative p-6 rounded-2xl border ${colors.border} bg-ink-900/40 backdrop-blur-sm hover:bg-ink-900/70 transition-all duration-500 hover:shadow-xl ${colors.glow} overflow-hidden cursor-default`}>
      <span className={`absolute -right-2 -bottom-4 font-chinese text-7xl font-black ${colors.chinese} select-none pointer-events-none transition-all duration-500 group-hover:scale-110`}>{feature.chinese}</span>
      <motion.div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`} whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
        <Icon size={22} className={colors.icon} />
      </motion.div>
      <h3 className="text-lg font-semibold text-white mb-2 relative">{feature.title}</h3>
      <p className="text-sm text-ink-300 leading-relaxed relative">{feature.desc}</p>
    </motion.div>
  );
}
