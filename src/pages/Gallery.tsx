import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SiteLayout } from '../components/SiteLayout'
import { Reveal } from '../components/Reveal'

import heroNight from '../assets/hero-night.jpg'
import interiorArch from '../assets/interior-arch.jpg'
import outdoorTiled from '../assets/outdoor-tiled.jpg'
import galPendant from '../assets/gallery-pendant.jpg'
import galPathway from '../assets/gallery-pathway.jpg'
import galCoffee from '../assets/gallery-coffee.jpg'
import galBooth from '../assets/gallery-booth.jpg'
import galAffogato from '../assets/gallery-affogato.jpg'
import galFairy from '../assets/gallery-fairylights.jpg'

type Cat = 'All' | 'Golden Hour' | 'Night Vibes' | 'Cozy Corners' | 'Outdoor' | 'Food & Drinks'

const images: { src: string; alt: string; cat: Exclude<Cat, 'All'>[] }[] = [
  { src: heroNight, alt: 'Outdoor fairy lights and stone pathway at dusk', cat: ['Golden Hour', 'Outdoor', 'Night Vibes'] },
  { src: galFairy, alt: 'Trees wrapped in golden fairy lights', cat: ['Night Vibes', 'Outdoor'] },
  { src: interiorArch, alt: 'Arched niche interior with warm pendant lights', cat: ['Cozy Corners'] },
  { src: galPathway, alt: 'Stone pathway lined with glowing lanterns', cat: ['Night Vibes', 'Outdoor'] },
  { src: outdoorTiled, alt: 'Outdoor tiled seating with rattan pendants', cat: ['Outdoor'] },
  { src: galPendant, alt: 'Warm pendant bulbs close-up', cat: ['Cozy Corners'] },
  { src: galBooth, alt: 'Cozy booth seating inside', cat: ['Cozy Corners'] },
  { src: galCoffee, alt: 'Vietnamese cold coffee in a tall glass', cat: ['Food & Drinks'] },
  { src: galAffogato, alt: 'Affogato — espresso over vanilla ice cream', cat: ['Food & Drinks'] },
]

const filters: Cat[] = ['All', 'Golden Hour', 'Night Vibes', 'Cozy Corners', 'Outdoor', 'Food & Drinks']

export default function GalleryPage() {
  const [filter, setFilter] = useState<Cat>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = filter === 'All' ? images : images.filter(i => i.cat.includes(filter as Exclude<Cat, 'All'>))

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => i === null ? null : (i + 1) % visible.length)
      if (e.key === 'ArrowLeft') setLightbox(i => i === null ? null : (i - 1 + visible.length) % visible.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, visible.length])

  return (
    <SiteLayout>
      <section style={{ background: 'var(--ink)' }} className="pt-32 pb-16 text-center">
        <h1 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--cream)' }}>The Eternal Vibe</h1>
        <p className="mt-4 mx-auto max-w-xl px-6 font-body text-sm" style={{ color: 'rgba(245,235,221,0.8)' }}>
          Captured moments of calm, comfort, coffee, and conversations.
        </p>
      </section>

      <section style={{ background: 'var(--cream)' }} className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full font-display uppercase tracking-wider-2 text-xs transition-all duration-200"
                style={
                  filter === f
                    ? { background: 'var(--gold)', color: 'var(--ink)' }
                    : { background: 'transparent', color: 'var(--brown)', border: '1px solid rgba(122,92,77,0.3)' }
                }
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
            {visible.map((img, i) => (
              <Reveal key={img.alt} delay={i * 50}>
                <button onClick={() => setLightbox(i)} className="group block w-full overflow-hidden rounded-xl relative">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 transition-all bg-black/0 group-hover:bg-black/30" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.92)' }}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white p-2 hover:opacity-70" aria-label="Close">
            <X size={28} />
          </button>
          <button onClick={() => setLightbox(i => i === null ? null : (i - 1 + visible.length) % visible.length)} className="absolute left-4 md:left-8 text-white p-2 hover:opacity-70" aria-label="Previous">
            <ChevronLeft size={36} />
          </button>
          <img src={visible[lightbox].src} alt={visible[lightbox].alt} className="max-h-[88vh] max-w-[90vw] rounded-lg object-contain" />
          <button onClick={() => setLightbox(i => i === null ? null : (i + 1) % visible.length)} className="absolute right-4 md:right-8 text-white p-2 hover:opacity-70" aria-label="Next">
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-6 font-body text-xs text-white/50">{lightbox + 1} / {visible.length}</div>
        </div>
      )}
    </SiteLayout>
  )
}
