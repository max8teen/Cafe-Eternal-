import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo-transparent.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/visit', label: 'Visit Us' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          background: solid ? 'rgba(245,235,221,0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(12px)' : 'none',
          boxShadow: solid ? '0 2px 20px -10px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          {/* Logo — white on dark hero, natural on cream nav */}
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Café Eternal"
              className="h-13 w-13 object-contain transition-all duration-300"
              style={{
                filter: solid ? 'none' : 'brightness(0) invert(1)',
              }}
            />
            <span
              className="font-display text-xl tracking-wide transition-colors duration-300"
              style={{ color: solid ? 'var(--olive)' : 'white' }}
            >
              Café Eternal
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => {
              const isActive = l.to === '/' ? pathname === '/' : pathname.startsWith(l.to)
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="font-display text-sm uppercase tracking-wider transition-colors duration-200 relative"
                  style={{
                    letterSpacing: '0.1em',
                    color: isActive ? (solid ? 'var(--olive)' : 'var(--gold)') : scrolled ? 'var(--brown)' : 'white',
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: solid ? 'var(--olive)' : 'var(--gold)' }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Reservations button — top right */}
          <Link
            to="/visit"
            className="hidden md:block font-display text-sm uppercase tracking-wider px-5 py-2 transition-all hover:opacity-80"
            style={{
              letterSpacing: '0.12em',
              border: `1.5px solid ${solid ? 'var(--olive)' : 'white'}`,
              color: solid ? 'var(--olive)' : 'white',
            }}
          >
            Reservations
          </Link>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 transition-colors"
            style={{ color: solid ? 'var(--olive)' : 'white' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Fullscreen mobile overlay */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500"
        style={{
          background: 'rgba(27,27,27,0.97)',
          backdropFilter: 'blur(16px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(217,164,65,0.07) 0%, transparent 70%)' }} />

        <nav className="relative z-10 flex flex-col items-center gap-1">
          {links.map((l, i) => {
            const isActive = l.to === '/' ? pathname === '/' : pathname.startsWith(l.to)
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display px-8 py-4 text-5xl tracking-wide transition-all duration-300"
                style={{
                  color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateY(0)' : 'translateY(14px)',
                  transition: open
                    ? `opacity 0.55s ease ${70 * i}ms, transform 0.55s ease ${70 * i}ms, color 0.2s`
                    : 'opacity 0.2s ease, transform 0.2s ease',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <a
          href="https://wa.me/919403770005?text=Hi%20Cafe%20Eternal%2C%20I%27d%20like%20to%20reserve%20a%20table."
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="relative z-10 mt-10 font-display text-sm uppercase tracking-wider-2 border px-8 py-3 transition-all"
          style={{
            borderColor: 'var(--gold)',
            color: 'var(--gold)',
            opacity: open ? 1 : 0,
            transition: `opacity 0.6s ease ${70 * links.length + 100}ms`,
          }}
        >
          Reserve a Table
        </a>

        <p
          className="absolute bottom-10 font-script text-sm tracking-widest"
          style={{
            color: 'rgba(255,255,255,0.2)',
            opacity: open ? 1 : 0,
            transition: `opacity 0.6s ease ${70 * links.length + 200}ms`,
          }}
        >
          Café Eternal
        </p>
      </div>
    </>
  )
}
