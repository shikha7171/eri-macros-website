import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Geist_Mono, Manrope } from 'next/font/google'
import './globals.css'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://erimacros.com'),

  title: {
    default: 'Eri Macros — Redefining Protein from Nature',
    template: '%s | Eri Macros',
  },

  description:
    'Eri Macros turns the Eri silkworm, native to Northeast India, into a sustainable source of natural protein while supporting rural communities and circular food systems.',

  applicationName: 'Eri Macros',

  keywords: [
    'Eri Macros',
    'Eri silkworm protein',
    'sustainable protein',
    'natural protein',
    'Northeast India',
    'circular food',
  ],

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-dark-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    shortcut: '/icon-dark-32x32.png',
    apple: '/apple-icon.png',
  },

  openGraph: {
    type: 'website',
    url: 'https://erimacros.com',
    siteName: 'Eri Macros',
    title: 'Eri Macros — Redefining Protein from Nature',
    description:
      'A sustainable source of natural protein from the Eri silkworm, rooted in Northeast India.',
    images: [
      {
        url: '/logo-main.png',
        alt: 'Eri Macros',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Eri Macros — Redefining Protein from Nature',
    description:
      'A sustainable source of natural protein from the Eri silkworm, rooted in Northeast India.',
    images: ['/logo-main.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#3a4a35',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable} bg-background`}
    >
      <body className={`${manrope.className} bg-[#F8F6EE]`}>
        <SiteNav />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}