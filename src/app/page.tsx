'use client'

import { useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'
import ArtBlock from '@/components/ArtBlock'
import Lightbox from '@/components/Lightbox'
import BuyModal from '@/components/BuyModal'
import Footer from '@/components/Footer'
import { artworks } from '@/data/artworks'

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [buyModalOpen, setBuyModalOpen] = useState(false)


  const handleImageClick = useCallback((artworkId: number) => {
    const index = artworks.findIndex((a) => a.id === artworkId)
    setLightboxIndex(index)
  }, [])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const closeBuyModal = useCallback(() => setBuyModalOpen(false), [])
  const openBuyModal = useCallback(() => setBuyModalOpen(true), [])

  return (
    <>
      <Navbar onBuyClick={openBuyModal} />

      <main className="pt-28 pb-24 px-4 md:px-12 max-w-screen-2xl mx-auto space-y-16 md:space-y-32">
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
        onClose={closeLightbox}
        onNavigate={setLightboxIndex}
      />

      <BuyModal
        open={buyModalOpen}
        onClose={closeBuyModal}
      />

    </>
  )
}
