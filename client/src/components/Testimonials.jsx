import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Lakshmi',
    location: 'RS Puram, Coimbatore',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    quote:
      'Kwik & Fresh has been a lifesaver! The vegetables are always super fresh and delivery is lightning fast. Ordered at 10 AM, received by 12:30 PM. Highly recommend!',
    tag: 'Vegetables & Fruits',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Gandhipuram, Coimbatore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    quote:
      "Best chicken I've gotten in Coimbatore - fresh, clean, and well-cut. The grocery items are fairly priced too. Sivakumar is very responsive on WhatsApp. 5 stars!",
    tag: 'Meat & Grocery',
  },
  {
    id: 3,
    name: 'Meenakshi S.',
    location: 'Saibaba Colony, Coimbatore',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
    rating: 5,
    quote:
      "I'm a working mom and this service saves me 2 hours every weekend. Fresh fruits for the kids, onions and tomatoes I always forget - all delivered on time. Love it!",
    tag: 'Regular Customer',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'star-filled fill-current' : 'star-empty'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Customer Love</span>
          <h2 id="testimonials-heading" className="section-title">
            What Our Customers{' '}
            <span className="text-gradient-green">Are Saying</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real people, real reviews. See why hundreds of families in Coimbatore trust Kwik &amp; Fresh.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="card p-7 flex flex-col gap-5 hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-green-100">
                <Quote className="w-10 h-10 fill-current" aria-hidden="true" />
              </div>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Tag */}
              <span className="text-xs font-bold uppercase tracking-wider text-orange-500 bg-orange-50 px-2.5 py-1 rounded-lg w-fit">
                {t.tag}
              </span>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed text-[0.95rem] italic flex-1">
                "{t.quote}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={`${t.name} profile photo`}
                  className="w-11 h-11 rounded-full object-cover border-2 border-green-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Happy Customers' },
            { value: '1,200+', label: 'Orders Delivered' },
            { value: '5.0 ★', label: 'Average Rating' },
            { value: 'Same Day', label: 'Delivery Time' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display font-black text-3xl text-gradient-green">{value}</p>
              <p className="text-gray-500 text-sm mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
