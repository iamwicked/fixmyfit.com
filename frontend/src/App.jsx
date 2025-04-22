import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import Navbar from "./components/Navbarr";
import HomePage from "./pages/homepage.jsx";
import AboutUs from './pages/AboutUs.jsx';
import CartPage from './pages/CartPage';
import Footer from "./components/Footerr.jsx";
import Services from "./pages/Services.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from './pages/TermsAndConditions'
import StorePage from './pages/ClothStore.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-beige flex flex-col">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path = "/services" element ={<Services/>} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} /> {/* Added cart route */}
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
