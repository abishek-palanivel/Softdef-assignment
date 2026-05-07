import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'Sheily Gusse',
    rating: 5,
    text: 'The plants arrived in perfect condition. Absolutely love how they have transformed my living room. FloraVision never disappoints!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    id: 2,
    name: 'Lola Rolfson',
    rating: 5,
    text: 'Such a great selection of indoor plants. The packaging was eco-friendly and everything arrived healthy. Will definitely order again.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80',
  },
  {
    id: 3,
    name: 'Carl Haute',
    rating: 4,
    text: 'Really impressed with the quality. My aglaonema is thriving and gets compliments from everyone who visits. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
]

function ReviewCard({ review }) {
  return (
    <div
      className="p-6 rounded-2xl flex flex-col gap-4"
      style={{
        background: '#152515',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            width={48}
            height={48}
            className="object-cover w-auto h-auto"
          />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} style={{ color: s <= review.rating ? '#f59e0b' : '#3a5a3a', fontSize: '12px' }}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#7a9a7a' }}>
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  )
}

export default function CustomerReviews() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <span
            className="text-white text-xl md:text-2xl font-semibold px-6 py-2 rounded-sm"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
          >
            Customer Review
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
