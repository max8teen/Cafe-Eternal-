import type { ReactNode } from 'react'
import { SiteNav } from './SiteNav'
import { SiteFooter } from './SiteFooter'
import { WhatsAppFloat } from './WhatsAppFloat'
import { PageLoader } from './PageLoader'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)' }}>
      <PageLoader />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  )
}
