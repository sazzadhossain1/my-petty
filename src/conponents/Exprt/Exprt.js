import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Exprt = ({ exData }) => {
  console.log(exData);
  const { img, facebook, instragram, twite, name, title } = exData;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Exprt;
