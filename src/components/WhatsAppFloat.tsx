import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919403770005?text=Hi%20Cafe%20Eternal%2C%20I%27d%20like%20to%20reserve%20a%20table."
      target="_blank"
      rel="noreferrer"
      aria-label="Reserve on WhatsApp"
      className="pulse-soft fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
      style={{ background: 'var(--gold)', color: 'var(--ink)' }}
    >
      <MessageCircle size={26} />
    </a>
  )
}
