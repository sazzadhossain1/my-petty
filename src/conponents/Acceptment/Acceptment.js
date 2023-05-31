import React from "react";
import "./Acceptment.css";
import logo1 from "../../images/Acceptment-logo/logo-1.avif";
import logo2 from "../../images/Acceptment-logo/logo-2.avif";
import logo3 from "../../images/Acceptment-logo/logo-3.avif";
import logo4 from "../../images/Acceptment-logo/logo-4.avif";

const Acceptment = () => {
  return (
    <div>
      <div className="acceptment-parent-div ">
        <div className="acceptment-single-div">
          <img className="acceptment-img" src={logo1} alt="" />
          <h1 className="acceptment-heading">25K</h1>
          <h2 className="acceptment-title">Happy Clients</h2>
        </div>
        <div className="acceptment-single-div">
          <img className="acceptment-img" src={logo2} alt="" />
          <h1 className="acceptment-heading">2K+</h1>
          <h2 className="acceptment-title">Professionals</h2>
        </div>
        <div className="acceptment-single-div">
          <img className="acceptment-img" src={logo3} alt="" />
          <h1 className="acceptment-heading">12K</h1>
          <h2 className="acceptment-title">Adopted pets</h2>
        </div>
        <div className="acceptment-single-div">
          <img className="acceptment-img" src={logo4} alt="" />
          <h1 className="acceptment-heading">103+</h1>
          <h2 className="acceptment-title">National Award</h2>
        </div>
      </div>
    </div>
  );
};

export default Acceptment;
