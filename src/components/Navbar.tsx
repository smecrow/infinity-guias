"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Smartphone, Tv, Gauge, Home, Phone, ChevronDown, Lock, CreditCard, Star, Info, UserPlus } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Início", href: "/", icon: <Home className="w-4 h-4" /> },
    { 
      name: "Minha Infinity Go", 
      href: "/tutoriais/minhainfinitygo", 
      icon: <Smartphone className="w-4 h-4" />,
      submenu: [
        { name: "Como usar", href: "/tutoriais/minhainfinitygo?tab=main", icon: <Info className="w-4 h-4" /> },
        { name: "Desbloqueio", href: "/tutoriais/minhainfinitygo?tab=desbloqueio", icon: <Lock className="w-4 h-4" /> },
        { name: "Pagar faturas", href: "/tutoriais/minhainfinitygo?tab=faturas", icon: <CreditCard className="w-4 h-4" /> },
        { name: "Benefícios", href: "/tutoriais/minhainfinitygo?tab=beneficios", icon: <Star className="w-4 h-4" /> },
      ]
    },
    { 
      name: "ITTV Plus", 
      href: "/tutoriais/ittv-plus", 
      icon: <Tv className="w-4 h-4" />,
      submenu: [
        { name: "Como usar", href: "/tutoriais/ittv-plus", icon: <Info className="w-4 h-4" /> },
        { name: "Como criar uma conta", href: "/tutoriais/ittv-plus/criacao", icon: <UserPlus className="w-4 h-4" /> },
      ]
    },
    { name: "Teste de velocidade", href: "/tutoriais/speedtest", icon: <Gauge className="w-4 h-4" /> },
    { name: "Contato", href: "/contato", icon: <Phone className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path.split('?')[0]);
  };

  const handleSubmenuToggle = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
              INFINITY<span className="text-foreground">GO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div 
                    className="relative flex items-center"
                    onMouseEnter={() => setOpenSubmenu(link.name)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <Link
                      href={link.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                        isActive(link.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === link.name ? "rotate-180" : ""}`} />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 w-56 pt-2 transition-all duration-200 ${openSubmenu === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                      <div className="bg-background border border-border rounded-xl shadow-xl overflow-hidden py-2">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          >
                            {sub.icon}
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary group flex items-center gap-2 ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                    
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${
                        isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => handleSubmenuToggle(link.name)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-all ${
                        isActive(link.href) 
                          ? "bg-primary/10 text-primary border-l-4 border-primary pl-2" 
                          : "text-muted-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {link.icon}
                        {link.name}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === link.name ? "rotate-180" : ""}`} />
                    </button>
                    
                    {openSubmenu === link.name && (
                      <div className="pl-10 space-y-1 mt-1 animate-in slide-in-from-top-2 duration-200">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenSubmenu(null);
                            }}
                            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-md transition-colors"
                          >
                            {sub.icon}
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium transition-all ${
                      isActive(link.href) 
                        ? "bg-primary/10 text-primary border-l-4 border-primary pl-2" 
                        : "text-muted-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
