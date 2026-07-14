import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact/contact-form'
import { Reveal } from '@/components/reveal'
import { Mail, MapPin, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Eri Macros',
  description:
    'Get in touch with Eri Macros for partnerships, wholesale, research, or to join our early community.',
}

const details = [
  { icon: Mail, label: 'Email', value: 'erimacros.info@gmail.com' },
  { icon: MapPin, label: 'Based in', value: 'Northeast India' },
  { icon: Globe, label: 'Web', value: 'erimacros.com' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's build the future of food together"
        description="Whether you're a partner, a curious eater, or a fellow believer in circular living — we'd love to hear from you."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-balance">
              Get in Touch with Eri Macros
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
              Interested in partnerships, nutrition products, research collaborations,
              or wholesale opportunities? We'd love to hear from you.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.05 * (i + 1)}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-clay">
                        {d.label}
                      </p>
                      <p className="font-heading text-lg font-medium">
                        {d.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
