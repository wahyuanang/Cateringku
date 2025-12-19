import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const NasiBox = () => {
  const menuPackages = [
    {
      name: "MENU PAKET A",
      price: "Rp. 25.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4kg",
        "Capcay/Baso",
        "Kerupuk",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET B",
      price: "Rp. 31.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4kg + 1/2tg",
        "Capcay/Baso",
        "Kerupuk",
        "Sambal+Lalapan",
        "Kentus",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET C",
      price: "Rp. 28.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4kg",
        "Capcay/Baso",
        "Mangut",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET D",
      price: "Rp. 25.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4kg",
        "Capcay/Baso",
        "Mangut",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET E",
      price: "Rp. 28.000,-",
      items: [
        "Nasi putih",
        "Dendeng daging sapi",
        "Tumis sayuran dg bihun dst",
        "Kerupuk",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET F",
      price: "Rp. 35.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4 kg dst",
        "Tumis sayuran",
        "Capcay/Baso",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET G",
      price: "Rp. 28.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4 kg",
        "Tumis sayuran",
        "Kerupuk",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET H",
      price: "Rp. 25.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4 kg",
        "Tumis sayuran",
        "Kerupuk",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET I",
      price: "Rp. 32.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4 kg",
        "Tumis sayuran",
        "Lumpia",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET J",
      price: "Rp. 25.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4 kg",
        "Tumis sayuran",
        "Kentus",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET K",
      price: "Rp. 37.000,-",
      items: [
        "Nasi putih",
        "Lele/Gurami/Nila",
        "Capcay/Baso",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
    {
      name: "MENU PAKET L",
      price: "Rp. 28.000,-",
      items: [
        "Nasi putih",
        "Ayam suir/ayam kecap",
        "Tumis sayuran",
        "Sambal+Lalapan",
        "Kartu ucapan",
      ],
    },
  ];

  const menuPackages2 = [
    {
      name: "MENU PAKET M",
      price: "Rp. 29.000,-",
      items: [
        "Nasi putih",
        "Ayam goreng/ayam bakar",
        "Capcay goreng",
        "Sambal",
        "Buah",
      ],
    },
    {
      name: "MENU PAKET N",
      price: "Rp. 29.000,-",
      items: [
        "Nasi putih",
        "Lemon/Ayam gurih",
        "Capcay goreng",
        "Sambal",
        "Buah",
      ],
    },
    {
      name: "MENU PAKET O",
      price: "Rp. 38.000,-",
      items: [
        "Nasi putih",
        "Nasi goreng",
        "Ayam gurih Teri",
        "Capcay goreng",
        "Sambal",
      ],
    },
    {
      name: "MENU PAKET P",
      price: "Rp. 28.000,-",
      items: ["Nasi putih", "Daging bakar", "Tumis sayuran", "Sambal", "Buah"],
    },
    {
      name: "MENU PAKET Q",
      price: "Rp. 35.000,-",
      items: ["Nasi putih", "Daging rendang dst", "Capcay", "Sambal", "Buah"],
    },
    {
      name: "MENU PAKET R",
      price: "Rp. 30.000,-",
      items: [
        "Nasi putih",
        "Ayam 1/4kg",
        "Oseng labu putni",
        "Daging bakar",
        "Sambal",
        "Kerupuk",
      ],
    },
  ];

  const menuPackages3 = [
    {
      name: "BURAY",
      price: "Rp. 17.000,-",
      items: [
        "Nasi kuning",
        "Ayam bakar",
        "Semur kentang",
        "Sambal goreng",
        "Tumis kacang panjang",
        "Perkedel",
        "Telur rebus 1/2",
        "Kerupuk",
        "Buah",
      ],
    },
    {
      name: "UBAR",
      price: "Rp. 21.000,-",
      items: [
        "Nasi kuning",
        "Ayam bakar",
        "Semur kentang",
        "Tumis kacang panjang",
        "Perkedel",
        "Telur rebus",
        "Sambel kering kacang",
        "Kerupuk",
        "Buah",
      ],
    },
    {
      name: "SOTO BABURNAH",
      price: "Rp. 17.000/19.000,-",
      items: [
        "Nasi putih",
        "Ayam suwir",
        "Soto Baburnah",
        "Telur rebus",
        "Kering tempe",
        "Kerupuk",
      ],
    },
    {
      name: "SATE AYAM",
      price: "Rp. 20.000,-",
      items: ["Nasi putih", "Sate ayam", "Kecap pedis", "Urap"],
    },
  ];

  const menuPackages4 = [
    {
      name: "EMPAL GENTONG",
      price: "Rp. 25.000,-",
      items: ["Empal gentong", "Nasi putih", "Kerupuk", "Buah"],
    },
    {
      name: "BARON",
      price: "Rp. 26.000,-",
      items: [
        "Nasi putih",
        "Baron",
        "Tempe goreng",
        "Ayam bakar",
        "Urap",
        "Kerupuk",
        "Buah",
      ],
    },
    {
      name: "GA BAKAR",
      price: "Rp. 30.000,-",
      items: ["Nasi putih", "Ga bakar", "Sambel", "Lalapan", "Buah"],
    },
    {
      name: "BAKSO",
      price: "Rp. 18.000,-",
      items: [
        "Bakso",
        "Nasi putih",
        "Tempe",
        "Sambal",
        "Kerupuk",
        "Es teh",
        "Es jeruk/bintang",
        "Kopi Buah + Sandwich",
      ],
    },
  ];

  const nasiBoxOptions = [
    { name: "Nasi Box", price: "Rp. 30.000,-" },
    { name: "Nasi Box", price: "Rp. 30.000,-" },
    { name: "Nasi Box", price: "Rp. 30.000,-" },
    { name: "Nasi Box", price: "Rp. 30.000,-" },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Nasi Box</p>
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
                Nasi Box Premium
                <br />
                <span className="text-primary">Dengan Harga Terjangkau</span>
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Setiap box berisi sajian istimewa untuk berbagai keperluan dan
                kehangatan dalam setiap acara yang anda gelar. Rayakan
                momen-momen istimewa dengan pilihan menu syukuran dari Kencana
                Catering Service. Karena kami menawarkan berbagai menu syukuran
                dalam waktu yang berbantai untuk memenuhi orang-orang tersayang.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=600&fit=crop&q=80"
                alt="Nasi Box"
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
            <h2 className="section-title">Pilihan Menu Nasi Box</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {pkg.name}
                </h3>
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

          {/* Second Row of Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {menuPackages2.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {pkg.name}
                </h3>
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

          {/* Third Row - Special Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {menuPackages3.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {pkg.name}
                </h3>
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

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {menuPackages4.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {pkg.name}
                </h3>
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

          {/* Simple Nasi Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {nasiBoxOptions.map((box, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-cream to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 text-center"
              >
                <h3 className="text-xl font-bold text-brown-800 mb-3">
                  {box.name}
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Menu Paket:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm justify-center">
                      <FaCheckCircle className="text-primary" />
                      <span className="text-gray-700">Nasi</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm justify-center">
                      <FaCheckCircle className="text-primary" />
                      <span className="text-gray-700">Lauk</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm justify-center">
                      <FaCheckCircle className="text-primary" />
                      <span className="text-gray-700">Sambal</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm justify-center">
                      <FaCheckCircle className="text-primary" />
                      <span className="text-gray-700">Kerupuk</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-2xl font-bold text-primary">{box.price}</p>
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
              Keterangan Menu Nasi Box
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                • Harga dapat berubah sewaktu-waktu menyesuaikan harga bahan
                baku. Untuk update harga, dapat menghubungi kami
              </p>
              <p>
                • Minimal pemesanan:{" "}
                <span className="font-bold text-primary">20pax</span>
              </p>
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
          <h2 className="text-4xl font-bold mb-6">
            Tertarik dengan Menu Kami?
          </h2>
          <p className="text-xl mb-8 text-cream">
            Pesan sekarang dan nikmati kelezatan nasi box kami!
          </p>
          <a
            href="https://wa.me/6281284216397?text=Halo%20CateringKu!%20Saya%20tertarik%20dengan%20menu%20Nasi%20Box."
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

export default NasiBox;
