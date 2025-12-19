import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NasiBox from "./pages/NasiBox";
import MenuBoxSyukuran from "./pages/MenuBoxSyukuran";
import PaketCatering from "./pages/PaketCatering";
import Tumpeng from "./pages/Tumpeng";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nasi-box" element={<NasiBox />} />
          <Route path="/menu-box-syukuran" element={<MenuBoxSyukuran />} />
          <Route path="/paket-catering" element={<PaketCatering />} />
          <Route path="/tumpeng" element={<Tumpeng />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
