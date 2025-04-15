import React from "react";
import Ads from "./Ads";
import Product from "./product";

const Home = () => {
  return (
    <div className="px-5 py-26 w-full h-screen overflow-y-scroll">
      <Ads />
      <Product title="Tranding products" rowsCount={1} slidesPerView={3} />
    </div>
  );
};

export default Home;
