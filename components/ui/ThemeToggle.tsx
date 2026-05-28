'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [spinning, setSpinning] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggle = () => {
    setSpinning(true)
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      setSpinning(false)
    }, 250)
  }

  if (!mounted) {
    return (
      <button
        id="theme-toggle"
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-full flex items-center justify-center border border-border-light dark:border-border-dark bg-bg-card dark:bg-bg-card-dark"
      >
        <Sun size={18} />
      </button>
    )
  }

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-border-light dark:border-border-dark bg-bg-card dark:bg-bg-card-dark hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
    >
      <span
        className={`text-text-muted group-hover:text-accent transition-all duration-300 ${
          spinning ? 'animate-spin360' : ''
        }`}
      >
        {theme === 'dark' ? (
          <Sun size={18} className="text-accent" />
        ) : (
          <Moon size={18} />
        )}
      </span>
    </button>
  )
}
