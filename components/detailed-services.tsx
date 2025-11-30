import { Button } from "@/components/ui/button"
import { Check, Users } from "lucide-react"
import Link from "next/link"

export function DetailedServices() {
  return (
    <section className="py-20 space-y-24">
      {/* Web 3D Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-secondary/30 p-8 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50" />
            {/* Mock screens floating */}
            <div className="relative z-10 w-full max-w-sm transform group-hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/3] bg-white rounded-xl shadow-2xl border border-border/50 overflow-hidden relative rotate-[-6deg] hover:rotate-0 transition-all duration-500">
                <div className="absolute top-0 w-full h-6 bg-gray-100 border-b flex items-center gap-1.5 px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="mt-6 p-4">
                  <div className="h-8 w-24 bg-gray-200 rounded mb-4"></div>
                  <div className="h-32 w-full bg-orange-100 rounded-lg mb-4"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 w-full bg-gray-100 rounded-lg"></div>
                    <div className="h-20 w-full bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 aspect-square w-32 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex items-center justify-center animate-pulse">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">3D</span>
                  <p className="text-xs text-muted-foreground font-medium">Modelado</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-primary text-xs font-bold uppercase tracking-wider">
              Desarrollo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Desarrollo Web 3D</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transformamos la web plana en experiencias espaciales. Desde el modelado hasta la implementación, creamos
              entornos digitales que cuentan historias y definen marcas.
            </p>
            <ul className="space-y-3">
              {[
                "Modelado de alta fidelidad",
                "Experiencias interactivas",
                "Optimización de rendimiento",
                "Estilo definido y único",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RRHH Section */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider">
              Talento
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Gestión de RRHH</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Encontrar talento real que encaja de verdad con tu empresa no es suerte, es estrategia. Utilizamos
              metodologías modernas para conectar empresas con las personas adecuadas.
            </p>
            <Button variant="outline" className="rounded-full mt-2 bg-transparent">
              <Link href="/contact">Conocer metodología</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-background p-8 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 w-full max-w-md relative z-10">
              <div className="bg-white p-6 rounded-2xl shadow-lg transform translate-y-8">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1">Scouting</h3>
                <p className="text-sm text-muted-foreground">Búsqueda activa</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-1">Matching</h3>
                <p className="text-sm text-muted-foreground">Encaje cultural</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg transform translate-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-bold mb-1">Training</h3>
                <p className="text-sm text-muted-foreground">Desarrollo continuo</p>
              </div>
            </div>
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  )
}
