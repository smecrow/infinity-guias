"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Apple, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface StepProps {
  number: number;
  text: React.ReactNode;
  imageSrc?: string;
  isLast?: boolean;
}

const TutorialStep = ({ number, text, imageSrc, isLast }: StepProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
    className={`mb-12 relative ${!isLast ? 'border-l-2 border-primary/20 ml-6 md:ml-4 pl-6 md:pl-8 pb-4' : 'ml-6 md:ml-4 pl-6 md:pl-8'}`}
  >
    <div className="relative">
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: (number * 0.1) + 0.2 }}
        className="absolute -left-[39px] md:-left-[45px] top-0 bg-primary text-primary-foreground w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold shadow-lg text-sm md:text-base z-10"
      >
        {number}
      </motion.div>
      <div className="text-base md:text-lg font-medium mb-6 text-foreground/90 leading-relaxed">{text}</div>
      {imageSrc && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: (number * 0.1) + 0.3 }}
          className="rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm max-w-full sm:max-w-[320px]"
        >
          <Image 
            src={imageSrc} 
            alt={`Passo ${number}`} 
            width={320} 
            height={640} 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      )}
    </div>
  </motion.div>
);

const VideoCard = ({ videoSrc, title }: { videoSrc: string; title: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mt-16 bg-muted/30 border border-border rounded-3xl p-6 md:p-8 overflow-hidden"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
        <Play className="text-primary w-5 h-5 fill-primary/20" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
    </div>
    <div className="rounded-2xl overflow-hidden border border-border bg-black max-w-[320px] mx-auto shadow-2xl transition-transform hover:scale-[1.01] duration-500">
      <video 
        controls 
        className="w-full h-auto block"
        poster="/favicon/favicon.png"
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
    </div>
  </motion.section>
);

export default function IttvPlusCriacaoTutorial() {
  const [os, setOs] = useState<'android' | 'ios'>('android');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setTimeout(() => {
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setOs('ios');
      } else {
        setOs('android');
      }
    }, 0);
  }, []);

  const androidSteps = [
    { text: "Abra o aplicativo do Minha Infinity Go em seu celular.", img: "/tutoriais/ittv-plus-criacao/android/1.webp" },
    { text: 'Digite o seu email e senha e toque no botão "Entrar".', img: "/tutoriais/ittv-plus-criacao/android/2.webp" },
    { text: 'Na parte inferior do aplicativo, terá a aba de "Pra você", toque nela.', img: "/tutoriais/ittv-plus-criacao/android/3.webp" },
    { text: 'Selecione o aplicativo "ITTV Plus".', img: "/tutoriais/ittv-plus-criacao/android/4.webp" },
    { text: 'Toque na opção "Ativar ITTV Plus".', img: "/tutoriais/ittv-plus-criacao/android/5.webp" },
    { 
      text: (
        <span>
          Pronto! A sua conta foi ativada, basta tocar no &quot;Ok&quot; e entrar em sua conta no{" "}
          <Link href="/tutoriais/ittv-plus" className="text-primary hover:underline font-bold">ITTV Plus</Link>!
        </span>
      ), 
      img: "/tutoriais/ittv-plus-criacao/android/6.webp" 
    },
  ];

  const iosSteps = [
    { text: "Abra o aplicativo do Minha Infinity Go em seu celular.", img: "/tutoriais/ittv-plus-criacao/ios/1.webp" },
    { text: 'Digite o seu email e senha e toque no botão "Entrar".', img: "/tutoriais/ittv-plus-criacao/ios/2.webp" },
    { text: 'Na parte inferior do aplicativo, terá a aba de "Pra você", toque nela.', img: "/tutoriais/ittv-plus-criacao/ios/3.webp" },
    { text: 'Selecione o aplicativo "ITTV Plus".', img: "/tutoriais/ittv-plus-criacao/ios/4.webp" },
    { text: 'Toque na opção "Ativar ITTV Plus".', img: "/tutoriais/ittv-plus-criacao/ios/5.webp" },
    { 
      text: (
        <span>
          Pronto! A sua conta foi ativada, basta tocar no &quot;Ok&quot; e entrar em sua conta no{" "}
          <Link href="/tutoriais/ittv-plus" className="text-primary hover:underline font-bold">ITTV Plus</Link>!
        </span>
      ), 
      img: "/tutoriais/ittv-plus-criacao/ios/6.webp" 
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/tutoriais/ittv-plus"
          className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group inline-flex"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar ao tutorial ITTV Plus
        </Link>

        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Como criar e ativar sua conta ITTV Plus
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Siga os passos abaixo para criar seu acesso e começar a assistir.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            <button 
              onClick={() => setOs('android')}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all flex-1 sm:flex-none min-w-[120px] ${os === 'android' ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
            >
              <Smartphone size={18} className="md:w-5 md:h-5" /> Android
            </button>
            <button 
              onClick={() => setOs('ios')}
              className={`flex items-center justify-center gap-2 px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all flex-1 sm:flex-none min-w-[120px] ${os === 'ios' ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
            >
              <Apple size={18} className="md:w-5 md:h-5" /> iOS
            </button>
          </div>
        </header>

        <div className="max-w-2xl mx-auto mb-16">
          {(os === 'android' ? androidSteps : iosSteps).map((step, index, array) => (
            <TutorialStep 
              key={`${os}-${index}`}
              number={index + 1}
              text={step.text}
              imageSrc={step.img}
              isLast={index === array.length - 1}
            />
          ))}

          <VideoCard 
            key={`${os}-video`}
            videoSrc={`/tutoriais/ittv-plus-criacao/${os}/ittv-criacao-${os}.mp4`} 
            title={`Tutorial em Vídeo (${os === 'android' ? 'Android' : 'iOS'})`}
          />
        </div>

        <footer className="mt-16 pt-8 text-center text-muted-foreground">
        </footer>
      </div>
    </main>
  );
}
