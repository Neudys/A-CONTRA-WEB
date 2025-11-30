"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsSending(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="min-h-full flex items-center w-full py-24 relative bg-secondary/30 overflow-hidden"
    >
      {/* background accents */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* TEXT BLOCK */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
              Contacto
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Hablemos de tu proyecto.
            </h3>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Cuéntanos qué necesitas: desarrollo web, marketing, RRHH o algo
              totalmente único. Te respondemos en menos de 48h.
            </p>
            <div className="mt-6 p-6 bg-background rounded-2xl border border-border/50 shadow-sm">
              <p className="text-xl font-bold italic">
                “Todo empieza con un mensaje.”
              </p>
            </div>
          </div>

          {/* FORM BLOCK */}
          <div className="relative p-8 bg-background border border-border/50 rounded-3xl shadow-xl backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 rounded-3xl pointer-events-none" />
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs tracking-wider text-muted-foreground uppercase">
                    Nombre
                  </label>
                  <input
                    required
                    name="name"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border/50 outline-none focus:border-primary transition"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs tracking-wider text-muted-foreground uppercase">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border/50 outline-none focus:border-primary transition"
                    placeholder="tucorreo@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-wider text-muted-foreground uppercase">
                  Qué necesitas
                </label>
                <select
                  required
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border/50 outline-none focus:border-primary transition"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="marketing">Gestión de Marketing</option>
                  <option value="web">Desarrollo Web 3D</option>
                  <option value="rrhh">Gestión RRHH</option>
                  <option value="mix">Un mix de todo</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-wider text-muted-foreground uppercase">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/20 border border-border/50 outline-none focus:border-primary transition resize-none"
                  placeholder="Cuéntanos tu proyecto, plazos, ideas..."
                ></textarea>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full w-full h-12 text-base px-6 shadow-lg shadow-primary/20"
                  disabled={isSending}
                >
                  {isSending ? "Enviando..." : "Enviar mensaje"}
                </Button>

                {sent && (
                  <p className="text-primary text-sm mt-3">
                    ¡Mensaje enviado! Te contactaremos muy pronto.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
