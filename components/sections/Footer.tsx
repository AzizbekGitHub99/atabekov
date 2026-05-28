'use client'

import Image from 'next/image'
import { useLang } from '@/context/LangContext'
import { ArrowUp, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

export default function Footer() {
  const { t } = useLang()
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (key: 'about' | 'products' | 'advantages' | 'contact') => {
    if (key === 'products') {
      router.push('/products')
    } else {
      if (pathname === '/') {
        const el = document.getElementById(key)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        router.push(`/#${key}`)
      }
    }
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <footer className="relative bg-bg-main dark:bg-bg-dark border-t border-border-light dark:border-border-dark overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.04] dark:opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #C5A059, transparent)' }}
      />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.03] dark:opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #7A0016, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-12 sm:pb-16 border-b border-border-light dark:border-border-dark">
          
          {/* Brand Col - 5 cols */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 group text-left"
              aria-label="Atabekov — bosh sahifa"
            >
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/atabekov_logo.png"
                  alt="Atabekov logotipi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-black text-2xl text-primary tracking-tight">
                  ATABEKOV
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-text-muted font-bold mt-1">
                  Kolbasa Zavodi
                </span>
              </div>
            </button>
            
            <p className="text-sm sm:text-base text-text-muted dark:text-text-dark-muted max-w-sm leading-relaxed">
              {t.footer.tagline} {t.hero.subtitle}
            </p>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase tracking-wider text-text-main dark:text-text-dark">
                {t.footer.social}
              </span>
              <div className="flex gap-3">
                <a
                  href="https://t.me/atabekov_zavod"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-social-telegram"
                  className="w-10 h-10 rounded-xl border border-border-light dark:border-border-dark text-text-muted hover:text-[#0088cc] hover:border-[#0088cc] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#0088cc]/5"
                  aria-label="Telegram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.87 4.326-2.962-.924c-.643-.204-.658-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.953z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/atabekov_zavod"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-social-instagram"
                  className="w-10 h-10 rounded-xl border border-border-light dark:border-border-dark text-text-muted hover:text-[#e1306c] hover:border-[#e1306c] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#e1306c]/5"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com/atabekov_zavod"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-social-facebook"
                  className="w-10 h-10 rounded-xl border border-border-light dark:border-border-dark text-text-muted hover:text-[#1877f2] hover:border-[#1877f2] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877f2]/5"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Col - 3 cols */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-main dark:text-text-dark">
              {t.about.tag}
            </h4>
            <ul className="space-y-3">
              {(['about', 'products', 'advantages', 'contact'] as const).map((key) => (
                <li key={key}>
                  <button
                    onClick={() => handleNavClick(key)}
                    className="text-sm text-text-muted dark:text-text-dark-muted hover:text-accent transition-colors duration-300 font-medium"
                  >
                    {t.nav[key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info/Contacts Col - 4 cols */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-main dark:text-text-dark">
              {t.contact.tag}
            </h4>
            <ul className="space-y-4 text-sm text-text-muted dark:text-text-dark-muted">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span>{t.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span>{t.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-xs text-text-muted dark:text-text-dark-muted">
          <p className="text-center sm:text-left font-medium">
            {t.footer.copy}
          </p>
          
          <button
            onClick={handleLogoClick}
            className="w-10 h-10 rounded-full border border-border-light dark:border-border-dark hover:border-accent text-text-muted hover:text-accent flex items-center justify-center transition-all duration-300 hover:bg-accent/5 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}
