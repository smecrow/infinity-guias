"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { ArrowRight, Smartphone, Gauge, Tv, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LandingContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  };

  const cardHover: TargetAndTransition = {
    y: -12,
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Blobs - Adicionam profundidade e movimento ao fundo */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-24 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 py-8 md:py-16 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold shadow-[0_0_15px_rgba(249,115,22,0.1)] animate-[float_4s_infinite_ease-in-out]">
            Sua jornada digital simplificada ✨
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">

          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
            Seus guias da <span className="text-orange-600 dark:text-orange-400">Infinity</span> em um só lugar
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Aprenda a utilizar aplicativos e tirar o máximo proveito de sua conexão e de nossos serviços com tutoriais rápidos, práticos e diretos ao ponto.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tutorial Card 1 */}
          <motion.div whileHover={cardHover} className="h-full">
            <Link href="/tutoriais/minhainfinitygo" className="group block h-full">
              <div className="bg-[var(--card)] rounded-[2rem] p-8 border border-[var(--border)] shadow-sm hover:shadow-2xl hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80">
                <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Smartphone size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--card-foreground)] mb-4">Minha Infinity Go</h2>
                <p className="text-base text-[var(--card-foreground)] opacity-70 flex-grow mb-6 leading-relaxed">
                  Confira os benefícios inclusos em seu plano, pague suas faturas e acompanhe seu plano diretamente pelo aplicativo Minha Infinity Go.
                </p>
                <div className="flex items-center text-orange-600 dark:text-orange-400 font-bold gap-2 group-hover:gap-4 transition-all group-hover:underline decoration-2 underline-offset-4">
                  <span>Ver tutorial</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tutorial Card 2 */}
          <motion.div whileHover={cardHover} className="h-full">
            <Link href="/tutoriais/ittv-plus" className="group block h-full">
              <div className="bg-[var(--card)] rounded-[2rem] p-8 border border-[var(--border)] shadow-sm hover:shadow-2xl hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80">
                <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform">
                  <Tv size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--card-foreground)] mb-4">ITTV Plus</h2>
                <p className="text-base text-[var(--card-foreground)] opacity-70 flex-grow mb-6 leading-relaxed">
                  Guia completo para acessar sua conta e assistir aos seus canais de televisão favoritos pelo aplicativo ITTV Plus.
                </p>
                <div className="flex items-center text-orange-600 dark:text-orange-400 font-bold gap-2 group-hover:gap-4 transition-all group-hover:underline decoration-2 underline-offset-4">
                  <span>Ver tutorial</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tutorial Card 3 */}
          <motion.div whileHover={cardHover} className="h-full">
            <Link href="/tutoriais/speedtest" className="group block h-full">
              <div className="bg-[var(--card)] rounded-[2rem] p-8 border border-[var(--border)] shadow-sm hover:shadow-2xl hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80">
                <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gauge size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--card-foreground)] mb-4">Teste de velocidade</h2>
                <p className="text-base text-[var(--card-foreground)] opacity-70 flex-grow mb-6 leading-relaxed">
                  Aprenda como fazer o teste de velocidade corretamente no seu aparelho.
                </p>
                <div className="flex items-center text-orange-600 dark:text-orange-400 font-bold gap-2 group-hover:gap-4 transition-all group-hover:underline decoration-2 underline-offset-4">
                  <span>Ver tutorial</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Tutorial Card 4 */}
          <motion.div whileHover={cardHover} className="h-full">
            <Link href="/tutoriais/imagina-so" className="group block h-full">
              <div className="bg-[var(--card)] rounded-[2rem] p-8 border border-[var(--border)] shadow-sm hover:shadow-2xl hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col items-center text-center backdrop-blur-sm bg-opacity-80">
                <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Sparkles size={32} />
                </div>
                <h2 className="text-2xl font-bold text-[var(--card-foreground)] mb-4">Imagina Só</h2>
                <p className="text-base text-[var(--card-foreground)] opacity-70 flex-grow mb-6 leading-relaxed">
                  Imagina Só é um aplicativo que oferecemos aos nossos clientes, com histórias infantis. Aprenda a utilizá-lo!
                </p>
                <div className="flex items-center text-orange-600 dark:text-orange-400 font-bold gap-2 group-hover:gap-4 transition-all group-hover:underline decoration-2 underline-offset-4">
                  <span>Ver tutorial</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
