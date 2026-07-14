// app/sustainability/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Users, Leaf, Sprout, Globe, TreePine, Heart, TrendingUp, ArrowRight } from "lucide-react"

export default function SustainabilityPage() {
  return (
    <main className="bg-[#F3F1E7] text-[#1f2a1b]">
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-5xl px-5 pt-24 pb-16 text-center md:px-8 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
          Sustainability
        </p>
        <h1 className="mt-5 font-sans text-4xl font-semibold leading-tight text-balance text-[#2b3a22] md:text-6xl">
          Creating value that lasts
        </h1>
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#35552F]" />
      </section>

      {/* ---------- Intro split ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
  src="/images/sustainability.jpeg"
  alt="Sustainability"
  fill
  className="object-cover"
/>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[#4a5540]">
            <p>
              Sustainability is often associated with protecting the environment. At Eri Macros, we see it more broadly.
            </p>
            <p>
              For us, sustainability means creating nutritional solutions that are valuable not only for consumers, but also for the people, communities, and ecosystems that make those solutions possible.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Building on an Existing Ecosystem ---------- */}
<section className="bg-[#EEF3E6] py-20 md:py-28">
  <div className="mx-auto max-w-6xl px-5 md:px-8">
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
      Our approach
    </p>
    <h2 className="mt-4 max-w-3xl font-sans text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
      Building on an existing ecosystem
    </h2>

    <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-[#4a5540]">
      <p>
        Innovation doesn&apos;t always begin by creating something new.
        Sometimes, it begins by discovering greater value in what already exists.
      </p>
      <p>
        The Eri silkworm has supported silk production and rural livelihoods across
        Northeast India for generations. Rather than creating an entirely new production
        system, Eri Macros is exploring how the same ecosystem can contribute to future
        nutrition.
      </p>
      <p>
        By building upon an existing sericulture ecosystem, we believe innovation can
        strengthen&mdash;not replace&mdash;the value it already creates.
      </p>
    </div>

    {/* Circular ecosystem illustration */}
    <div className="mt-14 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-12">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
        {[
          { icon: Sprout, label: "Castor & Kesseru", note: "Host plants" },
          { icon: Leaf, label: "Eri Rearing", note: "Sericulture" },
          { icon: Globe, label: "Silk + Nutrition", note: "Dual output" },
          { icon: TrendingUp, label: "Regional Value", note: "Livelihoods" },
        ].map(({ icon: Icon, label, note }, i, arr) => (
          <div key={label} className="flex flex-1 flex-col items-center md:flex-row">
            <div className="flex flex-1 flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DDE7CF]">
                <Icon className="h-6 w-6 text-[#35552F]" />
              </span>
              <span className="mt-3 font-sans text-sm font-semibold text-[#2b3a22]">
                {label}
              </span>
              <span className="mt-1 text-xs text-[#7a8b5f]">{note}</span>
            </div>
            {i < arr.length - 1 && (
              <ArrowRight className="my-3 h-5 w-5 shrink-0 rotate-90 text-[#a7b78c] md:mx-2 md:my-0 md:rotate-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ---------- Creating Shared Value ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
            Impact areas
          </p>
          <h2 className="mt-4 font-sans text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
            Creating shared value
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#4a5540]">
            Our vision extends beyond developing a nutritional product. We aim to create positive outcomes across the entire Eri ecosystem.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Heart,
              title: "Nutrition",
              desc: "Expanding future nutritional choices through innovative protein ingredients.",
            },
            {
              icon: Users,
              title: "Farmers & Sericulture",
              desc: "Creating opportunities for greater value addition within the existing Eri sericulture ecosystem.",
            },
            {
              icon: TreePine,
              title: "Northeast India",
              desc: "Showcasing the region&apos;s unique biological resources through science-driven innovation.",
            },
            {
              icon: Globe,
              title: "Future Industries",
              desc: "Supporting the growth of nutrition and nutraceutical applications built on sustainable resources.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DDE7CF]">
                <Icon className="h-6 w-6 text-[#35552F]" />
              </span>
              <h3 className="mt-5 font-sans text-lg font-semibold text-[#2b3a22]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5540]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Our Commitment (highlighted band) ---------- */}
      <section className="bg-[#35552F] py-24 text-white md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#DDE7CF]">
            Our commitment
          </p>
          <h2 className="mt-5 font-sans text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Responsibility beyond the product
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#E8EEE0] md:text-xl">
            <p>
              Every innovation carries a responsibility beyond the product itself. At Eri Macros, we are committed to developing nutritional solutions with care, guided by scientific evidence, continuous learning, and responsible product development.
            </p>
            <p>
              Our focus is not only on creating better nutritional ingredients, but also on strengthening the ecosystem that supports them—creating lasting value for people, communities, and the future.
            </p>
            <p className="font-semibold">
            We believe meaningful impact is not measured by the promises we make, but by the value we create over time.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Pillars of Sustainability ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="text-center font-sans text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
          Pillars of our sustainability
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Scientific rigor",
              desc: "Every decision is evidence-based, ensuring that our solutions deliver real nutritional and ecological value.",
            },
            {
              number: "02",
              title: "Ecosystem focus",
              desc: "We strengthen existing systems rather than replace them, creating value at every step of the supply chain.",
            },
            {
              number: "03",
              title: "Community partnership",
              desc: "Our success is tied to the success of farmers, communities, and partners who make our work possible.",
            },
          ].map(({ number, title, desc }) => (
            <div key={number} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <div className="font-sans text-5xl font-bold text-[#35552F]">{number}</div>
              <h3 className="mt-6 font-sans text-xl font-semibold text-[#2b3a22]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5540]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Looking Forward ---------- */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
          Next steps
        </p>
        <h2 className="mt-5 font-sans text-3xl font-semibold leading-tight text-balance text-[#2b3a22] md:text-4xl">
          Building a sustainable future together
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5540]">
          Learn more about our science, explore our products, or get in touch to discuss partnership opportunities in building sustainable nutrition.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/science"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#35552F] px-8 py-3 font-medium text-[#35552F] transition hover:bg-[#35552F]/5"
          >
            Our science
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/innovation"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#35552F] px-8 py-3 font-medium text-white transition hover:bg-[#2b451f]"
          >
            Innovation journey
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}