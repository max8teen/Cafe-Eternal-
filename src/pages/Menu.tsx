import { SiteLayout } from '../components/SiteLayout'
import { Reveal } from '../components/Reveal'
import { ScrollspyNav } from '../components/ScrollspyNav'

type Item = { name: string; price: string; desc?: string }
type Category = { id: string; label: string; note?: string; items: Item[] }

const categories: Category[] = [
  {
    id: 'mocktails', label: 'Mocktails', note: '7:30 AM – 10:30 PM',
    items: [
      { name: 'Virgin Mojito', price: '₹110' },
      { name: 'Lemon Mint Mojito', price: '₹110' },
      { name: 'Blueberry Mojito', price: '₹120' },
      { name: 'Green Apple Mojito', price: '₹110' },
      { name: 'Lemon Iced Tea', price: '₹100' },
      { name: 'Peach Iced Tea', price: '₹120' },
      { name: 'Pina Colada', price: '₹150' },
      { name: 'Strawberry Mojito', price: '₹120' },
    ],
  },
  {
    id: 'cold', label: 'Cold Beverages', note: '7:30 AM – 10:30 PM',
    items: [
      { name: 'Classic Cold Coffee', price: '₹150' },
      { name: 'Classic CC (With Ice Cream)', price: '₹180' },
      { name: 'Hazelnut Cold Coffee', price: '₹150' },
      { name: 'Caramel Cold Coffee', price: '₹150' },
      { name: 'Chocolate Cold Coffee', price: '₹160' },
      { name: 'Brownie Cold Coffee', price: '₹180' },
      { name: 'Vietnamese Cold Coffee', price: '₹220' },
      { name: 'Cold Brew', price: '₹190' },
      { name: 'Iced Coffee', price: '₹190' },
      { name: 'Choco Chips Cold Coffee', price: '₹210' },
      { name: 'Affogato', price: '₹250' },
      { name: 'Dalgona Iced Latte', price: '₹190' },
    ],
  },
  {
    id: 'hot', label: 'Hot Beverages', note: '7:30 AM – 10:30 PM',
    items: [
      { name: 'Cappuccino', price: '₹150' },
      { name: 'Cappuccino Add-ons (Hazelnut / Vanilla / Extra Caramel)', price: '+₹50' },
      { name: 'Espresso', price: '₹110' },
      { name: 'Latte', price: '₹160' },
      { name: 'Americano', price: '₹130' },
      { name: 'Classic Hot Chocolate', price: '₹200' },
    ],
  },
  {
    id: 'pasta', label: 'Pasta',
    items: [
      { name: 'Aglio Olio (Spaghetti)', price: '₹230' },
      { name: 'Marinara', price: '₹280' },
      { name: 'Pink Sauce Pasta', price: '₹300' },
      { name: 'Honey Chilli Paneer Pasta', price: '₹250' },
    ],
  },
  {
    id: 'salads', label: 'Salads',
    items: [
      { name: 'Caesar Salad', price: '₹250' },
      { name: 'Avocado Salad', price: '₹280' },
      { name: 'Cheese Garlic Bread Salad', price: '₹230' },
      { name: 'Guacamole A Salad', price: '₹210' },
      { name: 'Add On Banana Pepper', price: '+₹30' },
    ],
  },
  {
    id: 'bread', label: 'Bread',
    items: [
      { name: 'Cheese Garlic Bread', price: '₹160' },
      { name: 'Peri Peri Garlic Bread', price: '₹180' },
      { name: 'Avocado Toast', price: '₹180' },
      { name: 'Bruschetta', price: '₹120' },
    ],
  },
]

export default function MenuPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section style={{ background: 'var(--ink)' }} className="pt-32 pb-16 text-center">
        <h1 className="font-display text-5xl md:text-6xl" style={{ color: 'var(--cream)' }}>Our Menu</h1>
        <p className="mt-3 font-script text-3xl" style={{ color: 'var(--gold)' }}>
          Crafted with care. Priced with heart.
        </p>
      </section>

      {/* Sticky scrollspy */}
      <div className="sticky top-[68px] z-30 border-b" style={{ background: 'rgba(245,235,221,0.97)', backdropFilter: 'blur(12px)', borderColor: 'var(--cream-dark)' }}>
        <div className="mx-auto max-w-6xl">
          <ScrollspyNav sections={categories.map(c => ({ id: c.id, label: c.label }))} />
        </div>
      </div>

      {/* Categories */}
      <div style={{ background: 'var(--cream)' }}>
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="scroll-mt-36 py-16 border-b last:border-0"
            style={{ borderColor: 'rgba(237,217,192,0.6)' }}
          >
            <div className="mx-auto max-w-5xl px-6">
              <Reveal>
                <div className="text-center mb-10">
                  <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--olive)' }}>{cat.label}</h2>
                  {cat.note && <p className="mt-2 font-display italic text-sm" style={{ color: 'var(--gold)' }}>{cat.note}</p>}
                  <div className="mx-auto mt-4 h-px w-16" style={{ background: 'rgba(115,138,110,0.4)' }} />
                </div>
              </Reveal>

              <div className="grid gap-x-12 gap-y-1 md:grid-cols-2">
                {cat.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 20}>
                    <div className="flex items-baseline justify-between gap-4 py-4 border-b border-dashed" style={{ borderColor: 'var(--cream-dark)' }}>
                      <div>
                        <h3 className="font-display text-lg" style={{ color: 'var(--brown)' }}>{item.name}</h3>
                        {item.desc && <p className="font-body italic text-xs mt-1" style={{ color: 'var(--brown-light)' }}>{item.desc}</p>}
                      </div>
                      <span className="font-display font-semibold whitespace-nowrap" style={{ color: 'var(--gold)' }}>{item.price}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </SiteLayout>
  )
}
