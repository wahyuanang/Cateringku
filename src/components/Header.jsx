import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    { 
      name: 'Nasi Box', 
      path: '#',
      submenu: [
        { name: 'Menu Nasi Box', path: '/nasi-box' },
        { name: 'Menu Box Syukuran', path: '/menu-box-syukuran' },
      ]
    },
    { name: 'Paket Catering', path: '/paket-catering' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="flex-shrink-0" />
              <span className="text-center md:text-left">Rumah Bapak Sabar, Kampung Rawasari RT 01/RW01, Distrik Malind, Kabupaten Papua Selatan</span>
            </div>
            <a href="tel:+6281284216397" className="flex items-center gap-2 hover:text-cream transition-colors">
              <FaPhone />
              <span>+62 812-8421-6397</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-cream/95'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-cateringku.png" alt="CateringKu Logo" className="w-24 h-24" />
              <div>
                <h1 className="text-2xl font-bold text-brown-800">CateringKu</h1>
                <p className="text-sm text-primary font-semibold">CATERING</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className={`font-medium transition-colors hover:text-primary ${
                        isActivePath('/nasi-box') || isActivePath('/menu-box-syukuran') 
                          ? 'text-primary' 
                          : 'text-gray-700'
                      }`}>
                        {item.name} ▾
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="block px-4 py-3 hover:bg-cream text-gray-700 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors hover:text-primary ${
                        isActivePath(item.path) ? 'text-primary' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to="/galeri"
              className="hidden lg:block btn-primary"
            >
              Lihat Menu
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-2xl text-brown-800"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <>
                          <div className="font-medium text-gray-700 mb-2">{item.name}</div>
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              to={subitem.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block pl-4 py-2 text-gray-600 hover:text-primary transition-colors"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`font-medium transition-colors ${
                            isActivePath(item.path) ? 'text-primary' : 'text-gray-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link
                    to="/galeri"
                    className="btn-primary text-center"
                  >
                    Lihat Menu
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
