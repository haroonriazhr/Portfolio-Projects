import './Testimonial.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import '/Users/haroo/Desktop/New/node_modules/swiper/swiper.min.css';
import '/Users/haroo/Desktop/New/node_modules/swiper/swiper-bundle.min.css';
import '/Users/haroo/Desktop/New/node_modules/swiper/modules/pagination.min.css';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonials = [
  {
    name: 'Mike Hawkes',
    position: 'Business Manager',
    rating: 5,
    imageSrc: 'https://www.fidelity-group.co.uk/wp-content/uploads/2020/11/trustpilot-icon_Fidelity-Group-1-90x90.png',
    feedback: 'Great company, helpful and always available when required.',
  },
  {
    name: 'Kevin Dowling',
    position: 'Business Manager',
    rating: 5,
    imageSrc: 'https://www.fidelity-group.co.uk/wp-content/uploads/2020/11/trustpilot-icon_Fidelity-Group-1-90x90.png',
    feedback: 'Fidelity is an excellent telecoms provider. The levels of support we receive pre and post-sales are second to none.',
  },
  {
    name: 'Matthew Finn',
    position: 'Business Manager',
    rating: 5,
    imageSrc: 'https://www.fidelity-group.co.uk/wp-content/uploads/2020/11/trustpilot-icon_Fidelity-Group-1-90x90.png',
    feedback: 'Been a hosted telephony customer of Fidelity now for almost a year and delighted with the service.',
  },
  {
    name: 'Neeta Patel',
    position: 'Business Manager',
    rating: 4,
    imageSrc: 'https://www.fidelity-group.co.uk/wp-content/uploads/2020/11/trustpilot-icon_Fidelity-Group-1-90x90.png',
    feedback: 'Marco has helped to improve the services. He kept in touch until we were fully happy.',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="tm-testimonial style-carousel tm-animation move-up animate">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay:5000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-item">
              <div className="testimonial-info-wrap">
                <div className="post-thumbnail">
                  <img src={testimonial.imageSrc} alt={testimonial.name} width="90" height="90" />
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="fa fa-star"></span>
                    ))}
                    {testimonial.rating < 5 && <span className="far fa-star"></span>}
                  </div>
                  <div className="testimonial-main-info">
                    <h6 className="testimonial-name">{testimonial.name}</h6>
                    <div className="testimonial-by-line">{testimonial.position}</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-desc">
                  <p>{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
