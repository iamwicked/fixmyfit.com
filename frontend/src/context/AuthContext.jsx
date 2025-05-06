import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setAuthLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUser(data.user);
        setAuthLoading(false);
        navigate("/checkout"); // redirect after login
        return { success: true };
      } else {
        setAuthLoading(false);
        return { success: false, error: data.error || "Login failed" };
      }
    } catch (error) {
      setAuthLoading(false);
      return { success: false, error: "Network error" };
    }
  };

  const register = async (userData) => {
    setAuthLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) throw new Error("Registration failed"); // Throw for non-2xx responses
  
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/checkout");
      return { success: true };
    } catch (error) {
      let errorMessage = "Network error";
      try {
        const errorData = await response?.json();
        errorMessage = errorData.error || error.message;
      } catch (e) {}
      return { success: false, error: errorMessage };
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
