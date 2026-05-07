import Image from 'next/image'

const plants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    desc: 'A beautiful foliage plant, perfect for low-light indoor spaces.',
    price: 'Rs. 300/-',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&q=80',
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    desc: 'Elegant and sturdy, this plant thrives in moderate sunlight.',
    price: 'Rs. 380/-',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80',
  },
  {
    id: 3,
    name: 'Cactus',
    desc: 'Minimal care, maximum impact. Great for sunny windowsills.',
    price: 'Rs. 259/-',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&q=80',
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    desc: 'Known for its iconic split leaves and tropical aesthetic.',
    price: 'Rs. 400/-',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    desc: 'Hardy, drought-tolerant, and ideal for beginners.',
    price: 'Rs. 450/-',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400&q=80',
  },
  {
    id: 6,
    name: 'Agave plant',
    desc: 'Striking architectural plant that thrives with minimal water.',
    price: 'Rs. 359/-',
    rating: 4,
    img: 'https://images.unsplash.com/photo-1510505751526-76254482fd38?w=400&q=80',
  },
]



function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={star <= count ? '#f59e0b' : 'none'}
          stroke={star <= count ? '#f59e0b' : '#4a6a4a'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function PlantCard({ plant }) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col gap-3 group transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: '#152515',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="relative h-44 rounded-xl overflow-hidden">
        <Image
          src={plant.img}
          alt={plant.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm mb-1">{plant.name}</h3>
        <p className="text-xs leading-snug mb-2" style={{ color: '#7a9a7a' }}>
          {plant.desc}
        </p>
        <StarRating count={plant.rating} />
      </div>
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="text-white font-semibold text-sm">{plant.price}</span>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{ background: '#1e3a1e', border: '1px solid rgba(255,255,255,0.15)' }}
          aria-label={`Add ${plant.name} to cart`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function TopSelling() {
  return (
    <section id="top-selling" className="py-20 px-6 md:px-12" style={{ background: '#0d1f0d' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span
            className="text-white text-xl md:text-2xl font-semibold px-6 py-2 rounded-sm"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
          >
            Our Top Selling Plants
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  )
}
