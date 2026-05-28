'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Scale, Flame, Clock3, ListChecks, ShoppingBag } from 'lucide-react'
import { useLang } from '@/context/LangContext'

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

interface ProductItem {
  id: number
  name: string
  weight: string
  calories: string
  shelf: string
  ingredients: string
  desc: string
  image: string
}

function ProductCard({ item, index, t }: { item: ProductItem; index: number; t: any }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`product-card stagger-${(index % 3) + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — overlaps card top */}
      <div className="product-card-image pt-6 px-6">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className={`object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-60'}`} />

          {/* Halal badge */}
          <div className="absolute top-3 left-3">
            <span className="halal-badge">{t.products.halal}</span>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="px-6 pb-6 pt-4">
        <h3 className="font-serif font-bold text-xl text-text-main dark:text-text-dark mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-text-muted dark:text-text-dark-muted mb-4 leading-relaxed">
          {item.desc}
        </p>

        {/* Details — revealed on hover */}
        <div className="product-card-details">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { icon: Scale, label: t.products.weight, value: item.weight },
              { icon: Flame, label: t.products.calories, value: item.calories },
              { icon: Clock3, label: t.products.shelf, value: item.shelf },
              { icon: ListChecks, label: t.products.ingredients, value: item.ingredients },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 p-2.5 rounded-xl bg-bg-main dark:bg-bg-dark border border-border-light dark:border-border-dark stagger-${i + 1}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Icon size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-text-muted dark:text-text-dark-muted uppercase tracking-wide">{label}</div>
                  <div className="text-xs font-semibold text-text-main dark:text-text-dark leading-tight">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            id={`order-btn-${item.id}`}
            className="btn-primary w-full justify-center text-sm py-3"
          >
            <ShoppingBag size={16} />
            {t.products.orderBtn}
            <ArrowRight size={14} className="btn-arrow ml-auto" />
          </button>
        </div>

        {/* Divider */}
        <div className={`h-px bg-border-light dark:bg-border-dark mt-4 transition-all duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`} />
      </div>
    </div>
  )
}

export default function Products() {
  const { t } = useLang()
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

        {/* Products Grid */}
        <div
          ref={gridRef}
          className="section-hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.products.items.map((item, i) => (
            <ProductCard key={item.id} item={item as ProductItem} index={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
