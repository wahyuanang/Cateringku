import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Tumpeng = () => {
  const tumpengOptions = [
    {
      name: "Tumpeng Nasi kuning 1",
      items: [
        "Nasi kuning",
        "Ayam goreng",
        "Perkedel/Siki grg kentang",
        "Telur dadar",
        "Kering tempe",
        "Mie goreng",
        "Kotuk/Tampah",
        "Daun/Hasan",
      ],
    },
    {
      name: "Tumpeng lingkung 1",
      items: [
        "Nasi gurih",
        "Demplak",
        "Ikan asin",
        "Dulangan",
        "Kotuk/Tampah",
        "Daun/Hasan",
      ],
    },
    {
      name: "Tumpeng lingkung 2",
      items: [
        "Nasi lingkung",
        "Ayam ingkung",
        "Telur pincang",
        "Telur dadar",
        "Ikan asin",
        "Dulangan",
        "Kotuk/Tampah",
        "Daun/Hasan",
      ],
    },
    {
      name: "Tumpeng Nasi kuning 2",
      items: [
        "Nasi kuning",
        "Ayam goreng",
        "Perkedel",
        "Kering tempe",
        "Abon",
        "Kedaiasi",
        "Kotuk/Tampah",
        "Daun/Hasan",
      ],
    },
    {
      name: "Tumpeng Sate",
      items: ["Sate ayam", "contong", "Dumbu kacang", "acar", "sambal"],
    },
    {
      name: "Nasi liwet Sunda Bakul",
      items: [
        "Nasi gurih+Teri",
        "Ayam grg/bacem",
        "Telur balado",
        "Ikan asin",
        "perkedel/Sambel",
        "grg kentang",
        "gudangan+bumbu",
        "Kerupuk",
      ],
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Tumpeng</p>
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
                Keindahan Budaya
                <br />
                <span className="text-primary">
                  Dalam Paket Tumpeng Kencana
                </span>
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Buatkan momen spesial menjadi lebih bermakna dengan pilihan
                Paket Tumpeng kami yang elegan, membawa bentuk dan kesatuan
                dalam setiap sajian dan perayaan. Dalam setiap warna dan aroma
                olaf Paket Nasi Tumpeng kami, terkandung cerita kebahagiaan dan
                harapan yang berlimar. Biarkan setiap hidangan berbicara untuk
                Anda!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://pondokescendol.com/wp-content/uploads/2023/02/tumpeng.png"
                alt="Tumpeng"
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
            <h2 className="section-title">Pilihan Tumpeng</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tumpengOptions.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cream to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
              >
                <h3 className="text-2xl font-bold text-brown-800 mb-4">
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-3">Menu Paket:</p>
                  <ul className="space-y-3">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0 text-lg" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-primary">IDR CALL</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Hubungi kami untuk harga
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
              Keterangan Tumpeng
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>• Tumpeng Nasi kuning, Ayam, Perkedel, Kering tempe, Abon</p>
              <p>
                • Harga dapat berubah sewaktu-waktu menyesuaikan harga bahan
                baku. Untuk update harga, dapat menghubungi kami
              </p>
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
          <h2 className="text-4xl font-bold mb-6">
            Pesan Tumpeng untuk Acara Anda
          </h2>
          <p className="text-xl mb-8 text-cream">
            Rayakan momen spesial dengan tumpeng istimewa dari kami!
          </p>
          <a
            href="https://wa.me/6281284216397?text=Halo%20CateringKu!%20Saya%20tertarik%20dengan%20Paket%20Tumpeng."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary hover:bg-cream font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Pesan Sekarang
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Tumpeng;
