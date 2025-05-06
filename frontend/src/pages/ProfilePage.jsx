import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function LogoutModal({ isOpen, onClose, onLogout }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX className="text-2xl" />
        </button>
        <h2 className="text-xl font-bold text-[#4A5A6A] mb-4">Confirm Logout</h2>
        <p className="mb-8 text-[#6B8E7F] text-center">
          Are you sure you want to logout?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[#4A5A6A] bg-[#E8D4B8] rounded-lg font-semibold hover:bg-[#BFA181] transition"
          >
            Cancel
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Fallbacks for missing fields
  const joinDate =
    user?.createdAt
      ? new Date(user.createdAt).toLocaleDateString()
      : "Joined recently";
  const lastLogin =
    user?.lastLogin
      ? new Date(user.lastLogin).toLocaleString()
      : "N/A";

  if (!user) {
    return (
      <div className="bg-[#FAF3E0] min-h-screen pt-10">
        <div className="max-w-md mx-auto">
          <AuthForm isLogin={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF3E0] min-h-screen pt-10">
      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={() => {
          logout();
          setShowLogoutModal(false);
          navigate("/");
        }}
      />

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-[#E8D4B8] mt-6">
        <div className="flex items-center gap-6">
          {/* User icon */}
          <div className="w-28 h-28 flex-shrink-0 flex items-center justify-center rounded-full bg-[#BFA181] shadow">
            <FaUserCircle className="w-24 h-24 text-white opacity-90" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-[#4A5A6A] mb-1">
              {user.name}
            </h1>
            <p className="text-[#6B8E7F] mb-2">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="font-semibold text-[#4A5A6A] mb-1">Account Details</h3>
            <div className="text-[#6B8E7F]">
              <div>
                <span className="font-semibold text-[#BFA181]">Joined:</span>{" "}
                {joinDate}
              </div>
              <div>
                <span className="font-semibold text-[#BFA181]">Last Login:</span>{" "}
                {lastLogin}
              </div>
              <div>
                <span className="font-semibold text-[#BFA181]">User ID:</span>{" "}
                {user.id || user._id || "-"}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#4A5A6A] mb-1">Contact Info</h3>
            <div className="text-[#6B8E7F]">
              <div>
                <span className="font-semibold text-[#BFA181]">Phone:</span>{" "}
                {user.phone || "Not provided"}
              </div>
              <div>
                <span className="font-semibold text-[#BFA181]">Address:</span>{" "}
                {user.address || "Not provided"}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowLogoutModal(true)}
          className="mt-8 px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition w-full sm:w-auto"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
