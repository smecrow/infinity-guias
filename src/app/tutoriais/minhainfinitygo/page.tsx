"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, CreditCard, Lock, Star, ChevronRight, Smartphone, Apple } from 'lucide-react';

interface StepProps {
  number: number;
  text: string;
  imageSrc?: string;
  isLast?: boolean;
}

const TutorialStep = ({ number, text, imageSrc, isLast }: StepProps) => (
  <div className={`mb-12 ${!isLast ? 'border-l-2 border-primary/20 ml-4 pl-8 pb-4' : 'ml-4 pl-8'}`}>
    <div className="relative">
      <div className="absolute -left-[45px] top-0 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
        {number}
      </div>
      <p className="text-lg font-medium mb-6 text-foreground/90">{text}</p>
      {imageSrc && (
        <div className="rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm max-w-[320px]">
          <Image 
            src={imageSrc} 
            alt={`Passo ${number}`} 
            width={320} 
            height={640} 
            className="w-full h-auto object-cover"
            priority={number <= 2}
          />
        </div>
      )}
    </div>
  </div>
);

export default function MinhaInfinityGoTutorial() {
  const [activeTutorial, setActiveTutorial] = useState<'main' | 'desbloqueio' | 'faturas' | 'beneficios'>('main');
  const [os, setOs] = useState<'android' | 'ios'>('android');

  const mainStepsAndroid = [
    { text: "Abra a loja de aplicativos de seu celular (Playstore).", img: "/tutoriais/minhainfinitygo/android/Screenshot_1.webp" },
    { text: 'Aperte no botão "Pesquisar" no canto inferior direito.', img: "/tutoriais/minhainfinitygo/android/Screenshot_2.webp" },
    { text: 'Aperte em "Pesquisar apps e jogos".', img: "/tutoriais/minhainfinitygo/android/Screenshot_3.webp" },
    { text: 'Pesquise "MinhaInfinityGo" na aba de pesquisa.', img: "/tutoriais/minhainfinitygo/android/Screenshot_4.webp" },
    { text: 'Aperte no botão "Instalar".', img: "/tutoriais/minhainfinitygo/android/Screenshot_5.webp" },
    { text: 'Após instalado, abra o aplicativo com o botão "Abrir".', img: "/tutoriais/minhainfinitygo/android/Screenshot_6.webp" },
    { text: 'Se você não tiver uma conta no aplicativo, aperte no botão "Primeiro acesso?", no canto inferior. Caso já tiver uma conta, pule para o passo 9.', img: "/tutoriais/minhainfinitygo/android/Screenshot_7.webp" },
    { text: 'Registre a sua conta com os dados que foram cadastrados em loja, ao fazer o contrato. Email, CPF/CNPJ e Telefone celular. Após isso, aperte em "Continuar"', img: "/tutoriais/minhainfinitygo/android/Screenshot_8.webp" },
    { text: 'Se você já criou a sua conta, coloque os seus dados, email e senha, e aperte no botão "Entrar".', img: "/tutoriais/minhainfinitygo/android/Screenshot_9.webp" },
    { text: "Dessa forma, o aplicativo será aberto, e você poderá desfrutar de suas funções.", img: undefined }
  ];

  const mainStepsIos = [
    { text: "Abra a loja de aplicativos de seu celular (AppStore).", img: "/tutoriais/minhainfinitygo/ios/1.webp" },
    { text: 'Aperte no botão "Buscar" no canto inferior direito.', img: "/tutoriais/minhainfinitygo/ios/2.webp" },
    { text: 'Pesquise "MinhaInfinityGo" na aba de pesquisa.', img: "/tutoriais/minhainfinitygo/ios/3.webp" },
    { text: 'Aperte no botão "Obter" ou em uma nuvem que aparecerá na foto a seguir.', img: "/tutoriais/minhainfinitygo/ios/4.webp" },
    { text: 'Após instalado, abra o aplicativo com o botão "Abrir".', img: "/tutoriais/minhainfinitygo/ios/5.webp" },
    { text: 'Se você não tiver uma conta no aplicativo, aperte no botão "Primeiro acesso?", no canto inferior. Caso já tiver uma conta, pule para o passo 8.', img: "/tutoriais/minhainfinitygo/ios/6.webp" },
    { text: 'Registre a sua conta com os dados que foram cadastrados em loja, ao fazer o contrato. Email, CPF/CNPJ e Telefone celular. Após isso, aperte em "Continuar".', img: "/tutoriais/minhainfinitygo/ios/7.webp" },
    { text: 'Se você já criou a sua conta, coloque os seus dados, email e senha, e aperte no botão "Entrar".', img: "/tutoriais/minhainfinitygo/ios/8.webp" },
    { text: "Dessa forma, o aplicativo será aberto, e você poderá desfrutar de suas funções.", img: undefined }
  ];

  const renderMainTutorial = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Como usar o MinhaInfinityGo
        </h1>
        <p className="text-xl text-muted-foreground mb-8">Escolha seu sistema para ver o passo a passo.</p>
        
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setOs('android')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${os === 'android' ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            <Smartphone size={20} /> Android
          </button>
          <button 
            onClick={() => setOs('ios')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${os === 'ios' ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            <Apple size={20} /> iOS (iPhone)
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto mb-16">
        {(os === 'android' ? mainStepsAndroid : mainStepsIos).map((step, index, array) => (
          <TutorialStep 
            key={index}
            number={index + 1}
            text={step.text}
            imageSrc={step.img}
            isLast={index === array.length - 1}
          />
        ))}
      </div>

      <section className="bg-muted/50 rounded-3xl p-8 border border-border shadow-inner">
        <h2 className="text-2xl font-bold mb-6 text-center">Precisa de ajuda com algo mais?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setActiveTutorial('desbloqueio')}
            className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-md flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lock className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Desbloqueio de Confiança</h3>
            <p className="text-sm text-muted-foreground mb-4">Aprenda a liberar sua internet temporariamente.</p>
            <div className="flex items-center text-primary text-sm font-medium">
              Ver tutorial <ChevronRight className="ml-1 w-4 h-4" />
            </div>
          </button>

          <button 
            onClick={() => setActiveTutorial('faturas')}
            className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-md flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CreditCard className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Pagar Faturas</h3>
            <p className="text-sm text-muted-foreground mb-4">Veja como emitir boleto ou pagar via Pix.</p>
            <div className="flex items-center text-primary text-sm font-medium">
              Ver tutorial <ChevronRight className="ml-1 w-4 h-4" />
            </div>
          </button>

          <button 
            onClick={() => setActiveTutorial('beneficios')}
            className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-md flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Star className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Ver Benefícios</h3>
            <p className="text-sm text-muted-foreground mb-4">Consulte o que está incluso no seu plano.</p>
            <div className="flex items-center text-primary text-sm font-medium">
              Ver tutorial <ChevronRight className="ml-1 w-4 h-4" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );

  const renderDesbloqueio = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto py-12">
      <button 
        onClick={() => setActiveTutorial('main')}
        className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar ao tutorial principal
      </button>

      <header className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Como fazer um desbloqueio de confiança?</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8" />
      </header>

      <div className="space-y-4">
        <TutorialStep 
          number={1} 
          text={os === 'android' ? "Na tela inicial de seu aplicativo MinhaInfinityGo, aperte na opção de seu plano." : "Na tela inicial de seu aplicativo MinhaInfinityGo, aperte na descrição de seu plano."} 
          imageSrc={os === 'android' ? "/tutoriais/minhainfinitygo/android/Screenshot_14.webp" : "/tutoriais/minhainfinitygo/ios/9.webp"}
        />
        <TutorialStep 
          number={2} 
          text='Será exibido o seu plano atual, o local onde a instalação foi realizada e logo abaixo, terá a opção de "Desbloquear Internet".' 
          imageSrc={os === 'android' ? "/tutoriais/minhainfinitygo/android/Screenshot_15.webp" : "/tutoriais/minhainfinitygo/ios/12.webp"}
        />
        <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-6 rounded-r-2xl mb-12 ml-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white font-bold text-sm">3</span>
            </div>
            <div className="ml-4">
              <h4 className="text-amber-800 dark:text-amber-200 font-bold mb-1">Observação Importante</h4>
              <p className="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
                Esse desbloqueio será realizado, mas durará apenas <strong>48 horas</strong>. Caso o pagamento não for efetuado dentro desse período, o bloqueio ocorrerá novamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFaturas = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto py-12">
      <button 
        onClick={() => setActiveTutorial('main')}
        className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar ao tutorial principal
      </button>

      <header className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Como pagar as minhas faturas?</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8" />
      </header>

      <div className="space-y-4">
        <TutorialStep 
          number={1} 
          text='Para realizar o pagamento de suas faturas em aberto, você apertará na opção "Faturas", que se lozaliza no canto inferior do aplicativo, suas faturas pendentes serão exibidas logo abaixo de seu contrato.' 
          imageSrc={os === 'android' ? "/tutoriais/minhainfinitygo/android/Screenshot_12.webp" : "/tutoriais/minhainfinitygo/ios/10.webp"}
        />
      </div>
    </div>
  );

  const renderBeneficios = () => (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto py-12">
      <button 
        onClick={() => setActiveTutorial('main')}
        className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Voltar ao tutorial principal
      </button>

      <header className="mb-12">
        <h2 className="text-4xl font-bold mb-4">Como posso ver os benefícios inclusos em meu plano?</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-8" />
      </header>

      <div className="space-y-4">
        <TutorialStep 
          number={1} 
          text='Para verificar quais benefícios estão inclusos em seu plano, aperte na opção "Pra você", localizada na parte inferior de seu aplicativo. Irá exibir todos os benefícios inclusos em seu plano e guias de como utiliza-los.' 
          imageSrc={os === 'android' ? "/tutoriais/minhainfinitygo/android/Screenshot_13.webp" : "/tutoriais/minhainfinitygo/ios/11.webp"}
        />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {activeTutorial === 'main' && renderMainTutorial()}
        {activeTutorial === 'desbloqueio' && renderDesbloqueio()}
        {activeTutorial === 'faturas' && renderFaturas()}
        {activeTutorial === 'beneficios' && renderBeneficios()}
      </div>
    </main>
  );
}
