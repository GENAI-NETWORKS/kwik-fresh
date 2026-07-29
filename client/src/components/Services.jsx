import { motion } from 'framer-motion';
import { Apple, Carrot, ShoppingBasket, Beef, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'fruits',
    label: 'Fruits',
    description: 'Seasonal fruits, sourced daily',
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&auto=format&fit=crop&q=80',
    color: 'from-orange-500/80 to-orange-600/90',
  },
  {
    id: 'vegetables',
    label: 'Vegetables',
    description: 'Farm-fresh, crisp vegetables',
    icon: Carrot,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80',
    color: 'from-green-500/80 to-green-700/90',
  },
  {
    id: 'grocery',
    label: 'Grocery',
    description: 'All your pantry essentials',
    icon: ShoppingBasket,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    color: 'from-amber-600/80 to-yellow-700/90',
  },
  {
    id: 'meat',
    label: 'Meat',
    description: 'Fresh cuts, hygienically packed',
    icon: Beef,
    image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=800&auto=format&fit=crop&q=80',
    color: 'from-red-600/80 to-red-800/90',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="products"
      className="section-padding bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">What We Deliver</span>
          <h2 id="services-heading" className="section-title">
            Fresh From Farm,{' '}
            <span className="text-gradient-green">Right to Your Door</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Choose from our wide selection of farm-fresh produce and grocery essentials - 
            all delivered the same day you order.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {categories.map(({ id, label, description, icon: Icon, image, color }) => (
            <motion.button
              key={id}
              variants={item}
              onClick={scrollToContact}
              className="group relative h-80 rounded-3xl overflow-hidden img-zoom text-left shadow-card hover:shadow-card-hover focus:outline-none focus:ring-4 focus:ring-green-400/50 transition-shadow duration-300"
              aria-label={`${label} – ${description}`}
            >
              {/* Background Image */}
              <img
                src={image}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Default Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

              {/* Hover Green Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Default Label (bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white font-display font-bold text-2xl">{label}</h3>
                <p className="text-white/80 text-sm">{description}</p>
              </div>

              {/* Hover Content (center) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 p-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-display font-bold text-2xl mb-1">{label}</h3>
                <p className="text-white/90 text-sm text-center mb-4">{description}</p>
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
