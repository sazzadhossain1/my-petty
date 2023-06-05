import React from "react";
import "./About.css";
import AboutBanner from "../AboutBanner/AboutBanner";

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <h1 className="about-banner-heading">About Us</h1>
      </div>
      <AboutBanner></AboutBanner>
    </div>
  );
};

export default About;
