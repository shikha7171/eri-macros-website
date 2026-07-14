import Link from "next/link";
import Image from "next/image"

export default function ProductsPage() {
  const product = {
    name: "Protein Powder",
    features: [
      "High-quality complete protein",
      "Rich in essential amino acids",
      "Supports muscle growth and recovery",
      "Easy to mix with water or milk",
    ],
  };

  return (
    <main className="min-h-screen bg-[#F8F6EF] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-[#1F2A1F]">
            Our Products
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Discover our innovative Eri-based protein products designed to
            provide sustainable nutrition with exceptional taste and quality.
          </p>
        </div>

        {/* Product Card */}
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-3xl border bg-white shadow-lg transition duration-300 hover:shadow-2xl">
            {/* Image Placeholder */}
            {/* Product Image */}
<div className="relative h-72 w-full">
  <Image
    src="/images/protein.png"
    alt="Eri Macros Protein Powder"
    fill
    className="object-contain p-8"
  />
</div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[#1F2A1F]">
                {product.name}
              </h2>

              <h3 className="mt-6 text-lg font-semibold uppercase tracking-wide text-[#46613E]">
                Why You'll Love It
              </h3>

              <ul className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-3 text-green-700">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#46613E] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#35502E]"
              >
                Request a Sample
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-bold text-[#1F2A1F]">
            More Products Coming Soon
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            We are continuously developing new sustainable, high-protein
            products from the Eri silkworm. Stay tuned as we expand our product
            range with innovative and nutritious offerings.
          </p>

          <div className="mt-10 inline-flex items-center rounded-full border border-dashed border-[#46613E] px-8 py-4 text-lg font-medium text-[#46613E]">
            🚀 Exciting innovations are on the way!
          </div>
        </div>
      </div>
    </main>
  );
}