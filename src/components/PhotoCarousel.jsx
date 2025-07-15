import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
    <div className="container mx-auto px-4 py-6 select-none">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        loop={true}
        slidesPerView={1.5}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full rounded-lg cursor-pointer"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              onClick={() => setModalImage(src)}
            >
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className="w-full h-[180px] object-cover"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-4 rounded-lg w-full max-w-2xl md:max-w-3xl lg:max-w-4xl"
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
