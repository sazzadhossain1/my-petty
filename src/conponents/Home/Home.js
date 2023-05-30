import React from "react";
import "./Home.css";
import Header from "../Headers/Header";
import AboutBanner from "../AboutBanner/AboutBanner";
import HomeService from "../HomeService/HomeService";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const getApi = useLoaderData();
  //   console.log(getApi);
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
      <div>
        <h3 className="service-title">Service</h3>
        <h2 className="service-heading">We Provide Services</h2>
        <div className="map-div container">
          {getApi.map((data) => (
            <HomeService data={data} key={data.id}></HomeService>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
