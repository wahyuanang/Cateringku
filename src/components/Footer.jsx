import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Logo & Description - Kolom Lebih Lebar (5 dari 12) */}
          <div className="md:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-cateringku.png" alt="CateringKu Logo" className="w-24 h-24" />
              <div>
                <h3 className="text-xl font-bold">CateringKu</h3>
                <p className="text-sm text-primary font-semibold">CATERING</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              CateringKu merupakan penyedia jasa catering terpercaya yang berbasis di Kota Yogyakarta dan sekitarnya. Dengan pengalaman lebih dari satu tahun dalam industri, kami menawarkan layanan catering harian untuk karyawan serta catering untuk berbagai acara seperti event, seminar, rapat, dan gathering.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-primary transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors text-xl">
                <FaTiktok />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Kontak Kami - (3 dari 12) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Rumah Bapak Sabar<br />
                  Kampung Rawasari RT 01/RW01<br />
                  Distrik Malind, Kabupaten Papua Selatan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <a href="tel:+6281284216397" className="text-gray-300 hover:text-primary transition-colors">
                  +62 812-8421-6397
                </a>
              </div>
            </div>
          </div>

          {/* Paket Kami - (2 dari 12) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">Paket Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nasi-box" className="text-gray-300 hover:text-primary transition-colors">
                  Menu Nasi Box
                </Link>
              </li>
              <li>
                <Link to="/menu-box-syukuran" className="text-gray-300 hover:text-primary transition-colors">
                  Menu Box Syukuran
                </Link>
              </li>
              <li>
                <Link to="/tumpeng" className="text-gray-300 hover:text-primary transition-colors">
                  Tumpeng
                </Link>
              </li>
              <li>
                <Link to="/paket-catering" className="text-gray-300 hover:text-primary transition-colors">
                  Paket Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigasi - (2 dari 12) */}
          <div className="lg:col-span-2">
             <h3 className="text-lg font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-primary transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-gray-300 hover:text-primary transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-primary transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brown-700 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-300">
            Copyright © {currentYear} CateringKu Service. All rights reserved. Developed with ❤️ by <span className="text-primary font-semibold">JMV</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;