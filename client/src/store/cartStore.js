import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  // Add item or increment quantity
  addItem: (product) => {
    const existing = get().items.find((i) => i.id === product.id);
    if (existing) {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        ),
      }));
    } else {
      set((state) => ({ items: [...state.items, { ...product, qty: 1 }] }));
    }
  },

  // Remove one unit or remove item entirely
  removeItem: (productId) => {
    set((state) => ({
      items: state.items
        .map((i) => (i.id === productId ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0),
    }));
  },

  // Delete item completely from cart
  deleteItem: (productId) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== productId) }));
  },

  // Clear cart
  clearCart: () => set({ items: [] }),

  // Toggle cart drawer
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  // Derived values
  get totalItems() {
    return get().items.reduce((sum, i) => sum + i.qty, 0);
  },
  get totalPrice() {
    return get().items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },
}));

export default useCartStore;
