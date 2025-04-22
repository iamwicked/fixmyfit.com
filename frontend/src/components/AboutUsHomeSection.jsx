// src/components/ServicesShowcase.jsx
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const services = [
  {
    id: "buttonfix",
    name: "Button Fix & Replacement",
    description: "Ensuring every button stays secure and stylish.",
    features: [
      "Loose/missing button repair",
      "Color-matched replacements",
      "Reinforced stitching",
    ],
    color: "from-[#FFF3E6] to-[#F6E7D8]",
  },
  {
    id: "alteration",
    name: "Alterations & Fitting",
    description: "Perfecting the fit of your clothes for confidence.",
    features: [
      "Shorten/lengthen hems",
      "Take in/let out seams",
      "Waist, sleeve, shoulder adjustments",
    ],
    color: "from-[#E8F6EF] to-[#D1E7DD]",
  },
  {
    id: "ziprepair",
    name: "Zip Replacements",
    description: "Repairing or replacing faulty zippers with precision.",
    features: [
      "Zipper repair & install",
      "Invisible & heavy-duty zips",
      "All garment types",
    ],
    color: "from-[#E6E8FA] to-[#D8D6F6]",
  },
  {
    id: "patchwork",
    name: "General Repairs & Patchwork",
    description: "Fixing tears, holes, and wear & tear, beautifully.",
    features: [
      "Tear & hole mending",
      "Custom patchwork",
      "Invisible repairs",
    ],
    color: "from-[#FFF8E1] to-[#FDEBD0]",
  },
  {
    id: "tailoring",
    name: "Custom Tailoring",
    description: "Personalized tailoring to match your unique style.",
    features: [
      "Made-to-measure garments",
      "Style consultation",
      "Premium fabrics",
    ],
    color: "from-[#E7F0FD] to-[#D2E3F6]",
  },
  {
    id: "multi",
    name: "Multiple Clothing Repairs",
    description: "Extend the life of your favorite outfits.",
    features: [
      "Bulk repairs",
      "Family & corporate discounts",
      "Sustainable solutions",
    ],
    color: "from-[#F6E7F7] to-[#F6D8ED]",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="w-full min-h-screen py-16 px-0 bg-gradient-to-b from-[#FAF3E0] to-[#F6E7D8]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="top-0 z-10 bg-gradient-to-b from-[#FAF3E0] to-transparent py-8 mb-10 flex flex-col items-center">
          <span className="text-5xl mb-2 text-[#4A5A6A] font-bold">🧵</span>
          <h2 className="text-4xl font-extrabold text-[#4A5A6A] mb-2 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-[#6B8E7F] text-center max-w-2xl">
            At FixMyFit, we bring craftsmanship, precision, and care to every stitch. Explore our full range of clothing repairs and expert tailoring.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl shadow-lg bg-gradient-to-br ${service.color} p-8 flex flex-col items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3 text-[#BFA181]">✔️</span>
                <h3 className="text-2xl font-bold text-[#4A5A6A]">{service.name}</h3>
              </div>
              <p className="mb-4 text-[#4B3B2A]">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-[#6B8E7F]">
                    <FaCheckCircle className="mr-2 text-[#4A5A6A]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="flex justify-center mt-16">
      <Link
        to="/services"
        className="px-10 py-4 bg-[#4A5A6A] text-white text-lg rounded-full font-semibold shadow-lg hover:bg-[#BFA181] transition flex items-center justify-center"
      >
        Book Your Repair Now
      </Link>
    </div>
      </div>
    </section>
  );
}
