import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { LogoIcon } from "@/icons";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.levels, href: "#levels" },
    { label: t.nav.speakers, href: "#speakers" },
    { label: t.nav.pricing, href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-ink-950/70 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <motion.a
          href="/"
          className="flex items-center gap-2.5 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogoIcon size={28} />
          <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-cinnabar-500 to-imperial-400 bg-clip-text text-transparent">
            Kina
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-ink-300 hover:text-white rounded-lg transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/login">
            <motion.span
              className="px-4 py-2 text-sm text-ink-200 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.nav.login}
            </motion.span>
          </Link>
          <Link to="/register">
            <motion.span
              className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white rounded-xl hover:shadow-lg hover:shadow-cinnabar-500/25 transition-shadow inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.nav.startLearning}
            </motion.span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <motion.button
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-ink-800/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            <motion.span
              className="w-5 h-0.5 bg-white block"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-white block"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-white block"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-2 text-ink-200 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <Link to="/register" onClick={() => setMobileOpen(false)}>
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-2 py-3 text-center font-medium bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white rounded-xl block"
                >
                  {t.nav.startLearning}
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
