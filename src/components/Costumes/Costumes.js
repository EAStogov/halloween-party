import imageList from "../../constants/constants.js";
import { register } from "swiper/element/bundle";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./Costumes.css";
import useResize from "../../hooks/useResize.js";

register();

function Costumes() {
  const windowWidth = useResize();
  return (
    <section className="costumes">
      <h2 className="page__title costumes__title">COSTUMES</h2>
      <p className="costumes__notice">КОСТЮМЫ ОБЯЗАТЕЛЬНЫ</p>
      <p className="costumes__examples">Примеры</p>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={windowWidth > 500 ? 4 : 2}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        className="costumes__slider"
      >
        {imageList.map((image) => {
          return (
            <SwiperSlide className="costumes__slide">
              <img
                className="costumes__image"
                src={image.url}
                alt={image.alt}
                key={image.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Costumes;
