import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Slider.module.css";
import StarRating from "../StarRating/StarRating";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
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
        {[...Array(4)].map((star, index) => {
          index += 1;
          return (
            <div className="slider">
              <SwiperSlide>
                <div
                  className={`${style.card} flex justify-center items-center`}
                >
                  <img src="images/review-1.png" alt="" />
                  <div className={style.cardRight}>
                    <StarRating />

                    <h3>SURYANSH ASSATI</h3>
                    <p>
                      Awesome service , helper came to my house and helped me in
                      my shifting to another ...
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
