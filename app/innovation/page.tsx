// app/innovation/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Leaf, FlaskConical, Sprout, Globe, Microscope, TrendingUp, ArrowRight } from "lucide-react"

export default function InnovationPage() {
  return (
    <main className="bg-[#F3F1E7] text-[#1f2a1b]">
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-5xl px-5 pt-24 pb-16 text-center md:px-8 md:pt-32">
        <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
          Innovation
        </p>
        <h1 className="mt-5 font-manrope text-4xl font-semibold leading-tight text-balance text-[#2b3a22] md:text-6xl">
          Unlocking the potential of the Eri silkworm
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5540] md:text-xl">
          Innovation often begins by looking at familiar things from a different perspective.
        </p>
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#35552F]" />
      </section>

      {/* ---------- Intro split ---------- */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
  src="/images/innovation.jpeg"
  alt="Innovation"
  fill
  className="object-cover"
/>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[#4a5540]">
            <p>
            For generations, the Eri silkworm has been known for producing Eri silk, 
            which is an important part of the cultural and sericultural heritage of Northeast India.
             At Eri Macros, we are exploring another dimension of its potential: 
             developing sustainable nutritional ingredients from the Eri silkworm
              through scientific research and responsible product development.
            </p>
            <p>
            Our objective is to transform an underutilized natural resource into high-value nutritional
             solutions that contribute to a more sustainable and resilient food system.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why the Eri Silkworm (cards) ---------- */}
      <section className="bg-[#EEF3E6] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
            Why the Eri silkworm?
          </p>
          <h2 className="mt-4 max-w-3xl font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
            A unique position within India&apos;s sericulture ecosystem
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4a5540]">
          The Eri silkworm (Samia ricini) occupies a unique position within India's 
          sericulture ecosystem. While its contribution to silk production is well established,
           its nutritional potential remains comparatively underexplored.

          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sprout,
                title: "Established ecosystem",
                body: "Eri sericulture has been practiced for generations across Northeast India, creating a foundation for future innovation.",
              },
              {
                icon: Leaf,
                title: "Clean rearing practices",
                body: "It feeds primarily on castor and kesseru leaves under controlled conditions, making it a naturally selective species.",
              },
              {
                icon: FlaskConical,
                title: "Untapped nutrition",
                body: "Beyond silk, the Eri silkworm presents opportunities for developing high-value nutritional ingredients.",
              },
              {
                icon: Globe,
                title: "Regional, global relevance",
                body: "Building on an existing ecosystem generates value while showcasing Northeast India's biological resources globally.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DDE7CF]">
                  <Icon className="h-6 w-6 text-[#35552F]" />
                </span>
                <h3 className="mt-5 font-manrope text-xl font-semibold text-[#2b3a22]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5540]">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#4a5540]">
            Rather than replacing the legacy of Eri silk, we believe the next chapter is about
            expanding what the Eri silkworm can contribute.
          </p>
        </div>
      </section>

      {/* ---------- Our Innovation (highlighted band) ---------- */}
      <section className="bg-[#35552F] py-24 text-[#F3F6EC] md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#C7D6B4]">
            Our innovation
          </p>
          <h2 className="mt-5 font-manrope text-3xl font-semibold leading-tight text-balance md:text-4xl">
            How can an established biological resource create greater value for the future of
            nutrition?
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#DDE7CF]">
            <p>
            Our work focuses on studying the nutritional properties of the Eri silkworm and
             developing clean, high-quality protein ingredients suitable for modern nutritional applications.
            </p>
            <p>
            To strengthen our research and product development, we collaborate with the Department of Food Engineering
             and Technology at Tezpur University, combining academic expertise with practical innovation
            </p>
          </div>
        </div>
      </section>

      {/* ---------- What We Are Building ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="text-center">
          <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
            What we are building
          </p>
          <h2 className="mt-4 font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
            A portfolio of nature-inspired nutrition
          </h2>
        </div>
        <div className="mt-12 flex justify-center">
          {[
            { title: "Protein Powder", href: "/products" },
          ].map((item) => (
            <Link
  key={item.title}
  href={item.href}
  className="group flex w-full max-w-lg items-center justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition hover:ring-[#35552F]"
>
              <span className="font-manrope text-xl font-semibold text-[#2b3a22]">{item.title}</span>
              <ArrowRight className="h-5 w-5 text-[#35552F] transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Why It Matters ---------- */}
      <section className="bg-[#EEF3E6] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-center">
            <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
              Why it matters
            </p>
            <h2 className="mt-4 font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
              Value beyond the laboratory
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FlaskConical, title: "Nutrition", body: "Expanding the diversity of future protein and nutritional ingredient sources." },
              { icon: Leaf, title: "Sustainability", body: "Supporting resource-efficient nutritional solutions that complement existing food systems." },
              { icon: Globe, title: "Regional development", body: "Creating new opportunities around the Eri sericulture ecosystem in Northeast India." },
              { icon: Microscope, title: "Scientific advancement", body: "Contributing to research exploring insect-derived nutrition and its role in future foods." },
              { icon: TrendingUp, title: "Future industries", body: "Building a foundation for nutritional products serving domestic and international markets." },
              { icon: Sprout, title: "Lasting ecosystem", body: "Bringing research, sustainable innovation, and regional expertise together to create lasting value." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDE7CF]">
                  <Icon className="h-5 w-5 text-[#35552F]" />
                </span>
                <h3 className="mt-4 font-manrope text-lg font-semibold text-[#2b3a22]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5540]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Looking Ahead ---------- */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
          Looking ahead
        </p>
        <h2 className="mt-5 font-manrope text-3xl font-semibold leading-tight text-balance text-[#2b3a22] md:text-4xl">
          A long-term vision for the future of nutrition
        </h2>
        <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#4a5540]">
          <p>
            Our journey begins with the Eri silkworm, but our ambition extends beyond a single
            species or product. As our research grows, we envision a portfolio of nutritional and
            nutraceutical solutions inspired by nature and supported by science.
          </p>
          <p>
            We believe the future of nutrition will be shaped not by one breakthrough, but by many
            thoughtful innovations working together. 
          </p>
          <p>
          At Eri Macros, we are committed to discovering those possibilities, responsibly, scientifically, 
          and with a vision for a healthier and more sustainable future.
 
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#35552F] px-8 py-3.5 font-medium text-[#F3F6EC] transition hover:bg-[#2b451f]"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}