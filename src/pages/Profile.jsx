import { motion } from "framer-motion";
import { FaCheckCircle, FaBullseye, FaAward } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Profile</p>
        </div>
      </div>

      {/* Hero Profile dengan Layout Sesuai Gambar */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Gambar Kiri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?w=700&h=600&fit=crop&q=80"
                  alt="CateringKu Profile"
                  className="w-full"
                />
                <div className="absolute bottom-8 left-8 bg-primary/90 backdrop-blur-sm text-white px-6 py-3 rounded-2xl">
                  <p className="text-sm font-semibold mb-1">Paduan</p>
                  <p className="text-sm">Budaya & Rasa</p>
                  <div className="mt-2 bg-white text-primary px-4 py-2 rounded-full inline-block">
                    <p className="text-2xl font-bold">100%</p>
                  </div>
                  <p className="text-xs mt-1">Bahan Berkualitas</p>
                </div>
              </div>
            </motion.div>

            {/* Konten Kanan */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary font-semibold mb-2 uppercase">
                — PROFILE
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
                Sekilas Tentang CateringKu
              </h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                CateringKu menyediakan jasa catering di Papua Selatan dan
                sekitarnya. CateringKu merupakan usaha rumahan yang berdiri
                dengan komitmen untuk memberikan layanan catering berkualitas.{" "}
                <span className="font-semibold text-brown-800">
                  Catering menyediakan kebutuhan Catering Nasi Box, Box
                  Syukuran, Tumpeng
                </span>{" "}
                untuk acara event, seminar, rapat, syukuran, gathering dll...
                area yang kami layani meliputi Papua Selatan dan sekitarnya.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visi & Misi + Maksud & Tujuan */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <FaBullseye className="text-white text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-brown-800">
                  Visi & Misi
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Memberikan pelayanan terbaik secara maksimal dalam hal pengadaan
                makanan dan minuman, dengan menggunakan bahan-bahan berkualitas,
                di jamin kehalalannya, serta ditunjang dengan tenaga kerja yang
                profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-secondary/10 to-primary/10 p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <FaAward className="text-white text-3xl" />
                </div>
                <h2 className="text-3xl font-bold text-brown-800">
                  Maksud & Tujuan
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Besar harapan kami agar dapat menjadi perusahaan yang baik serta
                menguntungkan kedua belah pihak. Kami siap membantu dalam
                penyelenggaraan acara untuk kemajuan bagi karyawan
                perusahaan/ibu untuk sehari harinya.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spesialisasi dengan Gambar Makanan */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2 uppercase">
              SPESIALISASI
            </p>
            <h2 className="section-title">Keahlian Kami</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Secara garis besar CateringKu bergerak di bidang pelayanan jasa
              catering, yang meliputi:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pengadaan catering pendukung perusahaan, perkantoran",
                description:
                  "Menyediakan layanan catering harian untuk memenuhi kebutuhan makan karyawan perusahaan dengan menu yang bervariasi dan bergizi.",
                image:
                  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop&q=80",
                icon: "🏢",
              },
              {
                title:
                  "Pelayanan catering untuk acara event, seminar, gathering",
                description:
                  "Melayani berbagai jenis acara dengan paket catering yang dapat disesuaikan dengan budget dan kebutuhan Anda.",
                image:
                  "https://images.unsplash.com/photo-1555244162-803834f70033?w=500&h=400&fit=crop&q=80",
                icon: "🎉",
              },
              {
                title: "Nasi Box, Box Syukuran, Tumpeng",
                description:
                  "Spesialisasi kami dalam menyediakan berbagai pilihan nasi box, box syukuran, dan tumpeng untuk berbagai acara spesial Anda.",
                image:
                  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop&q=80",
                icon: "🍱",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FaCheckCircle className="text-primary text-xl flex-shrink-0 mt-1" />
                    <h3 className="text-lg font-bold text-brown-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2+", label: "Tahun Pengalaman" },
              { number: "500+", label: "Klien Puas" },
              { number: "100+", label: "Menu Tersedia" },
              { number: "24/7", label: "Layanan Konsultasi" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </p>
                <p className="text-cream text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
