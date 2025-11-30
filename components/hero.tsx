import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Bear3D } from "./bear3D";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 max-w-2xl animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-xs font-medium text-foreground/80 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            A Contra Digital Strategy
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Estrategia digital en la que puedes{" "}
            <span className="text-primary relative">
              confiar
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            No necesitas una agencia, necesitas resultados con carácter. Creamos
            experiencias digitales que conectan y venden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all"
            >
              <Link href="/contact">Contactanos</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-12 text-base border-2 bg-transparent hover:bg-secondary/50"
            >
              <Link href="/contact">Saber más</Link>
            </Button>
          </div>

          {/* <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/50">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold overflow-hidden relative"
                >
                  <Image
                    src={`/portrait-user-.jpg?height=40&width=40&query=portrait user ${i}`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="font-bold text-foreground">100+</span> Proyectos
              entregados
            </div>
          </div> */}
        </div>

        <div className="relative min-h-[360px] md:h-[500px] lg:h-[700px] flex items-center justify-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
          {/* Floating elements — ocultos en pantallas menores a 400px */}
          <div className="max-[400px]:hidden absolute top-1/4 left-0 p-4 bg-background/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-20 animate-bounce duration-[3000ms]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Crecimiento</p>
                <p className="text-sm font-bold">+150%</p>
              </div>
            </div>
          </div>

          <div className="max-[400px]:hidden absolute bottom-1/4 right-0 p-4 bg-background/60 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-20 animate-bounce duration-[4000ms] delay-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Eficiencia</p>
                <p className="text-sm font-bold">20 segundos</p>
              </div>
            </div>
          </div>

          {/* Bear Mascot */}
          <div className="relative flex items-center justify-center w-full">
            <div
              className="
      relative
      w-full
      mx-auto
      aspect-[1/1]        /* móviles muy pequeños */
      max-w-[260px]       /* límite para pantallas ultra pequeñas */

      sm:max-w-[320px]    /* phones normales */
      sm:aspect-[4/5]

      md:max-w-[380px]    /* tablets */
      md:aspect-[3/4]

      lg:max-w-[420px]    /* desktop */
      lg:aspect-[4/5]
    "
            >
              <Bear3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
