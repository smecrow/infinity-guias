"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg leading-none">IG</span>
            </div>
            <span className="font-bold text-xl text-white">InfinityGuias</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/tutoriais/minhainfinitygo" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              MinhaInfinityGO
            </Link>
            <Link href="/tutoriais/ittv-plus" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              ITTV Plus
            </Link>
            <Link href="/tutoriais/speedtest" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Speedtest
            </Link>
            <Link href="/tutoriais/dicas-de-rede" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Dicas de Rede
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1, display: "block" },
          closed: { height: 0, opacity: 0, transitionEnd: { display: "none" } }
        }}
        className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
      >
        <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
          <Link
            href="/tutoriais/minhainfinitygo"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            MinhaInfinityGO
          </Link>
          <Link
            href="/tutoriais/ittv-plus"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            ITTV Plus
          </Link>
          <Link
            href="/tutoriais/speedtest"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Speedtest
          </Link>
          <Link
            href="/tutoriais/dicas-de-rede"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            Dicas de Rede
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
