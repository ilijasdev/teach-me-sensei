import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useI18n, type Locale } from "@/i18n";
import { GlobeIcon } from "@/icons";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hr", label: "Hrvatski", flag: "🇭🇷" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === locale)!;

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-ink-300 hover:text-white hover:bg-ink-800/50 transition-colors text-sm min-h-[40px] min-w-[40px] justify-center"
        whileTap={{ scale: 0.95 }}
      >
        <GlobeIcon size={15} />
        <span className="hidden sm:inline">{current.flag}</span>
        <span className="text-xs">{current.code.toUpperCase()}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1.5 w-40 rounded-xl border border-ink-700/40 bg-ink-900/95 backdrop-blur-xl shadow-xl shadow-black/30 overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  locale === lang.code
                    ? "bg-cinnabar-500/10 text-cinnabar-400"
                    : "text-ink-200 hover:bg-ink-800/60 hover:text-white"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <motion.span
                    layoutId="lang-check"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-cinnabar-500"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
