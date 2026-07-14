// app/science/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Beaker, TrendingUp, Leaf, Shield, Microscope, Globe, CheckCircle2, ArrowRight } from "lucide-react"

export default function SciencePage() {
  return (
    <main className="bg-[#F3F1E7] text-[#1f2a1b]">
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-5xl px-5 pt-24 pb-16 text-center md:px-8 md:pt-32">
        <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
          Science
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#2b3a22] md:text-6xl">
          Building nutrition on evidence, not assumptions.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5540] md:text-xl">
          At Eri Macros, we believe that meaningful innovation begins with understanding, not assumptions.
        </p>
        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#35552F]" />
      </section>

      {/* ---------- Foundation ---------- */}
      <section className="mx-auto max-w-4xl px-5 pb-20 md:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-[#4a5540]">
          <p>
            Before a product reaches consumers, it must first answer important scientific questions.
            Is it nutritionally valuable? Is it safe? Can it be produced consistently? Does it solve
            a real problem?
          </p>
          <p>
            These questions guide our development process. Our work is guided by research, continuous
            validation, and a commitment to developing nutritional solutions responsibly.
          </p>
        </div>
      </section>

      {/* ---------- Why Insect Protein (cards) ---------- */}
      <section className="bg-[#EEF3E6] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
            Insect protein research
          </p>
          <h2 className="mt-4 max-w-3xl font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
            Why insect protein?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Beaker,
                title: "Nutritionally rich",
                body: "Edible insects are recognised for their high-quality protein, essential amino acids, healthy fats, vitamins and minerals, making them an active area of nutritional research.",
              },
              {
                icon: TrendingUp,
                title: "Growing global interest",
                body: "More than 2,000 edible insect species are documented worldwide, and over 2 billion people already include insects in their traditional diets.",
              },
              {
                icon: Globe,
                title: "Future food systems",
                body: "As global protein demand continues to rise, researchers are exploring alternative protein sources that can complement conventional agriculture.",
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
        </div>
      </section>

      {/* ---------- Why the Eri Silkworm (highlighted band) ---------- */}
      <section className="bg-[#35552F] py-24 text-[#F3F6EC] md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#C7D6B4]">
            A unique opportunity
          </p>
          <h2 className="mt-5 font-manrope text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Why the Eri silkworm?
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[#DDE7CF]">
            <p>
              Among the many edible insect species studied around the world, the Eri silkworm
              (Samia ricini) presents a particularly unique opportunity.
            </p>
            <p>
              Unlike many emerging protein sources, the Eri silkworm is already supported by an
              established sericulture ecosystem across Northeast India, where it has been reared for
              generations for silk production. Its pupae have also formed part of the traditional
              diets of several indigenous communities in the region.
            </p>
          </div>

          {/* Research highlights */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Protein content", value: "48–75%", detail: "dry basis, depending on processing" },
              { label: "Essential amino acids", value: "~44%", detail: "of total amino acid profile" },
              { label: "Protein quality (PDCAAS)", value: "~86", detail: "high-quality protein rating" },
              { label: "Additional benefits", value: "Rich", detail: "in lipids, vitamins and minerals" },
            ].map(({ label, value, detail }) => (
              <div
                key={label}
                className="rounded-xl bg-white/10 p-5 backdrop-blur-sm ring-1 ring-white/20"
              >
                <p className="text-sm uppercase tracking-wider text-[#C7D6B4]">{label}</p>
                <p className="mt-2 font-manrope text-2xl font-manrope">{value}</p>
                <p className="mt-1 text-xs text-[#DDE7CF]">{detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm italic text-[#DDE7CF]/80">
            These findings are based on published scientific studies and represent the nutritional
            characteristics reported for Eri pupae, not the specifications of an Eri Macros product.
          </p>
        </div>
      </section>

      {/* ---------- From Research to Reality (split) ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
              Development approach
            </p>
            <h2 className="mt-4 font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
              From research to reality
            </h2>
            <div className="mt-5 space-y-6 text-lg leading-relaxed text-[#4a5540]">
              <p>
                Scientific research provides the foundation. Product development is where that
                knowledge is put into practice.
              </p>
              <p>
                At Eri Macros, our role is to study existing scientific evidence, understand its
                practical applications, and translate scientific knowledge into practical nutritional
                solutions that are safe, consistent, and relevant.
              </p>
              <p>
                We are currently focused on prototype development, evaluation, and validation, taking
                a step-by-step approach where every improvement is guided by evidence rather than
                assumptions.
              </p>
              <p className="font-manrope text-[#2b3a22]">
                As scientific understanding continues to evolve, so will our products.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
  src="/images/science.jpg.jpeg"
  alt="Science"
  fill
  className="object-cover"
/>
          </div>
        </div>
      </section>

      {/* ---------- Research Steps ---------- */}
      <section className="bg-[#EEF3E6] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="text-center font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
            Our scientific approach
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Research", desc: "Study scientific evidence and identify opportunities" },
              { step: "02", title: "Understanding", desc: "Evaluate practical applications and feasibility" },
              { step: "03", title: "Development", desc: "Prototype and formulate nutritional solutions" },
              { step: "04", title: "Validation", desc: "Test for safety, consistency, and performance" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <span className="font-mono text-3xl font-bold text-[#35552F]">{step}</span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-[#2b3a22]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5540]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Key Stats ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="text-center font-manrope text-3xl font-semibold text-balance text-[#2b3a22] md:text-4xl">
          The global context
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: "2,000+", label: "Edible insect species documented worldwide" },
            { stat: "2B+", label: "People already consume edible insects in traditional diets" },
            { stat: "Up to 75%", label: "Reported protein content of Eri pupae" },
            { stat: "44%", label: "Essential amino acids in published studies" },
          ].map(({ stat, label }) => (
            <div key={stat} className="text-center">
              <div className="font-serif text-4xl font-bold text-[#35552F]">{stat}</div>
              <p className="mt-3 text-sm leading-relaxed text-[#4a5540]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Science in Practice ---------- */}
      <section className="bg-[#35552F] py-24 text-[#F3F6EC] md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#C7D6B4]">
            Our commitment
          </p>
          <h2 className="mt-5 font-manrope text-3xl font-semibold leading-tight text-balance md:text-4xl">
            Science guiding every decision
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#DDE7CF]">
            From research questions to product development, our work is grounded in evidence. Every
            step is validated, every claim is supported, and every product is built with scientific
            rigor and responsibility.
          </p>
        </div>
      </section>

      {/* ---------- Learn More ---------- */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="font-manrope text-xs uppercase tracking-[0.3em] text-[#7a8b5f]">
          Next steps
        </p>
        <h2 className="mt-5 font-manrope text-3xl font-semibold leading-tight text-balance text-[#2b3a22] md:text-4xl">
          Interested in our research?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4a5540]">
          Learn more about our innovation journey, explore our products, or get in touch to discuss
          collaboration opportunities.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/innovation"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#35552F] px-8 py-3 font-manrope text-[#35552F] transition hover:bg-[#35552F]/5"
          >
            Our innovation
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#35552F] px-8 py-3 font-manrope text-[#F3F6EC] transition hover:bg-[#2b451f]"
          >
            Explore products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}