// src/components/ContactSection.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons (for leaflet in React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function ContactSection() {
  const storeLocation = [50.0755, 14.47]; // Example: San Francisco

  return (
    <section className="py-10 px-4">
      <div className="max-w-9/10 mx-auto flex flex-col md:flex-row gap-20">
        {/* Contact Info Box */}
        <div className="w-full md:w-2/5 h-[400px] bg-[#F6F1EB] rounded flex flex-col justify-center px-8 shadow-md">
          <h2 className="text-4xl font-medium text-[#4B3621] mb-10 text-center">CONTACT US</h2>
          <div className="space-y-7 text-gray-700 justify-center">
            <div className="flex items-center text-xl  justify-center">
              <span className="mr-2">📍</span>
              <span><strong>Address:</strong> randomaddr</span>
            </div>
            <div className="flex items-center text-xl  justify-center">
              <span className="mr-2">📞</span>
              <span><strong>Phone:</strong> (123) 456-7890</span>
            </div>
            <div className="flex items-center text-xl  justify-center">
              <span className="mr-2">✉️</span>
              <span><strong>Email:</strong> fixmyfit@gmail.com</span>
            </div>
            <div className="flex items-center text-xl justify-center">
              <span className="mr-2">⏰</span>
              <span><strong>Hours:</strong> Mon-Sat: 10am - 8pm</span>
            </div>
          </div>
        </div>
        {/* Map Box */}
        <div className=" md:w-3/5 h-[400px] bg-[#F6F1EB] shadow-xl rounded overflow-hidden">
          <MapContainer 
            center={storeLocation} 
            zoom={15} 
            style={{ height: "100%", width: "100%" }}
            dragging={true}
            scrollWheelZoom={true}
            zoomControl={true}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={storeLocation}>
              <Popup>
                <b>Our Store</b><br />
                123 Fashion Street<br />
                New York, NY 10001
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
