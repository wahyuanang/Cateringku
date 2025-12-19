import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const MenuBoxSyukuran = () => {
  const menuPackages = [
    {
      name: "BOX A",
      price: "Rp. 55.000,-",
      items: [
        "Nasi putih",
        "Ayam bakar 1/4kg",
        "Capcay/Baso",
        "Kerupuk",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "BOX B",
      price: "Rp. 75.000,-",
      items: [
        "Nasi putih",
        "Ayam bakar 1/2kg",
        "Capcay/Baso",
        "Manguk",
        "Sambal+Lalapan",
        "Kentus",
        "Kartu ucapan",
      ],
    },
    {
      name: "BOX C",
      price: "Rp. 65.000,-",
      items: [
        "Ayam tenor utuh",
        "Kerupian",
        "Sambal+Lalapan+Tissue",
        "Kentus+Lalapan+Tissue",
        "Kartu ucapan",
      ],
    },
    {
      name: "BOX D",
      price: "Rp. 155.000,-",
      items: [
        "Ayam jamu utuh",
        "Sambal+Lalapan",
        "Kentus ucapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "ATER-ATER",
      price: "45.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4kg",
        "Mie basah",
        "Telur rebus",
        "Urap",
        "Sambal grg kentang",
      ],
    },
    {
      name: "Nasi liwet Sunda bakul",
      price: "menyesuaikan pesanan",
      items: [
        "Nasi gurih+Teri",
        "Ayam grg/bacem",
        "Telur basriri",
        "Ikan asin",
        "perkedel/Sambel",
        "grg kentang",
        "gudangan+tumbu",
        "Kerupuk",
      ],
    },
    {
      name: "ATER-ATER",
      price: "55.000,-",
      items: [
        "Nasi putih",
        "Daging bacem",
        "Telur jambang",
        "Sambal grg kentang",
        "Mie balado",
        "Urap",
        "Kerupuk",
      ],
    },
    {
      name: "ATER-ATER",
      price: "30.000",
      items: [
        "Nasi",
        "Ayam",
        "Daging jambang pudren",
        "Telur",
        "Urap",
        "Mie",
        "Kerupuk",
      ],
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Nasi Box → Menu Box Syukuran</p>
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
                Pilihan Menu Box
                <br />
                <span className="text-primary">
                  Syukuran yang Menggugah Selera
                </span>
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Setiap box berisi sajian istimewa untuk berbagai keperluan dan
                kehangatan dalam setiap acara yang anda gelar. Rayakan momen
                Syukuran dari Kencana Catering Service. Karena kami menawarkan
                berbagai menu dalam waktu yang bermanfaat untuk orang yang
                disayangi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&h=600&fit=crop&q=80"
                alt="Menu Box Syukuran"
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
            <p className="text-primary font-semibold mb-2 uppercase">
              MENU TERSEDIA
            </p>
            <h2 className="section-title">Pilihan Menu Box Syukuran</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-secondary/20"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Menu Paket:</p>
                  <ul className="space-y-2">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-secondary">
                    {pkg.price}
                  </p>
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
            <h2 className="text-3xl font-bold text-brown-800 mb-6">
              Keterangan Menu Box Syukuran
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                • Harga dapat berubah sewaktu-waktu menyesuaikan harga bahan
                baku. Untuk update harga, dapat menghubungi kami
              </p>
              <p>
                • Minimal pemesanan:{" "}
                <span className="font-bold text-secondary">20pax</span>
              </p>
              <p>• Untuk update harga, dapat menghubungi kami</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Rayakan Momen Syukuran Anda
          </h2>
          <p className="text-xl mb-8 text-cream">
            Pesan sekarang dan buat acara syukuran Anda lebih berkesan!
          </p>
          <a
            href="https://wa.me/6281284216397?text=Halo%20CateringKu!%20Saya%20tertarik%20dengan%20Menu%20Box%20Syukuran."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-secondary hover:bg-cream font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Pesan Sekarang
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default MenuBoxSyukuran;
