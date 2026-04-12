"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Evita erro de hidratação garantindo que o componente só renderize no cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-12 h-12" />;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg hover:border-orange-500 dark:hover:border-orange-400 hover:scale-110 active:scale-95 transition-all outline-none group"
        aria-label="Alternar tema"
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={24} className="text-orange-400 group-hover:text-orange-300" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={24} className="text-orange-600 group-hover:text-orange-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
