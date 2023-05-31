import React from "react";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <div>
      <div className="about-banner-parent-div container">
        <img
          src="https://html.devignedge.com/pettu/images/about-image.png"
          alt=""
        />
        <div className="about-text-div">
          <h3 className="about-text">About Us</h3>
          <h2 className="about-heading">We are best for Your pet care</h2>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam
            quod fuga aliquid incidunt quia iusto. Explicabo libero labore
            adipisci nulla. Vel vitae maxime, neque laudantium a quas doloremque
            ad quidem, odit nesciunt sed fugit, et nulla consequuntur
            praesentium non autem facere tempora assumenda animi? Magnam
            aspernatur minus laboriosam soluta.
          </p>
          <div className="about-single-div-p">
            <p>Behavioral Consultation & Counseling</p>
            <p>Specialized Day Habilitation</p>
            <p>Chicken Dog Treats Pet Supply Pet Food</p>
          </div>
          <button className="about-btn">Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
