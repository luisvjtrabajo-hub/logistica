"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "¿Cómo se integra vvlogix con mi ERP o WMS existente?",
      answer: "vvlogix no reemplaza tu sistema actual; lo potencia. Ofrecemos conectividad empresarial mediante APIs REST, lectura de archivos planos y conectores personalizados para sistemas legacy, SAP, Oracle, entre otros. La integración se adapta completamente a tu arquitectura tecnológica y reglas de negocio."
    },
    {
      question: "¿Qué es el monitoreo ASN y cómo mejora mi cadena de suministro?",
      answer: "El monitoreo ASN (Advanced Shipping Notice) en vvlogix te permite tener visibilidad anticipada de la mercadería en tránsito. Esto facilita la planificación de recursos en el almacén, reduce tiempos de recepción y cruza automáticamente los datos esperados con los recibidos en tiempo real."
    },
    {
      question: "¿La plataforma permite trazabilidad FEFO para productos perecederos?",
      answer: "Sí, vvlogix incluye un motor de trazabilidad FEFO (First Expired, First Out) altamente configurable. Al automatizar este control, reducimos significativamente las mermas por vencimiento, ideal para industrias farmacéuticas, retail y consumo masivo."
    },
    {
      question: "¿Es una plataforma SaaS rígida o se puede personalizar?",
      answer: "A diferencia de un software enlatado tradicional, vvlogix es una solución SaaS Enterprise de enfoque consultivo. Configuramos los dashboards, alertas operacionales y flujos de trabajo específicamente para resolver las particularidades y la escala de tu centro de distribución."
    },
    {
      question: "¿En qué países de LATAM ofrecen implementación presencial?",
      answer: "Actualmente contamos con operaciones directas e implementación acompañada en Perú y Chile, brindando onboarding técnico y soporte consultivo especializado para operaciones logísticas de alta complejidad en estos territorios."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Schema FAQPage for AI SEO and Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 relative bg-black/40" id="preguntas-frecuentes">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas sobre la implementación, integraciones y alcance de nuestra torre de control logística.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`text-primary transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-muted-foreground text-base leading-relaxed pt-2 border-t border-white/5">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}