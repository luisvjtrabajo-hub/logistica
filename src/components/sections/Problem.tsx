"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, AlertTriangle, Clock, RefreshCcw } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: <FileSpreadsheet className="text-rose-400" size={24} />,
      title: "Hojas de Excel Desconectadas",
      desc: "Reportes manuales que generan diferencias de inventario y datos obsoletos."
    },
    {
      icon: <AlertTriangle className="text-amber-400" size={24} />,
      title: "Inconsistencias ASN",
      desc: "Falta de visibilidad en recepciones causando cuellos de botella en el andén."
    },
    {
      icon: <Clock className="text-orange-400" size={24} />,
      title: "Auditorías Lentas",
      desc: "Días perdidos cuadrando inventario físico contra el sistema."
    },
    {
      icon: <RefreshCcw className="text-red-400" size={24} />,
      title: "Pérdida por FEFO",
      desc: "Productos vencidos por falta de trazabilidad y alertas automatizadas."
    }
  ];

  return (
    <section className="py-24 relative" id="problema">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            La mayoría de operaciones logísticas todavía dependen de <span className="text-rose-400">sistemas desconectados</span> y hojas Excel.
          </h2>
          <p className="text-muted-foreground text-lg">
            La falta de visibilidad operacional cuesta millones anualmente en productos vencidos, auditorías manuales e ineficiencia en el almacén.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-rose-500/10 hover:border-rose-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                {prob.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{prob.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
