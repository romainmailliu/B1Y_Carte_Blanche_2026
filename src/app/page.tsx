'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ArtBlock from '@/components/ArtBlock'
import Lightbox from '@/components/Lightbox'
import BuyModal from '@/components/BuyModal'
import Footer from '@/components/Footer'
import { artworks } from '@/data/artworks'

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [buyModalOpen, setBuyModalOpen] = useState(false)

  const handleImageClick = (artworkId: number) => {
    const index = artworks.findIndex((a) => a.id === artworkId)
    setLightboxIndex(index)
  }

  return (
    <>
      <Navbar onBuyClick={() => setBuyModalOpen(true)} />

      <main className="pt-32 pb-24 px-12 max-w-screen-2xl mx-auto space-y-32">
        {artworks.map((artwork, index) => (
          <ArtBlock
            key={artwork.id}
            artwork={artwork}
            index={index}
            onImageClick={handleImageClick}
          />
        ))}
      </main>

      <Footer />

      <Lightbox
        artworks={artworks}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <BuyModal
        open={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
      />
    </>
  )
}
