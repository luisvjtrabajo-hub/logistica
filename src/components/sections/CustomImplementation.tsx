"use client";

import { motion } from "framer-motion";
import { Blocks, Settings2, ShieldCheck, TrendingUp } from "lucide-react";

export function CustomImplementation() {
  const cards = [
    {
      icon: <Blocks className="text-primary w-8 h-8" />,
      title: "Integración Flexible",
      desc: "Conectamos la plataforma con ERP, WMS, APIs, archivos planos o sistemas legacy existentes."
    },
    {
      icon: <Settings2 className="text-primary w-8 h-8" />,
      title: "Reglas de Negocio Personalizadas",
      desc: "Configuramos validaciones, alertas y flujos operacionales según las necesidades específicas de cada operación."
    },
    {
      icon: <ShieldCheck className="text-primary w-8 h-8" />,
      title: "Implementación Enterprise",
      desc: "Despliegue acompañado, onboarding técnico y adaptación operacional progresiva."
    },
    {
      icon: <TrendingUp className="text-primary w-8 h-8" />,
      title: "Escalabilidad Operacional",
      desc: "La plataforma evoluciona junto al crecimiento de tu operación logística."
    }
  ];

  return (
    <section className="py-24 bg-black/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Implementación <span className="text-gradient">Adaptada a Tu Operación</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            No todas las empresas operan igual. Nuestra plataforma se adapta a tus procesos, reglas de negocio y sistemas actuales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:border-primary/30 transition-all hover:-translate-y-1 group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}