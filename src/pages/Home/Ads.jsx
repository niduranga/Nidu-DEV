import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const adsElements = [
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
  },
];

const Ads = () => {
  return (
    <div className="rounded-lg overflow-hidden">
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
        modules={[Autoplay, Pagination, Navigation]}
      >
        {adsElements.map(({ imageUrl }, index) => (
          <SwiperSlide key={index}>
            <AdUnit imageUrl={imageUrl} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ads;

const AdUnit = ({ imageUrl, id }) => (
  <img
    src={imageUrl}
    alt={`Advertisement ${id}`}
    className="w-full object-contain rounded-lg"
  />
);
