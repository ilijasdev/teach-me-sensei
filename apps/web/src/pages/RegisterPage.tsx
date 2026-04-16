import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useI18n } from "@/i18n";
import { LogoIcon, ArrowRightIcon } from "@/icons";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const ok = await register(name, email, password);
    setLoading(false);
    if (ok) navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-ink-950 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-4 right-4 z-10"><LanguageSwitcher /></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-imperial-500/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-cinnabar-600/5 rounded-full blur-[100px]" />
        {["开", "始", "旅", "程"].map((c, i) => (
          <motion.span key={i} className="absolute font-chinese text-ink-800/20 select-none pointer-events-none" style={{ fontSize: `${40 + i * 10}px`, right: `${5 + i * 20}%`, top: `${15 + i * 20}%` }} animate={{ y: [0, -12, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}>{c}</motion.span>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="relative w-full max-w-md">
        <motion.div className="flex items-center justify-center gap-3 mb-8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <LogoIcon size={36} />
          <span className="text-2xl font-bold bg-gradient-to-r from-cinnabar-500 to-imperial-400 bg-clip-text text-transparent">Kina</span>
        </motion.div>
        <div className="rounded-2xl border border-ink-700/30 bg-ink-900/60 backdrop-blur-xl p-8">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="text-2xl font-bold text-white text-center mb-2">{t.auth.startJourney}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm text-ink-400 text-center mb-8"><span className="font-chinese text-cinnabar-400">你好</span> — {t.auth.letsLearn}</motion.p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
              <label className="block text-xs font-medium text-ink-300 mb-1.5">{t.auth.yourName}</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-ink-700/40 text-white placeholder-ink-500 focus:outline-none focus:border-cinnabar-500/50 focus:ring-1 focus:ring-cinnabar-500/20 transition-all" placeholder={t.auth.namePlaceholder} required />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <label className="block text-xs font-medium text-ink-300 mb-1.5">{t.auth.email}</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-ink-700/40 text-white placeholder-ink-500 focus:outline-none focus:border-cinnabar-500/50 focus:ring-1 focus:ring-cinnabar-500/20 transition-all" placeholder="your@email.com" required />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
              <label className="block text-xs font-medium text-ink-300 mb-1.5">{t.auth.password}</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-ink-700/40 text-white placeholder-ink-500 focus:outline-none focus:border-cinnabar-500/50 focus:ring-1 focus:ring-cinnabar-500/20 transition-all" placeholder="••••••••" required minLength={6} />
            </motion.div>
            <motion.button type="submit" disabled={loading} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cinnabar-600 to-cinnabar-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cinnabar-500/20 transition-shadow disabled:opacity-50">
              {loading ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" /> : <>{t.auth.createAccount}<ArrowRightIcon size={16} /></>}
            </motion.button>
          </form>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="text-sm text-ink-400 text-center mt-6">
            {t.auth.hasAccount}{" "}<Link to="/login" className="text-cinnabar-400 hover:text-cinnabar-300 font-medium transition-colors">{t.auth.signInLink}</Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
