import React from "react";
import { Link } from "react-router-dom";
import "./Expret.css";

const Exprt = ({ exData }) => {
  // console.log(exData);
  const { img, facebook, instragram, twite, name, title, id } = exData;
  return (
    <div className="exprt-cart-parent-div ">
      <img className="exprt-person-img" src={img} alt="" />
      <Link id={id} to={`/singleExprt/${id}`}>
        <h2 className="exprt-name">{name}</h2>
      </Link>
      <h4 className="exprt-title">{title}</h4>
      <div className="social-div">
        <Link to={facebook} target="_blank">
          <img
            className="social-img-logo"
            src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
            alt=""
          />
        </Link>
        <Link to={instragram} target="_blank">
          <img
            className="social-img-logo"
            src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw"
            alt=""
          />
        </Link>

        <Link to={twite} target="_blank">
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
