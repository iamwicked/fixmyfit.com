import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function AuthForm({ isLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(formData.email, formData.password);
    } else {
      await register(formData);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-[#4A5A6A] mb-6">
        {isLogin ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-[#4A5A6A] text-white p-2 rounded hover:bg-[#BFA181] transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <div className="mt-4 text-center">
        {isLogin ? (
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#4A5A6A] hover:text-[#BFA181]">
              Register
            </Link>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-[#4A5A6A] hover:text-[#BFA181]">
              Login
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}
