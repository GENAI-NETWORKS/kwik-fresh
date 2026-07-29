import { useState } from 'react';
import { motion } from 'framer-motion';
import imgDelivery from '../Public/gallery_delivery.png';
import imgMango from '../Public/fruit_01_mango_1785305824396.png';
import imgBanana from '../Public/fruit_02_banana_1785305864958.png';
import imgChicken from '../Public/meat_01_chicken_1785305846352.png';

const galleryImages = [
  // ── Fruits (10) ──────────────────────────────
  {
    id: 1,
    src: imgMango,
    alt: 'Fresh Alphonso mangoes',
    category: 'Fruits',
  },
  {
    id: 2,
    src: imgBanana,
    alt: 'Fresh yellow bananas',
    category: 'Fruits',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=600&auto=format&fit=crop&q=80',
    alt: 'Assorted tropical fruits',
    category: 'Fruits',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh red apples',
    category: 'Fruits',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh green grapes',
    category: 'Fruits',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh watermelon',
    category: 'Fruits',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh oranges',
    category: 'Fruits',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh pineapple',
    category: 'Fruits',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh pomegranate',
    category: 'Fruits',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh papaya',
    category: 'Fruits',
  },
  // ── Vegetables (10) ──────────────────────────
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh mixed vegetables',
    category: 'Vegetables',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh tomatoes',
    category: 'Vegetables',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh carrots',
    category: 'Vegetables',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh spinach leaves',
    category: 'Vegetables',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh cauliflower',
    category: 'Vegetables',
  },
  {
    id: 16,
    src: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh onions',
    category: 'Vegetables',
  },
  {
    id: 17,
    src: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh potatoes',
    category: 'Vegetables',
  },
  {
    id: 18,
    src: 'https://images.unsplash.com/photo-1506807803488-8eafc15316c7?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh capsicum peppers',
    category: 'Vegetables',
  },
  {
    id: 19,
    src: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh green beans',
    category: 'Vegetables',
  },
  {
    id: 20,
    src: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh brinjal eggplant',
    category: 'Vegetables',
  },
  // ── Meat (10) ────────────────────────────────
  {
    id: 21,
    src: imgChicken,
    alt: 'Fresh whole chicken',
    category: 'Meat',
  },
  {
    id: 22,
    src: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh meat cuts',
    category: 'Meat',
  },
  {
    id: 23,
    src: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh prawns on ice',
    category: 'Meat',
  },
  {
    id: 24,
    src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh fish',
    category: 'Meat',
  },
  {
    id: 25,
    src: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh eggs',
    category: 'Meat',
  },
  {
    id: 26,
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh red meat',
    category: 'Meat',
  },
  {
    id: 27,
    src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&auto=format&fit=crop&q=80',
    alt: 'Chicken pieces',
    category: 'Meat',
  },
  {
    id: 28,
    src: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh fish fillet',
    category: 'Meat',
  },
  {
    id: 29,
    src: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600&auto=format&fit=crop&q=80',
    alt: 'Mutton curry cut',
    category: 'Meat',
  },
  {
    id: 30,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh seafood platter',
    category: 'Meat',
  },
  // ── Grocery (10) ─────────────────────────────
  {
    id: 31,
    src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    alt: 'Grocery store essentials',
    category: 'Grocery',
  },
  {
    id: 32,
    src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    alt: 'Basmati rice',
    category: 'Grocery',
  },
  {
    id: 33,
    src: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
    alt: 'Cooking oil bottle',
    category: 'Grocery',
  },
  {
    id: 34,
    src: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80',
    alt: 'Fresh milk packet',
    category: 'Grocery',
  },
  {
    id: 35,
    src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80',
    alt: 'Indian spices and masala',
    category: 'Grocery',
  },
  {
    id: 36,
    src: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=600&auto=format&fit=crop&q=80',
    alt: 'Lentils and dal',
    category: 'Grocery',
  },
  {
    id: 37,
    src: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80',
    alt: 'White sugar',
    category: 'Grocery',
  },
  {
    id: 38,
    src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&auto=format&fit=crop&q=80',
    alt: 'Wheat flour atta',
    category: 'Grocery',
  },
  {
    id: 39,
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop&q=80',
    alt: 'Indian tea leaves',
    category: 'Grocery',
  },
  {
    id: 40,
    src: imgDelivery,
    alt: 'Grocery delivery bag at doorstep',
    category: 'Grocery',
  },
];

const filters = ['All', 'Fruits', 'Vegetables', 'Meat', 'Grocery'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Triplicate for seamless infinite loop
  const track = [...filtered, ...filtered, ...filtered];

  // Speed: ~3s per image
  const duration = Math.max(18, filtered.length * 3);

  return (
    <section
      id="gallery"
      className="section-padding bg-green-50/60"
      aria-labelledby="gallery-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-label">Fresh Every Day</span>
          <h2 id="gallery-heading" className="section-title">
            A Glimpse of Our{' '}
            <span className="text-gradient-green">Fresh Stock</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real photos from our store and deliveries - no stock illustrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="tablist" aria-label="Gallery filters">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-green-600 text-white shadow-card'
                  : 'bg-white text-gray-600 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-scrolling Marquee — full width, no container-max */}
      <div className="overflow-hidden w-full" aria-label="Gallery marquee">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="gallery-track flex gap-4 w-max"
          style={{ animationDuration: `${duration}s` }}
        >
          {track.map((img, i) => (
            <div
              key={`${img.id}-${i}`}
              className="group relative flex-shrink-0 w-64 h-52 rounded-2xl overflow-hidden shadow-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-semibold bg-green-600/80 px-2.5 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
