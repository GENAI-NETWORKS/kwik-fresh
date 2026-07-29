import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';
import logo from '../Public/logo.png';

const businessInfo = [
  { icon: Phone, label: 'Phone 1', value: '94422 66929', href: 'tel:+919442266929' },
  { icon: Phone, label: 'Phone 2', value: '98941 56239', href: 'tel:+919894156239' },
  { icon: Mail, label: 'Email', value: 'yuva69cbe@gmail.com', href: 'mailto:yuva69cbe@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Coimbatore, Tamil Nadu', href: null },
];

const initialForm = { name: '', phone: '', address: '', items: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMsg, setServerMsg] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      errs.name = 'Name must be at least 2 characters.';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, '')))
      errs.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.address.trim() || form.address.trim().length < 10)
      errs.address = 'Please enter a complete delivery address (min 10 characters).';
    if (!form.items.trim() || form.items.trim().length < 3)
      errs.items = 'Please describe the items you need.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const whatsappNumber = '919442266929';
    const message = `Hello Kwik & Fresh! I would like to place an order.

*Name:* ${form.name.trim()}
*Phone:* ${form.phone.trim()}
*Delivery Address:*
${form.address.trim()}

*Items Needed:*
${form.items.trim()}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setServerMsg('Order prepared! Please send the message in WhatsApp to confirm.');
    setStatus('success');
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="section-padding bg-green-50"
      aria-labelledby="contact-heading"
    >
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Get in Touch</span>
          <h2 id="contact-heading" className="section-title">
            Ready to Order?{' '}
            <span className="text-gradient-green">Let's Talk</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Fill out the form and we'll call you back to confirm your order, or reach us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* ─── Contact Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="card p-8"
          >
            <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">Place Your Order</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
                <h4 className="font-display font-bold text-xl text-green-700">Order Received!</h4>
                <p className="text-gray-600 max-w-sm">{serverMsg}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-primary mt-2"
                >
                  Place Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="form-label">Your Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Lakshmi"
                    className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className="form-label">Mobile Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    className={`form-input ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="contact-address" className="form-label">Delivery Address *</label>
                  <textarea
                    id="contact-address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    rows={3}
                    placeholder="House no., Street, Area, Coimbatore..."
                    className={`form-input resize-none ${errors.address ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.address ? 'address-error' : undefined}
                  />
                  {errors.address && (
                    <p id="address-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.address}
                    </p>
                  )}
                </div>

                {/* Items */}
                <div>
                  <label htmlFor="contact-items" className="form-label">Items Needed *</label>
                  <textarea
                    id="contact-items"
                    name="items"
                    value={form.items}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g. 2 kg tomatoes, 1 dozen bananas, 1 kg chicken, 5 kg rice..."
                    className={`form-input resize-none ${errors.items ? 'border-red-400 focus:ring-red-400' : ''}`}
                    aria-required="true"
                    aria-describedby={errors.items ? 'items-error' : undefined}
                  />
                  {errors.items && (
                    <p id="items-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.items}
                    </p>
                  )}
                </div>

                {/* Server error */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-700 text-sm">
                    {serverMsg}
                  </div>
                )}

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Order Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ─── Business Info ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Info card */}
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-card p-1.5 border border-green-50">
                  <img src={logo} alt="Kwik & Fresh logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900">Kwik &amp; Fresh</h3>
                  <p className="text-green-600 font-medium text-sm">Owner: Sivakumar</p>
                </div>
              </div>

              <div className="space-y-4">
                {businessInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-green-600" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-gray-700 hover:text-green-600 transition-colors text-sm font-medium"
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-gray-700 text-sm font-medium">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-3">Available 7 days a week · 7 AM – 8 PM</p>
                <div className="flex gap-3">
                  <a
                    href="tel:+919442266929"
                    className="btn-primary text-sm py-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919442266929?text=Hi%20Kwik%20%26%20Fresh%2C%20I%27d%20like%20to%20place%20an%20order!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card overflow-hidden">
              <div className="w-full h-56 bg-green-100 flex items-center justify-center relative">
                <iframe
                  title="Kwik & Fresh Location - Coimbatore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125319.0765!2d76.8957994!3d11.0016823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="px-5 py-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">Coimbatore, Tamil Nadu - we deliver across the city</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
