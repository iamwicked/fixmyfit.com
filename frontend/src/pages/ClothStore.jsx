// src/pages/StorePage.jsx
import { useEffect } from "react";

export default function StorePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF3E0] py-20 px-4">
      <div className="max-w-2xl w-full flex flex-col items-center justify-center">
        <span className="text-6xl md:text-7xl font-extrabold text-[#BFA181] mb-6 animate-pulse">
          🛒
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A5A6A] mb-4 text-center">
          Store Coming Soon!
        </h1>
        <p className="text-lg text-[#6B8E7F] text-center mb-8">
          Our online store is under construction.<br />
          Please check back soon for exclusive offers and products!
        </p>
        <button
          onClick={() => window.location.href = "/"}
          className="mt-4 px-8 py-3 bg-[#4A5A6A] text-white text-lg rounded-full font-semibold shadow hover:bg-[#BFA181] transition"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}
