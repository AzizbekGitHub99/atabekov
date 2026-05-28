'use client'

import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <LangProvider>
        {children}
      </LangProvider>
    </ThemeProvider>
  )
}
