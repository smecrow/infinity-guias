"use client";

import React from 'react';
import { Phone, MessageSquare, Camera, Clock, MapPin } from 'lucide-react';

const ContactCard = ({ icon, title, description, link, actionText }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  link: string, 
  actionText: string 
}) => (
  <div className="bg-background border border-border rounded-[2.5rem] p-8 flex flex-col items-center text-center hover:border-primary/50 transition-all hover:shadow-xl group">
    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <div className="text-primary w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground mb-8 leading-relaxed">
      {description}
    </p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-auto bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity w-full"
    >
      {actionText}
    </a>
  </div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2">
            Fale com a gente
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para te ajudar. Escolha o canal de sua preferência e entre em contato com nosso suporte.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <ContactCard 
            icon={<MessageSquare size={32} />}
            title="WhatsApp"
            description="Fale direto com o nosso suporte técnico ou financeiro pelo WhatsApp."
            link="https://wa.me/556434555985"
            actionText="Iniciar Conversa"
          />
          <ContactCard 
            icon={<Phone size={32} />}
            title="Telefone"
            description="Nosso time de atendimento está pronto para te ouvir e tirar suas dúvidas."
            link="tel:+556434555985"
            actionText="Ligar Agora"
          />
          <ContactCard 
            icon={<Camera size={32} />}
            title="Instagram"
            description="Siga-nos no Instagram para novidades e atualizações em tempo real."
            link="https://www.instagram.com/infinitygotelecom?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            actionText="@infinitygotelecom"
          />
        </div>

        <div className="bg-muted/30 rounded-[3rem] p-8 md:p-12 border border-border/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold mb-8">Informações da Loja</h2>
              
              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">Segunda a Sexta: 08:00 às 18:00</p>
                  <p className="text-muted-foreground">Sábado: 08:00 às 12:00</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Nosso Endereço</h4>
                  <p className="text-muted-foreground">Rua 19, Qd 13, Lt 19 - Jardim Jussara</p>
                  <p className="text-muted-foreground font-medium">Caldas Novas / GO</p>
                  <p className="text-muted-foreground">CEP: 75682-184</p>
                </div>
              </div>
            </div>

            {/* Minimapa */}
            <div className="w-full h-[350px] lg:h-full min-h-[300px] rounded-[2rem] overflow-hidden border border-border shadow-inner relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.2123456789!2d-48.622716!3d-17.767252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ2JzAyLjEiUyA0OMKwMzcnMTMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1712940000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-border/20 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
