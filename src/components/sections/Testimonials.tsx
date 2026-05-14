"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "LogisTech transformó nuestro centro de distribución en Santiago. Pasamos de hacer auditorías manuales semanales a tener control exacto en tiempo real. La reducción de errores es impresionante.",
      author: "Carlos Mendoza",
      role: "Supply Chain Manager",
      company: "RetailSur Chile"
    },
    {
      quote: "El control FEFO automatizado nos ha salvado miles de dólares en mermas farmacéuticas. La integración con nuestro SAP fue impecable y rápida.",
      author: "Ana Ruiz",
      role: "Jefa de Operaciones",
      company: "FarmaDist Perú"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Confianza en cada <span className="text-gradient">operación</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={60} />
              <p className="text-lg text-foreground/90 mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, <span className="text-white/80">{t.company}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
