"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, ArrowLeft, Smartphone, Sparkles } from "lucide-react";

interface StepProps {
  number: number;
  text: string;
  imageSrc: string;
  isLast?: boolean;
}

const iosSteps = [
  {
    text: "Abra a loja de aplicativos de seu telefone, App Store no iPhone, ou então PlayStore no Android.",
    img: "/tutoriais/imagina-so/ios/1.png",
  },
  {
    text: "Toque na barra de pesquisa.",
    img: "/tutoriais/imagina-so/ios/2.png",
  },
  {
    text: 'Pesquise pelo aplicativo "Imagina Só".',
    img: "/tutoriais/imagina-so/ios/3.png",
  },
  {
    text: "Instale o aplicativo.",
    img: "/tutoriais/imagina-so/ios/4.png",
  },
  {
    text: 'Toque em "Próximo" e, em seguida, em "Continuar".',
    img: "/tutoriais/imagina-so/ios/5.png",
  },
  {
    text: 'Toque em "Entrar ou cadastrar-se", no canto inferior da tela.',
    img: "/tutoriais/imagina-so/ios/6.png",
  },
  {
    text: "Digite o código informado. No exemplo da imagem, o código é 2, 3, 6.",
    img: "/tutoriais/imagina-so/ios/7.png",
  },
  {
    text: 'Toque em "Entrar com parceiro".',
    img: "/tutoriais/imagina-so/ios/8.png",
  },
  {
    text: 'Digite o número de telefone cadastrado na InfinityGO e toque em "Continuar".',
    img: "/tutoriais/imagina-so/ios/9.png",
  },
  {
    text: 'Insira o código enviado por SMS para o seu número de telefone e toque em "Continuar".',
    img: "/tutoriais/imagina-so/ios/10.png",
  },
  {
    text: 'Toque em "Confirmar".',
    img: "/tutoriais/imagina-so/ios/11.png",
  },
  {
    text: "Pronto! Agora você pode utilizar o aplicativo Imagina Só no seu celular.",
    img: "/tutoriais/imagina-so/ios/12.png",
  },
];

const androidSteps = [
  {
    text: "Abra a loja de aplicativos de seu telefone, App Store no iPhone, ou então PlayStore no Android.",
    img: "/tutoriais/imagina-so/android/1.png",
  },
  {
    text: "Toque na barra de pesquisa.",
    img: "/tutoriais/imagina-so/android/2.png",
  },
  {
    text: 'Pesquise pelo aplicativo "Imagina Só".',
    img: "/tutoriais/imagina-so/android/3.png",
  },
  {
    text: "Instale o aplicativo.",
    img: "/tutoriais/imagina-so/android/4.png",
  },
  {
    text: 'Toque em "Próximo" e, em seguida, em "Continuar".',
    img: "/tutoriais/imagina-so/android/5.png",
  },
  {
    text: 'Toque em "Entrar ou cadastrar-se", no canto inferior da tela.',
    img: "/tutoriais/imagina-so/android/6.png",
  },
  {
    text: "Digite o código informado. No exemplo da imagem, o código é 8, 7, 6.",
    img: "/tutoriais/imagina-so/android/7.png",
  },
  {
    text: 'Toque em "Entrar com parceiro".',
    img: "/tutoriais/imagina-so/android/8.png",
  },
  {
    text: 'Digite o número de telefone cadastrado na InfinityGO e toque em "Continuar".',
    img: "/tutoriais/imagina-so/android/9.png",
  },
  {
    text: 'Insira o código enviado por SMS para o seu número de telefone e toque em "Continuar".',
    img: "/tutoriais/imagina-so/android/10.png",
  },
  {
    text: "Pronto! Agora você pode utilizar o aplicativo Imagina Só no seu celular.",
    img: "/tutoriais/imagina-so/android/11.jpeg",
  },
];

const TutorialStep = ({ number, text, imageSrc, isLast }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: number * 0.05 }}
    className={`mb-12 relative ${!isLast ? "border-l-2 border-primary/20 ml-6 md:ml-4 pl-6 md:pl-8 pb-4" : "ml-6 md:ml-4 pl-6 md:pl-8"}`}
  >
    <div className="relative">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: number * 0.05 + 0.1 }}
        className="absolute -left-[39px] md:-left-[45px] top-0 bg-primary text-primary-foreground w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold shadow-lg text-sm md:text-base z-10"
      >
        {number}
      </motion.div>
      <p className="text-base md:text-lg font-medium mb-6 text-foreground/90 leading-relaxed">
        {text}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: number * 0.05 + 0.2 }}
        className="rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm max-w-full sm:max-w-[320px]"
      >
        <Image
          src={imageSrc}
          alt={`Passo ${number} do tutorial Imagina Só`}
          width={320}
          height={640}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          priority={number <= 1}
        />
      </motion.div>
    </div>
  </motion.div>
);

export default function ImaginaSoTutorial() {
  const [os, setOs] = React.useState<"ios" | "android">("ios");
  const currentSteps = os === "ios" ? iosSteps : androidSteps;

  React.useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setTimeout(() => {
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setOs("ios");
      } else if (/android/.test(userAgent)) {
        setOs("android");
      }
    }, 0);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar ao início
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="text-primary" size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Como usar o Imagina Só
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            Aprenda como instalar o aplicativo, entrar com parceiro e acessar sua conta pelo celular.
          </p>
          <p className="text-xl text-muted-foreground mb-8">Escolha seu sistema para ver o passo a passo.</p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => setOs("ios")}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all flex-1 sm:flex-none min-w-[120px] ${os === "ios" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              <Apple size={18} className="md:w-5 md:h-5" /> iOS
            </button>
            <button
              onClick={() => setOs("android")}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all flex-1 sm:flex-none min-w-[120px] ${os === "android" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              <Smartphone size={18} className="md:w-5 md:h-5" /> Android
            </button>
          </div>
        </motion.header>

        <div className="max-w-2xl mx-auto mb-16">
          {currentSteps.map((step, index) => (
            <TutorialStep
              key={step.img}
              number={index + 1}
              text={step.text}
              imageSrc={step.img}
              isLast={index === currentSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
