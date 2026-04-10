export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 px-12 py-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-6">Artiste</p>
            <p className="font-headline text-white italic text-2xl mb-4">Virgile Loiseau</p>
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              Photographe et artiste visuel, Virgile Loiseau explore les espaces entre lumière et silence.
              Son travail, nourri par l'intime et l'architecture, cherche à révéler ce que l'œil ordinaire
              ne retient pas — une texture, une hésitation, un instant suspendu.
            </p>
          </div>

          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-6">Collectif</p>
            <p className="font-headline text-white italic text-2xl mb-4">Berlin in One Year</p>
            <p className="font-body text-neutral-400 text-sm leading-relaxed">
              Berlin in One Year est un collectif d'artistes et de créateurs réunis autour d'une année
              fondatrice passée à Berlin. Né de la rencontre entre disciplines — photographie, musique,
              écriture, cinéma — le collectif produit des œuvres à la croisée de l'intime et du politique.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
