export default function Footer() {
  return (
    <footer className="w-full py-16 px-12 bg-neutral-950">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto">
        <div className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500">
          © 2024 The Shadow Curator. All Rights Reserved.
        </div>
        <div className="flex gap-8 mt-8 md:mt-0">
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-600 hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
