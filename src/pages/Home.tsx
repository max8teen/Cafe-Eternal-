import { Link } from 'react-router-dom'
import { Star, MapPin, Clock } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { SiteLayout } from '../components/SiteLayout'
import { Reveal } from '../components/Reveal'

import heroNight from '../assets/hero-night.jpg'
import interiorArch from '../assets/real-interior-niches.jpg'
import outdoorTiled from '../assets/real-outdoor-pathway.jpg'
import galFairy from '../assets/gallery-fairylights.jpg'
import galPathway from '../assets/gallery-pathway.jpg'
import galBooth from '../assets/gallery-booth.jpg'
import galPendant from '../assets/gallery-pendant.jpg'
import specialVietnamese from '../assets/special-vietnamese.jpg'
import specialBrownie from '../assets/special-brownie.jpg'
import specialAffogato from '../assets/special-affogato.jpg'
import specialPina from '../assets/special-pinacolada.jpg'
import specialHotchoc from '../assets/special-hotchoc.jpg'

const specials = [
  { name: 'Vietnamese Cold Coffee', price: '₹220', img: specialVietnamese, desc: 'Bold coffee blended with sweet condensed milk for a rich, soul-satisfying sip.' },
  { name: 'Brownie Cold Coffee', price: '₹180', img: specialBrownie, desc: 'Chunky brownie goodness blended into a decadent cold brew.' },
  { name: 'Affogato', price: '₹250', img: specialAffogato, desc: 'Vanilla ice cream drowned in a shot of hot espresso. Simple. Perfect.' },
  { name: 'Pina Colada Mocktail', price: '₹150', img: specialPina, desc: 'A tropical blend of pineapple and coconut — cool and creamy.' },
  { name: 'Classic Hot Chocolate', price: '₹200', img: specialHotchoc, desc: 'Rich, velvety chocolate warmth in every sip. The perfect evening comfort.' },
]

const reviews = [
  { stars: 5, body: 'The ambience feels magical at night. Perfect place to relax after visiting Meherabad. The fairy lights and the stone pathway — honestly felt like a different world.', who: 'Aditya S.' },
  { stars: 5, body: 'Affordable coffee, beautiful lights, peaceful vibe. The Vietnamese Cold Coffee is absolutely worth it. Will keep coming back.', who: 'Pawan M.' },
  { stars: 5, body: 'One of the most aesthetic cafes in Ahilyanagar. The indoor seating with the arched walls and warm lights is stunning. Great food too.', who: 'Nomita D.' },
]

const gallery = [
  { src: galFairy, alt: 'Night outdoor fairy lights in trees' },
  { src: interiorArch, alt: 'Arched niche interior warm lights' },
  { src: galPathway, alt: 'Stone pathway ground lanterns evening' },
  { src: outdoorTiled, alt: 'Tiled outdoor seating daytime' },
  { src: galPendant, alt: 'Warm pendant lights close-up' },
  { src: galBooth, alt: 'Cozy booth seating inside' },
]

// Minimal sun-rays SVG ornament (matches the design)
function SunOrnament({ size = 28, color = 'var(--gold)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="5" stroke={color} strokeWidth="1.2" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map(deg => {
        const rad = (deg * Math.PI) / 180
        const x1 = 14 + 7.5 * Math.cos(rad)
        const y1 = 14 + 7.5 * Math.sin(rad)
        const x2 = 14 + 10.5 * Math.cos(rad)
        const y2 = 14 + 10.5 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.1" strokeLinecap="round" />
      })}
    </svg>
  )
}

// Decorative asterisk/snowflake divider
function GoldDivider() {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(217,164,65,0.5)' }} />
      <SunOrnament size={18} />
      <span className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(217,164,65,0.5)' }} />
    </div>
  )
}

function SpecialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  const startAuto = () => {
    stopAuto()
    autoRef.current = setInterval(() => {
      const el = scrollRef.current
      if (!el) return
      el.scrollLeft += 1
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
    }, 16)
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [])

  return (
    <div
      ref={scrollRef}
      className="mt-14 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      style={{
        WebkitOverflowScrolling: 'touch',
        maskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
      }}
      onMouseEnter={stopAuto}
      onMouseLeave={() => { isDragging.current = false; startAuto() }}
      onMouseDown={(e) => {
        isDragging.current = true
        startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
        startScroll.current = scrollRef.current?.scrollLeft ?? 0
      }}
      onMouseUp={() => { isDragging.current = false }}
      onMouseMove={(e) => {
        if (!isDragging.current || !scrollRef.current) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        scrollRef.current.scrollLeft = startScroll.current - (x - startX.current) * 1.5
      }}
      onTouchStart={stopAuto}
      onTouchEnd={() => setTimeout(startAuto, 1500)}
    >
      <div className="flex gap-6 px-6 w-max">
        {[...specials, ...specials].map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="card-hover shrink-0 w-[280px] rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
              <span className="absolute top-3 right-3 rounded-full px-3 py-1 font-display text-sm font-semibold" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
                {s.price}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl" style={{ color: 'var(--cream)' }}>{s.name}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed" style={{ color: 'rgba(245,235,221,0.7)' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <SiteLayout>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroNight})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Overlay — darker at center-bottom, lighter at top edges */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,6,2,0.25) 0%, rgba(10,6,2,0.45) 40%, rgba(10,6,2,0.72) 100%)' }}
        />

        {/* Content — vertically centered */}
        <div className="hero-stagger relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center gap-4">

          {/* Eyebrow — icon + spaced caps */}
          <div className="flex flex-col items-center gap-2">
            <SunOrnament size={26} color="rgba(217,164,65,0.85)" />
            <span
              className="font-display uppercase tracking-[0.3em] text-white/70"
              style={{ fontSize: 'clamp(0.6rem, 1.2vw, 0.75rem)', letterSpacing: '0.3em' }}
            >
              A Peaceful Retreat Near Meherabad
            </span>
          </div>

          {/* Main heading — "Good Food. Warm Moments." in large serif */}
          <h1
            className="font-display leading-[1.1] text-white"
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              marginTop: '4px',
            }}
          >
            Good Food.<br />Warm Moments.
          </h1>

          {/* Script line — gold, italic */}
          <p
            className="font-script leading-none"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              color: 'var(--gold)',
              marginTop: '-4px',
            }}
          >
            Timeless Calm.
          </p>

          {/* Gold ornament divider */}
          <div className="mt-1">
            <GoldDivider />
          </div>

          {/* Subtext */}
          <p
            className="font-body text-white/80 leading-relaxed max-w-md"
            style={{ fontSize: 'clamp(0.82rem, 1.6vw, 0.95rem)', fontWeight: 300 }}
          >
            A cozy aesthetic cafe near Meherbaba Samadhi where<br className="hidden sm:block" />
            calm conversations, comfort food, and warm coffee come together.
          </p>

          {/* CTAs — rectangular, not pill */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <Link
              to="/menu"
              className="px-10 py-3.5 font-display uppercase tracking-wider text-sm transition-all hover:opacity-90"
              style={{
                background: 'var(--gold)',
                color: 'var(--ink)',
                letterSpacing: '0.15em',
              }}
            >
              Explore Menu
            </Link>
            <Link
              to="/visit"
              className="border px-10 py-3.5 font-display uppercase tracking-wider text-sm text-white transition-all hover:bg-white hover:text-[#1B1B1B]"
              style={{
                borderColor: 'rgba(255,255,255,0.7)',
                letterSpacing: '0.15em',
              }}
            >
              Visit Us
            </Link>
          </div>

          {/* Bottom badges — circle icons + stat/label stacked, separated by vertical dividers */}
          <div className="flex items-center justify-center gap-0 mt-4 flex-wrap">
            {[
              { icon: <Star size={14} />, stat: '4.5', label: 'Google Rating' },
              { icon: <MapPin size={14} />, stat: 'Near Meherbaba Samadhi', label: '' },
              { icon: <Clock size={14} />, stat: 'Open till 10:30 PM', label: '' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <span className="h-8 w-px mx-5 hidden sm:block" style={{ background: 'rgba(255,255,255,0.25)' }} />
                )}
                <div className="flex items-center gap-3 px-3 sm:px-0">
                  {/* Circle icon */}
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: 36,
                      height: 36,
                      border: '1.5px solid rgba(217,164,65,0.6)',
                      color: 'var(--gold)',
                    }}
                  >
                    {badge.icon}
                  </div>
                  {/* Text */}
                  <div className="text-left">
                    <p className="font-display text-white text-sm leading-tight" style={{ fontSize: 'clamp(0.78rem, 1.4vw, 0.875rem)' }}>
                      {badge.stat}
                    </p>
                    {badge.label && (
                      <p className="font-body text-white/55 text-xs leading-tight mt-0.5">{badge.label}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NO bottom fade — hard cut into cream */}


      {/* ── ATMOSPHERE ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)' }} className="py-24">
        <div className="mx-auto max-w-6xl px-6 space-y-24">

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <img src={interiorArch} alt="Arched niche interior with warm pendant lights" loading="lazy" className="rounded-2xl shadow-2xl object-cover w-full h-[460px]" />
            </Reveal>
            <Reveal delay={150}>
              <p className="font-script text-4xl md:text-5xl" style={{ color: 'var(--brown)' }}>
                A Place That Feels Like A Warm Hug
              </p>
              <p className="mt-6 font-body text-[15px] leading-[1.85]" style={{ color: 'rgba(122,92,77,0.9)' }}>
                Whether you're meeting friends, pausing after a spiritual visit to Meherabad,
                or simply enjoying a quiet evening coffee — Café Eternal is built for slow moments.
                Every corner is designed to help you breathe, connect, and feel at home.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal delay={150} className="md:order-2">
              <img src={outdoorTiled} alt="Tiled outdoor seating with rattan pendants" loading="lazy" className="rounded-2xl shadow-2xl object-cover w-full h-[460px]" />
            </Reveal>
            <Reveal className="md:order-1">
              <p className="font-display italic text-sm" style={{ color: 'var(--gold)' }}>Open 7:30 AM – 10:30 PM Daily</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl" style={{ color: 'var(--brown)' }}>
                Where Every Table Has A Story
              </h2>
              <p className="mt-6 font-body text-[15px] leading-[1.85]" style={{ color: 'rgba(122,92,77,0.9)' }}>
                From morning cold brews under open skies to candlelit evenings
                with fairy lights above — every visit feels like the first time.
              </p>
            </Reveal>
          </div>

        </div>
      </section>


      {/* ── SIGNATURE SPECIALS ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--ink)' }} className="py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <p className="font-script text-5xl" style={{ color: 'var(--gold)' }}>Signature Specials</p>
              <h2 className="mt-2 font-display text-2xl md:text-3xl" style={{ color: 'var(--cream)' }}>
                What Our Guests Come Back For
              </h2>
            </div>
          </Reveal>
        </div>

        <SpecialsCarousel />

        <div className="mt-12 text-center">
          <Link to="/menu" className="font-display uppercase tracking-wider-2 text-sm border-b pb-1" style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
            See Full Menu →
          </Link>
        </div>
      </section>


      {/* ── GALLERY PREVIEW ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)' }} className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl" style={{ color: 'var(--brown)' }}>The Eternal Vibe</h2>
          </Reveal>

          <div className="mt-12 columns-2 md:columns-3 gap-4 [&>*]:mb-4">
            {gallery.map((g, i) => (
              <Reveal key={g.alt} delay={i * 60}>
                <div className="group relative overflow-hidden rounded-xl">
                  <img src={g.src} alt={g.alt} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all">
                    <span className="opacity-0 group-hover:opacity-100 font-display uppercase tracking-wider-2 text-sm text-white transition-opacity">View Gallery</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/gallery" className="font-display uppercase tracking-wider-2 text-sm border-b pb-1 transition-colors hover:opacity-70" style={{ color: 'var(--brown)', borderColor: 'var(--gold)' }}>
              See The Eternal Vibe →
            </Link>
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--ink)' }} className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center font-script text-5xl" style={{ color: 'var(--gold)' }}>What Our Guests Say</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.who} delay={i * 100}>
                <div className="h-full rounded-xl p-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(217,164,65,0.2)', backdropFilter: 'blur(10px)' }}>
                  <div className="flex gap-0.5" style={{ color: 'var(--gold)' }}>
                    {Array.from({ length: r.stars }).map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="mt-4 font-body text-sm leading-relaxed italic" style={{ color: 'rgba(245,235,221,0.85)' }}>"{r.body}"</p>
                  <p className="mt-5 font-display" style={{ color: 'var(--gold)' }}>— {r.who}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── LOCATION CTA ─────────────────────────────────────────────────── */}
      <section
        className="relative py-28"
        style={{ backgroundImage: `linear-gradient(rgba(10,6,2,0.82), rgba(10,6,2,0.82)), url(${heroNight})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em]" style={{ color: 'rgba(245,235,221,0.7)' }}>Find Us</p>
          <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-white leading-snug">
            Just Minutes Away From<br className="hidden sm:block" /> Meherbaba Samadhi
          </h2>
          <p className="mt-4 font-body text-sm" style={{ color: 'rgba(245,235,221,0.8)' }}>
            Meherabad Road, Ahilyanagar · Open 7:30 AM – 10:30 PM
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/EYmwvYtNyaExT35L8"
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-8 py-3 font-display uppercase tracking-wider-2 text-sm transition-opacity hover:opacity-90"
              style={{ background: 'var(--gold)', color: 'var(--ink)' }}
            >
              Open Google Maps
            </a>
            <a
              href="https://wa.me/919403770005?text=Hi%20Cafe%20Eternal%2C%20I%27d%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-8 py-3 font-display uppercase tracking-wider-2 text-sm text-white transition-all hover:bg-white hover:text-[#1B1B1B]"
              style={{ borderColor: 'rgba(255,255,255,0.7)' }}
            >
              Reserve on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </SiteLayout>
  )
}
