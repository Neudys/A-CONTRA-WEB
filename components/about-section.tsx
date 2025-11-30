import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              ¿Quiénes somos?
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              No somos una agencia tradicional. <br />
              <span className="text-muted-foreground">
                Somos tu socio estratégico.
              </span>
            </h3>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                En <span className="font-bold text-foreground">A CONTRA</span>,
                no trabajamos con plantillas ni promesas vacías. Te escuchamos,
                contamos tu historia real y convertimos lo que eres en algo que
                conecta y vende.
              </p>
              <p>
                Sin humo. Sin rodeos. Solo resultados tangibles y una estética
                que eleva tu marca al siguiente nivel.
              </p>
            </div>

            <div className="mt-10 p-6 bg-background rounded-2xl border-l-4 border-primary shadow-sm">
              <p className="text-xl font-bold italic text-foreground">
                "ASÍ DE SIMPLE."
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <Button className="rounded-full px-8">
                <Link href="/contact">Nuestra Historia</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-[3rem] transform rotate-3 scale-95" />
              <div className="absolute inset-0 bg-background rounded-[3rem] shadow-2xl overflow-hidden border border-white/50 flex items-center justify-center">
                <Image
                  src="/3d-abstract-geometric-shapes-glass-gold-orange-com.jpg"
                  alt="Abstract 3D Art"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />

                {/* Small decorative bear accent */}
                <div className="absolute bottom-6 right-6 w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 flex items-center justify-center shadow-lg">
                  <span className="text-4xl">🐻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
