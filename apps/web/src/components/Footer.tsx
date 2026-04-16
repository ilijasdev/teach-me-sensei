import { motion } from "motion/react";
import { useI18n } from "@/i18n";
import { LogoIcon } from "@/icons";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-ink-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.a href="/" className="flex items-center gap-2.5" whileHover={{ scale: 1.03 }}>
            <LogoIcon size={24} />
            <span className="text-sm font-bold bg-gradient-to-r from-cinnabar-500 to-imperial-400 bg-clip-text text-transparent">Kina</span>
          </motion.a>
          <div className="flex items-center gap-6">
            {[
              { label: t.nav.features, href: "#features" },
              { label: t.nav.levels, href: "#levels" },
              { label: t.nav.speakers, href: "#speakers" },
              { label: t.nav.pricing, href: "#pricing" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-ink-400 hover:text-ink-200 transition-colors">{link.label}</a>
            ))}
          </div>
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Kina. {t.footer.builtWith}{" "}
            <span className="font-chinese text-cinnabar-500/60">爱</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
