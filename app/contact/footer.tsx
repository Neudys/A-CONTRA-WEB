import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/30 py-10 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            A CONTRA<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
