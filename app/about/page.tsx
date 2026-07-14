'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6EE] text-[#233322]">

      {/* ================= HERO ================= */}

<section className="relative h-screen min-h-[750px] overflow-hidden">

{/* Background Image */}
<Image
  src="/images/hero-page-about.jpeg"
  alt="About Eri Macros"
  fill
  priority
  className="object-cover"
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/40" />

{/* Content */}
<div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

  <div className="max-w-5xl">

    <span className="font-manrope text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
      ABOUT ERI MACROS
    </span>

    <h1 className="mt-8 font-manrope text-5xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-7xl">
      Rethinking the future of nutrition through the untapped potential of the Eri ecosystem.
    </h1>

    <div className="mt-10 h-1 w-28 rounded-full bg-[#D8E5C1]" />

  </div>

</div>

</section>
      {/* ================= INTRO ================= */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-20 lg:grid-cols-2 lg:items-start">

            {/* Left */}

            <div>

              <span className="font-manrope text-sm font-semibold uppercase tracking-[0.35em] text-[#6E8068]">
                Who We Are
              </span>

              <h2 className="mt-6 font-manrope text-4xl font-bold leading-tight tracking-tight text-[#233322]">
                Building tomorrow's
                <br />
                nutrition through
                <br />
                nature.
              </h2>

            </div>

            {/* Right */}

            <div className="space-y-8">

              <p className="text-xl leading-9 text-[#5F6B60]">
                Eri Macros is a nutrition innovation company exploring the
                untapped potential of the Eri silkworm to develop
                science-driven nutritional ingredients for the future.
              </p>

              <p className="text-lg leading-9 text-[#5F6B60]">
                Rooted in Northeast India, we combine scientific
                understanding, responsible product development, and
                long-term thinking to build nutritional solutions that are
                practical, sustainable, and globally relevant.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY WE EXIST ================= */}

      <section className="bg-[#EEF5E7] py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <span className="font-manrope text-sm font-semibold uppercase tracking-[0.35em] text-[#6E8068]">
              Why We Exist
            </span>

            <h2 className="mt-6 font-manrope text-4xl font-bold leading-tight tracking-tight text-[#233322]">
              Every familiar resource
              <br />
              holds an untold story.
            </h2>

          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-lg leading-9 text-[#5F6B60]">
                We started Eri Macros because we believed that one of
                Northeast India's most familiar resources still had an
                untold story to tell.
              </p>

            </div>

            <div>

              <p className="text-lg leading-9 text-[#5F6B60]">
                For generations, the Eri silkworm has been recognised for
                the silk it produces. We believe its contribution can
                extend much further.
              </p>

              <p className="mt-8 text-lg leading-9 text-[#5F6B60]">
                By exploring its nutritional potential, we aim to unlock
                new possibilities for nutrition while creating greater
                value around an ecosystem that has supported livelihoods
                across Northeast India for generations.
              </p>

            </div>

          </div>

          <div className="mt-24 grid gap-8 md:grid-cols-3">
                        {/* Card 1 */}

                        <div className="rounded-[28px] border border-[#D9E5D3] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF5E7] text-2xl">
  🌿
</div>

<h3 className="font-manrope text-2xl font-bold text-[#233322]">
  Heritage
</h3>

<p className="mt-5 leading-8 text-[#5F6B60]">
  Inspired by generations of knowledge surrounding the
  Eri ecosystem and its cultural significance across
  Northeast India.
</p>

</div>

{/* Card 2 */}

<div className="rounded-[28px] border border-[#D9E5D3] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF5E7] text-2xl">
  🔬
</div>

<h3 className="font-manrope text-2xl font-bold text-[#233322]">
  Innovation
</h3>

<p className="mt-5 leading-8 text-[#5F6B60]">
  Combining scientific research with responsible product
  development to unlock new nutritional possibilities.
</p>

</div>

{/* Card 3 */}

<div className="rounded-[28px] border border-[#D9E5D3] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

<div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF5E7] text-2xl">
  🌎
</div>

<h3 className="font-manrope text-2xl font-bold text-[#233322]">
  Impact
</h3>

<p className="mt-5 leading-8 text-[#5F6B60]">
  Creating sustainable value for communities,
  nutrition, and future generations through
  thoughtful innovation.
</p>

</div>

</div>

</div>

</section>

{/* ================= LOOKING AHEAD ================= */}

<section className="py-32 bg-[#F8F6EE]">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="grid gap-20 lg:grid-cols-2 lg:items-start">

{/* Left */}

<div>

<span className="font-manrope text-sm font-semibold uppercase tracking-[0.35em] text-[#6E8068]">
  Looking Ahead
</span>

<h2 className="mt-6 font-manrope text-4xl font-bold leading-tight tracking-tight text-[#233322]">
  Beyond one product.
  <br />
  Beyond one species.
</h2>

</div>

{/* Right */}

<div className="space-y-8">

<p className="text-lg leading-9 text-[#5F6B60]">
  Our journey begins with the Eri silkworm,
  but our vision extends beyond a single
  product or a single species.
</p>

<p className="text-lg leading-9 text-[#5F6B60]">
  As we grow, we aim to build a broader
  portfolio of nutrition and nutraceutical
  solutions inspired by nature, supported
  by science, and developed with
  responsibility.
</p>

<p className="text-lg leading-9 text-[#5F6B60]">
  At Eri Macros, we are not simply building
  products.
</p>

</div>

</div>

<div className="mx-auto mt-28 max-w-5xl text-center">

<p className="font-manrope text-3xl font-semibold italic leading-relaxed tracking-tight text-[#35552F] md:text-4xl">
“We are building a company that believes the
future of nutrition will come from looking
differently at the resources that already
exist.”
</p>

</div>

</div>

</section>
      {/* ================= CTA ================= */}

      <section className="bg-[#EEF5E7] py-32">

        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="overflow-hidden rounded-[40px] border border-[#D9E5D3] bg-white p-14 shadow-sm md:p-20">

            <div className="mx-auto max-w-3xl text-center">

              <span className="font-manrope text-sm font-semibold uppercase tracking-[0.35em] text-[#6E8068]">
                Join Our Journey
              </span>

              <h2 className="mt-6 font-manrope text-3xl font-bold leading-tight tracking-tight text-[#233322] md:text-4xl">
                Join us as we rethink the future of nutrition.
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#5F6B60]">
                Whether you're a researcher, industry partner,
                investor, or simply curious about sustainable
                nutrition, we'd love to start a conversation.
              </p>

              <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-[#35552F] px-8 py-4 font-manrope text-base font-semibold text-white transition-all duration-300 hover:bg-[#2C4828] hover:shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#35552F] px-8 py-4 font-manrope text-base font-semibold text-[#35552F] transition-all duration-300 hover:bg-[#35552F] hover:text-white"
                >
                  Get in Touch
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}