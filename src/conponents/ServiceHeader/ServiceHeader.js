import React from "react";
import "./ServiceHeader.css";

const ServiceHeader = ({ data }) => {
  //   console.log(data);

  const { title, img, description } = data;
  console.log(title, img, description);
  return (
    <div>
      <div>
        <img className="service-header-logo" src={img} alt="" />
        <h2 className="service-header-title">{title}</h2>
        <p className="service-header-description"> {description}</p>
      </div>
    </div>
  );
};

export default ServiceHeader;
