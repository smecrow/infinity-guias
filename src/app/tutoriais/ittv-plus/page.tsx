"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Apple, HelpCircle, MessageCircle, Info, UserPlus, Play } from 'lucide-react';

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
          className={`rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm ${imageSrc.includes('pc') ? 'max-w-full' : 'max-w-full sm:max-w-[320px]'}`}
        >
          <Image 
            src={imageSrc} 
            alt={`Passo ${number}`} 
            width={800} 
            height={450} 
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            priority={number <= 1}
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

export default function IttvPlusTutorial() {
  const [device, setDevice] = useState<'pc' | 'android' | 'ios'>('pc');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setTimeout(() => {
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setDevice('ios');
      } else if (/android/.test(userAgent)) {
        setDevice('android');
      } else {
        setDevice('pc');
      }
    }, 0);
  }, []);

  const renderPcTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto mb-16 flex flex-col items-center">
        <div className="w-full max-w-2xl text-left">
          <div className="bg-primary/5 border border-white/20 rounded-2xl p-6 mb-12 ml-6 md:ml-4 relative animate-[border-glow_3s_infinite_alternate] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <p className="text-base md:text-lg font-medium text-foreground/90 text-center relative z-10">
              Não tem uma conta no ITTV Plus? Aprenda a como criar uma e ativar a conta <Link href="/tutoriais/ittv-plus/criacao" className="text-primary hover:underline font-bold transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">aqui</Link>!
            </p>

            <style jsx>{`
              @keyframes border-glow {
                from { 
                  border-color: rgba(255, 255, 255, 0.1); 
                  box-shadow: 0 0 5px rgba(255, 255, 255, 0.05);
                }
                to { 
                  border-color: rgba(255, 255, 255, 0.5); 
                  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                }
              }
            `}</style>
          </div>
          <TutorialStep 
            number={1}
            text={
              <span>
                Para utilizar o ITTV Plus, acesse o link{" "}
                <a href="https://tv.ittv.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
                  https://tv.ittv.com.br
                </a>
                {" "}, depois entre com o e-mail e a senha cadastrados no aplicativo{" "}
                <Link href="/tutoriais/minhainfinitygo" className="text-primary hover:underline font-bold">
                  Minha Infinity Go
                </Link>
                {" "}e, em seguida, clique no botão &quot;Entrar&quot;.
              </span>
            }
            imageSrc="/tutoriais/ittv-plus/pc/2.webp"
          />
          <TutorialStep 
            number={2}
            text="Após entrar em sua conta, você poderá assistir canais ao vivo, séries e filmes diretamente pelo site."
            imageSrc="/tutoriais/ittv-plus/pc/3.webp"
            isLast={true}
          />
        </div>
      </div>
    </div>
  );

  const renderAndroidTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-primary/5 border border-white/20 rounded-2xl p-6 mb-12 ml-6 md:ml-4 relative animate-[border-glow_3s_infinite_alternate] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          <p className="text-base md:text-lg font-medium text-foreground/90 text-center relative z-10">
            Não tem uma conta no ITTV Plus? Aprenda a como criar uma e ativar a conta <Link href="/tutoriais/ittv-plus/criacao" className="text-primary hover:underline font-bold transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">aqui</Link>!
          </p>
          <style jsx>{`
            @keyframes border-glow {
              from { 
                border-color: rgba(255, 255, 255, 0.1); 
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.05);
              }
              to { 
                border-color: rgba(255, 255, 255, 0.5); 
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
              }
            }
          `}</style>
        </div>
        <TutorialStep 
          number={1}
          text="Abra a loja de aplicativos do seu celular (Play Store)."
          imageSrc="/tutoriais/ittv-plus/android/1.webp"
        />
        <TutorialStep 
          number={2}
          text='Toque na opção "Pesquisa" e depois em "Pesquisar apps e jogos".'
          imageSrc="/tutoriais/ittv-plus/android/2.webp"
        />
        <TutorialStep 
          number={3}
          text='Digite "ITTV Plus" na barra de pesquisa.'
          imageSrc="/tutoriais/ittv-plus/android/3.webp"
        />
        <TutorialStep 
          number={4}
          text='Quando o aplicativo aparecer, toque em "Instalar".'
          imageSrc="/tutoriais/ittv-plus/android/4.webp"
        />
        <TutorialStep 
          number={5}
          text='Após a instalação, toque em "Abrir".'
          imageSrc="/tutoriais/ittv-plus/android/5.webp"
        />
        <TutorialStep 
          number={6}
          text={
            <span>
              Faça login usando o mesmo e-mail e senha do aplicativo{" "}
              <Link href="/tutoriais/minhainfinitygo" className="text-primary hover:underline font-bold">
                Minha Infinity Go
                </Link>              .
            </span>
          }
          imageSrc="/tutoriais/ittv-plus/android/6.webp"
        />
        <TutorialStep 
          number={7}
          text="Pronto! Agora você já pode assistir canais ao vivo, séries e filmes no ITTV Plus."
          imageSrc="/tutoriais/ittv-plus/android/7.webp"
          isLast={true}
        />
        <VideoCard 
          videoSrc="/tutoriais/ittv-plus/android/ittv-android.mp4" 
          title="Tutorial em Vídeo (Android)"
        />
      </div>
    </div>
  );

  const renderIosTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto mb-16">
        <div className="bg-primary/5 border border-white/20 rounded-2xl p-6 mb-12 ml-6 md:ml-4 relative animate-[border-glow_3s_infinite_alternate] shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          <p className="text-base md:text-lg font-medium text-foreground/90 text-center relative z-10">
            Não tem uma conta no ITTV Plus? Aprenda a como criar uma e ativar a conta <Link href="/tutoriais/ittv-plus/criacao" className="text-primary hover:underline font-bold transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">aqui</Link>!
          </p>
          <style jsx>{`
            @keyframes border-glow {
              from { 
                border-color: rgba(255, 255, 255, 0.1); 
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.05);
              }
              to { 
                border-color: rgba(255, 255, 255, 0.5); 
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
              }
            }
          `}</style>
        </div>
        <TutorialStep 
          number={1}
          text="Abra a loja de aplicativos do seu celular (AppStore)."
          imageSrc="/tutoriais/ittv-plus/ios/1.webp"
        />
        <TutorialStep 
          number={2}
          text='Toque na opção "Buscar" no canto inferior direito e depois em "Jogos, Apps, Artigos e Mais".'
          imageSrc="/tutoriais/ittv-plus/ios/2.webp"
        />
        <TutorialStep 
          number={3}
          text='Digite "ITTV Plus" na barra de pesquisa.'
          imageSrc="/tutoriais/ittv-plus/ios/3.webp"
        />
        <TutorialStep 
          number={4}
          text='Quando o aplicativo aparecer, toque em "Obter".'
          imageSrc="/tutoriais/ittv-plus/ios/4.webp"
        />
        <TutorialStep 
          number={5}
          text='Após a instalação, toque em "Abrir".'
          imageSrc="/tutoriais/ittv-plus/ios/5.webp"
        />
        <TutorialStep 
          number={6}
          text={
            <span>
              Faça login usando o mesmo e-mail e senha do aplicativo{" "}
              <Link href="/tutoriais/minhainfinitygo" className="text-primary hover:underline font-bold">
                Minha Infinity Go
                </Link>              .
            </span>
          }
          imageSrc="/tutoriais/ittv-plus/ios/6.webp"
        />
        <TutorialStep 
          number={7}
          text="Pronto! Agora você já pode assistir canais ao vivo, séries e filmes no ITTV Plus."
          imageSrc="/tutoriais/ittv-plus/ios/7.webp"
          isLast={true}
        />
        <VideoCard 
          videoSrc="/tutoriais/ittv-plus/ios/ittv-ios.mp4" 
          title="Tutorial em Vídeo (iOS)"
        />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Como usar o ITTV Plus
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            Assista seus canais favoritos diretamente no navegador, smartphone ou tablet.
          </p>
          <p className="text-xl text-muted-foreground mb-8">Escolha seu sistema para ver o passo a passo.</p>
        </header>

        {/* Seletor de Dispositivo */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          <button 
            onClick={() => setDevice('pc')}
            className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base flex-1 sm:flex-none min-w-[120px] ${device === 'pc' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            <Monitor size={18} className="md:w-5 md:h-5" /> PC
          </button>
          <button 
            onClick={() => setDevice('android')}
            className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base flex-1 sm:flex-none min-w-[120px] ${device === 'android' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            <Smartphone size={18} className="md:w-5 md:h-5" /> Android
          </button>
          <button 
            onClick={() => setDevice('ios')}
            className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base flex-1 sm:flex-none min-w-[120px] ${device === 'ios' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            <Apple size={18} className="md:w-5 md:h-5" /> iOS
          </button>
        </div>

        {device === 'pc' && renderPcTutorial()}
        {device === 'android' && renderAndroidTutorial()}
        {device === 'ios' && renderIosTutorial()}

        {/* Seção Precisa de ajuda? */}
        <section className="bg-muted/50 rounded-3xl p-6 md:p-8 border border-border shadow-inner mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Precisa de ajuda com algo mais?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/tutoriais/ittv-plus/criacao"
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UserPlus className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Criar e Ativar Conta</h3>
              <p className="text-sm text-muted-foreground mb-4">Aprenda a criar seu acesso ao ITTV Plus.</p>
              <div className="flex items-center text-primary text-sm font-medium">
                Ver tutorial <Info className="ml-1 w-4 h-4" />
              </div>
            </Link>

            <Link 
              href="/contato"
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-sm text-muted-foreground mb-4">Fale com nossa equipe pelo WhatsApp.</p>
              <div className="flex items-center text-primary text-sm font-medium">
                Entrar em contato <HelpCircle className="ml-1 w-4 h-4" />
              </div>
            </Link>

            <Link 
              href="/tutoriais/minhainfinitygo"
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-md flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Info className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Minha Infinity Go</h3>
              <p className="text-sm text-muted-foreground mb-4">Aprenda a gerenciar sua conta e faturas.</p>
              <div className="flex items-center text-primary text-sm font-medium">
                Ver tutorial <Info className="ml-1 w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
