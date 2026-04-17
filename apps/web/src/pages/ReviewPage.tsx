import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useProgress, type SRSCard } from "@/context/ProgressContext";
import { useI18n } from "@/i18n";
import { ArrowRightIcon, CheckCircleIcon, SparkleIcon } from "@/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SpeakerButton, NativeSpeakerButton } from "@/components/SpeakerButton";
import { ToneContour } from "@/components/ToneContour";

function FlashCard({
  card,
  onRate,
}: {
  card: SRSCard;
  onRate: (quality: number) => void;
}) {
  const [revealed, setRevealed] = useState(false);
  const { t } = useI18n();

  const ratings = [
    { label: t.review.again, value: 1, color: "bg-cinnabar-600", desc: t.review.didntKnow },
    { label: t.review.hard, value: 2, color: "bg-emperor-600", desc: t.review.struggled },
    { label: t.review.good, value: 3, color: "bg-imperial-600", desc: t.review.gotIt },
    { label: t.review.easy, value: 5, color: "bg-jade-600", desc: t.review.tooEasy },
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95, x: -100 }} transition={{ duration: 0.3 }} className="max-w-lg mx-auto px-1">
      <motion.div onClick={() => !revealed && setRevealed(true)} className="p-6 sm:p-8 rounded-2xl border border-ink-700/30 bg-ink-900/60 text-center cursor-pointer min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center" whileHover={!revealed ? { scale: 1.02 } : {}} whileTap={!revealed ? { scale: 0.98 } : {}}>
        <span className="text-4xl sm:text-5xl font-chinese font-bold text-white mb-2">{card.simplified}</span>
        <div className="flex items-center justify-center gap-2 mb-3">
          <SpeakerButton text={card.simplified} size="md" />
          <NativeSpeakerButton size="md" />
        </div>
        <AnimatePresence>
          {revealed ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <p className="text-lg text-cinnabar-400">{card.pinyin}</p>
                <ToneContour pinyin={card.pinyin} size={28} />
              </div>
              <p className="text-ink-200">{card.meaning}</p>
              <p className="text-xs text-ink-500 mt-2">{t.review.reviewNum} #{card.reviewCount + 1} · {t.review.nextIn} {card.interval} {t.review.days}</p>
            </motion.div>
          ) : (
            <motion.p className="text-sm text-ink-500">{t.review.tapToReveal}</motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {revealed && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4 sm:mt-6 grid grid-cols-4 gap-2 sm:gap-3">
            {ratings.map((r, i) => (
              <motion.button key={r.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} onClick={() => onRate(r.value)} className={`p-2.5 sm:p-3 rounded-xl ${r.color} text-white text-center min-h-[56px] flex flex-col items-center justify-center`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="text-xs sm:text-sm font-semibold block">{r.label}</span>
                <span className="text-[9px] sm:text-[10px] opacity-70 leading-tight">{r.desc}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ReviewPage() {
  const navigate = useNavigate();
  const { getDueCards, reviewSRSCard, srsCards } = useProgress();
  const { t } = useI18n();
  const dueCards = useMemo(() => getDueCards(), [srsCards]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [reviewed, setReviewed] = useState(0);
  const [done, setDone] = useState(false);

  function handleRate(quality: number) {
    const card = dueCards[currentIdx];
    if (!card) return;
    reviewSRSCard(card.vocabId, quality);
    setReviewed((r) => r + 1);
    if (currentIdx < dueCards.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setDone(true);
    }
  }

  if (dueCards.length === 0 || done) {
    return (
      <div className="min-h-screen bg-ink-950 flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-20 h-20 rounded-2xl bg-jade-500/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon size={40} className="text-jade-400" />
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2">{done ? t.review.complete : t.review.allCaughtUp}</h1>
          <p className="text-ink-400 mb-2">{done ? `${t.review.youReviewed} ${reviewed} ${t.review.cards}` : t.review.noCardsDue}</p>
          <p className="text-xs text-ink-500 mb-6">{t.review.totalCards} {srsCards.length}</p>
          <motion.button onClick={() => navigate("/dashboard")} className="px-6 py-3 rounded-xl bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white font-medium flex items-center gap-2 mx-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            {t.review.backToDashboard}<ArrowRightIcon size={16} />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const card = dueCards[currentIdx]!;

  return (
    <div className="min-h-screen bg-ink-950">
      <motion.header initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="sticky top-0 z-40 backdrop-blur-xl bg-ink-950/80 border-b border-ink-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <motion.button onClick={() => navigate("/dashboard")} className="text-sm text-ink-400 hover:text-white transition-colors flex items-center gap-1.5" whileTap={{ scale: 0.95 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            {t.lesson.back}
          </motion.button>
          <div className="flex items-center gap-3"><LanguageSwitcher /><SparkleIcon size={14} className="text-imperial-400" /><span className="text-sm text-ink-300 font-medium">{t.review.title}</span></div>
          <span className="text-xs text-ink-500">{currentIdx + 1} / {dueCards.length}</span>
        </div>
      </motion.header>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-4">
        <div className="h-1.5 rounded-full bg-ink-800 overflow-hidden">
          <motion.div className="h-full rounded-full bg-gradient-to-r from-cinnabar-500 to-imperial-400" animate={{ width: `${((currentIdx + 1) / dueCards.length) * 100}%` }} transition={{ duration: 0.5 }} />
        </div>
      </div>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <FlashCard key={card.vocabId} card={card} onRate={handleRate} />
        </AnimatePresence>
      </main>
    </div>
  );
}
