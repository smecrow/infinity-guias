"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Monitor, Smartphone, Apple, ChevronRight } from 'lucide-react';

interface StepProps {
  number: number;
  text: React.ReactNode;
  imageSrc?: string;
  isLast?: boolean;
}

const TutorialStep = ({ number, text, imageSrc, isLast }: StepProps) => (
  <div className={`mb-12 relative ${!isLast ? 'border-l-2 border-primary/20 ml-6 md:ml-4 pl-6 md:pl-8 pb-4' : 'ml-6 md:ml-4 pl-6 md:pl-8'}`}>
    <div className="relative">
      <div className="absolute -left-[39px] md:-left-[45px] top-0 bg-primary text-primary-foreground w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold shadow-lg text-sm md:text-base">
        {number}
      </div>
      <div className="text-base md:text-lg font-medium mb-6 text-foreground/90 leading-relaxed">{text}</div>
      {imageSrc && (
        <div className={`rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm ${imageSrc.includes('pc') ? 'max-w-full' : 'max-w-full sm:max-w-[320px]'}`}>
          <Image 
            src={imageSrc} 
            alt={`Passo ${number}`} 
            width={800} 
            height={450} 
            className="w-full h-auto object-cover"
            priority={number <= 1}
          />
        </div>
      )}
    </div>
  </div>
);

export default function IttvPlusTutorial() {
  const [device, setDevice] = useState<'pc' | 'android' | 'ios'>('pc');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDevice('ios');
    } else if (/android/.test(userAgent)) {
      setDevice('android');
    } else {
      setDevice('pc');
    }
  }, []);

  const renderPcTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Como usar o ITTV Plus no PC
        </h1>
        <p className="text-xl text-muted-foreground">Assista seus canais favoritos diretamente no navegador.</p>
      </header>

      <div className="max-w-4xl mx-auto mb-16 flex flex-col items-center">
        <div className="w-full max-w-2xl text-left">
          <TutorialStep 
            number={1}
            text={
              <span>
                Para utilizar o ITTV Plus, acesse le link{" "}
                <a href="https://tv.ittv.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
                  https://tv.ittv.com.br
                </a>
                {" "}, depois entre com o e-mail e a senha cadastrados no aplicativo{" "}
                <Link href="/tutoriais/minhainfinitygo" className="text-primary hover:underline font-bold">
                  MinhaInfinityGO
                </Link>
                {" "}e, em seguida, clique no botão "Entrar".
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
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Como usar o ITTV Plus no Android
        </h1>
        <p className="text-xl text-muted-foreground">Assista em seu smartphone ou tablet Android.</p>
      </header>

      <div className="max-w-2xl mx-auto mb-16">
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
                MinhaInfinityGO
              </Link>
              .
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
      </div>
    </div>
  );

  const renderIosTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Como usar o ITTV Plus no iOS
        </h1>
        <p className="text-xl text-muted-foreground">Assista em seu iPhone ou iPad.</p>
      </header>

      <div className="max-w-2xl mx-auto mb-16">
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
                MinhaInfinityGO
              </Link>
              .
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
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
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
      </div>
    </main>
  );
}
