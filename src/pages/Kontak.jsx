import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Halo CateringKu!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ANo. HP: ${formData.phone}%0APesan: ${formData.message}`;
    window.open(
      `https://wa.me/6281284216397?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Kontak</p>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold mb-2 uppercase">KONTAK</p>
            <h1 className="text-5xl font-bold text-brown-800 mb-6">
              Siap untuk Memesan atau
              <br />
              Bertanya Lebih Lanjut?
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Kami siap membantu Anda dalam setiap tahap perencanaan acara Anda!
              Jangan ragu untuk menghubungi tim CateringKu sekarang. Dengan
              pengalaman dalam industri kuliner, kami siap membantu Anda dalam
              menjawab pertanyaan, permintaan khusus, atau melakukan pemesanan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brown-800 mb-8">
                Hubungi Kami
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-cream rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-800 mb-2">Alamat</h3>
                    <p className="text-gray-700">
                      Rumah Bapak Sabar
                      <br />
                      Kampung Rawasari RT 01/RW01
                      <br />
                      Distrik Malind, Kabupaten Papua Selatan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-cream rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-800 mb-2">
                      No. Telepon
                    </h3>
                    <a
                      href="tel:+6281284216397"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      +62 812-8421-6397
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-cream rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-800 mb-2">Email</h3>
                    <a
                      href="mailto:info@kencanacatering.com"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      info@kencanacatering.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-xl h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456789!2d140.123456!3d-8.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMjQuNCJTIDE0MMKwMDcnMjQuNCJF!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="CateringKu Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl">
                <h2 className="text-3xl font-bold text-brown-800 mb-6">
                  Kirim Pesan
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary outline-none transition-colors"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary outline-none transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Tuliskan pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-center"
                  >
                    Kirim Pesan Via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
