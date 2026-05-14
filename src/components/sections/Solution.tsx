"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, BellRing, TrendingUp, BarChart, Database, BrainCircuit, BoxSelect } from "lucide-react";

export function Solution() {
  const modules = [
    { icon: <BoxSelect />, title: "Control ASN", desc: "Gestión de avisos de envío anticipado." },
    { icon: <Eye />, title: "Visibilidad de Inventario", desc: "Stock en tiempo real 100% exacto." },
    { icon: <ShieldCheck />, title: "Monitoreo FEFO", desc: "Trazabilidad de lotes y caducidad." },
    { icon: <BellRing />, title: "Alertas en Tiempo Real", desc: "Notificaciones operacionales proactivas." },
    { icon: <TrendingUp />, title: "Productividad de Almacén", desc: "Optimización de rutas de picking." },
    { icon: <BarChart />, title: "Analítica Operacional", desc: "Dashboards y KPIs logísticos." },
    { icon: <Database />, title: "Integraciones ERP/WMS", desc: "Conexión nativa con SAP, Oracle, etc." },
    { icon: <BrainCircuit />, title: "Insights con IA", desc: "Predicción de demanda y quiebres." },
  ];

  return (
    <section className="py-24 bg-black/30 relative border-y border-white/5" id="soluciones">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Una sola plataforma para <span className="text-gradient">centralizar</span> toda tu operación logística.
          </h2>
          <p className="text-muted-foreground text-lg">
            Reemplaza múltiples herramientas fragmentadas con un ecosistema unificado diseñado para el alto rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {mod.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {mod.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {mod.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
