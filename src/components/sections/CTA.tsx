"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-10 md:p-16 rounded-3xl text-center border-primary/30 shadow-[0_0_50px_rgba(37,99,235,0.15)]"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transforma tu operación logística con <span className="text-gradient">inteligencia en tiempo real</span>.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Únete a las empresas líderes de LATAM que ya han digitalizado sus almacenes. Agenda una consultoría y descubre cómo adaptamos la plataforma a tu negocio.
          </p>
          
          <a 
            href="https://demologistico.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-max bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            Solicitar Evaluación Operacional <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
