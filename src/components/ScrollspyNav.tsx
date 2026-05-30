import { useEffect, useRef, useState } from 'react'

export type ScrollspySection = { id: string; label: string }

interface Props {
  sections: ScrollspySection[]
  offset?: number
}

export function ScrollspyNav({ sections, offset = 132 }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? '')
  const navRef = useRef<HTMLDivElement>(null)
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    const elements = sections.map(s => document.getElementById(s.id)).filter((el): el is HTMLElement => el !== null)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: `-${offset + 10}px 0px -55% 0px`, threshold: 0 }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [sections, offset])

  useEffect(() => {
    const btn = btnRefs.current[active]
    const nav = navRef.current
    if (!btn || !nav) return
    const navRect = nav.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()
    nav.scrollTo({ left: nav.scrollLeft + (btnRect.left - navRect.left) - navRect.width / 2 + btnRect.width / 2, behavior: 'smooth' })
  }, [active])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
    setActive(id)
  }

  return (
    <div ref={navRef} className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3">
      {sections.map(s => (
        <button
          key={s.id}
          ref={el => { btnRefs.current[s.id] = el }}
          onClick={() => handleClick(s.id)}
          className="shrink-0 rounded-full px-5 py-2 font-display text-xs md:text-sm uppercase tracking-wider-2 transition-all duration-300"
          style={
            active === s.id
              ? { background: 'var(--olive)', color: 'var(--cream)' }
              : { background: 'rgba(237,217,192,0.6)', color: 'var(--brown)' }
          }
        >
          {s.label}
        </button>
      ))}
    </div>
  )
}
