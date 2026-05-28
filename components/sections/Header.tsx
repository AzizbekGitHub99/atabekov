'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useLang } from '@/context/LangContext'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LangSelector from '@/components/ui/LangSelector'

const NAV_SECTIONS = ['about', 'products', 'advantages', 'contact'] as const

export default function Header() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // animate underline via class
      el.classList.add('section-highlight')
      setTimeout(() => el.classList.remove('section-highlight'), 1200)
    }
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-white/70 dark:bg-bg-dark/75 backdrop-blur-md shadow-md py-3 border-white/20 dark:border-border-dark'
            : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <button
              id="logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Atabekov — bosh sahifa"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-gold transition-all duration-300">
                <Image
                  src="/atabekov_logo.png"
                  alt="Atabekov logotipi"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-lg text-primary tracking-tight">
                  ATABEKOV
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-text-muted font-medium">
                  Kolbasa Zavodi
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {NAV_SECTIONS.map((key) => (
                <button
                  key={key}
                  id={`nav-${key}`}
                  onClick={() => scrollTo(key)}
                  className="nav-link"
                >
                  {t.nav[key]}
                </button>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LangSelector />
              {/* Mobile burger */}
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu"
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark text-text-muted hover:text-primary hover:border-primary transition-all"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 glass flex flex-col pt-24 pb-8 px-8 gap-2 shadow-2xl transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_SECTIONS.map((key, i) => (
            <button
              key={key}
              id={`mobile-nav-${key}`}
              onClick={() => scrollTo(key)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`text-left px-4 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-accent/10 hover:text-accent text-text-main dark:text-text-dark ${
                mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {t.nav[key]}
            </button>
          ))}
          <div className="mt-auto pt-8 border-t border-border-light dark:border-border-dark">
            <div className="flex items-center gap-3">
              <span className="text-sm text-text-muted font-medium">ATABEKOV © 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
