// src/pages/CheckoutPage.jsx
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    payment: 'cod'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => navigate('/'), 3000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF3E0] py-20 px-4">
        <h2 className="text-2xl font-bold text-[#4A5A6A] mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate('/services')}
          className="mt-4 px-8 py-3 bg-[#4A5A6A] text-white text-lg rounded-full font-semibold shadow hover:bg-[#BFA181] transition"
        >
          Browse Services
        </button>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#FAF3E0] py-10 px-2 sm:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-12">
        {/* Order Summary */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#4A5A6A] mb-4">Order Summary</h2>
          <ul className="divide-y divide-[#E8D4B8] mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between py-3">
                <div>
                  <div className="font-semibold text-[#4A5A6A]">{item.service}</div>
                  <div className="text-sm text-[#6B8E7F]">{item.type}</div>
                  <div className="text-xs text-[#BFA181]">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold text-[#4A5A6A]">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t border-[#E8D4B8] pt-4 font-bold text-lg text-[#4A5A6A]">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
        {/* Checkout Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#4A5A6A] mb-4">Checkout</h2>
          {orderPlaced ? (
            <div className="flex flex-col items-center justify-center h-full">
              <svg className="mb-4" width={60} height={60} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#22c55e"/>
                <path d="M8 12.5l3 3 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-xl font-semibold text-[#4A5A6A] mb-2">Order Placed!</div>
              <div className="text-[#6B8E7F] text-center">Thank you for your order. You’ll be redirected to the homepage shortly.</div>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">Delivery Address</label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  value={form.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">Payment Method</label>
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="card" disabled>Credit/Debit Card (Coming Soon)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4A5A6A] text-white py-3 rounded-lg font-bold text-lg shadow hover:bg-[#BFA181] hover:text-[#4A5A6A] transition"
              >
                Place Order
              </button>
              <div className="text-xs text-[#BFA181] text-center mt-2">
                Secure checkout &mdash; your data is protected.
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
