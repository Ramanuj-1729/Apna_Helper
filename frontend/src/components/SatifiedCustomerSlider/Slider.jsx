import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z1</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z2</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z3</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z4</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z5</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z6</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z7</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z8</SwiperSlide>
                <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni recusandae inventore, illum quam architecto delectus animi perferendis iusto reprehenderit accusamus consectetur ex voluptate dolorem et natus eius amet quasi!z9</SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
