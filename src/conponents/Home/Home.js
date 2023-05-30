import React from "react";
import "./Home.css";
import Header from "../Headers/Header";
import AboutBanner from "../AboutBanner/AboutBanner";

const Home = () => {
  return (
    <div>
      <div className="home-parent-div">
        <Header></Header>
        <div className="home-banner-text">
          <h4 className="enjoy">We Enjoy Providing</h4>
          <h1 className="home-heading">
            We're Ready to <br /> Keep Your pet
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur aliquam, <br /> hic necessitatibus obcaecati quibusdam
            quisquam dolores debitis ab eligendi! <br /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit pariatur aliquam, <br />{" "}
            hic necessitatibus obcaecati quibusdam quisquam dolores debitis ab
            eligendi!
          </p>
          <button className="contact-btn">Contact Now</button>
        </div>
      </div>
      <AboutBanner></AboutBanner>
    </div>
  );
};

export default Home;
