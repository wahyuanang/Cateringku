import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const PaketCatering = () => {
  const paketCatering = [
    {
      name: 'Senin',
      price: 'Rp. 20.000,-',
      items: ['Nasi putih', 'Sammy kentang', 'Dadar daun bawang', 'Sayur', 'Instan Bulan', 'Sambal', 'Kerupuk']
    },
    {
      name: 'Selasa',
      price: 'Rp. 25.000,-',
      items: ['Nasi putih', 'Sammy kentang kudng', 'Perkedel jagung', 'Sayur', 'Instan buah', 'Sambal', 'Kerupuk']
    },
    {
      name: 'Rabu',
      price: 'Rp. 25.000,-',
      items: ['Nasi putih', 'Ayam goreng', 'Tahu teri goreng', 'Sayur', 'Instan Buah', 'Sambal', 'Kerupuk']
    },
    {
      name: 'Kamis',
      price: 'Rp. 25.000,-',
      items: ['Nasi putih', 'Mengut ikan', 'Berkedel', 'Sambal', 'Instan Buah', 'Kerupuk']
    },
    {
      name: 'Jumat',
      price: 'Rp. 25.000,-',
      items: ['Nasi putih', 'Rendang/Funta gureing', 'Telur', 'Sayut', 'Sambal', 'Kerupuk']
    },
    {
      name: 'Sabtu',
      price: 'Rp. 20.000,-',
      items: ['Nasi putih', 'Ayam filet gureing taripng', 'Mancop gureing', 'Capcay gureing', 'Sambal', 'Kerupuk']
    },
    {
      name: 'ROTI, KUE & BOLU',
      price: '4000',
      items: ['Roti gulung', 'Bihunku cake', 'Polu kukus', 'Brownies', 'Sus Pie', 'Pudding coklat', 'Pudding buah']
    },
    {
      name: 'Snack Tradisional',
      price: '4000',
      items: ['Lumpur pie dalem', 'Lumpur pie arum', 'Aneka pie arum', 'Rolas kolo', 'Lemper ketan', 'Otatiek', 'Mendorlut', 'Kue lumpur', 'Kue talai', 'Wajos', 'Kue ku', 'Risoles', 'Putri merah']
    },
    {
      name: 'Snack & Pie',
      price: '4000',
      items: ['Kroket pie ayam', 'Risol mayo', 'Risol ragout', 'Kroket kentang', 'Risol kerbang', 'Pie kactu', 'Pia tori']
    },
    {
      name: 'Snack Paket 1',
      price: '13.000,-',
      items: ['1 snack gurih', '1 snack manis', '1 buahbox', '1 buhora 200ml']
    },
    {
      name: 'Snack Paket 2',
      price: '17.000,-',
      items: ['1 snack manis', '1 snack tradisional', '1 snack 200ml', 'mineral 200ml']
    },
    {
      name: 'Snack Tampah 50pcs',
      price: '250.000,-',
      items: ['50 snack tie varoan']
    },
    {
      name: 'Snack Tampah 100pcs',
      price: '450.000,-',
      items: ['100 snack tie varoan']
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Paket Catering</p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-brown-800 mb-6">
                Sajian Berkelas Untuk<br />
                <span className="text-primary">Segala Momen Istimewa</span>
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kencana Catering menawarkan berbagai paket catering yang ideal untuk acara kantor, seminar, gathering, dan acara lainnya. Dengan menu yang lezat dan harga yang kompetitif, kami siap memberikan pelayanan terbaik untuk acara Anda. Dari rapat hingga tingkat syukuran, kami menawarkan berbagai menu yang dapat disesuaikan dengan kebutuhan acara Anda. Biarkan kami mengurus kebutuhan catering acara Anda sehingga Anda dapat fokus pada hal-hal yang lebih penting. Nikmati pelayanan catering yang tak terlupakan dari Kencana Catering dan buat setiap peristiwa Anda berkesan!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=600&fit=crop&q=80" 
                alt="Paket Catering" 
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Tersedia */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 uppercase">MENU TERSEDIA</p>
            <h2 className="section-title">Pilihan Paket Catering</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paketCatering.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">{pkg.name}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Menu Paket:</p>
                  <ul className="space-y-2">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keterangan */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-brown-800 mb-6">Keterangan Paket Catering</h2>
            <div className="space-y-3 text-gray-700">
              <p>• Menu harian berubah, atau bisa meng dengan kebutuhan yang ada</p>
              <p>• Menu yang sudah diturunkan atau disesuaikan permintaan</p>
              <p>• Minimal pemesanan: <span className="font-bold text-primary">20pax</span></p>
              <p>• Untuk update harga, dapat menghubungi kami</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Siap Membuat Acara Anda Berkesan?</h2>
          <p className="text-xl mb-8 text-cream">Hubungi kami sekarang untuk konsultasi dan pemesanan!</p>
          <a 
            href="https://wa.me/6281284216397?text=Halo%20CateringKu!%20Saya%20tertarik%20dengan%20Paket%20Catering." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default PaketCatering;
