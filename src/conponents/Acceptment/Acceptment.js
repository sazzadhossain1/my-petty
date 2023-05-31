import React from "react";
import "./Acceptment.css";
import logo1 from "../../images/Acceptment-logo/logo-1.avif";
import logo2 from "../../images/Acceptment-logo/logo-2.avif";
import logo3 from "../../images/Acceptment-logo/logo-3.avif";
import logo4 from "../../images/Acceptment-logo/logo-4.avif";

const Acceptment = () => {
  return (
    <div className="acceptment-div">
      <div>
        <img className="acceptment-img" src={logo1} alt="" />
        <h1>25K</h1>
        <h2>Happy Clients</h2>
      </div>
      <div>
        <img className="acceptment-img" src={logo2} alt="" />
      </div>
      <div>
        <img className="acceptment-img" src={logo3} alt="" />
      </div>
      <div>
        <img className="acceptment-img" src={logo4} alt="" />
      </div>
    </div>
  );
};

export default Acceptment;
