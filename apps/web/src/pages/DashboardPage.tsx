import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import { useI18n } from "@/i18n";
import { useLevel1Lessons } from "@/data/useLevel1";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  LogoIcon,
  FlameIcon,
  SparkleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayIcon,
  BookOpenIcon,
} from "@/icons";

function StatCard({
  label,
  value,
  icon: Icon,
  color,
  delay,
}: {
  label: string;
  value: string | number;
  icon: typeof FlameIcon;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-3.5 sm:p-5 rounded-2xl border border-ink-700/30 bg-ink-900/50"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${color} flex items-center justify-center shrink-0`}>
          <Icon size={16} className="text-white" />
        </div>
        <span className="text-[10px] sm:text-xs text-ink-400 uppercase tracking-wider leading-tight">{label}</span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
    </motion.div>
  );
}

export function DashboardPage() {
  const { user, logout } = useAuth();
  const progress = useProgress();
  const navigate = useNavigate();
  const { t } = useI18n();

  const level1Lessons = useLevel1Lessons();
  const dueCards = progress.getDueCards();
  const totalLessons = level1Lessons.length;
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  // Group lessons by module
  const modules = [
    { id: 1, name: t.dash.module1.name, chinese: t.dash.module1.chinese, lessons: level1Lessons.filter((l) => l.moduleId === 1) },
    { id: 2, name: t.dash.module2.name, chinese: t.dash.module2.chinese, lessons: level1Lessons.filter((l) => l.moduleId === 2) },
  ];

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Top bar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-ink-950/80 border-b border-ink-800/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center gap-2 shrink-0"
            whileHover={{ scale: 1.03 }}
          >
            <LogoIcon size={24} />
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-cinnabar-500 to-imperial-400 bg-clip-text text-transparent">
              Kina
            </span>
          </motion.a>

          <div className="flex items-center gap-2 sm:gap-4">
            {dueCards.length > 0 && (
              <motion.button
                onClick={() => navigate("/review")}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-imperial-500/10 border border-imperial-500/20 text-imperial-400 text-xs sm:text-sm font-medium min-h-[40px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BookOpenIcon size={16} />
                <span className="hidden sm:inline">{dueCards.length} {t.dash.cardsDue}</span>
                <span className="sm:hidden">{dueCards.length}</span>
              </motion.button>
            )}
            <div className="flex items-center gap-2 text-sm text-ink-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cinnabar-500 to-imperial-500 flex items-center justify-center text-white font-bold text-xs">
                {user?.avatar}
              </div>
              <span className="hidden sm:inline">{user?.name}</span>
            </div>
            <LanguageSwitcher />
            <motion.button
              onClick={logout}
              className="text-xs text-ink-500 hover:text-ink-300 transition-colors min-h-[40px] flex items-center"
              whileTap={{ scale: 0.95 }}
            >
              {t.dash.logout}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {t.dash.welcomeBack} {user?.name}
            <span className="font-chinese text-cinnabar-400 ml-2">你好</span>
          </h1>
          <p className="text-ink-400">{t.dash.level1}</p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          <StatCard label={t.dash.xp} value={progress.xp} icon={SparkleIcon} color="bg-imperial-600" delay={0.1} />
          <StatCard label={t.dash.streak} value={`${progress.streak} ${t.dash.day}`} icon={FlameIcon} color="bg-cinnabar-600" delay={0.15} />
          <StatCard label={t.dash.words} value={progress.wordsLearned.length} icon={BookOpenIcon} color="bg-jade-600" delay={0.2} />
          <StatCard
            label={t.dash.progress}
            value={`${completedCount}/${totalLessons}`}
            icon={CheckCircleIcon}
            color="bg-emperor-600"
            delay={0.25}
          />
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-ink-300">{t.dash.level1Progress}</span>
            <span className="text-sm font-medium text-imperial-400">{progressPercent}%</span>
          </div>
          <div className="h-2.5 rounded-full bg-ink-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-cinnabar-500 to-imperial-400"
            />
          </div>
        </motion.div>

        {/* Modules */}
        {modules.map((mod, mi) => (
          <motion.div
            key={mod.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + mi * 0.1 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-ink-800 flex items-center justify-center text-sm font-bold text-ink-300">
                {mod.id}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">{mod.name}</h2>
                <span className="text-xs font-chinese text-ink-500">{mod.chinese}</span>
              </div>
            </div>

            <div className="space-y-3">
              {mod.lessons.map((lesson, li) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                const isCurrent = lesson.id === progress.currentLesson;
                const isLocked = lesson.id > progress.currentLesson;
                const score = progress.quizScores[lesson.id];

                return (
                  <motion.button
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + mi * 0.1 + li * 0.05 }}
                    onClick={() => !isLocked && navigate(`/lesson/${lesson.id}`)}
                    disabled={isLocked}
                    className={`w-full p-3 sm:p-4 rounded-xl border text-left flex items-center gap-3 sm:gap-4 transition-all duration-300 group min-h-[64px] ${
                      isCompleted
                        ? "border-jade-500/20 bg-jade-500/5 hover:bg-jade-500/10"
                        : isCurrent
                        ? "border-cinnabar-500/30 bg-cinnabar-500/5 hover:bg-cinnabar-500/10 ring-1 ring-cinnabar-500/20"
                        : isLocked
                        ? "border-ink-800/30 bg-ink-900/30 opacity-50 cursor-not-allowed"
                        : "border-ink-700/30 bg-ink-900/40 hover:bg-ink-900/60"
                    }`}
                    whileHover={isLocked ? {} : { x: 4 }}
                    whileTap={isLocked ? {} : { scale: 0.99 }}
                  >
                    {/* Status icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isCompleted
                          ? "bg-jade-500/20"
                          : isCurrent
                          ? "bg-cinnabar-500/20"
                          : "bg-ink-800/60"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircleIcon size={20} className="text-jade-400" />
                      ) : isCurrent ? (
                        <PlayIcon size={16} className="text-cinnabar-400" />
                      ) : (
                        <span className="text-sm text-ink-500 font-medium">{lesson.id}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-medium truncate ${
                            isLocked ? "text-ink-500" : "text-white"
                          }`}
                        >
                          {lesson.title}
                        </h3>
                        <span className="text-xs font-chinese text-ink-500 shrink-0">
                          {lesson.titleChinese}
                        </span>
                      </div>
                      <p className="text-xs text-ink-400 mt-0.5 truncate">
                        {lesson.description}
                      </p>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3 shrink-0">
                      {score != null && (
                        <span className="text-xs font-medium text-jade-400">
                          {Math.round(score * 100)}%
                        </span>
                      )}
                      <span className="text-xs text-ink-500">
                        {lesson.estimatedMinutes} {t.dash.min}
                      </span>
                      {!isLocked && (
                        <ArrowRightIcon
                          size={16}
                          className="text-ink-500 group-hover:text-white transition-colors"
                        />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
