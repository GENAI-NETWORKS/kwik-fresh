import { useState, useEffect } from 'react';
import {
  Phone, Menu, X, MessageCircle
} from 'lucide-react';

import logo from '../Public/logo.png';

const navLinks = [
  { href: '#home',       label: 'Home' },
  { href: '#products',   label: 'Products' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about',      label: 'About' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center group"
              aria-label="Kwik & Fresh Home"
            >
              <img
                src={logo}
                alt="Kwik & Fresh logo"
                className="h-12 lg:h-14 w-auto object-contain rounded-xl group-hover:opacity-90 transition-opacity"
              />
            </button>

            {/* Desktop Right Group (Nav + Actions) */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              {/* Desktop Nav */}
              <nav className="flex items-center gap-8" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="nav-link pb-0.5"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* Desktop Actions */}
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919442266929?text=Hi%20Kwik%20%26%20Fresh%2C%20I%27d%20like%20to%20place%20an%20order!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-green-100 hover:bg-green-200 text-green-700 font-semibold px-3 py-2 rounded-xl text-sm transition-colors"
                  aria-label="WhatsApp Order"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>

                {/* Call Now */}
                <a
                  href="tel:+919442266929"
                  className="relative btn-secondary text-sm py-2 overflow-visible"
                  aria-label="Call Now"
                >
                  <span className="pulse-ring absolute inset-0 rounded-2xl" />
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Call Now</span>
                </a>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+919442266929"
                className="relative p-2 bg-orange-400 text-white rounded-xl"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="mobile-menu-button"
                onClick={() => setMobileOpen(true)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-xl"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        role="dialog"
        aria-label="Navigation Menu"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-1/2 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Kwik & Fresh logo"
              className="h-10 w-auto object-contain rounded-xl"
            />
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-xl"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col px-4 pt-4 gap-1 flex-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors text-base"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Drawer Footer CTAs */}
        <div className="px-4 pb-8 flex flex-col gap-3">
          <a
            href="https://wa.me/919442266929?text=Hi%20Kwik%20%26%20Fresh%2C%20I%27d%20like%20to%20place%20an%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary justify-center text-xs px-2 gap-1.5 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Order
          </a>
          <a
            href="tel:+919442266929"
            className="btn-secondary justify-center text-xs px-2 gap-1.5 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            Call 94422 66929
          </a>
        </div>
      </div>
    </>
  );
}
