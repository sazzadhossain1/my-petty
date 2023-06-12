import React from "react";
import "./ServiceHeader.css";
import { Link } from "react-router-dom";

const ServiceHeader = ({ data }) => {
  //   console.log(data);

  const { title, img, description } = data;
  console.log(title, img, description);
  return (
    <div>
      <div className="service-header-parent-child-div ">
        <img className="service-header-logo" src={img} alt="" />
        <h2 className="service-header-title">{title}</h2>
        <p className="service-header-description"> {description}</p>
        <Link>
          <button className="service-header-booking-btn">Booking Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceHeader;
