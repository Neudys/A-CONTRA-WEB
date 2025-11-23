import { Users, Zap, GraduationCap } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Recursos Humanos",
      icon: <Users className="w-6 h-6 text-foreground" />,
      text: "Gestión integral de equipos y cultura.",
    },
    {
      title: "Talento",
      icon: <Zap className="w-6 h-6 text-foreground" />,
      text: "Captación de perfiles de alto rendimiento.",
    },
    {
      title: "Formación",
      icon: <GraduationCap className="w-6 h-6 text-foreground" />,
      text: "Capacitación continua para el éxito.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-secondary/20 border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
