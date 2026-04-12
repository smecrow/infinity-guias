"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Gauge, Tv } from "lucide-react";
import Link from "next/link";

export default function LandingContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-4 py-8 md:py-16"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
          Seus guias da <span className="text-orange-600 dark:text-orange-400">Infinity</span> em um só lugar
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Aprenda a utilizar aplicativos e tirar o máximo proveito de sua conexão e de nossos serviços com tutoriais rápidos, práticos e diretos ao ponto.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tutorial Card 1 */}
        <Link href="/tutoriais/minhainfinitygo" className="group block h-full">
          <div className="bg-[var(--card)] rounded-3xl p-6 border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone size={24} />
            </div>
            <h2 className="text-xl font-bold text-[var(--card-foreground)] mb-3">Minha Infinity Go</h2>
            <p className="text-sm text-[var(--card-foreground)] opacity-70 flex-grow mb-6">
              Confira os benefícios inclusos em seu plano, pague suas faturas e acompanhe seu plano diretamente pelo aplicativo Minha Infinity Go.
            </p>
            <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold gap-2 group-hover:gap-3 transition-all text-sm">
              <span>Ver tutorial</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>

        {/* Tutorial Card 2 */}
        <Link href="/tutoriais/ittv-plus" className="group block h-full">
          <div className="bg-[var(--card)] rounded-3xl p-6 border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Tv size={24} />
            </div>
            <h2 className="text-xl font-bold text-[var(--card-foreground)] mb-3">ITTV Plus</h2>
            <p className="text-sm text-[var(--card-foreground)] opacity-70 flex-grow mb-6">
              Guia completo para acessar sua conta e assistir aos seus canais de televisão favoritos pelo aplicativo ITTV Plus.
            </p>
            <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold gap-2 group-hover:gap-3 transition-all text-sm">
              <span>Ver tutorial</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>

        {/* Tutorial Card 3 */}
        <Link href="/tutoriais/speedtest" className="group block h-full">
          <div className="bg-[var(--card)] rounded-3xl p-6 border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Gauge size={24} />
            </div>
            <h2 className="text-xl font-bold text-[var(--card-foreground)] mb-3">Teste de velocidade</h2>
            <p className="text-sm text-[var(--card-foreground)] opacity-70 flex-grow mb-6">
              Aprenda como fazer o teste de velocidade corretamente no seu aparelho.
            </p>
            <div className="flex items-center text-orange-600 dark:text-orange-400 font-semibold gap-2 group-hover:gap-3 transition-all text-sm">
              <span>Ver tutorial</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
