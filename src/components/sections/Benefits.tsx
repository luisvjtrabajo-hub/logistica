"use client";

import { motion } from "framer-motion";

export function Benefits() {
  const stats = [
    { value: "-45%", label: "Diferencias de inventario" },
    { value: "3x", label: "Auditorías más rápidas" },
    { value: "100%", label: "Trazabilidad FEFO" },
    { value: "+30%", label: "Productividad en almacén" },
  ];

  return (
    <section className="py-24 border-t border-white/5" id="beneficios">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados que impactan tu <span className="text-gradient">línea final</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo mejoramos procesos, entregamos métricas tangibles que justifican la inversión desde el primer trimestre.
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
      </div>
    </section>
  );
}
