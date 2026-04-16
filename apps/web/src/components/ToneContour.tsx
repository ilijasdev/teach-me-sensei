import { motion } from "motion/react";

/**
 * Extracts tone number from a pinyin string.
 * Returns 0 for neutral, 1-4 for tones.
 */
function getToneFromPinyin(pinyin: string): number {
  if (/[āēīōūǖ]/.test(pinyin)) return 1;
  if (/[áéíóúǘ]/.test(pinyin)) return 2;
  if (/[ǎěǐǒǔǚ]/.test(pinyin)) return 3;
  if (/[àèìòùǜ]/.test(pinyin)) return 4;
  return 0;
}

const tonePaths: Record<number, string> = {
  0: "M4 14 L28 14",                          // neutral: flat middle
  1: "M4 6 L28 6",                             // 1st: high flat
  2: "M4 20 C10 18, 18 10, 28 4",              // 2nd: rising
  3: "M4 10 C8 16, 12 22, 16 20 S24 8, 28 8", // 3rd: dip
  4: "M4 4 C10 8, 18 16, 28 22",               // 4th: falling
};

const toneColors: Record<number, string> = {
  0: "#9fa2a9",
  1: "#ff3424",
  2: "#ffd24a",
  3: "#22c563",
  4: "#ee7216",
};

const toneLabels: Record<number, string> = {
  0: "·",
  1: "‾",
  2: "／",
  3: "˅",
  4: "＼",
};

export function ToneContour({
  pinyin,
  size = 32,
  showLabel = false,
}: {
  pinyin: string;
  size?: number;
  showLabel?: boolean;
}) {
  const tone = getToneFromPinyin(pinyin);
  const color = toneColors[tone] ?? toneColors[0]!;
  const path = tonePaths[tone] ?? tonePaths[0]!;

  return (
    <span className="inline-flex items-center gap-1">
      <svg
        width={size}
        height={size * 0.8}
        viewBox="0 0 32 26"
        fill="none"
        className="inline-block"
      >
        <motion.path
          d={path}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </svg>
      {showLabel && (
        <span className="text-[10px] font-mono" style={{ color }}>
          {toneLabels[tone]}
        </span>
      )}
    </span>
  );
}

/**
 * Shows all 4 tones + neutral side by side (for educational display)
 */
export function ToneChart({ className }: { className?: string }) {
  const tones = [
    { num: 1, label: "1st", pinyin: "mā", desc: "high flat" },
    { num: 2, label: "2nd", pinyin: "má", desc: "rising" },
    { num: 3, label: "3rd", pinyin: "mǎ", desc: "low dip" },
    { num: 4, label: "4th", pinyin: "mà", desc: "falling" },
    { num: 0, label: "·", pinyin: "ma", desc: "neutral" },
  ];

  return (
    <div className={`flex items-end gap-3 ${className ?? ""}`}>
      {tones.map((t, i) => (
        <motion.div
          key={t.num}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center gap-1"
        >
          <svg width="40" height="32" viewBox="0 0 32 26" fill="none">
            <motion.path
              d={tonePaths[t.num]!}
              stroke={toneColors[t.num]!}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
            />
          </svg>
          <span
            className="text-xs font-semibold"
            style={{ color: toneColors[t.num] }}
          >
            {t.label}
          </span>
          <span className="text-[10px] text-ink-500">{t.desc}</span>
        </motion.div>
      ))}
    </div>
  );
}
