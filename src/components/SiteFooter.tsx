import { Link } from 'react-router-dom'
import { Instagram, MapPin, MessageCircle } from 'lucide-react'
import logo from '../assets/logo-transparent.png'

export function SiteFooter() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream)' }}>
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Café Eternal"
              className="h-11 w-11 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="font-display text-xl tracking-wide text-white">Café Eternal</span>
          </Link>
          <p className="mt-4 font-script text-2xl" style={{ color: 'var(--gold)' }}>Where comfort meets calm.</p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider-2" style={{ color: 'var(--gold)' }}>Quick Links</h3>
          <ul className="mt-4 space-y-2 font-body text-sm">
            {[['/', 'Home'], ['/menu', 'Menu'], ['/gallery', 'Gallery'], ['/visit', 'Visit Us']].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:opacity-80 transition-opacity">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-wider-2" style={{ color: 'var(--gold)' }}>Find Us</h3>
          <ul className="mt-4 space-y-2 font-body text-sm" style={{ color: 'rgba(245,235,221,0.85)' }}>
            <li>📍 Meherabad Road, Near Meherbaba Samadhi, Ahilyanagar</li>
            <li>📞 +91 94037 70005 / +91 755 916 1077</li>
            <li>🕐 7:30 AM – 10:30 PM Daily</li>
          </ul>
          <div className="mt-5 flex items-center gap-4" style={{ color: 'var(--gold)' }}>
            <a href="https://instagram.com/cafeeternal_" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="https://maps.app.goo.gl/EYmwvYtNyaExT35L8" target="_blank" rel="noreferrer" aria-label="Google Maps"><MapPin size={20} /></a>
            <a href="https://wa.me/919403770005?text=Hi%20Cafe%20Eternal%2C%20I%27d%20like%20to%20reserve%20a%20table." target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-xs" style={{ color: 'rgba(245,235,221,0.5)' }}>
          © 2026 Café Eternal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
