import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Galeri = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&h=800&fit=crop', title: 'Paket Catering 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop', title: 'Nasi Box Spesial' },
    { id: 3, url: 'https://pondokescendol.com/wp-content/uploads/2023/02/tumpeng.png', title: 'Tumpeng Tradisional' },
    { id: 4, url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop', title: 'Menu Box Syukuran' },
    { id: 5, url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop', title: 'Hidangan Spesial' },
    { id: 6, url: 'https://pondokescendol.com/wp-content/uploads/2023/02/tumpeng.png', title: 'Tumpeng Kuning' },
    { id: 7, url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=800&fit=crop', title: 'Paket Catering Premium' },
    { id: 8, url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=800&fit=crop', title: 'Buffet Catering' },
    { id: 9, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop', title: 'Menu Prasmanan' },
    { id: 10, url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop', title: 'Makanan Tradisional' },
    { id: 11, url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=800&fit=crop', title: 'Dessert Box' },
    { id: 12, url: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=800&fit=crop', title: 'Snack Box' }
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-primary py-4">
        <div className="container-custom">
          <p className="text-white">Home → Galeri</p>
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
            <p className="text-primary font-semibold mb-2 uppercase">GALERI</p>
            <h1 className="text-5xl font-bold text-brown-800 mb-6">
              Jelajahi Kreasi Kami
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Setiap hidangan kami adalah karya seni kuliner yang dibuat dengan dedikasi dan keahlian tinggi untuk menghadirkan pengalaman kuliner yang tak terlupakan bagi setiap tamu Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-72"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold">1</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors">2</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors">3</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors">4</button>
            <span className="px-2">...</span>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors">9</button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <h3 className="text-white text-2xl font-bold text-center mt-6">{selectedImage.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-4xl font-bold text-brown-800 mb-6">Tertarik dengan Kreasi Kami?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendiskusikan kebutuhan catering Anda!
          </p>
          <a 
            href="https://wa.me/6281284216397?text=Halo%20CateringKu!%20Saya%20tertarik%20dengan%20layanan%20catering%20Anda." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Galeri;
