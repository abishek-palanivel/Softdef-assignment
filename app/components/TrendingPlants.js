import Image from 'next/image'

function SectionTitle({ text }) {
  return (
    <div className="flex items-center justify-center mb-10">
      <span
        className="text-white text-xl md:text-2xl font-semibold px-6 py-2 rounded-sm"
        style={{ border: '1px solid rgba(255,255,255,0.25)' }}
      >
        {text}
      </span>
    </div>
  )
}

export default function TrendingPlants() {
  return (
    <section id="trending" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle text="Our Trendy plants" />

      <div className="flex flex-col gap-6">
        {/* Card 1 - plant on left, text on right */}
        <div
          className="flex flex-col md:flex-row items-center rounded-2xl overflow-hidden"
          style={{ background: '#152515', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="w-full md:w-1/2 h-64 md:h-72 relative">
            <Image
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80"
              alt="Desk decoration plant"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent 60%, #152515)',
              }}
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-10">
            <h3 className="text-white text-xl font-semibold mb-3">
              For Your Desks Decorations
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#7a9a7a' }}>
              I recently added a beautiful desk decorator plant to my workspace, and it has made
              such a difference! The vibrant green leaves instantly brighten up my desk.
            </p>
            <p className="text-white font-semibold text-lg mb-5">Rs. 599/-</p>
            <div className="flex items-center gap-3">
              <button
                className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.25)' }}
              >
                Explore
              </button>
              <button
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                aria-label="Share"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - text on left, plant on right */}
        <div
          className="flex flex-col md:flex-row-reverse items-center rounded-2xl overflow-hidden"
          style={{ background: '#152515', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="w-full md:w-1/2 h-64 md:h-72 relative">
            <Image
              src="https://images.unsplash.com/photo-1510505751526-76254482fd38?w=600&q=80"
              alt="Haworthia desk plant"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to left, transparent 60%, #152515)',
              }}
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-10">
            <h3 className="text-white text-xl font-semibold mb-3">
              For Your Desks Decorations
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#7a9a7a' }}>
              The graceful green leaves add a touch of nature and serenity to my desk, making it
              more inviting and calming. A perfect low-maintenance companion.
            </p>
            <p className="text-white font-semibold text-lg mb-5">Rs. 390/-</p>
            <div className="flex items-center gap-3">
              <button
                className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.25)' }}
              >
                Explore
              </button>
              <button
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                aria-label="Share"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
