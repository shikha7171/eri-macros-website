'use client'

import { motion } from 'motion/react'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      {/* organic blurred accents */}
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-secondary/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-32 -z-10 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-clay"
        >
          <span className="h-px w-10 bg-clay/60" />
          {eyebrow}
        </motion.p>
        <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.08] text-balance md:text-6xl">
          {title.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-[0.22em] inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
