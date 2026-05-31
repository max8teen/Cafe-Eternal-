import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { SiteNav } from './SiteNav'
import { SiteFooter } from './SiteFooter'
import { WhatsAppFloat } from './WhatsAppFloat'
import { PageLoader } from './PageLoader'

function PageFade({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(10px)'
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s ease, transform 0.45s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return <div ref={ref}>{children}</div>
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <PageLoader />
      <SiteNav />
      <PageFade>
        <main>{children}</main>
        <SiteFooter />
      </PageFade>
      <WhatsAppFloat />
    </div>
  )
}
