'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Star } from 'lucide-react'
import { useLang } from '@/context/LangContext'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const { t } = useLang()
  const router = useRouter()
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current?.classList.add('section-visible-x')
      rightRef.current?.classList.add('section-visible-x')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const goToProducts = () => {
    router.push('/products')
  }
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-main dark:bg-bg-dark bg-pattern"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7A0016 0%, transparent 70%)' }}
      />

      {/* Geometric SVG accents */}
      <svg className="absolute top-20 left-10 opacity-10 dark:opacity-20" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="60" cy="60" r="35" fill="none" stroke="#7A0016" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
      <svg className="absolute bottom-24 right-16 opacity-10 dark:opacity-20" width="80" height="80" viewBox="0 0 80 80">
        <rect x="4" y="4" width="72" height="72" rx="8" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">

          {/* Left — 60% */}
          <div
            ref={leftRef}
            className="lg:col-span-3 section-hidden-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-accent/40 bg-accent/8 dark:bg-accent/10">
                <Star size={13} className="text-accent fill-accent" />
                <span className="text-xs font-semibold tracking-[0.08em] uppercase text-accent">
                  {t.hero.badge}
                </span>
                <Star size={13} className="text-accent fill-accent" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-black leading-[0.95] tracking-tighter mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-text-main dark:text-text-dark">
                {t.hero.titleLine1}
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl gradient-text">
                {t.hero.titleLine2}
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-text-main dark:text-text-dark">
                {t.hero.titleLine3}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-text-muted dark:text-text-dark-muted font-medium italic mt-2">
                {t.hero.titleEnd}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-muted dark:text-text-dark-muted max-w-xl leading-relaxed mb-10">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                id="hero-cta-products"
                onClick={goToProducts}
                className="btn-primary text-sm"
              >
                {t.hero.cta}
                <ArrowRight size={16} className="btn-arrow" />
              </button>
              <button
                id="hero-cta-about"
                onClick={scrollToAbout}
                className="btn-ghost text-sm"
              >
                {t.hero.ctaSecondary}
                <ArrowRight size={16} className="btn-arrow" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6">
              {[
                { value: '25+', label: "Yil tajriba" },
                { value: '100%', label: "Halol" },
                { value: '50+', label: "Mahsulot" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-border-light dark:bg-border-dark" />}
                  <div>
                    <div className="font-serif font-bold text-xl text-accent">{item.value}</div>
                    <div className="text-xs text-text-muted dark:text-text-dark-muted">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 40% */}
          <div
            ref={rightRef}
            className="lg:col-span-2 section-hidden-right flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-none">
              {/* Blob background */}
              <div className="absolute inset-[-20%] hero-blob opacity-60" />

              {/* Floating ring */}
              <div className="absolute inset-[-10%] border-2 border-accent/20 rounded-full animate-spin"
                style={{ animationDuration: '25s', animationTimingFunction: 'linear' }}
              />
              <div className="absolute inset-[-5%] border border-primary/10 rounded-full animate-spin"
                style={{ animationDuration: '18s', animationTimingFunction: 'linear', animationDirection: 'reverse' }}
              />

              {/* Main product image */}
              <div className="relative aspect-square animate-float">
                <div className="relative w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1558030006-450675393462?w=700&q=80"
                    alt="Atabekov premium kolbasa mahsuloti"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 40vw"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20" />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-gold border border-accent/20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xs font-bold text-accent tracking-wider">✓ 100% HALOL</div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-md border border-white/10 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Star size={12} className="text-accent fill-accent" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-text-main dark:text-text-dark">ISO Sertifikat</div>
                      <div className="text-[9px] text-text-muted">Premium Zavod</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Abstract SVG element */}
              <svg
                className="absolute -z-10 bottom-0 right-0 w-40 h-40 opacity-20 dark:opacity-30"
                viewBox="0 0 160 160"
              >
                <path d="M80 10 L150 50 L150 110 L80 150 L10 110 L10 50 Z"
                  fill="none" stroke="#C5A059" strokeWidth="2" />
                <path d="M80 30 L130 60 L130 100 L80 130 L30 100 L30 60 Z"
                  fill="none" stroke="#7A0016" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        id="scroll-down-btn"
        onClick={scrollToAbout}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors group"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-scrollBounce" />
      </button>
    </section>
  )
}
