import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useI18n } from "@/i18n";
import { ArrowRightIcon, GlobeIcon } from "@/icons";

export function SpeakersSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const { t } = useI18n();

  const speakers = [
    { name: "Wei Lin", chinese: "魏琳", avatar: "WL", rating: 4.9, sessions: 342, languages: ["Mandarin", "English"], tKey: "wei" as const },
    { name: "Mei Chen", chinese: "陈梅", avatar: "MC", rating: 4.8, sessions: 518, languages: ["Mandarin", "English", "Japanese"], tKey: "mei" as const },
    { name: "Jun Zhang", chinese: "张军", avatar: "JZ", rating: 5.0, sessions: 207, languages: ["Mandarin", "English"], tKey: "jun" as const },
  ];

  return (
    <section id="speakers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}} className="text-xs font-medium tracking-widest uppercase text-jade-400 mb-3 block">{t.speakers.badge}</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.speakers.title}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-ink-300 max-w-xl mx-auto">{t.speakers.subtitle}</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => {
            const st = t.speakers.tutors[speaker.tKey];
            return (
              <motion.div key={speaker.name} ref={useRef<HTMLDivElement>(null)} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="group relative p-6 rounded-2xl border border-ink-700/30 bg-ink-900/40 backdrop-blur-sm hover:bg-ink-900/60 hover:border-imperial-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-imperial-500/5">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cinnabar-500 to-imperial-500 flex items-center justify-center text-white font-bold text-lg shrink-0" whileHover={{ scale: 1.1, rotate: 5 }}>{speaker.avatar}</motion.div>
                  <div>
                    <h3 className="font-semibold text-white">{speaker.name}</h3>
                    <span className="text-sm font-chinese text-ink-400">{speaker.chinese}</span>
                    <div className="flex items-center gap-2 mt-1"><span className="text-xs text-imperial-400 font-medium">{st.specialty}</span></div>
                  </div>
                </div>
                <p className="text-sm text-ink-300 leading-relaxed mb-4">{st.bio}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-imperial-400"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                    <span className="text-sm font-medium text-white">{speaker.rating}</span>
                  </div>
                  <span className="text-xs text-ink-400">{speaker.sessions} {t.speakers.sessions}</span>
                  <div className="flex items-center gap-1 ml-auto"><GlobeIcon size={12} className="text-ink-400" /><span className="text-xs text-ink-400">{speaker.languages.join(", ")}</span></div>
                </div>
                <motion.button className="w-full py-3 rounded-xl text-sm font-medium border border-ink-600/50 text-ink-200 hover:text-white hover:border-cinnabar-500/40 hover:bg-cinnabar-500/5 transition-all flex items-center justify-center gap-2" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {t.speakers.bookSession}<ArrowRightIcon size={14} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7 }} className="mt-12 p-6 sm:p-8 rounded-2xl border border-ink-700/30 bg-gradient-to-r from-ink-900/60 to-ink-900/40">
          <h3 className="text-lg font-semibold text-white mb-4">{t.speakers.howItWorks}</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: t.speakers.step1title, desc: t.speakers.step1desc },
              { step: "02", title: t.speakers.step2title, desc: t.speakers.step2desc },
              { step: "03", title: t.speakers.step3title, desc: t.speakers.step3desc },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}>
                <span className="text-2xl font-black bg-gradient-to-r from-cinnabar-400 to-imperial-400 bg-clip-text text-transparent">{item.step}</span>
                <h4 className="text-sm font-semibold text-white mt-2 mb-1">{item.title}</h4>
                <p className="text-xs text-ink-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
