import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Atabekov - Premium Halol Kolbasa va Go\'sht Mahsulotlari',
    template: '%s | Atabekov',
  },
  description:
    'Atabekov - O\'zbekistonning №1 premium halol kolbasa va go\'sht mahsulotlari zavodi. 25+ yillik tajriba, 100% tabiiy go\'sht, ISO sertifikat.',
  keywords: [
    'atabekov', 'kolbasa', 'go\'sht', 'halol', 'premium', 'zavod',
    'uzbekistan', 'kolbasa', 'go\'sht', 'halal', 'sausage', 'meat',
  ],
  authors: [{ name: 'Atabekov' }],
  icons: {
    icon: '/atabekov_logo.png',
    shortcut: '/atabekov_logo.png',
    apple: '/atabekov_logo.png',
  },
  openGraph: {
    title: 'Atabekov - Premium Halol Go\'sht Mahsulotlari',
    description: 'O\'zbekistonning №1 premium halol kolbasa zavodi. 25+ yillik tajriba.',
    type: 'website',
    locale: 'uz_UZ',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
