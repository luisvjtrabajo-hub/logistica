import { Hero } from "@/components/sections/Hero";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-grid-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none"></div>
      <Navbar />
      <Hero />
      <TrustLogos />
      <Problem />
      <Solution />
      <DashboardPreview />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
