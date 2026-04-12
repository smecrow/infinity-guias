"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingContent from "@/components/LandingContent";

export default function Home() {
  const [selectedDevice, setSelectedDevice] = useState<"desktop" | "mobile" | null>(null);
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    const detectDevice = () => {
      const ua = navigator.userAgent;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      const isMobileWidth = window.innerWidth < 1024; // Tablets e celulares

      if (isMobileUA || isMobileWidth) {
        setSelectedDevice("mobile");
      } else {
        setSelectedDevice("desktop");
      }
      
      // Pequeno delay para garantir uma transição suave de entrada
      setTimeout(() => setIsDetecting(false), 500);
    };

    detectDevice();
  }, []);

  return (
    <main className="min-h-screen pt-16 pb-10">
      <AnimatePresence mode="wait">
        {isDetecting ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-background z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full"
            />
          </motion.div>
        ) : (
          selectedDevice && (
            <LandingContent 
              key="content" 
              selectedDevice={selectedDevice} 
              onReset={() => {}} // Função de reset desativada pois a detecção é automática
            />
          )
        )}
      </AnimatePresence>
    </main>
  );
}
