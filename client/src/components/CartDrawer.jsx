import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBasket, Plus, Minus, Trash2, Phone, MessageCircle } from 'lucide-react';
import useCartStore from '../store/cartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, addItem, removeItem, deleteItem, clearCart } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);

  // Build WhatsApp message from cart
  const buildWhatsAppMsg = () => {
    const list = items.map((i) => `• ${i.qty}x ${i.name} (₹${i.price}/${i.unit})`).join('\n');
    return encodeURIComponent(
      `Hi Kwik & Fresh! I'd like to order:\n\n${list}\n\nTotal estimate: ₹${totalPrice}\n\nPlease confirm and advise delivery time.`
    );
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="drawer-overlay"
            onClick={closeCart}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            role="dialog"
            aria-label="Shopping Cart"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <ShoppingBasket className="w-5 h-5 text-green-600" />
                <h2 className="font-display font-bold text-lg text-gray-900">
                  Your Cart
                  {totalItems > 0 && (
                    <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {totalItems} item{totalItems !== 1 ? 's' : ''}
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-gray-400 py-16">
                  <ShoppingBasket className="w-16 h-16 text-gray-200" />
                  <div>
                    <p className="font-semibold text-gray-500">Your cart is empty</p>
                    <p className="text-sm mt-1">Browse our products and add items to get started.</p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="btn-primary mt-2"
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-4 bg-gray-50 rounded-2xl p-3"
                    >
                      {/* Product image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />

                      {/* Name & price */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">{item.name}</p>
                        <p className="text-green-600 text-sm font-bold">₹{item.price}/{item.unit}</p>
                        <p className="text-gray-400 text-xs">Subtotal: ₹{item.price * item.qty}</p>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-50 transition-colors"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5 text-gray-600" />
                        </button>
                        <span className="w-7 text-center font-bold text-gray-800 text-sm">{item.qty}</span>
                        <button
                          onClick={() => addItem(item)}
                          className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5 text-white" />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-1.5 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer with totals and CTAs */}
            {items.length > 0 && (
              <div className="border-t border-gray-100 px-6 py-5 space-y-4">
                {/* Totals */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Estimated Total</span>
                  <span className="font-display font-black text-2xl text-green-600">₹{totalPrice}</span>
                </div>
                <p className="text-xs text-gray-400">
                  Final price confirmed on call. Delivery charges may apply.
                </p>

                {/* CTAs */}
                <a
                  href={`https://wa.me/919442266929?text=${buildWhatsAppMsg()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-base py-3.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </a>
                <a
                  href="tel:+919442266929"
                  className="btn-secondary w-full justify-center text-base py-3.5"
                >
                  <Phone className="w-5 h-5" />
                  Call to Confirm Order
                </a>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm text-gray-400 hover:text-red-500 transition-colors py-1"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
