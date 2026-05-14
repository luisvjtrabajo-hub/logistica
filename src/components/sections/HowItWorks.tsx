"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Conecta tus sistemas",
      desc: "Conectividad empresarial personalizada con tus sistemas existentes mediante APIs, archivos o procesos legacy."
    },
    {
      num: "02",
      title: "Centraliza la operación",
      desc: "Toda tu data fluye a un único motor inteligente que mapea tu almacén."
    },
    {
      num: "03",
      title: "Obtén visibilidad total",
      desc: "Monitorea, alerta y optimiza en tiempo real desde cualquier dispositivo."
    }
  ];

  return (
    <section className="py-24 bg-black/40 relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Cómo Funciona?</h2>
          <p className="text-muted-foreground">Despliegue rápido, sin interrumpir tu operación.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-background border border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
