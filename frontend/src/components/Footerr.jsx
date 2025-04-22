import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#4B3621] text-[#F6F1EB] border-t-2 border-[#bfa181] pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Branding & About */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <span className="text-3xl font-serif font-extrabold tracking-wide mb-2 text-[#BFA181]">
            FixMyFit
          </span>
          <span className="text-sm mb-3 text-[#F6F1EB]/80 italic">
            Craftsmanship. Care. Confidence.
          </span>
          <p className="text-sm text-[#F6F1EB]/70 max-w-xs">
            Expert repairs & tailoring for your favorite clothes. Sustainable, affordable, and always with a smile.
          </p>
        </div>

        {/* Navigation & Legal */}
        <nav className="flex-1 flex flex-col items-center md:items-center gap-2 mb-8 md:mb-0">
          <span className="uppercase font-semibold text-[#BFA181] mb-2">Quick Links</span>
          <Link to="/terms" className="hover:text-[#BFA181] transition text-base">Terms & Conditions</Link>
          <Link to="/privacy-policy" className="hover:text-[#BFA181] transition text-base">Privacy Policy</Link>
          <Link to="/about" className="hover:text-[#BFA181] transition text-base">About Us</Link>
          <Link to="/services" className="hover:text-[#BFA181] transition text-base">Services</Link>
          <Link to="/" className="hover:text-[#BFA181] transition text-base">Home</Link>
        </nav>

        {/* Contact & Social */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-3">
          <span className="uppercase font-semibold text-[#BFA181] mb-2">Contact</span>
          <span>
            <strong>Phone:</strong> <a href="tel:1234567890" className="hover:text-[#BFA181] transition">123-456-7890</a>
          </span>
          <span>
            <strong>Email:</strong> <a href="mailto:info@fixmyfit.com" className="hover:text-[#BFA181] transition">fixmyfit@gmail.com</a>
          </span>
          <div className="flex gap-6 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="group"
            >
              <FaInstagram className="text-3xl md:text-4xl text-[#F6F1EB] group-hover:text-[#BFA181] transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="group"
            >
              <FaFacebookF className="text-3xl md:text-4xl text-[#F6F1EB] group-hover:text-[#BFA181] transition" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
              title="WhatsApp"
              className="group"
            >
              <FaWhatsapp className="text-3xl md:text-4xl text-[#F6F1EB] group-hover:text-[#BFA181] transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#BFA181] mt-8 pt-4 text-center text-xs text-[#F6F1EB]/70 tracking-wider">
        © {new Date().getFullYear()} FixMyFit. All rights reserved.
      </div>
    </footer>
  );
}
