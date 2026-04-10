'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Artwork } from '@/types/artwork'

interface LightboxProps {
  artworks: Artwork[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ artworks, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onNavigate(((index as number) - 1 + artworks.length) % artworks.length)
      if (e.key === 'ArrowRight') onNavigate(((index as number) + 1) % artworks.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, index, artworks.length, onClose, onNavigate])

  const currentArtwork = isOpen ? artworks[index as number] : null

  return (
    <AnimatePresence>
      {isOpen && currentArtwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-12"
          onClick={onClose}
        >
          {/* Fermer */}
          <button
            className="absolute top-8 right-8 text-white hover:text-primary-container transition-colors z-10"
            onClick={onClose}
          >
            <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '2.25rem' }}>close</span>
          </button>

          {/* Prev */}
          <button
            className="absolute left-8 text-white hover:text-primary-container transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(((index as number) - 1 + artworks.length) % artworks.length)
            }}
          >
            <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '3rem' }}>chevron_left</span>
          </button>

          {/* Image */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-5xl w-full"
            style={{ height: '85vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentArtwork.mainImage.src}
              alt={currentArtwork.mainImage.alt}
              fill
              className="object-contain rounded-lg"
              sizes="100vw"
            />
          </motion.div>

          {/* Next */}
          <button
            className="absolute right-8 text-white hover:text-primary-container transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(((index as number) + 1) % artworks.length)
            }}
          >
            <span style={{ fontFamily: 'Material Symbols Outlined', fontSize: '3rem' }}>chevron_right</span>
          </button>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
