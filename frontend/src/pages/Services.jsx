import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

// Toast Component
function Toast({ message, show, onClose }) {
  if (!show) return null;
  setTimeout(onClose, 2500);
  return (
    <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50 animate-fade-in">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="12" fill="#22c55e"/>
        <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l3 3 5-5" />
      </svg>
      <span className="font-semibold">{message}</span>
    </div>
  );
}

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX className="text-2xl" />
        </button>
        {children}
      </div>
    </div>
  );
}

const services = [
  {
    id: "buttonfix",
    name: "Button Fix",
    description:
      "Replace or reattach buttons on your garments. We use high-quality buttons that match your fabric and style.",
    items: { tshirt: 50, shirt: 75, pants: 60, winter: 100 },
  },
  {
    id: "alteration",
    name: "Alteration",
    description:
      "Professional alteration services for all types of garments. Custom fit guaranteed.",
    items: { tshirt: 60, shirt: 90, pants: 80, winter: 120 },
  },
  {
    id: "zipper",
    name: "Zipper Repair",
    description: "Expert zipper repair and replacement for all clothing types.",
    items: { tshirt: 40, shirt: 55, pants: 70, winter: 110 },
  },
  {
    id: "patchwork",
    name: "Patch Work",
    description: "Neat and durable patchwork for torn or worn-out areas.",
    items: { tshirt: 45, shirt: 65, pants: 75, winter: 105 },
  },
];

const columns = [
  { id: "tshirt", label: "T-shirt" },
  { id: "shirt", label: "Shirt" },
  { id: "pants", label: "Pants/Other" },
  { id: "winter", label: "Winter Clothes" },
];

