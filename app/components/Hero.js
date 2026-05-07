import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: '#0b1a0b' }}
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
          alt="Forest background"
          fill
          className="object-cover"
          style={{ opacity: 0.35 }}
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(11,26,11,0.92) 35%, rgba(11,26,11,0.55) 70%, rgba(11,26,11,0.3) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: heading + buttons + review */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
            Earth&apos;s Exhale
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: '#8aaa8a' }}>
            Earth&apos;s exhale symbolizes the purity and vitality of the Earth&apos;s natural
            environment and its connection to life-giving air through the beauty of plants.
          </p>

          <div className="flex items-center gap-4 mb-10">
            <Link
              href="#top-selling"
              className="px-7 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.35)' }}
            >
              Buy Now
            </Link>
            <button className="flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-white" style={{ color: '#8aaa8a' }}>
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </span>
              For Plants
            </button>
          </div>

          {/* Mini testimonial */}
          <div
            className="flex items-start gap-3 p-3 rounded-2xl w-fit max-w-[280px]"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                alt="Sunita Joshi"
                width={40}
                height={40}
                className="object-cover w-auto h-auto"
              />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Sunita Joshi</p>
              <div className="text-yellow-400 text-xs mb-1">★★★★★</div>
              <p className="text-xs leading-snug" style={{ color: '#7a9a7a' }}>
                Amazing plants! My workspace has never looked better.
              </p>
            </div>
          </div>
        </div>

        {/* Right: featured plant card */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div
            className="w-56 rounded-2xl overflow-hidden p-4 flex flex-col gap-3"
            style={{
              background: 'rgba(30,50,30,0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="rounded-xl overflow-hidden h-44 relative">
              <Image
                src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?w=300&q=80"
                alt="Aglaonema plant"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: '#7a9a7a' }}>
                Inline Plant
              </p>
              <div className="flex items-center justify-between">
                <p className="text-white text-sm font-semibold">Aglaonema plant</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7a9a7a"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
            <button
              className="w-full py-2 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-80"
              style={{ background: '#1e3a1e', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              Buy Now
            </button>
            {/* Dots indicator */}
            <div className="flex items-center justify-center gap-1.5">
              <span className="w-4 h-1.5 rounded-full" style={{ background: '#4caf50' }}></span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3a5a3a' }}></span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#3a5a3a' }}></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
