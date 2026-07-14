'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    title: 'Rearing the Eri silkworm',
    body: 'Farmers in Northeast India raise Eri silkworms on castor leaves — a gentle, traditional practice passed down through generations.',
  },
  {
    n: '02',
    title: 'Harvesting peace silk',
    body: 'Unlike other silks, Eri silk is harvested without harming the moth. The cocoon gives us fibre — and leaves behind the protein-rich pupae.',
  },
  {
    n: '03',
    title: 'Recovering the pupae',
    body: 'What was once a discarded byproduct becomes our raw material. Nothing is wasted; the loop is closed.',
  },
  {
    n: '04',
    title: 'Gentle processing',
    body: 'Through careful, minimal processing we transform the pupae into a clean, complete protein — preserving its natural nutrition.',
  },
  {
    n: '05',
    title: 'Nourishing value',
    body: 'The result is a sustainable protein that feeds people, supports rural makers, and honours a circular way of living.',
  },
]

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={ref}
      className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="relative">
        {/* track */}
        <div className="absolute left-[19px] top-2 h-full w-0.5 bg-border md:left-[27px]" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[19px] top-2 w-0.5 origin-top bg-primary md:left-[27px]"
        />

        <ul className="flex flex-col gap-14">
          {steps.map((step) => (
            <li key={step.n} className="relative pl-16 md:pl-24">
              <Reveal y={30}>
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-xs font-semibold text-primary md:h-14 md:w-14 md:text-sm">
                  {step.n}
                </span>
                <h3 className="font-heading text-2xl font-medium md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
