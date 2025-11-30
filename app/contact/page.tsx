import { NavbarSimple } from "./simpleNavbar";
import { Footer } from "./footer";
import { ContactSection } from "@/components/contactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary-foreground">
      <NavbarSimple />
      <main className="flex-1 flex">
        {" "}
        {/* 👈 importante: flex-1 flex */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
