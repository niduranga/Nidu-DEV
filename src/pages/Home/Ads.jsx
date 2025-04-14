import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const Ads = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className=" rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0"
            alt="ad"
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0"
            alt="ad"
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0"
            alt="ad"
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0"
            alt="ad"
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0"
            alt="ad"
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0"
            alt="ad"
            className="w-full object-contain rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ads;
