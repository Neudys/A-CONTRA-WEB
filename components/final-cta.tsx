import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          {/* Background texture/gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Vamos, no te quedes atrás.</h2>
            <p className="text-xl text-gray-300">
              Gestiona tu próxima web 3D, tus proyectos de marketing o recursos humanos con un solo clic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/25"
              >
                <Link href="/contact">Contáctanos ahora</Link>
              </Button>
            </div>
          </div>

          {/* Dynamic 3D Element overlay */}
          <div className="absolute bottom-0 right-10 w-40 h-40 md:w-64 md:h-64 opacity-50 md:opacity-100 pointer-events-none translate-y-1/3">
            <Image src="/3d-golden-bear-paw-reaching-out.jpg" alt="Decoration" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
