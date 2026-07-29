import { motion } from 'framer-motion';
import { Clock, PackageCheck, CheckCircle2, Truck, Phone } from 'lucide-react';
import imgDelivery from '../Public/tamil_delivery_boy_1785307893223.png';
import imgProduce from '../Public/tamil_vegetables_1785307918700.png';
import imgDoorstep from '../Public/tamil_doorstep_delivery_1785307943060.png';
import imgPhone from '../Public/tamil_phone_ordering_1785307964978.png';

const features = [
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    desc: 'Order before noon and get your fresh groceries delivered to your doorstep the same day. No more planning days ahead.',
    image: imgDelivery,
    imageAlt: 'Tamil delivery boy on scooter with grocery bag',
    tag: 'Fast & Reliable',
    type: 'wide',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Checked Produce',
    desc: 'Every fruit and vegetable is hand-picked and quality-checked by our team before it leaves the store. Only the freshest makes the cut.',
    image: imgProduce,
    imageAlt: 'Fresh Tamil Nadu vegetables at a local market',
    tag: '100% Fresh',
    type: 'tall',
  },
  {
    icon: Truck,
    title: 'Doorstep Service',
    desc: 'We bring your order right to your door. Perfect for busy families and professionals.',
    image: imgDoorstep,
    imageAlt: 'Tamil mother receiving grocery delivery at her doorstep',
    tag: 'Convenient',
    type: 'dark',
  },
  {
    icon: PackageCheck,
    title: 'Easy Phone Ordering',
    desc: 'No complex app required. Simply call or WhatsApp us with your list and we\'ll handle the rest.',
    image: imgPhone,
    imageAlt: 'Tamil man ordering groceries on the phone',
    tag: 'Zero Hassle',
    type: 'dark',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const itemAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="section-padding bg-green-50"
      aria-labelledby="why-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Why Kwik &amp; Fresh</span>
          <h2 id="why-heading" className="section-title">
            We Don't Just Deliver -{' '}
            <span className="text-gradient-green">We Deliver Fresh</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            As Coimbatore's trusted online supermarket, every delivery is designed with your freshness, convenience, and time in mind.
          </p>
        </div>

        {/* Bento Box Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map(({ icon: Icon, title, desc, image, imageAlt, tag, type }) => {
            if (type === 'wide') {
              return (
                <motion.div
                  key={title}
                  variants={itemAnim}
                  className="md:col-span-2 md:row-span-1 group card flex flex-col sm:flex-row overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                    <span className="w-max text-xs font-bold tracking-wider uppercase text-orange-500 bg-orange-50 px-3 py-1 rounded-lg mb-4">
                      {tag}
                    </span>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-gray-900 leading-tight">{title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{desc}</p>
                  </div>
                  <div className="w-full sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                    <img src={image} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                </motion.div>
              );
            }

            if (type === 'tall') {
              return (
                <motion.div
                  key={title}
                  variants={itemAnim}
                  className="md:col-span-1 md:row-span-2 group card flex flex-col overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-full h-56 relative overflow-hidden">
                    <img src={image} alt={imageAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="flex-1 p-6 lg:p-8 flex flex-col">
                    <span className="w-max text-xs font-bold tracking-wider uppercase text-green-700 bg-green-100 px-3 py-1 rounded-lg mb-4">
                      {tag}
                    </span>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-gray-900 leading-tight mb-3">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              );
            }

            // 'dark' type
            return (
              <motion.div
                key={title}
                variants={itemAnim}
                className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-card"
              >
                <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                
                <div className="relative h-full flex flex-col justify-end p-6 lg:p-8 z-10">
                  <span className="w-max text-xs font-bold tracking-wider uppercase text-green-300 border border-green-400/30 bg-green-950/40 backdrop-blur-md px-3 py-1 rounded-lg mb-3">
                    {tag}
                  </span>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-white drop-shadow-md" />
                    <h3 className="font-display font-bold text-xl text-white leading-tight">{title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 bg-gradient-green rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card"
        >
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Ready for Fresh Groceries?
            </h3>
            <p className="text-green-100 text-lg">Call Sivakumar directly - we're here 7 days a week.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+919442266929"
              className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5 shadow-mango whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              94422 66929
            </a>
            <a
              href="tel:+919894156239"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              98941 56239
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
