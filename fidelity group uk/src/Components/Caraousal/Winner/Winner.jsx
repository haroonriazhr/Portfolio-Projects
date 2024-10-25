import './Winner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import '/Users/haroo/Desktop/New/node_modules/swiper/swiper.min.css';
import '/Users/haroo/Desktop/New/node_modules/swiper/swiper-bundle.min.css';
import '/Users/haroo/Desktop/New/node_modules/swiper/modules/pagination.min.css';
import { Autoplay, Pagination } from 'swiper/modules';

const CustomSwiper = () => {
  const images = [
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-13-2.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-14-2.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-15-2.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-4-4.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-16-3.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-17-3.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-5-4.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-5-4.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-5-4.webp",
    "https://www.fidelity-group.co.uk/wp-content/uploads/2024/07/Artboard-5-4.webp",
  ];

  return (
    <div className="swiper-wrapper">
      <Swiper
        modules={[ Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay:3000 }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-inner">
              <div className="image-wrap">
                <div className="image">
                  <img src={src} alt={`Slide ${index + 1}`} />
                  <span className="zoom-icon"></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
