'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/context/LangContext'
import { Award, Leaf, Clock, Users } from 'lucide-react'

const ICONS = [Award, Leaf, Clock, Users]

function useScrollReveal(className = 'section-visible') {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add(className); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [className])
  return ref
}

export default function About() {
  const { t } = useLang()
  const titleRef = useScrollReveal()
  const statsRef = useScrollReveal()
  const storyRef = useScrollReveal()

  const stats = [
    { value: t.about.stat1, label: t.about.stat1Label },
    { value: t.about.stat2, label: t.about.stat2Label },
    { value: t.about.stat3, label: t.about.stat3Label },
    { value: t.about.stat4, label: t.about.stat4Label },
  ]

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-bg-card dark:bg-bg-card-dark"
    >
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path d="M0 0 L1440 0 L1440 20 Q720 80 0 20 Z" className="fill-bg-main dark:fill-bg-dark" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-50" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #7A0016, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={titleRef} className="section-hidden text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-accent border border-accent/30 bg-accent/8 mb-5">
            {t.about.tag}
          </span>
          <h2 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-text-main dark:text-text-dark mb-4">
            {t.about.title}{' '}
            <span className="gradient-text">{t.about.titleAccent}</span>
          </h2>
          <p className="text-text-muted dark:text-text-dark-muted max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            {t.about.subtitle}
          </p>
          {/* Gold underline */}
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="section-hidden grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={i}
                className={`relative group p-6 sm:p-8 rounded-3xl border border-border-light dark:border-border-dark bg-bg-main dark:bg-bg-dark text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-gold stagger-${i + 1}`}
              >
                {/* Background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at 50% 100%, rgba(197,160,89,0.08), transparent 70%)' }}
                />
                {/* Icon */}
                <div className="w-10 h-10 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-all duration-300">
                  <Icon size={20} className="text-accent" />
                </div>
                {/* Number */}
                <div className="stat-number mb-1">{stat.value}</div>
                {/* Label */}
                <div className="text-sm font-medium text-text-muted dark:text-text-dark-muted">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Story */}
        <div ref={storyRef} className="section-hidden grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — SVG Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              {/* Big decorative year */}
              <div className="absolute -top-6 -left-4 font-serif font-black text-[120px] leading-none text-accent/8 dark:text-accent/5 select-none pointer-events-none">
                2000
              </div>

              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-light dark:border-border-dark aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Atabekov zavod"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="glass rounded-2xl px-4 py-3 border border-white/10">
                    <div className="text-white font-semibold text-sm">Atabekov Kolbasa Zavodi</div>
                    <div className="text-white/70 text-xs mt-0.5">Toshkent, O'zbekiston · 2000-yildan</div>
                  </div>
                </div>
              </div>

              {/* Floating cert card */}
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-gold border border-accent/20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-md">
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-text-main dark:text-text-dark">ISO Sertifikat</div>
                    <div className="text-xs text-text-muted">Xalqaro standart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-text-muted dark:text-text-dark-muted">
                {t.about.story}
              </p>

              {/* Timeline */}
              <div className="space-y-4 mt-8">
                {[
                  { year: '2000', event: 'Zavod tashkil topdi' },
                  { year: '2008', event: 'ISO sertifikati olindi' },
                  { year: '2015', event: '50+ mahsulot turiga erishildi' },
                  { year: '2024', event: "1 mln+ mijoz bilan ishlash" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-4 stagger-${i + 1}`}>
                    <div className="w-16 flex-shrink-0 font-serif font-bold text-accent text-sm">
                      {item.year}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
                    <div className="text-sm text-text-main dark:text-text-dark font-medium flex-shrink-0 max-w-[160px] text-right">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
