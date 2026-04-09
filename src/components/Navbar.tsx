'use client'

interface NavbarProps {
  onBuyClick: () => void
}

export default function Navbar({ onBuyClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl">
      <div className="flex justify-between items-center px-12 py-8 w-full max-w-screen-2xl mx-auto">
        <div className="text-2xl font-headline text-white italic tracking-tighter">
          The Shadow Curator
        </div>
        <div className="flex items-center gap-12">
          <a
            href="https://www.allocine.fr/film/fichefilm_gen_cfilm=1000013816.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-[10px] uppercase tracking-[0.2em] text-white/70 hover:opacity-80 transition-opacity duration-500"
          >
            Découvrir le film
          </a>
          <button
            onClick={onBuyClick}
            className="bg-primary text-on-primary px-8 py-3 rounded-lg font-body font-semibold hover:opacity-80 transition-opacity duration-500"
          >
            Acheter une photo
          </button>
        </div>
      </div>
    </nav>
  )
}
