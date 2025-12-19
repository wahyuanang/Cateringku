import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaDollarSign, FaStar } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaUtensils className="text-4xl" />,
      title: 'Bahan Baku Segar',
      description: 'Kami menggunakan bahan-bahan segar terbaik untuk setiap hidangan yang kami sajikan.'
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Pelayanan Profesional',
      description: 'Didukung oleh tim berpengalaman, kami siap melayani kebutuhan catering Anda dengan profesional dan ramah.'
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: 'Pemesanan Mudah',
      description: 'Proses pemesanan yang mudah dan transparan, dengan opsi pembayaran fleksibel.'
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: 'Catering Berpengalaman',
      description: 'Dengan lebih dari 1 tahun pengalaman, kami siap membantu berbagai acara Anda dengan sempurna.'
    }
  ];

  const packages = [
    {
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=500&fit=crop&q=80',
      title: 'Menu Nasi Box',
      price: 'Rp 30 Paket Terjangkau',
      link: '/nasi-box'
    },
    {
      image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&h=500&fit=crop&q=80',
      title: 'Menu Box Syukuran',
      price: 'Rp 50 Paket Terjangkau',
      link: '/menu-box-syukuran'
    },
    {
      image: 'https://pondokescendol.com/wp-content/uploads/2023/02/tumpeng.png',
      title: 'Tumpeng',
      price: 'Rp 6 Paket Terjangkau',
      link: '/tumpeng'
    },
    {
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=500&fit=crop&q=80',
      title: 'Paket Catering',
      price: 'Rp 50 Paket Terjangkau',
      link: '/paket-catering'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&q=80',
    'https://pondokescendol.com/wp-content/uploads/2023/02/tumpeng.png',
    'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=400&fit=crop&q=80'
  ];

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-cream to-secondary/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200')] bg-cover bg-center opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-cream/80 backdrop-blur-sm p-2 rounded-lg inline-block mb-4">
                <p className="text-primary font-semibold">CateringKu</p>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-brown-800 mb-6 leading-tight">
                SELAMAT DATANG DI<br />
                <span className="text-primary">CATERINGKU</span>
              </h1>
              <p className="text-lg md:text-xl text-brown-700 mb-4 italic font-semibold">
                Pengalaman Kuliner yang Tak Terlupakan
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed max-w-xl">
                Jelajahi hidangan kami yang lezat disediakan dengan cinta dan perhatian untuk setiap detail. Dengan bahan-bahan segar dan berkualitas tinggi yang dipilih dengan hati-hati untuk menciptakan rasa yang sempurna. Biarkan kami mengurus acara Anda dengan sempurna!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/paket-catering" className="btn-primary">
                  TEMUKAN PAKET CATERING KAMI
                </Link>
                <Link to="/kontak" className="btn-outline">
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=700&fit=crop&q=80" 
                  alt="CateringKu Food" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <FaStar className="text-white text-2xl" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-brown-800">100%</p>
                      <p className="text-sm text-gray-600">Bahan Berkualitas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            LAYANAN TERBAIK
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-cream hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brown-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=500&fit=crop&q=80" 
                alt="CateringKu Service" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-bold">1+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-2">TENTANG LAYANAN</p>
              <h2 className="text-4xl font-bold text-brown-800 mb-6">
                CateringKu Service
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                CateringKu adalah penyedia jasa catering terpercaya yang berbasis di Papua Selatan. Dengan pengalaman dalam industri kuliner, kami menawarkan layanan catering harian untuk karyawan serta catering untuk berbagai acara seperti event, seminar, rapat, dan gathering.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dengan spesialisasi dalam pengolahan catering untuk berbagai acara seperti pernikahan, syukuran, dan acara khusus lainnya dengan menu Nasi Box, Box Syukuran, dan Tumpeng, kami siap memberikan pelayanan terbaik untuk kebutuhan acara Anda. Selalu mengedepankan kualitas dan kepuasan pelanggan, kami berkomitmen tinggi untuk memberikan layanan profesional yang sempurna.
              </p>
              <Link to="/profile" className="btn-primary">
                Baca Selengkapnya
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2">PAKET KAMI</p>
            <h2 className="section-title">
              Penawaran Spesial untuk Setiap Acara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai paket catering yang dapat disesuaikan dengan kebutuhan acara Anda, dari acara kecil hingga besar dengan menu yang lezat dan harga yang terjangkau.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={pkg.link} className="card group block">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                      <p className="text-primary font-semibold">{pkg.price}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white text-center">
                    <span className="text-primary font-semibold group-hover:underline">
                      Lihat Menu →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2">GALERI</p>
            <h2 className="section-title">Jelajahi Kreasi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap hidangan kami adalah karya seni kuliner yang dibuat dengan dedikasi dan keahlian tinggi untuk menghadirkan pengalaman kuliner yang tak terlupakan bagi setiap tamu Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-xl group h-80"
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">Lihat Detail</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/galeri" className="btn-primary">
              Lihat Galeri Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200')] bg-cover bg-center opacity-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Butuh Catering untuk Acara Anda?
          </h2>
          <p className="text-xl mb-8 text-cream max-w-2xl mx-auto">
            Hubungi Kami Hari Ini, Rencanakan Menu Berdasarkan Selera Anda!
          </p>
          <a 
            href="https://wa.me/6281284216397?text=Halo%20CateringKu!%20Saya%20tertarik%20dengan%20layanan%20catering%20Anda." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
