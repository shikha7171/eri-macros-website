'use client'

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

import { motion, useScroll, useTransform } from "motion/react"

import {
  ArrowUpRight,
  Lightbulb,
  FlaskConical,
  Trees,
  ShieldCheck,
} from "lucide-react"

import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/reveal"
/* ======================================================
   INTRO
====================================================== */

export function Intro() {
  const phrase = "The way we think about protein is changing."
  const words = phrase.split(" ")

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="font-manrope text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#1F2A1F] text-balance md:text-6xl">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-3 inline-block"
                initial={{
                  opacity: 0.15,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#35552F]" />

        </div>


        {/* Content */}
        <div className="mx-auto mt-20 max-w-4xl space-y-8">

          <p className="text-lg leading-relaxed text-[#44524A] md:text-xl">
            For generations, protein has come from familiar sources. They have
            nourished billions, shaped industries, and supported a growing
            world. As the demands placed on our food systems evolve, the way we
            think about future nutrition must evolve with them.
          </p>


          <p className="text-lg leading-relaxed text-[#44524A] md:text-xl">
            The next chapter is not about replacing what already exists. It is
            about discovering solutions that are sustainable, resource-efficient,
            and inspired by the intelligence of nature.
          </p>

        </div>


        {/* Quote */}
        <div className="mx-auto mt-20 max-w-5xl">

          <div className="rounded-3xl border border-[#DCE7D2] bg-white px-8 py-12 shadow-sm transition-all duration-300 hover:shadow-xl md:px-12">

            <p className="font-manrope text-xl italic leading-relaxed text-[#35552F] md:text-3xl">
              "At Eri Macros, we believe the future of protein begins not by
              creating something entirely new, but by discovering the remarkable
              potential already present in nature."
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}


/* ======================================================
   RETHINKING PROTEIN
====================================================== */

export function RethinkingProtein() {

  return (

    <section className="bg-[#35552F] py-28 md:py-32">

      <div className="mx-auto max-w-7xl px-5 md:px-8">


        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[#C7D6B4]">
            OUR PHILOSOPHY
          </p>
        </Reveal>



        <Reveal delay={0.1}>

          <h2 className="mt-5 max-w-4xl font-manrope text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance md:text-6xl">

            Rethinking protein begins
            <br />
            with rethinking nature.

          </h2>

        </Reveal>



        <div className="mt-8 h-1 w-24 rounded-full bg-[#C7D6B4]" />



        <div className="mt-16 max-w-4xl space-y-8">


          <p className="text-lg leading-relaxed text-[#DDE7CF] md:text-xl">

            At Eri Macros, we are exploring nature's untapped potential to
            develop the next generation of sustainable protein. Guided by
            scientific research and responsible innovation, our work focuses on
            uncovering new possibilities from biological systems that have long
            been overlooked.

          </p>



          <p className="text-lg leading-relaxed text-[#DDE7CF] md:text-xl">

            One such possibility lies within the remarkable Eri silkworm. Best
            known for the silk it produces, this natural resource holds
            potential far beyond its traditional role. Our mission is to
            discover how it can contribute to a more resilient, sustainable and
            globally relevant future for nutrition.

          </p>


        </div>


      </div>

    </section>

  )
}
 /* ======================================================
    PILLARS DATA
 ====================================================== */

 const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Looking beyond convention to uncover new possibilities inspired by nature.",
  },
  {
    icon: FlaskConical,
    title: "Science",
    description:
      "Advancing every step through rigorous research, evidence and continuous discovery.",
  },
  {
    icon: Trees,
    title: "Sustainability",
    description:
      "Developing solutions that respect natural resources while creating lasting impact.",
  },
  {
    icon: ShieldCheck,
    title: "Responsibility",
    description:
      "Building the future with integrity, transparency and long-term thinking.",
  },
]


/* ======================================================
   PILLARS
====================================================== */

export function Pillars() {

  return (

    <section className="bg-[#EEF3E6] py-28 md:py-32">

      <div className="mx-auto max-w-6xl px-5 md:px-8">


        {/* Heading */}

        <Reveal>

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6B7B67]">
              OUR VALUES
            </p>


            <h2 className="mt-5 font-manrope text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1F2A1F] text-balance md:text-5xl">

              What drives everything we do

            </h2>


            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#35552F]" />


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#44524A] md:text-xl">

              Every decision at Eri Macros is guided by these principles,
              helping us create innovative, science-backed and sustainable
              nutrition for a better future.

            </p>


          </div>

        </Reveal>



        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {pillars.map((pillar, index) => {

            const Icon = pillar.icon


            return (

              <Reveal
                key={pillar.title}
                delay={index * 0.08}
              >

                <div className="group flex h-full flex-col rounded-3xl border border-[#D7E3D0] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-8">


                  {/* Icon */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DDE7CF] transition group-hover:scale-110">

                    <Icon className="h-7 w-7 text-[#35552F]" />

                  </div>



                  {/* Title */}

                  <h3 className="mt-6 font-manrope text-xl font-semibold text-[#1F2A1F]">

                    {pillar.title}

                  </h3>



                  {/* Divider */}

                  <div className="mt-4 h-[2px] w-12 rounded-full bg-[#35552F]/30" />



                  {/* Description */}

                  <p className="mt-5 text-sm leading-relaxed text-[#44524A]">

                    {pillar.description}

                  </p>


                </div>


              </Reveal>

            )

          })}


        </div>


      </div>


    </section>

  )

}
/* ======================================================
   FEATURE SPLIT
====================================================== */

