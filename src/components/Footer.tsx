export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 px-4 md:px-12 py-12 md:py-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Artiste
            </p>
            <p className="font-headline text-white italic text-2xl mb-4">
              Virgile Loiseau
            </p>
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              Photographe et artisan du son, Virgile Loiseau a était le preneur
              et le monteur son du film I AM THE FUTURE. Entre les tournages, il
              revient à son amour de toujours : la photographie.
            </p>
          </div>

          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-6">
              Collectif
            </p>
            <p className="font-headline text-white italic text-2xl mb-4">
              Berlin in One Year
            </p>
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              Berlin in One Year est un collectif comme les autres : des ami.e.s
              qui montent des projets avec les moyens du bord pour partager
              leurs passions !
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
