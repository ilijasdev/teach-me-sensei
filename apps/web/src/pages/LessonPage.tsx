import { useState, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useLevel1Lessons } from "@/data/useLevel1";
import { useProgress } from "@/context/ProgressContext";
import { useI18n } from "@/i18n";
import type { LessonStep, QuizQuestion, VocabItem } from "@/data/level1";
import { getRadicalInfo } from "@/data/radicals";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  SparkleIcon,
} from "@/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SpeakerButton, NativeSpeakerButton } from "@/components/SpeakerButton";
import { ToneContour } from "@/components/ToneContour";

/* ---- Radical Label with unique tooltip per radical ---- */
function RadicalLabel({ radical }: { radical: string }) {
  const { t, locale } = useI18n();
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const info = getRadicalInfo(radical, locale);

  function openTooltip(e: React.MouseEvent | React.TouchEvent) {
    e.stopPropagation();
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({ top: rect.top - 8, left: rect.left + rect.width / 2 });
    }
    setShow(true);
  }

  return (
    <>
      <p className="text-xs text-ink-500 mt-2 flex items-center gap-1.5">
        <span
          ref={ref}
          onClick={openTooltip}
          onMouseEnter={openTooltip}
          onMouseLeave={() => setShow(false)}
          className="inline-flex items-center gap-1 cursor-help border-b border-dashed border-ink-600 hover:text-ink-300 transition-colors"
        >
          {t.lesson.radical}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-50">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </span>
        : <span className="font-chinese text-ink-300">{radical}</span>
        <span className="text-ink-600">({info.label})</span>
      </p>
      {createPortal(
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              style={{ top: pos.top, left: Math.min(Math.max(pos.left, 160), window.innerWidth - 160) }}
              className="fixed -translate-x-1/2 -translate-y-full max-w-[320px] px-4 py-3 rounded-xl bg-ink-800 border border-ink-700/40 text-xs text-ink-200 leading-relaxed z-[9999] shadow-xl pointer-events-none"
            >
              {info.tooltip}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-ink-800" />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

/* ---- Vocab Card ---- */
function VocabCard({ item, index }: { item: VocabItem; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer"
    >
      <motion.div
        className="p-5 rounded-2xl border border-ink-700/30 bg-ink-900/50 hover:bg-ink-900/70 transition-colors relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Header row: character + audio + strokes */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-chinese font-bold text-white">
              {item.simplified}
            </span>
            {/* Audio buttons */}
            <div className="flex items-center gap-1.5">
              <SpeakerButton text={item.simplified} size="sm" />
              <NativeSpeakerButton size="sm" />
            </div>
          </div>
          {item.strokes && (
            <span className="text-[10px] text-ink-500 px-2 py-0.5 rounded-full bg-ink-800/60 border border-ink-700/30">
              {item.strokes} {t.lesson.strokes}
            </span>
          )}
        </div>

        {/* Pinyin + tone contour */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-cinnabar-400">{item.pinyin}</span>
          <ToneContour pinyin={item.pinyin} size={28} />
        </div>

        <AnimatePresence mode="wait">
          {!flipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-sm text-ink-200">{item.meaning}</p>
              {item.radical && (
                <RadicalLabel radical={item.radical} />
              )}
              <p className="text-[10px] text-ink-600 mt-2">{t.lesson.tapForExample}</p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {item.example ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-chinese text-white">{item.example.chinese}</p>
                    <SpeakerButton text={item.example.chinese} size="sm" />
                  </div>
                  <p className="text-xs text-cinnabar-400">{item.example.pinyin}</p>
                  <p className="text-xs text-ink-300">{item.example.meaning}</p>
                </div>
              ) : (
                <p className="text-xs text-ink-400">{t.lesson.noExample}</p>
              )}
              <p className="text-[10px] text-ink-600 mt-2">{t.lesson.tapToFlip}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

/* ---- Quiz Component ---- */
function QuizComponent({
  questions,
  onComplete,
}: {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}) {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = questions[current];
  if (!q) return null;

  const isCorrectAnswer = selected !== null && selected === q.correctIndex;

  function handleSelect(idx: number) {
    if (selected !== null || !q) return;
    setSelected(idx);
    if (idx === q.correctIndex) {
      setCorrect((c) => c + 1);
    }
  }

  function handleNextQuestion() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      const finalCorrect = correct;
      setShowResult(true);
      onComplete(finalCorrect / questions.length);
    }
  }

  if (showResult) {
    const score = correct / questions.length;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
            score >= 0.7 ? "bg-jade-500/20" : "bg-imperial-500/20"
          }`}
        >
          <span className="text-3xl font-bold text-white">
            {Math.round(score * 100)}%
          </span>
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-1">
          {score >= 0.7 ? t.lesson.greatJob : t.lesson.keepPracticing}
        </h3>
        <p className="text-sm text-ink-400">
          {correct} / {questions.length} {t.lesson.correct}
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress dots */}
      <div className="flex gap-1.5 mb-6">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < current
                ? "bg-jade-500"
                : i === current
                ? "bg-cinnabar-500"
                : "bg-ink-800"
            }`}
          />
        ))}
      </div>

      <motion.div
        key={current}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-white mb-1">
          {t.lesson.question} {current + 1} {t.lesson.of} {questions.length}
        </h3>
        <p className="text-ink-200 mb-6">{q.question}</p>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === q.correctIndex;
            const showFeedback = selected !== null;

            return (
              <motion.button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selected !== null}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  showFeedback && isCorrect
                    ? "border-jade-500/50 bg-jade-500/10 text-white"
                    : showFeedback && isSelected && !isCorrect
                    ? "border-cinnabar-500/50 bg-cinnabar-500/10 text-white"
                    : "border-ink-700/30 bg-ink-900/40 text-ink-200 hover:bg-ink-900/60 hover:border-ink-600/40"
                }`}
                whileHover={selected === null ? { scale: 1.01 } : {}}
                whileTap={selected === null ? { scale: 0.99 } : {}}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium shrink-0 ${
                      showFeedback && isCorrect
                        ? "bg-jade-500/20 text-jade-400"
                        : showFeedback && isSelected
                        ? "bg-cinnabar-500/20 text-cinnabar-400"
                        : "bg-ink-800/60 text-ink-400"
                    }`}
                  >
                    {showFeedback && isCorrect ? "✓" : showFeedback && isSelected ? "✗" : String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm">{opt}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Explanation + Next button */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3"
            >
              {/* Result indicator */}
              <div
                className={`p-4 rounded-xl border ${
                  isCorrectAnswer
                    ? "bg-jade-500/5 border-jade-500/20"
                    : "bg-cinnabar-500/5 border-cinnabar-500/20"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-sm font-semibold ${
                      isCorrectAnswer ? "text-jade-400" : "text-cinnabar-400"
                    }`}
                  >
                    {isCorrectAnswer
                      ? (t.lesson.greatJob)
                      : `✗ ${q.options[q.correctIndex]}`}
                  </span>
                </div>
                {q.explanation && (
                  <p className="text-sm text-ink-300">{q.explanation}</p>
                )}
              </div>

              {/* Next question button */}
              <motion.button
                onClick={handleNextQuestion}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                  isCorrectAnswer
                    ? "bg-gradient-to-r from-jade-600 to-jade-500 text-white"
                    : "bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {current < questions.length - 1
                  ? t.lesson.continue
                  : t.lesson.completeLesson}
                <ArrowRightIcon size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ---- Step Renderer ---- */