export function FeatureSplit() {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })


  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  )


  return (

    <section ref={ref} className="py-28 md:py-32">

      <div className="mx-auto max-w-6xl px-5 md:px-8">


        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">


          {/* Image */}

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">


            <motion.div
              style={{ y }}
              className="absolute inset-0 scale-110"
            >

              <Image
                src="/images/eri-cocoons.png"
                alt="Natural cream-colored Eri silk cocoons"
                fill
                className="object-cover"
              />

            </motion.div>


          </div>



          {/* Content */}

          <div>


            <Reveal>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6B7B67]">

                THE ERI SILKWORM

              </p>

            </Reveal>



            <Reveal delay={0.05}>

              <h2 className="mt-5 max-w-xl font-manrope text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1F2A1F] text-balance md:text-5xl">

                Every breakthrough begins with a conversation.

              </h2>

            </Reveal>



            <div className="mt-8 h-1 w-20 rounded-full bg-[#35552F]" />



            <Reveal delay={0.1}>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#44524A] md:text-xl">

                Eri Macros is redefining how the world discovers sustainable
                protein. Whether you are a researcher, investor, policymaker,
                food manufacturer or simply curious about the future of food,
                we invite you to be part of the conversation.

              </p>

            </Reveal>



            <Reveal delay={0.15}>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#35552F] px-8 py-3.5 text-base font-medium text-[#35552F] transition-all duration-300 hover:bg-[#35552F] hover:text-white"
              >

                Get in touch

                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </Link>

            </Reveal>


          </div>


        </div>


      </div>


    </section>

  )

}



/* ======================================================
   STATS
====================================================== */


const stats = [
  {
    value: "100%",
    label: "Natural complete protein",
  },
  {
    value: "9",
    label: "Essential amino acids",
  },
  {
    value: "0",
    label: "Waste — fully circular",
  },
  {
    value: "500+",
    label: "Rural families supported",
  },
]


export function Stats() {


  return (

    <section className="bg-[#35552F] py-28 text-white md:py-32">


      <div className="mx-auto max-w-6xl px-5 md:px-8">


        <Stagger className="grid gap-10 md:grid-cols-4">


          {stats.map((item) => (

            <StaggerItem
              key={item.label}
              className="text-center md:text-left"
            >


              <h3 className="font-manrope text-5xl font-semibold leading-none md:text-6xl">

                {item.value}

              </h3>



              <div className="mx-auto mt-5 h-[2px] w-12 rounded-full bg-white/40 md:mx-0" />



              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">

                {item.label}

              </p>


            </StaggerItem>

          ))}


        </Stagger>


      </div>


    </section>

  )

}
/* ======================================================
   HOME CTA
====================================================== */

export function HomeCta() {

  return (

    <section className="relative overflow-hidden">


      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <Image
          src="/images/northeast-landscape.png"
          alt="Landscape of Northeast India"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#1E2B1D]/60" />

      </div>



      {/* Content */}

      <div className="mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-32">


        <div className="mx-auto max-w-4xl text-center">


          <Reveal>

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/75">

              JOIN THE FUTURE OF NUTRITION

            </p>

          </Reveal>




          <Reveal delay={0.05}>


            <h2 className="mt-5 font-manrope text-4xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance md:text-6xl">

              Let's grow a food system
              <br />
              that respects people
              <br />
              and the planet.

            </h2>


          </Reveal>




          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#D8E5C1]" />





          <Reveal delay={0.1}>


            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">

              Join us in exploring the next generation of sustainable
              nutrition—rooted in nature, strengthened by science, and designed
              for a healthier future for people and the planet.

            </p>


          </Reveal>





          <Reveal delay={0.2}>


            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">


              {/* Primary Button */}

              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#35552F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                Partner with Us

              </Link>





              {/* Secondary Button */}

              <Link
                href="/products"
                className="rounded-full border border-white px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#35552F]"
              >

                Explore Products

              </Link>



            </div>


          </Reveal>



        </div>


      </div>


    </section>

  )

}