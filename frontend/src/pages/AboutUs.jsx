import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FAF3E0] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-[#4A5A6A] mb-6">
            About Stitch & Restore
          </h1>
          <p className="text-lg text-[#6B8E7F] max-w-2xl mx-auto">
            Preserving your favorite garments with care and craftsmanship since 2025
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Our Story */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#4A5A6A] mb-4">Our Story</h2>
            <p className="text-[#6B8E7F] leading-relaxed">
              
At FixMyFit, our goal is simple—to satisfy your needs and exceed your expectations. We believe that well-fitted, well-maintained clothing enhances both confidence and sustainability. Instead of discarding worn-out or ill-fitting garments, we offer expert repair and alteration services to give them a new life.

            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#4A5A6A] mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#BFA181] p-3 rounded-full">
                  <span className="text-white text-xl">✂️</span>
                </div>
                <div>
                  <h3 className="font-medium text-[#4A5A6A] mb-2">Expert Craftsmanship</h3>
                  <p className="text-[#6B8E7F] text-sm">
                    20+ years experience in garment repair and alteration
                  </p>
                </div>
              </div>
              {/* Add more features similarly */}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#4A5A6A] mb-6">Meet Our Tailors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-medium text-[#4A5A6A]">Rajesh Sharma</h3>
                <p className="text-sm text-[#6B8E7F]">Master Tailor</p>
              </div>
              {/* Add more team members */}
            </div>
          </div>

          {/* CTA */}
        </div>
      </div>
    </div>
  );
}
