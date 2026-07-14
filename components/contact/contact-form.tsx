'use client'

import { motion } from 'motion/react'
import { Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  return (
    <div className="relative rounded-[2rem] border border-border bg-card p-7 md:p-10">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        action="https://formspree.io/f/meeyokzv"
        method="POST"
        className="flex flex-col gap-5"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Subject</Label>

          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="How can we help?"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>

          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us a little about what you're looking for..."
            required
          />
        </div>

        <input
          type="hidden"
          name="_subject"
          value="New message from Eri Macros website"
        />

        <button
          type="submit"
          className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Send message

          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.form>
    </div>
  )
}