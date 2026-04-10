"use client";

import Image from "next/image";

interface NavbarProps {
  onBuyClick: () => void;
}

export default function Navbar({ onBuyClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl">
      <div
        className="w-full border-b flex justify-center items-center py-2"
        style={{ borderColor: "#1e1e1e" }}
      >
        <span
          className="px-4 py-1 rounded-lg"
          style={{
            background: "#ffffff",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.62rem",
            fontWeight: "700",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#CE1126",
          }}
        >
          Toutes les recettes sont intégralement reversées à la Croix-Rouge Libanaise
        </span>
      </div>
      <div className="flex justify-between items-center px-4 md:px-12 py-2 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
            src="/images/B1Y-logo.png"
            alt="B1Y"
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="text-base md:text-2xl font-headline text-white italic tracking-tighter">
            Carte Blanche I AM THE FUTURE
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-12">
          <a
            href="https://www.allocine.fr/film/fichefilm_gen_cfilm=1000013816.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-body font-semibold text-base text-white hover:opacity-70 transition-opacity duration-500"
          >
            Découvrir le film
          </a>
          <button
            onClick={onBuyClick}
            className="bg-primary text-on-primary px-4 md:px-8 py-2 md:py-3 rounded-lg font-body font-semibold text-sm md:text-base hover:opacity-80 transition-opacity duration-500"
          >
            Réserver
          </button>
        </div>
      </div>
    </nav>
  );
}
