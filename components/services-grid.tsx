import { Monitor, Users, BarChartBig as ChartBar, ArrowRight } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      title: "Gestión de Marketing",
      description: "Estrategias que conectan, convierten y construyen lealtad de marca.",
      icon: <ChartBar className="w-8 h-8 text-primary" />,
      color: "bg-orange-50",
      delay: "0",
    },
    {
      title: "Desarrollo Web 3D",
      description: "Experiencias inmersivas que diferencian tu marca en el mercado digital.",
      icon: <Monitor className="w-8 h-8 text-primary" />,
      color: "bg-amber-50",
      delay: "100",
    },
    {
      title: "Gestión de RRHH",
      description: "Encontramos y gestionamos el talento que tu empresa realmente necesita.",
      icon: <Users className="w-8 h-8 text-primary" />,
      color: "bg-yellow-50",
      delay: "200",
    },
  ]

  return (
    <section id="info" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué hacemos en solo 20 segundos?</h2>
          <p className="text-muted-foreground text-lg">
            Optimizamos cada aspecto de tu presencia digital y operativa con soluciones precisas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card hover:bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
                Saber más <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Decorative gradient blob on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
