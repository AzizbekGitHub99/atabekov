'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Scale, Flame, Clock3, ListChecks, ShoppingBag } from 'lucide-react'
import { useLang, type Translations } from '@/context/LangContext'
import { useRouter } from 'next/navigation'

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('section-visible'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export interface ProductItem {
  id: number
  category: string
  name: string
  weight: string
  calories: string
  shelf: string
  ingredients: string
  desc: string
  image: string
}

export function ProductCard({ item, index, t }: { item: ProductItem; index: number; t: Translations }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`product-card stagger-${(index % 3) + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image frame */}
      <div className="product-card-image pt-5 px-5">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className={`object-cover transition-transform duration-750 ease-out ${hovered ? 'scale-108' : 'scale-100'}`}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Halal badge */}
          <div className="absolute top-3 left-3">
            <span className="halal-badge">{t.products.halal}</span>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="px-5 pb-5 pt-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif font-bold text-xl text-text-main dark:text-text-dark mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-xs text-text-muted dark:text-text-dark-muted mb-4 leading-relaxed line-clamp-2 min-h-[32px]">
            {item.desc}
          </p>

          {/* Details Grid */}
          <div className="product-card-details mb-4">
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Scale, label: t.products.weight, value: item.weight },
                { icon: Flame, label: t.products.calories, value: item.calories },
                { icon: Clock3, label: t.products.shelf, value: item.shelf },
                { icon: ListChecks, label: t.products.ingredients, value: item.ingredients },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-1.5 p-2 rounded-xl bg-bg-main dark:bg-bg-dark border border-border-light dark:border-border-dark"
                >
                  <Icon size={13} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="overflow-hidden">
                    <div className="text-[9px] text-text-muted dark:text-text-dark-muted uppercase tracking-wider truncate">{label}</div>
                    <div className="text-xs font-bold text-text-main dark:text-text-dark leading-tight truncate">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          id={`order-btn-${item.id}`}
          className="btn-primary w-full justify-center text-xs py-2.5 font-semibold"
        >
          <ShoppingBag size={14} />
          {t.products.orderBtn}
          <ArrowRight size={12} className="btn-arrow ml-auto" />
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  const { t } = useLang()
  const router = useRouter()
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section
      id="products"
      className="relative py-28 bg-bg-main dark:bg-bg-dark overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #C5A059, transparent)' }}
      />
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={titleRef} className="section-hidden text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 bg-accent/8 mb-5">
            {t.products.tag}
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-main dark:text-text-dark mb-4">
            {t.products.title}{' '}
            <span className="gradient-text">{t.products.titleAccent}</span>
          </h2>
          <p className="text-text-muted dark:text-text-dark-muted max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.products.subtitle}
          </p>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Products Grid — Show first 3 products */}
        <div
          ref={gridRef}
          className="section-hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.products.items.slice(0, 3).map((item, i) => (
            <ProductCard key={item.id} item={item as ProductItem} index={i} t={t} />
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-16 animate-fadeIn">
          <button
            onClick={() => router.push('/products')}
            className="btn-primary text-sm px-8 py-3.5 shadow-gold hover:shadow-gold/60"
          >
            <span>{t.hero.cta}</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>
        </div>

      </div>
    </section>
  )
}
