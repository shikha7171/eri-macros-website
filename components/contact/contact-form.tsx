'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Visual only for now — wire up email/database later.
    setSent(true)
  }

  return (
    <div className="relative rounded-[2rem] border border-border bg-card p-7 md:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
              <Check className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-medium">
              Thank you for reaching out
            </h3>
            <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
              Your message has been received. We&apos;ll be in touch soon —
              rooted in care, as always.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-medium text-primary hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
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
                placeholder="How can we help?"
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
            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
