import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef } from 'react'
import HomePage from './pages/Home'
import MenuPage from './pages/Menu'
import GalleryPage from './pages/Gallery'
import VisitPage from './pages/Visit'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export function PageFade({ children }: { children: React.ReactNode }) {
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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/visit" element={<VisitPage />} />
      </Routes>
    </>
  )
}
