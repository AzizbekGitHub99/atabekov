'use client'

import { useLang, type Locale } from '@/context/LangContext'
import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const LANGS: { code: Locale; label: string; flag: string }[] = [
  { code: 'uz', label: "O'zbek", flag: 'UZ' },
  { code: 'ru', label: 'Русский', flag: 'RU' },
  { code: 'en', label: 'English', flag: 'EN' },
]

export default function LangSelector() {
  const { locale, setLocale } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0]

  return (
    <div ref={ref} className="relative">
      <button
        id="lang-selector"
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-border-light dark:border-border-dark bg-bg-card dark:bg-bg-card-dark hover:border-accent hover:bg-accent/10 transition-all duration-300 text-sm font-medium text-text-muted hover:text-accent"
      >
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-40 rounded-2xl overflow-hidden border border-border-light dark:border-border-dark shadow-lg bg-bg-main dark:bg-bg-card-dark z-50 animate-scaleIn">
          {LANGS.map((lang) => (
            <button
              key={lang.code}
              id={`lang-${lang.code}`}
              onClick={() => {
                setLocale(lang.code)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 ${
                locale === lang.code
                  ? 'bg-accent/15 text-accent font-semibold'
                  : 'text-text-muted hover:bg-accent/8 hover:text-accent'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {locale === lang.code && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
