import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vvlogix | Software Logístico y Monitoreo Operacional Enterprise",
  description: "Plataforma SaaS enterprise para monitoreo logístico en tiempo real, trazabilidad FEFO, control de inventario y automatización de la supply chain en LATAM.",
  keywords: ["software logístico", "monitoreo logístico", "monitoreo ASN", "trazabilidad logística", "FEFO", "supply chain visibility", "control operacional", "integración WMS", "integración ERP"],
  authors: [{ name: "vvlogix" }],
  creator: "vvlogix",
  publisher: "vvlogix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://vvlogix.com",
    languages: {
      "es-PE": "https://vvlogix.com/pe",
      "es-CL": "https://vvlogix.com/cl",
    },
  },
  openGraph: {
    title: "vvlogix | Plataforma SaaS Enterprise para Logística",
    description: "Monitoreo logístico en tiempo real y automatización de almacenes. Integración flexible con ERP y WMS para LATAM.",
    url: "https://vvlogix.com",
    siteName: "vvlogix",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vvlogix | Torre de Control Logística Enterprise",
    description: "Software logístico para supply chain visibility, trazabilidad FEFO y control operacional.",
    creator: "@vvlogix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org estructurado para Organización y Software SaaS B2B
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vvlogix.com/#organization",
        "name": "vvlogix",
        "url": "https://vvlogix.com",
        "logo": "https://vvlogix.com/logo.png",
        "description": "Plataforma SaaS B2B para automatización y monitoreo logístico en LATAM.",
        "address": [
          {
            "@type": "PostalAddress",
            "addressCountry": "PE",
            "addressLocality": "Lima"
          },
          {
            "@type": "PostalAddress",
            "addressCountry": "CL",
            "addressLocality": "Santiago"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": "Spanish"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://vvlogix.com/#software",
        "name": "vvlogix Logistics Platform",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based, Cloud, SaaS",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Implementación personalizada según operación B2B."
        },
        "description": "Software logístico enterprise para monitoreo ASN, trazabilidad FEFO y control de inventario en tiempo real.",
        "provider": {
          "@id": "https://vvlogix.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="es" className={`${inter.variable} ${jetBrainsMono.variable} antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
