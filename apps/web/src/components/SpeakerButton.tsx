import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useSpeech } from "@/hooks/useSpeech";
import { useI18n } from "@/i18n";

/**
 * Browser TTS play button — speaks Chinese text via Web Speech API
 */
export function SpeakerButton({
  text,
  size = "md",
}: {
  text: string;
  size?: "sm" | "md";
}) {
  const { speak, speaking } = useSpeech();
  const dims = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={`${dims} rounded-lg bg-cinnabar-500/10 border border-cinnabar-500/20 flex items-center justify-center text-cinnabar-400 hover:bg-cinnabar-500/20 transition-colors shrink-0`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Listen (Browser TTS)"
    >
      {speaking ? (
        <motion.div
          className="flex items-center gap-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-[2px] bg-cinnabar-400 rounded-full"
              animate={{ height: [4, iconSize - 4, 4] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>
      ) : (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 010 7.07" />
          <path d="M19.07 4.93a10 10 0 010 14.14" />
        </svg>
      )}
    </motion.button>
  );
}

/**
 * Floating tooltip rendered via portal so it escapes overflow:hidden parents
 */
function FloatingTooltip({
  text,
  anchorRef,
  visible,
}: {
  text: string;
  anchorRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
}) {
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (visible && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    }
  }, [visible, anchorRef]);

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          style={{ top: pos.top, left: pos.left }}
          className="fixed -translate-x-1/2 -translate-y-full px-3 py-1.5 rounded-lg bg-ink-800 border border-ink-700/40 text-xs text-ink-200 whitespace-nowrap z-[9999] shadow-xl pointer-events-none"
        >
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-ink-800" />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/**
 * ElevenLabs native pronunciation button — "Coming Soon"
 */
export function NativeSpeakerButton({ size = "md" }: { size?: "sm" | "md" }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const { locale } = useI18n();
  const btnRef = useRef<HTMLButtonElement>(null);
  const dims = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const iconSize = size === "sm" ? 14 : 18;

  const label = locale === "hr" ? "Uskoro" : "Soon";
  const tooltipText =
    locale === "hr"
      ? "Izvorni izgovor putem ElevenLabs — uskoro!"
      : "Native pronunciation via ElevenLabs — coming soon!";

  return (
    <>
      <motion.button
        ref={btnRef}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={(e) => {
          e.stopPropagation();
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 2000);
        }}
        className={`${dims} rounded-lg bg-imperial-500/10 border border-imperial-500/20 flex items-center justify-center text-imperial-400/50 cursor-default relative shrink-0`}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        >
          <path d="M12 18.5a6.5 6.5 0 006.5-6.5V8a6.5 6.5 0 00-13 0v4a6.5 6.5 0 006.5 6.5z" />
          <path d="M12 18.5V22" />
          <path d="M8 22h8" />
        </svg>

        {/* "Soon" badge */}
        <span className="absolute -top-1.5 -right-1.5 px-1 py-[1px] text-[8px] font-bold uppercase tracking-wider bg-imperial-500 text-white rounded-md leading-tight">
          {label}
        </span>
      </motion.button>

      <FloatingTooltip
        text={tooltipText}
        anchorRef={btnRef}
        visible={showTooltip}
      />
    </>
  );
}
