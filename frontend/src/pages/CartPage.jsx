import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF3E0] flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold text-[#4A5A6A] mb-4">Your cart is empty</h2>
        <Link 
          to="/services" 
          className="bg-[#4A5A6A] text-white px-6 py-3 rounded hover:bg-[#BFA181] transition"
        >
          Browse Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF3E0] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#4A5A6A] mb-8">Your Cart</h1>
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="font-semibold text-[#4A5A6A]">{item.service}</h3>
                <p className="text-[#6B8E7F]">{item.type}</p>
              </div>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    aria-label="Decrease quantity"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <span className="text-[#4A5A6A] font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Remove item"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#4A5A6A]">Total:</h2>
            <span className="text-2xl font-bold text-[#4A5A6A]">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="flex gap-4 justify-end">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-6 py-3 rounded hover:bg-gray-600 transition"
            >
              Clear Cart
            </button>
            <button 
              onClick={() => navigate('/checkout')}
              className="bg-[#4A5A6A] text-white px-6 py-3 rounded hover:bg-[#BFA181] transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
