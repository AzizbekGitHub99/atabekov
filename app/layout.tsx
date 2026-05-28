import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Atabekov � Premium Halol Kolbasa va Go\'sht Mahsulotlari',
    template: '%s | Atabekov',
  },
  description:
    'Atabekov � O\'zbekistonning �1 premium halol kolbasa va go\'sht mahsulotlari zavodi. 25+ yillik tajriba, 100% tabiiy go\'sht, ISO sertifikat.',
  keywords: [
    'atabekov', 'kolbasa', 'go\'sht', 'halol', 'premium', 'zavod',
    '����������', '�������', '����', 'halal', 'sausage', 'meat',
  ],
  authors: [{ name: 'Atabekov' }],
  openGraph: {
    title: 'Atabekov � Premium Halol Go\'sht Mahsulotlari',
    description: 'O\'zbekistonning �1 premium halol kolbasa zavodi. 25+ yillik tajriba.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
