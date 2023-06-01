import React from "react";
import { Link } from "react-router-dom";
import "./Expret.css";

const Exprt = ({ exData }) => {
  console.log(exData);
  const { img, facebook, instragram, twite, name, title } = exData;
  return (
    <div className="exprt-cart-parent-div ">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <div>
        <Link to={facebook}>
          <img
            className="social-img-logo"
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
            alt=""
          />
        </Link>
        <Link to={instragram}>
          <img
            className="social-img-logo"
            src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw"
            alt=""
          />
        </Link>

        <Link to={twite}>
          <img
            className="social-img-logo"
            src="https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area-thumbnail.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Exprt;
