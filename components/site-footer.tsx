import Link from 'next/link'
import Image from 'next/image'

const groups = [
  {
    title: 'Explore',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/process', label: 'Our Process' },
      { href: '/sustainability', label: 'Sustainability' },
      { href: '/products', label: 'Nutrition' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
      { href: '/contact', label: 'Partnerships' },
      { href: '/contact', label: 'Careers' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="paper-grain relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
            <Image
  src="/logo-main.png"
  alt="Eri Macros Logo"
  width={55}
  height={55}
/>
              <span className="font-heading text-2xl font-semibold">
                Eri Macros
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-primary-foreground/70">
              Redefining protein through the Eri silkworm of Northeast India —
              nourishing people, communities, and the planet through a circular
              way of living.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm uppercase tracking-widest text-primary-foreground/60">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Eri Macros. Rooted in nature.</p>
          <p className="font-heading italic">www.erimacros.com</p>
        </div>
      </div>
    </footer>
  )
}
