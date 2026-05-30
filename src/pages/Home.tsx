import { Link } from 'react-router-dom'
import { Star, MapPin, Clock } from 'lucide-react'
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

export default function HomePage() {
  return (
    <SiteLayout>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[100svh] items-end justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroNight})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Layered overlays for depth */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,6,2,0.3) 0%, rgba(10,6,2,0.15) 40%, rgba(10,6,2,0.75) 80%, rgba(10,6,2,0.95) 100%)' }} />

        {/* Warm amber glow blobs */}
        <div className="warm-glow absolute top-0 left-0 h-[32rem] w-[32rem] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(217,164,65,0.25), transparent 70%)' }} />
        <div className="warm-glow absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(160,120,96,0.3), transparent 70%)', animationDelay: '3s' }} />

        {/* Content — bottom-anchored for cinematic feel */}
        <div className="hero-stagger relative z-10 w-full max-w-5xl px-6 pb-20 md:pb-28 flex flex-col items-center text-center gap-5">

          {/* Eyebrow line */}
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-white/40" />
            <span className="font-body text-xs uppercase tracking-[0.35em] text-white/60">Meherabad Road · Ahilyanagar</span>
            <span className="h-px w-12 bg-white/40" />
          </div>

          {/* Script tagline */}
          <p className="font-script leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', color: 'var(--gold)' }}>
            Slow Down.
          </p>

          {/* Main heading — larger, more presence */}
          <h1
            className="font-display font-light leading-[1.15] tracking-wide text-white"
            style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', maxWidth: '780px' }}
          >
            Sip Slowly.<br className="hidden sm:block" /> Stay Forever.
          </h1>

          {/* Divider */}
          <div className="h-px w-20 mt-1" style={{ background: 'var(--gold)', opacity: 0.7 }} />

          {/* Subtext */}
          <p className="font-body text-white/75 leading-relaxed max-w-lg" style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontWeight: 300 }}>
            A cozy aesthetic cafe near Meherbaba Samadhi where calm conversations,
            comfort food, and warm coffee come together.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <Link
              to="/menu"
              className="rounded-full px-10 py-3.5 font-display uppercase tracking-wider-2 text-sm transition-all hover:opacity-90"
              style={{ background: 'var(--gold)', color: 'var(--ink)', boxShadow: '0 10px 30px -8px rgba(217,164,65,0.65)' }}
            >
              Explore Menu
            </Link>
            <Link
              to="/visit"
              className="rounded-full border px-10 py-3.5 font-display uppercase tracking-wider-2 text-sm text-white transition-all hover:bg-white hover:text-[#1B1B1B]"
              style={{ borderColor: 'rgba(255,255,255,0.6)' }}
            >
              Visit Us
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-1">
            {[
              [<Star size={13} />, '4.5 Google Rating'],
              [<MapPin size={13} />, 'Near Meherbaba Samadhi'],
              [<Clock size={13} />, 'Open till 10:30 PM'],
            ].map(([icon, label]) => (
              <span
                key={String(label)}
                className="flex items-center gap-2 rounded-full px-4 py-1.5 text-white/85 text-xs md:text-sm"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}
              >
                <span style={{ color: 'var(--gold)' }}>{icon as React.ReactNode}</span>
                {label as string}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, var(--cream))' }} />
      </section>


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

        <div
          className="marquee-mask mt-14 relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
          }}
        >
          <div className="marquee-track gap-6">
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
