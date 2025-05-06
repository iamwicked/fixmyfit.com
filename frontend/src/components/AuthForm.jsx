import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function AuthForm({ isLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");
  const { login, register, authLoading } = useAuth();
  const navigate = useNavigate(); // Add this

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      let result;
      if (isLogin) {
        result = await login(formData.email, formData.password);
      } else {
        result = await register(formData);
        console.log("Registration Result:", result); // Add this line
      }
      
      if (result.success) {
        navigate("/checkout");
      } else {
        setError(result.error || "Registration failed"); // Handle undefined error
      }
    } catch (err) {
      console.error("Registration Error:", err); // Log the actual error
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg border border-[#E8D4B8]">
      <h2 className="text-3xl font-extrabold text-[#4A5A6A] mb-6 text-center">
        {isLogin ? "Login" : "Register"}
      </h2>
      {error && (
        <div className="mb-4 text-red-600 bg-red-100 border border-red-200 rounded p-2 text-center">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        {!isLogin && (
          <div>
            <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        )}
        <div>
          <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#4A5A6A] mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            minLength={6}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#4A5A6A] text-white py-3 rounded-lg font-bold text-lg shadow hover:bg-[#BFA181] hover:text-[#4A5A6A] transition"
          disabled={authLoading}
        >
          {authLoading
            ? (isLogin ? "Logging in..." : "Registering...")
            : (isLogin ? "Login" : "Register Now")}
        </button>
      </form>
      <div className="mt-6 text-center text-[#4A5A6A]">
        {isLogin ? (
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#BFA181] hover:underline">
              Register
            </Link>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-[#BFA181] hover:underline">
              Login
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
