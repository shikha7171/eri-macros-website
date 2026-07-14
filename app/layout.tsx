import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Manrope } from 'next/font/google'
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
  title: 'Eri Macros — Redefining Protein from Nature',
  description:
    'Eri Macros turns the Eri silkworm, native to Northeast India, into a sustainable source of natural protein — supporting rural communities and a circular way of living.',
  generator: 'v0.app',
  keywords: [
    'Eri Macros',
    'Eri silkworm protein',
    'sustainable protein',
    'natural protein',
    'Northeast India',
    'circular food',
  ],
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
