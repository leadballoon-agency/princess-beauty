import Image from "next/image"

const depthInfo = [
  {
    depth: "1.5mm",
    target: "Epidermis & Upper Dermis",
    benefit: "Targets fine lines and surface texture for smoother, more radiant skin.",
    colour: "bg-primary-100 text-primary-700",
  },
  {
    depth: "3.0mm",
    target: "Deep Dermis",
    benefit: "Stimulates collagen production deep within the skin for lasting tightening.",
    colour: "bg-accent-100 text-accent-700",
  },
  {
    depth: "4.5mm",
    target: "SMAS Layer",
    benefit: "Reaches the same layer targeted in surgical facelifts — without surgery.",
    colour: "bg-primary-100 text-primary-700",
  },
]

export default function HifuDepthSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">
            The Science
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-2 sm:mt-3">
            How HIFU Works
            <span className="block gradient-text">Beneath the Surface</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            High-Intensity Focused Ultrasound delivers precise energy to three
            targeted depths — stimulating collagen and tightening skin from the
            inside out, without surgery or downtime.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Diagram image */}
          <div className="w-full max-w-sm flex-shrink-0 lg:max-w-md">
            <Image
              src="/images/hifu-depth-diagram.jpg"
              alt="HIFU treatment diagram showing ultrasound energy penetrating skin at 1.5mm, 3.0mm, and 4.5mm depths through Epidermis, Dermis, Subcutaneous tissue, and SMAS layer"
              width={600}
              height={600}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Depth cards */}
          <div className="flex-1 space-y-4 sm:space-y-5">
            {depthInfo.map((item) => (
              <div
                key={item.depth}
                className="flex gap-4 sm:gap-5 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${item.colour} font-bold text-lg`}>
                  {item.depth}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                    {item.target}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {item.benefit}
                  </p>
                </div>
              </div>
            ))}

            {/* Extra trust point */}
            <div className="flex items-center gap-3 rounded-xl bg-primary-50 p-4 mt-2">
              <svg className="h-5 w-5 flex-shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Zero downtime</strong> — HIFU is non-invasive. Most clients return to normal activities immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
