import { PackageSearch, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#02050a] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-lg text-primary">
                <PackageSearch size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">vvlogix</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Software logístico SaaS enterprise B2B. Proveemos supply chain visibility, monitoreo ASN y control operacional avanzado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Soluciones</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Control de Inventario</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Gestión de ASN</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Trazabilidad FEFO</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Analítica en Tiempo Real</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sobre Nosotros</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Casos de Éxito</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Conectividad Empresarial</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contacto</a></li>
            </ul>
          </div>
          

        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} vvlogix Solutions. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Términos Legales</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Seguridad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
