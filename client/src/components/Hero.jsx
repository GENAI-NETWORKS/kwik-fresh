import { motion } from 'framer-motion';
import { Zap, Leaf, Truck, Phone, ArrowRight, MessageCircle, CheckSquare } from 'lucide-react';
import heroVideo from '../Public/header_video.mp4';

const trustBadges = [
  { icon: Zap,   label: 'Fast Delivery',   desc: 'Same Day' },
  { icon: Leaf,  label: '100% Fresh',       desc: 'Farm to Door' },
  { icon: Truck, label: 'Home Delivery',    desc: 'Doorstep Service' },
];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark green gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-green-600/80 to-green-400/40" />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='37' cy='37' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 py-16 -mt-4 lg:-mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-mango fill-mango" />
              Same-Day Home Delivery in Coimbatore
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[1.1] mb-6"
            >
              Farm-Fresh{' '}
              <span className="relative">
                <span className="text-orange-400">Groceries</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9 C50 3, 100 11, 150 5 C175 2, 190 8, 198 6"
                    stroke="#FF9E2C"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              at Kwik Speed
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-green-100 mb-8 max-w-lg leading-relaxed"
            >
              Fruits · Vegetables · Grocery · Meat - handpicked fresh
              and delivered straight to your doorstep. No waiting, no hassle.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                id="hero-order-now"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-2xl text-base transition-all duration-200 shadow-mango hover:-translate-y-1 hover:shadow-xl"
              >
                Order Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+919442266929"
                id="hero-call-delivery"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border-2 border-white/50 text-white font-bold px-5 py-2.5 rounded-2xl text-base transition-all duration-200 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call for Delivery
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-2xl"
                >
                  <Icon className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-white font-semibold text-sm leading-none">{label}</p>
                    <p className="text-green-200 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex justify-end"
          >
            <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 max-w-sm w-full shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-400 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call to Order Now</p>
                  <p className="text-white font-bold text-lg">94422 66929</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  'Fruits & Vegetables',
                  'Daily Grocery Essentials',
                  'Fresh Meat & Seafood',
                  'Same-Day Home Delivery',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-green-300 flex-shrink-0" />
                    <p className="text-white text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919442266929?text=Hi%20Kwik%20%26%20Fresh%2C%20I%27d%20like%20to%20place%20an%20order!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-2xl transition-colors w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', fill: '#ffffff' }}>
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
