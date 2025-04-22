import ContactSection from ".././components/ContactSection.jsx";
import SubscribeSection from ".././components/Subscribe.jsx";
import ImageOffer from ".././components/ImageOffer.jsx"
import AboutUsHomeSection from "../components/AboutUsHomeSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-beige">
      <ImageOffer/>
      <AboutUsHomeSection />
      <ContactSection/>

      <SubscribeSection/>
      {/* Other content */}
    </div>
  );
}
