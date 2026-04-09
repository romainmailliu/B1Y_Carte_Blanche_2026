export interface ArtworkThumbnail {
  src: string
  alt: string
  label: string
}

export interface Artwork {
  id: number
  title: string
  description: string
  price: string
  edition: string
  mainImage: {
    src: string
    alt: string
  }
  thumbnails: [ArtworkThumbnail, ArtworkThumbnail]
}
