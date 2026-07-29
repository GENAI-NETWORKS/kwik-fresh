import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from '../Public/logo.png';

const quickLinks = ['Home', 'Products', 'How It Works', 'About', 'Contact'];
const services = ['Fresh Fruits', 'Vegetables', 'Grocery', 'Meat & Seafood', 'Home Delivery'];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const anchorMap = {
  'Home': 'home',
  'Products': 'products',
  'How It Works': 'how-it-works',
  'About': 'about',
  'Contact': 'contact',
};

export default function Footer() {
  return (
    <footer
      className="bg-gray-950 text-white pt-16 pb-8"
      aria-label="Site footer"
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4 inline-block bg-white rounded-2xl px-3 py-2">
              <img
                src={logo}
                alt="Kwik & Fresh logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted local supermarket online. Get farm-fresh vegetables, premium meat, and daily groceries with same-day home delivery across Coimbatore.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/919442266929"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(anchorMap[link])}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-gray-400 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { icon: Phone, value: '94422 66929', href: 'tel:+919442266929' },
                { icon: Phone, value: '98941 56239', href: 'tel:+919894156239' },
                { icon: Mail, value: 'yuva69cbe@gmail.com', href: 'mailto:yuva69cbe@gmail.com' },
                { icon: MapPin, value: 'Coimbatore, Tamil Nadu', href: null },
              ].map(({ icon: Icon, value, href }) => (
                <li key={value} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kwik &amp; Fresh. All rights reserved. Owned by Sivakumar.
          </p>
         
        </div>
      </div>
    </footer>
  );
}
