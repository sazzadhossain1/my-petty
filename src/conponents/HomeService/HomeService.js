import React from "react";
import "./HomeService.css";

const HomeService = ({ data }) => {
  const { description, title, img } = data;
  return (
    <div className="single-service-cart">
      <img className="logo-img" src={img} alt="" />
      <h3 className="service-cart-title">{title}</h3>
      <p className="service-cart-p">{description}</p>
    </div>
  );
};

export default HomeService;