function StepContent({
  step,
  onQuizComplete,
}: {
  step: LessonStep;
  onQuizComplete?: (score: number) => void;
}) {
  const { t } = useI18n();
  switch (step.type) {
    case "intro":
    case "summary":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {step.type === "summary" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-jade-500/15 flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircleIcon size={32} className="text-jade-400" />
            </motion.div>
          )}
          <p className="text-ink-200 leading-relaxed whitespace-pre-line">
            {step.content}
          </p>
        </motion.div>
      );

    case "vocab":
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          {step.vocab?.map((item, i) => (
            <VocabCard key={item.id} item={item} index={i} />
          ))}
        </div>
      );

    case "grammar":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="p-4 rounded-xl bg-imperial-500/5 border border-imperial-500/15">
            <h4 className="text-sm font-semibold text-imperial-400 mb-1">
              {t.lesson.structure}
            </h4>
            <p className="text-lg font-medium text-white font-chinese">
              {step.grammar?.structure}
            </p>
          </div>
          <p className="text-ink-200 leading-relaxed">
            {step.grammar?.explanation}
          </p>
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-ink-400">
              {t.lesson.examples}
            </h4>
            {step.grammar?.examples.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg bg-ink-800/40 border border-ink-700/20"
              >
                <div className="flex items-center gap-2">
                  <p className="font-chinese text-white">{ex.chinese}</p>
                  <SpeakerButton text={ex.chinese} size="sm" />
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <p className="text-xs text-cinnabar-400">{ex.pinyin}</p>
                  <ToneContour pinyin={ex.pinyin} size={22} />
                </div>
                <p className="text-xs text-ink-400">{ex.meaning}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case "practice":
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-xl bg-ink-900/50 border border-ink-700/30"
        >
          <p className="text-ink-200 leading-relaxed whitespace-pre-line">
            {step.content}
          </p>
        </motion.div>
      );

    case "quiz":
      return step.quiz ? (
        <QuizComponent questions={step.quiz} onComplete={onQuizComplete!} />
      ) : null;

    default:
      return null;
  }
}