export default function ServicesGrid() {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedPrices, setSelectedPrices] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    email: "",
    subject: "Alteration Enquiry",
    content: "",
  });
  const { addToCart } = useCart();

  // Accordion toggle
  const toggleAccordion = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  // Checkbox toggle
  const togglePriceSelection = (serviceId, itemType) => {
    const key = `${serviceId}-${itemType}`;
    setSelectedPrices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    Object.entries(selectedPrices).forEach(([key, isSelected]) => {
      if (isSelected) {
        const [serviceId, itemType] = key.split("-");
        const service = services.find((s) => s.id === serviceId);
        if (service?.items[itemType]) {
          total += service.items[itemType];
        }
      }
    });
    return total;
  };

  // Add to cart (aggregated)
  const handleAddToCart = () => {
    Object.entries(selectedPrices).forEach(([key, isSelected]) => {
      if (isSelected) {
        const [serviceId, itemType] = key.split("-");
        const service = services.find((s) => s.id === serviceId);
        if (service?.items[itemType]) {
          addToCart({
            id: key,
            service: service.name,
            type: itemType,
            price: service.items[itemType],
          });
        }
      }
    });
    setSelectedPrices({});
  };

  // Enquire Now modal
  const handleEnquire = () => {
    let content = "Selected Services:\n";
    Object.entries(selectedPrices).forEach(([key, isSelected]) => {
      if (isSelected) {
        const [serviceId, itemType] = key.split("-");
        const service = services.find((s) => s.id === serviceId);
        if (service?.items[itemType]) {
          content += `- ${service.name} (${itemType}): $${service.items[itemType]}\n`;
        }
      }
    });
    content += "\nAdditional Notes:\n";
    setEnquiryForm({
      email: "",
      subject: "Alteration Enquiry",
      content,
    });
    setIsModalOpen(true);
  };

  // Enquiry form handlers
  const handleFormChange = (e) => {
    setEnquiryForm({
      ...enquiryForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowToast(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 font-sans">
      <div className="flex gap-6">
        {/* First column - Services with accordions */}
        <div className="w-[30%]">
          {/* Header (distinct color) */}
          <div className="bg-[#E8D4B8] p-4 mb-4 text-center font-semibold text-[#4A5A6A] rounded-t">
            Services
          </div>
          {/* Service rows */}
          {services.map((service) => (
            <div key={service.id} className="mb-4">
              <div
                className={`bg-[#FAF3E0] p-4 flex justify-between items-center cursor-pointer transition rounded-t border-b border-[#D2C2B8]`}
                onClick={() => toggleAccordion(service.id)}
                style={{ minHeight: "56px" }}
              >
                <span className="font-medium text-[#3B3B3B]">
                  {service.name}
                </span>
                {expandedService === service.id ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </div>
              {/* Accordion info only in first column */}
              {expandedService === service.id && (
                <div className="bg-[#FFF8EF] border-b-2 border-[#BFA181] rounded-b p-4 text-[#4B3B2A] text-sm shadow">
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-[3%]" />

        {/* Price columns */}
        <div className="flex-1">
          {/* Header row (distinct color) */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {columns.map((col) => (
              <div
                key={col.id}
                className="bg-[#E8D4B8] p-4 text-center font-semibold text-[#4A5A6A] rounded-t"
              >
                {col.label}
              </div>
            ))}
          </div>
          {/* Price rows */}
          {services.map((service, idx) => {
            return (
              <div key={service.id} className="relative mb-4">
                <div
                  className={`grid grid-cols-4 gap-4 transition-all duration-300 rounded-t border-b border-[#D2C2B8]`}
                  style={{ minHeight: "56px" }}
                >
                  {columns.map((col) => {
                    const price = service.items && service.items[col.id];
                    const key = `${service.id}-${col.id}`;
                    const isSelected = selectedPrices[key];
                    // Alternate row color for even/odd rows
                    const rowBg =
                      idx % 2 === 0 ? "bg-[#FAF3E0]" : "bg-[#F6F1EB]";
                    return (
                      <div
                        key={key}
                        className={`p-4 flex items-center justify-between transition rounded
                          ${
                            price
                              ? "hover:shadow cursor-pointer"
                              : ""
                          }
                          ${
                            isSelected
                              ? "bg-[#BFA181] text-white font-semibold"
                              : rowBg + " text-[#3B3B3B]"
                          }
                        `}
                        style={{ minHeight: "56px" }}
                        onClick={price ? undefined : undefined}
                      >
                        {price ? (
                          <>
                            <span className="text-base">${price}</span>
                            <input
                              type="checkbox"
                              className="ml-3 h-5 w-5 accent-[#4A5A6A] rounded border-gray-400 cursor-pointer"
                              checked={!!isSelected}
                              onChange={() =>
                                togglePriceSelection(service.id, col.id)
                              }
                              onClick={(e) => e.stopPropagation()}
                            />
                          </>
                        ) : (
                          <span className="opacity-30">—</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* No accordion info here; only in first column */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-12 p-6 bg-[#FAF3E0] rounded-lg shadow max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-2 text-[#4A5A6A]">
          Selected Services
        </h3>
        {Object.keys(selectedPrices).filter((key) => selectedPrices[key])
          .length === 0 ? (
          <p className="text-[#A9746E]">No services selected yet.</p>
        ) : (
          <>
            <ul className="mb-4">
              {Object.entries(selectedPrices).map(([key, isSelected]) => {
                if (!isSelected) return null;
                const [serviceId, itemType] = key.split("-");
                const service = services.find((s) => s.id === serviceId);
                if (!service?.items[itemType]) return null;
                return (
                  <li
                    key={key}
                    className="mb-1 flex justify-between items-center border-b border-[#D2C2B8] pb-2"
                  >
                    <span>
                      {service.name} - {itemType}
                    </span>
                    <span className="font-medium">
                      ${service.items[itemType]}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 mb-6 text-right font-bold text-xl text-[#4A5A6A]">
              Total: ${calculateTotal()}
            </p>
            <div className="flex gap-10 justify-end">
              <button
                className="px-6 py-3 bg-[#4A5A6A] text-white rounded hover:bg-[#BFA181] transition font-semibold"
                onClick={handleEnquire}
              >
                Enquire Now
              </button>
              <button
                className="px-6 py-3 bg-[#6B8E7F] text-white rounded hover:bg-[#BFA181] transition font-semibold"
                onClick={handleAddToCart}
                disabled={
                  Object.keys(selectedPrices).filter((key) => selectedPrices[key])
                    .length === 0
                }
              >
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>

      {/* Enquiry Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-3xl font-extrabold text-[#4A5A6A] mb-2 text-center">Send Enquiry</h2>
        <p className="text-[#6B8E7F] mb-6 text-center text-base">
          Please fill in your details and enquiry. We’ll get back to you soon!
        </p>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#4A5A6A] mb-1" htmlFor="enquiry-email">
              Your Email
            </label>
            <input
              id="enquiry-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              value={enquiryForm.email}
              onChange={handleFormChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition placeholder-[#BFA181]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#4A5A6A] mb-1" htmlFor="enquiry-subject">
              Subject
            </label>
            <input
              id="enquiry-subject"
              type="text"
              name="subject"
              required
              value={enquiryForm.subject}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#4A5A6A] mb-1" htmlFor="enquiry-content">
              Message
            </label>
            <textarea
              id="enquiry-content"
              name="content"
              rows={6}
              required
              value={enquiryForm.content}
              onChange={handleFormChange}
              className="w-full px-4 py-3 border-2 border-[#E8D4B8] rounded-lg bg-[#FAF3E0] text-[#3B3B3B] focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-[#BFA181] transition"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 text-[#4A5A6A] bg-[#E8D4B8] rounded-lg font-semibold hover:bg-[#BFA181] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#4A5A6A] text-white rounded-lg font-semibold shadow hover:bg-[#BFA181] hover:text-[#4A5A6A] transition"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </Modal>

      {/* Toast for enquiry sent */}
      <Toast
        message="Enquiry Sent Successfully!"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
