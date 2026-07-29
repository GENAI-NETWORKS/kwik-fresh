import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Carrot, ShoppingBasket, Beef, Plus, Check, ShoppingCart } from 'lucide-react';
import axios from 'axios';
import useCartStore from '../store/cartStore';

const categoryIcons = {
  fruits: Apple,
  vegetables: Carrot,
  grocery: ShoppingBasket,
  meat: Beef,
};

const categoryColors = {
  fruits: 'bg-orange-100 text-orange-700 border-orange-200',
  vegetables: 'bg-green-100 text-green-700 border-green-200',
  grocery: 'bg-amber-100 text-amber-700 border-amber-200',
  meat: 'bg-red-100 text-red-700 border-red-200',
};

function ProductCard({ product, categoryId }) {
  const { addItem, items, openCart } = useCartStore();
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === product.id);

  const handleAdd = () => {
    addItem({ ...product, category: categoryId });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden img-zoom">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
        {inCart && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <ShoppingCart className="w-3 h-3" />
            {inCart.qty}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display font-bold text-gray-900 mb-0.5">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold text-lg">
            ₹{product.price}
            <span className="text-gray-400 font-normal text-sm">/{product.unit}</span>
          </p>
          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
              added
                ? 'bg-green-100 text-green-600'
                : product.inStock
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-gray-100 text-gray-300 cursor-not-allowed'
            }`}
            aria-label={added ? 'Added to cart' : `Add ${product.name} to cart`}
          >
            {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const { openCart, items } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    axios
      .get('/api/products')
      .then((res) => {
        setData(res.data.categories || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load products. Please try again or call us directly.');
        setLoading(false);
      });
  }, []);

  const filteredCategories =
    activeCategory === 'all'
      ? data
      : data.filter((c) => c.id === activeCategory);

  return (
    <main className="pt-20 min-h-screen bg-white" id="main-content">
      {/* Page Hero */}
      <section className="bg-gradient-green text-white py-14 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-orange-300 text-sm font-bold uppercase tracking-widest mb-3">
            Our Products
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Fresh Stock, Delivered Daily
          </h1>
          <p className="text-green-100 text-lg max-w-xl mx-auto">
            Browse our full selection of fruits, vegetables, grocery essentials, and fresh meat.
          </p>
        </motion.div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter + Cart Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
            <button
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-green-600 text-white shadow-card'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700'
              }`}
            >
              All Categories
            </button>
            {data.map((cat) => {
              const Icon = categoryIcons[cat.id] || ShoppingBasket;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-green-600 text-white shadow-card'
                      : `${categoryColors[cat.id]} border hover:border-transparent`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {totalItems > 0 && (
            <button
              onClick={openCart}
              className="btn-primary"
              aria-label={`View cart (${totalItems} items)`}
            >
              <ShoppingCart className="w-5 h-5" />
              View Cart ({totalItems})
            </button>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-24">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin" aria-label="Loading products" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <a href="tel:+919442266929" className="btn-primary">
              Call 94422 66929
            </a>
          </div>
        )}

        {/* Products by Category */}
        {!loading && !error && (
          <div className="space-y-14">
            {filteredCategories.map((category) => {
              const Icon = categoryIcons[category.id] || ShoppingBasket;
              return (
                <section key={category.id} aria-labelledby={`cat-${category.id}`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h2 id={`cat-${category.id}`} className="font-display font-bold text-2xl text-gray-900">
                        {category.name}
                      </h2>
                      <p className="text-gray-500 text-sm">{category.description}</p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
                  >
                    <AnimatePresence>
                      {category.products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          categoryId={category.id}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
