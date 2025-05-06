import { FiShoppingCart } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import czFlag from "../assets/cz-flag.png";
import enFlag from "../assets/en-flag.png";
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { user } = useAuth();

  return (
    <nav className="bg-[#4B3621] px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <button 
            className="bg-beige px-4 py-2 rounded text-white hover:bg-[#987554] transition"
            onClick={() => navigate('/')}
          >Home</button>
          <button
            className="bg-beige px-4 py-2 rounded text-white hover:bg-[#987554] transition"
            onClick={() => navigate('/about')}
          >About Us</button>
          <button
            className="bg-beige px-4 py-2 rounded text-white hover:bg-[#987554] transition"
            onClick={() => navigate('/services')}
          >Services</button>
          <button
            className="bg-beige px-4 py-2 rounded text-white hover:bg-[#987554] transition"
            onClick={() => navigate('/store')}
          >Store</button>
        </div>

        {/* Center Section */}
        <div className="flex-1 flex justify-center">
          <span className="text-3xl font-medium text-white">FixMyFit</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-1">
          {/* Language Selector */}
          <div className="flex space-x-1 bg-beige rounded px-3 py-1">
            <button className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-[#987554] transition cursor-pointer">
              <span className="text-white font-semibold text-base">CZ</span>
              <img src={czFlag} alt="Czech Flag" className="w-6 h-4 object-cover rounded-sm" />
            </button>
            <button className="flex items-center space-x-2 px-3 py-1 rounded hover:bg-[#987554] transition cursor-pointer">
              <span className="text-white font-semibold text-base">EN</span>
              <img src={enFlag} alt="English Flag" className="w-6 h-4 object-cover rounded-sm" />
            </button>
          </div>

          {/* Authentication Section */}
          {user ? (
            <button
              className="bg-beige p-2 rounded flex items-center justify-center hover:bg-[#987554] transition"
              onClick={() => navigate('/profile')}
              title="Profile"
            >
              <FaUserCircle className="text-2xl text-white" />
            </button>
          ) : (
            <button
              className="bg-beige px-4 py-2 rounded text-white hover:bg-[#987554] transition"
              onClick={() => navigate('/login')}
            >
              Login/Register
            </button>
          )}

          {/* Cart */}
          <Link to="/cart" className="bg-beige p-3 rounded hover:bg-[#987554] transition relative">
            <FiShoppingCart className="text-xl text-white" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
