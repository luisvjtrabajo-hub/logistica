"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Box, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Plataforma SaaS Enterprise para Logística en LATAM
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Monitoreo y Automatización <br className="hidden md:block" />
            <span className="text-gradient">Adaptada a tu Operación</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            Nuestra plataforma enterprise se integra con tus sistemas actuales y se configura según tus reglas de negocio, centralizando y automatizando tus procesos logísticos sin fricciones.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://demologistico.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2"
            >
              Ver Demo <ArrowRight size={18} />
            </a>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2">
              Ver Plataforma
            </button>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20"></div>
          <div className="relative glass-panel rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-muted-foreground font-mono">vvlogix-dashboard-v2.0</div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#050b14]/80">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Inventario Total</span>
                    <Box size={16} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold">24,592</div>
                  <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                    <Activity size={12} /> +12% vs mes anterior
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/5 rounded-lg p-4 h-48 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Flujo Inbound / Outbound</div>
                  <div className="flex-1 mt-4 flex items-end gap-2">
                    {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Middle Column (Main Chart) */}
              <div className="md:col-span-2 space-y-4">
                <div className="bg-white/5 border border-white/5 rounded-lg p-4 h-full min-h-[300px]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-medium">Monitoreo ASN en Tiempo Real</h3>
                      <p className="text-xs text-muted-foreground">Rastreo de recepciones avanzadas</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs">98% Precisión</span>
                    </div>
                  </div>
                  
                  {/* Fake map/grid area */}
                  <div className="relative w-full h-[200px] border border-white/5 rounded bg-black/20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    
                    {/* Animated dots representing shipments */}
                    <motion.div 
                      animate={{ x: [0, 200], y: [0, 50] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-10 left-10 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#38bdf8]"
                    />
                    <motion.div 
                      animate={{ x: [250, 50], y: [100, 150] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                      className="absolute top-10 left-10 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#2563eb]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
