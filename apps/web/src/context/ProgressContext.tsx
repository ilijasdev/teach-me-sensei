import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export interface SRSCard {
  vocabId: string;
  simplified: string;
  pinyin: string;
  meaning: string;
  easeFactor: number;
  interval: number; // days
  nextReview: number; // timestamp
  reviewCount: number;
}

interface ProgressState {
  completedLessons: number[];
  currentLesson: number;
  xp: number;
  streak: number;
  wordsLearned: string[];
  srsCards: SRSCard[];
  quizScores: Record<number, number>;
}

interface ProgressContextType extends ProgressState {
  completeLesson: (lessonId: number, score: number) => void;
  addWords: (vocabIds: string[]) => void;
  addSRSCards: (cards: Omit<SRSCard, "easeFactor" | "interval" | "nextReview" | "reviewCount">[]) => void;
  reviewSRSCard: (vocabId: string, quality: number) => void;
  getDueCards: () => SRSCard[];
  resetProgress: () => void;
}

const STORAGE_KEY = "kina_progress";

const defaultState: ProgressState = {
  completedLessons: [],
  currentLesson: 1,
  xp: 0,
  streak: 1,
  wordsLearned: [],
  srsCards: [],
  quizScores: {},
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  function completeLesson(lessonId: number, score: number) {
    setState((s) => {
      const completed = s.completedLessons.includes(lessonId)
        ? s.completedLessons
        : [...s.completedLessons, lessonId];
      const xpGain = s.completedLessons.includes(lessonId) ? 10 : 50 + Math.floor(score * 30);
      return {
        ...s,
        completedLessons: completed,
        currentLesson: Math.max(s.currentLesson, lessonId + 1),
        xp: s.xp + xpGain,
        quizScores: { ...s.quizScores, [lessonId]: Math.max(s.quizScores[lessonId] ?? 0, score) },
      };
    });
  }

  function addWords(vocabIds: string[]) {
    setState((s) => ({
      ...s,
      wordsLearned: [...new Set([...s.wordsLearned, ...vocabIds])],
    }));
  }

  function addSRSCards(
    cards: Omit<SRSCard, "easeFactor" | "interval" | "nextReview" | "reviewCount">[]
  ) {
    setState((s) => {
      const existing = new Set(s.srsCards.map((c) => c.vocabId));
      const newCards = cards
        .filter((c) => !existing.has(c.vocabId))
        .map((c) => ({
          ...c,
          easeFactor: 2.5,
          interval: 1,
          nextReview: Date.now(),
          reviewCount: 0,
        }));
      return { ...s, srsCards: [...s.srsCards, ...newCards] };
    });
  }

  function reviewSRSCard(vocabId: string, quality: number) {
    setState((s) => ({
      ...s,
      srsCards: s.srsCards.map((card) => {
        if (card.vocabId !== vocabId) return card;
        // Simplified SM-2 algorithm
        const ef = Math.max(1.3, card.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        let interval: number;
        if (quality < 3) {
          interval = 1;
        } else if (card.reviewCount === 0) {
          interval = 1;
        } else if (card.reviewCount === 1) {
          interval = 3;
        } else {
          interval = Math.round(card.interval * ef);
        }
        return {
          ...card,
          easeFactor: ef,
          interval,
          nextReview: Date.now() + interval * 24 * 60 * 60 * 1000,
          reviewCount: card.reviewCount + 1,
        };
      }),
    }));
  }

  function getDueCards() {
    return state.srsCards.filter((c) => c.nextReview <= Date.now());
  }

  function resetProgress() {
    setState(defaultState);
  }

  return (
    <ProgressContext.Provider
      value={{ ...state, completeLesson, addWords, addSRSCards, reviewSRSCard, getDueCards, resetProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