/* ---- Main Lesson Page ---- */
export function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { completeLesson, addWords, addSRSCards } = useProgress();
  const { t, locale } = useI18n();
  const level1Lessons = useLevel1Lessons();

  const lesson = useMemo(
    () => level1Lessons.find((l) => l.id === Number(id)),
    [id, level1Lessons, locale]
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-ink-950 flex items-center justify-center">
        <p className="text-ink-400">Lesson not found</p>
      </div>
    );
  }

  const step = lesson.steps[currentStep]!;
  const isLastStep = currentStep === lesson.steps.length - 1;
  const totalSteps = lesson.steps.length;

  const lessonId = lesson.id;
  const lessonSteps = lesson.steps;

  function handleNext() {
    if (isLastStep) {
      // Complete lesson
      const allVocab = lessonSteps
        .filter((s) => s.type === "vocab" && s.vocab)
        .flatMap((s) => s.vocab!);
      addWords(allVocab.map((v) => v.id));
      addSRSCards(
        allVocab.map((v) => ({
          vocabId: v.id,
          simplified: v.simplified,
          pinyin: v.pinyin,
          meaning: v.meaning,
        }))
      );
      completeLesson(lessonId, quizScore ?? 1);
      navigate("/dashboard");
    } else {
      setCurrentStep((s) => s + 1);
    }
  }

  function handleQuizComplete(score: number) {
    setQuizScore(score);
  }

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-ink-950/80 border-b border-ink-800/50"
      >
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <motion.button
            onClick={() => navigate("/dashboard")}
            className="text-sm text-ink-400 hover:text-white transition-colors flex items-center gap-1.5"
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            {t.lesson.back}
          </motion.button>

          {/* Step progress */}
          <div className="flex gap-1">
            {lesson.steps.map((_, i) => (
              <div
                key={i}
                className={`w-6 h-1 rounded-full transition-colors ${
                  i < currentStep
                    ? "bg-jade-500"
                    : i === currentStep
                    ? "bg-cinnabar-500"
                    : "bg-ink-800"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <div className="flex items-center gap-1.5">
              <SparkleIcon size={14} className="text-imperial-400" />
              <span className="text-xs text-ink-400">+{lesson.xpReward} XP</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Step title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <span className="text-xs text-ink-500 uppercase tracking-wider">
                {step.type === "quiz" ? t.lesson.quiz : `${t.lesson.step} ${currentStep + 1} ${t.lesson.of} ${totalSteps}`}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {step.title}
              </h2>
            </div>

            <StepContent
              step={step}
              onQuizComplete={handleQuizComplete}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        {(step.type !== "quiz" || quizScore !== null) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center justify-between"
          >
            {/* Back step button */}
            {currentStep > 0 ? (
              <motion.button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="px-6 py-3.5 rounded-xl font-medium flex items-center gap-2 border border-ink-700/40 text-ink-300 hover:text-white hover:border-ink-600 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                {t.lesson.back}
              </motion.button>
            ) : (
              <div />
            )}

            {/* Next / Complete button */}
            <motion.button
              onClick={handleNext}
              className={`px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 ${
                isLastStep
                  ? "bg-gradient-to-r from-jade-600 to-jade-500 text-white"
                  : "bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {isLastStep ? t.lesson.completeLesson : t.lesson.continue}
              <ArrowRightIcon size={16} />
            </motion.button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
