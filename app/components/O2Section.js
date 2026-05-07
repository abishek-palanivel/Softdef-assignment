'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function O2Section() {
  const [active, setActive] = useState(0)

  return (
    <section id="o2" className="py-20 px-6 md:px-12" style={{ background: '#0d1f0d' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span
            className="text-white text-xl md:text-2xl font-semibold px-6 py-2 rounded-sm"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
          >
            Our Best O₂
          </span>
        </div>

        <div
          className="flex flex-col md:flex-row items-center gap-8 rounded-2xl overflow-hidden p-8 md:p-12"
          style={{ background: '#152515', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Plant image */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-72 md:w-72 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500&q=80"
                alt="O2 plant collection"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-4">
              We Have Good And Best O₂ Plants Collection!
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#7a9a7a' }}>
              Our specially curated O₂ plants collection is a celebration of nature&apos;s finest
              air-purifying plants. Each plant in this collection is handpicked for its ability to
              produce fresh oxygen throughout the day, making your home or office a healthier and more
              refreshing place to live and work. From the classic peace lily to the robust snake plant,
              we have thousands of choices.
            </p>
            <button
              className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-80 mb-8"
              style={{ background: '#1e3a1e', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Buy Now
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '28px' : '10px',
                    height: '10px',
                    background: i === active ? '#4caf50' : '#2d4a2d',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
