import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/30 py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              A CONTRA<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <Link href="#home" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#info" className="hover:text-primary transition-colors">
              Info
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
