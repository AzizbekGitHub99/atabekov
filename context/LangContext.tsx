'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import uz from '@/locales/uz.json'
import ru from '@/locales/ru.json'
import en from '@/locales/en.json'

export type Locale = 'uz' | 'ru' | 'en'
export type Translations = typeof uz

const translations: Record<Locale, Translations> = { uz, ru, en }

interface LangContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const LangContext = createContext<LangContextType>({
  locale: 'uz',
  t: uz,
  setLocale: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('uz')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('atabekov-lang') as Locale
    if (stored && ['uz', 'ru', 'en'].includes(stored)) {
      setLocaleState(stored)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('atabekov-lang', newLocale)
    }
  }

  if (!mounted) {
    return (
      <LangContext.Provider value={{ locale: 'uz', t: uz, setLocale }}>
        {children}
      </LangContext.Provider>
    )
  }

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
