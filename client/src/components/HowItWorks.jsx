import { motion } from 'framer-motion';
import { Phone, MessageCircle, PackageSearch, Zap, Home } from 'lucide-react';
import imgFastDispatch from '../Public/step_fast_dispatch.png';
import imgDoorDelivery from '../Public/step_door_delivery.png';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Call or WhatsApp Your Order',
    desc: 'Simply call us at 94422 66929 or send a WhatsApp message with your grocery list. No app download needed.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Person making a phone call to order groceries',
    color: 'bg-orange-400',
  },
  {
    number: '02',
    icon: PackageSearch,
    title: 'We Pick the Freshest Stock',
    desc: 'Our team personally selects the freshest produce from our store, quality-checking every item before packing.',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Selecting fresh produce at market',
    color: 'bg-green-500',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Fast Dispatch',
    desc: 'Your order is carefully packed and dispatched within the hour. We notify you when it\'s on the way.',
    image: imgFastDispatch,
    imageAlt: 'Delivery scooter with grocery bag being dispatched',
    color: 'bg-blue-500',
  },
  {
    number: '04',
    icon: Home,
    title: 'Delivered to Your Door',
    desc: 'Sit back and relax. Your fresh groceries arrive at your doorstep - same day, every time.',
    image: imgDoorDelivery,
    imageAlt: 'Delivery person handing grocery bags to customer at the door',
    color: 'bg-forest',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-white"
      aria-labelledby="process-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Simple &amp; Fast</span>
          <h2 id="process-heading" className="section-title">
            How Your Order{' '}
            <span className="text-gradient-orange">Gets to You</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Four simple steps from your list to your doorstep - no complicated process.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-green-300 to-green-600"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, icon: Icon, title, desc, image, imageAlt, color }, idx) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="relative mb-6 z-10">
                  <div
                    className={`${color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center"
                    aria-label={`Step ${number}`}
                  >
                    {parseInt(number, 10)}
                  </span>
                </div>

                {/* Photo */}
                <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 shadow-card group-hover:shadow-card-hover transition-shadow img-zoom">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2 leading-snug">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 mb-5 text-lg">Ready to try it? It takes less than 2 minutes to order.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919442266929"
              className="btn-primary text-base"
            >
              <Phone className="w-5 h-5" />
              Call 94422 66929
            </a>
            <a
              href="https://wa.me/919442266929?text=Hi%20Kwik%20%26%20Fresh%2C%20I%27d%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
