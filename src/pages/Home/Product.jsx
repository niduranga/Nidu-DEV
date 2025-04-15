import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Mousewheel, Pagination } from "swiper/modules";
import { IconButton } from "@mui/material";
import "./style.css";

const productArr = [
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 1",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 2",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 3",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 4",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 5",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 6",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 7",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 8",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 9",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/R.e4304bd55f7de7e7a2f4fd70699a0543?rik=As9ogUrjJXP5LA&pid=ImgRaw&r=0",
    price: "100/-",
    productTitle: "Product Title 10",
  },
];
const Product = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className=" w-full mt-6">
      <h1 className=" text-lg font-bold mb-3">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArr.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      marginBottom: "30px",
    }}
  >
    <div className="w-full">
      <img
        src={imageUrl}
        alt={`Product_unit_${id}`}
        className="w-full object-contain"
      />
      <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
      <h3 className="text-stone-900 font-bold text-lg">Rs.{price}</h3>
    </div>
  </IconButton>
);
