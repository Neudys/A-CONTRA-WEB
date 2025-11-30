"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function NavbarSimple() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tight"
        >
          A CONTRA<span className="text-primary">.</span>
        </Link>
      </div>
    </nav>
  );
}
