"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PackageSearch, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg text-primary">
            <PackageSearch size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight">vvlogix</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#soluciones" className="text-sm text-muted-foreground hover:text-white transition-colors">Soluciones</a>
          <a href="#plataforma" className="text-sm text-muted-foreground hover:text-white transition-colors">Plataforma</a>
          <a href="#beneficios" className="text-sm text-muted-foreground hover:text-white transition-colors">Beneficios</a>
          <a href="#recursos" className="text-sm text-muted-foreground hover:text-white transition-colors">Recursos</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:text-primary transition-colors">
            Iniciar Sesión
          </button>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            Solicitar Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-4 md:hidden flex flex-col gap-4"
        >
          <a href="#soluciones" className="text-muted-foreground p-2">Soluciones</a>
          <a href="#plataforma" className="text-muted-foreground p-2">Plataforma</a>
          <a href="#beneficios" className="text-muted-foreground p-2">Beneficios</a>
          <div className="h-px bg-white/10 w-full my-2"></div>
          <button className="w-full text-left p-2 font-medium">Iniciar Sesión</button>
          <button className="w-full bg-primary text-white p-3 rounded-lg font-medium mt-2">
            Solicitar Demo
          </button>
        </motion.div>
      )}
    </header>
  );
}
