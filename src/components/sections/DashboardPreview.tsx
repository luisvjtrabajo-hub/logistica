"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="py-24 overflow-hidden" id="plataforma">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Visibilidad total desde tu <br/>
              <span className="text-gradient">Centro de Control</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Supervisa el rendimiento de tu almacén con dashboards interactivos. Detecta cuellos de botella antes de que afecten tus SLAs y mantén un flujo perfecto de mercancía.
            </p>
            
            <ul className="space-y-4">
              {[
                "Salud del inventario en tiempo real",
                "Monitoreo de cumplimiento FEFO al 100%",
                "Alertas operacionales automáticas",
                "Métricas de fulfillment y SLAs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative glass-panel rounded-2xl border border-white/10 p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h3 className="font-semibold text-lg">Métricas de Fulfillment</h3>
                <span className="text-xs px-2 py-1 bg-white/5 rounded">Últimos 7 días</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Órdenes Procesadas</div>
                  <div className="text-2xl font-bold">12,845</div>
                  <div className="text-xs text-emerald-400 flex items-center mt-1">
                    <ArrowUpRight size={14} /> +8.2%
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">Tiempo de Ciclo</div>
                  <div className="text-2xl font-bold">1.2 hrs</div>
                  <div className="text-xs text-emerald-400 flex items-center mt-1">
                    <ArrowDownRight size={14} /> -15%
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-medium">Cumplimiento FEFO</div>
                <div className="w-full bg-white/5 rounded-full h-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-emerald-500 h-3 rounded-full"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span className="text-emerald-400 font-bold">98.5% Exactitud</span>
                </div>
              </div>
            </motion.div>
            
            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-4 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <div className="text-sm font-bold">Cero Quiebres</div>
                <div className="text-xs text-muted-foreground">Últimas 48 horas</div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
