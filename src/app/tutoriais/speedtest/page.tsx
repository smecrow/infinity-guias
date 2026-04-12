"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Monitor, Smartphone, Apple, Info } from 'lucide-react';

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

const ObservationCard = () => (
  <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-2xl mt-12">
    <div className="flex items-start">
      <div className="shrink-0 pt-0.5">
        <Info className="text-amber-500" size={24} />
      </div>
      <div className="ml-4">
        <h4 className="text-amber-800 dark:text-amber-200 font-bold mb-1">Observação Importante</h4>
        <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
          O teste de velocidade pode variar dependendo do aparelho, distância do roteador, interferências na rede e outros fatores, por isso nem sempre o resultado representa a velocidade real da sua conexão.
        </p>
      </div>
    </div>
  </div>
);

export default function SpeedtestTutorial() {
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
      <div className="max-w-4xl mx-auto mb-16">
        <TutorialStep 
          number={1}
          text="Para fazer o teste de velocidade no computador, conecte o aparelho via cabo ou na rede Wi-Fi 5 GHz."
          imageSrc="/tutoriais/speedtest/pc/1.webp"
        />
        <TutorialStep 
          number={2}
          text={
            <span>
              Acesse o site{" "}
              <a href="https://www.speedtest.net/pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">
                speedtest.net/pt
              </a>
              {" "}e verifique se o servidor selecionado é &quot;InfinityGO Telecom&quot;, caso não seja, clique em &quot;Mudar de servidor&quot; e selecione o servidor indicado.
            </span>
          }
          imageSrc="/tutoriais/speedtest/pc/2.webp"
        />
        <TutorialStep 
          number={3}
          text='Clique no botão "Iniciar" e aguarde a finalização do teste.'
          imageSrc="/tutoriais/speedtest/pc/3.webp"
        />
        <TutorialStep 
          number={4}
          text="Pronto! O resultado será exibido na tela."
          imageSrc="/tutoriais/speedtest/pc/4.webp"
          isLast={true}
        />
        <ObservationCard />
      </div>
    </div>
  );

  const renderAndroidTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto mb-16">
        <TutorialStep number={1} text="Abra a loja de aplicativos do seu celular (Play Store)." imageSrc="/tutoriais/speedtest/android/1.webp" />
        <TutorialStep number={2} text='Toque na opção "Pesquisa" no canto inferior direito.' imageSrc="/tutoriais/speedtest/android/2.webp" />
        <TutorialStep number={3} text="Toque na barra de pesquisa." imageSrc="/tutoriais/speedtest/android/3.webp" />
        <TutorialStep number={4} text='Pesquise por "Ookla".' imageSrc="/tutoriais/speedtest/android/4.webp" />
        <TutorialStep number={5} text='Instale o aplicativo "Speedtest por Ookla".' imageSrc="/tutoriais/speedtest/android/5.webp" />
        <TutorialStep number={6} text='Após instalar, toque em "Abrir".' imageSrc="/tutoriais/speedtest/android/6.webp" />
        <TutorialStep number={7} text='Toque em "Avançar".' imageSrc="/tutoriais/speedtest/android/7.webp" />
        <TutorialStep number={8} text='Selecione a localização como "Exato" e toque em "Continuar".' imageSrc="/tutoriais/speedtest/android/8.webp" />
        <TutorialStep number={9} text='Toque em "Não permitir".' imageSrc="/tutoriais/speedtest/android/9.webp" />
        <TutorialStep number={10} text='Toque em "Continue".' imageSrc="/tutoriais/speedtest/android/10.webp" />
        <TutorialStep number={11} text='Arraste a barra inferior para cima e verifique se o servidor selecionado é &quot;InfinityGO Telecom&quot;, caso não seja, toque em &quot;Alterar servidor de teste&quot; e selecione-o.' imageSrc="/tutoriais/speedtest/android/11.webp" />
        <TutorialStep number={12} text='Toque em "Iniciar" e aguarde o teste finalizar.' imageSrc="/tutoriais/speedtest/android/12.webp" />
        <TutorialStep number={13} text="Pronto! O resultado será exibido na tela." imageSrc="/tutoriais/speedtest/android/13.webp" isLast={true} />
        <ObservationCard />
      </div>
    </div>
  );

  const renderIosTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto mb-16">
        <TutorialStep number={1} text="Abra a loja de aplicativos do seu celular (App Store)." imageSrc="/tutoriais/speedtest/ios/1.webp" />
        <TutorialStep number={2} text='Toque na opção "Buscar" no canto inferior direito e toque na barra de pesquisa.' imageSrc="/tutoriais/speedtest/ios/2.webp" />
        <TutorialStep number={3} text='Pesquise por "Ookla" e instale o aplicativo "Speedtest - Teste De Velocidade".' imageSrc="/tutoriais/speedtest/ios/3.webp" />
        <TutorialStep number={4} text='Após instalar, toque em "Abrir".' imageSrc="/tutoriais/speedtest/ios/4.webp" />
        <TutorialStep number={5} text='Toque em "Avançar".' imageSrc="/tutoriais/speedtest/ios/5.webp" />
        <TutorialStep number={6} text='Toque em "Continuar", irá abrir uma tela para a permissão de sua localização, toque em "Permitir durante o Uso do App".' imageSrc="/tutoriais/speedtest/ios/6.webp" />
        <TutorialStep number={7} text='Toque em "Continuar".' imageSrc="/tutoriais/speedtest/ios/7.webp" />
        <TutorialStep number={8} text='Selecione a opção "Pedir ao App para Não Rastrear".' imageSrc="/tutoriais/speedtest/ios/8.webp" />
        <TutorialStep number={9} text='Aperte em "Aceitar cookies" no canto inferior da tela.' imageSrc="/tutoriais/speedtest/ios/9.webp" />
        <TutorialStep number={10} text='Arraste a barra inferior para cima e verifique se o servidor selecionado é &quot;InfinityGO Telecom&quot;, caso não seja, toque em &quot;Alterar servidor de teste&quot; e selecione-o.' imageSrc="/tutoriais/speedtest/ios/10.webp" />
        <TutorialStep number={11} text='Toque em "Iniciar" e aguarde o teste finalizar.' imageSrc="/tutoriais/speedtest/ios/11.webp" />
        <TutorialStep number={12} text='Selecione a opção "Permitir".' imageSrc="/tutoriais/speedtest/ios/12.webp" />
        <TutorialStep number={13} text="Pronto! O resultado será exibido na tela." imageSrc="/tutoriais/speedtest/ios/13.webp" isLast={true} />
        <ObservationCard />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Como fazer o teste de velocidade
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            Aprenda como medir sua velocidade de conexão corretamente em seu computador ou celular.
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
      </div>
    </main>
  );
}
