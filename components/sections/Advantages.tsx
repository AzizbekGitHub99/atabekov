'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/context/LangContext'
import {
  ShieldCheck, Leaf, Thermometer, BadgeCheck, Truck, Clock
} from 'lucide-react'

const ICONS = [ShieldCheck, Leaf, Thermometer, BadgeCheck, Truck, Clock]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('section-visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Advantages() {
  const { t } = useLang()
  const titleRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section
      id="advantages"
      className="relative py-28 bg-bg-card dark:bg-bg-card-dark overflow-hidden"
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path d="M0 0 L1440 0 L1440 20 Q720 80 0 20 Z" className="fill-bg-main dark:fill-bg-dark" />
        </svg>
      </div>

      {/* Decorative accents */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #C5A059, transparent)' }}
      />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #7A0016, transparent)' }}
      />
      <div className="absolute inset-0 bg-pattern opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={titleRef} className="section-hidden text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 bg-accent/8 mb-5">
            {t.advantages.tag}
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-main dark:text-text-dark mb-4">
            {t.advantages.title}{' '}
            <span className="gradient-text">{t.advantages.titleAccent}</span>
          </h2>
          <p className="text-text-muted dark:text-text-dark-muted max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            {t.advantages.subtitle}
          </p>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="section-hidden grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.advantages.items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck
            return (
              <div
                key={i}
                id={`advantage-card-${i}`}
                className={`advantage-card stagger-${(i % 3) + 1}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(197,160,89,0.12), rgba(122,0,22,0.06))',
                    border: '1px solid rgba(197,160,89,0.25)',
                  }}
                >
                  <Icon size={22} className="text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-serif font-bold text-lg text-text-main dark:text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted dark:text-text-dark-muted leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>


      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path d="M0 60 L1440 60 L1440 40 Q720 -20 0 40 Z" className="fill-bg-main dark:fill-bg-dark" />
        </svg>
      </div>
    </section>
  )
}
