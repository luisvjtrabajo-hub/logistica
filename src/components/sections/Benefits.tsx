"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  const stats = [
    { value: "-45%", label: "Diferencias de inventario" },
    { value: "3x", label: "Auditorías más rápidas" },
    { value: "100%", label: "Trazabilidad FEFO" },
    { value: "+30%", label: "Productividad en almacén" },
  ];

  const enterpriseBenefits = [
    "Adaptación a procesos existentes",
    "No requiere reemplazar sistemas actuales",
    "Configuración personalizada",
    "Implementación progresiva",
    "Integración con múltiples tecnologías",
    "Flexibilidad operacional"
  ];

  return (
    <section className="py-24 border-t border-white/5" id="beneficios">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Valor Enterprise para tu <span className="text-gradient">operación</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo entregamos métricas tangibles, sino que aseguramos una adopción tecnológica sin fricciones mediante un enfoque consultivo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="glass-panel rounded-2xl p-8 text-center flex flex-col items-center justify-center border-t-2 border-t-primary/50"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border-primary/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Ventajas de nuestra arquitectura</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enterpriseBenefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <span className="text-lg text-foreground/90">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
