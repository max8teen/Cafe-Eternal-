import { useEffect, useState } from 'react'
import logo from '../assets/logo-transparent.png'

export function PageLoader() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('cafe-loaded')) return
    setShow(true)
    const t = setTimeout(() => {
      sessionStorage.setItem('cafe-loaded', '1')
      setShow(false)
    }, 2900)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="loader-fade fixed inset-0 z-[100] flex flex-col items-center justify-center" style={{ background: 'var(--cream)' }}>
      <div className="relative flex items-center justify-center">
        <div className="loader-ring absolute h-44 w-44 rounded-full border border-dashed" style={{ borderColor: 'rgba(115,138,110,0.45)' }} />
        <img src={logo} alt="Café Eternal" className="loader-logo relative h-28 w-28 object-contain" />
      </div>
      <div className="loader-line mt-10 h-px w-56 origin-left" style={{ background: 'rgba(115,138,110,0.6)' }} />
      <p className="font-script mt-6 text-3xl" style={{ color: 'var(--olive)' }}>where time slows down</p>
    </div>
  )
}
