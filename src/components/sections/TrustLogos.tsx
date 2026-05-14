"use client";

import { motion } from "framer-motion";

export function TrustLogos() {
  const logos = [
    { name: "RetailCorp", type: "Retail" },
    { name: "LogisPro", type: "Logística" },
    { name: "PharmaDist", type: "Farmacéutica" },
    { name: "GlobalSupply", type: "Distribución" },
    { name: "MegaStore", type: "Retail" },
    { name: "FastFreight", type: "Logística" },
  ];

  return (
    <section className="py-10 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Confiado por los líderes en retail, logística y distribución en LATAM
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-xs">
                {logo.name.charAt(0)}
              </div>
              <span className="font-semibold text-lg">{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
