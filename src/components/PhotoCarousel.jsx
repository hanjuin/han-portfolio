import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// ✅ Import Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
];

const PhotoCarousel = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="px-4 py-6 max-w-5xl mx-auto w-[576px] select-none">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="py-4 cursor-pointer"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              onClick={() => openModal(src)}
            >
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className="h-30 w-full object-cover"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Modal with AnimatePresence */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalImage}
                alt="Enlarged"
                className="w-full h-auto rounded"
              />
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 float-right"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoCarousel;
