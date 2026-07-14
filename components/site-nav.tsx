'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'


const links = [
  { href: '/', label: 'Home' },
  { href: '/innovation', label: 'Innovation' },
  { href: '/science', label: 'Science' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
]

export function SiteNav() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || !isHomePage
  ? 'bg-background/85 backdrop-blur-md border-b border-border/60'
  : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-foreground"
          aria-label="Eri Macros home"
        >
          <Image
  src={
    isHomePage
      ? (scrolled ? "/logo.png" : "/logo-main.png")
      : "/logo.png"
  }
  alt="Eri Macros Logo"
  width={45}
  height={45}
/>
<span
  className={cn(
    "font-heading text-xl font-semibold tracking-tight transition-colors",
    isHomePage
  ? (scrolled ? "text-black" : "text-white")
  : "text-black"
  )}
>
  Eri Macros
</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-bold transition-colors',
                    active
  ? isHomePage
    ? (scrolled ? 'text-black' : 'text-white')
    : 'text-black'
  : isHomePage
    ? (scrolled
        ? 'text-black hover:text-black'
        : 'text-white hover:text-white')
    : 'text-black hover:text-black',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {[...links, { href: '/contact', label: 'Contact' }].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base transition-colors',
                      pathname === link.href
                        ? 'bg-secondary text-primary'
                        : 'text-foreground/80 hover:bg-muted',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
