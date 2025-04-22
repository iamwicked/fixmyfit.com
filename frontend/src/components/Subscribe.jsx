// src/components/SubscribeSection.jsx
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-9/10 mx-auto bg-[#F6F1EB]  rounded flex flex-col md:flex-row items-center justify-between p-6 shadow-lg gap-10">
        {/* Left - Headline and description */}
        <div className="mb-4 md:mb-0 md:mr-8 flex-[2]">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Subscribe</h2>
          <p className="text-gray-600 text-sm">
            Join our newsletter for exclusive offers, style tips, and the latest updates. No spam—just value!
          </p>
        </div>
        {/* Right - Form */}
        <form
          className="flex-[2] flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto"
          onSubmit={handleSubmit}
        >
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <div className="relative w-full sm:w-120">
            <input
              id="subscribe-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full text-center bg-transparent border-0 border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2 px-0 text-gray-800 text-base transition"
            />
          </div>
          <button
            type="submit"
            className="w-[10] mt-2 sm:mt-0 bg-[#987554] hover:bg-[#664229] text-white text-lg px-8 py-3 rounded transition font-semibold"
            disabled={submitted}
          >
            {submitted ? "Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
