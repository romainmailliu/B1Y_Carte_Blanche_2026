'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Artwork } from '@/types/artwork'

interface ArtBlockProps {
  artwork: Artwork
  index: number
  onImageClick: (artworkId: number) => void
}

export default function ArtBlock({ artwork, index, onImageClick }: ArtBlockProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isReversed = index % 2 !== 0

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start`}>
        {/* Image principale */}
        <div
          className="w-full md:w-[70%] overflow-hidden rounded-lg bg-surface-container-lowest img-zoom cursor-zoom-in"
          onClick={() => onImageClick(artwork.id)}
        >
          <img
            src={artwork.mainImage.src}
            alt={artwork.mainImage.alt}
            className="w-full h-[600px] object-cover img-transition"
          />
        </div>

        {/* Miniatures */}
        <div className="w-full md:w-[30%] flex flex-col gap-8">
          {artwork.thumbnails.map((thumb, i) => (
            <div key={i} className="relative">
              <div className="overflow-hidden rounded-lg bg-surface-container-lowest aspect-video">
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute top-4 left-4 font-label text-[10px] uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                {thumb.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Infos */}
      <div className="mt-12 flex justify-between items-end border-t border-white/5 pt-8">
        <div className="max-w-2xl">
          <h2 className="font-headline text-4xl text-white mb-4">{artwork.title}</h2>
          <p className="font-body text-neutral-400 text-lg leading-relaxed">{artwork.description}</p>
        </div>
        <div className="text-right">
          <span className="font-label text-sm uppercase tracking-[0.2em] text-neutral-500 block mb-1">
            {artwork.edition}
          </span>
          <span className="font-headline text-3xl text-white">{artwork.price}</span>
        </div>
      </div>
    </motion.section>
  )
}
