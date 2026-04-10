import type { Metadata } from 'next'
import { Noto_Serif, Inter } from 'next/font/google'
import './globals.css'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Berlin in One Year — Carte Blanche pour le Liban',
  description:
    "Galerie photographique de Virgile Loiseau. Tirages d'art limités issus du film documentaire I AM THE FUTURE. Toutes les recettes sont reversées à la Croix-Rouge Libanaise.",
  keywords: [
    'Berlin in One Year',
    'Carte Blanche',
    'Liban',
    'photographie',
    'tirages d\'art',
    'Croix-Rouge Libanaise',
    'Virgile Loiseau',
    'I AM THE FUTURE',
    'galerie photo',
  ],
  authors: [{ name: 'Virgile Loiseau' }],
  openGraph: {
    title: 'Berlin in One Year — Carte Blanche pour le Liban',
    description:
      "Tirages d'art limités de Virgile Loiseau. Toutes les recettes sont reversées à la Croix-Rouge Libanaise.",
    siteName: 'Berlin in One Year',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berlin in One Year — Carte Blanche pour le Liban',
    description:
      "Tirages d'art limités de Virgile Loiseau. Toutes les recettes sont reversées à la Croix-Rouge Libanaise.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  )
}
