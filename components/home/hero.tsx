'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '24%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.7])

  const words = [
    'Some',
    'of',
    "nature's",
    'greatest',
    'innovations',
    'have',
    'gone',
    'unnoticed.',
  ]

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/front-image.png"
          alt="Fresh castor leaves with morning dew"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/40 to-transparent"
      />

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24"
      >
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 flex items-center gap-3 font-manrope text-xs uppercase tracking-[0.3em] text-primary-foreground/80"
        >
          <span className="h-px w-10 bg-primary-foreground/50" />
          Eri Macros · Northeast India
        </motion.p>

        {/* Heading */}
        <h1 className="max-w-5xl font-manrope text-5xl font-semibold leading-[1.15] text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <span
              key={i}
              className="mr-[0.25em] inline-block overflow-hidden"
            >
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle + Button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <p className="text-xl font-medium text-primary-foreground/90 md:text-2xl">
            At Eri Macros, we are exploring one of them.
          </p>

          <Link
            href="/innovation"
            className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-4 text-lg font-medium text-foreground transition-transform hover:scale-105"
          >
            Look Closer
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-5 hidden flex-col items-center gap-2 md:right-8 md:flex"
      >
        <span className="font-manrope text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-12 w-px animate-pulse bg-primary-foreground/50" />
      </motion.div>
    </section>
  )
}
