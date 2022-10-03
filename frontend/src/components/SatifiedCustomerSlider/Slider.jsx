import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = ({ sliderData }) => {
  const [sliders, setSliders] = useState(sliderData);

  return (
    <>
      <Swiper 
        style={{"--swiper-navigation-size": "30px", "--swiper-pagination-color": "#FFF"}}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {
          sliders.map((slider) => (
            <SwiperSlide key={slider.userId}>
              <div className={`${style.card} flex justify-center items-center`} >
                <img src={slider.customer_img} alt="img" />
                <div className={style.cardRight}>
                  <div className={style.rating}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <h3>{slider.customer_name}</h3>
                  <p>
                    {slider.customer_comment}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Slider;
