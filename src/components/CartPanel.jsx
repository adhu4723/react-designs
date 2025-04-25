import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

function CartPanel({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCart();
  const location = useLocation();

  // Close panel on route change
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" onClick={onClose}></div>

      <div
        className={`absolute right-0 overflow-scroll top-0 h-full w-full max-w-sm bg-white shadow-lg p-5 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button className="text-gray-500 hover:text-red-500" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <hr className="mb-4" />

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4">
              <img src={item.image_path} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
              <div className="flex-1">
                <Link to={`/product/${item.sku}`} className="font-semibold">{item.name}</Link>
                <p className="text-sm">
                  {item.quantity} ×{' '}
                  <span className="text-amber-700 font-semibold">Rs. {item.price.toLocaleString()}</span>
                </p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500">
                <X size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10 font-semibold text-lg">
          <span>Subtotal</span>
          <span className="text-amber-700">Rs. {subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between gap-2 mt-6">
          <button className="flex-1 border border-black rounded-full py-2 hover:bg-black hover:text-white transition">
            Cart
          </button>
          <Link
            to="/checkout"
            className="flex-1 text-center border border-black rounded-full py-2 hover:bg-black hover:text-white transition"
          >
            Checkout
          </Link>
          <button className="flex-1 border border-black rounded-full py-2 hover:bg-black hover:text-white transition">
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPanel;
