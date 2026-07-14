'use client'

import { motion } from 'motion/react'

type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: MarqueeProps) {
  const row = [...items, ...items]
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap py-1"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-heading text-2xl italic md:text-3xl">
              {item}
            </span>
            <span aria-hidden className="text-xl opacity-50">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
