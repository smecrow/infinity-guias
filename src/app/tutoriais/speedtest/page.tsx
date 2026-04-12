"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Gauge } from "lucide-react";

export default function SpeedtestPlaceholder() {
  return (
    <main className="min-h-screen pt-24 pb-10 px-4 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-orange-600 dark:hover:text-orange-400 mb-8 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        Voltar para o início
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[var(--card)] rounded-3xl p-8 md:p-12 border border-[var(--border)] shadow-sm text-center"
      >
        <div className="w-20 h-20 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <Gauge size={40} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--card-foreground)] mb-4">
          Como fazer o Speedtest
        </h1>
        <p className="text-lg text-[var(--card-foreground)] opacity-70 max-w-xl mx-auto mb-8">
          Aqui você encontrará o passo a passo para medir sua velocidade de conexão de forma precisa usando o Speedtest.
        </p>
        <div className="inline-block bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 text-sm font-semibold px-4 py-2 rounded-full">
          Em breve
        </div>
      </motion.div>
    </main>
  );
}
