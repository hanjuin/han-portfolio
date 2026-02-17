import React, { memo, useCallback, useEffect, useState } from 'react';
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

const CarouselSlides = memo(function CarouselSlides({ onOpen }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      loop={false}
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
          <button
            type="button"
            className="bg-slate-800 rounded-xl shadow-md shadow-slate-950/60 overflow-hidden hover:shadow-lg transition"
            onClick={() => onOpen(src)}
            aria-label={`Open image ${idx + 1}`}
          >
            <img
              src={src}
              alt={`Image ${idx + 1}`}
              className="w-full h-[180px] object-cover"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

const PhotoCarousel = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = useCallback((src) => setModalImage(src), []);
  const closeModal = useCallback(() => setModalImage(null), []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

  useEffect(() => {
    // Warm image cache in idle time so opening the modal feels instant.
    const preload = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(preload, { timeout: 1000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preload, 300);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 select-none">
      <CarouselSlides onOpen={openModal} />

      <AnimatePresence initial={false}>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Photo preview"
            style={{ willChange: 'opacity' }}
          >
            <motion.div
              className="bg-slate-900 border border-slate-700 p-4 rounded-lg w-full max-w-2xl md:max-w-3xl lg:max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              style={{ willChange: 'transform, opacity' }}
            >
              <img
                src={modalImage}
                alt="Enlarged"
                className="w-full h-auto rounded"
                decoding="async"
              />
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-cyan-300 text-slate-900 rounded hover:bg-cyan-200 float-right"
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
