import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { SiteLayout } from '../components/SiteLayout'
import { Reveal } from '../components/Reveal'

export default function VisitPage() {
  return (
    <SiteLayout>
      <section style={{ background: 'var(--ink)' }} className="pt-32 pb-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--cream)' }}>Come Find Us</h1>
        <p className="mt-3 font-script text-3xl" style={{ color: 'var(--gold)' }}>
          We're waiting with warm coffee and warmer lights.
        </p>
      </section>

      <section style={{ background: 'var(--cream)' }} className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 md:items-start">

          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-sm uppercase tracking-wider-2" style={{ color: 'var(--gold)' }}>Location</h2>
                <p className="mt-3 font-display text-2xl leading-snug" style={{ color: 'var(--brown)' }}>
                  📍 Café Eternal<br />
                  Meherabad Road, Ahilyanagar<br />
                  Near Meherbaba Samadhi, Maharashtra
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm uppercase tracking-wider-2" style={{ color: 'var(--gold)' }}>Timings</h2>
                <p className="mt-3 font-display text-2xl" style={{ color: 'var(--brown)' }}>
                  🕐 Every Day<br />
                  7:30 AM – 10:30 PM
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm uppercase tracking-wider-2" style={{ color: 'var(--gold)' }}>Contact</h2>
                <p className="mt-3 font-display text-xl" style={{ color: 'var(--brown)' }}>
                  📞 +91 94037 70005<br />
                  📞 +91 755 916 1077
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+919403770005"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display uppercase tracking-wider-2 text-xs transition-opacity hover:opacity-90"
                  style={{ background: 'var(--gold)', color: 'var(--ink)' }}
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://wa.me/919403770005?text=Hi%20Cafe%20Eternal%2C%20I%27d%20like%20to%20reserve%20a%20table."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-display uppercase tracking-wider-2 text-xs transition-all hover:text-[#F5EBDD]"
                  style={{ borderColor: 'var(--brown)', color: 'var(--brown)' }}
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/EYmwvYtNyaExT35L8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 font-display uppercase tracking-wider-2 text-xs transition-all hover:text-[#F5EBDD]"
                  style={{ borderColor: 'var(--brown)', color: 'var(--brown)' }}
                >
                  <MapPin size={16} /> Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="Café Eternal location map"
                src="https://www.google.com/maps?q=Cafe+Eternal+Meherabad+Road+Ahilyanagar&output=embed"
                width="100%"
                height={500}
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

        </div>
      </section>

      <section style={{ background: 'var(--cream-dark)' }} className="py-20">
        <p className="mx-auto max-w-3xl px-6 text-center font-display italic text-2xl md:text-3xl leading-relaxed" style={{ color: 'var(--brown)' }}>
          "Just 700 meters from Meherbaba Samadhi — the perfect place to pause,
          refresh, and stay awhile."
        </p>
      </section>
    </SiteLayout>
  )
}
